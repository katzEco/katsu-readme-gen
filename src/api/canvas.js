// Module Call
let canvas = require('canvas')
const { loadImage, registerFont } = canvas;
let Konva = require('konva/cmj').default

// Variable Call
let w = 1280;
let h = 390;

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
    width: w,
    height: h,
    fill: '#' + req.query.bg,
    stroke: 'whitesmoke',
    strokeWidth: 0,
    cornerRadius: 10
  })

  base.add(baseBG)

  // Summon Profile Picture
  let ghName = req.query.gh
  let ghCall = req.query.id

  let profPic = new Konva.Layer()

  let profFrame1 = new Konva.Rect({
    x: w - (300 + 50),
    y: 50,
    width: 300,
    height: 300,
    fill: '#' + req.query.fc1,
    stroke: 'whitesmoke',
    strokeWidth: 0,
  })

  let profFrame2 = new Konva.Rect({
    x: w - (300 + 30),
    y: 30,
    width: 300,
    height: 300,
    fill: '#' + req.query.fc2,
    stroke: 'whitesmoke',
    strokeWidth: 0,
  })

  let imgLink = 'https://avatars.githubusercontent.com/u/'+ ghCall +'?v=4'
  let profImg = await loadImage(imgLink)
  let ghProfileIMG = new Konva.Image ({
    x: w - (300 + 40),
    y: 40,
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
  let fontColor = req.query.fg
  let summonGHName = new Konva.Text({
    x: 40,
    y: 25,
    width: w - (300 + 140),
    lineHeight: 1.5,
    align: 'left',
    wrap: 'word',
    text: 'Github : ' + ghName,
    fontSize: 24,
    fontFamily: 'Calibri',
    fill: '#' + fontColor,
  })

  let summonName = new Konva.Text({
    x: 60,
    y: 50,
    width: w - (300 + 160),
    lineHeight: 1.5,
    align: 'left',
    wrap: 'word',
    text: req.query.name + ' ' + req.query.lName,
    fontSize: 75,
    fontFamily: 'Calibri',
    fill: '#' + fontColor,
  })

  let summonSubText = new Konva.Text({
    x: 80,
    y: 155,
    width: w - (300 + 180),
    lineHeight: 1.5,
    align: 'left',
    wrap: 'word',
    text: req.query.subText,
    fontSize: 24,
    fontFamily: 'Calibri',
    fill: '#' + fontColor,
  })

  let date = new Date();
  let yr = date.getFullYear()
  let age = yr - req.query.bYear
  let summonAge = new Konva.Text({
    x: (w/2) - (180),
    y: h - 105,
    width: (w/2) - (300 - 100),
    align: 'right',
    wrap: 'word',
    lineHeight: 1.5,
    text: req.query.ageLeft + ' ' + age + ' ' + req.query.ageRight,
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: '#' + fontColor,
  })

  text.add(summonGHName)
  text.add(summonName)
  text.add(summonSubText)
  text.add(summonAge)

  // Summon some Badge
  let badgeLayer = new Konva.Layer()

  let viewCall = `https://komarev.com/ghpvc/?username=${req.query.gh}&label=Profile%20views&color=0e75b6&style=for-the-badge`
  let summonView = await loadImage(viewCall)
  let viewBadge = new Konva.Image ({
    x: 40,
    y: h - 100,
    image: summonView,
    draggable: true,
  });

  let twitterLink = `https://img.shields.io/twitter/follow/${req.query.tw}?style=for-the-badge`
  let twitterCall = await loadImage(twitterLink)
  let twitterBadge = new Konva.Image ({
    x: 40,
    y: h - 65,
    image: twitterCall,
    draggable: true,
  });

  badgeLayer.add(viewBadge)
  badgeLayer.add(twitterBadge)

  stage.add(base)
  stage.add(profPic)
  stage.add(text)
  stage.add(badgeLayer)

  stage.draw()


  // send IMG Buffer
  var img = Buffer.from(stage.toDataURL().slice(22), 'base64');
  res.setHeader('content-type', "image/png")
  res.send(img)
}

module.exports = {
  canvasSummon
}