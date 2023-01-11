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
    <rect width="275" height="275" x="${width - (275 + 40)}" y="40" id="topFrame" style="fill:#${query.fc2};" />
    <rect width="275" height="275" x="${width - (275 + 60)}" y="60" id="bottomFrame" style="fill:#${query.fc1};" />
    <image href="https://avatars.githubusercontent.com/u/${query.id}?v=4" height="275" width="275" x="${width - (275 + 50)}" y="50" />
  </g>

  <g id="textBox">
    <text x="40" y="60" width="500" height="200" font-family="LINEseed-Regular, Calibri" style="fill: #${query.fg}; font-size: 24px;">
      Github : ${query.gh}
    </text>
  </g>

  <g id="badgeBox">
    <image href="https://img.shields.io/twitter/follow/${query.tw}?logo=twitter&style=for-the-badge" x="40" y="${height - (40 + 25)}" />
    <image href="https://komarev.com/ghpvc/?username=${query.gh}&label=Profile%20views&color=0e75b6&style=for-the-badge" x="40" y="${height - (40 + 60)}" />
  </g>
`

  let img = base(width, height, data)

  // res.setHeader('content-type', "image/svg+xml")
  res.send(img)
}

module.exports = {
  gen
}