{
  "zones": {
    "Europe/Uzhgorod": [
      "z",
      {
        "wallclock": 788918400000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 788911200000,
        "save": 0,
        "rules": "EU"
      },
      {
        "wallclock": 694224000000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 694216800000,
        "save": 0,
        "rules": "E-Eur"
      },
      {
        "wallclock": 670388400000,
        "format": "EET",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 670384800000,
        "save": 0
      },
      {
        "wallclock": 646797600000,
        "format": "CET",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": 646786800000,
        "save": 0
      },
      {
        "wallclock": 631152000000,
        "format": "MSK",
        "abbrev": "MSK",
        "offset": 10800000,
        "posix": 631141200000,
        "save": 0
      },
      {
        "wallclock": -773452800000,
        "format": "MSK/MSD",
        "abbrev": "MSK",
        "offset": 10800000,
        "posix": -773456400000,
        "save": 0,
        "rules": "Russia"
      },
      {
        "wallclock": -794707200000,
        "format": "CET",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -794714400000,
        "save": 0
      },
      {
        "wallclock": -796867200000,
        "format": "CEST",
        "abbrev": "CEST",
        "offset": 3600000,
        "posix": -796874400000,
        "save": 3600000
      },
      {
        "wallclock": -946771200000,
        "format": "CE%sT",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -946774800000,
        "save": 0,
        "rules": "C-Eur"
      },
      {
        "wallclock": -2500934400000,
        "format": "CET",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -2500939752000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 5352000,
        "posix": -1.7976931348623157e+308,
        "save": 0
      }
    ]
  },
  "rules": {
    "EU": [
      {
        "from": 1981,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 60,
        "clock": "posix",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1979,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1980,
        "month": 3,
        "day": [
          0,
          1
        ],
        "time": 60,
        "clock": "posix",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1978,
        "to": 1978,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      }
    ],
    "E-Eur": [
      {
        "from": 1981,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1979,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1980,
        "month": 3,
        "day": [
          0,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1978,
        "to": 1978,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 0
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 0
      }
    ],
    "Russia": [
      {
        "from": 1996,
        "to": 2010,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1993,
        "to": 2010,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1993,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1992,
        "to": 1992,
        "month": 8,
        "day": [
          6,
          -30
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1992,
        "to": 1992,
        "month": 2,
        "day": [
          6,
          -31
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1985,
        "to": 1991,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1984,
        "to": 1991,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1981,
        "to": 1984,
        "month": 3,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1981,
        "to": 1983,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 8,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 7200000
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 1,
        "day": [
          7,
          14
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 2,
        "day": [
          7,
          20
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 120,
        "letter": "M",
        "saved": 3600000
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 7,
        "day": [
          7,
          16
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 6,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 4,
        "day": [
          7,
          31
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 120,
        "letter": "MDST",
        "saved": 3600000
      },
      {
        "from": 1918,
        "to": 1918,
        "month": 8,
        "day": [
          7,
          16
        ],
        "time": 60,
        "clock": "wallclock",
        "save": 60,
        "letter": "MST",
        "saved": 7200000
      },
      {
        "from": 1918,
        "to": 1918,
        "month": 4,
        "day": [
          7,
          31
        ],
        "time": 1320,
        "clock": "wallclock",
        "save": 120,
        "letter": "MDST",
        "saved": 0
      },
      {
        "from": 1917,
        "to": 1917,
        "month": 11,
        "day": [
          7,
          28
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "MMT",
        "saved": 3600000
      },
      {
        "from": 1917,
        "to": 1917,
        "month": 6,
        "day": [
          7,
          1
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "MST",
        "saved": 0
      }
    ],
    "C-Eur": [
      {
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1981,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1979,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1980,
        "month": 3,
        "day": [
          0,
          1
        ],
        "time": 120,
        "clock": "standard",
        "save": 60,
        "letter": "S"
      },
      {
        "from": 1978,
        "to": 1978,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1944,
        "to": 1945,
        "month": 3,
        "day": [
          1,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1945,
        "to": 1945,
        "month": 8,
        "day": [
          7,
          16
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1944,
        "to": 1944,
        "month": 9,
        "day": [
          7,
          2
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1943,
        "to": 1943,
        "month": 9,
        "day": [
          7,
          4
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1943,
        "to": 1943,
        "month": 2,
        "day": [
          7,
          29
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1942,
        "to": 1942,
        "month": 10,
        "day": [
          7,
          2
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1940,
        "to": 1940,
        "month": 3,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1917,
        "to": 1918,
        "month": 8,
        "day": [
          1,
          15
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1917,
        "to": 1918,
        "month": 3,
        "day": [
          1,
          15
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1916,
        "to": 1916,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 60,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1916,
        "to": 1916,
        "month": 3,
        "day": [
          7,
          30
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      }
    ]
  }
}