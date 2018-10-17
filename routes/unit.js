'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const Unit = require('../models/unit');
const Day = require('../models/day');
const Cohort = require('../models/cohort');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  return Unit.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  return Unit.findById(id)
    .then((unit) => {
      res.status(200).json(unit);
    })
    .catch(next);
});

// router.delete('/:id', (req, res, next) => {
//   if (!req.session.currentUser) {
//     return res.status(401).json({ code: 'unauthorized' });
//   }
//   const id = req.params.id;
//   if (!id || !ObjectId.isValid(id)) {
//     res.status(404).json({ code: 'not-found' });
//   }
//   const promiseArray = [];

//   Unit.deleteOne({ _id: id })
//     .then(() => {
//       Cohort.find({ 'parkingLot._id': id })
//         .then((cohorts) => {
//           cohorts.forEach((cohort) => {
//             promiseArray.push(cohort.update({ $pull: { parkingLot: { _id: id } } }));
//           });
//           Promise.all(promiseArray)
//             .then(() => res.status(200).json({ code: 'unit deleted' }));
//         });
//     })
//     .catch(next);
// });

router.put('/transfer/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const mongoose = require('mongoose');
  const unitId = mongoose.mongo.ObjectID(req.body.unit._id);
  const unit = req.body.unit;
  if (!unitId || !ObjectId.isValid(unitId)) {
    res.status(404).json({ code: 'not-found' });
  }
  const sourceList = req.body.from;
  const targetList = req.body.to;
  const update = req.body.unit;
  let newCard = true;
  Unit.findByIdAndUpdate(unitId, update)
    .then(() => {
      return Unit.findByIdAndUpdate(unitId, { $set: { list: targetList } }, { new: true });
    })
    .then(() => {
      return Cohort.findById(sourceList);
    })
    .then((result) => {
      if (result) {
        return Cohort.findByIdAndUpdate(sourceList, { $pull: { parkingLot: { _id: unitId } } }).exec()
          .then(() => {
            return Day.findById(targetList);
          })
          .then((result) => {
            result.units.forEach((unit) => {
              if (unit === unitId) {
                newCard = false;
                return newCard;
              }
            });
            if (newCard) {
              return Day.findByIdAndUpdate(targetList, { $push: { units: unit } }).exec()
                .then(list => res.status(200).json({ message: 'unit successfully updated', list: list }));
            } else {
              res.status(422).json({ code: 'unprosessable-entity' });
            }
          });
      } else {
        return Day.findByIdAndUpdate(sourceList, { $pull: { units: { _id: unitId } } }).exec()
          .then((results) => {
            return Cohort.findById(targetList);
          })
          .then((result) => {
            if (result) {
              result.parkingLot.forEach((unit) => {
                if (unit.equals(unitId)) {
                  newCard = false;
                }
              });
              if (newCard) {
                return Cohort.findByIdAndUpdate(targetList, { $push: { parkingLot: unit } }).exec()
                  .then(list => res.status(200).json({ message: 'unit successfully updated', list: list }));
              } else {
                res.status(422).json({ code: 'unprosessable-entity' });
              }
            } else {
              return Day.findById(targetList)
                .then((result) => {
                  result.units.forEach((unit) => {
                    if (unit === unitId) {
                      newCard = false;
                      return newCard;
                    }
                  });
                  if (newCard) {
                    return Day.findByIdAndUpdate(targetList, { $push: { units: unit } }).exec()
                      .then(list => res.status(200).json({ message: 'unit successfully updated', list: list }));
                  } else {
                    res.status(422).json({ code: 'unprosessable-entity' });
                  }
                });
            }
          });
      }
    })
    .catch(error => next(error));
});

router.put('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const unitId = req.params.id;
  if (!unitId || !ObjectId.isValid(unitId)) {
    res.status(404).json({ code: 'not-found' });
  }
  const update = req.body;
  const options = { new: true };
  Unit.findByIdAndUpdate(unitId, update, options)
    .then(unit => {
      res.status(200).json(unit);
    })
    .catch(error => next(error));
});

router.post('/unit-create', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const title = req.body.unit.title;
  const category = req.body.unit.category;
  const subCategory = req.body.unit.subCategory;
  const module = req.body.unit.module;
  const duration = req.body.unit.duration;

  const cohortId = req.body.cohortId;

  if (!title || !category || !subCategory || !module || !duration) {
    return res.status(422).json({ code: 'validation' });
  }

  return Unit.findOne({ title }, 'title')
    .then((unitExists) => {
      if (unitExists) {
        return res.status(422).json({ code: 'title-not-unique' });
      }
      const newUnit = Unit({
        title,
        category,
        subCategory,
        module,
        duration
      });
      return newUnit.save()
        .then((unit) => {
          return Cohort.findOneAndUpdate(cohortId, { $push: { parkingLot: unit } }).exec();
        })
        .then(() => {
          res.status(200).json(cohortId);
        });
    })
    .catch(next);
});

module.exports = router;
