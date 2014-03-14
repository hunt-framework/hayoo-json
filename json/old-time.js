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
        "word": "old-time"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe standard time library from Haskell 98.  This library is\n deprecated, please look at \u003ccode\u003eData.Time\u003c/code\u003e in the \u003ccode\u003etime\u003c/code\u003e package\n instead.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eSystem.Time\u003c/a\u003e provides functionality for clock times, including\n timezone information (i.e, the functionality of \"\u003ccode\u003etime.h\u003c/code\u003e\",\n adapted to the Haskell environment).  It follows RFC 1129 in its\n use of Coordinated Universal Time (UTC).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Time",
          "name": "Time",
          "package": "old-time",
          "source": "src/System-Time.html",
          "type": "module"
        },
        "index": {
          "description": "The standard time library from Haskell This library is deprecated please look at Data.Time in the time package instead System.Time provides functionality for clock times including timezone information i.e the functionality of time.h adapted to the Haskell environment It follows RFC in its use of Coordinated Universal Time UTC",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Time",
          "package": "old-time",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e is a user-readable and manipulable\n representation of the internal \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "CalendarTime",
          "package": "old-time",
          "source": "src/System-Time.html#CalendarTime",
          "type": "data"
        },
        "index": {
          "description": "CalendarTime is user-readable and manipulable representation of the internal ClockTime type",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "CalendarTime",
          "package": "old-time",
          "partial": "Calendar Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#t:CalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of the internal clock time.\n Clock times may be compared, converted to strings, or converted to an\n external calendar time \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e for I/O or other manipulations.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ClockTime",
          "package": "old-time",
          "source": "src/System-Time.html#ClockTime",
          "type": "data"
        },
        "index": {
          "description": "representation of the internal clock time Clock times may be compared converted to strings or converted to an external calendar time CalendarTime for or other manipulations",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ClockTime",
          "package": "old-time",
          "partial": "Clock Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#t:ClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA day of the week.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "Day",
          "package": "old-time",
          "source": "src/System-Time.html#Day",
          "type": "data"
        },
        "index": {
          "description": "day of the week",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Day",
          "package": "old-time",
          "partial": "Day",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#t:Day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA month of the year.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "Month",
          "package": "old-time",
          "source": "src/System-Time.html#Month",
          "type": "data"
        },
        "index": {
          "description": "month of the year",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Month",
          "package": "old-time",
          "partial": "Month",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#t:Month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecords the difference between two clock times in a user-readable way.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "TimeDiff",
          "package": "old-time",
          "source": "src/System-Time.html#TimeDiff",
          "type": "data"
        },
        "index": {
          "description": "records the difference between two clock times in user-readable way",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "TimeDiff",
          "package": "old-time",
          "partial": "Time Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#t:TimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "April",
          "package": "old-time",
          "signature": "April",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "April",
          "package": "old-time",
          "partial": "April",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:April"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "August",
          "package": "old-time",
          "signature": "August",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "August",
          "package": "old-time",
          "partial": "August",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:August"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "CalendarTime",
          "package": "old-time",
          "signature": "CalendarTime",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "CalendarTime",
          "package": "old-time",
          "partial": "Calendar Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:CalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "December",
          "package": "old-time",
          "signature": "December",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "December",
          "package": "old-time",
          "partial": "December",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:December"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "February",
          "package": "old-time",
          "signature": "February",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "February",
          "package": "old-time",
          "partial": "February",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:February"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Friday",
          "package": "old-time",
          "signature": "Friday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Friday",
          "package": "old-time",
          "partial": "Friday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "January",
          "package": "old-time",
          "signature": "January",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "January",
          "package": "old-time",
          "partial": "January",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:January"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "July",
          "package": "old-time",
          "signature": "July",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "July",
          "package": "old-time",
          "partial": "July",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:July"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "June",
          "package": "old-time",
          "signature": "June",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "June",
          "package": "old-time",
          "partial": "June",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:June"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "March",
          "package": "old-time",
          "signature": "March",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "March",
          "package": "old-time",
          "partial": "March",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:March"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "May",
          "package": "old-time",
          "signature": "May",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "May",
          "package": "old-time",
          "partial": "May",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:May"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Monday",
          "package": "old-time",
          "signature": "Monday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Monday",
          "package": "old-time",
          "partial": "Monday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "November",
          "package": "old-time",
          "signature": "November",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "November",
          "package": "old-time",
          "partial": "November",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:November"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "October",
          "package": "old-time",
          "signature": "October",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "October",
          "package": "old-time",
          "partial": "October",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:October"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Saturday",
          "package": "old-time",
          "signature": "Saturday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Saturday",
          "package": "old-time",
          "partial": "Saturday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "September",
          "package": "old-time",
          "signature": "September",
          "source": "src/System-Time.html#Month",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "September",
          "package": "old-time",
          "partial": "September",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:September"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Sunday",
          "package": "old-time",
          "signature": "Sunday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Sunday",
          "package": "old-time",
          "partial": "Sunday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a clock time.  The arguments are a number\n of seconds since 00:00:00 (UTC) on 1 January 1970,\n and an additional number of picoseconds.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, the \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type is abstract.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "TOD",
          "package": "old-time",
          "signature": "TOD Integer Integer",
          "source": "src/System-Time.html#ClockTime",
          "type": "function"
        },
        "index": {
          "description": "Construct clock time The arguments are number of seconds since UTC on January and an additional number of picoseconds In Haskell the ClockTime type is abstract",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "TOD",
          "package": "old-time",
          "partial": "TOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:TOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Thursday",
          "package": "old-time",
          "signature": "Thursday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Thursday",
          "package": "old-time",
          "partial": "Thursday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "TimeDiff",
          "package": "old-time",
          "signature": "TimeDiff",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "TimeDiff",
          "package": "old-time",
          "partial": "Time Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:TimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Tuesday",
          "package": "old-time",
          "signature": "Tuesday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Tuesday",
          "package": "old-time",
          "partial": "Tuesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "Wednesday",
          "package": "old-time",
          "signature": "Wednesday",
          "source": "src/System-Time.html#Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "Wednesday",
          "package": "old-time",
          "partial": "Wednesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:Wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddToClockTime\u003c/a\u003e\u003c/code\u003e d t\u003c/code\u003e adds a time difference \u003ccode\u003ed\u003c/code\u003e and a\n clock time \u003ccode\u003et\u003c/code\u003e to yield a new clock time.  The difference \u003ccode\u003ed\u003c/code\u003e\n may be either positive or negative.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "addToClockTime",
          "package": "old-time",
          "signature": "TimeDiff -\u003e ClockTime -\u003e ClockTime",
          "source": "src/System-Time.html#addToClockTime",
          "type": "function"
        },
        "index": {
          "description": "addToClockTime adds time difference and clock time to yield new clock time The difference may be either positive or negative",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "addToClockTime",
          "normalized": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "package": "old-time",
          "partial": "To Clock Time",
          "signature": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:addToClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats calendar times using local conventions.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "calendarTimeToString",
          "package": "old-time",
          "signature": "CalendarTime -\u003e String",
          "source": "src/System-Time.html#calendarTimeToString",
          "type": "function"
        },
        "index": {
          "description": "formats calendar times using local conventions",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "calendarTimeToString",
          "normalized": "CalendarTime-\u003eString",
          "package": "old-time",
          "partial": "Time To String",
          "signature": "CalendarTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:calendarTimeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the month (1 to 31)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctDay",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Day of the month to",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctDay",
          "package": "old-time",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHour of the day (0 to 23)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctHour",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Hour of the day to",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctHour",
          "package": "old-time",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if Daylight Savings Time would\n be in effect, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctIsDST",
          "package": "old-time",
          "signature": "Bool",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "True if Daylight Savings Time would be in effect and False otherwise",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctIsDST",
          "package": "old-time",
          "partial": "Is DST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctIsDST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinutes (0 to 59)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctMin",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Minutes to",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctMin",
          "package": "old-time",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonth of the year\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctMonth",
          "package": "old-time",
          "signature": "Month",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Month of the year",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctMonth",
          "package": "old-time",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePicoseconds\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctPicosec",
          "package": "old-time",
          "signature": "Integer",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Picoseconds",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctPicosec",
          "package": "old-time",
          "partial": "Picosec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctPicosec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds (0 to 61, allowing for up to\n two leap seconds)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctSec",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Seconds to allowing for up to two leap seconds",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctSec",
          "package": "old-time",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation from UTC in seconds\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctTZ",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Variation from UTC in seconds",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctTZ",
          "package": "old-time",
          "partial": "TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the time zone\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctTZName",
          "package": "old-time",
          "signature": "String",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Name of the time zone",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctTZName",
          "package": "old-time",
          "partial": "TZName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctTZName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the week\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctWDay",
          "package": "old-time",
          "signature": "Day",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Day of the week",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctWDay",
          "package": "old-time",
          "partial": "WDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctWDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the year\n (0 to 364, or 365 in leap years)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctYDay",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Day of the year to or in leap years",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctYDay",
          "package": "old-time",
          "partial": "YDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctYDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYear (pre-Gregorian dates are inaccurate)\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "ctYear",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Year pre-Gregorian dates are inaccurate",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "ctYear",
          "package": "old-time",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:ctYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ediffClockTimes\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e returns the difference between two clock\n times \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eTimeDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "diffClockTimes",
          "package": "old-time",
          "signature": "ClockTime -\u003e ClockTime -\u003e TimeDiff",
          "source": "src/System-Time.html#diffClockTimes",
          "type": "function"
        },
        "index": {
          "description": "diffClockTimes t1 t2 returns the difference between two clock times t1 and t2 as TimeDiff",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "diffClockTimes",
          "normalized": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "package": "old-time",
          "partial": "Clock Times",
          "signature": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:diffClockTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats calendar times using local conventions and a formatting string.\n The formatting string is that understood by the ISO C \u003ccode\u003estrftime()\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "formatCalendarTime",
          "package": "old-time",
          "signature": "TimeLocale -\u003e String -\u003e CalendarTime -\u003e String",
          "source": "src/System-Time.html#formatCalendarTime",
          "type": "function"
        },
        "index": {
          "description": "formats calendar times using local conventions and formatting string The formatting string is that understood by the ISO strftime function",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "formatCalendarTime",
          "normalized": "TimeLocale-\u003eString-\u003eCalendarTime-\u003eString",
          "package": "old-time",
          "partial": "Calendar Time",
          "signature": "TimeLocale-\u003eString-\u003eCalendarTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:formatCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats time differences using local conventions and a formatting string.\n The formatting string is that understood by the ISO C \u003ccode\u003estrftime()\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "formatTimeDiff",
          "package": "old-time",
          "signature": "TimeLocale -\u003e String -\u003e TimeDiff -\u003e String",
          "source": "src/System-Time.html#formatTimeDiff",
          "type": "function"
        },
        "index": {
          "description": "formats time differences using local conventions and formatting string The formatting string is that understood by the ISO strftime function",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "formatTimeDiff",
          "normalized": "TimeLocale-\u003eString-\u003eTimeDiff-\u003eString",
          "package": "old-time",
          "partial": "Time Diff",
          "signature": "TimeLocale-\u003eString-\u003eTimeDiff-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:formatTimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "getClockTime",
          "package": "old-time",
          "signature": "IO ClockTime",
          "source": "src/System-Time.html#getClockTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "getClockTime",
          "package": "old-time",
          "partial": "Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:getClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enull time difference.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "noTimeDiff",
          "package": "old-time",
          "signature": "TimeDiff",
          "source": "src/System-Time.html#noTimeDiff",
          "type": "function"
        },
        "index": {
          "description": "null time difference",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "noTimeDiff",
          "package": "old-time",
          "partial": "Time Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:noTimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a time difference to normal form.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "normalizeTimeDiff",
          "package": "old-time",
          "signature": "TimeDiff -\u003e TimeDiff",
          "source": "src/System-Time.html#normalizeTimeDiff",
          "type": "function"
        },
        "index": {
          "description": "converts time difference to normal form",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "normalizeTimeDiff",
          "normalized": "TimeDiff-\u003eTimeDiff",
          "package": "old-time",
          "partial": "Time Diff",
          "signature": "TimeDiff-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:normalizeTimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdDay",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdDay",
          "package": "old-time",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdHour",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdHour",
          "package": "old-time",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdMin",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdMin",
          "package": "old-time",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdMonth",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdMonth",
          "package": "old-time",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdPicosec",
          "package": "old-time",
          "signature": "Integer",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdPicosec",
          "package": "old-time",
          "partial": "Picosec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdPicosec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdSec",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdSec",
          "package": "old-time",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time",
          "name": "tdYear",
          "package": "old-time",
          "signature": "Int",
          "source": "src/System-Time.html#TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "tdYear",
          "package": "old-time",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:tdYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats time differences using local conventions.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "timeDiffToString",
          "package": "old-time",
          "signature": "TimeDiff -\u003e String",
          "source": "src/System-Time.html#timeDiffToString",
          "type": "function"
        },
        "index": {
          "description": "formats time differences using local conventions",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "timeDiffToString",
          "normalized": "TimeDiff-\u003eString",
          "package": "old-time",
          "partial": "Diff To String",
          "signature": "TimeDiff-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:timeDiffToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts an internal clock time to a local time, modified by the\n timezone and daylight savings time settings in force at the time\n of conversion.  Because of this dependence on the local environment,\n \u003ccode\u003e\u003ca\u003etoCalendarTime\u003c/a\u003e\u003c/code\u003e is in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "toCalendarTime",
          "package": "old-time",
          "signature": "ClockTime -\u003e IO CalendarTime",
          "source": "src/System-Time.html#toCalendarTime",
          "type": "function"
        },
        "index": {
          "description": "converts an internal clock time to local time modified by the timezone and daylight savings time settings in force at the time of conversion Because of this dependence on the local environment toCalendarTime is in the IO monad",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "toCalendarTime",
          "normalized": "ClockTime-\u003eIO CalendarTime",
          "package": "old-time",
          "partial": "Calendar Time",
          "signature": "ClockTime-\u003eIO CalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:toCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e into the corresponding internal\n \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e, ignoring the contents of the  \u003ccode\u003e\u003ca\u003ectWDay\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ectYDay\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ectTZName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ectIsDST\u003c/a\u003e\u003c/code\u003e fields.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "toClockTime",
          "package": "old-time",
          "signature": "CalendarTime -\u003e ClockTime",
          "source": "src/System-Time.html#toClockTime",
          "type": "function"
        },
        "index": {
          "description": "converts CalendarTime into the corresponding internal ClockTime ignoring the contents of the ctWDay ctYDay ctTZName and ctIsDST fields",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "toClockTime",
          "normalized": "CalendarTime-\u003eClockTime",
          "package": "old-time",
          "partial": "Clock Time",
          "signature": "CalendarTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:toClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts an internal clock time into a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e in standard\n UTC format.\n\u003c/p\u003e",
          "module": "System.Time",
          "name": "toUTCTime",
          "package": "old-time",
          "signature": "ClockTime -\u003e CalendarTime",
          "source": "src/System-Time.html#toUTCTime",
          "type": "function"
        },
        "index": {
          "description": "converts an internal clock time into CalendarTime in standard UTC format",
          "hierarchy": "System Time",
          "module": "System.Time",
          "name": "toUTCTime",
          "normalized": "ClockTime-\u003eCalendarTime",
          "package": "old-time",
          "partial": "UTCTime",
          "signature": "ClockTime-\u003eCalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/old-time/docs/System-Time.html#v:toUTCTime"
      }
    }
  ]
]