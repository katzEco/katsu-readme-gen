// Module Call
let canvas = require('canvas')
const { loadImage, registerFont } = canvas;
let Konva = require('konva/cmj').default

// SRC Call
let ghID = require('./ghID')

// Variable Call
let w = 1280;
let h = 720;

// Function Set up
async function canvasSummon(req, res) {
  // Set Stage
  const stage = new Konva.Stage({
    container: undefined,
    width: w,
    height: h,
  });

  // Set base
  let base = new Konva.Layer()
  let baseBG = new Konva.Rect({
    x: 0,
    y: 0,
    width: 1280,
    height: 720,
    fill: '#2e2f2f',
    stroke: 'whitesmoke',
    strokeWidth: 0,
  })

  base.add(baseBG)

  // Summon Profile Picture
  let ghName = req.query.gh
  let ghCall = JSON.parse(JSON.stringify(await ghID.axiosData(ghName))).id

  let profPic = new Konva.Layer()

  let imgLink = 'https://avatars.githubusercontent.com/u/'+ ghCall +'?v=4'

  //  ghProfileIMG = Konva.Image
  let profImg = await loadImage(imgLink)
  let ghProfileIMG = new Konva.Image ({
    x: w - (300 + 20),
    y: 20,
    image: profImg,
    width: 300,
    height: 300,
    draggable: true,
  });
  profPic.add(ghProfileIMG)


  stage.add(base)
  stage.add(profPic)

  stage.draw()


  // send IMG Buffer
  var img = Buffer.from(stage.toDataURL().slice(22), 'base64');
  res.setHeader('content-type', "image/png")
  res.send(img)
}

module.exports = {
  canvasSummon
}