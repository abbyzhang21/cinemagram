const express = require('express');
const Router = express.Router();

const gallery = require('../db/gallerydb.js');
const DS_gallery = new gallery();

const Gallery = require('../knex/models/Gallery.js')

Router.get('/login', (req, res) => {
    res.render('loginForm')
})

//get home page
Router.get('/', (req, res) => {

    Gallery
        .fetchAll()
        .then(result => {
            const item = result.serialize();
            // console.log('result: ', result)
            res.render('index', { item })
        })
        .catch(err => {
            console.log('error: ', err)
            res.json(err)
        })
})

//get gallery listing
Router.get('/gallery', (req, res) => {

    Gallery
        .fetchAll()
        .then(result => {
            const item = result.serialize();
            console.log('result: ', result)
            // res.json(result.serialize())
            res.render('listing', { item })
        })
        .catch(err => {
            console.log('error: ', err)
            res.json(err)
        })
})
//get gallery detail
Router.get('/gallery/:id', (req, res) => {
    const { id } = req.params;
    Gallery
        .where({ id })
        .fetchAll()
        .then(result => {
            const item = result.serialize()[0];
            // res.json(result.serialize())
            res.render('detail', { item })
        })
        .catch(err => {
            res.json(err)
        })
})

//get gallery item form
Router.get('/gallery/new', (req, res) => {
    // res.render('form');
    res.send('new gallery item form');
})

//get edit form
Router.get('/gallery/:id/edit', (req, res) => {
    // res.render('edit_form')
    res.send('edit gallery detail form');
})

//create a gallery photo
Router.post('/gallery/new', (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.body.title: ', req.body.title)

    const galleryItem = {
        title: req.body.title,
        author: req.body.author,
        link: req.body.link,
        description: req.body.description
    }

    Gallery
        .forge(galleryItem)
        .save()
        .then(result => {
            res.json(result)
            console.log('result: ', result)
        })
        .catch(err => {
            console.log('error: ', err)
            res.json(err)
        })
    // const item = req.body;
    // console.log('req.body: ', req.body)
    // res.json(item);
})

//update gallery item
Router.put('/gallery/:id', (req, res) => {
    const item = req.body;
    console.log('req.body: ', req.body)
    res.json(item);
})

//delete gallery photo
Router.delete('/gallery/:id', (req, res) => {
    console.log('deleted gallery photo....');
});

module.exports = Router;