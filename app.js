const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const app = express();
const alienRouter = require('./routers/alien');
const employeRouter = require('./routers/employe');

mongoose.connect(url, {useNewUrlParser : true})
const connect = mongoose.connection

connect.on('open', () =>{
    console.log('connected...');
})

app.use(express.json());    

app.use('/alien', alienRouter);
app.use('/employe', employeRouter);

app.listen('9000', () =>{
    console.log('listening');
})