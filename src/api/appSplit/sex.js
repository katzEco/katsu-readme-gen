function sCheck(req) {
  let pron

  if (req.sex == 'male') {
    pron = '"He | Him"'
  } else if (req.sex == 'fmale') {
    pron = '"She | Her"'
  } else if (req.sex == 'nonspec') {
    pron = '"They | Them"'
  }

  return pron
}

module.exports = {
  sCheck
}