import logo from './logo.svg';
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
      [{h: "BEL", a: "POR", w: ""}, {h: "ITA", a: "AUT", w: ""}, {h: "FRA", a: "SUI", w: ""}, {h: "CRO", a: "ESP", w: ""}],
      [{h: "SWE", a: "UKR", w: ""}, {h: "ENG", a: "GER", w: ""}, {h: "NED", a: "CZE", w: ""}, {h: "WAL", a: "DEN", w: "DEN"}],
    ],
    [
      [{h: "", a: "", w: ""}, {h: "", a: "", w: ""}],
      [{h: "", a: "", w: ""}, {h: "", a: "DEN", w: ""}],
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
  const picks = [
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
      name: "Niall Costigan",
      bracket: [
        [
          ["BEL", "ITA", "FRA", "ESP"],
          ["SWE", "ENG", "NED", "DEN"],
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
          ["ENG"],
        ],
        [
          ["BEL"],
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
  ];

  let brackets = [];
  let scores = [];
  for (const pick of picks) {
    let score = 0;
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

          if (i === 1 || i == 2) {
            homePick = pick.bracket[i-1][j][Math.floor(k*2)];
            if (matches[i][j][k].h !== "") {
              homeClass = matches[i][j][k].h === homePick ? "correct" : "wrong";
            }
            awayPick = pick.bracket[i-1][j][Math.floor(k*2)+1];
            if (matches[i][j][k].a !== "") {
              awayClass = matches[i][j][k].a === awayPick ? "correct" : "wrong";
            }
          }
          if (i === 3) {
            homePick = pick.bracket[i-1][j][k];
            if (matches[i][j][k].h !== "") {
              homeClass = matches[i][j][k].h === homePick ? "correct" : "wrong";
            }
            awayPick = pick.bracket[i-1][j+1][k];
            if (matches[i][j][k].a !== "") {
              awayClass = matches[i][j][k].a === awayPick ? "correct" : "wrong";
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
          }
        }
        stages.push(sides);
      }
      matchDivs.push(stages);
    }
    scores.push({name: pick.name, score: score});
    brackets.push(
      <div className="bracket-outer-container">
        <h3>{pick.name}</h3>
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
            <span className="winner">{pick.bracket[3][0][0]} {emojis[pick.bracket[3][0][0]]}</span>
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
      <div>
        <span>{leader.name}</span>:
        <span>{leader.score}</span>
      </div>
    );
  });

  return (
    <div className="App">
      <div>
        <h1> Euros 2021 Pool </h1>
        <p>Sponsored by Max Andriot</p>
      </div>

      <div>
        <h2>Leaderboard</h2>
        {leaderDivs}
      </div>
      <h2>BRACKETS</h2>
      {brackets}
    </div>
  );
}

export default App;
