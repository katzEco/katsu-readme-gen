function portRun(app, port) {
  app.listen(port, () => {
    let url = 'Server Running on http://localhost:' + port
    let dat = ''

    for(let i=0; i<url.length+21; i++) {
      dat = dat + '='
    }

    console.log(dat);
    console.log('');
    console.log('');
    console.log('          ' + url);
    console.log('');
    console.log('');
    console.log(dat);
    console.log('');
    console.log('');
    console.log('running @ ' + new Date())
  })
}

module.exports = {
  portRun
}