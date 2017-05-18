const express = require('express');
const bodyParser = require('body-parser');
let app = express();                   

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.json('Hello');
});

app.get('/about', (req,res) => {
  res.send('About');
});

app.post('/post', (req,res) => {
  res.status(201).json(req.body.name);
});


module.exports = app;