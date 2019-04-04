const express = require('express');
const getJsonFile = require('load-json-file');
const router = express.Router();
const Point = require('../models/pointModel');
//handling get request for /artists
router.get('/', (req, res , next) => {

    getJsonFile('./test.json').then((json) => {
        console.log(json);
        res.status(200).send(json);
    });

    // To return all points
    // Point.find({}).then((points) => {
    //     res.status(200).send(points);
    // });
});

//handling post request for /artist
router.post('/' , (req, res, next) => {
    var point = new Point(req.body);
    point.save((e) => {
        point.save();
        res.status(201).send(req.body);
    })
})


module.exports = router;