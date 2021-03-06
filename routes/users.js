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

  if (!cohortId || !ObjectId.isValid(cohortId)) {
    res.status(404).json({ code: 'not-found' });
  }

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
        lastName,
        cohort: cohortId
      });

      return newUser.save()
        .then((user) => {
          const newUser = mongoose.Types.ObjectId(user.id);
          if (user.role === 'student') {
            return Cohort.findOneAndUpdate({ _id: cohortId }, { $push: { students: newUser } });
          } else if (user.role === 'ta') {
            return Cohort.findOneAndUpdate({ _id: cohortId }, { $push: { tas: newUser } });
          } else if (user.role === 'teacher') {
            return Cohort.findOneAndUpdate({ _id: cohortId }, { $push: { teacher: newUser } });
          } else {
            return res.status(422).json({ code: 'adding not possible' });
          }
        })
        .then(() => {
          const msg = {
            to: email,
            from: 'noreply@ironhack.com',
            subject: 'Welcome to Ironhack :name',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
            templateId: 'd-6410714675c14f29b5ed39816bc7334d',
            dynamic_template_data: {
              subject: 'Hello Ironhacker',
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

router.get('/settings', (req, res, next) => {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  User.findById(user._id)
    .then((result) => {
      const user = { user: result };

      return res.status(200).json(user);
    })
    .catch(next);
});

router.put('/settings', (req, res, next) => {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
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

router.post('/edit', uploadCloud.single('file'), function (req, res, next) {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.status(404).json({ code: 'not-found' }); // todo not autorised
  }
  const updates = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    description: req.body.description,
    linkedin: req.body.linkedin,
    github: req.body.github,
    profilePic: req.file.secure_url
  };
  User.findOneAndUpdate({ _id: user._id }, { $set: updates }, { new: true })
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch(next);
});

router.put('/add-project', (req, res, next) => {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const update = req.body;
  const options = { new: true };
  User.findByIdAndUpdate(user._id, { $push: { projects: update } }, options)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => next(error));
});

router.delete('/delete-project/:id', (req, res, next) => {
  const user = req.session.currentUser;
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  const projectId = mongoose.mongo.ObjectID(id);
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  const options = { new: true };
  User.findByIdAndUpdate(user._id, { $pull: { projects: { _id: projectId } } }, options)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => next(error));
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
        return res.status(404).json({ code: 'not-found' });
      }
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  User.remove({ _id: id })
    .then(() => {
      res.json({ message: 'user deleted' });
    })
    .catch(next);
});

module.exports = router;
