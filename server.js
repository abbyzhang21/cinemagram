const express = require('express');
const app = express();
const PORT = process.env.PORT || 7575;
const knex = require('./knex/knex.js');
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const galleryRoutes = require('./routes/galleryRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.static('public'));
app.use(bp.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', galleryRoutes)
// app.use('/', userRoutes)



app.listen(PORT, () => {
    console.log('Server listen on: ', PORT)
});