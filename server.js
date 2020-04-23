const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());


//DB config 
const db = require('./config/keys').uri;

//connect to mongo
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port ${port}`));
