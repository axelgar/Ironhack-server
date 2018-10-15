'use strict';

require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
const Cohort = require('../models/cohort');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
  const cohortId = req.body.cohortId._value.id;

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
          if (user.role === 'student') {
            return Cohort.findOneAndUpdate(cohortId, { $push: { students: newUser } }).exec();
          } else if (user.role === 'ta') {
            return Cohort.findOneAndUpdate(cohortId, { $push: { tas: newUser } }).exec();
          } else if (user.role === 'teacher') {
            return Cohort.findOneAndUpdate(cohortId, { $push: { teacher: newUser } }).exec();
          } else {
            return res.status(422).json({ code: 'adding not possible' });
          }
        })
        .then(() => {
          const msg = {
            to: email,
            from: 'no-reply@ironhack.com',
            subject: 'Welcome to Ironhack :name',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
            templateId: 'd-6410714675c14f29b5ed39816bc7334d',
            dynamic_template_data: {
              subject: 'hello Ironhacker',
              name: firstName,
              username: email,
              password: password
            }
          };
          sgMail.send(msg);
          res.status(200).json(cohortId);
        });
    })
    .catch(next);
});

module.exports = router;
