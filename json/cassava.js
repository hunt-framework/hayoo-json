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
        "word": "cassava"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows for incremental decoding of CSV data. This is\n useful if you e.g. want to interleave I/O with parsing or if you\n want finer grained control over how you deal with type conversion\n errors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Csv.Incremental",
          "name": "Incremental",
          "package": "cassava",
          "source": "src/Data-Csv-Incremental.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows for incremental decoding of CSV data This is useful if you e.g want to interleave with parsing or if you want finer grained control over how you deal with type conversion errors",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "Incremental",
          "package": "cassava",
          "partial": "Incremental",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "HasHeader",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#HasHeader",
          "type": "data"
        },
        "index": {
          "description": "Is the CSV data preceded by header",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "HasHeader",
          "package": "cassava",
          "partial": "Has Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:HasHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn incremental parser that when fed data eventually returns a\n parsed \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e, or an error.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "HeaderParser",
          "package": "cassava",
          "source": "src/Data-Csv-Incremental.html#HeaderParser",
          "type": "data"
        },
        "index": {
          "description": "An incremental parser that when fed data eventually returns parsed Header or an error",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "HeaderParser",
          "package": "cassava",
          "partial": "Header Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:HeaderParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn incremental parser that when fed data eventually produces some\n parsed records, converted to the desired type, or an error in case\n of malformed input data.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "Parser",
          "package": "cassava",
          "source": "src/Data-Csv-Incremental.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "An incremental parser that when fed data eventually produces some parsed records converted to the desired type or an error in case of malformed input data",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "Parser",
          "package": "cassava",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser parsed and converted some records. Any records\n that failed type conversion are returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e\n and the rest as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e val\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "Done",
          "package": "cassava",
          "signature": "Done [Either String a]",
          "source": "src/Data-Csv-Incremental.html#Parser",
          "type": "function"
        },
        "index": {
          "description": "The parser parsed and converted some records Any records that failed type conversion are returned as Left errMsg and the rest as Right val",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "Done",
          "normalized": "Done[Either String a]",
          "package": "cassava",
          "partial": "Done",
          "signature": "Done[Either String a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded and produced the given \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "DoneH",
          "package": "cassava",
          "signature": "DoneH !Header a",
          "source": "src/Data-Csv-Incremental.html#HeaderParser",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded and produced the given Header",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "DoneH",
          "package": "cassava",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:DoneH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input data was malformed. The first field contains any\n unconsumed input and second field contains information about\n the parse error.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "Fail",
          "package": "cassava",
          "signature": "Fail !ByteString String",
          "source": "src/Data-Csv-Incremental.html#Parser",
          "type": "function"
        },
        "index": {
          "description": "The input data was malformed The first field contains any unconsumed input and second field contains information about the parse error",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "Fail",
          "package": "cassava",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input data was malformed. The first field contains any\n unconsumed input and second field contains information about\n the parse error.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "FailH",
          "package": "cassava",
          "signature": "FailH !ByteString String",
          "source": "src/Data-Csv-Incremental.html#HeaderParser",
          "type": "function"
        },
        "index": {
          "description": "The input data was malformed The first field contains any unconsumed input and second field contains information about the parse error",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "FailH",
          "package": "cassava",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:FailH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CSV data is preceded by a header\n\u003c/p\u003e",
          "module": "[\"Data.Csv.Incremental\",\"Data.Csv.Streaming\",\"Data.Csv\"]",
          "name": "HasHeader",
          "package": "cassava",
          "signature": "HasHeader",
          "source": "src/Data-Csv-Types.html#HasHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:HasHeader\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:HasHeader\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:HasHeader\"]"
        },
        "index": {
          "description": "The CSV data is preceded by header",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "HasHeader",
          "package": "cassava",
          "partial": "Has Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:HasHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser parsed and converted zero or more records. Any\n records that failed type conversion are returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n errMsg\u003c/code\u003e and the rest as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e val\u003c/code\u003e. Feed a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n to the continuation to continue parsing. Use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n string to indicate that no more input data is available. If\n fed an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string, the continuation is guaranteed to\n return either \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "Many",
          "package": "cassava",
          "signature": "Many [Either String a] (ByteString -\u003e Parser a)",
          "source": "src/Data-Csv-Incremental.html#Parser",
          "type": "function"
        },
        "index": {
          "description": "The parser parsed and converted zero or more records Any records that failed type conversion are returned as Left errMsg and the rest as Right val Feed ByteString to the continuation to continue parsing Use an empty string to indicate that no more input data is available If fed an empty string the continuation is guaranteed to return either Fail or Done",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "Many",
          "normalized": "Many[Either String a](ByteString-\u003eParser a)",
          "package": "cassava",
          "partial": "Many",
          "signature": "Many[Either String a](ByteString-\u003eParser a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CSV data is not preceded by a header\n\u003c/p\u003e",
          "module": "[\"Data.Csv.Incremental\",\"Data.Csv.Streaming\",\"Data.Csv\"]",
          "name": "NoHeader",
          "package": "cassava",
          "signature": "NoHeader",
          "source": "src/Data-Csv-Types.html#HasHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:NoHeader\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:NoHeader\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:NoHeader\"]"
        },
        "index": {
          "description": "The CSV data is not preceded by header",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "NoHeader",
          "package": "cassava",
          "partial": "No Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:NoHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser needs more input data before it can produce a\n result. Use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string to indicate that no more\n input data is available. If fed an 'B.empty string', the\n continuation is guaranteed to return either \u003ccode\u003e\u003ca\u003eFailH\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eDoneH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "PartialH",
          "package": "cassava",
          "signature": "PartialH (ByteString -\u003e HeaderParser a)",
          "source": "src/Data-Csv-Incremental.html#HeaderParser",
          "type": "function"
        },
        "index": {
          "description": "The parser needs more input data before it can produce result Use an empty string to indicate that no more input data is available If fed an B.empty string the continuation is guaranteed to return either FailH or DoneH",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "PartialH",
          "normalized": "PartialH(ByteString-\u003eHeaderParser a)",
          "package": "cassava",
          "partial": "Partial",
          "signature": "PartialH(ByteString-\u003eHeaderParser a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:PartialH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV in an incremental fashion. Equivalent\n to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decode",
          "package": "cassava",
          "signature": "HasHeader-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV in an incremental fashion Equivalent to decodeWith defaultDecodeOptions",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decode",
          "normalized": "HasHeader-\u003eParser a",
          "package": "cassava",
          "signature": "HasHeader-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV in an incremental fashion. The data\n is assumed to be preceeded by a header. Returns a \u003ccode\u003e\u003ca\u003eHeaderParser\u003c/a\u003e\u003c/code\u003e\n that when done produces a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for parsing the actual records.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decodeByName",
          "package": "cassava",
          "signature": "HeaderParser (Parser a)",
          "source": "src/Data-Csv-Incremental.html#decodeByName",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV in an incremental fashion The data is assumed to be preceeded by header Returns HeaderParser that when done produces Parser for parsing the actual records Equivalent to decodeByNameWith defaultDecodeOptions",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decodeByName",
          "package": "cassava",
          "partial": "By Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decodeByNameWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e HeaderParser (Parser a)",
          "type": "function"
        },
        "index": {
          "description": "Like decodeByName but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decodeByNameWith",
          "normalized": "DecodeOptions-\u003eHeaderParser(Parser a)",
          "package": "cassava",
          "partial": "By Name With",
          "signature": "DecodeOptions-\u003eHeaderParser(Parser a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV header in an incremental fashion. When done, the\n \u003ccode\u003e\u003ca\u003eHeaderParser\u003c/a\u003e\u003c/code\u003e returns any unconsumed input in the second field of\n the \u003ccode\u003e\u003ca\u003eDoneH\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decodeHeader",
          "package": "cassava",
          "signature": "HeaderParser ByteString",
          "source": "src/Data-Csv-Incremental.html#decodeHeader",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV header in an incremental fashion When done the HeaderParser returns any unconsumed input in the second field of the DoneH constructor",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decodeHeader",
          "package": "cassava",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeHeader\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decodeHeaderWith",
          "package": "cassava",
          "signature": "DecodeOptions -\u003e HeaderParser ByteString",
          "source": "src/Data-Csv-Incremental.html#decodeHeaderWith",
          "type": "function"
        },
        "index": {
          "description": "Like decodeHeader but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decodeHeaderWith",
          "normalized": "DecodeOptions-\u003eHeaderParser ByteString",
          "package": "cassava",
          "partial": "Header With",
          "signature": "DecodeOptions-\u003eHeaderParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeHeaderWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
          "module": "Data.Csv.Incremental",
          "name": "decodeWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e HasHeader-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Like decode but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv Incremental",
          "module": "Data.Csv.Incremental",
          "name": "decodeWith",
          "normalized": "DecodeOptions-\u003eHasHeader-\u003eParser a",
          "package": "cassava",
          "partial": "With",
          "signature": "DecodeOptions-\u003eHasHeader-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Incremental.html#v:decodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA CSV parser. The parser defined here is RFC 4180 compliant, with\n the following extensions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Empty lines are ignored.\n\u003c/li\u003e\u003cli\u003e Non-escaped fields may contain any characters except\n    double-quotes, commas, carriage returns, and newlines.\n\u003c/li\u003e\u003cli\u003e Escaped fields may contain any characters (but double-quotes\n    need to be escaped).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe functions in this module can be used to implement e.g. a\n resumable parser that is fed input incrementally.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Csv.Parser",
          "name": "Parser",
          "package": "cassava",
          "source": "src/Data-Csv-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "CSV parser The parser defined here is RFC compliant with the following extensions Empty lines are ignored Non-escaped fields may contain any characters except double-quotes commas carriage returns and newlines Escaped fields may contain any characters but double-quotes need to be escaped The functions in this module can be used to implement e.g resumable parser that is fed input incrementally",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "Parser",
          "package": "cassava",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that controls how data is decoded. These options can be\n used to e.g. decode tab-separated data instead of comma-separated\n data.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eDecodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultDecodeOptions {\n       decDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e",
          "module": "Data.Csv.Parser",
          "name": "DecodeOptions",
          "package": "cassava",
          "source": "src/Data-Csv-Parser.html#DecodeOptions",
          "type": "data"
        },
        "index": {
          "description": "Options that controls how data is decoded These options can be used to e.g decode tab-separated data instead of comma-separated data To avoid having your program stop compiling when new fields are added to DecodeOptions create option records by overriding values in defaultDecodeOptions Example myOptions defaultDecodeOptions decDelimiter fromIntegral ord",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "DecodeOptions",
          "package": "cassava",
          "partial": "Decode Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#t:DecodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Csv.Parser\",\"Data.Csv\"]",
          "name": "DecodeOptions",
          "package": "cassava",
          "signature": "DecodeOptions",
          "source": "src/Data-Csv-Parser.html#DecodeOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:DecodeOptions\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:DecodeOptions\"]"
        },
        "index": {
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "DecodeOptions",
          "package": "cassava",
          "partial": "Decode Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:DecodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV file that does not include a header.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "csv",
          "package": "cassava",
          "signature": "DecodeOptions -\u003e Parser Csv",
          "source": "src/Data-Csv-Parser.html#csv",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV file that does not include header",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "csv",
          "normalized": "DecodeOptions-\u003eParser Csv",
          "package": "cassava",
          "signature": "DecodeOptions-\u003eParser Csv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV file that includes a header.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "csvWithHeader",
          "package": "cassava",
          "signature": "DecodeOptions -\u003e Parser (Header, Vector NamedRecord)",
          "source": "src/Data-Csv-Parser.html#csvWithHeader",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV file that includes header",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "csvWithHeader",
          "normalized": "DecodeOptions-\u003eParser(Header,Vector NamedRecord)",
          "package": "cassava",
          "partial": "With Header",
          "signature": "DecodeOptions-\u003eParser(Header,Vector NamedRecord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:csvWithHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField delimiter.\n\u003c/p\u003e",
          "module": "[\"Data.Csv.Parser\",\"Data.Csv\"]",
          "name": "decDelimiter",
          "package": "cassava",
          "signature": "Word8",
          "source": "src/Data-Csv-Parser.html#DecodeOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:decDelimiter\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decDelimiter\"]"
        },
        "index": {
          "description": "Field delimiter",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "decDelimiter",
          "package": "cassava",
          "partial": "Delimiter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:decDelimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding options for parsing CSV files.\n\u003c/p\u003e",
          "module": "[\"Data.Csv.Parser\",\"Data.Csv\"]",
          "name": "defaultDecodeOptions",
          "package": "cassava",
          "signature": "DecodeOptions",
          "source": "src/Data-Csv-Parser.html#defaultDecodeOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:defaultDecodeOptions\",\"http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:defaultDecodeOptions\"]"
        },
        "index": {
          "description": "Decoding options for parsing CSV files",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "defaultDecodeOptions",
          "package": "cassava",
          "partial": "Decode Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:defaultDecodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a field. The field may be in either the escaped or\n non-escaped format. The return value is unescaped.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "field",
          "package": "cassava",
          "signature": "Word8 -\u003e Parser Field",
          "source": "src/Data-Csv-Parser.html#field",
          "type": "function"
        },
        "index": {
          "description": "Parse field The field may be in either the escaped or non-escaped format The return value is unescaped",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "field",
          "normalized": "Word-\u003eParser Field",
          "package": "cassava",
          "signature": "Word-\u003eParser Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a header, including the terminating line separator.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "header",
          "package": "cassava",
          "signature": "Word8-\u003e Parser Header",
          "type": "function"
        },
        "index": {
          "description": "Parse header including the terminating line separator",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "header",
          "normalized": "Word-\u003eParser Header",
          "package": "cassava",
          "signature": "Word-\u003eParser Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a header name. Header names have the same format as regular\n \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "name",
          "package": "cassava",
          "signature": "Word8 -\u003e Parser Name",
          "source": "src/Data-Csv-Parser.html#name",
          "type": "function"
        },
        "index": {
          "description": "Parse header name Header names have the same format as regular field",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "name",
          "normalized": "Word-\u003eParser Name",
          "package": "cassava",
          "signature": "Word-\u003eParser Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a record, not including the terminating line separator. The\n terminating line separate is not included as the last record in a\n CSV file is allowed to not have a terminating line separator. You\n most likely want to use the \u003ccode\u003e\u003ca\u003eendOfLine\u003c/a\u003e\u003c/code\u003e parser in combination with\n this parser.\n\u003c/p\u003e",
          "module": "Data.Csv.Parser",
          "name": "record",
          "package": "cassava",
          "signature": "Word8-\u003e Parser Record",
          "type": "function"
        },
        "index": {
          "description": "Parse record not including the terminating line separator The terminating line separate is not included as the last record in CSV file is allowed to not have terminating line separator You most likely want to use the endOfLine parser in combination with this parser",
          "hierarchy": "Data Csv Parser",
          "module": "Data.Csv.Parser",
          "name": "record",
          "normalized": "Word-\u003eParser Record",
          "package": "cassava",
          "signature": "Word-\u003eParser Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Parser.html#v:record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows for streaming decoding of CSV data. This is\n useful if you need to parse large amounts of input in constant\n space. The API also allows you to ignore type conversion errors on\n a per-record basis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Csv.Streaming",
          "name": "Streaming",
          "package": "cassava",
          "source": "src/Data-Csv-Streaming.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows for streaming decoding of CSV data This is useful if you need to parse large amounts of input in constant space The API also allows you to ignore type conversion errors on per-record basis",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "Streaming",
          "package": "cassava",
          "partial": "Streaming",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "HasHeader",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#HasHeader",
          "type": "data"
        },
        "index": {
          "description": "Is the CSV data preceded by header",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "HasHeader",
          "package": "cassava",
          "partial": "Has Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#t:HasHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of parsed records. If type conversion failed for the\n record, the error is returned as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "Records",
          "package": "cassava",
          "source": "src/Data-Csv-Streaming.html#Records",
          "type": "data"
        },
        "index": {
          "description": "stream of parsed records If type conversion failed for the record the error is returned as Left errMsg",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "Records",
          "package": "cassava",
          "partial": "Records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#t:Records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record or an error message, followed by more records.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "Cons",
          "package": "cassava",
          "signature": "Cons (Either String a) (Records a)",
          "source": "src/Data-Csv-Streaming.html#Records",
          "type": "function"
        },
        "index": {
          "description": "record or an error message followed by more records",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "Cons",
          "package": "cassava",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of stream, potentially due to a parse error. If a parse\n error occured, the first field contains the error message.\n The second field contains any unconsumed input.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "Nil",
          "package": "cassava",
          "signature": "Nil (Maybe String) ByteString",
          "source": "src/Data-Csv-Streaming.html#Records",
          "type": "function"
        },
        "index": {
          "description": "End of stream potentially due to parse error If parse error occured the first field contains the error message The second field contains any unconsumed input",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "Nil",
          "package": "cassava",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV records in a streaming fashion.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "decode",
          "package": "cassava",
          "signature": "HasHeader-\u003e ByteString-\u003e Records a",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV records in streaming fashion Equivalent to decodeWith defaultDecodeOptions",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "decode",
          "normalized": "HasHeader-\u003eByteString-\u003eRecords a",
          "package": "cassava",
          "signature": "HasHeader-\u003eByteString-\u003eRecords a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV in a streaming fashion. The data is\n assumed to be preceeded by a header. Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e if\n parsing the header fails. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "decodeByName",
          "package": "cassava",
          "signature": "ByteString-\u003e Either String (Header, Records a)",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV in streaming fashion The data is assumed to be preceeded by header Returns Left errMsg if parsing the header fails Equivalent to decodeByNameWith defaultDecodeOptions",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "decodeByName",
          "normalized": "ByteString-\u003eEither String(Header,Records a)",
          "package": "cassava",
          "partial": "By Name",
          "signature": "ByteString-\u003eEither String(Header,Records a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "decodeByNameWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e ByteString-\u003e Either String (Header, Records a)",
          "type": "function"
        },
        "index": {
          "description": "Like decodeByName but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "decodeByNameWith",
          "normalized": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Records a)",
          "package": "cassava",
          "partial": "By Name With",
          "signature": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Records a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
          "module": "Data.Csv.Streaming",
          "name": "decodeWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e HasHeader-\u003e ByteString-\u003e Records a",
          "type": "function"
        },
        "index": {
          "description": "Like decode but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv Streaming",
          "module": "Data.Csv.Streaming",
          "name": "decodeWith",
          "normalized": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eRecords a",
          "package": "cassava",
          "partial": "With",
          "signature": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eRecords a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv-Streaming.html#v:decodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements encoding and decoding of CSV data. The\n implementation is RFC 4180 compliant, with the following\n extensions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Empty lines are ignored.\n\u003c/li\u003e\u003cli\u003e Non-escaped fields may contain any characters except\n    double-quotes, commas, carriage returns, and newlines.\n\u003c/li\u003e\u003cli\u003e Escaped fields may contain any characters (but double-quotes\n    need to be escaped).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Csv",
          "name": "Csv",
          "package": "cassava",
          "source": "src/Data-Csv.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements encoding and decoding of CSV data The implementation is RFC compliant with the following extensions Empty lines are ignored Non-escaped fields may contain any characters except double-quotes commas carriage returns and newlines Escaped fields may contain any characters but double-quotes need to be escaped",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Csv",
          "package": "cassava",
          "partial": "Csv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSV data represented as a Haskell vector of vector of\n bytestrings.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Csv",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#Csv",
          "type": "type"
        },
        "index": {
          "description": "CSV data represented as Haskell vector of vector of bytestrings",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Csv",
          "package": "cassava",
          "partial": "Csv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that controls how data is decoded. These options can be\n used to e.g. decode tab-separated data instead of comma-separated\n data.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eDecodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultDecodeOptions {\n       decDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "DecodeOptions",
          "package": "cassava",
          "source": "src/Data-Csv-Parser.html#DecodeOptions",
          "type": "data"
        },
        "index": {
          "description": "Options that controls how data is decoded These options can be used to e.g decode tab-separated data instead of comma-separated data To avoid having your program stop compiling when new fields are added to DecodeOptions create option records by overriding values in defaultDecodeOptions Example myOptions defaultDecodeOptions decDelimiter fromIntegral ord",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "DecodeOptions",
          "package": "cassava",
          "partial": "Decode Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:DecodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that controls how data is encoded. These options can be\n used to e.g. encode data in a tab-separated format instead of in a\n comma-separated format.\n\u003c/p\u003e\u003cp\u003eTo avoid having your program stop compiling when new fields are\n added to \u003ccode\u003e\u003ca\u003eEncodeOptions\u003c/a\u003e\u003c/code\u003e, create option records by overriding\n values in \u003ccode\u003e\u003ca\u003edefaultEncodeOptions\u003c/a\u003e\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e myOptions = defaultEncodeOptions {\n       encDelimiter = fromIntegral (ord '\\t')\n     }\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eencDelimiter\u003c/a\u003e\u003c/code\u003e must \u003cem\u003enot\u003c/em\u003e be the quote character (i.e.\n \u003ccode\u003e\"\u003c/code\u003e) or one of the record separator characters (i.e. \u003ccode\u003e\\n\u003c/code\u003e or\n \u003ccode\u003e\\r\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "EncodeOptions",
          "package": "cassava",
          "source": "src/Data-Csv-Encoding.html#EncodeOptions",
          "type": "data"
        },
        "index": {
          "description": "Options that controls how data is encoded These options can be used to e.g encode data in tab-separated format instead of in comma-separated format To avoid having your program stop compiling when new fields are added to EncodeOptions create option records by overriding values in defaultEncodeOptions Example myOptions defaultEncodeOptions encDelimiter fromIntegral ord N.B The encDelimiter must not be the quote character i.e or one of the record separator characters i.e or",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "EncodeOptions",
          "package": "cassava",
          "partial": "Encode Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:EncodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single field within a record.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Field",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#Field",
          "type": "type"
        },
        "index": {
          "description": "single field within record",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Field",
          "package": "cassava",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from a single CSV field, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e can't be converted to the given\n type.\n\u003c/p\u003e\u003cp\u003eExample type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Color = Red | Green | Blue\n\n instance FromField Color where\n     parseField s\n         | s == \"R\"  = pure Red\n         | s == \"G\"  = pure Green\n         | s == \"B\"  = pure Blue\n         | otherwise = mzero\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "FromField",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#FromField",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from single CSV field with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Field can be converted to the given type Example type and instance LANGUAGE OverloadedStrings data Color Red Green Blue instance FromField Color where parseField pure Red pure Green pure Blue otherwise mzero",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "FromField",
          "package": "cassava",
          "partial": "From Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from a single CSV record, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e has the wrong number of\n columns.\n\u003c/p\u003e\u003cp\u003eGiven this example data:\n\u003c/p\u003e\u003cpre\u003e name,age\n John,56\n Jane,55\n\u003c/pre\u003e\u003cp\u003ehere's an example type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Person = Person { name :: !Text, age :: !Int }\n\n instance FromNamedRecord Person where\n     parseNamedRecord m = Person \u003c$\u003e\n                          m .: \"name\" \u003c*\u003e\n                          m .: \"age\"\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which\n enables \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "FromNamedRecord",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#FromNamedRecord",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from single CSV record with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Record has the wrong number of columns Given this example data name age John Jane here an example type and instance LANGUAGE OverloadedStrings data Person Person name Text age Int instance FromNamedRecord Person where parseNamedRecord Person name age Note the use of the OverloadedStrings language extension which enables ByteString values to be written as string literals",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "FromNamedRecord",
          "package": "cassava",
          "partial": "From Named Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromNamedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from a single CSV record, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e has the wrong number of\n columns.\n\u003c/p\u003e\u003cp\u003eGiven this example data:\n\u003c/p\u003e\u003cpre\u003e John,56\n Jane,55\n\u003c/pre\u003e\u003cp\u003ehere's an example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance FromRecord Person where\n     parseRecord v\n         | length v == 2 = Person \u003c$\u003e\n                           v .! 0 \u003c*\u003e\n                           v .! 1\n         | otherwise     = mzero\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "FromRecord",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#FromRecord",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from single CSV record with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if Record has the wrong number of columns Given this example data John Jane here an example type and instance data Person Person name Text age Int instance FromRecord Person where parseRecord length Person otherwise mzero",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "FromRecord",
          "package": "cassava",
          "partial": "From Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:FromRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the CSV data preceded by a header?\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "HasHeader",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#HasHeader",
          "type": "data"
        },
        "index": {
          "description": "Is the CSV data preceded by header",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "HasHeader",
          "package": "cassava",
          "partial": "Has Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:HasHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header corresponds to the first line a CSV file. Not all CSV\n files have a header.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Header",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#Header",
          "type": "type"
        },
        "index": {
          "description": "The header corresponds to the first line CSV file Not all CSV files have header",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Header",
          "package": "cassava",
          "partial": "Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA header has one or more names, describing the data in the column\n following the name.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Name",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#Name",
          "type": "type"
        },
        "index": {
          "description": "header has one or more names describing the data in the column following the name",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Name",
          "package": "cassava",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record corresponds to a single line in a CSV file, indexed by\n the column name rather than the column index.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "NamedRecord",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#NamedRecord",
          "type": "type"
        },
        "index": {
          "description": "record corresponds to single line in CSV file indexed by the column name rather than the column index",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "NamedRecord",
          "package": "cassava",
          "partial": "Named Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:NamedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell lacks a single-element tuple type, so if you CSV data\n with just one column you can use the \u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e type to represent a\n single-column result.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Only",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "Haskell lacks single-element tuple type so if you CSV data with just one column you can use the Only type to represent single-column result",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Only",
          "package": "cassava",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of a field to a value might fail e.g. if the field is\n malformed. This possibility is captured by the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type, which\n lets you compose several field conversions together in such a way\n that if any of them fail, the whole record conversion fails.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Parser",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Conversion of field to value might fail e.g if the field is malformed This possibility is captured by the Parser type which lets you compose several field conversions together in such way that if any of them fail the whole record conversion fails",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Parser",
          "package": "cassava",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record corresponds to a single line in a CSV file.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "Record",
          "package": "cassava",
          "source": "src/Data-Csv-Types.html#Record",
          "type": "type"
        },
        "index": {
          "description": "record corresponds to single line in CSV file",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Record",
          "package": "cassava",
          "partial": "Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to a single CSV field.\n\u003c/p\u003e\u003cp\u003eExample type and instance:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data Color = Red | Green | Blue\n\n instance ToField Color where\n     toField Red   = \"R\"\n     toField Green = \"G\"\n     toField Blue  = \"B\"\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "ToField",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#ToField",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to single CSV field Example type and instance LANGUAGE OverloadedStrings data Color Red Green Blue instance ToField Color where toField Red toField Green toField Blue",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "ToField",
          "package": "cassava",
          "partial": "To Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to a single CSV record.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance ToNamedRecord Person where\n     toNamedRecord (Person name age) = namedRecord [\n         \"name\" .= name, \"age\" .= age]\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "ToNamedRecord",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#ToNamedRecord",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to single CSV record An example type and instance data Person Person name Text age Int instance ToNamedRecord Person where toNamedRecord Person name age namedRecord name name age age",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "ToNamedRecord",
          "package": "cassava",
          "partial": "To Named Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToNamedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to a single CSV record.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: !Text, age :: !Int }\n\n instance ToRecord Person where\n     toRecord (Person name age) = record [\n         toField name, toField age]\n\u003c/pre\u003e\u003cp\u003eOutputs data on this form:\n\u003c/p\u003e\u003cpre\u003e John,56\n Jane,55\n\u003c/pre\u003e",
          "module": "Data.Csv",
          "name": "ToRecord",
          "package": "cassava",
          "source": "src/Data-Csv-Conversion.html#ToRecord",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to single CSV record An example type and instance data Person Person name Text age Int instance ToRecord Person where toRecord Person name age record toField name toField age Outputs data on this form John Jane",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "ToRecord",
          "package": "cassava",
          "partial": "To Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#t:ToRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "(.!)",
          "package": "cassava",
          "signature": "Record -\u003e Int -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#.%21",
          "type": "function"
        },
        "index": {
          "description": "Alias for index",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "(.!) .!",
          "normalized": "Record-\u003eInt-\u003eParser a",
          "package": "cassava",
          "signature": "Record-\u003eInt-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003enamedField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "(.=)",
          "package": "cassava",
          "signature": "ByteString -\u003e a -\u003e (ByteString, ByteString)",
          "source": "src/Data-Csv-Conversion.html#.%3D",
          "type": "function"
        },
        "index": {
          "description": "Alias for namedField",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "(.=) .=",
          "normalized": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
          "package": "cassava",
          "signature": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "(.:)",
          "package": "cassava",
          "signature": "NamedRecord -\u003e ByteString -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Alias for lookup",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "(.:) .:",
          "normalized": "NamedRecord-\u003eByteString-\u003eParser a",
          "package": "cassava",
          "signature": "NamedRecord-\u003eByteString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "EncodeOptions",
          "package": "cassava",
          "signature": "EncodeOptions",
          "source": "src/Data-Csv-Encoding.html#EncodeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "EncodeOptions",
          "package": "cassava",
          "partial": "Encode Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:EncodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "Only",
          "package": "cassava",
          "signature": "Only",
          "source": "src/Data-Csv-Conversion.html#Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "Only",
          "package": "cassava",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV records from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e msg\u003c/code\u003e is\n returned. Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "decode",
          "package": "cassava",
          "signature": "HasHeader-\u003e ByteString-\u003e Either String (Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV records from lazy ByteString If this fails due to incomplete or invalid input Left msg is returned Equivalent to decodeWith defaultDecodeOptions",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "decode",
          "normalized": "HasHeader-\u003eByteString-\u003eEither String(Vector a)",
          "package": "cassava",
          "signature": "HasHeader-\u003eByteString-\u003eEither String(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize CSV records from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e msg\u003c/code\u003e is\n returned. The data is assumed to be preceeded by a header.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "decodeByName",
          "package": "cassava",
          "signature": "ByteString-\u003e Either String (Header, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize CSV records from lazy ByteString If this fails due to incomplete or invalid input Left msg is returned The data is assumed to be preceeded by header Equivalent to decodeByNameWith defaultDecodeOptions",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "decodeByName",
          "normalized": "ByteString-\u003eEither String(Header,Vector a)",
          "package": "cassava",
          "partial": "By Name",
          "signature": "ByteString-\u003eEither String(Header,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n parsed.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "decodeByNameWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e ByteString-\u003e Either String (Header, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Like decodeByName but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "decodeByNameWith",
          "normalized": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Vector a)",
          "package": "cassava",
          "partial": "By Name With",
          "signature": "DecodeOptions-\u003eByteString-\u003eEither String(Header,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is parsed.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "decodeWith",
          "package": "cassava",
          "signature": "DecodeOptions-\u003e HasHeader-\u003e ByteString-\u003e Either String (Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Like decode but lets you customize how the CSV data is parsed",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "decodeWith",
          "normalized": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eEither String(Vector a)",
          "package": "cassava",
          "partial": "With",
          "signature": "DecodeOptions-\u003eHasHeader-\u003eByteString-\u003eEither String(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:decodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding options for CSV files.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "defaultEncodeOptions",
          "package": "cassava",
          "signature": "EncodeOptions",
          "source": "src/Data-Csv-Encoding.html#defaultEncodeOptions",
          "type": "function"
        },
        "index": {
          "description": "Encoding options for CSV files",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "defaultEncodeOptions",
          "package": "cassava",
          "partial": "Encode Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:defaultEncodeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField delimiter.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "encDelimiter",
          "package": "cassava",
          "signature": "Word8",
          "source": "src/Data-Csv-Encoding.html#EncodeOptions",
          "type": "function"
        },
        "index": {
          "description": "Field delimiter",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "encDelimiter",
          "package": "cassava",
          "partial": "Delimiter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encDelimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently serialize CSV records as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "encode",
          "package": "cassava",
          "signature": "[a] -\u003e ByteString",
          "source": "src/Data-Csv-Encoding.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Efficiently serialize CSV records as lazy ByteString",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "encode",
          "normalized": "[a]-\u003eByteString",
          "package": "cassava",
          "signature": "[a]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently serialize CSV records as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The\n header is written before any records and dictates the field order.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "encodeByName",
          "package": "cassava",
          "signature": "Header -\u003e [a] -\u003e ByteString",
          "source": "src/Data-Csv-Encoding.html#encodeByName",
          "type": "function"
        },
        "index": {
          "description": "Efficiently serialize CSV records as lazy ByteString The header is written before any records and dictates the field order",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "encodeByName",
          "normalized": "Header-\u003e[a]-\u003eByteString",
          "package": "cassava",
          "partial": "By Name",
          "signature": "Header-\u003e[a]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencodeByName\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n encoded.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "encodeByNameWith",
          "package": "cassava",
          "signature": "EncodeOptions -\u003e Header -\u003e [a] -\u003e ByteString",
          "source": "src/Data-Csv-Encoding.html#encodeByNameWith",
          "type": "function"
        },
        "index": {
          "description": "Like encodeByName but lets you customize how the CSV data is encoded",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "encodeByNameWith",
          "normalized": "EncodeOptions-\u003eHeader-\u003e[a]-\u003eByteString",
          "package": "cassava",
          "partial": "By Name With",
          "signature": "EncodeOptions-\u003eHeader-\u003e[a]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, but lets you customize how the CSV data is\n encoded.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "encodeWith",
          "package": "cassava",
          "signature": "EncodeOptions -\u003e [a] -\u003e ByteString",
          "source": "src/Data-Csv-Encoding.html#encodeWith",
          "type": "function"
        },
        "index": {
          "description": "Like encode but lets you customize how the CSV data is encoded",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "encodeWith",
          "normalized": "EncodeOptions-\u003e[a]-\u003eByteString",
          "package": "cassava",
          "partial": "With",
          "signature": "EncodeOptions-\u003e[a]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:encodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "fromOnly",
          "package": "cassava",
          "signature": "a",
          "source": "src/Data-Csv-Conversion.html#Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "fromOnly",
          "package": "cassava",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:fromOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003cem\u003en\u003c/em\u003eth field in the given record. The result is\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the value cannot be converted to the desired type.\n Raises an exception if the index is out of bounds.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e is a simple convenience function that is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseField\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e idx)\u003c/code\u003e. If you're certain that the index is not\n out of bounds, using \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e is somewhat faster.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "index",
          "package": "cassava",
          "signature": "Record -\u003e Int -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#index",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the th field in the given record The result is empty if the value cannot be converted to the desired type Raises an exception if the index is out of bounds index is simple convenience function that is equivalent to parseField idx If you re certain that the index is not out of bounds using unsafeIndex is somewhat faster",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "index",
          "normalized": "Record-\u003eInt-\u003eParser a",
          "package": "cassava",
          "signature": "Record-\u003eInt-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a field in the given record by name.  The result is\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the field is missing or if the value cannot be converted\n to the desired type.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "lookup",
          "package": "cassava",
          "signature": "NamedRecord -\u003e ByteString -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Retrieve field in the given record by name The result is empty if the field is missing or if the value cannot be converted to the desired type",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "lookup",
          "normalized": "NamedRecord-\u003eByteString-\u003eParser a",
          "package": "cassava",
          "signature": "NamedRecord-\u003eByteString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pair from a name and a value.  For use with\n \u003ccode\u003e\u003ca\u003enamedRecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "namedField",
          "package": "cassava",
          "signature": "ByteString -\u003e a -\u003e (ByteString, ByteString)",
          "source": "src/Data-Csv-Conversion.html#namedField",
          "type": "function"
        },
        "index": {
          "description": "Construct pair from name and value For use with namedRecord",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "namedField",
          "normalized": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
          "package": "cassava",
          "partial": "Field",
          "signature": "ByteString-\u003ea-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:namedField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a named record from a list of name-value \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n pairs.  Use \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e to construct such a pair from a name and a value.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "namedRecord",
          "package": "cassava",
          "signature": "[(ByteString, ByteString)] -\u003e NamedRecord",
          "source": "src/Data-Csv-Conversion.html#namedRecord",
          "type": "function"
        },
        "index": {
          "description": "Construct named record from list of name-value ByteString pairs Use to construct such pair from name and value",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "namedRecord",
          "normalized": "[(ByteString,ByteString)]-\u003eNamedRecord",
          "package": "cassava",
          "partial": "Record",
          "signature": "[(ByteString,ByteString)]-\u003eNamedRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:namedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "parseField",
          "package": "cassava",
          "signature": "Field -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#parseField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "parseField",
          "normalized": "Field-\u003eParser a",
          "package": "cassava",
          "partial": "Field",
          "signature": "Field-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "parseNamedRecord",
          "package": "cassava",
          "signature": "NamedRecord -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#parseNamedRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "parseNamedRecord",
          "normalized": "NamedRecord-\u003eParser a",
          "package": "cassava",
          "partial": "Named Record",
          "signature": "NamedRecord-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseNamedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "parseRecord",
          "package": "cassava",
          "signature": "Record -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#parseRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "parseRecord",
          "normalized": "Record-\u003eParser a",
          "package": "cassava",
          "partial": "Record",
          "signature": "Record-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:parseRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a record from a list of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Use \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e\n to convert values to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es for use with \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "record",
          "package": "cassava",
          "signature": "[ByteString] -\u003e Record",
          "source": "src/Data-Csv-Conversion.html#record",
          "type": "function"
        },
        "index": {
          "description": "Construct record from list of ByteString Use toField to convert values to ByteString for use with record",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "record",
          "normalized": "[ByteString]-\u003eRecord",
          "package": "cassava",
          "signature": "[ByteString]-\u003eRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e, returning either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n result\u003c/code\u003e. Forces the value in the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructors to\n weak head normal form.\n\u003c/p\u003e\u003cp\u003eYou most likely won't need to use this function directly, but it's\n included for completeness.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "runParser",
          "package": "cassava",
          "signature": "Parser a -\u003e Either String a",
          "source": "src/Data-Csv-Conversion.html#runParser",
          "type": "function"
        },
        "index": {
          "description": "Run Parser returning either Left errMsg or Right result Forces the value in the Left or Right constructors to weak head normal form You most likely won need to use this function directly but it included for completeness",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "runParser",
          "normalized": "Parser a-\u003eEither String a",
          "package": "cassava",
          "partial": "Parser",
          "signature": "Parser a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "toField",
          "package": "cassava",
          "signature": "a -\u003e Field",
          "source": "src/Data-Csv-Conversion.html#toField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "toField",
          "normalized": "a-\u003eField",
          "package": "cassava",
          "partial": "Field",
          "signature": "a-\u003eField",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "toNamedRecord",
          "package": "cassava",
          "signature": "a -\u003e NamedRecord",
          "source": "src/Data-Csv-Conversion.html#toNamedRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "toNamedRecord",
          "normalized": "a-\u003eNamedRecord",
          "package": "cassava",
          "partial": "Named Record",
          "signature": "a-\u003eNamedRecord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toNamedRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Csv",
          "name": "toRecord",
          "package": "cassava",
          "signature": "a -\u003e Record",
          "source": "src/Data-Csv-Conversion.html#toRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "toRecord",
          "normalized": "a-\u003eRecord",
          "package": "cassava",
          "partial": "Record",
          "signature": "a-\u003eRecord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:toRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e but without bounds checking.\n\u003c/p\u003e",
          "module": "Data.Csv",
          "name": "unsafeIndex",
          "package": "cassava",
          "signature": "Record -\u003e Int -\u003e Parser a",
          "source": "src/Data-Csv-Conversion.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Like index but without bounds checking",
          "hierarchy": "Data Csv",
          "module": "Data.Csv",
          "name": "unsafeIndex",
          "normalized": "Record-\u003eInt-\u003eParser a",
          "package": "cassava",
          "partial": "Index",
          "signature": "Record-\u003eInt-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassava/docs/Data-Csv.html#v:unsafeIndex"
      }
    }
  ]
]