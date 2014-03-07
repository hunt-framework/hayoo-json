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
        "word": "http-date"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast parser and formatter for HTTP Date.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Date",
          "name": "Date",
          "package": "http-date",
          "source": "src/Network-HTTP-Date.html",
          "type": "module"
        },
        "index": {
          "description": "Fast parser and formatter for HTTP Date",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "Date",
          "package": "http-date",
          "partial": "Date",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for HTTP Date. This value should be specified\n  with \u003ccode\u003e\u003ca\u003edefaultHTTPDate\u003c/a\u003e\u003c/code\u003e and its field labels.\n\u003c/p\u003e",
          "module": "Network.HTTP.Date",
          "name": "HTTPDate",
          "package": "http-date",
          "source": "src/Network-HTTP-Date-Types.html#HTTPDate",
          "type": "data"
        },
        "index": {
          "description": "Data structure for HTTP Date This value should be specified with defaultHTTPDate and its field labels",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "HTTPDate",
          "package": "http-date",
          "partial": "HTTPDate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#t:HTTPDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default value for \u003ccode\u003e\u003ca\u003eHTTPDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Date",
          "name": "defaultHTTPDate",
          "package": "http-date",
          "signature": "HTTPDate",
          "source": "src/Network-HTTP-Date-Types.html#defaultHTTPDate",
          "type": "function"
        },
        "index": {
          "description": "default value for HTTPDate",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "defaultHTTPDate",
          "package": "http-date",
          "partial": "HTTPDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:defaultHTTPDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslating \u003ccode\u003e\u003ca\u003eEpochTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHTTPDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Date",
          "name": "epochTimeToHTTPDate",
          "package": "http-date",
          "signature": "EpochTime -\u003e HTTPDate",
          "source": "src/Network-HTTP-Date-Converter.html#epochTimeToHTTPDate",
          "type": "function"
        },
        "index": {
          "description": "Translating EpochTime to HTTPDate",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "epochTimeToHTTPDate",
          "normalized": "EpochTime-\u003eHTTPDate",
          "package": "http-date",
          "partial": "Time To HTTPDate",
          "signature": "EpochTime-\u003eHTTPDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:epochTimeToHTTPDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerating HTTP Date in RFC1123 style.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eformatHTTPDate defaultHTTPDate {hdYear = 1994, hdMonth = 11, hdDay = 15, hdHour = 8, hdMinute = 12, hdSecond = 31, hdWkday = 2}\n\u003c/code\u003e\u003c/strong\u003e\"Tue, 15 Nov 1994 08:12:31 GMT\"\n\u003c/pre\u003e",
          "module": "Network.HTTP.Date",
          "name": "formatHTTPDate",
          "package": "http-date",
          "signature": "HTTPDate -\u003e ByteString",
          "source": "src/Network-HTTP-Date-Formatter.html#formatHTTPDate",
          "type": "function"
        },
        "index": {
          "description": "Generating HTTP Date in RFC1123 style formatHTTPDate defaultHTTPDate hdYear hdMonth hdDay hdHour hdMinute hdSecond hdWkday Tue Nov GMT",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "formatHTTPDate",
          "normalized": "HTTPDate-\u003eByteString",
          "package": "http-date",
          "partial": "HTTPDate",
          "signature": "HTTPDate-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:formatHTTPDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdDay",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdDay",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Day",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdHour",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdHour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdHour",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Hour",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdMinute",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdMinute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdMinute",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Minute",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdMonth",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdMonth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdMonth",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Month",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdSecond",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdSecond",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Second",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdWkday",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdWkday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdWkday",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Wkday",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdWkday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Date",
          "name": "hdYear",
          "package": "http-date",
          "signature": "HTTPDate -\u003e Int",
          "source": "src/Network-HTTP-Date-Types.html#hdYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "hdYear",
          "normalized": "HTTPDate-\u003eInt",
          "package": "http-date",
          "partial": "Year",
          "signature": "HTTPDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing HTTP Date. Currently only RFC1123 style is supported.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseHTTPDate \"Tue, 15 Nov 1994 08:12:31 GMT\"\n\u003c/code\u003e\u003c/strong\u003eJust (HTTPDate {hdYear = 1994, hdMonth = 11, hdDay = 15, hdHour = 8, hdMinute = 12, hdSecond = 31, hdWkday = 2})\n\u003c/pre\u003e",
          "module": "Network.HTTP.Date",
          "name": "parseHTTPDate",
          "package": "http-date",
          "signature": "ByteString -\u003e Maybe HTTPDate",
          "source": "src/Network-HTTP-Date-Parser.html#parseHTTPDate",
          "type": "function"
        },
        "index": {
          "description": "Parsing HTTP Date Currently only RFC1123 style is supported parseHTTPDate Tue Nov GMT Just HTTPDate hdYear hdMonth hdDay hdHour hdMinute hdSecond hdWkday",
          "hierarchy": "Network HTTP Date",
          "module": "Network.HTTP.Date",
          "name": "parseHTTPDate",
          "normalized": "ByteString-\u003eMaybe HTTPDate",
          "package": "http-date",
          "partial": "HTTPDate",
          "signature": "ByteString-\u003eMaybe HTTPDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:parseHTTPDate"
      }
    }
  ]
]