// subFunction
function base(w, h, inp) {
  let b = `<svg width="${w}" height="${h}">${inp}</svg>`

  return b
}

// main Function
async function gen(req, res) {
  let query = req.query

  let width = 1280
  let height = 390

  let data = `
  <style>
    @import url('https://cdn.katsuragi.cyou/fonts/TH/LINEseed-Regular');
    @charset "utf-8";

    @font-face {
      font-family: 'LINEseed-Regular';
      src: url(https://cdn.katsuragi.cyou/cdn/fonts/th/LINEseed-Regular/LINESeed-TH.woff) format('woff'),
          url(https://cdn.katsuragi.cyou/cdn/fonts/th/LINEseed-Regular/LINESeed-TH.woff2) format('woff2');
      font-weight: normal;
      font-style: normal;
    }
  </style>

  <rect width="${width - 40}" height="${height - 40}" x="20" y="20" style="fill:#${query.bg}" rx="10" ry="10" />

  <g id="imageBox">
    <rect width="300" height="300" x="${width - (300 + 35)}" y="35" id="topFrame" style="fill:#${query.fc2}" id="#topFrame" />
    <rect width="300" height="300" x="${width - (300 + 55)}" y="55" id="topFrame" style="fill:#${query.fc1}" id="#bottomFrame" />
    <image href="https://avatars.githubusercontent.com/u/${query.id}?v=4" height="300" width="300" x="${width - (300 + 45)}" y="45" />
  </g>

  <g id="textBox">
    <text x="40" y="60" width="600" height="200" font-family="LINEseed-Regular, Calibri" style="fill: #${query.fg}; font-size: 24px;">
      Github : ${query.gh}
    </text>
  </g>
`

  let img = base(width, height, data)

  // res.setHeader('content-type', "image/svg+xml")
  res.send(img)
}

module.exports = {
  gen
}