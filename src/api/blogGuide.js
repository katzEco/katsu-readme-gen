// Function Run
function guide(req, res) {
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

  res.set('Content-Type', 'text/plain')
  res.send(commentGuide)
}

// Function Export
module.exports = {
  guide
}