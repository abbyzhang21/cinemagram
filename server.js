const express = require('express');
const app = express();
const PORT = process.env.PORT || 7575;
const bp = require('body-parser');


app.use(express.static('public'));
app.use(bp.urlencoded({ extended: true }));

//get home page
app.get('/', (req, res) => {
    res.send('hello world!!!');
    console.log('Hello world!!');
})

//get gallery detail
app.get('/gallery/:id', (req, res) => {
    res.send('gallery detail');
    console.log('gallery detail');
})

//get gallery item form
app.get('/gallery/new', (req, res) => {
    res.send('new gallery item form');
    console.log('new gallery item form');
})

//get edit form
app.get('/gallery/:id/edit', (req, res) => {
    res.send('edit gallery detail form');
    console.log('edit gallery detail form');
})

//create a gallery photo
app.post('/gallery', (req, res) => {
    const item = req.body;
    console.log('req.body: ', req.body)
    res.json(item);
})

//update gallery item
app.put('/gallery/:id', (req, res) => {
    const item = req.body;
    console.log('req.body: ', req.body)
    res.json(item);
})

//delete gallery photo
app.delete('/gallery/:id', (req, res) => {
    console.log('deleted gallery photo....');
})

app.listen(PORT, () => {
    console.log('Server listen on: ', PORT)
});