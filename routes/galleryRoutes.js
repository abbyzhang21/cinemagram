const express = require('express');
const Router = express.Router();

const gallery = require('../db/gallerydb.js');
// const DS_gallery = new gallery();




//get home page
Router.get('/', (req, res) => {
    console.log('is this working.........?');
    // const gallery = DS_gallery.all()
    // res.render('galleries', { gallery });
    res.send('hellllllllo');
})

//get gallery detail
Router.get('/gallery/:id', (req, res) => {
    res.send('gallery detail');
    console.log('gallery detail');
})

//get gallery item form
Router.get('/gallery/new', (req, res) => {
    res.send('new gallery item form');
    console.log('new gallery item form');
})

//get edit form
Router.get('/gallery/:id/edit', (req, res) => {
    res.send('edit gallery detail form');
    console.log('edit gallery detail form');
})

//create a gallery photo
Router.post('/gallery', (req, res) => {
    const item = req.body;
    console.log('req.body: ', req.body)
    res.json(item);
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