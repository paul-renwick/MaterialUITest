const path = require('path')
const express = require('express')
const cors = require('cors')
const targets = require('./routes/targets')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))
server.use('/', targets)

module.exports = server

