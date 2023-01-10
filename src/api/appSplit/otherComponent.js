let cnt = require('./centerizing')

async function comp(ghUserName) {
  let statHead = '# My Stats'
  let statBody = `${cnt.cent(`<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${ghUserName}&theme=onedark&title=MultiLanguage,Stars,Commit,Followers,Issues,Repositories" alt="dethmastery" align="center" /></a>`)}
  `

  let final = `${statHead}

${statBody}`

  return final
}

module.exports = {
  comp
}