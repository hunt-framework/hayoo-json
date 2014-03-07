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
        "word": "timezone-olson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser and renderer for binary Olson timezone files whose format\n are specified by the tzfile(5) man page on Unix-like systems. For\n more information about this format, see\n \u003ca\u003ehttp://www.twinsun.com/tz/tz-link.htm\u003c/a\u003e. Functions are provided for\n converting the parsed data into \u003ccode\u003eTimeZoneSeries\u003c/code\u003e and \u003ccode\u003eTimeZone\u003c/code\u003e\n objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Olson",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson.html",
          "type": "module"
        },
        "index": {
          "description": "parser and renderer for binary Olson timezone files whose format are specified by the tzfile man page on Unix-like systems For more information about this format see http www.twinsun.com tz tz-link.htm Functions are provided for converting the parsed data into TimeZoneSeries and TimeZone objects",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Olson",
          "package": "timezone-olson",
          "partial": "Olson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOlson timezone files can contain leap second specifications, though\n most do not.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "LeapInfo",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#LeapInfo",
          "type": "data"
        },
        "index": {
          "description": "Olson timezone files can contain leap second specifications though most do not",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "LeapInfo",
          "package": "timezone-olson",
          "partial": "Leap Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:LeapInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOlsonData\u003c/code\u003e represents a full set of timezone data for a location.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eOlsonData\u003c/code\u003e can represent timezone data from files in Version 1 format\n or Version 2 format. Version 1 format files can only contain timestamp\n values that can be represented in less than 32 bits, and cannot contain\n a POSIX TZ string.\n\u003c/p\u003e\u003cp\u003eIn a Version 2 format file, the timezone data is split into two parts.\n The first part contains timezone data for which all timestamp values\n can be represented in less than 32 bits, and the second part contains\n timezone data for which 32 bits or more are required to represent\n timestamp values. The POSIX TZ string, if present, can only be rendered\n in a Version 2 file, and appears after both parts of the timezone data.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonData",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "data"
        },
        "index": {
          "description": "OlsonData represents full set of timezone data for location OlsonData can represent timezone data from files in Version format or Version format Version format files can only contain timestamp values that can be represented in less than bits and cannot contain POSIX TZ string In Version format file the timezone data is split into two parts The first part contains timezone data for which all timestamp values can be represented in less than bits and the second part contains timezone data for which bits or more are required to represent timestamp values The POSIX TZ string if present can only be rendered in Version file and appears after both parts of the timezone data",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonData",
          "package": "timezone-olson",
          "partial": "Olson Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:OlsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating that the binary data being parsed was not\n valid Olson timezone data\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonError",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Parse.html#OlsonError",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating that the binary data being parsed was not valid Olson timezone data",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonError",
          "package": "timezone-olson",
          "partial": "Olson Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:OlsonError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reference C implentation imposes size limits on the data\n structures in a timezone file.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "SizeLimits",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "data"
        },
        "index": {
          "description": "The reference implentation imposes size limits on the data structures in timezone file",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "SizeLimits",
          "package": "timezone-olson",
          "partial": "Size Limits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:SizeLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTransition\u003c/code\u003e represents a moment when the clocks change in a\n timezone. It consists of a Unix timestamp value that indicates the\n exact moment in UTC when the clocks change, and the 0-based index\n in the list of \u003ccode\u003eTtInfo\u003c/code\u003e specifications for the description of the\n new time after the clocks change.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Transition",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#Transition",
          "type": "data"
        },
        "index": {
          "description": "Transition represents moment when the clocks change in timezone It consists of Unix timestamp value that indicates the exact moment in UTC when the clocks change and the based index in the list of TtInfo specifications for the description of the new time after the clocks change",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Transition",
          "package": "timezone-olson",
          "partial": "Transition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:Transition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTransitionType\u003c/code\u003e is historical information about whether the\n official body that announced a time change specified the time of\n the change in terms of UTC, standard time (i.e., non-summer time)\n for the time zone, or the current wall clock time in the time\n zone. This historical trivia may seem rather boring, but\n unfortunately it is needed to interpret a POSIX-style TZ string\n timezone specification correctly.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TransitionType",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TransitionType",
          "type": "data"
        },
        "index": {
          "description": "TransitionType is historical information about whether the official body that announced time change specified the time of the change in terms of UTC standard time i.e non-summer time for the time zone or the current wall clock time in the time zone This historical trivia may seem rather boring but unfortunately it is needed to interpret POSIX-style TZ string timezone specification correctly",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TransitionType",
          "package": "timezone-olson",
          "partial": "Transition Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:TransitionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTtInfo\u003c/code\u003e is a specification of local time in a timezone for\n some period during which the clocks did not change. \u003ccode\u003eabbr\u003c/code\u003e is\n \u003ccode\u003eString\u003c/code\u003e if the timezone abbreviation is represented as a \u003ccode\u003eString\u003c/code\u003e,\n or \u003ccode\u003eInt\u003c/code\u003e if it is represented as an index into a long string of\n null-terminated abbreviation strings (as in an Olson binary\n timezone file).\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TtInfo",
          "package": "timezone-olson",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "data"
        },
        "index": {
          "description": "TtInfo is specification of local time in timezone for some period during which the clocks did not change abbr is String if the timezone abbreviation is represented as String or Int if it is represented as an index into long string of null-terminated abbreviation strings as in an Olson binary timezone file",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TtInfo",
          "package": "timezone-olson",
          "partial": "Tt Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#t:TtInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "LeapInfo",
          "package": "timezone-olson",
          "signature": "LeapInfo",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#LeapInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "LeapInfo",
          "package": "timezone-olson",
          "partial": "Leap Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:LeapInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonData",
          "package": "timezone-olson",
          "signature": "OlsonData",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "OlsonData",
          "package": "timezone-olson",
          "partial": "Olson Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:OlsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "SizeLimits",
          "package": "timezone-olson",
          "signature": "SizeLimits",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "SizeLimits",
          "package": "timezone-olson",
          "partial": "Size Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:SizeLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Std",
          "package": "timezone-olson",
          "signature": "Std",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TransitionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Std",
          "package": "timezone-olson",
          "partial": "Std",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:Std"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Transition",
          "package": "timezone-olson",
          "signature": "Transition",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#Transition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Transition",
          "package": "timezone-olson",
          "partial": "Transition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:Transition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TtInfo",
          "package": "timezone-olson",
          "signature": "TtInfo",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "TtInfo",
          "package": "timezone-olson",
          "partial": "Tt Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:TtInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "UTC",
          "package": "timezone-olson",
          "signature": "UTC",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TransitionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "UTC",
          "package": "timezone-olson",
          "partial": "UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:UTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Wall",
          "package": "timezone-olson",
          "signature": "Wall",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TransitionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "Wall",
          "package": "timezone-olson",
          "partial": "Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:Wall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size limits in \u003ccode\u003edefaultLimits\u003c/code\u003e are taken from the file\n tzfile.h from tzcode version 2010f. These are the limits for the C\n implementation on many platforms.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "defaultLimits",
          "package": "timezone-olson",
          "signature": "SizeLimits",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#defaultLimits",
          "type": "function"
        },
        "index": {
          "description": "The size limits in defaultLimits are taken from the file tzfile.h from tzcode version These are the limits for the implementation on many platforms",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "defaultLimits",
          "package": "timezone-olson",
          "partial": "Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:defaultLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract Olson timezone data that can be rendered using Version 1 format\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "extractOlsonV1",
          "package": "timezone-olson",
          "signature": "OlsonData -\u003e OlsonData",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#extractOlsonV1",
          "type": "function"
        },
        "index": {
          "description": "Extract Olson timezone data that can be rendered using Version format",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "extractOlsonV1",
          "normalized": "OlsonData-\u003eOlsonData",
          "package": "timezone-olson",
          "partial": "Olson",
          "signature": "OlsonData-\u003eOlsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:extractOlsonV1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary parser for binary Olson timezone files\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getOlson",
          "package": "timezone-olson",
          "signature": "SizeLimits -\u003e Get OlsonData",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Parse.html#getOlson",
          "type": "function"
        },
        "index": {
          "description": "binary parser for binary Olson timezone files",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getOlson",
          "normalized": "SizeLimits-\u003eGet OlsonData",
          "package": "timezone-olson",
          "partial": "Olson",
          "signature": "SizeLimits-\u003eGet OlsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:getOlson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a binary Olson timezone file.\n\u003c/p\u003e\u003cp\u003eIf the values in the Olson timezone file exceed the standard size\n limits (see \u003ccode\u003e\u003ca\u003edefaultLimits\u003c/a\u003e\u003c/code\u003e), this function throws an\n exception. For other behavior, use \u003ccode\u003e\u003ca\u003egetOlson\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getOlsonFromFile",
          "package": "timezone-olson",
          "signature": "FilePath -\u003e IO OlsonData",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Parse.html#getOlsonFromFile",
          "type": "function"
        },
        "index": {
          "description": "Parse binary Olson timezone file If the values in the Olson timezone file exceed the standard size limits see defaultLimits this function throws an exception For other behavior use getOlson and runGet directly",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getOlsonFromFile",
          "normalized": "FilePath-\u003eIO OlsonData",
          "package": "timezone-olson",
          "partial": "Olson From File",
          "signature": "FilePath-\u003eIO OlsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:getOlsonFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead timezone data from a binary Olson timezone file and convert\n it into a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e for use together with the types and\n fucntions of \u003ca\u003eData.Time\u003c/a\u003e. This is the function from this module\n for which you are most likely to have use.\n\u003c/p\u003e\u003cp\u003eIf the values in the Olson timezone file exceed the standard size\n limits (see \u003ccode\u003e\u003ca\u003edefaultLimits\u003c/a\u003e\u003c/code\u003e), this function throws an\n exception. For other behavior, use \u003ccode\u003e\u003ca\u003egetOlson\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getTimeZoneSeriesFromOlsonFile",
          "package": "timezone-olson",
          "signature": "FilePath -\u003e IO TimeZoneSeries",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Parse.html#getTimeZoneSeriesFromOlsonFile",
          "type": "function"
        },
        "index": {
          "description": "Read timezone data from binary Olson timezone file and convert it into TimeZoneSeries for use together with the types and fucntions of Data.Time This is the function from this module for which you are most likely to have use If the values in the Olson timezone file exceed the standard size limits see defaultLimits this function throws an exception For other behavior use getOlson and runGet directly",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "getTimeZoneSeriesFromOlsonFile",
          "normalized": "FilePath-\u003eIO TimeZoneSeries",
          "package": "timezone-olson",
          "partial": "Time Zone Series From Olson File",
          "signature": "FilePath-\u003eIO TimeZoneSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:getTimeZoneSeriesFromOlsonFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new total offset of UTC from UT1\n after this leap second\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "leapOffset",
          "package": "timezone-olson",
          "signature": "Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#LeapInfo",
          "type": "function"
        },
        "index": {
          "description": "The new total offset of UTC from UT1 after this leap second",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "leapOffset",
          "package": "timezone-olson",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:leapOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Unix timestamp indicating the time\n that the leap second occurred\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "leapTime",
          "package": "timezone-olson",
          "signature": "Integer",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#LeapInfo",
          "type": "function"
        },
        "index": {
          "description": "Unix timestamp indicating the time that the leap second occurred",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "leapTime",
          "package": "timezone-olson",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:leapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elimitsNoSolar\u003c/code\u003e contains the tighter size limits imposed on some\n platforms that do not allow timezones that are based on solar time.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "limitsNoSolar",
          "package": "timezone-olson",
          "signature": "SizeLimits",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#limitsNoSolar",
          "type": "function"
        },
        "index": {
          "description": "limitsNoSolar contains the tighter size limits imposed on some platforms that do not allow timezones that are based on solar time",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "limitsNoSolar",
          "package": "timezone-olson",
          "partial": "No Solar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:limitsNoSolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum total number of bytes in\n all timezone abbreviations.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxAbbrChars",
          "package": "timezone-olson",
          "signature": "Maybe Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "function"
        },
        "index": {
          "description": "The maximum total number of bytes in all timezone abbreviations",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxAbbrChars",
          "package": "timezone-olson",
          "partial": "Abbr Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:maxAbbrChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of leap second\n specifications.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxLeaps",
          "package": "timezone-olson",
          "signature": "Maybe Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of leap second specifications",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxLeaps",
          "package": "timezone-olson",
          "partial": "Leaps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:maxLeaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of transition times\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxTimes",
          "package": "timezone-olson",
          "signature": "Maybe Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of transition times",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxTimes",
          "package": "timezone-olson",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:maxTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of TtInfo\n clock settings\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxTypes",
          "package": "timezone-olson",
          "signature": "Maybe Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#SizeLimits",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of TtInfo clock settings",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "maxTypes",
          "package": "timezone-olson",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:maxTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enoLimits\u003c/code\u003e imposes no size limits. If you use \u003ccode\u003enoLimits\u003c/code\u003e when\n parsing, you may exhaust all available memory when reading a faulty\n or malicious timezone file. If you use \u003ccode\u003enoLimits\u003c/code\u003e when rendering,\n the rendered timezone file might not be readable on some systems.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "noLimits",
          "package": "timezone-olson",
          "signature": "SizeLimits",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#noLimits",
          "type": "function"
        },
        "index": {
          "description": "noLimits imposes no size limits If you use noLimits when parsing you may exhaust all available memory when reading faulty or malicious timezone file If you use noLimits when rendering the rendered timezone file might not be readable on some systems",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "noLimits",
          "package": "timezone-olson",
          "partial": "Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:noLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonLeaps",
          "package": "timezone-olson",
          "signature": "[LeapInfo]",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonLeaps",
          "normalized": "[LeapInfo]",
          "package": "timezone-olson",
          "partial": "Leaps",
          "signature": "[LeapInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:olsonLeaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional POSIX TZ string for\n times after the last \u003ccode\u003eTransition\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonPosixTZ",
          "package": "timezone-olson",
          "signature": "Maybe String",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "function"
        },
        "index": {
          "description": "Optional POSIX TZ string for times after the last Transition",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonPosixTZ",
          "package": "timezone-olson",
          "partial": "Posix TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:olsonPosixTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert parsed Olson timezone data into a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonToTimeZoneSeries",
          "package": "timezone-olson",
          "signature": "OlsonData -\u003e Maybe TimeZoneSeries",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Parse.html#olsonToTimeZoneSeries",
          "type": "function"
        },
        "index": {
          "description": "Convert parsed Olson timezone data into TimeZoneSeries",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonToTimeZoneSeries",
          "normalized": "OlsonData-\u003eMaybe TimeZoneSeries",
          "package": "timezone-olson",
          "partial": "To Time Zone Series",
          "signature": "OlsonData-\u003eMaybe TimeZoneSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:olsonToTimeZoneSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonTransitions",
          "package": "timezone-olson",
          "signature": "[Transition]",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonTransitions",
          "normalized": "[Transition]",
          "package": "timezone-olson",
          "partial": "Transitions",
          "signature": "[Transition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:olsonTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonTypes",
          "package": "timezone-olson",
          "signature": "[TtInfo String]",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#OlsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "olsonTypes",
          "normalized": "[TtInfo String]",
          "package": "timezone-olson",
          "partial": "Types",
          "signature": "[TtInfo String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:olsonTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Olson timezone data in binary Olson timezone file format\n as a lazy \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "putOlson",
          "package": "timezone-olson",
          "signature": "OlsonData -\u003e Put",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#putOlson",
          "type": "function"
        },
        "index": {
          "description": "Render Olson timezone data in binary Olson timezone file format as lazy ByteString",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "putOlson",
          "normalized": "OlsonData-\u003ePut",
          "package": "timezone-olson",
          "partial": "Olson",
          "signature": "OlsonData-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:putOlson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Olson timezone data as a binary Olson timezone file\n\u003c/p\u003e\u003cp\u003eIf the values in the Olson timezone data exceed the standard size\n limits (see \u003ccode\u003e\u003ca\u003edefaultLimits\u003c/a\u003e\u003c/code\u003e), this function throws an\n exception. For other behavior, use \u003ccode\u003e\u003ca\u003everifyOlsonLimits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eputOlson\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "renderOlsonToFile",
          "package": "timezone-olson",
          "signature": "FilePath -\u003e OlsonData -\u003e IO ()",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#renderOlsonToFile",
          "type": "function"
        },
        "index": {
          "description": "Render Olson timezone data as binary Olson timezone file If the values in the Olson timezone data exceed the standard size limits see defaultLimits this function throws an exception For other behavior use verifyOlsonLimits putOlson and runPut directly",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "renderOlsonToFile",
          "normalized": "FilePath-\u003eOlsonData-\u003eIO()",
          "package": "timezone-olson",
          "partial": "Olson To File",
          "signature": "FilePath-\u003eOlsonData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:renderOlsonToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e as a binary Olson timezone file.\n\u003c/p\u003e\u003cp\u003eIf the values in the Olson timezone data exceed the standard size\n limits (see \u003ccode\u003e\u003ca\u003edefaultLimits\u003c/a\u003e\u003c/code\u003e), this function throws an\n exception. For other behavior, use \u003ccode\u003e\u003ca\u003etimeZoneSeriesToOlson\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003everifyOlsonLimits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eputOlson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e\n directly.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "renderTimeZoneSeriesToOlsonFile",
          "package": "timezone-olson",
          "signature": "FilePath -\u003e TimeZoneSeries -\u003e IO ()",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#renderTimeZoneSeriesToOlsonFile",
          "type": "function"
        },
        "index": {
          "description": "Render TimeZoneSeries as binary Olson timezone file If the values in the Olson timezone data exceed the standard size limits see defaultLimits this function throws an exception For other behavior use timeZoneSeriesToOlson verifyOlsonLimits putOlson and runPut directly",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "renderTimeZoneSeriesToOlsonFile",
          "normalized": "FilePath-\u003eTimeZoneSeries-\u003eIO()",
          "package": "timezone-olson",
          "partial": "Time Zone Series To Olson File",
          "signature": "FilePath-\u003eTimeZoneSeries-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:renderTimeZoneSeriesToOlsonFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eTimeZoneSeries\u003c/code\u003e to \u003ccode\u003eOlsonData\u003c/code\u003e for rendering.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "timeZoneSeriesToOlson",
          "package": "timezone-olson",
          "signature": "TimeZoneSeries -\u003e Maybe OlsonData",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#timeZoneSeriesToOlson",
          "type": "function"
        },
        "index": {
          "description": "Convert TimeZoneSeries to OlsonData for rendering",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "timeZoneSeriesToOlson",
          "normalized": "TimeZoneSeries-\u003eMaybe OlsonData",
          "package": "timezone-olson",
          "partial": "Zone Series To Olson",
          "signature": "TimeZoneSeries-\u003eMaybe OlsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:timeZoneSeriesToOlson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0-based index in the list of \u003ccode\u003eTtInfo\u003c/code\u003e\n that describes the new time\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "transIndex",
          "package": "timezone-olson",
          "signature": "Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#Transition",
          "type": "function"
        },
        "index": {
          "description": "based index in the list of TtInfo that describes the new time",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "transIndex",
          "package": "timezone-olson",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:transIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnix timestamp indicating the time\n when the clocks change\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "transTime",
          "package": "timezone-olson",
          "signature": "Integer",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#Transition",
          "type": "function"
        },
        "index": {
          "description": "Unix timestamp indicating the time when the clocks change",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "transTime",
          "package": "timezone-olson",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:transTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timezone abbreviation string.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_abbr",
          "package": "timezone-olson",
          "signature": "abbr",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "function"
        },
        "index": {
          "description": "The timezone abbreviation string",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_abbr",
          "package": "timezone-olson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:tt_abbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset of local clocks from UTC,\n in seconds\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_gmtoff",
          "package": "timezone-olson",
          "signature": "Int",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "function"
        },
        "index": {
          "description": "The offset of local clocks from UTC in seconds",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_gmtoff",
          "package": "timezone-olson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:tt_gmtoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if local clocks are summer time\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_isdst",
          "package": "timezone-olson",
          "signature": "Bool",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "function"
        },
        "index": {
          "description": "True if local clocks are summer time",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_isdst",
          "package": "timezone-olson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:tt_isdst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_ttype",
          "package": "timezone-olson",
          "signature": "TransitionType",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Types.html#TtInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "tt_ttype",
          "package": "timezone-olson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:tt_ttype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether \u003ccode\u003eOlsonData\u003c/code\u003e is within size limits.\n\u003c/p\u003e",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "verifyOlsonLimits",
          "package": "timezone-olson",
          "signature": "SizeLimits -\u003e OlsonData -\u003e Bool",
          "source": "src/Data-Time-LocalTime-TimeZone-Olson-Render.html#verifyOlsonLimits",
          "type": "function"
        },
        "index": {
          "description": "Check whether OlsonData is within size limits",
          "hierarchy": "Data Time LocalTime TimeZone Olson",
          "module": "Data.Time.LocalTime.TimeZone.Olson",
          "name": "verifyOlsonLimits",
          "normalized": "SizeLimits-\u003eOlsonData-\u003eBool",
          "package": "timezone-olson",
          "partial": "Olson Limits",
          "signature": "SizeLimits-\u003eOlsonData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timezone-olson/docs/Data-Time-LocalTime-TimeZone-Olson.html#v:verifyOlsonLimits"
      }
    }
  ]
]