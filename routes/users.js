'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
const Cohort = require('../models/cohort');

router.get('/', (req, res, next) => {
  User.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

router.post('/user-create', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  // const cohort = req.body.cohortId;
  const cohortId = req.body.cohortId._value.id;

  console.log(cohortId);

  if (!email || !password || !role) {
    return res.status(422).json({ code: 'validation' });
  }

  User.findOne({ email }, 'email')
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({ code: 'email-not-unique' });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        email,
        password: hashPass,
        role,
        firstName,
        lastName
      });

      return newUser.save()
        .then((user) => {
          const newUser = mongoose.Types.ObjectId(user.id);
          return Cohort.findOneAndUpdate(cohortId, { $push: { students: newUser } }).exec();
        })
        .then(() => {
          res.status(200).json(cohortId);
        });
    })
    .catch(next);
});

module.exports = router;
