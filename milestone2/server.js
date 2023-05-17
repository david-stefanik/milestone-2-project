// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// SEQUELIZE CONNECTION


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the coding API'
    })})

app.listen(process.env.PORT, () => {
    console.log(`'coding' on port: ${process.env.PORT}`)
})