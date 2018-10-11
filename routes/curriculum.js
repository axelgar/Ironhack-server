'use strict';

const express = require('express');
const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId;

const Curriculum = require('../models/curriculum');

router.get('/', (req, res, next) => {
  Curriculum.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

// router.post('/create', (req, res, next) => {
//   // ----- TODO -----//
//   const { flavour, topping } = req.body;
//   if (!flavour || !topping) {
//     return res.status(422).json({ code: 'unprosessable-entity' });
//   }
//   const curriculum = new Curriculum(req.body);
//   Curriculum.save()
//     .then(() => {
//       res.status(200).json(curriculum);
//     })
//     .catch(next);
// });

// router.delete('/:id', (req, res, next) => {
//   const id = req.params.id;
//   if (!id || !ObjectId.isValid(id)) {
//     res.status(404).json({ code: 'not-found' });
//   }
//   Cohort.remove({ _id: id })
//     .then(() => {
//       res.json({ code: 'cohort deleted' });
//     })
//     .catch(next);
// });

module.exports = router;