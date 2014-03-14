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
        "word": "timeparsers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Date",
          "name": "Date",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Date.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "Date",
          "package": "timeparsers",
          "partial": "Date",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a date using tokenizedDate, yyyymmdd, yymmdd, yearDayOfYear, fullDate\n or julianDay, converting to BCE if necessary\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "defaultDay",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#defaultDay",
          "type": "function"
        },
        "index": {
          "description": "parse date using tokenizedDate yyyymmdd yymmdd yearDayOfYear fullDate or julianDay converting to BCE if necessary",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "defaultDay",
          "package": "timeparsers",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:defaultDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date as in defaultDay, but don't check for BCE\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "defaultDayCE",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#defaultDayCE",
          "type": "function"
        },
        "index": {
          "description": "Parse date as in defaultDay but don check for BCE",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "defaultDayCE",
          "package": "timeparsers",
          "partial": "Day CE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:defaultDayCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a date such as \u003ca\u003eJanuary 1, 2011\u003c/a\u003e.\n Will treat a preceding weekday as noise\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "fullDate",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#fullDate",
          "type": "function"
        },
        "index": {
          "description": "parse date such as January Will treat preceding weekday as noise",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "fullDate",
          "package": "timeparsers",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:fullDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a julian day (days since 4713\u003cem\u003e1\u003c/em\u003e1 BCE)\n Must prepend with \u003ca\u003eJ\u003c/a\u003e, \u003ca\u003eJD\u003c/a\u003e, or \u003ca\u003eJulian\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "julianDay",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#julianDay",
          "type": "function"
        },
        "index": {
          "description": "parse julian day days since BCE Must prepend with JD or Julian",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "julianDay",
          "package": "timeparsers",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:julianDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Date",
          "name": "tokenizedDate",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#tokenizedDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "tokenizedDate",
          "package": "timeparsers",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:tokenizedDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a date in year, day of year format\n i.e yyyy/ddd or yyyydd\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "yearDayOfYear",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#yearDayOfYear",
          "type": "function"
        },
        "index": {
          "description": "parse date in year day of year format i.e yyyy ddd or yyyydd",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "yearDayOfYear",
          "package": "timeparsers",
          "partial": "Day Of Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:yearDayOfYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a date with no separators of the format yymmdd.\n Will treat a preceding weekday as noise\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "yymmdd",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#yymmdd",
          "type": "function"
        },
        "index": {
          "description": "parse date with no separators of the format yymmdd Will treat preceding weekday as noise",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "yymmdd",
          "package": "timeparsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:yymmdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a date with no separators of the format yyyymmdd.\n Will treat a preceding weekday as noise.\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Date",
          "name": "yyyymmdd",
          "package": "timeparsers",
          "signature": "OptionedParser Day",
          "source": "src/Data-Time-Parsers-Date.html#yyyymmdd",
          "type": "function"
        },
        "index": {
          "description": "parse date with no separators of the format yyyymmdd Will treat preceding weekday as noise",
          "hierarchy": "Data Time Parsers Date",
          "module": "Data.Time.Parsers.Date",
          "name": "yyyymmdd",
          "package": "timeparsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Date.html#v:yyyymmdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Tables",
          "name": "Tables",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Tables.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Tables",
          "module": "Data.Time.Parsers.Tables",
          "name": "Tables",
          "package": "timeparsers",
          "partial": "Tables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Tables.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Tables",
          "name": "ausTimeZones",
          "package": "timeparsers",
          "signature": "Map ByteString TimeZone",
          "source": "src/Data-Time-Parsers-Tables.html#ausTimeZones",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Tables",
          "module": "Data.Time.Parsers.Tables",
          "name": "ausTimeZones",
          "package": "timeparsers",
          "partial": "Time Zones",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Tables.html#v:ausTimeZones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Tables",
          "name": "months",
          "package": "timeparsers",
          "signature": "Map ByteString Integer",
          "source": "src/Data-Time-Parsers-Tables.html#months",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Tables",
          "module": "Data.Time.Parsers.Tables",
          "name": "months",
          "package": "timeparsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Tables.html#v:months"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Tables",
          "name": "timeZones",
          "package": "timeparsers",
          "signature": "Map ByteString TimeZone",
          "source": "src/Data-Time-Parsers-Tables.html#timeZones",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Tables",
          "module": "Data.Time.Parsers.Tables",
          "name": "timeZones",
          "package": "timeparsers",
          "partial": "Zones",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Tables.html#v:timeZones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Tables",
          "name": "weekdays",
          "package": "timeparsers",
          "signature": "[ByteString]",
          "source": "src/Data-Time-Parsers-Tables.html#weekdays",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Tables",
          "module": "Data.Time.Parsers.Tables",
          "name": "weekdays",
          "normalized": "[ByteString]",
          "package": "timeparsers",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Tables.html#v:weekdays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Time",
          "name": "Time",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Time",
          "module": "Data.Time.Parsers.Time",
          "name": "Time",
          "package": "timeparsers",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a time of day intwelve hour or twenty four hour format\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Time",
          "name": "defaultTimeOfDay",
          "package": "timeparsers",
          "signature": "OptionedParser TimeOfDay",
          "source": "src/Data-Time-Parsers-Time.html#defaultTimeOfDay",
          "type": "function"
        },
        "index": {
          "description": "Parse time of day intwelve hour or twenty four hour format",
          "hierarchy": "Data Time Parsers Time",
          "module": "Data.Time.Parsers.Time",
          "name": "defaultTimeOfDay",
          "package": "timeparsers",
          "partial": "Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Time.html#v:defaultTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a TimeOfDay in twelve hour format\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Time",
          "name": "twelveHour",
          "package": "timeparsers",
          "signature": "OptionedParser TimeOfDay",
          "source": "src/Data-Time-Parsers-Time.html#twelveHour",
          "type": "function"
        },
        "index": {
          "description": "Parse TimeOfDay in twelve hour format",
          "hierarchy": "Data Time Parsers Time",
          "module": "Data.Time.Parsers.Time",
          "name": "twelveHour",
          "package": "timeparsers",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Time.html#v:twelveHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a TimeOfDay in twenty four hour format\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Time",
          "name": "twentyFourHour",
          "package": "timeparsers",
          "signature": "OptionedParser TimeOfDay",
          "source": "src/Data-Time-Parsers-Time.html#twentyFourHour",
          "type": "function"
        },
        "index": {
          "description": "Parse TimeOfDay in twenty four hour format",
          "hierarchy": "Data Time Parsers Time",
          "module": "Data.Time.Parsers.Time",
          "name": "twentyFourHour",
          "package": "timeparsers",
          "partial": "Four Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Time.html#v:twentyFourHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Timestamp",
          "name": "Timestamp",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Timestamp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "Timestamp",
          "package": "timeparsers",
          "partial": "Timestamp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a LocalTime using defaultDay and defaultTime\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultLocalTime",
          "package": "timeparsers",
          "signature": "OptionedParser LocalTime",
          "source": "src/Data-Time-Parsers-Timestamp.html#defaultLocalTime",
          "type": "function"
        },
        "index": {
          "description": "Parse LocalTime using defaultDay and defaultTime",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultLocalTime",
          "package": "timeparsers",
          "partial": "Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:defaultLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an offset TimeZone or named TimeZone\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultTimeZone",
          "package": "timeparsers",
          "signature": "OptionedParser TimeZone",
          "source": "src/Data-Time-Parsers-Timestamp.html#defaultTimeZone",
          "type": "function"
        },
        "index": {
          "description": "Parse an offset TimeZone or named TimeZone",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultTimeZone",
          "package": "timeparsers",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:defaultTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Timestamp using posixTime or defaultZonedTime\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultTimestamp",
          "package": "timeparsers",
          "signature": "OptionedParser a",
          "source": "src/Data-Time-Parsers-Timestamp.html#defaultTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Parse Timestamp using posixTime or defaultZonedTime",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultTimestamp",
          "package": "timeparsers",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:defaultTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a zonedTime using defaultLocalTime and defaultTimeZone\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultZonedTime",
          "package": "timeparsers",
          "signature": "OptionedParser ZonedTime",
          "source": "src/Data-Time-Parsers-Timestamp.html#defaultZonedTime",
          "type": "function"
        },
        "index": {
          "description": "Parse zonedTime using defaultLocalTime and defaultTimeZone",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "defaultZonedTime",
          "package": "timeparsers",
          "partial": "Zoned Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:defaultZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an explicit timestamp, or a relative time\n (now, today, yesterday, tomorrow)\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "extendTimestamp",
          "package": "timeparsers",
          "signature": "OptionedParser a -\u003e OptionedParser (ExtendedTimestamp a)",
          "source": "src/Data-Time-Parsers-Timestamp.html#extendTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Parse an explicit timestamp or relative time now today yesterday tomorrow",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "extendTimestamp",
          "normalized": "OptionedParser a-\u003eOptionedParser(ExtendedTimestamp a)",
          "package": "timeparsers",
          "partial": "Timestamp",
          "signature": "OptionedParser a-\u003eOptionedParser(ExtendedTimestamp a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:extendTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Date parser and a TimeOfDay parser, parse a LocalTime\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "localTime",
          "package": "timeparsers",
          "signature": "OptionedParser Day -\u003e OptionedParser TimeOfDay -\u003e OptionedParser LocalTime",
          "source": "src/Data-Time-Parsers-Timestamp.html#localTime",
          "type": "function"
        },
        "index": {
          "description": "Given Date parser and TimeOfDay parser parse LocalTime",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "localTime",
          "normalized": "OptionedParser Day-\u003eOptionedParser TimeOfDay-\u003eOptionedParser LocalTime",
          "package": "timeparsers",
          "partial": "Time",
          "signature": "OptionedParser Day-\u003eOptionedParser TimeOfDay-\u003eOptionedParser LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:localTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an lookup a named timezone\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "namedTimeZone",
          "package": "timeparsers",
          "signature": "OptionedParser TimeZone",
          "source": "src/Data-Time-Parsers-Timestamp.html#namedTimeZone",
          "type": "function"
        },
        "index": {
          "description": "Parse an lookup named timezone",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "namedTimeZone",
          "package": "timeparsers",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:namedTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a timezone in offset format\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "offsetTimeZone",
          "package": "timeparsers",
          "signature": "OptionedParser TimeZone",
          "source": "src/Data-Time-Parsers-Timestamp.html#offsetTimeZone",
          "type": "function"
        },
        "index": {
          "description": "Parse timezone in offset format",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "offsetTimeZone",
          "package": "timeparsers",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:offsetTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number and interpret as seconds since the Epoch\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "posixTime",
          "package": "timeparsers",
          "signature": "OptionedParser POSIXTime",
          "source": "src/Data-Time-Parsers-Timestamp.html#posixTime",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number and interpret as seconds since the Epoch",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "posixTime",
          "package": "timeparsers",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:posixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a LocalTime parser and a TimeZone Parser, parse a ZonedTime\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "zonedTime",
          "package": "timeparsers",
          "signature": "OptionedParser LocalTime -\u003e OptionedParser TimeZone -\u003e OptionedParser ZonedTime",
          "source": "src/Data-Time-Parsers-Timestamp.html#zonedTime",
          "type": "function"
        },
        "index": {
          "description": "Given LocalTime parser and TimeZone Parser parse ZonedTime",
          "hierarchy": "Data Time Parsers Timestamp",
          "module": "Data.Time.Parsers.Timestamp",
          "name": "zonedTime",
          "normalized": "OptionedParser LocalTime-\u003eOptionedParser TimeZone-\u003eOptionedParser ZonedTime",
          "package": "timeparsers",
          "partial": "Time",
          "signature": "OptionedParser LocalTime-\u003eOptionedParser TimeZone-\u003eOptionedParser ZonedTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Timestamp.html#v:zonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "Types",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Types",
          "package": "timeparsers",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats for purely numeric dates, e.g. 99-2-27\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "DateFormat",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#DateFormat",
          "type": "data"
        },
        "index": {
          "description": "Formats for purely numeric dates e.g",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "DateFormat",
          "package": "timeparsers",
          "partial": "Date Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:DateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "DateToken",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#DateToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "DateToken",
          "package": "timeparsers",
          "partial": "Date Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:DateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "ExtendedTimestamp",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "ExtendedTimestamp",
          "package": "timeparsers",
          "partial": "Extended Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:ExtendedTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to tune the behavior of a parser\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Flag",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "Flags to tune the behavior of parser",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Flag",
          "package": "timeparsers",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from ZonedTime\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "FromZonedTime",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#FromZonedTime",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from ZonedTime",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "FromZonedTime",
          "package": "timeparsers",
          "partial": "From Zoned Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:FromZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Parser with Options\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "OptionedParser",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#OptionedParser",
          "type": "type"
        },
        "index": {
          "description": "Parser with Options",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "OptionedParser",
          "package": "timeparsers",
          "partial": "Optioned Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:OptionedParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "Options",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Options",
          "package": "timeparsers",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to ZonedTime\n For LocalTime, it is assumed the TimeZone is UTC\n For Day, it is assumed that the TimeOfDay is midnight and the TimeZone is UTC\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "ToZonedTime",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Types.html#ToZonedTime",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to ZonedTime For LocalTime it is assumed the TimeZone is UTC For Day it is assumed that the TimeOfDay is midnight and the TimeZone is UTC",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "ToZonedTime",
          "package": "timeparsers",
          "partial": "To Zoned Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#t:ToZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Integer that could represent a day, month, or year\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Any",
          "package": "timeparsers",
          "signature": "Any Integer",
          "source": "src/Data-Time-Parsers-Types.html#DateToken",
          "type": "function"
        },
        "index": {
          "description": "An Integer that could represent day month or year",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Any",
          "package": "timeparsers",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse Australian Timezones\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "AustralianTimeZones",
          "package": "timeparsers",
          "signature": "AustralianTimeZones",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "Use Australian Timezones",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "AustralianTimeZones",
          "package": "timeparsers",
          "partial": "Australian Time Zones",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:AustralianTimeZones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eday-month-year\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "DMY",
          "package": "timeparsers",
          "signature": "DMY",
          "source": "src/Data-Time-Parsers-Types.html#DateFormat",
          "type": "function"
        },
        "index": {
          "description": "day-month-year",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "DMY",
          "package": "timeparsers",
          "partial": "DMY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:DMY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no TimeOfDay is supplied for a type where it\n is required, use midnight\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "DefaultToMidnight",
          "package": "timeparsers",
          "signature": "DefaultToMidnight",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "If no TimeOfDay is supplied for type where it is required use midnight",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "DefaultToMidnight",
          "package": "timeparsers",
          "partial": "Default To Midnight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:DefaultToMidnight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no timezone is supplied for a type where it\n is required, use UTC\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "DefaultToUTC",
          "package": "timeparsers",
          "signature": "DefaultToUTC",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "If no timezone is supplied for type where it is required use UTC",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "DefaultToUTC",
          "package": "timeparsers",
          "partial": "Default To UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:DefaultToUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonth-year-day\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "MDY",
          "package": "timeparsers",
          "signature": "MDY",
          "source": "src/Data-Time-Parsers-Types.html#DateFormat",
          "type": "function"
        },
        "index": {
          "description": "month-year-day",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "MDY",
          "package": "timeparsers",
          "partial": "MDY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:MDY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret years 0-99 as 1970-2069\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "MakeRecent",
          "package": "timeparsers",
          "signature": "MakeRecent",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "Interpret years as",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "MakeRecent",
          "package": "timeparsers",
          "partial": "Make Recent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:MakeRecent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Integer that is known to represent a month\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Month",
          "package": "timeparsers",
          "signature": "Month Integer",
          "source": "src/Data-Time-Parsers-Types.html#DateToken",
          "type": "function"
        },
        "index": {
          "description": "An Integer that is known to represent month",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Month",
          "package": "timeparsers",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current time\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Now",
          "package": "timeparsers",
          "signature": "Now",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "function"
        },
        "index": {
          "description": "The current time",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Now",
          "package": "timeparsers",
          "partial": "Now",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "Options",
          "package": "timeparsers",
          "signature": "Options",
          "source": "src/Data-Time-Parsers-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Options",
          "package": "timeparsers",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire an \u003ccode\u003es\u003c/code\u003e at the end of a POSIX timestamp.\n Can be used to distinguish between POSIXTime and\n iso8601 with no separators.\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "RequirePosixUnit",
          "package": "timeparsers",
          "signature": "RequirePosixUnit",
          "source": "src/Data-Time-Parsers-Types.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "Require an at the end of POSIX timestamp Can be used to distinguish between POSIXTime and iso8601 with no separators",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "RequirePosixUnit",
          "package": "timeparsers",
          "partial": "Require Posix Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:RequirePosixUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn explicit Timestamp\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Timestamp",
          "package": "timeparsers",
          "signature": "Timestamp a",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "function"
        },
        "index": {
          "description": "An explicit Timestamp",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Timestamp",
          "package": "timeparsers",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMidnight today\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Today",
          "package": "timeparsers",
          "signature": "Today",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Midnight today",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Today",
          "package": "timeparsers",
          "partial": "Today",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Today"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMidight tomorrow\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Tomorrow",
          "package": "timeparsers",
          "signature": "Tomorrow",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Midight tomorrow",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Tomorrow",
          "package": "timeparsers",
          "partial": "Tomorrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Tomorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyear-month-day\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "YMD",
          "package": "timeparsers",
          "signature": "YMD",
          "source": "src/Data-Time-Parsers-Types.html#DateFormat",
          "type": "function"
        },
        "index": {
          "description": "year-month-day",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "YMD",
          "package": "timeparsers",
          "partial": "YMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:YMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Integer that is known to represent a year\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Year",
          "package": "timeparsers",
          "signature": "Year Integer",
          "source": "src/Data-Time-Parsers-Types.html#DateToken",
          "type": "function"
        },
        "index": {
          "description": "An Integer that is known to represent year",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Year",
          "package": "timeparsers",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMidnight yesterday\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "Yesterday",
          "package": "timeparsers",
          "signature": "Yesterday",
          "source": "src/Data-Time-Parsers-Types.html#ExtendedTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Midnight yesterday",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "Yesterday",
          "package": "timeparsers",
          "partial": "Yesterday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:Yesterday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of Flags\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "flags",
          "package": "timeparsers",
          "signature": "Set Flag",
          "source": "src/Data-Time-Parsers-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Set of Flags",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "flags",
          "package": "timeparsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of what DateFormats to try.\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "formats",
          "package": "timeparsers",
          "signature": "[DateFormat]",
          "source": "src/Data-Time-Parsers-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "List of what DateFormats to try",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "formats",
          "normalized": "[DateFormat]",
          "package": "timeparsers",
          "signature": "[DateFormat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:formats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "fromZonedTime",
          "package": "timeparsers",
          "signature": "ZonedTime -\u003e a",
          "source": "src/Data-Time-Parsers-Types.html#fromZonedTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "fromZonedTime",
          "normalized": "ZonedTime-\u003ea",
          "package": "timeparsers",
          "partial": "Zoned Time",
          "signature": "ZonedTime-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:fromZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of accepted separators\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Types",
          "name": "seps",
          "package": "timeparsers",
          "signature": "String",
          "source": "src/Data-Time-Parsers-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Set of accepted separators",
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "seps",
          "package": "timeparsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:seps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Types",
          "name": "toZonedTime",
          "package": "timeparsers",
          "signature": "a -\u003e ZonedTime",
          "source": "src/Data-Time-Parsers-Types.html#toZonedTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Parsers Types",
          "module": "Data.Time.Parsers.Types",
          "name": "toZonedTime",
          "normalized": "a-\u003eZonedTime",
          "package": "timeparsers",
          "partial": "Zoned Time",
          "signature": "a-\u003eZonedTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Types.html#v:toZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers.Util",
          "name": "Util",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "Util",
          "package": "timeparsers",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Options to use:\n Try YMD, then MDY, then DMY\n Accept \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, ' ', \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e as separators.\n Use flags MakeRecent, DefaultToUTC, DefaultToMidnight\n\u003c/p\u003e",
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "defaultOptions",
          "package": "timeparsers",
          "signature": "Options",
          "source": "src/Data-Time-Parsers-Util.html#defaultOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:defaultOptions\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:defaultOptions\"]"
        },
        "index": {
          "description": "Default Options to use Try YMD then MDY then DMY Accept as separators Use flags MakeRecent DefaultToUTC DefaultToMidnight",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "defaultOptions",
          "package": "timeparsers",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a timestamp to use as the current time, purely convert an\n ExtendedTimestamp to a timestamp\n\u003c/p\u003e",
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "fromExtendedTimestamp",
          "package": "timeparsers",
          "signature": "a -\u003e ExtendedTimestamp a -\u003e a",
          "source": "src/Data-Time-Parsers-Util.html#fromExtendedTimestamp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:fromExtendedTimestamp\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:fromExtendedTimestamp\"]"
        },
        "index": {
          "description": "Given timestamp to use as the current time purely convert an ExtendedTimestamp to timestamp",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "fromExtendedTimestamp",
          "normalized": "a-\u003eExtendedTimestamp a-\u003ea",
          "package": "timeparsers",
          "partial": "Extended Timestamp",
          "signature": "a-\u003eExtendedTimestamp a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:fromExtendedTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse getZonedTime to get the current time, and use it to convert an\n ExtendedTimestamp to a timestamp\n\u003c/p\u003e",
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "fromExtendedTimestampIO",
          "package": "timeparsers",
          "signature": "ExtendedTimestamp a -\u003e IO a",
          "source": "src/Data-Time-Parsers-Util.html#fromExtendedTimestampIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:fromExtendedTimestampIO\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:fromExtendedTimestampIO\"]"
        },
        "index": {
          "description": "Use getZonedTime to get the current time and use it to convert an ExtendedTimestamp to timestamp",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "fromExtendedTimestampIO",
          "normalized": "ExtendedTimestamp a-\u003eIO a",
          "package": "timeparsers",
          "partial": "Extended Timestamp IO",
          "signature": "ExtendedTimestamp a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:fromExtendedTimestampIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true if the strings \u003ca\u003eBC\u003c/a\u003e or \u003ca\u003eBCE\u003c/a\u003e are consumed, false otherwise\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Util",
          "name": "isBCE",
          "package": "timeparsers",
          "signature": "OptionedParser Bool",
          "source": "src/Data-Time-Parsers-Util.html#isBCE",
          "type": "function"
        },
        "index": {
          "description": "Return true if the strings BC or BCE are consumed false otherwise",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "isBCE",
          "package": "timeparsers",
          "partial": "BCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:isBCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn whether a given flag is set.\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Util",
          "name": "isFlagSet",
          "package": "timeparsers",
          "signature": "Flag -\u003e OptionedParser Bool",
          "source": "src/Data-Time-Parsers-Util.html#isFlagSet",
          "type": "function"
        },
        "index": {
          "description": "Return whether given flag is set",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "isFlagSet",
          "normalized": "Flag-\u003eOptionedParser Bool",
          "package": "timeparsers",
          "partial": "Flag Set",
          "signature": "Flag-\u003eOptionedParser Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:isFlagSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a CE date into a BCE date. Fails if the date is already BCE\n Warning: If you anticipate BCE dates, it is advisable to not use the\n MakeRecent flag. It will cause ByteStrings such as \u003ca\u003e79 BC\u003c/a\u003e to be parsed as\n \u003ca\u003e1979 BCE\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Util",
          "name": "makeBCE",
          "package": "timeparsers",
          "signature": "Day -\u003e m Day",
          "source": "src/Data-Time-Parsers-Util.html#makeBCE",
          "type": "function"
        },
        "index": {
          "description": "Converts CE date into BCE date Fails if the date is already BCE Warning If you anticipate BCE dates it is advisable to not use the MakeRecent flag It will cause ByteStrings such as BC to be parsed as BCE",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "makeBCE",
          "normalized": "Day-\u003ea Day",
          "package": "timeparsers",
          "partial": "BCE",
          "signature": "Day-\u003em Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:makeBCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given number of digits\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Util",
          "name": "nDigit",
          "package": "timeparsers",
          "signature": "Int -\u003e Parser a",
          "source": "src/Data-Time-Parsers-Util.html#nDigit",
          "type": "function"
        },
        "index": {
          "description": "Parse given number of digits",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "nDigit",
          "normalized": "Int-\u003eParser a",
          "package": "timeparsers",
          "partial": "Digit",
          "signature": "Int-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:nDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail if the given parser fails to consume all of the input\n\u003c/p\u003e",
          "module": "Data.Time.Parsers.Util",
          "name": "onlyParse",
          "package": "timeparsers",
          "signature": "OptionedParser a -\u003e OptionedParser a",
          "source": "src/Data-Time-Parsers-Util.html#onlyParse",
          "type": "function"
        },
        "index": {
          "description": "Fail if the given parser fails to consume all of the input",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "onlyParse",
          "normalized": "OptionedParser a-\u003eOptionedParser a",
          "package": "timeparsers",
          "partial": "Parse",
          "signature": "OptionedParser a-\u003eOptionedParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:onlyParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse default options to parse single Timestamp with a given parser,\n ignoring preceding and trailing whitespace\n\u003c/p\u003e",
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "parseWithDefaultOptions",
          "package": "timeparsers",
          "signature": "OptionedParser a -\u003e ByteString -\u003e Result a",
          "source": "src/Data-Time-Parsers-Util.html#parseWithDefaultOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:parseWithDefaultOptions\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:parseWithDefaultOptions\"]"
        },
        "index": {
          "description": "Use default options to parse single Timestamp with given parser ignoring preceding and trailing whitespace",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "parseWithDefaultOptions",
          "normalized": "OptionedParser a-\u003eByteString-\u003eResult a",
          "package": "timeparsers",
          "partial": "With Default Options",
          "signature": "OptionedParser a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:parseWithDefaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse given options and parser to parse a single Timestamp.\n always feeds empty, so a Partial result is never returned.\n Ignores preceding and trailing whitespace.\n\u003c/p\u003e",
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "parseWithOptions",
          "package": "timeparsers",
          "signature": "Options -\u003e OptionedParser a -\u003e ByteString -\u003e Result a",
          "source": "src/Data-Time-Parsers-Util.html#parseWithOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:parseWithOptions\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:parseWithOptions\"]"
        },
        "index": {
          "description": "Use given options and parser to parse single Timestamp always feeds empty so Partial result is never returned Ignores preceding and trailing whitespace",
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "parseWithOptions",
          "normalized": "Options-\u003eOptionedParser a-\u003eByteString-\u003eResult a",
          "package": "timeparsers",
          "partial": "With Options",
          "signature": "Options-\u003eOptionedParser a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:parseWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "withDefaultOptions",
          "package": "timeparsers",
          "signature": "OptionedParser a -\u003e Parser a",
          "source": "src/Data-Time-Parsers-Util.html#withDefaultOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:withDefaultOptions\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:withDefaultOptions\"]"
        },
        "index": {
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "withDefaultOptions",
          "normalized": "OptionedParser a-\u003eParser a",
          "package": "timeparsers",
          "partial": "Default Options",
          "signature": "OptionedParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:withDefaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Time.Parsers.Util\",\"Data.Time.Parsers\"]",
          "name": "withOptions",
          "package": "timeparsers",
          "signature": "OptionedParser a -\u003e Options -\u003e Parser a",
          "source": "src/Data-Time-Parsers-Util.html#withOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:withOptions\",\"http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#v:withOptions\"]"
        },
        "index": {
          "hierarchy": "Data Time Parsers Util",
          "module": "Data.Time.Parsers.Util",
          "name": "withOptions",
          "normalized": "OptionedParser a-\u003eOptions-\u003eParser a",
          "package": "timeparsers",
          "partial": "Options",
          "signature": "OptionedParser a-\u003eOptions-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers-Util.html#v:withOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Parsers",
          "name": "Parsers",
          "package": "timeparsers",
          "source": "src/Data-Time-Parsers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Parsers",
          "module": "Data.Time.Parsers",
          "name": "Parsers",
          "package": "timeparsers",
          "partial": "Parsers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeparsers/docs/Data-Time-Parsers.html#"
      }
    }
  ]
]