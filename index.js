const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const whiteList = ['https://proztock.github.io/MyWebPortafolio']

app.use(cors({origin: whiteList}))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('./routes.js'))

PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT)
})