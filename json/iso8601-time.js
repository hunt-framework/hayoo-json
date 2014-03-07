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
        "word": "iso8601-time"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.ISO8601",
          "name": "ISO8601",
          "package": "iso8601-time",
          "source": "src/Data-Time-ISO8601.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "ISO8601",
          "package": "iso8601-time",
          "partial": "ISO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in ISO 8601, with up to 12 second decimals.\n\u003c/p\u003e\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003eformatTime\u003c/a\u003e\u003c/code\u003e format \u003ccode\u003e%FT%T%Q\u003c/code\u003e == \u003ccode\u003e%%Y-%m-%dT%%H:%M:%S%Q\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor\n\u003c/p\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601",
          "type": "function"
        },
        "index": {
          "description": "Formats time in ISO with up to second decimals This is the formatTime format FT dT For",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time like JavaScript's \u003ccode\u003enew Date().toISOString()\u003c/code\u003e\n as specified by Mozilla: \u003ca\u003ehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis is an alias for \u003ccode\u003e\u003ca\u003eformatISO8601Millis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Javascript",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601Javascript",
          "type": "function"
        },
        "index": {
          "description": "Formats time like JavaScript new Date toISOString as specified by Mozilla https developer.mozilla.org en-US docs Web JavaScript Reference Global Objects Date toISOString This is an alias for formatISO8601Millis",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Javascript",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO Javascript",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601Javascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in ISO 8601 with up to microsecond precision and trailing zeros.\n The format is precisely:\n\u003c/p\u003e\u003cpre\u003eYYYY-MM-DDTHH:mm:ss.ssssssZ\n\u003c/pre\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Micros",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601Micros",
          "type": "function"
        },
        "index": {
          "description": "Formats time in ISO with up to microsecond precision and trailing zeros The format is precisely YYYY-MM-DDTHH mm ss.ssssssZ",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Micros",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO Micros",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601Micros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in ISO 8601 with up to millisecond precision and trailing zeros.\n The format is precisely:\n\u003c/p\u003e\u003cpre\u003eYYYY-MM-DDTHH:mm:ss.sssZ\n\u003c/pre\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Millis",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601Millis",
          "type": "function"
        },
        "index": {
          "description": "Formats time in ISO with up to millisecond precision and trailing zeros The format is precisely YYYY-MM-DDTHH mm ss.sssZ",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Millis",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO Millis",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601Millis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in ISO 8601 with up to nanosecond precision and trailing zeros.\n The format is precisely:\n\u003c/p\u003e\u003cpre\u003eYYYY-MM-DDTHH:mm:ss.sssssssssZ\n\u003c/pre\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Nanos",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601Nanos",
          "type": "function"
        },
        "index": {
          "description": "Formats time in ISO with up to nanosecond precision and trailing zeros The format is precisely YYYY-MM-DDTHH mm ss.sssssssssZ",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Nanos",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO Nanos",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601Nanos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in ISO 8601 with up to picosecond precision and trailing zeros.\n The format is precisely:\n\u003c/p\u003e\u003cpre\u003eYYYY-MM-DDTHH:mm:ss.ssssssssssssZ\n\u003c/pre\u003e",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Picos",
          "package": "iso8601-time",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-Time-ISO8601.html#formatISO8601Picos",
          "type": "function"
        },
        "index": {
          "description": "Formats time in ISO with up to picosecond precision and trailing zeros The format is precisely YYYY-MM-DDTHH mm ss.ssssssssssssZ",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "formatISO8601Picos",
          "normalized": "UTCTime-\u003eString",
          "package": "iso8601-time",
          "partial": "ISO Picos",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:formatISO8601Picos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an ISO 8601 string.\n\u003c/p\u003e",
          "module": "Data.Time.ISO8601",
          "name": "parseISO8601",
          "package": "iso8601-time",
          "signature": "String -\u003e Maybe UTCTime",
          "source": "src/Data-Time-ISO8601.html#parseISO8601",
          "type": "function"
        },
        "index": {
          "description": "Parses an ISO string",
          "hierarchy": "Data Time ISO8601",
          "module": "Data.Time.ISO8601",
          "name": "parseISO8601",
          "normalized": "String-\u003eMaybe UTCTime",
          "package": "iso8601-time",
          "partial": "ISO",
          "signature": "String-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iso8601-time/docs/Data-Time-ISO8601.html#v:parseISO8601"
      }
    }
  ]
]