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
        "word": "strptime"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to strptime with extra features - see below.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Parse",
          "name": "Parse",
          "package": "strptime",
          "source": "src/Data-Time-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "binding to strptime with extra features see below",
          "hierarchy": "Data Time Parse",
          "module": "Data.Time.Parse",
          "name": "Parse",
          "package": "strptime",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strptime/docs/Data-Time-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of values from which time may be parsed\n\u003c/p\u003e",
          "module": "Data.Time.Parse",
          "name": "Strptime",
          "package": "strptime",
          "source": "src/Data-Time-Parse.html#Strptime",
          "type": "class"
        },
        "index": {
          "description": "The class of values from which time may be parsed",
          "hierarchy": "Data Time Parse",
          "module": "Data.Time.Parse",
          "name": "Strptime",
          "package": "strptime",
          "partial": "Strptime",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/strptime/docs/Data-Time-Parse.html#t:Strptime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format string in the format of strptime (see \u003ca\u003ehttp://linux.die.net/man/3/strptime\u003c/a\u003e)\n and a data string, parse a date+time value from the data string and also return the remainder\n of the data string. We also support a \u003ca\u003e%OS\u003c/a\u003e format specifier for fractional seconds, because\n we are using the strptime from r-project.org. We also support \u003ca\u003e%^[+-][N]s\u003c/a\u003e for multiples of \n seconds since epoch, for example \u003ca\u003e%^-3s\u003c/a\u003e is milliseconds since epoch (N can only be 1 digit)\n\u003c/p\u003e",
          "module": "Data.Time.Parse",
          "name": "strptime",
          "package": "strptime",
          "signature": "a -\u003e a -\u003e Maybe (LocalTime, a)",
          "source": "src/Data-Time-Parse.html#strptime",
          "type": "method"
        },
        "index": {
          "description": "Given format string in the format of strptime see http linux.die.net man strptime and data string parse date time value from the data string and also return the remainder of the data string We also support OS format specifier for fractional seconds because we are using the strptime from r-project.org We also support for multiples of seconds since epoch for example is milliseconds since epoch can only be digit",
          "hierarchy": "Data Time Parse",
          "module": "Data.Time.Parse",
          "name": "strptime",
          "normalized": "a-\u003ea-\u003eMaybe(LocalTime,a)",
          "package": "strptime",
          "signature": "a-\u003ea-\u003eMaybe(LocalTime,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/strptime/docs/Data-Time-Parse.html#v:strptime"
      }
    }
  ]
]