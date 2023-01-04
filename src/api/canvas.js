// Module Call
let canvas = require('canvas')
const { loadImage, registerFont } = canvas;
let Konva = require('konva/cmj').default

async function canvasSummon(req, res) {
  let w = 1280;
  let h = 720;

  // Set Stage
  const stage = new Konva.Stage({
    container: undefined,
    width: w,
    height: h,
  });

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
  stage.add(base)

  stage.draw()


  // send IMG Buffer
  var img = Buffer.from(stage.toDataURL().slice(22), 'base64');
  res.setHeader('content-type', "image/png")
  res.send(img)
}

module.exports = {
  canvasSummon
}