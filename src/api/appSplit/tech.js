let check = require("./check");

async function tCheck(req) {
  let tech = ``

  if (req.frontEnd != undefined) {
    tech = tech + `frontEnd: [
      {`

    if (check.arrayCheck(req.frontEnd) == true) {
      req.frontEnd.forEach(fe => {
        tech = tech + `"${fe}", `
      });
  
      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.frontEnd}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.backEnd != undefined) {
    tech = check.check(tech) + `
    backEnd: [
      {`

    if (check.arrayCheck(req.backEnd) == true) {
      req.backEnd.forEach(be => {
        tech = tech + `"${be}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.backEnd}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }

    tech = tech.slice(0, -2) + `}
    ]`
  }

  return tech
}

module.exports = {
  tCheck
}