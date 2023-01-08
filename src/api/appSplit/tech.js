let check = require("./check");

async function tCheck(req) {
  let tech = ``
  let temp = ``

  if (req.lang != undefined) {
    if (tech != ``) {
      temp = `
    langs: [
    {`
    } else {
      temp = `langs: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.lang) == true) {
      req.lang.forEach(fe => {
        tech = tech + `"${fe}", `
      });
  
      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.lang}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.frontEnd != undefined) {
    if (tech != ``) {
      temp = `
    frontEnd: [
      {`
    } else {
      temp = `frontEnd: [
        {`
    }

    tech = check.check(tech) + temp

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
    if (tech != ``) {
      temp = `
    backEnd: [
      {`
    } else {
      temp = `backEnd: [
      {`
    }

    tech = check.check(tech) + temp

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
  }

  return tech
}

module.exports = {
  tCheck
}