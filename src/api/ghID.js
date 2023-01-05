// Module Call
let axios = require('axios')

async function axiosData(userName) {
  let call = await axios.get('https://api.github.com/users/' + userName)
  let rsp = call.data
  
  return rsp
}

module.exports = {
  axiosData
}