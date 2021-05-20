const express = require("express");

const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./back-end/routes/');

const app = express();

app.use(bodyParser.json());

app.use('/api', api);

if( process.env.NODE_ENV === 'production' ){

    app.use(express.static('frontend/build'));

    const path = require('path');
    app.get('*', (req,res) =>{
        res.sendfile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    } )
}

app.listen(process.env.PORT);