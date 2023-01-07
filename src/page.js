// SRC Call
let cc = require('./api/canvas')
let mdGen = require('./api/markdownGen')

function pListing(app) {
  app.get('/', (req, res) => {
    res.send('a')
  })

  app.get('/api/canvas', (req, res) => {
    cc.canvasSummon(req, res)
  })

  app.get('/api/', (req, res) => {
    mdGen.genMarkdown(req, res)
  })
}

module.exports = {
  pListing
}