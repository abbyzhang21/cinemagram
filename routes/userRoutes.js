const express = require('express');
const Router = express.Router();

const users = require('../db/gallerydb.js');

const Users = require('../knex/models/Users.js')

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  console.log('serializeUser: ', user)
  done(null, {
    username: user.username,
    encryptionkey: 'randomData'
  })
})

passport.deserializeUser((user, done) => {
  console.log('deserializingUser: ', user)
  Users
    .where({ username: user.username })
    .fetch()
    .then(user => {
      user = user.toJSON()
      done(null, user)
    })
    .catch(err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
  console.log('local strategy is being called')
  Users
    .where({ username })
    .fetch()
    .then(user => {
      console.log('user in local strategy: ', user)
      user = user.toJSON()
      bcrypt.compare(password, user.password)
        .then(res => {
          if (res) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
    })
    .catch(err => {
      done(null, false)
    })
}))

// passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
//   Users
//     .where({ username })
//     .then(user => {
//       return bcrypt.compare(password, user.password)
//     })
//     .then(result => {
//       if (result) {
//         done(null, user)
//       } else {
//         done(null, false)
//       }
//     })
//     .catch(err => {
//       done(err)
//     })
// }))

const SALT_ROUND = 12;

Router.get('/login', (req, res) => {
  res.render('login')
})

Router.get('/register', (req, res) => {
  res.render('register')
})

Router.post('/register', (req, res) => {
  const { username, password } = req.body
  console.log('username, password: ', username, password)

  bcrypt.genSalt(SALT_ROUND)
    .then(salt => {
      console.log('salt', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
      console.log('hash', hash)
      return Users
        .forge({ username, password: hash })
        .save()
    })
    .then(user => {
      user = user.toJSON()
      res.redirect('/gallery')
    })
    .catch(err => {
      console.log('error', err)
      res.json(err)
    })

})

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

// Router.post('/auth/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
//   // grab the user on record
//   // compare req.body.password to password on record

//   res.redirect('YAY IM IN!!!!')
// })

Router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('loggedout')
})

Router.delete('/delete', (req, res) => {

})

module.exports = Router;