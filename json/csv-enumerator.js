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
        "word": "csv-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the underlying Attoparsec row parser. This is helpful if\n  you want to do some ad-hoc CSV string parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "Parser",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the underlying Attoparsec row parser This is helpful if you want to do some ad-hoc CSV string parsing",
          "hierarchy": "Data CSV Enumerator Parser",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "Parser",
          "package": "csv-enumerator",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse CSV\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "csv",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Parser [Row]",
          "source": "src/Data-CSV-Enumerator-Parser.html#csv",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV",
          "hierarchy": "Data CSV Enumerator Parser",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "csv",
          "normalized": "CSVSettings-\u003eParser[Row]",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003eParser[Row]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as CSV\n\u003c/p\u003e",
          "module": "[\"Data.CSV.Enumerator.Parser\",\"Data.CSV.Enumerator\"]",
          "name": "parseCSV",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e ByteString -\u003e Either String [Row]",
          "source": "src/Data-CSV-Enumerator-Parser.html#parseCSV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:parseCSV\",\"http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:parseCSV\"]"
        },
        "index": {
          "description": "Try to parse given string as CSV",
          "hierarchy": "Data CSV Enumerator Parser",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "parseCSV",
          "normalized": "CSVSettings-\u003eByteString-\u003eEither String[Row]",
          "package": "csv-enumerator",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eByteString-\u003eEither String[Row]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:parseCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as \u003ccode\u003e\u003ca\u003eRow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.CSV.Enumerator.Parser\",\"Data.CSV.Enumerator\"]",
          "name": "parseRow",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e ByteString -\u003e Either String (Maybe Row)",
          "source": "src/Data-CSV-Enumerator-Parser.html#parseRow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:parseRow\",\"http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:parseRow\"]"
        },
        "index": {
          "description": "Try to parse given string as Row",
          "hierarchy": "Data CSV Enumerator Parser",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "parseRow",
          "normalized": "CSVSettings-\u003eByteString-\u003eEither String(Maybe Row)",
          "package": "csv-enumerator",
          "partial": "Row",
          "signature": "CSVSettings-\u003eByteString-\u003eEither String(Maybe Row)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:parseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV row\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "row",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Parser (Maybe Row)",
          "source": "src/Data-CSV-Enumerator-Parser.html#row",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV row",
          "hierarchy": "Data CSV Enumerator Parser",
          "module": "Data.CSV.Enumerator.Parser",
          "name": "row",
          "normalized": "CSVSettings-\u003eParser(Maybe Row)",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003eParser(Maybe Row)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator-Parser.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "Enumerator",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "Enumerator",
          "package": "csv-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee that processes each row of a CSV file and updates the\n accumulator.\n\u003c/p\u003e\u003cp\u003eYou would implement one of these to use with the \u003ccode\u003e\u003ca\u003efoldCSVFile\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "CSVAction",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator.html#CSVAction",
          "type": "type"
        },
        "index": {
          "description": "An iteratee that processes each row of CSV file and updates the accumulator You would implement one of these to use with the foldCSVFile function",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "CSVAction",
          "package": "csv-enumerator",
          "partial": "CSVAction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:CSVAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for a CSV file. This library is intended to be flexible and offer a way to process the majority of text data files out there.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "CSVSettings",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "data"
        },
        "index": {
          "description": "Settings for CSV file This library is intended to be flexible and offer way to process the majority of text data files out there",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "CSVSettings",
          "package": "csv-enumerator",
          "partial": "CSVSettings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:CSVSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "CSVeable",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator.html#CSVeable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "CSVeable",
          "package": "csv-enumerator",
          "partial": "CSVeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:CSVeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "Field",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator-Types.html#Field",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "Field",
          "package": "csv-enumerator",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "MapRow",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator-Types.html#MapRow",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "MapRow",
          "package": "csv-enumerator",
          "partial": "Map Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:MapRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype that incorporates the signaling of parsing status to the\nuser-developed iteratee.\n\u003c/p\u003e\u003cp\u003eWe need this because some iteratees do interleaved IO (such as outputting to\n a file via a handle inside the accumulator) and some final actions may need\n to be taken upon encountering EOF (such as closing the interleaved handle).\n\u003c/p\u003e\u003cp\u003eUse this datatype when developing iteratees for use with fold* family of\n functions (Row enumarators).\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "ParsedRow",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator.html#ParsedRow",
          "type": "data"
        },
        "index": {
          "description": "datatype that incorporates the signaling of parsing status to the user-developed iteratee We need this because some iteratees do interleaved IO such as outputting to file via handle inside the accumulator and some final actions may need to be taken upon encountering EOF such as closing the interleaved handle Use this datatype when developing iteratees for use with fold family of functions Row enumarators",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "ParsedRow",
          "package": "csv-enumerator",
          "partial": "Parsed Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:ParsedRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "Row",
          "package": "csv-enumerator",
          "source": "src/Data-CSV-Enumerator-Types.html#Row",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "Row",
          "package": "csv-enumerator",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "CSVS",
          "package": "csv-enumerator",
          "signature": "CSVS",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "CSVS",
          "package": "csv-enumerator",
          "partial": "CSVS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:CSVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "EOF",
          "package": "csv-enumerator",
          "signature": "EOF",
          "source": "src/Data-CSV-Enumerator.html#ParsedRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "EOF",
          "package": "csv-enumerator",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "ParsedRow",
          "package": "csv-enumerator",
          "signature": "ParsedRow (Maybe r)",
          "source": "src/Data-CSV-Enumerator.html#ParsedRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "ParsedRow",
          "package": "csv-enumerator",
          "partial": "Parsed Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:ParsedRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "appendCSVFile",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003e FilePath-\u003e [r]-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "appendCSVFile",
          "normalized": "CSVSettings-\u003eFilePath-\u003e[a]-\u003eIO Int",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003eFilePath-\u003e[r]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:appendCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust collect all rows into an array. This will cancel out the incremental\n nature of this library.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "collectRows",
          "package": "csv-enumerator",
          "signature": "CSVAction r [r]",
          "source": "src/Data-CSV-Enumerator.html#collectRows",
          "type": "function"
        },
        "index": {
          "description": "Just collect all rows into an array This will cancel out the incremental nature of this library",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "collectRows",
          "normalized": "CSVAction a[a]",
          "package": "csv-enumerator",
          "partial": "Rows",
          "signature": "CSVAction r[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:collectRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField separator that should be used in the output.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "csvOutputColSep",
          "package": "csv-enumerator",
          "signature": "Char",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Field separator that should be used in the output",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "csvOutputColSep",
          "package": "csv-enumerator",
          "partial": "Output Col Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:csvOutputColSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote character that should be used in the output.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "csvOutputQuoteChar",
          "package": "csv-enumerator",
          "signature": "(Maybe Char)",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Quote character that should be used in the output",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "csvOutputQuoteChar",
          "package": "csv-enumerator",
          "partial": "Output Quote Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:csvOutputQuoteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote character that may sometimes be present around fields. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is given, the library will never expect quotation even if it is present.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "csvQuoteChar",
          "package": "csv-enumerator",
          "signature": "(Maybe Char)",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Quote character that may sometimes be present around fields If Nothing is given the library will never expect quotation even if it is present",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "csvQuoteChar",
          "package": "csv-enumerator",
          "partial": "Quote Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:csvQuoteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparator character to be used in between fields\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "csvSep",
          "package": "csv-enumerator",
          "signature": "Char",
          "source": "src/Data-CSV-Enumerator-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Separator character to be used in between fields",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "csvSep",
          "package": "csv-enumerator",
          "partial": "Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:csvSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault settings for a CSV file. \n\u003c/p\u003e\u003cpre\u003e csvSep = ','\n csvQuoteChar = Just '\"'\n csvOutputQuoteChar = Just '\"'\n csvOutputColSep = ','\n\u003c/pre\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "defCSVSettings",
          "package": "csv-enumerator",
          "signature": "CSVSettings",
          "source": "src/Data-CSV-Enumerator-Types.html#defCSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Default settings for CSV file csvSep csvQuoteChar Just csvOutputQuoteChar Just csvOutputColSep",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "defCSVSettings",
          "package": "csv-enumerator",
          "partial": "CSVSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:defCSVSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly return headers for a list of rows.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "fileHeaders",
          "package": "csv-enumerator",
          "signature": "[r] -\u003e Maybe Row",
          "source": "src/Data-CSV-Enumerator.html#fileHeaders",
          "type": "method"
        },
        "index": {
          "description": "Possibly return headers for list of rows",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "fileHeaders",
          "normalized": "[a]-\u003eMaybe Row",
          "package": "csv-enumerator",
          "partial": "Headers",
          "signature": "[r]-\u003eMaybe Row",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:fileHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee to push rows into a given file\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "fileSink",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e FilePath -\u003e (Maybe Handle, Int) -\u003e ParsedRow r -\u003e Iteratee ByteString IO (Maybe Handle, Int)",
          "source": "src/Data-CSV-Enumerator.html#fileSink",
          "type": "method"
        },
        "index": {
          "description": "Iteratee to push rows into given file",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "fileSink",
          "normalized": "CSVSettings-\u003eFilePath-\u003e(Maybe Handle,Int)-\u003eParsedRow a-\u003eIteratee ByteString IO(Maybe Handle,Int)",
          "package": "csv-enumerator",
          "partial": "Sink",
          "signature": "CSVSettings-\u003eFilePath-\u003e(Maybe Handle,Int)-\u003eParsedRow r-\u003eIteratee ByteString IO(Maybe Handle,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:fileSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen & fold over the CSV file.\n\u003c/p\u003e\u003cp\u003eProcessing starts on row 2 for MapRow instance to use first row as column\n headers.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "foldCSVFile",
          "package": "csv-enumerator",
          "signature": "FilePath-\u003e CSVSettings-\u003e CSVAction r a-\u003e a-\u003e IO (Either SomeException a)",
          "type": "function"
        },
        "index": {
          "description": "Open fold over the CSV file Processing starts on row for MapRow instance to use first row as column headers",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "foldCSVFile",
          "normalized": "FilePath-\u003eCSVSettings-\u003eCSVAction a b-\u003eb-\u003eIO(Either SomeException b)",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "FilePath-\u003eCSVSettings-\u003eCSVAction r a-\u003ea-\u003eIO(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:foldCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience converter for fold step functions that are pure.\n\u003c/p\u003e\u003cp\u003eUse this if you don't want to deal with Iteratees when writing your fold\n functions.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "funToIter",
          "package": "csv-enumerator",
          "signature": "(a -\u003e ParsedRow r -\u003e a) -\u003e CSVAction r a",
          "source": "src/Data-CSV-Enumerator.html#funToIter",
          "type": "function"
        },
        "index": {
          "description": "Convenience converter for fold step functions that are pure Use this if you don want to deal with Iteratees when writing your fold functions",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "funToIter",
          "normalized": "(a-\u003eParsedRow b-\u003ea)-\u003eCSVAction b a",
          "package": "csv-enumerator",
          "partial": "To Iter",
          "signature": "(a-\u003eParsedRow r-\u003ea)-\u003eCSVAction r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:funToIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience converter for fold step functions that live in the IO monad.\n\u003c/p\u003e\u003cp\u003eUse this if you don't want to deal with Iteratees when writing your fold\n functions.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "funToIterIO",
          "package": "csv-enumerator",
          "signature": "(a -\u003e ParsedRow r -\u003e IO a) -\u003e CSVAction r a",
          "source": "src/Data-CSV-Enumerator.html#funToIterIO",
          "type": "function"
        },
        "index": {
          "description": "Convenience converter for fold step functions that live in the IO monad Use this if you don want to deal with Iteratees when writing your fold functions",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "funToIterIO",
          "normalized": "(a-\u003eParsedRow b-\u003eIO a)-\u003eCSVAction b a",
          "package": "csv-enumerator",
          "partial": "To Iter IO",
          "signature": "(a-\u003eParsedRow r-\u003eIO a)-\u003eCSVAction r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:funToIterIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw iteratee to process any Enumerator stream\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "iterCSV",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e CSVAction r a -\u003e a -\u003e Iteratee ByteString IO a",
          "source": "src/Data-CSV-Enumerator.html#iterCSV",
          "type": "method"
        },
        "index": {
          "description": "The raw iteratee to process any Enumerator stream",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "iterCSV",
          "normalized": "CSVSettings-\u003eCSVAction a b-\u003eb-\u003eIteratee ByteString IO b",
          "package": "csv-enumerator",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eCSVAction r a-\u003ea-\u003eIteratee ByteString IO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:iterCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap-accumulate over a CSV file. Similar to \u003ccode\u003emapAccumL\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapAccumCSVFile",
          "package": "csv-enumerator",
          "signature": "FilePath -\u003e CSVSettings -\u003e (acc -\u003e r -\u003e (acc, [r])) -\u003e acc -\u003e FilePath -\u003e IO (Either SomeException acc)",
          "source": "src/Data-CSV-Enumerator.html#mapAccumCSVFile",
          "type": "function"
        },
        "index": {
          "description": "Map-accumulate over CSV file Similar to mapAccumL in List",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapAccumCSVFile",
          "normalized": "FilePath-\u003eCSVSettings-\u003e(a-\u003eb-\u003e(a,[b]))-\u003ea-\u003eFilePath-\u003eIO(Either SomeException a)",
          "package": "csv-enumerator",
          "partial": "Accum CSVFile",
          "signature": "FilePath-\u003eCSVSettings-\u003e(acc-\u003er-\u003e(acc,[r]))-\u003eacc-\u003eFilePath-\u003eIO(Either SomeException acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapAccumCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a CSV file, apply function to each of its rows and save the\n resulting rows into a new file.\n\u003c/p\u003e\u003cp\u003eEach row is simply a list of fields.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFile",
          "package": "csv-enumerator",
          "signature": "FilePath-\u003e CSVSettings-\u003e (r -\u003e [r])-\u003e FilePath-\u003e IO (Either SomeException Int)",
          "type": "function"
        },
        "index": {
          "description": "Take CSV file apply function to each of its rows and save the resulting rows into new file Each row is simply list of fields",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFile",
          "normalized": "FilePath-\u003eCSVSettings-\u003e(a-\u003e[a])-\u003eFilePath-\u003eIO(Either SomeException Int)",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "FilePath-\u003eCSVSettings-\u003e(r-\u003e[r])-\u003eFilePath-\u003eIO(Either SomeException Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a CSV file, apply an IO action to each of its rows and save the\n resulting rows into a new file.\n\u003c/p\u003e\u003cp\u003eEach row is simply a list of fields.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFileM",
          "package": "csv-enumerator",
          "signature": "FilePath-\u003e CSVSettings-\u003e (r -\u003e IO [r])-\u003e FilePath-\u003e IO (Either SomeException Int)",
          "type": "function"
        },
        "index": {
          "description": "Take CSV file apply an IO action to each of its rows and save the resulting rows into new file Each row is simply list of fields",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFileM",
          "normalized": "FilePath-\u003eCSVSettings-\u003e(a-\u003eIO[a])-\u003eFilePath-\u003eIO(Either SomeException Int)",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "FilePath-\u003eCSVSettings-\u003e(r-\u003eIO[r])-\u003eFilePath-\u003eIO(Either SomeException Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapCSVFileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a CSV file, apply an IO action to each of its rows and discard the results.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFileM_",
          "package": "csv-enumerator",
          "signature": "FilePath-\u003e CSVSettings-\u003e (r -\u003e IO a)-\u003e IO (Either SomeException Int)",
          "type": "function"
        },
        "index": {
          "description": "Take CSV file apply an IO action to each of its rows and discard the results",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFileM_",
          "normalized": "FilePath-\u003eCSVSettings-\u003e(a-\u003eIO b)-\u003eIO(Either SomeException Int)",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "FilePath-\u003eCSVSettings-\u003e(r-\u003eIO a)-\u003eIO(Either SomeException Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapCSVFileM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapCSVFile\u003c/a\u003e\u003c/code\u003e but operates on multiple files pouring results into\n a single file.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFiles",
          "package": "csv-enumerator",
          "signature": "mapCSVFiles",
          "source": "src/Data-CSV-Enumerator.html#mapCSVFiles",
          "type": "method"
        },
        "index": {
          "description": "Like mapCSVFile but operates on multiple files pouring results into single file",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapCSVFiles",
          "package": "csv-enumerator",
          "partial": "CSVFiles",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapCSVFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an iteratee that can map over a CSV stream and output results to\n a handle in an interleaved fashion.\n\u003c/p\u003e\u003cp\u003eExample use: Let's map over a CSV file coming in through \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and push\n results to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e f r = return [r] -- a function that just returns the given row\n\u003c/pre\u003e\u003cpre\u003e E.run (E.enumHandle 4096 stdin $$ mapIntoHandle defCSVSettings True stdout f)\n\u003c/pre\u003e\u003cp\u003eThis nicely allows us to do things like (assuming you have pv installed):\n\u003c/p\u003e\u003cpre\u003e pv inputFile.csv | myApp \u003e output.CSV\n\u003c/pre\u003e\u003cp\u003eAnd monitor the ongoing progress of processing.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "mapIntoHandle",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003e Bool-\u003e Handle-\u003e (r -\u003e IO [r])-\u003e Iteratee ByteString IO Int",
          "type": "function"
        },
        "index": {
          "description": "Create an iteratee that can map over CSV stream and output results to handle in an interleaved fashion Example use Let map over CSV file coming in through stdin and push results to stdout return function that just returns the given row E.run E.enumHandle stdin mapIntoHandle defCSVSettings True stdout This nicely allows us to do things like assuming you have pv installed pv inputFile.csv myApp output.CSV And monitor the ongoing progress of processing",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "mapIntoHandle",
          "normalized": "CSVSettings-\u003eBool-\u003eHandle-\u003e(a-\u003eIO[a])-\u003eIteratee ByteString IO Int",
          "package": "csv-enumerator",
          "partial": "Into Handle",
          "signature": "CSVSettings-\u003eBool-\u003eHandle-\u003e(r-\u003eIO[r])-\u003eIteratee ByteString IO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:mapIntoHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand or contract the given \u003ccode\u003e\u003ca\u003eMapRow\u003c/a\u003e\u003c/code\u003e to contain exactly the given set of\n columns and then write the row into the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is helpful in filtering the columns or perhaps combining a number of\n files that don't have the same columns.\n\u003c/p\u003e\u003cp\u003eMissing columns will be left empty.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "outputColumns",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e [ByteString] -\u003e MapRow -\u003e IO ()",
          "source": "src/Data-CSV-Enumerator.html#outputColumns",
          "type": "function"
        },
        "index": {
          "description": "Expand or contract the given MapRow to contain exactly the given set of columns and then write the row into the given Handle This is helpful in filtering the columns or perhaps combining number of files that don have the same columns Missing columns will be left empty",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "outputColumns",
          "normalized": "CSVSettings-\u003eHandle-\u003e[ByteString]-\u003eMapRow-\u003eIO()",
          "package": "csv-enumerator",
          "partial": "Columns",
          "signature": "CSVSettings-\u003eHandle-\u003e[ByteString]-\u003eMapRow-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:outputColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput given row into given handle\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "outputRow",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e r -\u003e IO ()",
          "source": "src/Data-CSV-Enumerator.html#outputRow",
          "type": "function"
        },
        "index": {
          "description": "Output given row into given handle",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "outputRow",
          "normalized": "CSVSettings-\u003eHandle-\u003ea-\u003eIO()",
          "package": "csv-enumerator",
          "partial": "Row",
          "signature": "CSVSettings-\u003eHandle-\u003er-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:outputRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "outputRowIter",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e r -\u003e Iteratee ByteString IO ()",
          "source": "src/Data-CSV-Enumerator.html#outputRowIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "outputRowIter",
          "normalized": "CSVSettings-\u003eHandle-\u003ea-\u003eIteratee ByteString IO()",
          "package": "csv-enumerator",
          "partial": "Row Iter",
          "signature": "CSVSettings-\u003eHandle-\u003er-\u003eIteratee ByteString IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:outputRowIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "outputRows",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e [r] -\u003e IO ()",
          "source": "src/Data-CSV-Enumerator.html#outputRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "outputRows",
          "normalized": "CSVSettings-\u003eHandle-\u003e[a]-\u003eIO()",
          "package": "csv-enumerator",
          "partial": "Rows",
          "signature": "CSVSettings-\u003eHandle-\u003e[r]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:outputRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "outputRowsIter",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e [r] -\u003e Iteratee ByteString IO ()",
          "source": "src/Data-CSV-Enumerator.html#outputRowsIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "outputRowsIter",
          "normalized": "CSVSettings-\u003eHandle-\u003e[a]-\u003eIteratee ByteString IO()",
          "package": "csv-enumerator",
          "partial": "Rows Iter",
          "signature": "CSVSettings-\u003eHandle-\u003e[r]-\u003eIteratee ByteString IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:outputRowsIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "readCSVFile",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003e FilePath-\u003e IO (Either SomeException [r])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "readCSVFile",
          "normalized": "CSVSettings-\u003eFilePath-\u003eIO(Either SomeException[a])",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003eFilePath-\u003eIO(Either SomeException[r])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:readCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CSV row into strict ByteString equivalent.\n\u003c/p\u003e",
          "module": "Data.CSV.Enumerator",
          "name": "rowToStr",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e r -\u003e ByteString",
          "source": "src/Data-CSV-Enumerator.html#rowToStr",
          "type": "method"
        },
        "index": {
          "description": "Convert CSV row into strict ByteString equivalent",
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "rowToStr",
          "normalized": "CSVSettings-\u003ea-\u003eByteString",
          "package": "csv-enumerator",
          "partial": "To Str",
          "signature": "CSVSettings-\u003er-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:rowToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "writeCSVFile",
          "package": "csv-enumerator",
          "signature": "CSVSettings-\u003e FilePath-\u003e [r]-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "writeCSVFile",
          "normalized": "CSVSettings-\u003eFilePath-\u003e[a]-\u003eIO Int",
          "package": "csv-enumerator",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003eFilePath-\u003e[r]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:writeCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Enumerator",
          "name": "writeHeaders",
          "package": "csv-enumerator",
          "signature": "CSVSettings -\u003e Handle -\u003e [r] -\u003e IO Bool",
          "source": "src/Data-CSV-Enumerator.html#writeHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Enumerator",
          "module": "Data.CSV.Enumerator",
          "name": "writeHeaders",
          "normalized": "CSVSettings-\u003eHandle-\u003e[a]-\u003eIO Bool",
          "package": "csv-enumerator",
          "partial": "Headers",
          "signature": "CSVSettings-\u003eHandle-\u003e[r]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-enumerator/docs/Data-CSV-Enumerator.html#v:writeHeaders"
      }
    }
  ]
]