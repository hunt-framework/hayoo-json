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
        "word": "old-locale"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the ability to adapt to local conventions.\n At present, it supports only time and date information as used by\n System.Time.calendarTimeToString from the System.Time module in the\n old-time package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Locale",
          "name": "Locale",
          "package": "old-locale",
          "source": "src/System-Locale.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the ability to adapt to local conventions At present it supports only time and date information as used by System.Time.calendarTimeToString from the System.Time module in the old-time package",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "Locale",
          "package": "old-locale",
          "partial": "Locale",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Locale",
          "name": "TimeLocale",
          "package": "old-locale",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "TimeLocale",
          "package": "old-locale",
          "partial": "Time Locale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#t:TimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Locale",
          "name": "TimeLocale",
          "package": "old-locale",
          "signature": "TimeLocale",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "TimeLocale",
          "package": "old-locale",
          "partial": "Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:TimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAM/PM symbols\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "amPm",
          "package": "old-locale",
          "signature": "(String, String)",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "AM PM symbols",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "amPm",
          "normalized": "(String,String)",
          "package": "old-locale",
          "partial": "Pm",
          "signature": "(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:amPm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformatting strings\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "dateFmt",
          "package": "old-locale",
          "signature": "String",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "formatting strings",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "dateFmt",
          "package": "old-locale",
          "partial": "Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:dateFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformatting strings\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "dateTimeFmt",
          "package": "old-locale",
          "signature": "String",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "formatting strings",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "dateTimeFmt",
          "package": "old-locale",
          "partial": "Time Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:dateTimeFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Locale",
          "name": "defaultTimeLocale",
          "package": "old-locale",
          "signature": "TimeLocale",
          "source": "src/System-Locale.html#defaultTimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "defaultTimeLocale",
          "package": "old-locale",
          "partial": "Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:defaultTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Locale",
          "name": "intervals",
          "package": "old-locale",
          "signature": "[(String, String)]",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "intervals",
          "normalized": "[(String,String)]",
          "package": "old-locale",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:intervals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally, ISO-8601 just defines YYYY-MM-DD\n but we can add a time spec.\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "iso8601DateFormat",
          "package": "old-locale",
          "signature": "Maybe String -\u003e String",
          "source": "src/System-Locale.html#iso8601DateFormat",
          "type": "function"
        },
        "index": {
          "description": "Normally ISO-8601 just defines YYYY-MM-DD but we can add time spec",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "iso8601DateFormat",
          "normalized": "Maybe String-\u003eString",
          "package": "old-locale",
          "partial": "Date Format",
          "signature": "Maybe String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:iso8601DateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efull and abbreviated months\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "months",
          "package": "old-locale",
          "signature": "[(String, String)]",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "full and abbreviated months",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "months",
          "normalized": "[(String,String)]",
          "package": "old-locale",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:months"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Locale",
          "name": "rfc822DateFormat",
          "package": "old-locale",
          "signature": "String",
          "source": "src/System-Locale.html#rfc822DateFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "rfc822DateFormat",
          "package": "old-locale",
          "partial": "Date Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:rfc822DateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformatting strings\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "time12Fmt",
          "package": "old-locale",
          "signature": "String",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "formatting strings",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "time12Fmt",
          "package": "old-locale",
          "partial": "Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:time12Fmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformatting strings\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "timeFmt",
          "package": "old-locale",
          "signature": "String",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "formatting strings",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "timeFmt",
          "package": "old-locale",
          "partial": "Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:timeFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efull and abbreviated week days\n\u003c/p\u003e",
          "module": "System.Locale",
          "name": "wDays",
          "package": "old-locale",
          "signature": "[(String, String)]",
          "source": "src/System-Locale.html#TimeLocale",
          "type": "function"
        },
        "index": {
          "description": "full and abbreviated week days",
          "hierarchy": "System Locale",
          "module": "System.Locale",
          "name": "wDays",
          "normalized": "[(String,String)]",
          "package": "old-locale",
          "partial": "Days",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-locale/docs/System-Locale.html#v:wDays"
      }
    }
  ]
]