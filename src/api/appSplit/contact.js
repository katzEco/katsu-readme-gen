let check = require('./check')

async function contact(req) {
  let contact = ''
  if(req.query.fbLink != undefined) {
    contact = check.check(contact) + `"[Facebook](https://fb.com/${req.query.fbLink})"`
  }
  if(req.query.did != undefined) {
    contact = check.check(contact) + `"[Discord](https://did.000198.xyz/@${req.query.did})"`
  }
  contact = check.check(contact) + `"[Twitter](https://twitter.com/${req.query.tw})"`
  if(req.query.email != undefined) {
    contact = check.check(contact) + `"[E-mail](mailto:${req.query.email})"`
  }

  return contact
}

module.exports = {
  contact
}