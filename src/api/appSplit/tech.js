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
      req.lang.forEach(lang => {
        tech = tech + `"${lang}", `
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
  if (req.dbs != undefined) {
    if (tech != ``) {
      temp = `
    databases: [
      {`
    } else {
      temp = `databases: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.dbs) == true) {
      req.dbs.forEach(db => {
        tech = tech + `"${db}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.dbs}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.AIs != undefined) {
    if (tech != ``) {
      temp = `
    AI: [
      {`
    } else {
      temp = `AI: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.AIs) == true) {
      req.AIs.forEach(ai => {
        tech = tech + `"${ai}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.AIs}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.baas != undefined) {
    if (tech != ``) {
      temp = `
    BaaS: [
      {`
    } else {
      temp = `BaaS: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.baas) == true) {
      req.baas.forEach(bs => {
        tech = tech + `"${bs}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.baas}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.fw != undefined) {
    if (tech != ``) {
      temp = `
    frameWorks: [
      {`
    } else {
      temp = `frameWorks: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.fw) == true) {
      req.fw.forEach(ffw => {
        tech = tech + `"${ffw}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.fw}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.dtv != undefined) {
    if (tech != ``) {
      temp = `
    dataVisualiser: [
      {`
    } else {
      temp = `dataVisualiser: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.dtv) == true) {
      req.dtv.forEach(dv => {
        tech = tech + `"${dv}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.dtv}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.autos != undefined) {
    if (tech != ``) {
      temp = `
    automations: [
      {`
    } else {
      temp = `automations: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.autos) == true) {
      req.autos.forEach(auto => {
        tech = tech + `"${auto}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.autos}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.dOps != undefined) {
    if (tech != ``) {
      temp = `
    devOps: [
      {`
    } else {
      temp = `devOps: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.dOps) == true) {
      req.dOps.forEach(dev => {
        tech = tech + `"${dev}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.dOps}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }
  if (req.mDev != undefined) {
    if (tech != ``) {
      temp = `
    mobileDev: [
      {`
    } else {
      temp = `mobileDev: [
      {`
    }

    tech = check.check(tech) + temp

    if (check.arrayCheck(req.mDev) == true) {
      req.mDev.forEach(dev => {
        tech = tech + `"${dev}", `
      })

      tech = tech.slice(0, -2) + `}
    ]` 
    } else {
      tech = tech + `"${req.mDev}", `
      tech = tech.slice(0, -2) + `}
    ]` 
    }
  }

  return tech
}

module.exports = {
  tCheck
}