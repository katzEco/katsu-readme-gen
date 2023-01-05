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
  // let ghCall = JSON.parse(JSON.stringify(await ghID.axiosData(ghName))).id
  let ghCall = 25049577

  let profPic = new Konva.Layer()

  let profFrame1 = new Konva.Rect({
    x: w - (300 + 30),
    y: 30,
    width: 300,
    height: 300,
    fill: '#' + req.query.fc1,
    stroke: 'whitesmoke',
    strokeWidth: 0,
  })

  let profFrame2 = new Konva.Rect({
    x: w - (300 + 10),
    y: 10,
    width: 300,
    height: 300,
    fill: '#' + req.query.fc2,
    stroke: 'whitesmoke',
    strokeWidth: 0,
  })

  let imgLink = 'https://avatars.githubusercontent.com/u/'+ ghCall +'?v=4'
  let profImg = await loadImage(imgLink)
  let ghProfileIMG = new Konva.Image ({
    x: w - (300 + 20),
    y: 20,
    image: profImg,
    width: 300,
    height: 300,
    draggable: true,
  });

  profPic.add(profFrame1)
  profPic.add(profFrame2)
  profPic.add(ghProfileIMG)

  // Add some Text
  let text = new Konva.Layer()
  let summonGHName = new Konva.Text({
    x: 30,
    y: 30,
    text: 'Github : ' + ghName,
    fontSize: 40,
    fontFamily: 'Calibri',
    fill: 'whitesmoke',
  })

  let summonName = new Konva.Text({
    x: 50,
    y: 80,
    text: req.query.name + ' ' + req.query.lName,
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'whitesmoke',
  })

  let date = new Date();
  let yr = date.getFullYear()
  let age = yr - req.query.bYear
  let summonAge = new Konva.Text({
    x: 70,
    y: 190,
    text: 'Age : ' + age,
    fontSize: 50,
    fontFamily: 'Calibri',
    fill: 'whitesmoke',
  })
  text.add(summonGHName)
  text.add(summonName)
  text.add(summonAge)

  stage.add(base)
  stage.add(profPic)
  stage.add(text)

  stage.draw()


  // send IMG Buffer
  var img = Buffer.from(stage.toDataURL().slice(22), 'base64');
  res.setHeader('content-type', "image/png")
  res.send(img)
}

module.exports = {
  canvasSummon
}