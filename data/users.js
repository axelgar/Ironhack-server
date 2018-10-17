'use strict';

const users = [{
  email: 'axel.garcia94@gmail.com',
  password: '$2b$10$ECbqNtwfUDxte2bWui2bcOm5Fi1bZM6wLkxM0HmbSzTwkxRbZjuYK',
  role: 'admin',
  firstName: 'Axel',
  lastName: 'Garcia',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539789110/0-10.jpg'
}, {
  email: 'franci.ropolo@gmail.com',
  password: '$2b$10$gNJTc/sva5.fNuTbqh4WQuW/hEa1qc.PoirLO2MKxQuYlcz.Nos7i',
  role: 'admin',
  firstName: 'Franci',
  lastName: 'Ropolo',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539789110/bn.jpg'
}, {
  email: 'jonathan@spielmannsbilder.de',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'admin',
  firstName: 'Jonathan',
  lastName: 'Skudlik',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539789110/0-11.jpg'
}, {
  email: 'teacher@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'teacher',
  firstName: 'Andre',
  lastName: 'Torgal',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-5.jpg'
}, {
  email: 'teacher@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'teacher',
  firstName: 'Thor',
  lastName: 'Jubera',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-6.jpg'
}, {
  email: 'ta1@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Filipe',
  lastName: 'Rainho',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-2.jpg'
}, {
  email: 'ta2@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Seba',
  lastName: 'Nugnez',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-1.jpg'
}, {
  email: 'ta3@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Byron',
  lastName: 'Bacusoy',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788405/0-7.jpg'
}, {
  email: 'ta4@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Alex',
  lastName: 'Rodriguez',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0.jpg'
}, {
  email: 'ta5@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Rapha',
  lastName: 'Montenegro',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-4.jpg'
}, {
  email: 'ta5@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'ta',
  firstName: 'Anna',
  lastName: 'Fredriksson',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788404/0-3.jpg'
}, {
  email: 'staff1@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'staff',
  firstName: 'Marcel',
  lastName: 'Carneiro',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788704/0-8.jpg'
}, {
  email: 'staff1@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'staff',
  firstName: 'Irene',
  lastName: 'de Mas Castanyer',
  profilePic: 'https://res.cloudinary.com/dzzqvtry0/image/upload/v1539788704/0-9.jpg'
}, {
  email: 'student1@ironhack.com',
  password: '$2b$10$4PBatLxbJMbxg.9lrdee4ewBiMmSwjU8gD9myZqgyTQ91yqg/XPiq',
  role: 'student',
  firstName: 'Diva',
  lastName: 'SuperDoggy'
}];

module.exports = users;
