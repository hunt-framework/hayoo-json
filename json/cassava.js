[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows for incremental decoding of CSV data. This is\n useful if you e.g. want to interleave I/O with parsing or if you\n want finer grained control over how you deal with type conversion\n errors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "module",
        "fct-source": "src/Data-Csv-Incremental.html",
        "fct-type": "module",
        "title": "Incremental"
      },
      "index": {
        "description": "This module allows for incremental decoding of CSV data This is useful if you e.g want to interleave with parsing or if you want finer grained control over how you deal with type conversion errors",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "Incremental",
        "normalized": "",
        "package": "cassava",
        "partial": "Incremental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "data",
        "title": "HasHeader"
      },
      "index": {
        "description": "Is the CSV data preceded by header",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:HeaderParser",
      "description": {
        "fct-descr": "\u003cp\u003eAn incremental parser that when fed data eventually returns a\n parsed \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e, or an error.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Incremental.html#HeaderParser",
        "fct-type": "data",
        "title": "HeaderParser"
      },
      "index": {
        "description": "An incremental parser that when fed data eventually returns parsed Header or an error",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "HeaderParser",
        "normalized": "",
        "package": "cassava",
        "partial": "Header Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eAn incremental parser that when fed data eventually produces some\n parsed records, converted to the desired type, or an error in case\n of malformed input data.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Incremental.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "An incremental parser that when fed data eventually produces some parsed records converted to the desired type or an error in case of malformed input data",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "Parser",
        "normalized": "",
        "package": "cassava",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser parsed and converted some records. Any records\n that failed type conversion are returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e\n and the rest as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e val\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "Done [Either String a]",
        "fct-source": "src/Data-Csv-Incremental.html#Parser",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "The parser parsed and converted some records Any records that failed type conversion are returned as Left errMsg and the rest as Right val",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "Done",
        "normalized": "Done[Either String a]",
        "package": "cassava",
        "partial": "Done",
        "signature": "Done[Either String a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:DoneH",
      "description": {
        "fct-descr": "\u003cp\u003eThe parse succeeded and produced the given \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "DoneH !Header a",
        "fct-source": "src/Data-Csv-Incremental.html#HeaderParser",
        "fct-type": "function",
        "title": "DoneH"
      },
      "index": {
        "description": "The parse succeeded and produced the given Header",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "DoneH",
        "normalized": "",
        "package": "cassava",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Fail",
      "description": {
        "fct-descr": "\u003cp\u003eThe input data was malformed. The first field contains any\n unconsumed input and second field contains information about\n the parse error.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "Fail !ByteString String",
        "fct-source": "src/Data-Csv-Incremental.html#Parser",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "The input data was malformed The first field contains any unconsumed input and second field contains information about the parse error",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "Fail",
        "normalized": "",
        "package": "cassava",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:FailH",
      "description": {
        "fct-descr": "\u003cp\u003eThe input data was malformed. The first field contains any\n unconsumed input and second field contains information about\n the parse error.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "FailH !ByteString String",
        "fct-source": "src/Data-Csv-Incremental.html#HeaderParser",
        "fct-type": "function",
        "title": "FailH"
      },
      "index": {
        "description": "The input data was malformed The first field contains any unconsumed input and second field contains information about the parse error",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "FailH",
        "normalized": "",
        "package": "cassava",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "HasHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "HasHeader"
      },
      "index": {
        "description": "The CSV data is preceded by header",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Many",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser parsed and converted zero or more records. Any\n records that failed type conversion are returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n errMsg\u003c/code\u003e and the rest as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e val\u003c/code\u003e. Feed a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n to the continuation to continue parsing. Use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n string to indicate that no more input data is available. If\n fed an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string, the continuation is guaranteed to\n return either \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "Many [Either String a] (ByteString -\u003e Parser a)",
        "fct-source": "src/Data-Csv-Incremental.html#Parser",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "The parser parsed and converted zero or more records Any records that failed type conversion are returned as Left errMsg and the rest as Right val Feed ByteString to the continuation to continue parsing Use an empty string to indicate that no more input data is available If fed an empty string the continuation is guaranteed to return either Fail or Done",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "Many",
        "normalized": "Many[Either String a](ByteString-\u003eParser a)",
        "package": "cassava",
        "partial": "Many",
        "signature": "Many[Either String a](ByteString-\u003eParser a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:NoHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is not preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "NoHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "NoHeader"
      },
      "index": {
        "description": "The CSV data is not preceded by header",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "NoHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "No Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:PartialH",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser needs more input data before it can produce a\n result. Use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string to indicate that no more\n input data is available. If fed an 'B.empty string', the\n continuation is guaranteed to return either \u003ccode\u003e\u003ca\u003eFailH\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eDoneH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "PartialH (ByteString -\u003e HeaderParser a)",
        "fct-source": "src/Data-Csv-Incremental.html#HeaderParser",
        "fct-type": "function",
        "title": "PartialH"
      },
      "index": {
        "description": "The parser needs more input data before it can produce result Use an empty string to indicate that no more input data is available If fed an B.empty string the continuation is guaranteed to return either FailH or DoneH",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "PartialH",
        "normalized": "PartialH(ByteString-\u003eHeaderParser a)",
        "package": "cassava",
        "partial": "Partial",
        "signature": "PartialH(ByteString-\u003eHeaderParser a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV in an incremental fashion. Equivalent\n to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "HasHeader-\u003e Parser a",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Efficiently deserialize CSV in an incremental fashion Equivalent to decodeWith defaultDecodeOptions",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decode",
        "normalized": "HasHeader-\u003eParser a",
        "package": "cassava",
        "partial": "",
        "signature": "HasHeader-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV in an incremental fashion. The data\n is assumed to be preceeded by a header. Returns a \u003ccode\u003e\u003ca\u003eHeaderParser\u003c/a\u003e\u003c/code\u003e\n that when done produces a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for parsing the actual records.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "HeaderParser (Parser a)",
        "fct-source": "src/Data-Csv-Incremental.html#decodeByName",
        "fct-type": "function",
        "title": "decodeByName"
      },
      "index": {
        "description": "Efficiently deserialize CSV in an incremental fashion The data is assumed to be preceeded by header Returns HeaderParser that when done produces Parser for parsing the actual records Equivalent to decodeByNameWith defaultDecodeOptions",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decodeByName",
        "normalized": "",
        "package": "cassava",
        "partial": "By Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e HeaderParser (Parser a)",
        "fct-type": "function",
        "title": "decodeByNameWith"
      },
      "index": {
        "description": "Like decodeByName but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decodeByNameWith",
        "normalized": "DecodeOptions-\u003eHeaderParser(Parser a)",
        "package": "cassava",
        "partial": "By Name With",
        "signature": "DecodeOptions-\u003eHeaderParser(Parser a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeHeader",
      "description": {
        "fct-descr": "\u003cp\u003eParse a CSV header in an incremental fashion. When done, the\n \u003ccode\u003e\u003ca\u003eHeaderParser\u003c/a\u003e\u003c/code\u003e returns any unconsumed input in the second field of\n the \u003ccode\u003e\u003ca\u003eDoneH\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "HeaderParser ByteString",
        "fct-source": "src/Data-Csv-Incremental.html#decodeHeader",
        "fct-type": "function",
        "title": "decodeHeader"
      },
      "index": {
        "description": "Parse CSV header in an incremental fashion When done the HeaderParser returns any unconsumed input in the second field of the DoneH constructor",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decodeHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeHeaderWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeHeader\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions -\u003e HeaderParser ByteString",
        "fct-source": "src/Data-Csv-Incremental.html#decodeHeaderWith",
        "fct-type": "function",
        "title": "decodeHeaderWith"
      },
      "index": {
        "description": "Like decodeHeader but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decodeHeaderWith",
        "normalized": "DecodeOptions-\u003eHeaderParser ByteString",
        "package": "cassava",
        "partial": "Header With",
        "signature": "DecodeOptions-\u003eHeaderParser ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Incremental",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e HasHeader-\u003e Parser a",
        "fct-type": "function",
        "title": "decodeWith"
      },
      "index": {
        "description": "Like decode but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv Incremental",
        "module": "Data.Csv.Incremental",
        "name": "decodeWith",
        "normalized": "DecodeOptions-\u003eHasHeader-\u003eParser a",
        "package": "cassava",
        "partial": "With",
        "signature": "DecodeOptions-\u003eHasHeader-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA CSV parser. The parser defined here is RFC 4180 compliant, with\n the following extensions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Empty lines are ignored.\n\u003c/li\u003e\u003cli\u003e Non-escaped fields may contain any characters except\n    double-quotes, commas, carriage returns, and newlines.\n\u003c/li\u003e\u003cli\u003e Escaped fields may contain any characters (but double-quotes\n    need to be escaped).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe functions in this module can be used to implement e.g. a\n resumable parser that is fed input incrementally.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "module",
        "fct-source": "src/Data-Csv-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "CSV parser The parser defined here is RFC compliant with the following extensions Empty lines are ignored Non-escaped fields may contain any characters except double-quotes commas carriage returns and newlines Escaped fields may contain any characters but double-quotes need to be escaped The functions in this module can be used to implement e.g resumable parser that is fed input incrementally",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "cassava",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#t:DecodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions that controls how data is decoded. These options can be\n used to e.g. decode tab-separated data instead of comma-separated\n data.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eDecodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultDecodeOptions {\n       decDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "data",
        "title": "DecodeOptions"
      },
      "index": {
        "description": "Options that controls how data is decoded These options can be used to e.g decode tab-separated data instead of comma-separated data To avoid having your program stop compiling when new fields are added to DecodeOptions create option records by overriding values in defaultDecodeOptions Example myOptions defaultDecodeOptions decDelimiter fromIntegral ord",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "DecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:DecodeOptions",
      "description": {
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "function",
        "title": "DecodeOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "DecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:csv",
      "description": {
        "fct-descr": "\u003cp\u003eParse a CSV file that does not include a header.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions -\u003e Parser Csv",
        "fct-source": "src/Data-Csv-Parser.html#csv",
        "fct-type": "function",
        "title": "csv"
      },
      "index": {
        "description": "Parse CSV file that does not include header",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "csv",
        "normalized": "DecodeOptions-\u003eParser Csv",
        "package": "cassava",
        "partial": "",
        "signature": "DecodeOptions-\u003eParser Csv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:csvWithHeader",
      "description": {
        "fct-descr": "\u003cp\u003eParse a CSV file that includes a header.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions -\u003e Parser (Header, Vector NamedRecord)",
        "fct-source": "src/Data-Csv-Parser.html#csvWithHeader",
        "fct-type": "function",
        "title": "csvWithHeader"
      },
      "index": {
        "description": "Parse CSV file that includes header",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "csvWithHeader",
        "normalized": "DecodeOptions-\u003eParser(Header,Vector NamedRecord)",
        "package": "cassava",
        "partial": "With Header",
        "signature": "DecodeOptions-\u003eParser(Header,Vector NamedRecord)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:decDelimiter",
      "description": {
        "fct-descr": "\u003cp\u003eField delimiter.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "function",
        "title": "decDelimiter"
      },
      "index": {
        "description": "Field delimiter",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "decDelimiter",
        "normalized": "",
        "package": "cassava",
        "partial": "Delimiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:defaultDecodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDecoding options for parsing CSV files.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions",
        "fct-source": "src/Data-Csv-Parser.html#defaultDecodeOptions",
        "fct-type": "function",
        "title": "defaultDecodeOptions"
      },
      "index": {
        "description": "Decoding options for parsing CSV files",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "defaultDecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eParse a field. The field may be in either the escaped or\n non-escaped format. The return value is unescaped.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "Word8 -\u003e Parser Field",
        "fct-source": "src/Data-Csv-Parser.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Parse field The field may be in either the escaped or non-escaped format The return value is unescaped",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "field",
        "normalized": "Word-\u003eParser Field",
        "package": "cassava",
        "partial": "",
        "signature": "Word-\u003eParser Field"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:header",
      "description": {
        "fct-descr": "\u003cp\u003eParse a header, including the terminating line separator.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "Word8-\u003e Parser Header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "Parse header including the terminating line separator",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "header",
        "normalized": "Word-\u003eParser Header",
        "package": "cassava",
        "partial": "",
        "signature": "Word-\u003eParser Header"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eParse a header name. Header names have the same format as regular\n \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "Word8 -\u003e Parser Name",
        "fct-source": "src/Data-Csv-Parser.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Parse header name Header names have the same format as regular field",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "name",
        "normalized": "Word-\u003eParser Name",
        "package": "cassava",
        "partial": "",
        "signature": "Word-\u003eParser Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eParse a record, not including the terminating line separator. The\n terminating line separate is not included as the last record in a\n CSV file is allowed to not have a terminating line separator. You\n most likely want to use the \u003ccode\u003e\u003ca\u003eendOfLine\u003c/a\u003e\u003c/code\u003e parser in combination with\n this parser.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Parser",
        "fct-package": "cassava",
        "fct-signature": "Word8-\u003e Parser Record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Parse record not including the terminating line separator The terminating line separate is not included as the last record in CSV file is allowed to not have terminating line separator You most likely want to use the endOfLine parser in combination with this parser",
        "hierarchy": "Data Csv Parser",
        "module": "Data.Csv.Parser",
        "name": "record",
        "normalized": "Word-\u003eParser Record",
        "package": "cassava",
        "partial": "",
        "signature": "Word-\u003eParser Record"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows for streaming decoding of CSV data. This is\n useful if you need to parse large amounts of input in constant\n space. The API also allows you to ignore type conversion errors on\n a per-record basis.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "module",
        "fct-source": "src/Data-Csv-Streaming.html",
        "fct-type": "module",
        "title": "Streaming"
      },
      "index": {
        "description": "This module allows for streaming decoding of CSV data This is useful if you need to parse large amounts of input in constant space The API also allows you to ignore type conversion errors on per-record basis",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "Streaming",
        "normalized": "",
        "package": "cassava",
        "partial": "Streaming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#t:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "data",
        "title": "HasHeader"
      },
      "index": {
        "description": "Is the CSV data preceded by header",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#t:Records",
      "description": {
        "fct-descr": "\u003cp\u003eA stream of parsed records. If type conversion failed for the\n record, the error is returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Streaming.html#Records",
        "fct-type": "data",
        "title": "Records"
      },
      "index": {
        "description": "stream of parsed records If type conversion failed for the record the error is returned as Left errMsg",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "Records",
        "normalized": "",
        "package": "cassava",
        "partial": "Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:Cons",
      "description": {
        "fct-descr": "\u003cp\u003eA record or an error message, followed by more records.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "Cons (Either String a) (Records a)",
        "fct-source": "src/Data-Csv-Streaming.html#Records",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "record or an error message followed by more records",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "Cons",
        "normalized": "",
        "package": "cassava",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "HasHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "HasHeader"
      },
      "index": {
        "description": "The CSV data is preceded by header",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:Nil",
      "description": {
        "fct-descr": "\u003cp\u003eEnd of stream, potentially due to a parse error. If a parse\n error occured, the first field contains the error message.\n The second field contains any unconsumed input.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "Nil (Maybe String) ByteString",
        "fct-source": "src/Data-Csv-Streaming.html#Records",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "End of stream potentially due to parse error If parse error occured the first field contains the error message The second field contains any unconsumed input",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "Nil",
        "normalized": "",
        "package": "cassava",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:NoHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is not preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "NoHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "NoHeader"
      },
      "index": {
        "description": "The CSV data is not preceded by header",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "NoHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "No Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV records in a streaming fashion.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "HasHeader-\u003e ByteString-\u003e Records a",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Efficiently deserialize CSV records in streaming fashion Equivalent to decodeWith defaultDecodeOptions",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "decode",
        "normalized": "HasHeader-\u003eByteString-\u003eRecords a",
        "package": "cassava",
        "partial": "",
        "signature": "HasHeader-\u003eByteString-\u003eRecords a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV in a streaming fashion. The data is\n assumed to be preceeded by a header. Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e if\n parsing the header fails. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "ByteString-\u003e Either String (Header, Records a)",
        "fct-type": "function",
        "title": "decodeByName"
      },
      "index": {
        "description": "Efficiently deserialize CSV in streaming fashion The data is assumed to be preceeded by header Returns Left errMsg if parsing the header fails Equivalent to decodeByNameWith defaultDecodeOptions",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "decodeByName",
        "normalized": "ByteString-\u003eEither String(Header,Records a)",
        "package": "cassava",
        "partial": "By Name",
        "signature": "ByteString-\u003eEither String(Header,Records a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e ByteString-\u003e Either String (Header, Records a)",
        "fct-type": "function",
        "title": "decodeByNameWith"
      },
      "index": {
        "description": "Like decodeByName but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "decodeByNameWith",
        "normalized": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Records a)",
        "package": "cassava",
        "partial": "By Name With",
        "signature": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Records a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv.Streaming",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e HasHeader-\u003e ByteString-\u003e Records a",
        "fct-type": "function",
        "title": "decodeWith"
      },
      "index": {
        "description": "Like decode but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv Streaming",
        "module": "Data.Csv.Streaming",
        "name": "decodeWith",
        "normalized": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eRecords a",
        "package": "cassava",
        "partial": "With",
        "signature": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eRecords a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements encoding and decoding of CSV data. The\n implementation is RFC 4180 compliant, with the following\n extensions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Empty lines are ignored.\n\u003c/li\u003e\u003cli\u003e Non-escaped fields may contain any characters except\n    double-quotes, commas, carriage returns, and newlines.\n\u003c/li\u003e\u003cli\u003e Escaped fields may contain any characters (but double-quotes\n    need to be escaped).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "module",
        "fct-source": "src/Data-Csv.html",
        "fct-type": "module",
        "title": "Csv"
      },
      "index": {
        "description": "This module implements encoding and decoding of CSV data The implementation is RFC compliant with the following extensions Empty lines are ignored Non-escaped fields may contain any characters except double-quotes commas carriage returns and newlines Escaped fields may contain any characters but double-quotes need to be escaped",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Csv",
        "normalized": "",
        "package": "cassava",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Csv",
      "description": {
        "fct-descr": "\u003cp\u003eCSV data represented as a Haskell vector of vector of\n bytestrings.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#Csv",
        "fct-type": "type",
        "title": "Csv"
      },
      "index": {
        "description": "CSV data represented as Haskell vector of vector of bytestrings",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Csv",
        "normalized": "",
        "package": "cassava",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:DecodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions that controls how data is decoded. These options can be\n used to e.g. decode tab-separated data instead of comma-separated\n data.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eDecodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultDecodeOptions {\n       decDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "data",
        "title": "DecodeOptions"
      },
      "index": {
        "description": "Options that controls how data is decoded These options can be used to e.g decode tab-separated data instead of comma-separated data To avoid having your program stop compiling when new fields are added to DecodeOptions create option records by overriding values in defaultDecodeOptions Example myOptions defaultDecodeOptions decDelimiter fromIntegral ord",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "DecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:EncodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions that controls how data is encoded. These options can be\n used to e.g. encode data in a tab-separated format instead of in a\n comma-separated format.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eEncodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultEncodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultEncodeOptions {\n       encDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eencDelimiter\u003c/a\u003e\u003c/code\u003e must \u003cem\u003enot\u003c/em\u003e be the quote character (i.e.\n \u003ccode\u003e\"\u003c/code\u003e) or one of the record separator characters (i.e. \u003ccode\u003e\\n\u003c/code\u003e or\n \u003ccode\u003e\\r\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Encoding.html#EncodeOptions",
        "fct-type": "data",
        "title": "EncodeOptions"
      },
      "index": {
        "description": "Options that controls how data is encoded These options can be used to e.g encode data in tab-separated format instead of in comma-separated format To avoid having your program stop compiling when new fields are added to EncodeOptions create option records by overriding values in defaultEncodeOptions Example myOptions defaultEncodeOptions encDelimiter fromIntegral ord N.B The encDelimiter must not be the quote character i.e or one of the record separator characters i.e or",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "EncodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Encode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA single field within a record.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "single field within record",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Field",
        "normalized": "",
        "package": "cassava",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from a single CSV field, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e can't be converted to the given\n type.\n\u003c/p\u003e\u003cp\u003eExample type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Color = Red | Green | Blue\n\n instance FromField Color where\n     parseField s\n         | s == \"R\"  = pure Red\n         | s == \"G\"  = pure Green\n         | s == \"B\"  = pure Blue\n         | otherwise = mzero\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#FromField",
        "fct-type": "class",
        "title": "FromField"
      },
      "index": {
        "description": "type that can be converted from single CSV field with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Field can be converted to the given type Example type and instance LANGUAGE OverloadedStrings data Color Red Green Blue instance FromField Color where parseField pure Red pure Green pure Blue otherwise mzero",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "FromField",
        "normalized": "",
        "package": "cassava",
        "partial": "From Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromNamedRecord",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from a single CSV record, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e has the wrong number of\n columns.\n\u003c/p\u003e\u003cp\u003eGiven this example data:\n\u003c/p\u003e\u003cpre\u003e name,age\n John,56\n Jane,55\n\u003c/pre\u003e\u003cp\u003ehere's an example type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Person = Person { name :: !Text, age :: !Int }\n\n instance FromNamedRecord Person where\n     parseNamedRecord m = Person \u003c$\u003e\n                          m .: \"name\" \u003c*\u003e\n                          m .: \"age\"\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which\n enables \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#FromNamedRecord",
        "fct-type": "class",
        "title": "FromNamedRecord"
      },
      "index": {
        "description": "type that can be converted from single CSV record with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Record has the wrong number of columns Given this example data name age John Jane here an example type and instance LANGUAGE OverloadedStrings data Person Person name Text age Int instance FromNamedRecord Person where parseNamedRecord Person name age Note the use of the OverloadedStrings language extension which enables ByteString values to be written as string literals",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "FromNamedRecord",
        "normalized": "",
        "package": "cassava",
        "partial": "From Named Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromRecord",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from a single CSV record, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e has the wrong number of\n columns.\n\u003c/p\u003e\u003cp\u003eGiven this example data:\n\u003c/p\u003e\u003cpre\u003e John,56\n Jane,55\n\u003c/pre\u003e\u003cp\u003ehere's an example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance FromRecord Person where\n     parseRecord v\n         | length v == 2 = Person \u003c$\u003e\n                           v .! 0 \u003c*\u003e\n                           v .! 1\n         | otherwise     = mzero\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#FromRecord",
        "fct-type": "class",
        "title": "FromRecord"
      },
      "index": {
        "description": "type that can be converted from single CSV record with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Record has the wrong number of columns Given this example data John Jane here an example type and instance data Person Person name Text age Int instance FromRecord Person where parseRecord length Person otherwise mzero",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "FromRecord",
        "normalized": "",
        "package": "cassava",
        "partial": "From Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "data",
        "title": "HasHeader"
      },
      "index": {
        "description": "Is the CSV data preceded by header",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eThe header corresponds to the first line a CSV file. Not all CSV\n files have a header.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#Header",
        "fct-type": "type",
        "title": "Header"
      },
      "index": {
        "description": "The header corresponds to the first line CSV file Not all CSV files have header",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Header",
        "normalized": "",
        "package": "cassava",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA header has one or more names, describing the data in the column\n following the name.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "header has one or more names describing the data in the column following the name",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Name",
        "normalized": "",
        "package": "cassava",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:NamedRecord",
      "description": {
        "fct-descr": "\u003cp\u003eA record corresponds to a single line in a CSV file, indexed by\n the column name rather than the column index.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#NamedRecord",
        "fct-type": "type",
        "title": "NamedRecord"
      },
      "index": {
        "description": "record corresponds to single line in CSV file indexed by the column name rather than the column index",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "NamedRecord",
        "normalized": "",
        "package": "cassava",
        "partial": "Named Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell lacks a single-element tuple type, so if you CSV data\n with just one column you can use the \u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e type to represent a\n single-column result.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Csv-Conversion.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "Haskell lacks single-element tuple type so if you CSV data with just one column you can use the Only type to represent single-column result",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Only",
        "normalized": "",
        "package": "cassava",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eConversion of a field to a value might fail e.g. if the field is\n malformed. This possibility is captured by the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type, which\n lets you compose several field conversions together in such a way\n that if any of them fail, the whole record conversion fails.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "data",
        "fct-source": "src/Data-Csv-Conversion.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "Conversion of field to value might fail e.g if the field is malformed This possibility is captured by the Parser type which lets you compose several field conversions together in such way that if any of them fail the whole record conversion fails",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Parser",
        "normalized": "",
        "package": "cassava",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eA record corresponds to a single line in a CSV file.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "type",
        "fct-source": "src/Data-Csv-Types.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "record corresponds to single line in CSV file",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Record",
        "normalized": "",
        "package": "cassava",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to a single CSV field.\n\u003c/p\u003e\u003cp\u003eExample type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Color = Red | Green | Blue\n\n instance ToField Color where\n     toField Red   = \"R\"\n     toField Green = \"G\"\n     toField Blue  = \"B\"\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#ToField",
        "fct-type": "class",
        "title": "ToField"
      },
      "index": {
        "description": "type that can be converted to single CSV field Example type and instance LANGUAGE OverloadedStrings data Color Red Green Blue instance ToField Color where toField Red toField Green toField Blue",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "ToField",
        "normalized": "",
        "package": "cassava",
        "partial": "To Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToNamedRecord",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to a single CSV record.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance ToNamedRecord Person where\n     toNamedRecord (Person name age) = namedRecord [\n         \"name\" .= name, \"age\" .= age]\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#ToNamedRecord",
        "fct-type": "class",
        "title": "ToNamedRecord"
      },
      "index": {
        "description": "type that can be converted to single CSV record An example type and instance data Person Person name Text age Int instance ToNamedRecord Person where toNamedRecord Person name age namedRecord name name age age",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "ToNamedRecord",
        "normalized": "",
        "package": "cassava",
        "partial": "To Named Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToRecord",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to a single CSV record.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance ToRecord Person where\n     toRecord (Person name age) = record [\n         toField name, toField age]\n\u003c/pre\u003e\u003cp\u003eOutputs data on this form:\n\u003c/p\u003e\u003cpre\u003e John,56\n Jane,55\n\u003c/pre\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "class",
        "fct-source": "src/Data-Csv-Conversion.html#ToRecord",
        "fct-type": "class",
        "title": "ToRecord"
      },
      "index": {
        "description": "type that can be converted to single CSV record An example type and instance data Person Person name Text age Int instance ToRecord Person where toRecord Person name age record toField name toField age Outputs data on this form John Jane",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "ToRecord",
        "normalized": "",
        "package": "cassava",
        "partial": "To Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.-33-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Record -\u003e Int -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#.%21",
        "fct-type": "function",
        "title": "(.!)"
      },
      "index": {
        "description": "Alias for index",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "(.!) .!",
        "normalized": "Record-\u003eInt-\u003eParser a",
        "package": "cassava",
        "partial": "",
        "signature": "Record-\u003eInt-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003enamedField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "ByteString -\u003e a -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-Csv-Conversion.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Alias for namedField",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "(.=) .=",
        "normalized": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
        "package": "cassava",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "NamedRecord -\u003e ByteString -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Alias for lookup",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "(.:) .:",
        "normalized": "NamedRecord-\u003eByteString-\u003eParser a",
        "package": "cassava",
        "partial": "",
        "signature": "NamedRecord-\u003eByteString-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:DecodeOptions",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "function",
        "title": "DecodeOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "DecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:EncodeOptions",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "EncodeOptions",
        "fct-source": "src/Data-Csv-Encoding.html#EncodeOptions",
        "fct-type": "function",
        "title": "EncodeOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "EncodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Encode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:HasHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "HasHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "HasHeader"
      },
      "index": {
        "description": "The CSV data is preceded by header",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "HasHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "Has Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:NoHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe CSV data is not preceded by a header\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "NoHeader",
        "fct-source": "src/Data-Csv-Types.html#HasHeader",
        "fct-type": "function",
        "title": "NoHeader"
      },
      "index": {
        "description": "The CSV data is not preceded by header",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "NoHeader",
        "normalized": "",
        "package": "cassava",
        "partial": "No Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:Only",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Only",
        "fct-source": "src/Data-Csv-Conversion.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "Only",
        "normalized": "",
        "package": "cassava",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decDelimiter",
      "description": {
        "fct-descr": "\u003cp\u003eField delimiter.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-Csv-Parser.html#DecodeOptions",
        "fct-type": "function",
        "title": "decDelimiter"
      },
      "index": {
        "description": "Field delimiter",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "decDelimiter",
        "normalized": "",
        "package": "cassava",
        "partial": "Delimiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV records from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e msg\u003c/code\u003e is\n returned. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "HasHeader-\u003e ByteString-\u003e Either String (Vector a)",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Efficiently deserialize CSV records from lazy ByteString If this fails due to incomplete or invalid input Left msg is returned Equivalent to decodeWith defaultDecodeOptions",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "decode",
        "normalized": "HasHeader-\u003eByteString-\u003eEither String(Vector a)",
        "package": "cassava",
        "partial": "",
        "signature": "HasHeader-\u003eByteString-\u003eEither String(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize CSV records from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e msg\u003c/code\u003e is\n returned. The data is assumed to be preceeded by a header.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "ByteString-\u003e Either String (Header, Vector a)",
        "fct-type": "function",
        "title": "decodeByName"
      },
      "index": {
        "description": "Efficiently deserialize CSV records from lazy ByteString If this fails due to incomplete or invalid input Left msg is returned The data is assumed to be preceeded by header Equivalent to decodeByNameWith defaultDecodeOptions",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "decodeByName",
        "normalized": "ByteString-\u003eEither String(Header,Vector a)",
        "package": "cassava",
        "partial": "By Name",
        "signature": "ByteString-\u003eEither String(Header,Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e ByteString-\u003e Either String (Header, Vector a)",
        "fct-type": "function",
        "title": "decodeByNameWith"
      },
      "index": {
        "description": "Like decodeByName but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "decodeByNameWith",
        "normalized": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Vector a)",
        "package": "cassava",
        "partial": "By Name With",
        "signature": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions-\u003e HasHeader-\u003e ByteString-\u003e Either String (Vector a)",
        "fct-type": "function",
        "title": "decodeWith"
      },
      "index": {
        "description": "Like decode but lets you customize how the CSV data is parsed",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "decodeWith",
        "normalized": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eEither String(Vector a)",
        "package": "cassava",
        "partial": "With",
        "signature": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eEither String(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:defaultDecodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDecoding options for parsing CSV files.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "DecodeOptions",
        "fct-source": "src/Data-Csv-Parser.html#defaultDecodeOptions",
        "fct-type": "function",
        "title": "defaultDecodeOptions"
      },
      "index": {
        "description": "Decoding options for parsing CSV files",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "defaultDecodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Decode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:defaultEncodeOptions",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding options for CSV files.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "EncodeOptions",
        "fct-source": "src/Data-Csv-Encoding.html#defaultEncodeOptions",
        "fct-type": "function",
        "title": "defaultEncodeOptions"
      },
      "index": {
        "description": "Encoding options for CSV files",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "defaultEncodeOptions",
        "normalized": "",
        "package": "cassava",
        "partial": "Encode Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encDelimiter",
      "description": {
        "fct-descr": "\u003cp\u003eField delimiter.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-Csv-Encoding.html#EncodeOptions",
        "fct-type": "function",
        "title": "encDelimiter"
      },
      "index": {
        "description": "Field delimiter",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "encDelimiter",
        "normalized": "",
        "package": "cassava",
        "partial": "Delimiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently serialize CSV records as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "[a] -\u003e ByteString",
        "fct-source": "src/Data-Csv-Encoding.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Efficiently serialize CSV records as lazy ByteString",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "encode",
        "normalized": "[a]-\u003eByteString",
        "package": "cassava",
        "partial": "",
        "signature": "[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently serialize CSV records as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The\n header is written before any records and dictates the field order.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Header -\u003e [a] -\u003e ByteString",
        "fct-source": "src/Data-Csv-Encoding.html#encodeByName",
        "fct-type": "function",
        "title": "encodeByName"
      },
      "index": {
        "description": "Efficiently serialize CSV records as lazy ByteString The header is written before any records and dictates the field order",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "encodeByName",
        "normalized": "Header-\u003e[a]-\u003eByteString",
        "package": "cassava",
        "partial": "By Name",
        "signature": "Header-\u003e[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n encoded.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "EncodeOptions -\u003e Header -\u003e [a] -\u003e ByteString",
        "fct-source": "src/Data-Csv-Encoding.html#encodeByNameWith",
        "fct-type": "function",
        "title": "encodeByNameWith"
      },
      "index": {
        "description": "Like encodeByName but lets you customize how the CSV data is encoded",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "encodeByNameWith",
        "normalized": "EncodeOptions-\u003eHeader-\u003e[a]-\u003eByteString",
        "package": "cassava",
        "partial": "By Name With",
        "signature": "EncodeOptions-\u003eHeader-\u003e[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n encoded.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "EncodeOptions -\u003e [a] -\u003e ByteString",
        "fct-source": "src/Data-Csv-Encoding.html#encodeWith",
        "fct-type": "function",
        "title": "encodeWith"
      },
      "index": {
        "description": "Like encode but lets you customize how the CSV data is encoded",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "encodeWith",
        "normalized": "EncodeOptions-\u003e[a]-\u003eByteString",
        "package": "cassava",
        "partial": "With",
        "signature": "EncodeOptions-\u003e[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "a",
        "fct-source": "src/Data-Csv-Conversion.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "fromOnly",
        "normalized": "",
        "package": "cassava",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003cem\u003en\u003c/em\u003eth field in the given record. The result is\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the value cannot be converted to the desired type.\n Raises an exception if the index is out of bounds.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e is a simple convenience function that is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseField\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e idx)\u003c/code\u003e. If you're certain that the index is not\n out of bounds, using \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e is somewhat faster.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Record -\u003e Int -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Retrieve the th field in the given record The result is empty if the value cannot be converted to the desired type Raises an exception if the index is out of bounds index is simple convenience function that is equivalent to parseField idx If you re certain that the index is not out of bounds using unsafeIndex is somewhat faster",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "index",
        "normalized": "Record-\u003eInt-\u003eParser a",
        "package": "cassava",
        "partial": "",
        "signature": "Record-\u003eInt-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a field in the given record by name.  The result is\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the field is missing or if the value cannot be converted\n to the desired type.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "NamedRecord -\u003e ByteString -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Retrieve field in the given record by name The result is empty if the field is missing or if the value cannot be converted to the desired type",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "lookup",
        "normalized": "NamedRecord-\u003eByteString-\u003eParser a",
        "package": "cassava",
        "partial": "",
        "signature": "NamedRecord-\u003eByteString-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:namedField",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a pair from a name and a value.  For use with\n \u003ccode\u003e\u003ca\u003enamedRecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "ByteString -\u003e a -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-Csv-Conversion.html#namedField",
        "fct-type": "function",
        "title": "namedField"
      },
      "index": {
        "description": "Construct pair from name and value For use with namedRecord",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "namedField",
        "normalized": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
        "package": "cassava",
        "partial": "Field",
        "signature": "ByteString-\u003ea-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:namedRecord",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a named record from a list of name-value \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n pairs.  Use \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e to construct such a pair from a name and a value.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "[(ByteString, ByteString)] -\u003e NamedRecord",
        "fct-source": "src/Data-Csv-Conversion.html#namedRecord",
        "fct-type": "function",
        "title": "namedRecord"
      },
      "index": {
        "description": "Construct named record from list of name-value ByteString pairs Use to construct such pair from name and value",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "namedRecord",
        "normalized": "[(ByteString,ByteString)]-\u003eNamedRecord",
        "package": "cassava",
        "partial": "Record",
        "signature": "[(ByteString,ByteString)]-\u003eNamedRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseField",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Field -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#parseField",
        "fct-type": "method",
        "title": "parseField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "parseField",
        "normalized": "Field-\u003eParser a",
        "package": "cassava",
        "partial": "Field",
        "signature": "Field-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseNamedRecord",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "NamedRecord -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#parseNamedRecord",
        "fct-type": "method",
        "title": "parseNamedRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "parseNamedRecord",
        "normalized": "NamedRecord-\u003eParser a",
        "package": "cassava",
        "partial": "Named Record",
        "signature": "NamedRecord-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseRecord",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Record -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#parseRecord",
        "fct-type": "method",
        "title": "parseRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "parseRecord",
        "normalized": "Record-\u003eParser a",
        "package": "cassava",
        "partial": "Record",
        "signature": "Record-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a record from a list of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Use \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e\n to convert values to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es for use with \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "[ByteString] -\u003e Record",
        "fct-source": "src/Data-Csv-Conversion.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Construct record from list of ByteString Use toField to convert values to ByteString for use with record",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "record",
        "normalized": "[ByteString]-\u003eRecord",
        "package": "cassava",
        "partial": "",
        "signature": "[ByteString]-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:runParser",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e, returning either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n result\u003c/code\u003e. Forces the value in the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructors to\n weak head normal form.\n\u003c/p\u003e\u003cp\u003eYou most likely won't need to use this function directly, but it's\n included for completeness.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Parser a -\u003e Either String a",
        "fct-source": "src/Data-Csv-Conversion.html#runParser",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "Run Parser returning either Left errMsg or Right result Forces the value in the Left or Right constructors to weak head normal form You most likely won need to use this function directly but it included for completeness",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "runParser",
        "normalized": "Parser a-\u003eEither String a",
        "package": "cassava",
        "partial": "Parser",
        "signature": "Parser a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toField",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "a -\u003e Field",
        "fct-source": "src/Data-Csv-Conversion.html#toField",
        "fct-type": "method",
        "title": "toField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "toField",
        "normalized": "a-\u003eField",
        "package": "cassava",
        "partial": "Field",
        "signature": "a-\u003eField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toNamedRecord",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "a -\u003e NamedRecord",
        "fct-source": "src/Data-Csv-Conversion.html#toNamedRecord",
        "fct-type": "method",
        "title": "toNamedRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "toNamedRecord",
        "normalized": "a-\u003eNamedRecord",
        "package": "cassava",
        "partial": "Named Record",
        "signature": "a-\u003eNamedRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toRecord",
      "description": {
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "a -\u003e Record",
        "fct-source": "src/Data-Csv-Conversion.html#toRecord",
        "fct-type": "method",
        "title": "toRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "toRecord",
        "normalized": "a-\u003eRecord",
        "package": "cassava",
        "partial": "Record",
        "signature": "a-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:unsafeIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e but without bounds checking.\n\u003c/p\u003e",
        "fct-module": "Data.Csv",
        "fct-package": "cassava",
        "fct-signature": "Record -\u003e Int -\u003e Parser a",
        "fct-source": "src/Data-Csv-Conversion.html#unsafeIndex",
        "fct-type": "function",
        "title": "unsafeIndex"
      },
      "index": {
        "description": "Like index but without bounds checking",
        "hierarchy": "Data Csv",
        "module": "Data.Csv",
        "name": "unsafeIndex",
        "normalized": "Record-\u003eInt-\u003eParser a",
        "package": "cassava",
        "partial": "Index",
        "signature": "Record-\u003eInt-\u003eParser a"
      }
    }
  }
]