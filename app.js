const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//setup connection with server
mongoose.connect('mongodb://localhost/routeGuardian', { useNewUrlParser:true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//get routes for the api
const artistRoute = require('./routes/points');

//when you search for /points handle response in artist router
app.use('/points' , artistRoute);

//show endpoints when on homepage
app.get('/', function(req, res){
    res.status(200).json({
        message: "it works very nice!",
        endPoints: [
            {
                method: "GET",
                endPoints:[
                    "/point", 
                ]
            },
            {
                method: "POST",
                endPoints: [
                    '/test'
                ]
            }
        ]
    });
});

module.exports = app