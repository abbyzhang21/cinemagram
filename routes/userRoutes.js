const express = require('express');
const Router = express.Router();

const users = require('../db/gallerydb.js');

const Users = require('../knex/models/Users.js')

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

Router.get('/login', (req, res) => {
  console.log('req.session: ', req.session)
  if (!req.session.viewCount) {
    req.session.viewCount = 1
  } else {
    req.session.viewCount++
  }
  res.render('login')
})

Router.get('/login/protected', (req, res) => {
  res.send('this is a protected route')
})

Router.post('/register', (req, res) => {
  const { username, password } = req.body
  console.log('username, password: ', username, password)
  Users
    .forge({ username, password })
    .save()
    .then(result => {
      if (result) {
        res.send('user created!')
      } else {
        res.send('user already exits')
      }
    })
    .catch(err => {
      console.log('error: ', err)
      res.send(err)
    })
})

// Router.post('/auth/register', (req, res) => {
//   const {username, password} = req.body
//   console.log('username, password: ', username, password)


// })

Router.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log('username, password: ', username, password)
  Users
    .where({ username })
    .fetch()
    .then(user => {
      if (password === user.attributes.password) {
        res.send('user authenticated!')
        // res.redirect('/')
      } else {
        res.send('incorrect password')
        // res.redirect('/login');
      }

    })
    .catch(err => {
      console.log('error: ', err)
      res.send(err)
    })
})

Router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('loggedout')
})

Router.delete('/delete', (req, res) => {

})

module.exports = Router;