// SRC Call
let ghID = require('./ghID')
let cnt = require('./appSplit/contact')
let ask = require('./appSplit/ask')

// Variable Call
let codeBlock = "```"

// Function Run
async function genMarkdown(req, res) {
  let host = req.protocol + '://' + req.get('host')
  // let ghCall = JSON.parse(JSON.stringify(await ghID.axiosData(req.query.gh))).id
  let ghCall = '25049577'
  let subText = req.query.subText.split(' ').join('+')
  let ageLeft = req.query.ageLeft.split(' ').join('+')
  let ageRight = req.query.ageRight.split(' ').join('+')
  let url = host + "/api/canvas/?gh=" + req.query.gh + '&id=' +  ghCall + '&tw=' + req.query.tw + '&name=' + req.query.name + '&lName=' + req.query.lName + '&subText=' + subText +'&bYear=' + req.query.bYear +'&ageLeft=' + ageLeft +'&ageRight=' + ageRight + '&fc1=' + req.query.fc1 + '&fc2=' + req.query.fc2 + '&bg=' + req.query.bg + '&fg=' + req.query.fg

  let contact = await cnt.contact(req)
  let asks = await ask.ask(req)

  let about=`${codeBlock}js
let ${req.query.gh} = {
  pronouns: ,
  askMeAbout: ["", "", ""]
  IDE: "",
  contact: ${contact}
}
${codeBlock}`

  let md = `<a href="https://twitter.com/${req.query.tw}" target="_blank">
  <img src="${url}">
</a>
<br/>

# About me

${about}

<!-- Unused Component but used for Call! -->
<img src="https://komarev.com/ghpvc/?username=${req.query.gh}&label=Profile%20views&color=0e75b6&style=for-the-badge" style="display: none;">`

  return md
}

// Function Export
module.exports = {
  genMarkdown
}