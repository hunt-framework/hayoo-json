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
        "word": "csv-conduit"
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
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "ByteString",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit-Parser-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the underlying Attoparsec row parser This is helpful if you want to do some ad-hoc CSV string parsing",
          "hierarchy": "Data CSV Conduit Parser ByteString",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "ByteString",
          "package": "csv-conduit",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse CSV\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "csv",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Parser [Row ByteString]",
          "source": "src/Data-CSV-Conduit-Parser-ByteString.html#csv",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV",
          "hierarchy": "Data CSV Conduit Parser ByteString",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "csv",
          "normalized": "CSVSettings-\u003eParser[Row ByteString]",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003eParser[Row ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-ByteString.html#v:csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as CSV\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "parseCSV",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e ByteString -\u003e Either String [Row ByteString]",
          "source": "src/Data-CSV-Conduit-Parser-ByteString.html#parseCSV",
          "type": "function"
        },
        "index": {
          "description": "Try to parse given string as CSV",
          "hierarchy": "Data CSV Conduit Parser ByteString",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "parseCSV",
          "normalized": "CSVSettings-\u003eByteString-\u003eEither String[Row ByteString]",
          "package": "csv-conduit",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eByteString-\u003eEither String[Row ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-ByteString.html#v:parseCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as 'Row ByteString'\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "parseRow",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e ByteString -\u003e Either String (Maybe (Row ByteString))",
          "source": "src/Data-CSV-Conduit-Parser-ByteString.html#parseRow",
          "type": "function"
        },
        "index": {
          "description": "Try to parse given string as Row ByteString",
          "hierarchy": "Data CSV Conduit Parser ByteString",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "parseRow",
          "normalized": "CSVSettings-\u003eByteString-\u003eEither String(Maybe(Row ByteString))",
          "package": "csv-conduit",
          "partial": "Row",
          "signature": "CSVSettings-\u003eByteString-\u003eEither String(Maybe(Row ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-ByteString.html#v:parseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV row\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "row",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Parser (Maybe (Row ByteString))",
          "source": "src/Data-CSV-Conduit-Parser-ByteString.html#row",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV row",
          "hierarchy": "Data CSV Conduit Parser ByteString",
          "module": "Data.CSV.Conduit.Parser.ByteString",
          "name": "row",
          "normalized": "CSVSettings-\u003eParser(Maybe(Row ByteString))",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003eParser(Maybe(Row ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-ByteString.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the underlying Attoparsec row parser. This is helpful if\n  you want to do some ad-hoc CSV string parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "Text",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit-Parser-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the underlying Attoparsec row parser This is helpful if you want to do some ad-hoc CSV string parsing",
          "hierarchy": "Data CSV Conduit Parser Text",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "Text",
          "package": "csv-conduit",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse CSV\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "csv",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Parser [Row Text]",
          "source": "src/Data-CSV-Conduit-Parser-Text.html#csv",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV",
          "hierarchy": "Data CSV Conduit Parser Text",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "csv",
          "normalized": "CSVSettings-\u003eParser[Row Text]",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003eParser[Row Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-Text.html#v:csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as CSV\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "parseCSV",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Text -\u003e Either String [Row Text]",
          "source": "src/Data-CSV-Conduit-Parser-Text.html#parseCSV",
          "type": "function"
        },
        "index": {
          "description": "Try to parse given string as CSV",
          "hierarchy": "Data CSV Conduit Parser Text",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "parseCSV",
          "normalized": "CSVSettings-\u003eText-\u003eEither String[Row Text]",
          "package": "csv-conduit",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eText-\u003eEither String[Row Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-Text.html#v:parseCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse given string as 'Row Text'\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "parseRow",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Text -\u003e Either String (Maybe (Row Text))",
          "source": "src/Data-CSV-Conduit-Parser-Text.html#parseRow",
          "type": "function"
        },
        "index": {
          "description": "Try to parse given string as Row Text",
          "hierarchy": "Data CSV Conduit Parser Text",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "parseRow",
          "normalized": "CSVSettings-\u003eText-\u003eEither String(Maybe(Row Text))",
          "package": "csv-conduit",
          "partial": "Row",
          "signature": "CSVSettings-\u003eText-\u003eEither String(Maybe(Row Text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-Text.html#v:parseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a CSV row\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "row",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Parser (Maybe (Row Text))",
          "source": "src/Data-CSV-Conduit-Parser-Text.html#row",
          "type": "function"
        },
        "index": {
          "description": "Parse CSV row",
          "hierarchy": "Data CSV Conduit Parser Text",
          "module": "Data.CSV.Conduit.Parser.Text",
          "name": "row",
          "normalized": "CSVSettings-\u003eParser(Maybe(Row Text))",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003eParser(Maybe(Row Text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit-Parser-Text.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Conduit",
          "name": "Conduit",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "Conduit",
          "package": "csv-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents types \u003ccode\u003er\u003c/code\u003e that are CSV-like and can be converted\n to/from an underlying stream of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample #1: Basics Using Convenience API\n\u003c/p\u003e\u003cpre\u003eimport Data.Conduit\nimport Data.Conduit.Binary\nimport Data.Conduit.List as CL\nimport Data.CSV.Conduit\n\nmyProcessor :: Conduit (Row Text) m (Row Text)\nmyProcessor = CL.map reverse\n\ntest = runResourceT $\n  transformCSV defCSVSettings\n               (sourceFile \"input.csv\")\n               myProcessor\n               (sinkFile \"output.csv\")\n\u003c/pre\u003e\u003cp\u003eExample #2: Basics Using Conduit API\n\u003c/p\u003e\u003cpre\u003eimport Data.Conduit\nimport Data.Conduit.Binary\nimport Data.CSV.Conduit\n\nmyProcessor :: Conduit (MapRow Text) m (MapRow Text)\nmyProcessor = undefined\n\ntest = runResourceT $\n  sourceFile \"test/BigFile.csv\" $=\n  intoCSV defCSVSettings $=\n  myProcessor $=\n  (writeHeaders defCSVSettings \u003e\u003e fromCSV defCSVSettings) $$\n  sinkFile \"test/BigFileOut.csv\"\n\u003c/pre\u003e",
          "module": "Data.CSV.Conduit",
          "name": "CSV",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit.html#CSV",
          "type": "class"
        },
        "index": {
          "description": "Represents types that are CSV-like and can be converted to from an underlying stream of type Example Basics Using Convenience API import Data.Conduit import Data.Conduit.Binary import Data.Conduit.List as CL import Data.CSV.Conduit myProcessor Conduit Row Text Row Text myProcessor CL.map reverse test runResourceT transformCSV defCSVSettings sourceFile input.csv myProcessor sinkFile output.csv Example Basics Using Conduit API import Data.Conduit import Data.Conduit.Binary import Data.CSV.Conduit myProcessor Conduit MapRow Text MapRow Text myProcessor undefined test runResourceT sourceFile test BigFile.csv intoCSV defCSVSettings myProcessor writeHeaders defCSVSettings fromCSV defCSVSettings sinkFile test BigFileOut.csv",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "CSV",
          "package": "csv-conduit",
          "partial": "CSV",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#t:CSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for a CSV file. This library is intended to be flexible\n and offer a way to process the majority of text data files out\n there.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "CSVSettings",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit-Types.html#CSVSettings",
          "type": "data"
        },
        "index": {
          "description": "Settings for CSV file This library is intended to be flexible and offer way to process the majority of text data files out there",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "CSVSettings",
          "package": "csv-conduit",
          "partial": "CSVSettings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#t:CSVSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMapRow\u003c/a\u003e\u003c/code\u003e is a dictionary based on \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "MapRow",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit-Types.html#MapRow",
          "type": "type"
        },
        "index": {
          "description": "MapRow is dictionary based on Map",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "MapRow",
          "package": "csv-conduit",
          "partial": "Map Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#t:MapRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRow\u003c/a\u003e\u003c/code\u003e is just a list of fields\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "Row",
          "package": "csv-conduit",
          "source": "src/Data-CSV-Conduit-Types.html#Row",
          "type": "type"
        },
        "index": {
          "description": "Row is just list of fields",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "Row",
          "package": "csv-conduit",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSV.Conduit",
          "name": "CSVSettings",
          "package": "csv-conduit",
          "signature": "CSVSettings",
          "source": "src/Data-CSV-Conduit-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "CSVSettings",
          "package": "csv-conduit",
          "partial": "CSVSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:CSVSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote character that may sometimes be present around fields.\n If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is given, the library will never expect quotation\n even if it is present.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "csvQuoteChar",
          "package": "csv-conduit",
          "signature": "(Maybe Char)",
          "source": "src/Data-CSV-Conduit-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Quote character that may sometimes be present around fields If Nothing is given the library will never expect quotation even if it is present",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "csvQuoteChar",
          "package": "csv-conduit",
          "partial": "Quote Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:csvQuoteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparator character to be used in between fields\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "csvSep",
          "package": "csv-conduit",
          "signature": "Char",
          "source": "src/Data-CSV-Conduit-Types.html#CSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Separator character to be used in between fields",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "csvSep",
          "package": "csv-conduit",
          "partial": "Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:csvSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault settings for a CSV file.\n\u003c/p\u003e\u003cpre\u003e csvSep = ','\n csvQuoteChar = Just '\"'\n\u003c/pre\u003e",
          "module": "Data.CSV.Conduit",
          "name": "defCSVSettings",
          "package": "csv-conduit",
          "signature": "CSVSettings",
          "source": "src/Data-CSV-Conduit-Types.html#defCSVSettings",
          "type": "function"
        },
        "index": {
          "description": "Default settings for CSV file csvSep csvQuoteChar Just",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "defCSVSettings",
          "package": "csv-conduit",
          "partial": "CSVSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:defCSVSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a stream of CSV row type back into a stream of \u003ccode\u003es\u003c/code\u003e. An\n example would be rendering a stream of \u003ccode\u003e\u003ca\u003eRow\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e rows as\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "fromCSV",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Conduit r m s",
          "source": "src/Data-CSV-Conduit.html#fromCSV",
          "type": "method"
        },
        "index": {
          "description": "Turn stream of CSV row type back into stream of An example would be rendering stream of Row ByteString rows as Text",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "fromCSV",
          "normalized": "CSVSettings-\u003eConduit a b c",
          "package": "csv-conduit",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eConduit r m s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:fromCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a stream of \u003ccode\u003es\u003c/code\u003e into a stream of CSV row type. An example\n would be parsing a ByteString stream as rows of \u003ccode\u003e\u003ca\u003eMapRow\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "intoCSV",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Conduit s m r",
          "source": "src/Data-CSV-Conduit.html#intoCSV",
          "type": "method"
        },
        "index": {
          "description": "Turn stream of into stream of CSV row type An example would be parsing ByteString stream as rows of MapRow Text",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "intoCSV",
          "normalized": "CSVSettings-\u003eConduit a b c",
          "package": "csv-conduit",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eConduit s m r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:intoCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the rows of a CSV file. Provided for convenience for\n historical reasons.\n\u003c/p\u003e\u003cp\u003eAn easy way to run this function would be \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e after\n feeding it all the arguments.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "mapCSVFile",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003e (a -\u003e [b])-\u003e FilePath-\u003e FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Map over the rows of CSV file Provided for convenience for historical reasons An easy way to run this function would be runResourceT after feeding it all the arguments",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "mapCSVFile",
          "normalized": "CSVSettings-\u003e(a-\u003e[b])-\u003eFilePath-\u003eFilePath-\u003ec()",
          "package": "csv-conduit",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003e(a-\u003e[b])-\u003eFilePath-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:mapCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the entire contents of a CSV file into memory.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "readCSVFile",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003e FilePath-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Read the entire contents of CSV file into memory",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "readCSVFile",
          "normalized": "CSVSettings-\u003eFilePath-\u003eIO[a]",
          "package": "csv-conduit",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003eFilePath-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:readCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CSV row into strict ByteString equivalent.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "rowToStr",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e r -\u003e s",
          "source": "src/Data-CSV-Conduit.html#rowToStr",
          "type": "method"
        },
        "index": {
          "description": "Convert CSV row into strict ByteString equivalent",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "rowToStr",
          "normalized": "CSVSettings-\u003ea-\u003eb",
          "package": "csv-conduit",
          "partial": "To Str",
          "signature": "CSVSettings-\u003er-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:rowToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e transformer, and call all registered release actions.\n\u003c/p\u003e\u003cp\u003eNote that there is some reference counting involved due to \u003ccode\u003e\u003ca\u003eresourceForkIO\u003c/a\u003e\u003c/code\u003e.\n If multiple threads are sharing the same collection of resources, only the\n last call to \u003ccode\u003erunResourceT\u003c/code\u003e will deallocate the resources.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "runResourceT",
          "package": "csv-conduit",
          "signature": "ResourceT m a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Unwrap ResourceT transformer and call all registered release actions Note that there is some reference counting involved due to resourceForkIO If multiple threads are sharing the same collection of resources only the last call to runResourceT will deallocate the resources Since",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "runResourceT",
          "normalized": "ResourceT a b-\u003ea b",
          "package": "csv-conduit",
          "partial": "Resource",
          "signature": "ResourceT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:runResourceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral purpose CSV transformer. Apply a list-like processing\n function from \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e to the rows of a CSV stream. You\n need to provide a stream data source, a transformer and a stream\n data sink.\n\u003c/p\u003e\u003cp\u003eAn easy way to run this function would be \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e after\n feeding it all the arguments.\n\u003c/p\u003e\u003cp\u003eExample - map a function over the rows of a CSV file:\n\u003c/p\u003e\u003cpre\u003e transformCSV set (sourceFile inFile) (C.map f) (sinkFile outFile)\n\u003c/pre\u003e",
          "module": "Data.CSV.Conduit",
          "name": "transformCSV",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003e Source m s-\u003e Conduit a m b-\u003e Sink s' m ()-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "General purpose CSV transformer Apply list-like processing function from List to the rows of CSV stream You need to provide stream data source transformer and stream data sink An easy way to run this function would be runResourceT after feeding it all the arguments Example map function over the rows of CSV file transformCSV set sourceFile inFile C.map sinkFile outFile",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "transformCSV",
          "normalized": "CSVSettings-\u003eSource a b-\u003eConduit c a d-\u003eSink e a()-\u003ea()",
          "package": "csv-conduit",
          "partial": "CSV",
          "signature": "CSVSettings-\u003eSource m s-\u003eConduit a m b-\u003eSink s' m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:transformCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite CSV data into file.\n\u003c/p\u003e",
          "module": "Data.CSV.Conduit",
          "name": "writeCSVFile",
          "package": "csv-conduit",
          "signature": "CSVSettings-\u003e FilePath-\u003e IOMode-\u003e [a]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write CSV data into file",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "writeCSVFile",
          "normalized": "CSVSettings-\u003eFilePath-\u003eIOMode-\u003e[a]-\u003eIO()",
          "package": "csv-conduit",
          "partial": "CSVFile",
          "signature": "CSVSettings-\u003eFilePath-\u003eIOMode-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:writeCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite headers AND the row into the output stream, once. Just\n chain this using the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance in your pipeline:\n\u003c/p\u003e\u003cpre\u003e ... =$= writeHeaders settings \u003e\u003e fromCSV settings $$ sinkFile \"...\"\n\u003c/pre\u003e",
          "module": "Data.CSV.Conduit",
          "name": "writeHeaders",
          "package": "csv-conduit",
          "signature": "CSVSettings -\u003e Conduit (MapRow r) m s",
          "source": "src/Data-CSV-Conduit.html#writeHeaders",
          "type": "function"
        },
        "index": {
          "description": "Write headers AND the row into the output stream once Just chain this using the Monad instance in your pipeline writeHeaders settings fromCSV settings sinkFile",
          "hierarchy": "Data CSV Conduit",
          "module": "Data.CSV.Conduit",
          "name": "writeHeaders",
          "normalized": "CSVSettings-\u003eConduit(MapRow a)b c",
          "package": "csv-conduit",
          "partial": "Headers",
          "signature": "CSVSettings-\u003eConduit(MapRow r)m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csv-conduit/docs/Data-CSV-Conduit.html#v:writeHeaders"
      }
    }
  ]
]