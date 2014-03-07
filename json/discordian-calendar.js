[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "discordian-calendar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Calendar.Discordian",
          "name": "Discordian",
          "package": "discordian-calendar",
          "source": "src/Data-Time-Calendar-Discordian.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "Discordian",
          "package": "discordian-calendar",
          "partial": "Discordian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that emulates the default behavior of the \n  ddate command-line utility\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "ddate",
          "package": "discordian-calendar",
          "signature": "Day -\u003e String",
          "source": "src/Data-Time-Calendar-Discordian.html#ddate",
          "type": "function"
        },
        "index": {
          "description": "function that emulates the default behavior of the ddate command-line utility",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "ddate",
          "normalized": "Day-\u003eString",
          "package": "discordian-calendar",
          "signature": "Day-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:ddate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the Discordian date to the modified Julian date, clipping values\n  to valid ranges.\n\u003c/p\u003e\u003cp\u003eBecause St. Tibs Day is not considered part of the Discordian week, you\n  should use the \u003ccode\u003e\u003ca\u003estTibsDay\u003c/a\u003e\u003c/code\u003e function to calculate those days.\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "fromDiscordian",
          "package": "discordian-calendar",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e Day",
          "source": "src/Data-Time-Calendar-Discordian.html#fromDiscordian",
          "type": "function"
        },
        "index": {
          "description": "Converts the Discordian date to the modified Julian date clipping values to valid ranges Because St Tibs Day is not considered part of the Discordian week you should use the stTibsDay function to calculate those days",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "fromDiscordian",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003eDay",
          "package": "discordian-calendar",
          "partial": "Discordian",
          "signature": "Integer-\u003eInt-\u003eInt-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:fromDiscordian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efromDiscordian\u003c/a\u003e\u003c/code\u003e, but invalid dates result in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "fromDiscordianValid",
          "package": "discordian-calendar",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e Maybe Day",
          "source": "src/Data-Time-Calendar-Discordian.html#fromDiscordianValid",
          "type": "function"
        },
        "index": {
          "description": "Similar to fromDiscordian but invalid dates result in Nothing",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "fromDiscordianValid",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003eMaybe Day",
          "package": "discordian-calendar",
          "partial": "Discordian Valid",
          "signature": "Integer-\u003eInt-\u003eInt-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:fromDiscordianValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the season and day, show the name of the day of the week.\n  Input values are clipped to valid ranges.\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "showDayOfWeek",
          "package": "discordian-calendar",
          "signature": "Int -\u003e Int -\u003e String",
          "source": "src/Data-Time-Calendar-Discordian.html#showDayOfWeek",
          "type": "function"
        },
        "index": {
          "description": "Given the season and day show the name of the day of the week Input values are clipped to valid ranges",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "showDayOfWeek",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "discordian-calendar",
          "partial": "Day Of Week",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:showDayOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the name of a Discordian season. Input values are clipped to valid ranges.\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "showSeason",
          "package": "discordian-calendar",
          "signature": "Int -\u003e String",
          "source": "src/Data-Time-Calendar-Discordian.html#showSeason",
          "type": "function"
        },
        "index": {
          "description": "Show the name of Discordian season Input values are clipped to valid ranges",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "showSeason",
          "normalized": "Int-\u003eString",
          "package": "discordian-calendar",
          "partial": "Season",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:showSeason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the St. Tibs Day of a given year to its equivalent modified Julian date. A value of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates no St. Tibs Day for the given year.\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "stTibsDay",
          "package": "discordian-calendar",
          "signature": "Integer -\u003e Maybe Day",
          "source": "src/Data-Time-Calendar-Discordian.html#stTibsDay",
          "type": "function"
        },
        "index": {
          "description": "Converts the St Tibs Day of given year to its equivalent modified Julian date value of Nothing indicates no St Tibs Day for the given year",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "stTibsDay",
          "normalized": "Integer-\u003eMaybe Day",
          "package": "discordian-calendar",
          "partial": "Tibs Day",
          "signature": "Integer-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:stTibsDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a modified Julian date to a Discordian date\n\u003c/p\u003e\u003cp\u003eThe result format is either (year, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (season, day))\n  for normal days or (year, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) for St. Tibs Day\n\u003c/p\u003e",
          "module": "Data.Time.Calendar.Discordian",
          "name": "toDiscordian",
          "package": "discordian-calendar",
          "signature": "Day -\u003e (Integer, Maybe (Int, Int))",
          "source": "src/Data-Time-Calendar-Discordian.html#toDiscordian",
          "type": "function"
        },
        "index": {
          "description": "Converts modified Julian date to Discordian date The result format is either year Just season day for normal days or year Nothing for St Tibs Day",
          "hierarchy": "Data Time Calendar Discordian",
          "module": "Data.Time.Calendar.Discordian",
          "name": "toDiscordian",
          "normalized": "Day-\u003e(Integer,Maybe(Int,Int))",
          "package": "discordian-calendar",
          "partial": "Discordian",
          "signature": "Day-\u003e(Integer,Maybe(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discordian-calendar/docs/Data-Time-Calendar-Discordian.html#v:toDiscordian"
      }
    }
  ]
]