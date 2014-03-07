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
        "word": "timezone-series"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003eTimeZoneSeries\u003c/code\u003e describes a timezone by specifying the various\n clock settings that occurred in the past and are scheduled to occur\n in the future for the timezone.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "Series",
          "package": "timezone-series",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html",
          "type": "module"
        },
        "index": {
          "description": "TimeZoneSeries describes timezone by specifying the various clock settings that occurred in the past and are scheduled to occur in the future for the timezone",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "Series",
          "package": "timezone-series",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTimeZoneSeries\u003c/code\u003e consists of a default \u003ccode\u003eTimeZone\u003c/code\u003e object and a\n sequence of pairs of a \u003ccode\u003eUTCTime\u003c/code\u003e and a \u003ccode\u003eTimeZone\u003c/code\u003e object. Each\n \u003ccode\u003eUTCTime\u003c/code\u003e indicates a moment at which the clocks changed, and the\n corresponding \u003ccode\u003eTimeZone\u003c/code\u003e object describes the new state of the\n clocks after the change. The default \u003ccode\u003eTimeZone\u003c/code\u003e object is used for\n times preceding the earliest \u003ccode\u003eUTCTime\u003c/code\u003e, or if the sequence of pairs\n is empty. The times in the sequence are in order from latest to\n earlist (note that this is the opposite of the way that they are\n stored in an Olson timezone file).\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "TimeZoneSeries",
          "package": "timezone-series",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#TimeZoneSeries",
          "type": "data"
        },
        "index": {
          "description": "TimeZoneSeries consists of default TimeZone object and sequence of pairs of UTCTime and TimeZone object Each UTCTime indicates moment at which the clocks changed and the corresponding TimeZone object describes the new state of the clocks after the change The default TimeZone object is used for times preceding the earliest UTCTime or if the sequence of pairs is empty The times in the sequence are in order from latest to earlist note that this is the opposite of the way that they are stored in an Olson timezone file",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "TimeZoneSeries",
          "package": "timezone-series",
          "partial": "Time Zone Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#t:TimeZoneSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eZoneSeriesTime\u003c/code\u003e represents a moment of time in the context of\n a particular timezone.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "ZoneSeriesTime",
          "package": "timezone-series",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#ZoneSeriesTime",
          "type": "data"
        },
        "index": {
          "description": "ZoneSeriesTime represents moment of time in the context of particular timezone",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "ZoneSeriesTime",
          "package": "timezone-series",
          "partial": "Zone Series Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#t:ZoneSeriesTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "TimeZoneSeries",
          "package": "timezone-series",
          "signature": "TimeZoneSeries",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#TimeZoneSeries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "TimeZoneSeries",
          "package": "timezone-series",
          "partial": "Time Zone Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:TimeZoneSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "ZoneSeriesTime",
          "package": "timezone-series",
          "signature": "ZoneSeriesTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#ZoneSeriesTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "ZoneSeriesTime",
          "package": "timezone-series",
          "partial": "Zone Series Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:ZoneSeriesTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a clock change moves the clock backward, local times that\n are between the wall clock time before the change and the wall\n clock time after the change occur twice.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "isRedundantLocalTime",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e LocalTime -\u003e Bool",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#isRedundantLocalTime",
          "type": "function"
        },
        "index": {
          "description": "When clock change moves the clock backward local times that are between the wall clock time before the change and the wall clock time after the change occur twice",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "isRedundantLocalTime",
          "normalized": "TimeZoneSeries-\u003eLocalTime-\u003eBool",
          "package": "timezone-series",
          "partial": "Redundant Local Time",
          "signature": "TimeZoneSeries-\u003eLocalTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:isRedundantLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a clock change moves the clock forward, local times that\n are between the wall clock time before the change and the wall\n clock time after the change cannot occur.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "isValidLocalTime",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e LocalTime -\u003e Bool",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#isValidLocalTime",
          "type": "function"
        },
        "index": {
          "description": "When clock change moves the clock forward local times that are between the wall clock time before the change and the wall clock time after the change cannot occur",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "isValidLocalTime",
          "normalized": "TimeZoneSeries-\u003eLocalTime-\u003eBool",
          "package": "timezone-series",
          "partial": "Valid Local Time",
          "signature": "TimeZoneSeries-\u003eLocalTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:isValidLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe latest non-summer \u003ccode\u003eTimeZone\u003c/code\u003e in a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e is in some\n sense representative of the timezone.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "latestNonSummer",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e TimeZone",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#latestNonSummer",
          "type": "function"
        },
        "index": {
          "description": "The latest non-summer TimeZone in TimeZoneSeries is in some sense representative of the timezone",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "latestNonSummer",
          "normalized": "TimeZoneSeries-\u003eTimeZone",
          "package": "timezone-series",
          "partial": "Non Summer",
          "signature": "TimeZoneSeries-\u003eTimeZone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:latestNonSummer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a local time to UTC using the \u003ca\u003eTimeZone\u003c/a\u003e that is in\n effect at that time in the timezone represented by TimeZoneSeries.\n Local times that are invalid or redundant are treated as described above.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "localTimeToUTC'",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e LocalTime -\u003e UTCTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#localTimeToUTC%27",
          "type": "function"
        },
        "index": {
          "description": "Convert local time to UTC using the TimeZone that is in effect at that time in the timezone represented by TimeZoneSeries Local times that are invalid or redundant are treated as described above",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "localTimeToUTC'",
          "normalized": "TimeZoneSeries-\u003eLocalTime-\u003eUTCTime",
          "package": "timezone-series",
          "partial": "Time To UTC'",
          "signature": "TimeZoneSeries-\u003eLocalTime-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:localTimeToUTC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eZoneSeriesTime\u003c/code\u003e that represents the given local time in the\n given timezone. Local times that are invalid or redundant are treated\n as described below.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "localTimeToZoneSeriesTime",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e LocalTime -\u003e ZoneSeriesTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#localTimeToZoneSeriesTime",
          "type": "function"
        },
        "index": {
          "description": "The ZoneSeriesTime that represents the given local time in the given timezone Local times that are invalid or redundant are treated as described below",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "localTimeToZoneSeriesTime",
          "normalized": "TimeZoneSeries-\u003eLocalTime-\u003eZoneSeriesTime",
          "package": "timezone-series",
          "partial": "Time To Zone Series Time",
          "signature": "TimeZoneSeries-\u003eLocalTime-\u003eZoneSeriesTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:localTimeToZoneSeriesTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a timezone represented by a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e, and a \u003ccode\u003eUTCTime\u003c/code\u003e,\n provide the state of the timezone's clocks at that time.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "timeZoneFromSeries",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e UTCTime -\u003e TimeZone",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#timeZoneFromSeries",
          "type": "function"
        },
        "index": {
          "description": "Given timezone represented by TimeZoneSeries and UTCTime provide the state of the timezone clocks at that time",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "timeZoneFromSeries",
          "normalized": "TimeZoneSeries-\u003eUTCTime-\u003eTimeZone",
          "package": "timezone-series",
          "partial": "Zone From Series",
          "signature": "TimeZoneSeries-\u003eUTCTime-\u003eTimeZone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:timeZoneFromSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default timezone state\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "tzsTimeZone",
          "package": "timezone-series",
          "signature": "TimeZone",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#TimeZoneSeries",
          "type": "function"
        },
        "index": {
          "description": "The default timezone state",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "tzsTimeZone",
          "package": "timezone-series",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:tzsTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of pairs of the time of a\n change of clocks and the new timezone\n state after the change\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "tzsTransitions",
          "package": "timezone-series",
          "signature": "[(UTCTime, TimeZone)]",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#TimeZoneSeries",
          "type": "function"
        },
        "index": {
          "description": "list of pairs of the time of change of clocks and the new timezone state after the change",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "tzsTransitions",
          "normalized": "[(UTCTime,TimeZone)]",
          "package": "timezone-series",
          "partial": "Transitions",
          "signature": "[(UTCTime,TimeZone)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:tzsTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a UTC time to local time using the \u003ca\u003eTimeZone\u003c/a\u003e that is in\n effect at that time in the timezone represented by TimeZoneSeries.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "utcToLocalTime'",
          "package": "timezone-series",
          "signature": "TimeZoneSeries -\u003e UTCTime -\u003e LocalTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#utcToLocalTime%27",
          "type": "function"
        },
        "index": {
          "description": "Convert UTC time to local time using the TimeZone that is in effect at that time in the timezone represented by TimeZoneSeries",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "utcToLocalTime'",
          "normalized": "TimeZoneSeries-\u003eUTCTime-\u003eLocalTime",
          "package": "timezone-series",
          "partial": "To Local Time'",
          "signature": "TimeZoneSeries-\u003eUTCTime-\u003eLocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:utcToLocalTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeSeries",
          "package": "timezone-series",
          "signature": "TimeZoneSeries",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#ZoneSeriesTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeSeries",
          "package": "timezone-series",
          "partial": "Series Time Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:zoneSeriesTimeSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe local time represented by a \u003ccode\u003eZoneSeriesTime\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeToLocalTime",
          "package": "timezone-series",
          "signature": "ZoneSeriesTime -\u003e LocalTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#zoneSeriesTimeToLocalTime",
          "type": "function"
        },
        "index": {
          "description": "The local time represented by ZoneSeriesTime",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeToLocalTime",
          "normalized": "ZoneSeriesTime-\u003eLocalTime",
          "package": "timezone-series",
          "partial": "Series Time To Local Time",
          "signature": "ZoneSeriesTime-\u003eLocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:zoneSeriesTimeToLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeToUTC",
          "package": "timezone-series",
          "signature": "UTCTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#ZoneSeriesTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeToUTC",
          "package": "timezone-series",
          "partial": "Series Time To UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:zoneSeriesTimeToUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eTimeZone\u003c/code\u003e that is in effect at the moment represented by\n a \u003ccode\u003eZoneSeriesTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeZone",
          "package": "timezone-series",
          "signature": "ZoneSeriesTime -\u003e TimeZone",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#zoneSeriesTimeZone",
          "type": "function"
        },
        "index": {
          "description": "The TimeZone that is in effect at the moment represented by ZoneSeriesTime",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zoneSeriesTimeZone",
          "normalized": "ZoneSeriesTime-\u003eTimeZone",
          "package": "timezone-series",
          "partial": "Series Time Zone",
          "signature": "ZoneSeriesTime-\u003eTimeZone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:zoneSeriesTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a trivial \u003ccode\u003eTimeZoneSeries\u003c/code\u003e containing only the \u003ccode\u003eTimeZone\u003c/code\u003e\n of the \u003ccode\u003eZonedTime\u003c/code\u003e, and use it to define a \u003ccode\u003eZoneSeriesTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zonedTimeToZoneSeriesTime",
          "package": "timezone-series",
          "signature": "ZonedTime -\u003e ZoneSeriesTime",
          "source": "src/Data-Time-LocalTime-TimeZone-Series.html#zonedTimeToZoneSeriesTime",
          "type": "function"
        },
        "index": {
          "description": "Use trivial TimeZoneSeries containing only the TimeZone of the ZonedTime and use it to define ZoneSeriesTime",
          "hierarchy": "Data Time LocalTime TimeZone Series",
          "module": "Data.Time.LocalTime.TimeZone.Series",
          "name": "zonedTimeToZoneSeriesTime",
          "normalized": "ZonedTime-\u003eZoneSeriesTime",
          "package": "timezone-series",
          "partial": "Time To Zone Series Time",
          "signature": "ZonedTime-\u003eZoneSeriesTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-series/docs/Data-Time-LocalTime-TimeZone-Series.html#v:zonedTimeToZoneSeriesTime"
      }
    }
  ]
]