const express = require('express');
const helpers = require("./helpers")
const ExpressError = require('./exp_error')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//mean
app.get('/mean', function (req, res, next) {
    try {
        // check if numbers included in query string
        if(!req.query["nums"]) throw new ExpressError ('Requires variable "nums" in query string')

        let nums = req.query["nums"]

        nums = nums.split(',')
        

        //check if each element of nums is a number
        for( let x of nums){
            if  (!Number.isFinite(parseInt(x))) {
                throw new ExpressError(`${x} is not a number`,400)
            } else{
                x = parseInt(x)
            }
        }

        let mean = helpers.mean(nums)

        return res.json({ operation: "mean", nums: nums, result: mean })
    } catch (err) {
        return next(err);
    }
});

//median
app.get('/median', function (req, res, next) {
    try {
        if(!req.query["nums"]) throw new ExpressError ('Requires variable "nums" in query string')

        let nums = req.query["nums"]

        nums = nums.split(',')

        //handle not a number cases

        for( let x of nums){
            if  (!Number.isFinite(parseInt(x))) {
                throw new ExpressError(`${x} is not a number`,400)
            } else{
                x = parseInt(x)
            }
        }

        let median = helpers.median(nums)

        return res.json({ operation: "median", nums: nums, result: median })
    } catch (err) {
        return next(err);
    }
});

//mode
app.get('/mode', function (req, res, next) {
    try {
        if(!req.query["nums"]) throw new ExpressError ('Requires variable "nums" in query string')

        let nums = req.query["nums"]

        nums = nums.split(',')


        for( let x of nums){
            if  (!Number.isFinite(parseInt(x))) {
                throw new ExpressError(`${x} is not a number`,400)
            } else{
                x = parseInt(x)
            }
        }

        let mode = helpers.mode(nums)

        return res.json({ operation: "mode", nums: nums, result: mode })
    } catch (err) {
        return next(err);
    }
});



app.get('/all', function (req, res, next) {

    try {
        if(!req.query["nums"]) throw new ExpressError ('Requires variable "nums" in query string')

        let nums = req.query["nums"]

        nums = nums.split(',')
        
        for( let x of nums){
            if  (!Number.isFinite(parseInt(x))) {
                throw new ExpressError(`${x} is not a number`,400)
            } else{
                x = parseInt(x)
            }
        }

        let mean = helpers.mean(nums)
        let median = helpers.median(nums)
        let mode = helpers.mode(nums)

        return res.json({ operation: "mode", nums: nums, mean: mean, median: median, mode: mode })
    } catch (err) {
        return next(err);
    }
});


// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    })
})


app.listen(3000, function () {
    console.log('App on port 3000')
})