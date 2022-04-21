const express = require("express")
const Route = express.Router()

Route.get('/home', (req, res, next) => {
    try {
        res.send("Sample Application")
    } catch (error) {
        next(error)
    }
} )

module.exports = Route