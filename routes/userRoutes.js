const express = require('express');
const Router = express.Router();

const users = require('../db/gallerydb.js');

const Users = require('../knex/models/Gallery.js')

Router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = Router;