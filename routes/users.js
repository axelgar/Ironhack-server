'use strict';

require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const mongoose = require('mongoose');
const uploadCloud = require('../configs/cloudinary.js');
const saltRounds = 10;

const User = require('../models/user');
const Cohort = require('../models/cohort');
const ObjectId = require('mongoose').Types.ObjectId;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
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

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  User.findById(id)
    .then((user) => {
      if (!user) {
        console.log(user);
        return res.status(404).json({ code: 'not-found' });
      }
      console.log(user);
      res.status(200).json(user);
    })
    .catch(next);
});

router.get('/settings/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    return res.status(404).json({ code: 'not-found' });
  }
  User.findById(id)
    .then((result) => {
      const user = { user: result };

      return res.status(200).json(user);
    })
    .catch(next);
});

router.put('/settings/:id', (req, res, next) => {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    return res.status(404).json({ code: 'not-found1' });
  }
  const { currentPassword, newPassword } = req.body;
  const validPassword = user.password;

  const salt = bcrypt.genSaltSync(saltRounds);
  const oldPassword = bcrypt.hashSync(validPassword, salt);

  if (!oldPassword || !validPassword) {
    return res.status(404).json({ code: 'not-found2' });
  }

  if (bcrypt.compareSync(currentPassword, validPassword)) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    User.findOneAndUpdate({ _id: user._id }, { password: hashedPassword }, { new: true })
      .then((result) => {
        req.session.currentUser = result;
        return res.status(200).json({ code: 'password updated' });
      })
      .catch(next);
  } else {
    return res.status(404).json({ code: 'not-found3' });
  }
});

router.post('/edit/:id', uploadCloud.single('file'), function (req, res, next) {
  if (!req.session.currentUser) {
    return res.status(404).json({ code: 'not-found' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    return res.status(404).json({ code: 'not-found' });
  }
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    description: req.body.description,
    profilePic: req.file.url
  };
  User.findOneAndUpdate({ _id: id }, { $set: newUser })
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
