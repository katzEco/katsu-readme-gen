// Module Call
let exp = require('express')

// SRC Call
let page = require('./src/page')
let port = require('./src/port')

// Variable Call
let app = exp()
let portNo = '1980'

page.pListing(app)

port.portRun(app, portNo)