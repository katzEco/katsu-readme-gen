async function comp(ghUserName) {
  let statHead = '# My Stats'
  let statBody = `<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${ghUserName}&label=Profile%20views&color=0e75b6&style=for-the-badge" />
</p>`

  let final = `${statHead}

${statBody}
  `

  return final
}

module.exports = {
  comp
}