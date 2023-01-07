let md = require('./markdownGen')

// Function RUN
async function genHTML(req, res) {
  let markdown = await md.genMarkdown(req, res)

  let page = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result | READ-ME Generator</title>
        
        <link rel="stylesheet" href="../css/main.css"
      </head>
      <body>
        <center>
          <h1>
            README Generator
          </h1>

          <form id="res">
            <h2>: Result :</h2>
            <textarea id="MD" name="MD" rows="30">${markdown}</textarea>
          </form>
        </center>
      </body>
    </html>
  `

  res.set('Content-Type', 'text/html')
  res.send(page)
}

// Function Export
module.exports = {
  genHTML
}