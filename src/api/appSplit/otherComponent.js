let cnt = require('./centerizing')

async function comp(ghUserName) {
  let statHead = '# My Stats'
  let statBody = `${cnt.cent(`<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${ghUserName}&theme=onedark&title=MultiLanguage,Stars,Commit,Followers,Issues,Repositories" alt="dethmastery" align="center" /></a>`)}
${cnt.cent(`<a href="https://stat-card.000198.xyz"><img src="https://stat-card.000198.xyz/api?username=${ghUserName}&count_private=true&show_icons=true&theme=panda" alt="statCard" /></a>`)}
  `

  let final = `${statHead}

${statBody}`

  return final
}

module.exports = {
  comp
}