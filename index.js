const express = require('express')
const app = express()

const serviceRoute = require('./routes/services')
app.use('/midAPI', serviceRoute)

app.listen(3000, ()=>console.log('Server is up'))