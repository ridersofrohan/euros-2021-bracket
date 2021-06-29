import './App.css';

function App() {
  const emojis = {
    "BEL": "🇧🇪",
    "POR": "🇵🇹",
    "ITA": "🇮🇹",
    "AUT": "🇦🇹",
    "FRA": "🇫🇷",
    "SUI": "🇨🇭",
    "CRO": "🇭🇷",
    "ESP": "🇪🇸",
    "SWE": "🇸🇪",
    "UKR": "🇺🇦",
    "ENG": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "GER": "🇩🇪",
    "NED": "🇳🇱",
    "CZE": "🇨🇿",
    "WAL": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "DEN": "🇩🇰",
  };

  const matches = [
    [
      [{h: "BEL", a: "POR", w: "BEL"}, {h: "ITA", a: "AUT", w: "ITA"}, {h: "FRA", a: "SUI", w: "SUI"}, {h: "CRO", a: "ESP", w: "ESP"}],
      [{h: "SWE", a: "UKR", w: "UKR"}, {h: "ENG", a: "GER", w: "ENG"}, {h: "NED", a: "CZE", w: "CZE"}, {h: "WAL", a: "DEN", w: "DEN"}],
    ],
    [
      [{h: "BEL", a: "ITA", w: ""}, {h: "SUI", a: "ESP", w: ""}],
      [{h: "UKR", a: "ENG", w: ""}, {h: "CZE", a: "DEN", w: ""}],
    ],
    [
      [{h: "", a: "", w: ""}],
      [{h: "", a: "", w: ""}],
    ],
    [
      [{h: "", a: "", w: ""}],
    ],
  ];
  const multiples = [1,2,4,8];
  let teamsStillIn = {};
  for (let i = 0; i < matches.length; i++) {
    for (let j = 0; j < matches[i].length; j++) {
      for (let k = 0; k < matches[i][j].length; k++) {
        if (matches[i][j][k].w) {
          if (matches[i][j][k].w === matches[i][j][k].h) {
            teamsStillIn[matches[i][j][k].a] = false;
          } else if (matches[i][j][k].w === matches[i][j][k].a) {
            teamsStillIn[matches[i][j][k].h] = false;
          }
        } else {
          teamsStillIn[matches[i][j][k].h] = true;
          teamsStillIn[matches[i][j][k].a] = true;
        }
      }
    }
  }

  const picks = [
    {
      name: "Cameron McClellan",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "CRO"],
          ["SWE", "GER", "NED", "WAL"],
        ],
        [
          ["BEL", "CRO"],
          ["SWE", "NED"],
        ],
        [
          ["BEL"],
          ["NED"],
        ],
        [
          ["NED"],
        ],
      ],
    },
    {
      name: "Clement Asante",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["ITA", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["FRA"],
          ["ENG"],
        ],
        [
          ["ENG"],
        ],
      ],
    },
    {
      name: "Daniel Lemus",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "CRO"],
          ["UKR", "GER", "NED", "WAL"],
        ],
        [
          ["ITA", "FRA"],
          ["GER", "NED"],
        ],
        [
          ["ITA"],
          ["GER"],
        ],
        [
          ["ITA"],
        ],
      ],
    },
    {
      name: "Henry Haanpaa",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "GER", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["GER", "NED"],
        ],
        [
          ["FRA"],
          ["GER"],
        ],
        [
          ["GER"],
        ],
      ],
    },
    {
      name: "James Blood",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["BEL"],
          ["NED"],
        ],
        [
          ["BEL"],
        ],
      ],
    },
    {
      name: "Matt Epstein",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["ITA", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["ITA"],
          ["ENG"],
        ],
        [
          ["ITA"],
        ],
      ],
    },
    {
      name: "Max Andriot",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "CRO"],
          ["UKR", "GER", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["GER", "NED"],
        ],
        [
          ["FRA"],
          ["NED"],
        ],
        [
          ["FRA"],
        ],
      ],
    },
    {
      name: "Max Mealor",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["FRA"],
          ["ENG"],
        ],
        [
          ["FRA"],
        ],
      ],
    },
    {
      name: "Mitchell Fratrik",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "CRO"],
          ["SWE", "GER", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["GER", "NED"],
        ],
        [
          ["FRA"],
          ["NED"],
        ],
        [
          ["FRA"],
        ],
      ],
    },
    {
      name: "Niall Costigan",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "WAL"],
        ],
        [
          ["BEL", "FRA"],
          ["SWE", "NED"],
        ],
        [
          ["BEL"],
          ["NED"],
        ],
        [
          ["BEL"],
        ],
      ],
    },
    {
      name: "Olivia Mealor",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["BEL"],
          ["ENG"],
        ],
        [
          ["ENG"],
        ],
      ],
    },
    {
      name: "Rachel Van Amburg",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["ENG", "NED"],
        ],
        [
          ["FRA"],
          ["ENG"],
        ],
        [
          ["FRA"],
        ],
      ],
    },
    {
      name: "Rohan Challa",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "GER", "CZE", "WAL"],
        ],
        [
          ["BEL", "FRA"],
          ["GER", "CZE"],
        ],
        [
          ["BEL"],
          ["GER"],
        ],
        [
          ["BEL"],
        ],
      ],
    },
    {
      name: "Sajan Patel",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "GER", "NED", "DEN"],
        ],
        [
          ["BEL", "FRA"],
          ["GER", "DEN"],
        ],
        [
          ["BEL"],
          ["GER"],
        ],
        [
          ["BEL"],
        ],
      ],
    },
  ];

  let brackets = [];
  let scores = [];
  for (const pick of picks) {
    let score = 0;
    let maxScore = 0;
    let matchDivs = [];
    for (var i = 0; i < matches.length; i++) {
      let stages = [];
      for (var j = 0; j < matches[i].length; j++) {
        let sides = [];
        for (var k = 0; k < matches[i][j].length; k++) {
          let homePick = matches[i][j][k].h;
          let homeClass = "";
          let awayPick = matches[i][j][k].a;
          let awayClass = "";

          if (i === 1 || i === 2) {
            homePick = pick.bracket[i-1][j][Math.floor(k*2)];
            if (matches[i][j][k].h !== "") {
              homeClass = matches[i][j][k].h === homePick ? "correct" : "wrong";
            } else {
              homeClass = teamsStillIn[homePick] ? "" : "wrong";
            }
            awayPick = pick.bracket[i-1][j][Math.floor(k*2)+1];
            if (matches[i][j][k].a !== "") {
              awayClass = matches[i][j][k].a === awayPick ? "correct" : "wrong";
            } else {
              awayClass = teamsStillIn[awayPick] ? "" : "wrong";
            }
          }
          if (i === 3) {
            homePick = pick.bracket[i-1][j][k];
            if (matches[i][j][k].h !== "") {
              homeClass = matches[i][j][k].h === homePick ? "correct" : "wrong";
            } else {
              homeClass = teamsStillIn[homePick] ? "" : "wrong";
            }
            awayPick = pick.bracket[i-1][j+1][k];
            if (matches[i][j][k].a !== "") {
              console.log(awayPick);
              awayClass = matches[i][j][k].a === awayPick ? "correct" : "wrong";
            } else {
              awayClass = teamsStillIn[awayPick] ? "" : "wrong";
            }
          }

          sides.push(
            <div className={"match stage-" + i}>
              <span className={"team " + homeClass}>
                {homePick} {emojis[homePick]}
              </span>
              <span className={"team " + awayClass}>
                {awayPick} {emojis[awayPick]}
              </span>
            </div>
          );

          if (matches[i][j][k].w === pick.bracket[i][j][k]) {
            score += multiples[i];
            maxScore += multiples[i];
          }
          if (!matches[i][j][k].w && teamsStillIn[pick.bracket[i][j][k]]) {
            maxScore += multiples[i];
          }
        }
        stages.push(sides);
      }
      matchDivs.push(stages);
    }
    const finalPickClass = "winner " + (teamsStillIn[pick.bracket[3][0][0]] ? "" : "wrong");
    scores.push({name: pick.name, score: score, maxScore: maxScore});
    brackets.push(
      <div className="bracket-outer-container" key={pick.name}>
        <h3>{pick.name}: {score} ({maxScore})</h3>
        <div className="bracket-container">
          <div className="eight-container">
            {matchDivs[0][0]}
          </div>
          <div className="four-container">
            {matchDivs[1][0]}
          </div>
          <div className="two-container">
            {matchDivs[2][0]}
          </div>
          <div className="final-container">
            <span className={finalPickClass}>
              {pick.bracket[3][0][0]} {emojis[pick.bracket[3][0][0]]}
            </span>
            {matchDivs[3][0]}
          </div>
          <div className="two-container">
            {matchDivs[2][1]}
          </div>
          <div className="four-container">
            {matchDivs[1][1]}
          </div>
          <div className="eight-container">
            {matchDivs[0][1]}
          </div>
        </div>
      </div>
    );
  }
  scores.sort((a, b) => {
    if (a.score === b.score) {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    }
    return b.score - a.score;
  });

  const leaderDivs = scores.map(leader => {
    return (
      <div key={leader.name}>
        <span>{leader.name}: {leader.score}</span>
      </div>
    );
  });

  return (
    <div className="App">
      <div>
        <h1> Euros 2021 Pool </h1>
        <span>Sponsored by Max Andriot</span>
      </div>

      <div>
        <h2>Leaderboard</h2>
        {leaderDivs}
      </div>
      <h2>Brackets</h2>
      {brackets}
    </div>
  );
}

export default App;
