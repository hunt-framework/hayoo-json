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
        "word": "zoneinfo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides access to the Olson zone-info database, using an adapted version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "ZoneInfo",
          "package": "zoneinfo",
          "source": "src/Data-Time-ZoneInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Provides access to the Olson zone-info database using an adapted version",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "ZoneInfo",
          "package": "zoneinfo",
          "partial": "Zone Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLibrary context.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "Context",
          "package": "zoneinfo",
          "source": "src/Data-Time-ZoneInfo.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Library context",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "Context",
          "package": "zoneinfo",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.ZoneInfo",
          "name": "ZoneInfo",
          "package": "zoneinfo",
          "source": "src/Data-Time-ZoneInfo.html#ZoneInfo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "ZoneInfo",
          "package": "zoneinfo",
          "partial": "Zone Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#t:ZoneInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e argument from the source to destination\n \u003ccode\u003e\u003ca\u003eTimeZone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "convertTimeZone",
          "package": "zoneinfo",
          "signature": "a -\u003e LocalTime -\u003e b -\u003e IO ZonedTime",
          "source": "src/Data-Time-ZoneInfo.html#convertTimeZone",
          "type": "method"
        },
        "index": {
          "description": "Convert the LocalTime argument from the source to destination TimeZone",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "convertTimeZone",
          "normalized": "a-\u003eLocalTime-\u003eb-\u003eIO ZonedTime",
          "package": "zoneinfo",
          "partial": "Time Zone",
          "signature": "a-\u003eLocalTime-\u003eb-\u003eIO ZonedTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:convertTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e to a daylight saving adjusted pair.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "localToPOSIXZoned",
          "package": "zoneinfo",
          "signature": "a -\u003e LocalTime -\u003e IO (POSIXTime, TimeZone)",
          "source": "src/Data-Time-ZoneInfo.html#localToPOSIXZoned",
          "type": "method"
        },
        "index": {
          "description": "Convert LocalTime to daylight saving adjusted pair",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "localToPOSIXZoned",
          "normalized": "a-\u003eLocalTime-\u003eIO(POSIXTime,TimeZone)",
          "package": "zoneinfo",
          "partial": "To POSIXZoned",
          "signature": "a-\u003eLocalTime-\u003eIO(POSIXTime,TimeZone)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:localToPOSIXZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e to a daylight saving adjusted pair.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "localToUTCZoned",
          "package": "zoneinfo",
          "signature": "a -\u003e LocalTime -\u003e IO (UTCTime, TimeZone)",
          "source": "src/Data-Time-ZoneInfo.html#localToUTCZoned",
          "type": "method"
        },
        "index": {
          "description": "Convert LocalTime to daylight saving adjusted pair",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "localToUTCZoned",
          "normalized": "a-\u003eLocalTime-\u003eIO(UTCTime,TimeZone)",
          "package": "zoneinfo",
          "partial": "To UTCZoned",
          "signature": "a-\u003eLocalTime-\u003eIO(UTCTime,TimeZone)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:localToUTCZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e object.  A path to the zone-info database may be\n specified.  Otherwise, the TZDIR environment variable, or a reasonable\n default, will be used.  An \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e will be thrown on failure.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "newContext",
          "package": "zoneinfo",
          "signature": "Maybe String -\u003e IO Context",
          "source": "src/Data-Time-ZoneInfo.html#newContext",
          "type": "function"
        },
        "index": {
          "description": "Create Context object path to the zone-info database may be specified Otherwise the TZDIR environment variable or reasonable default will be used An IOError will be thrown on failure",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "newContext",
          "normalized": "Maybe String-\u003eIO Context",
          "package": "zoneinfo",
          "partial": "Context",
          "signature": "Maybe String-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:newContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain an \u003ccode\u003eOlsonZone\u003c/code\u003e object based on the specified Olson identifier or\n time-zone.  If the zone-info database cannot be found, or the time-zone not\n recognised, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e will be thrown.  Calls to this function for a\n given \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e must be serialised across threads.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "newOlsonZone",
          "package": "zoneinfo",
          "signature": "Context -\u003e String -\u003e IO OlsonZone",
          "source": "src/Data-Time-ZoneInfo.html#newOlsonZone",
          "type": "function"
        },
        "index": {
          "description": "Obtain an OlsonZone object based on the specified Olson identifier or time-zone If the zone-info database cannot be found or the time-zone not recognised then an IOError will be thrown Calls to this function for given Context must be serialised across threads",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "newOlsonZone",
          "normalized": "Context-\u003eString-\u003eIO OlsonZone",
          "package": "zoneinfo",
          "partial": "Olson Zone",
          "signature": "Context-\u003eString-\u003eIO OlsonZone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:newOlsonZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e to zoned \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "posixToZonedTime",
          "package": "zoneinfo",
          "signature": "a -\u003e POSIXTime -\u003e IO ZonedTime",
          "source": "src/Data-Time-ZoneInfo.html#posixToZonedTime",
          "type": "method"
        },
        "index": {
          "description": "Convert from POSIXTime to zoned LocalTime",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "posixToZonedTime",
          "normalized": "a-\u003ePOSIXTime-\u003eIO ZonedTime",
          "package": "zoneinfo",
          "partial": "To Zoned Time",
          "signature": "a-\u003ePOSIXTime-\u003eIO ZonedTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:posixToZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOlsonZone\u003c/code\u003e for the UTC time-zone.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "utcOlsonZone",
          "package": "zoneinfo",
          "signature": "Context -\u003e OlsonZone",
          "source": "src/Data-Time-ZoneInfo.html#utcOlsonZone",
          "type": "function"
        },
        "index": {
          "description": "OlsonZone for the UTC time-zone",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "utcOlsonZone",
          "normalized": "Context-\u003eOlsonZone",
          "package": "zoneinfo",
          "partial": "Olson Zone",
          "signature": "Context-\u003eOlsonZone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:utcOlsonZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e to zoned \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "utcToZonedTime'",
          "package": "zoneinfo",
          "signature": "a -\u003e UTCTime -\u003e IO ZonedTime",
          "source": "src/Data-Time-ZoneInfo.html#utcToZonedTime%27",
          "type": "method"
        },
        "index": {
          "description": "Convert from UTCTime to zoned LocalTime",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "utcToZonedTime'",
          "normalized": "a-\u003eUTCTime-\u003eIO ZonedTime",
          "package": "zoneinfo",
          "partial": "To Zoned Time'",
          "signature": "a-\u003eUTCTime-\u003eIO ZonedTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:utcToZonedTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the UTC offset for either the standard or daylight saving\n zone, depending on the \u003ccode\u003eisdst\u003c/code\u003e boolean argument; an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e will be\n thrown if this information is unavailable.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "zoneInfoMinutes",
          "package": "zoneinfo",
          "signature": "a -\u003e Bool -\u003e IO Int",
          "source": "src/Data-Time-ZoneInfo.html#zoneInfoMinutes",
          "type": "method"
        },
        "index": {
          "description": "Returns the UTC offset for either the standard or daylight saving zone depending on the isdst boolean argument an IOError will be thrown if this information is unavailable",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "zoneInfoMinutes",
          "normalized": "a-\u003eBool-\u003eIO Int",
          "package": "zoneinfo",
          "partial": "Info Minutes",
          "signature": "a-\u003eBool-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:zoneInfoMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the zone-name for either the standard or daylight saving\n zone, depending on the \u003ccode\u003eisdst\u003c/code\u003e boolean argument; an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e will be\n thrown if this information is unavailable.\n\u003c/p\u003e",
          "module": "Data.Time.ZoneInfo",
          "name": "zoneInfoName",
          "package": "zoneinfo",
          "signature": "a -\u003e Bool -\u003e IO String",
          "source": "src/Data-Time-ZoneInfo.html#zoneInfoName",
          "type": "method"
        },
        "index": {
          "description": "Returns the zone-name for either the standard or daylight saving zone depending on the isdst boolean argument an IOError will be thrown if this information is unavailable",
          "hierarchy": "Data Time ZoneInfo",
          "module": "Data.Time.ZoneInfo",
          "name": "zoneInfoName",
          "normalized": "a-\u003eBool-\u003eIO String",
          "package": "zoneinfo",
          "partial": "Info Name",
          "signature": "a-\u003eBool-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoneinfo/docs/Data-Time-ZoneInfo.html#v:zoneInfoName"
      }
    }
  ]
]