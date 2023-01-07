function portRun(app, port) {
  app.listen(port, () => {
    let url = 'Server Running on http://localhost:' + port
    let dat = ''

    for(let i=0; i<url.length+21; i++) {
      dat = dat + '='
    }

    console.log('');
    console.log(dat);
    console.log('');
    console.log('');
    console.log('          ' + url);
    console.log('updated @ ' + new Date())
    console.log('');
    console.log('');
    console.log(dat);
  })
}

module.exports = {
  portRun
}