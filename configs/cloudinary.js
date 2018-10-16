'use strict';

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
const bcrypt = require('bcrypt');
const saltRounds = 10;

cloudinary.config({
  cloud_name: 'dzzqvtry0',
  api_key: '658849848198333',
  api_secret: 'TapuFUJp8Li4tfeNuYhGreIEfEE'
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'switcheroo',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, bcrypt.hashSync(`${Math.floor(Math.random() * 300000)}`, saltRounds));
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
