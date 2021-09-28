const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// methodeOverride pour avoir les autres méthode put delete etc car en html il y a que get et post
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://admin:admin123@todoapp.plau2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.set('view engine','pug');


const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}.`));

