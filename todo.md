# todo List
## Main Part
 - ~~Generate Canvas~~
 - ~~Put Name & GH Profile Image into canvas~~
 - ~~Place Canvas on top of GH README~~
 - ~~Don't Forgot My Blog Update :D~~

 - Profile Instruction
 ```js
  let charles = { // Input Variable name
      pronouns: "He" | "Him", // Pronoun Selector
      askMeAbout: ["web dev", "tech", "game"], // 3 inputBox
      IDE: [""] // Input Box
      technologies: { // Pick From List (if Blank not show)
          langs: [],
          frontEnd: {
              js: ["Vue", "React", "Angular"],
              css: ["bootstrap", "sass"]
          },
          backEnd: ["Java", "PHP"],
          databases: ["MySql", "oracle"],
          AI: [""],
          BaaS: [""],
          frameworks: [""],
          dataVisualiser: [""],
          automation: [""],
          devOps: [""],
          mobileDev: [""],
          staticGenerator: [""],
          software: [""],
          other: [""]
      }
  };
 ```

## Addons
  - ~~visitor count badge~~
  - ~~gh trophy~~
  - ~~gh profile stats card (w/ theme selector) (using https://stat-card.000198.xyz/api?username=dethMastery)~~
  - ~~gh streak stats~~
  - ~~twitter badge~~


# Basic Call @ This Moment
## Generate MD
http://localhost:1980/api/?gh=dethMastery&name=Suphakit&lName=P.&subText=A+music+composer+with+some+of+web+dev+skill&bYear=2002&ageLeft=A+musician+at+aged&ageRight=who+love+to+coding+and+composing&fc1=48847A&fc2=313E51&bg=2e2f2f&fg=f5f5f5&fbLink=detzz.in.th&did=298415109359796234&tw=georgekdeterk&email=owner%40detzz.in.th&asks%5B%5D=game&asks%5B%5D=web+dev&asks%5B%5D=music&sex=male&ide=vsCode&frontEnd=Vue.js&frontEnd=CSS3&frontEnd=HTML5&lang=C&lang=Cpp&AIs=mongoDB
 - gh = github UserName <br/>
 - name = 1st nameBox <br />
 - lName = 2nd nameBox <br />
 - subText = 1 line textBox <br />
 - bYear = birthYear ==> this will Calculate Age <br />
 - ageLeft = Left side of ageing <br />
 - ageRight = Right side of aging <br />
 - fc1 = bottom color of profile frame <br />
 - fc2 = top color of profile frame <br />
 - bg = background color <br />
 - fg = foreground color <br />
    <br />
 - fbLink = Facebook ID <br />
 - did = Discord ID <br />
 - tw = twitter Username <br />
 - email = email <br />
    <br />
 - asks = 'You can ask about?' Box (have 3 array) <br />
    <br />
 - Lang = Programming Lang
 - frontEnd = FrontEnd Lang
 - backEnd = backEnd Lang
 - dbs = databases
 - AIs = AIs


## Canvas API
http://localhost:1980/api/canvas/?gh=dethMastery&id=25049577&tw=georgekdeterk&name=Suphakit&lName=P.&subText=A+music+composer+with+some+of+web+dev+skill&bYear=2002&ageLeft=A+musician+at+aged&ageRight=who+love+to+coding+and+composing&fc1=48847A&fc2=313E51&bg=2e2f2f&fg=f5f5f5

 - gh = github UserName <br/>
 - id = github ID <br />
 - tw = twitter Username <br />
 - name = 1st nameBox <br />
 - lName = 2nd nameBox <br />
 - subText = 1 line textBox <br />
 - bYear = birthYear ==> this will Calculate Age <br />
 - ageLeft = Left side of ageing <br />
 - ageRight = Right side of aging <br />
 - fc1 = bottom color of profile frame <br />
 - fc2 = top color of profile frame <br />
 - bg = background color <br />
 - fg = foreground color <br />