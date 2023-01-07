// SRC Call
let ghID = require('./ghID')

// Function Run
async function genMarkdown(req, res) {
  let host = req.protocol + '://' + req.get('host')
  // let ghCall = JSON.parse(JSON.stringify(await ghID.axiosData(req.query.gh))).id
  let ghCall = '25049577'

  let url = host + "/api/canvas/?gh=" + req.query.gh + '&id=' +  ghCall + '&name=' + req.query.name + '&lName=' + req.query.lName + '&subText=' + req.query.subText +'&bYear=' + req.query.bYear +'&ageLeft=' + req.query.ageLeft +'&ageRight=' + req.query.ageRight + '&fc1=' + req.query.fc1 + '&fc2=' + req.query.fc2 + '&bg=' + req.query.bg + '&fg=' + req.query.fg
  let codeBlock = "```"

  let md = `
    <img src="${url}"> <br/>

    # About me

    ${codeBlock}
      let ${req.query.gh} = {
        pronouns: ,
        askMeAbout: ["", "", ""]
        IDE: ""
      }
    ${codeBlock}
  `
  res.set('Content-Type', 'text/plain')
  res.send(md)
}

// Function Export
module.exports = {
  genMarkdown
}