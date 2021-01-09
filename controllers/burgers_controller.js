var express = require('express')
const burger = require('../models/burger.js')
var router = express.Router()
router.get("/", function (req, res) {
    res.redirect("/burgers")
    // res.render("index")
})
router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", {
            burger_data: burgerData
        })
        console.log(burgerData)
    })
})
router.post("/burgers/create", function (req, res) {
    console.log("we're in the back end")
    burger.create(req.body.burger_name, function (result) {
        console.log(result)
        res.redirect("/")
    })
})
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result)
        res.sendStatus(200)
    })
})
module.exports = router