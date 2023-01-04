function pListing(app) {
  app.get('/', (req, res) => {
    res.send('a')
  })
}

module.exports = {
  pListing
}