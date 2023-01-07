function check(inp) {
  let rsp
  if (inp != '') {
    rsp = inp + ', '
  } else {
    rsp = inp
  }

  return rsp
}

module.exports = {
  check
}