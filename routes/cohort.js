'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const Cohort = require('../models/cohort');
const Day = require('../models/day');
const Curriculum = require('../models/curriculum');
const Unit = require('../models/unit');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  Cohort.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

router.post('/create', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const { type, location, language, startDate, teacher } = req.body;
  if (!type || !location || !language || !startDate || !teacher) {
    return res.status(422).json({ code: 'unprosessable-entity' });
  }

  const days = [];

  let startDay = new Day({ date: req.body.startDate });
  let firstDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 0 * 86400000) });
  firstDayAm.save();
  // .then((result) => {
  //   const promisesOfUpdatingUnitId = data.map((result.units) => updateUnitIds(days.units));
  //   return Promise.all(promisesOfUpdatingUnitId);
  // });
  days.push(firstDayAm);

  for (let ix = 0; ix < 4; ix++) {
    let nextDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 86400000) });
    nextDayAm.save();
    days.push(nextDayAm);
  }

  // let newDate1 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 2 * 86400000) });

  // for (let ix = 0; ix < 5; ix++) {
  //   let nextDayAm = new Day({ date: newDate1.date.setTime(newDate1.date.getTime() + 1 * 86400000) });
  //   nextDayAm.save();
  //   days.push(nextDayAm);
  // }

  // for (let iy = 0; iy < 7; iy++) {
  //   let newDate2 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 7 * 86400000) });

  //   for (let ix = 0; ix < 5; ix++) {
  //     let nextDayAm = new Day({ date: newDate2.date.setTime(newDate2.date.getTime() + 1 * 86400000) });
  //     nextDayAm.save();
  //     days.push(nextDayAm);
  //   }
  // }

  const category = req.body.type;
  return Curriculum.findOne({ type: category })
    .populate('units')
    .then((result) => {
      if (!result) {
        res.status(404).json({ code: 'not-found' });
      }
      const newUnits = [];
      result.units.forEach((item) => {
        if (item.subCategory !== 'break') {
          const unit = new Unit({
            mandatory: item.mandatory,
            category: item.category,
            subCategory: item.subCategory,
            title: item.title,
            module: item.module,
            links: item.links,
            learningObjectives: item.learningObjectives,
            duration: item.duration,
            description: item.description,
            day: item.day,
            position: item.position
          });
          unit._id = mongoose.Types.ObjectId();
          unit.save();
          newUnits.push(unit);
        }
      });
      const cohort = new Cohort({
        teacher: req.body.teacher,
        tas: req.body.tas,
        location: req.body.location,
        type: req.body.type,
        language: req.body.language,
        startDate: req.body.startDate,
        parkingLot: newUnits,
        days: days
      });
      return cohort.save()
        .then(() => {
          return cohort.populate('days');
        })
        // .then(() => {
      // return Curriculum.find({ category: 'break' });
      // result.units.forEach(() => {

      // });
        // })
        .then(() => {
          const newBreaks = [];
          result.units.forEach((unit, index) => {
            if (unit.subCategory === 'break') {
              const breakNew = new Unit({
                mandatory: unit.mandatory,
                category: unit.category,
                subCategory: unit.subCategory,
                title: unit.title,
                module: unit.module,
                links: unit.links,
                learningObjectives: unit.learningObjectives,
                duration: unit.duration,
                description: unit.description,
                day: unit.day,
                position: unit.position
              });
              breakNew._id = mongoose.Types.ObjectId();
              breakNew.position = 10000 + (index * 1000);
              breakNew.save();
              newBreaks.push(breakNew);
            }
          });
          cohort.days.forEach((day) => {
            newBreaks.forEach((result) => {
              day.units.push(result);
              return day.save();
            });
          });
        })
        .then(() => {
          res.status(200).json(cohort);
        });
    })
    .catch(next);
});

// function updateUnits (unit, curriculum, index) {
//   return Unit.findOne({ title: unit })
//     .then((unit) => {
//       if (!unit) {
//         throw new Error('Unknown unit ' + unit);
//       }
//       curriculum.units[index] = unit._id;
//     });
// }
// function updateUnitIds (curriculum) {
//   const promisesOfUpdatingOwnerId = curriculum.units.map((unit, index) => updateUnits(unit, curriculum, index));
//   return Promise.all(promisesOfUpdatingOwnerId);
// }

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    return res.status(404).json({ code: 'not-found' });
  }
  Cohort.findById(id)
    .populate('students')
    .populate('tas')
    .populate('teacher')
    .populate({ path: 'days', populate: { path: 'units' } })
    .then((cohort) => {
      if (!cohort) {
        return res.status(404).json({ code: 'not-found' });
      }
      res.status(200).json(cohort);
    })
    .catch(next);
});

// router.put('/:id/add', (req, res, next) => {
//   const cohortId = req.params.id;
//   const update = req.body;
//   const options = { new: true };
//   Cohort.findByIdAndUpdate(cohortId, update, options)
//     .then(cohort => {
//       if (cohort) res.status(200).json(cohort);
//       else res.status(404).json({ message: 'cohort not found' });
//     })
//     .catch(next);
// });

// router.put('/:id/remove', (req, res, next) => {
//   const cohortId = req.params.id;
//   const update = req.body;
//   const options = { new: true };
//   Cohort.findByIdAndUpdate(cohortId, update, options)
//     .then(cohort => {
//       if (cohort) res.status(200).json(cohort);
//       else res.status(404).json({ message: 'cohort not found' });
//     })
//     .catch(next);
// });
router.delete('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  Cohort.remove({ _id: id })
    .then(() => {
      res.json({ message: 'cohort deleted' });
    })
    .catch(next);
});

module.exports = router;
