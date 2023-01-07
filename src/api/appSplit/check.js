function check(inp) {
  let rsp
  if (inp != '') {
    rsp = inp + ', '
  } else {
    rsp = inp
  }

  return rsp
}

function arrayCheck(inp) {
  let rsp = Array.isArray(inp)

  return rsp
}

module.exports = {
  check,
  arrayCheck
}