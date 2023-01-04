// SRC Call
let cc = require('./api/canvas')

function pListing(app) {
  app.get('/', (req, res) => {
    res.send('a')
  })

  app.get('/api/', (req, res) => {
    cc.canvasSummon(req, res)
  })
}

module.exports = {
  pListing
}