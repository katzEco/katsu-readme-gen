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

  let date = new Date()
  let nYear = date.getFullYear()
  let age = nYear - query.bYear

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
    <text x="50" y="60" width="500" height="200" font-family="LINEseed-Regular, Calibri" style="fill: #${query.fg}; font-size: 24px;">
      Github : ${query.gh}
    </text>
    <text x="70" y="145" width="480" height="200" font-family="LINEseed-Regular, Calibri" style="fill: #${query.fg}; font-size: 75px;">
      ${query.name} ${query.lName}
    </text>
    <text x="90" y="190" width="480" height="150" font-family="LINEseed-Regular, Calibri" style="fill: #${query.fg}; font-size: 20px;">
      ${query.subText}
    </text>
    <foreignObject x="${width - ((width/2) + 100)}" y="${height - (50 + 90)}" width="${width/2 - (100 + 150)}" height="150" text-anchor="end">
      <p xmlns="http://www.w3.org/1999/xhtml" style="color: #${query.fg}; font-size: 20px; font-family: 'LINEseed-Regular', 'Calibri'; text-align: right;">
        ${query.ageLeft} ${age} ${query.ageRight}
      </p>
    </foreignObject>
  </g>

  <g id="badgeBox">
    <image href="https://img.shields.io/twitter/follow/${query.tw}?logo=twitter&style=for-the-badge" x="50" y="${height - (50 + 25)}" />
    <image href="https://komarev.com/ghpvc/?username=${query.gh}&label=Profile%20views&color=0e75b6&style=for-the-badge" x="50" y="${height - (50 + 65)}" />
  </g>
`

  let img = base(width, height, data)

  res.setHeader('content-type', "image/svg+xml")
  res.send(img)
}

module.exports = {
  gen
}