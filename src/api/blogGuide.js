// Function Run
function guide(req, res) {
  let blogGuide = `
name: Latest blog post workflow
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
          feed_list: "Your RSS Feed Link"
`
  let commentGuide = `<hr />

    <h2>RSS Fetch Blog Guide</h2>
    <p>
      Just set up ".github/workflows" Folder in your repo and add this Script
    </p>

    <p>
      <pre>
        ${blogGuide}
      </pre>

      <span>and add this Script in your README</span>

      <pre>
&lt;&#33;-- BLOG-POST-LIST:START --&gt;
&lt;&#33;-- BLOG-POST-LIST:END --&gt;
      </pre>
    </p>
  `

  return commentGuide
}

// Function Export
module.exports = {
  guide
}