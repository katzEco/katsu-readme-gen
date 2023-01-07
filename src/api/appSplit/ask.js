let check = require('./check')

async function ask(req) {
  let askMeAbout = ''

  req.query.asks.forEach(ask => {
    askMeAbout = check.check(askMeAbout) + '"' + ask + '"'
  });

  askMeAbout = '[' + askMeAbout + ']'

  return askMeAbout
}

module.exports = {
  ask
}