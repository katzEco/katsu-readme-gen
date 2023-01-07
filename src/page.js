// SRC Call
let cc = require('./api/canvas')
let pageGen = require('./api/pageRes')
let mdGen = require('./api/markdownGen')
let blogGuide = require('./api/blogGuide')

function pListing(app) {
  app.get('/', (req, res) => {
    res.send('a')
  })

  app.get('/api/', (req, res) => {
    pageGen.genHTML(req, res)
  })

  app.get('/api/md', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send(mdGen.genMarkdown(req, res))
  })

  app.get('/api/canvas', (req, res) => {
    cc.canvasSummon(req, res)
  })

  app.get('/api/blogGuide', (req, res) => {
    blogGuide.guide(req, res)
  })
}

module.exports = {
  pListing
}