const express = require('express')
const app = express()

const serviceRoute = require('./routes/services')

app.use('/midAPI', serviceRoute)

module.exports = app