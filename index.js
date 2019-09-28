const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const emprout = require('./routes/employ');
require('dotenv/config');


//middleware
app.use(bodyParser.json());   
app.use('/employ', emprout);

//db connectio
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('DB COnnected');
})

app.listen(3001, () => console.log('Server listen on port 3001'));