'use strict';

const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  return Message.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

router.post('/create-message', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const room = req.body.room;
  const message = req.body.message;
  const user = req.body.user;
  const picture = req.body.picture;

  if (!room || !message || !user || !picture) {
    return res.status(422).json({ code: 'validation' });
  }
  const newMessage = Message({
    room,
    message,
    user,
    picture
  });
  newMessage.save()
    .then(() => {
      res.status(200).json(newMessage);
    })
    .catch(next);
});

module.exports = router;
