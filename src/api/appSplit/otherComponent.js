let cnt = require('./centerizing')

async function comp(ghUserName) {
  let statHead = '# My Stats'
  let statBody = `${cnt.cent(`<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${ghUserName}&theme=onedark&title=MultiLanguage,Stars,Commit,Followers,Issues,Repositories" alt="dethmastery" align="center" /></a>`)}
<p style="width: 100%; background-color: #2E3541;">
  ${cnt.cent(`<a href="https://stat-card.000198.xyz"><img src="https://stat-card.000198.xyz/api?username=${ghUserName}&count_private=true&show_icons=true&theme=nord&hide_border=true" alt="statCard" /></a>`)}
  ${cnt.cent(`<a href="https://stat-card.000198.xyz"><img src="https://stat-card.000198.xyz/api/top-langs/?username=${ghUserName}&layout=compact&theme=nord&hide_border=true" alt="statCard" /></a>`)}
  ${cnt.cent(`<a href="https://git.io/streak-stats"><img src="https://streak-stats.demolab.com?user=dethMastery&theme=nord&hide_border=true&border_radius=10" alt="streakCard" /></a>`)}
</p>
`

  let final = `${statHead}

  ${statBody} 
`

  return final
}

module.exports = {
  comp
}