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
        "word": "friendly-time"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrints a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as \u003ca\u003ea few seconds ago\u003c/a\u003e or \u003ca\u003e3 days ago\u003c/a\u003e and similar.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.Human",
          "name": "Human",
          "package": "friendly-time",
          "source": "src/Data-Time-Format-Human.html",
          "type": "module"
        },
        "index": {
          "description": "Prints UTCTime as few seconds ago or days ago and similar",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "Human",
          "package": "friendly-time",
          "partial": "Human",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "HumanTimeLocale",
          "package": "friendly-time",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "HumanTimeLocale",
          "package": "friendly-time",
          "partial": "Human Time Locale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#t:HumanTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "HumanTimeLocale",
          "package": "friendly-time",
          "signature": "HumanTimeLocale",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "HumanTimeLocale",
          "package": "friendly-time",
          "partial": "Human Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:HumanTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "aboutHoursAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "aboutHoursAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Hours Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:aboutHoursAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when time difference is more than 24 hours but less than 5 days.\n First argument is the day of week of the older time, second is string\n formatted with \u003ccode\u003e\u003ca\u003edayOfWeekFmt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "at",
          "package": "friendly-time",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "description": "Used when time difference is more than hours but less than days First argument is the day of week of the older time second is string formatted with dayOfWeekFmt",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "at",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "friendly-time",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime format used with \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e member. See \u003ccode\u003eData.Time.Format\u003c/code\u003e for\n   details on formatting  sequences.\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "dayOfWeekFmt",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "description": "Time format used with at member See Data.Time.Format for details on formatting sequences",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "dayOfWeekFmt",
          "package": "friendly-time",
          "partial": "Of Week Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:dayOfWeekFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "daysAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "daysAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:daysAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault human time locale uses English.\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "defaultHumanTimeLocale",
          "package": "friendly-time",
          "signature": "HumanTimeLocale",
          "source": "src/Data-Time-Format-Human.html#defaultHumanTimeLocale",
          "type": "function"
        },
        "index": {
          "description": "Default human time locale uses English",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "defaultHumanTimeLocale",
          "package": "friendly-time",
          "partial": "Human Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:defaultHumanTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBased on \u003ccode\u003ehumanReadableTimeDiff\u003c/code\u003e found in\n   \u003ca\u003ehttps://github.com/snoyberg/haskellers/blob/master/Haskellers.hs\u003c/a\u003e,\n   \u003ca\u003ehttps://github.com/snoyberg/haskellers/blob/master/LICENSE\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTime",
          "package": "friendly-time",
          "signature": "UTCTime -\u003e IO String",
          "source": "src/Data-Time-Format-Human.html#humanReadableTime",
          "type": "function"
        },
        "index": {
          "description": "Based on humanReadableTimeDiff found in https github.com snoyberg haskellers blob master Haskellers.hs https github.com snoyberg haskellers blob master LICENSE",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTime",
          "normalized": "UTCTime-\u003eIO String",
          "package": "friendly-time",
          "partial": "Readable Time",
          "signature": "UTCTime-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:humanReadableTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure form, takes current time as an argument\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTime'",
          "package": "friendly-time",
          "signature": "UTCTime-\u003e UTCTime-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "pure form takes current time as an argument",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTime'",
          "normalized": "UTCTime-\u003eUTCTime-\u003eString",
          "package": "friendly-time",
          "partial": "Readable Time'",
          "signature": "UTCTime-\u003eUTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:humanReadableTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI18N version of \u003ccode\u003e\u003ca\u003ehumanReadableTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTimeI18N",
          "package": "friendly-time",
          "signature": "HumanTimeLocale -\u003e UTCTime -\u003e IO String",
          "source": "src/Data-Time-Format-Human.html#humanReadableTimeI18N",
          "type": "function"
        },
        "index": {
          "description": "I18N version of humanReadableTime",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTimeI18N",
          "normalized": "HumanTimeLocale-\u003eUTCTime-\u003eIO String",
          "package": "friendly-time",
          "partial": "Readable Time",
          "signature": "HumanTimeLocale-\u003eUTCTime-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:humanReadableTimeI18N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI18N version of \u003ccode\u003e\u003ca\u003ehumanReadableTime'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTimeI18N'",
          "package": "friendly-time",
          "signature": "HumanTimeLocale-\u003e UTCTime-\u003e UTCTime-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "I18N version of humanReadableTime",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "humanReadableTimeI18N'",
          "normalized": "HumanTimeLocale-\u003eUTCTime-\u003eUTCTime-\u003eString",
          "package": "friendly-time",
          "partial": "Readable Time N'",
          "signature": "HumanTimeLocale-\u003eUTCTime-\u003eUTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:humanReadableTimeI18N-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "justNow",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "justNow",
          "package": "friendly-time",
          "partial": "Now",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:justNow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "locale",
          "package": "friendly-time",
          "signature": "TimeLocale",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "locale",
          "package": "friendly-time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "minutesAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "minutesAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:minutesAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "onYear",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "onYear",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Year",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:onYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "oneHourAgo",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "oneHourAgo",
          "package": "friendly-time",
          "partial": "Hour Ago",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:oneHourAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "oneMinuteAgo",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "oneMinuteAgo",
          "package": "friendly-time",
          "partial": "Minute Ago",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:oneMinuteAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime format used when time difference is at least one year. Time\n   formatted using this string will be passed to \u003ccode\u003e\u003ca\u003eonYear\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "prevYearFmt",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "description": "Time format used when time difference is at least one year Time formatted using this string will be passed to onYear",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "prevYearFmt",
          "package": "friendly-time",
          "partial": "Year Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:prevYearFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "secondsAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "secondsAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:secondsAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime format used when time difference is less than a year but more\n   than a month. Time formatted using this string will be passed\n   to \u003ccode\u003e\u003ca\u003eonYear\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Format.Human",
          "name": "thisYearFmt",
          "package": "friendly-time",
          "signature": "String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "description": "Time format used when time difference is less than year but more than month Time formatted using this string will be passed to onYear",
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "thisYearFmt",
          "package": "friendly-time",
          "partial": "Year Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:thisYearFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "weekAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "weekAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:weekAgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Format.Human",
          "name": "weeksAgo",
          "package": "friendly-time",
          "signature": "String -\u003e String",
          "source": "src/Data-Time-Format-Human.html#HumanTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Format Human",
          "module": "Data.Time.Format.Human",
          "name": "weeksAgo",
          "normalized": "String-\u003eString",
          "package": "friendly-time",
          "partial": "Ago",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/friendly-time/docs/Data-Time-Format-Human.html#v:weeksAgo"
      }
    }
  ]
]