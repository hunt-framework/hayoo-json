[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast parser and formatter for HTTP Date.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Date.html",
        "fct-type": "module",
        "title": "Date"
      },
      "index": {
        "description": "Fast parser and formatter for HTTP Date",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "Date",
        "normalized": "",
        "package": "http-date",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#t:HTTPDate",
      "description": {
        "fct-descr": "\u003cp\u003eData structure for HTTP Date. This value should be specified\n  with \u003ccode\u003e\u003ca\u003edefaultHTTPDate\u003c/a\u003e\u003c/code\u003e and its field labels.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Date-Types.html#HTTPDate",
        "fct-type": "data",
        "title": "HTTPDate"
      },
      "index": {
        "description": "Data structure for HTTP Date This value should be specified with defaultHTTPDate and its field labels",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "HTTPDate",
        "normalized": "",
        "package": "http-date",
        "partial": "HTTPDate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:defaultHTTPDate",
      "description": {
        "fct-descr": "\u003cp\u003eA default value for \u003ccode\u003e\u003ca\u003eHTTPDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate",
        "fct-source": "src/Network-HTTP-Date-Types.html#defaultHTTPDate",
        "fct-type": "function",
        "title": "defaultHTTPDate"
      },
      "index": {
        "description": "default value for HTTPDate",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "defaultHTTPDate",
        "normalized": "",
        "package": "http-date",
        "partial": "HTTPDate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:epochTimeToHTTPDate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslating \u003ccode\u003e\u003ca\u003eEpochTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHTTPDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "EpochTime -\u003e HTTPDate",
        "fct-source": "src/Network-HTTP-Date-Converter.html#epochTimeToHTTPDate",
        "fct-type": "function",
        "title": "epochTimeToHTTPDate"
      },
      "index": {
        "description": "Translating EpochTime to HTTPDate",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "epochTimeToHTTPDate",
        "normalized": "EpochTime-\u003eHTTPDate",
        "package": "http-date",
        "partial": "Time To HTTPDate",
        "signature": "EpochTime-\u003eHTTPDate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:formatHTTPDate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerating HTTP Date in RFC1123 style.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eformatHTTPDate defaultHTTPDate {hdYear = 1994, hdMonth = 11, hdDay = 15, hdHour = 8, hdMinute = 12, hdSecond = 31, hdWkday = 2}\n\u003c/code\u003e\u003c/strong\u003e\"Tue, 15 Nov 1994 08:12:31 GMT\"\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e ByteString",
        "fct-source": "src/Network-HTTP-Date-Formatter.html#formatHTTPDate",
        "fct-type": "function",
        "title": "formatHTTPDate"
      },
      "index": {
        "description": "Generating HTTP Date in RFC1123 style formatHTTPDate defaultHTTPDate hdYear hdMonth hdDay hdHour hdMinute hdSecond hdWkday Tue Nov GMT",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "formatHTTPDate",
        "normalized": "HTTPDate-\u003eByteString",
        "package": "http-date",
        "partial": "HTTPDate",
        "signature": "HTTPDate-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdDay",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdDay",
        "fct-type": "function",
        "title": "hdDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdDay",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Day",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdHour",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdHour",
        "fct-type": "function",
        "title": "hdHour"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdHour",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Hour",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdMinute",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdMinute",
        "fct-type": "function",
        "title": "hdMinute"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdMinute",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Minute",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdMonth",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdMonth",
        "fct-type": "function",
        "title": "hdMonth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdMonth",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Month",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdSecond",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdSecond",
        "fct-type": "function",
        "title": "hdSecond"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdSecond",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Second",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdWkday",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdWkday",
        "fct-type": "function",
        "title": "hdWkday"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdWkday",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Wkday",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:hdYear",
      "description": {
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "HTTPDate -\u003e Int",
        "fct-source": "src/Network-HTTP-Date-Types.html#hdYear",
        "fct-type": "function",
        "title": "hdYear"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "hdYear",
        "normalized": "HTTPDate-\u003eInt",
        "package": "http-date",
        "partial": "Year",
        "signature": "HTTPDate-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-date/docs/Network-HTTP-Date.html#v:parseHTTPDate",
      "description": {
        "fct-descr": "\u003cp\u003eParsing HTTP Date. Currently only RFC1123 style is supported.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseHTTPDate \"Tue, 15 Nov 1994 08:12:31 GMT\"\n\u003c/code\u003e\u003c/strong\u003eJust (HTTPDate {hdYear = 1994, hdMonth = 11, hdDay = 15, hdHour = 8, hdMinute = 12, hdSecond = 31, hdWkday = 2})\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Date",
        "fct-package": "http-date",
        "fct-signature": "ByteString -\u003e Maybe HTTPDate",
        "fct-source": "src/Network-HTTP-Date-Parser.html#parseHTTPDate",
        "fct-type": "function",
        "title": "parseHTTPDate"
      },
      "index": {
        "description": "Parsing HTTP Date Currently only RFC1123 style is supported parseHTTPDate Tue Nov GMT Just HTTPDate hdYear hdMonth hdDay hdHour hdMinute hdSecond hdWkday",
        "hierarchy": "Network HTTP Date",
        "module": "Network.HTTP.Date",
        "name": "parseHTTPDate",
        "normalized": "ByteString-\u003eMaybe HTTPDate",
        "package": "http-date",
        "partial": "HTTPDate",
        "signature": "ByteString-\u003eMaybe HTTPDate"
      }
    }
  }
]