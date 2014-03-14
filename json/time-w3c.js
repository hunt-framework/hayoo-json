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
        "word": "time-w3c"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat W3C Date and Time strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.W3C.Format",
          "name": "Format",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Format.html",
          "type": "module"
        },
        "index": {
          "description": "Format W3C Date and Time strings",
          "hierarchy": "Data Time W3C Format",
          "module": "Data.Time.W3C.Format",
          "name": "Format",
          "package": "time-w3c",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat W3C Date and Time string from anything convertible to\n \u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e type. The most obvious acceptable type is the\n \u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e",
          "module": "[\"Data.Time.W3C.Format\",\"Data.Time.W3C\"]",
          "name": "format",
          "package": "time-w3c",
          "signature": "t -\u003e String",
          "source": "src/Data-Time-W3C-Format.html#format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Format.html#v:format\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:format\"]"
        },
        "index": {
          "description": "Format W3C Date and Time string from anything convertible to W3CDateTime type The most obvious acceptable type is the W3CDateTime itself",
          "hierarchy": "Data Time W3C Format",
          "module": "Data.Time.W3C.Format",
          "name": "format",
          "normalized": "a-\u003eString",
          "package": "time-w3c",
          "signature": "t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Format.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eW3C Date and Time parser combinator for \u003ca\u003eText.Parsec\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.W3C.Parser.Parsec",
          "name": "Parsec",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Parser-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "W3C Date and Time parser combinator for Text.Parsec",
          "hierarchy": "Data Time W3C Parser Parsec",
          "module": "Data.Time.W3C.Parser.Parsec",
          "name": "Parsec",
          "package": "time-w3c",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Parser-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a parser combinator for \u003ca\u003eText.Parsec\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.W3C.Parser.Parsec",
          "name": "w3cDateTime",
          "package": "time-w3c",
          "signature": "ParsecT s u m W3CDateTime",
          "source": "src/Data-Time-W3C-Parser-Parsec.html#w3cDateTime",
          "type": "function"
        },
        "index": {
          "description": "This is parser combinator for Text.Parsec",
          "hierarchy": "Data Time W3C Parser Parsec",
          "module": "Data.Time.W3C.Parser.Parsec",
          "name": "w3cDateTime",
          "package": "time-w3c",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Parser-Parsec.html#v:w3cDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse W3C Date and Time string.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.W3C.Parser",
          "name": "Parser",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parse W3C Date and Time string",
          "hierarchy": "Data Time W3C Parser",
          "module": "Data.Time.W3C.Parser",
          "name": "Parser",
          "package": "time-w3c",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse W3C Date and Time string to anything convertible from\n \u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e type. The most obvious acceptable type is the\n \u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e itself. If the given string is ill-formatted, \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Time.W3C.Parser\",\"Data.Time.W3C\"]",
          "name": "parse",
          "package": "time-w3c",
          "signature": "String -\u003e Maybe t",
          "source": "src/Data-Time-W3C-Parser.html#parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Parser.html#v:parse\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:parse\"]"
        },
        "index": {
          "description": "Parse W3C Date and Time string to anything convertible from W3CDateTime type The most obvious acceptable type is the W3CDateTime itself If the given string is ill-formatted parse returns Nothing",
          "hierarchy": "Data Time W3C Parser",
          "module": "Data.Time.W3C.Parser",
          "name": "parse",
          "normalized": "String-\u003eMaybe a",
          "package": "time-w3c",
          "signature": "String-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types defined by this package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.W3C.Types",
          "name": "Types",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Data types defined by this package",
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "Types",
          "package": "time-w3c",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e represents a W3C Date and Time format.\n\u003c/p\u003e\u003cp\u003eThe field \u003ccode\u003e\u003ca\u003ew3cYear\u003c/a\u003e\u003c/code\u003e is mandatory while other fields are\n optional. But you should be careful about combinations of such\n optional fields. No combinations are allowed except for the\n following list:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e YYYY\n\u003c/li\u003e\u003cli\u003e YYYY-MM\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DD\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DDThh:mmTZD\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DDThh:mm:ss.sTZD\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis data type is \u003cem\u003epartially ordered\u003c/em\u003e so we can't make it an\n instance of Ord (e.g. \u003ccode\u003e\"2010\"\u003c/code\u003e and \u003ccode\u003e\"2010-01\"\u003c/code\u003e can't be\n compared).\n\u003c/p\u003e",
          "module": "Data.Time.W3C.Types",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "data"
        },
        "index": {
          "description": "W3CDateTime represents W3C Date and Time format The field w3cYear is mandatory while other fields are optional But you should be careful about combinations of such optional fields No combinations are allowed except for the following list YYYY YYYY-MM YYYY-MM-DD YYYY-MM-DDThh mmTZD YYYY-MM-DDThh mm ss.sTZD This data type is partially ordered so we can make it an instance of Ord e.g and can be compared",
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "partial": "CDate Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#t:W3CDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "signature": "W3CDateTime",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:W3CDateTime\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:W3CDateTime\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "partial": "CDate Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:W3CDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cDay",
          "package": "time-w3c",
          "signature": "(Maybe Int)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cDay\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cDay\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cDay",
          "package": "time-w3c",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cHour",
          "package": "time-w3c",
          "signature": "(Maybe Int)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cHour\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cHour\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cHour",
          "package": "time-w3c",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cMinute",
          "package": "time-w3c",
          "signature": "(Maybe Int)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cMinute\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cMinute\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cMinute",
          "package": "time-w3c",
          "partial": "Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cMonth",
          "package": "time-w3c",
          "signature": "(Maybe Int)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cMonth\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cMonth\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cMonth",
          "package": "time-w3c",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cSecond",
          "package": "time-w3c",
          "signature": "(Maybe Pico)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cSecond\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cSecond\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cSecond",
          "package": "time-w3c",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cTimeZone",
          "package": "time-w3c",
          "signature": "(Maybe TimeZone)",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cTimeZone\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cTimeZone\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cTimeZone",
          "package": "time-w3c",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.W3C.Types\",\"Data.Time.W3C\"]",
          "name": "w3cYear",
          "package": "time-w3c",
          "signature": "Integer",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cYear\",\"http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#v:w3cYear\"]"
        },
        "index": {
          "hierarchy": "Data Time W3C Types",
          "module": "Data.Time.W3C.Types",
          "name": "w3cYear",
          "package": "time-w3c",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C-Types.html#v:w3cYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides functionalities to parse and format W3C\n Date and Time. The package can also be used to convert it from/to\n \u003ccode\u003eData.Time.Calendar.Day\u003c/code\u003e and \u003ccode\u003eData.Time.LocalTime.ZonedTime\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://www.w3.org/TR/NOTE-datetime\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.W3C",
          "name": "W3C",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides functionalities to parse and format W3C Date and Time The package can also be used to convert it from to Data.Time.Calendar.Day and Data.Time.LocalTime.ZonedTime See http www.w3.org TR NOTE-datetime",
          "hierarchy": "Data Time W3C",
          "module": "Data.Time.W3C",
          "name": "W3C",
          "package": "time-w3c",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eW3CDateTime\u003c/a\u003e\u003c/code\u003e represents a W3C Date and Time format.\n\u003c/p\u003e\u003cp\u003eThe field \u003ccode\u003e\u003ca\u003ew3cYear\u003c/a\u003e\u003c/code\u003e is mandatory while other fields are\n optional. But you should be careful about combinations of such\n optional fields. No combinations are allowed except for the\n following list:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e YYYY\n\u003c/li\u003e\u003cli\u003e YYYY-MM\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DD\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DDThh:mmTZD\n\u003c/li\u003e\u003cli\u003e YYYY-MM-DDThh:mm:ss.sTZD\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis data type is \u003cem\u003epartially ordered\u003c/em\u003e so we can't make it an\n instance of Ord (e.g. \u003ccode\u003e\"2010\"\u003c/code\u003e and \u003ccode\u003e\"2010-01\"\u003c/code\u003e can't be\n compared).\n\u003c/p\u003e",
          "module": "Data.Time.W3C",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "source": "src/Data-Time-W3C-Types.html#W3CDateTime",
          "type": "data"
        },
        "index": {
          "description": "W3CDateTime represents W3C Date and Time format The field w3cYear is mandatory while other fields are optional But you should be careful about combinations of such optional fields No combinations are allowed except for the following list YYYY YYYY-MM YYYY-MM-DD YYYY-MM-DDThh mmTZD YYYY-MM-DDThh mm ss.sTZD This data type is partially ordered so we can make it an instance of Ord e.g and can be compared",
          "hierarchy": "Data Time W3C",
          "module": "Data.Time.W3C",
          "name": "W3CDateTime",
          "package": "time-w3c",
          "partial": "CDate Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-w3c/docs/Data-Time-W3C.html#t:W3CDateTime"
      }
    }
  ]
]