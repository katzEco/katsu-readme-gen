// SRC Call
let ghID = require('./ghID')

// Function Run
async function genMarkdown(req, res) {
  let host = req.protocol + '://' + req.get('host')
  // let ghCall = JSON.parse(JSON.stringify(await ghID.axiosData(req.query.gh))).id
  let ghCall = '25049577'

  let url = host + "/api/canvas/?gh=" + req.query.gh + '&id=' +  ghCall + '&tw=' + req.query.tw + '&name=' + req.query.name + '&lName=' + req.query.lName + '&subText=' + req.query.subText +'&bYear=' + req.query.bYear +'&ageLeft=' + req.query.ageLeft +'&ageRight=' + req.query.ageRight + '&fc1=' + req.query.fc1 + '&fc2=' + req.query.fc2 + '&bg=' + req.query.bg + '&fg=' + req.query.fg
  let codeBlock = "```"

  let blogGuide = `name: Latest blog post workflow
          on: 
              schedule:
                  - cron: '0 * * * *'
          jobs: 
              update-readme-with-blog: 
                  name: Update this repo's README with latest blog posts
                  runs-on: ubuntu-latest
                  steps: 
                      - uses: actions/checkout@v2
                      - uses: gautamkrishnar/blog-post-workflow@master
                        with: 
                          max_post_count: "4"
                          feed_list: "<RSS FEED>"
  `
  let commentGuide = `<!-- ==================================================================================================================================================== -->
    <!-- ==================================================================================================================================================== -->

    <!-- RSS Fetch Blog Guide -->
    <!-- 
      Just set up ".github/workflows" Folder in your repo and add this Script

      ${codeBlock}yml
        ${blogGuide}
      ${codeBlock}

      and add this Script in your README

      ${codeBlock}md
        <!-- BLOG-POST-LIST:START -->
        <!-- BLOG-POST-LIST:END -->
      ${codeBlock}
    -->    
  `
  let componentCall = `<!-- Unused Component but used for Call! -->
    <img src="https://komarev.com/ghpvc/?username=${req.query.gh}&label=Profile%20views&color=0e75b6&style=for-the-badge" style="display: none;">
  `

  let md = `
    <a href="https://twitter.com/${req.query.tw}" target="_blank">
      <img src="${url}">
    </a>
    <br/>

    # About me

    ${codeBlock}js
      let ${req.query.gh} = {
        pronouns: ,
        askMeAbout: ["", "", ""]
        IDE: ""
      }
    ${codeBlock}

    ${componentCall}
    ${commentGuide}
  `

  res.set('Content-Type', 'text/plain')
  res.send(md)
}

// Function Export
module.exports = {
  genMarkdown
}