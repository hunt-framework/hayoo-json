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
        "word": "lazy-csv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CSV (comma-separated value) format is defined by RFC 4180,\n   \"Common Format and MIME Type for Comma-Separated Values (CSV) Files\",\n   \u003ca\u003ehttp://www.rfc-editor.org/rfc/rfc4180.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis lazy parser can report all CSV formatting errors, whilst also\n   returning all the valid data, so the user can choose whether to\n   continue, to show warnings, or to halt on error.\n\u003c/p\u003e\u003cp\u003eValid fields retain information about their original location in the\n   input, so a secondary parser from textual fields to typed values\n   can give intelligent error messages.\n\u003c/p\u003e\u003cp\u003eIn a valid CSV file, all rows must have the same number of columns.\n   This parser will flag a row with the wrong number of columns as a error.\n   (But the error type contains the actual data, so the user can recover\n   it if desired.)  Completely blank lines are also treated as errors,\n   and again the user is free either to filter these out or convert them\n   to a row of actual null fields.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ByteString",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "The CSV comma-separated value format is defined by RFC Common Format and MIME Type for Comma-Separated Values CSV Files http www.rfc-editor.org rfc rfc4180.txt This lazy parser can report all CSV formatting errors whilst also returning all the valid data so the user can choose whether to continue to show warnings or to halt on error Valid fields retain information about their original location in the input so secondary parser from textual fields to typed values can give intelligent error messages In valid CSV file all rows must have the same number of columns This parser will flag row with the wrong number of columns as error But the error type contains the actual data so the user can recover it if desired Completely blank lines are also treated as errors and again the user is free either to filter these out or convert them to row of actual null fields",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ByteString",
          "package": "lazy-csv",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structured error type for CSV formatting mistakes.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVError",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "data"
        },
        "index": {
          "description": "structured error type for CSV formatting mistakes",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVError",
          "package": "lazy-csv",
          "partial": "CSVError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV field's content is stored with its logical row and column number,\n   as well as its textual extent.  This information is necessary if you\n   want to generate good error messages in a secondary parsing stage,\n   should you choose to convert the textual fields to typed data values.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVField",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "data"
        },
        "index": {
          "description": "CSV field content is stored with its logical row and column number as well as its textual extent This information is necessary if you want to generate good error messages in secondary parsing stage should you choose to convert the textual fields to typed data values",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of parsing a CSV input is a mixed collection of errors\n   and valid rows.  This way of representing things is crucial to the\n   ability to parse lazily whilst still catching format errors.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVResult",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVResult",
          "type": "type"
        },
        "index": {
          "description": "The result of parsing CSV input is mixed collection of errors and valid rows This way of representing things is crucial to the ability to parse lazily whilst still catching format errors",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVResult",
          "package": "lazy-csv",
          "partial": "CSVResult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV row is just a sequence of fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVRow",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVRow",
          "type": "type"
        },
        "index": {
          "description": "CSV row is just sequence of fields",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVRow",
          "package": "lazy-csv",
          "partial": "CSVRow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV table is a sequence of rows.  All rows have the same number\n   of fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVTable",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVTable",
          "type": "type"
        },
        "index": {
          "description": "CSV table is sequence of rows All rows have the same number of fields",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVTable",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "BlankLine",
          "package": "lazy-csv",
          "signature": "BlankLine",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "BlankLine",
          "package": "lazy-csv",
          "partial": "Blank Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:BlankLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVField",
          "package": "lazy-csv",
          "signature": "CSVField",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:CSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVFieldError",
          "package": "lazy-csv",
          "signature": "CSVFieldError",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "CSVFieldError",
          "package": "lazy-csv",
          "partial": "CSVField Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:CSVFieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "DuplicateHeader",
          "package": "lazy-csv",
          "signature": "DuplicateHeader",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "DuplicateHeader",
          "package": "lazy-csv",
          "partial": "Duplicate Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:DuplicateHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "FieldError",
          "package": "lazy-csv",
          "signature": "FieldError",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "FieldError",
          "package": "lazy-csv",
          "partial": "Field Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:FieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "IncorrectRow",
          "package": "lazy-csv",
          "signature": "IncorrectRow",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "IncorrectRow",
          "package": "lazy-csv",
          "partial": "Incorrect Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:IncorrectRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "NoData",
          "package": "lazy-csv",
          "signature": "NoData",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "NoData",
          "package": "lazy-csv",
          "partial": "No Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:NoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColNum",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColNum",
          "package": "lazy-csv",
          "partial": "Col Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColsActual",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColsActual",
          "package": "lazy-csv",
          "partial": "Cols Actual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColsActual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColsExpected",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvColsExpected",
          "package": "lazy-csv",
          "partial": "Cols Expected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColsExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvDuplicate",
          "package": "lazy-csv",
          "signature": "String",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvDuplicate",
          "package": "lazy-csv",
          "partial": "Duplicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvDuplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the errors from a CSV parse.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvErrors",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e [CSVError]",
          "source": "src/Text-CSV-Lazy-ByteString.html#csvErrors",
          "type": "function"
        },
        "index": {
          "description": "Extract just the errors from CSV parse",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvErrors",
          "normalized": "CSVResult-\u003e[CSVError]",
          "package": "lazy-csv",
          "partial": "Errors",
          "signature": "CSVResult-\u003e[CSVError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvField",
          "package": "lazy-csv",
          "signature": "CSVField",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvField",
          "package": "lazy-csv",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldContent",
          "package": "lazy-csv",
          "signature": "ByteString",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldContent",
          "package": "lazy-csv",
          "partial": "Field Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldError",
          "package": "lazy-csv",
          "signature": "String",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldError",
          "package": "lazy-csv",
          "partial": "Field Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldQuoted",
          "package": "lazy-csv",
          "signature": "Bool",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFieldQuoted",
          "package": "lazy-csv",
          "partial": "Field Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFields",
          "package": "lazy-csv",
          "signature": "[CSVField]",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvFields",
          "normalized": "[CSVField]",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[CSVField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvHeaderSerial",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvHeaderSerial",
          "package": "lazy-csv",
          "partial": "Header Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvHeaderSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvRow",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvRow",
          "package": "lazy-csv",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvRowNum",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvRowNum",
          "package": "lazy-csv",
          "partial": "Row Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvRowNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the valid portions of a CSV parse.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTable",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#csvTable",
          "type": "function"
        },
        "index": {
          "description": "Extract just the valid portions of CSV parse",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTable",
          "normalized": "CSVResult-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Table",
          "signature": "CSVResult-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the full table, including invalid rows, with padding, and\n   de-duplicated headers.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTableFull",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#csvTableFull",
          "type": "function"
        },
        "index": {
          "description": "Extract the full table including invalid rows with padding and de-duplicated headers",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTableFull",
          "normalized": "CSVResult-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Table Full",
          "signature": "CSVResult-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTableFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header row of the CSV table, assuming it is non-empty.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTableHeader",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e [String]",
          "source": "src/Text-CSV-Lazy-ByteString.html#csvTableHeader",
          "type": "function"
        },
        "index": {
          "description": "The header row of the CSV table assuming it is non-empty",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTableHeader",
          "normalized": "CSVResult-\u003e[String]",
          "package": "lazy-csv",
          "partial": "Table Header",
          "signature": "CSVResult-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTableHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTextEnd",
          "package": "lazy-csv",
          "signature": "(Int, Int)",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTextEnd",
          "normalized": "(Int,Int)",
          "package": "lazy-csv",
          "partial": "Text End",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTextEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTextStart",
          "package": "lazy-csv",
          "signature": "(Int, Int)",
          "source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "csvTextStart",
          "normalized": "(Int,Int)",
          "package": "lazy-csv",
          "partial": "Text Start",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTextStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate that the columns of a table have exactly the names and\n   ordering given in the argument.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "expectFields",
          "package": "lazy-csv",
          "signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#expectFields",
          "type": "function"
        },
        "index": {
          "description": "Validate that the columns of table have exactly the names and ordering given in the argument",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "expectFields",
          "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:expectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CSV table to a simpler representation, by dropping all\n   the original location information.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "fromCSVTable",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e [[ByteString]]",
          "source": "src/Text-CSV-Lazy-ByteString.html#fromCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Convert CSV table to simpler representation by dropping all the original location information",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "fromCSVTable",
          "normalized": "CSVTable-\u003e[[ByteString]]",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "CSVTable-\u003e[[ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:fromCSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join operator, adds the columns of two tables together.\n   Precondition: the tables have the same number of rows.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "joinCSV",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e CSVTable -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#joinCSV",
          "type": "function"
        },
        "index": {
          "description": "join operator adds the columns of two tables together Precondition the tables have the same number of rows",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "joinCSV",
          "normalized": "CSVTable-\u003eCSVTable-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "CSV",
          "signature": "CSVTable-\u003eCSVTable-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:joinCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a fresh field with the given textual content.\n   The quoting flag is set automatically based on the text.\n   Textual extents are not particularly useful, since there was no original\n   input to refer to.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "mkCSVField",
          "package": "lazy-csv",
          "signature": "Int -\u003e Int -\u003e ByteString -\u003e CSVField",
          "source": "src/Text-CSV-Lazy-ByteString.html#mkCSVField",
          "type": "function"
        },
        "index": {
          "description": "Generate fresh field with the given textual content The quoting flag is set automatically based on the text Textual extents are not particularly useful since there was no original input to refer to",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "mkCSVField",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eCSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eCSVField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:mkCSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generator for a new CSV column, of arbitrary length.\n   The result can be joined to an existing table if desired.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "mkEmptyColumn",
          "package": "lazy-csv",
          "signature": "String -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#mkEmptyColumn",
          "type": "function"
        },
        "index": {
          "description": "generator for new CSV column of arbitrary length The result can be joined to an existing table if desired",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "mkEmptyColumn",
          "normalized": "String-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Empty Column",
          "signature": "String-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:mkEmptyColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA first-stage parser for CSV (comma-separated values) data.\n   The individual fields remain as text, but errors in CSV formatting\n   are reported.  Errors (containing unrecognisable rows/fields) are\n   interspersed with the valid rows/fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "parseCSV",
          "package": "lazy-csv",
          "signature": "ByteString -\u003e CSVResult",
          "source": "src/Text-CSV-Lazy-ByteString.html#parseCSV",
          "type": "function"
        },
        "index": {
          "description": "first-stage parser for CSV comma-separated values data The individual fields remain as text but errors in CSV formatting are reported Errors containing unrecognisable rows fields are interspersed with the valid rows fields",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "parseCSV",
          "normalized": "ByteString-\u003eCSVResult",
          "package": "lazy-csv",
          "partial": "CSV",
          "signature": "ByteString-\u003eCSVResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:parseCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes CSV is not comma-separated, but delimiter-separated\n   values (DSV).  The choice of delimiter is arbitrary, but semi-colon\n   is common in locales where comma is used as a decimal point, and tab\n   is also common.  The Boolean argument is\n   whether newlines should be accepted within quoted fields.  The CSV RFC\n   says newlines can occur in quotes, but other DSV formats might say\n   otherwise.  You can often get better error messages if newlines are\n   disallowed.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "parseDSV",
          "package": "lazy-csv",
          "signature": "Bool -\u003e Char -\u003e ByteString -\u003e CSVResult",
          "source": "src/Text-CSV-Lazy-ByteString.html#parseDSV",
          "type": "function"
        },
        "index": {
          "description": "Sometimes CSV is not comma-separated but delimiter-separated values DSV The choice of delimiter is arbitrary but semi-colon is common in locales where comma is used as decimal point and tab is also common The Boolean argument is whether newlines should be accepted within quoted fields The CSV RFC says newlines can occur in quotes but other DSV formats might say otherwise You can often get better error messages if newlines are disallowed",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "parseDSV",
          "normalized": "Bool-\u003eChar-\u003eByteString-\u003eCSVResult",
          "package": "lazy-csv",
          "partial": "DSV",
          "signature": "Bool-\u003eChar-\u003eByteString-\u003eCSVResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:parseDSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVError",
          "package": "lazy-csv",
          "signature": "CSVError -\u003e String",
          "source": "src/Text-CSV-Lazy-ByteString.html#ppCSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVError",
          "normalized": "CSVError-\u003eString",
          "package": "lazy-csv",
          "partial": "CSVError",
          "signature": "CSVError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printing for CSV fields, shows positional information in addition\n   to the textual content.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVField",
          "package": "lazy-csv",
          "signature": "CSVField -\u003e String",
          "source": "src/Text-CSV-Lazy-ByteString.html#ppCSVField",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printing for CSV fields shows positional information in addition to the textual content",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVField",
          "normalized": "CSVField-\u003eString",
          "package": "lazy-csv",
          "partial": "CSVField",
          "signature": "CSVField-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a table back to a lazily-constructed string.  There are lots of\n   possible design decisions one could take, e.g. to re-arrange columns\n   back into something resembling their original order, but here we just\n   take the given table without looking at Row and Field numbers etc.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVTable",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e ByteString",
          "source": "src/Text-CSV-Lazy-ByteString.html#ppCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Output table back to lazily-constructed string There are lots of possible design decisions one could take e.g to re-arrange columns back into something resembling their original order but here we just take the given table without looking at Row and Field numbers etc",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppCSVTable",
          "normalized": "CSVTable-\u003eByteString",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "CSVTable-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a table back to a lazily-constructed bytestring, using the given\n   delimiter char.  The Boolean argument is to repair fields containing\n   newlines, by replacing the nl with a space.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppDSVTable",
          "package": "lazy-csv",
          "signature": "Bool -\u003e Char -\u003e CSVTable -\u003e ByteString",
          "source": "src/Text-CSV-Lazy-ByteString.html#ppDSVTable",
          "type": "function"
        },
        "index": {
          "description": "Output table back to lazily-constructed bytestring using the given delimiter char The Boolean argument is to repair fields containing newlines by replacing the nl with space",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "ppDSVTable",
          "normalized": "Bool-\u003eChar-\u003eCSVTable-\u003eByteString",
          "package": "lazy-csv",
          "partial": "DSVTable",
          "signature": "Bool-\u003eChar-\u003eCSVTable-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppDSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect and/or re-arrange columns from a CSV table, based on names in the\n   header row of the table.  The original header row is re-arranged too.\n   The result is either a list of column names that were not present, or\n   the (possibly re-arranged) sub-table.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "selectFields",
          "package": "lazy-csv",
          "signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
          "source": "src/Text-CSV-Lazy-ByteString.html#selectFields",
          "type": "function"
        },
        "index": {
          "description": "Select and or re-arrange columns from CSV table based on names in the header row of the table The original header row is re-arranged too The result is either list of column names that were not present or the possibly re-arranged sub-table",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "selectFields",
          "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:selectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a simple list of lists into a CSVTable by the addition of\n   logical locations.  (Textual locations are not so useful.)\n   Rows of varying lengths generate errors.  Fields that need\n   quotation marks are automatically marked as such.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "toCSVTable",
          "package": "lazy-csv",
          "signature": "[[ByteString]] -\u003e ([CSVError], CSVTable)",
          "source": "src/Text-CSV-Lazy-ByteString.html#toCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Convert simple list of lists into CSVTable by the addition of logical locations Textual locations are not so useful Rows of varying lengths generate errors Fields that need quotation marks are automatically marked as such",
          "hierarchy": "Text CSV Lazy ByteString",
          "module": "Text.CSV.Lazy.ByteString",
          "name": "toCSVTable",
          "normalized": "[[ByteString]]-\u003e([CSVError],CSVTable)",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "[[ByteString]]-\u003e([CSVError],CSVTable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:toCSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CSV (comma-separated value) format is defined by RFC 4180,\n   \"Common Format and MIME Type for Comma-Separated Values (CSV) Files\",\n   \u003ca\u003ehttp://www.rfc-editor.org/rfc/rfc4180.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis lazy parser can report all CSV formatting errors, whilst also\n   returning all the valid data, so the user can choose whether to\n   continue, to show warnings, or to halt on error.\n\u003c/p\u003e\u003cp\u003eValid fields retain information about their original location in the\n   input, so a secondary parser from textual fields to typed values\n   can give intelligent error messages.\n\u003c/p\u003e\u003cp\u003eIn a valid CSV file, all rows must have the same number of columns.\n   This parser will flag a row with the wrong number of columns as a error.\n   (But the error type contains the actual data, so the user can recover\n   it if desired.)  Completely blank lines are also treated as errors,\n   and again the user is free either to filter these out or convert them\n   to a row of actual null fields.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "String",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html",
          "type": "module"
        },
        "index": {
          "description": "The CSV comma-separated value format is defined by RFC Common Format and MIME Type for Comma-Separated Values CSV Files http www.rfc-editor.org rfc rfc4180.txt This lazy parser can report all CSV formatting errors whilst also returning all the valid data so the user can choose whether to continue to show warnings or to halt on error Valid fields retain information about their original location in the input so secondary parser from textual fields to typed values can give intelligent error messages In valid CSV file all rows must have the same number of columns This parser will flag row with the wrong number of columns as error But the error type contains the actual data so the user can recover it if desired Completely blank lines are also treated as errors and again the user is free either to filter these out or convert them to row of actual null fields",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "String",
          "package": "lazy-csv",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structured error type for CSV formatting mistakes.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVError",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "data"
        },
        "index": {
          "description": "structured error type for CSV formatting mistakes",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVError",
          "package": "lazy-csv",
          "partial": "CSVError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV field's content is stored with its logical row and column number,\n   as well as its textual extent.  This information is necessary if you\n   want to generate good error messages in a secondary parsing stage,\n   should you choose to convert the textual fields to typed data values.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVField",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "data"
        },
        "index": {
          "description": "CSV field content is stored with its logical row and column number as well as its textual extent This information is necessary if you want to generate good error messages in secondary parsing stage should you choose to convert the textual fields to typed data values",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of parsing a CSV input is a mixed collection of errors\n   and valid rows.  This way of representing things is crucial to the\n   ability to parse lazily whilst still catching format errors.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVResult",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html#CSVResult",
          "type": "type"
        },
        "index": {
          "description": "The result of parsing CSV input is mixed collection of errors and valid rows This way of representing things is crucial to the ability to parse lazily whilst still catching format errors",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVResult",
          "package": "lazy-csv",
          "partial": "CSVResult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV row is just a sequence of fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVRow",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html#CSVRow",
          "type": "type"
        },
        "index": {
          "description": "CSV row is just sequence of fields",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVRow",
          "package": "lazy-csv",
          "partial": "CSVRow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CSV table is a sequence of rows.  All rows have the same number\n   of fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVTable",
          "package": "lazy-csv",
          "source": "src/Text-CSV-Lazy-String.html#CSVTable",
          "type": "type"
        },
        "index": {
          "description": "CSV table is sequence of rows All rows have the same number of fields",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVTable",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "BlankLine",
          "package": "lazy-csv",
          "signature": "BlankLine",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "BlankLine",
          "package": "lazy-csv",
          "partial": "Blank Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:BlankLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "CSVField",
          "package": "lazy-csv",
          "signature": "CSVField",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:CSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "CSVFieldError",
          "package": "lazy-csv",
          "signature": "CSVFieldError",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "CSVFieldError",
          "package": "lazy-csv",
          "partial": "CSVField Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:CSVFieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "DuplicateHeader",
          "package": "lazy-csv",
          "signature": "DuplicateHeader",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "DuplicateHeader",
          "package": "lazy-csv",
          "partial": "Duplicate Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:DuplicateHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "FieldError",
          "package": "lazy-csv",
          "signature": "FieldError",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "FieldError",
          "package": "lazy-csv",
          "partial": "Field Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:FieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "IncorrectRow",
          "package": "lazy-csv",
          "signature": "IncorrectRow",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "IncorrectRow",
          "package": "lazy-csv",
          "partial": "Incorrect Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:IncorrectRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "NoData",
          "package": "lazy-csv",
          "signature": "NoData",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "NoData",
          "package": "lazy-csv",
          "partial": "No Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:NoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvColNum",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvColNum",
          "package": "lazy-csv",
          "partial": "Col Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvColsActual",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvColsActual",
          "package": "lazy-csv",
          "partial": "Cols Actual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColsActual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvColsExpected",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvColsExpected",
          "package": "lazy-csv",
          "partial": "Cols Expected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColsExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvDuplicate",
          "package": "lazy-csv",
          "signature": "String",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvDuplicate",
          "package": "lazy-csv",
          "partial": "Duplicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvDuplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the errors from a CSV parse.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "csvErrors",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e [CSVError]",
          "source": "src/Text-CSV-Lazy-String.html#csvErrors",
          "type": "function"
        },
        "index": {
          "description": "Extract just the errors from CSV parse",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvErrors",
          "normalized": "CSVResult-\u003e[CSVError]",
          "package": "lazy-csv",
          "partial": "Errors",
          "signature": "CSVResult-\u003e[CSVError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvField",
          "package": "lazy-csv",
          "signature": "CSVField",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvField",
          "package": "lazy-csv",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldContent",
          "package": "lazy-csv",
          "signature": "String",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldContent",
          "package": "lazy-csv",
          "partial": "Field Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldError",
          "package": "lazy-csv",
          "signature": "String",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldError",
          "package": "lazy-csv",
          "partial": "Field Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldQuoted",
          "package": "lazy-csv",
          "signature": "Bool",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvFieldQuoted",
          "package": "lazy-csv",
          "partial": "Field Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvFields",
          "package": "lazy-csv",
          "signature": "[CSVField]",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvFields",
          "normalized": "[CSVField]",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[CSVField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvHeaderSerial",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvHeaderSerial",
          "package": "lazy-csv",
          "partial": "Header Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvHeaderSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvRow",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvRow",
          "package": "lazy-csv",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvRowNum",
          "package": "lazy-csv",
          "signature": "Int",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvRowNum",
          "package": "lazy-csv",
          "partial": "Row Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvRowNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the valid portions of a CSV parse.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTable",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#csvTable",
          "type": "function"
        },
        "index": {
          "description": "Extract just the valid portions of CSV parse",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTable",
          "normalized": "CSVResult-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Table",
          "signature": "CSVResult-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the full table, including invalid rows, repaired with padding.\n   and de-duplicated headers.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTableFull",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#csvTableFull",
          "type": "function"
        },
        "index": {
          "description": "Extract the full table including invalid rows repaired with padding and de-duplicated headers",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTableFull",
          "normalized": "CSVResult-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Table Full",
          "signature": "CSVResult-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTableFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header row of the CSV table, assuming it is non-empty.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTableHeader",
          "package": "lazy-csv",
          "signature": "CSVResult -\u003e [String]",
          "source": "src/Text-CSV-Lazy-String.html#csvTableHeader",
          "type": "function"
        },
        "index": {
          "description": "The header row of the CSV table assuming it is non-empty",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTableHeader",
          "normalized": "CSVResult-\u003e[String]",
          "package": "lazy-csv",
          "partial": "Table Header",
          "signature": "CSVResult-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTableHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvTextEnd",
          "package": "lazy-csv",
          "signature": "(Int, Int)",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTextEnd",
          "normalized": "(Int,Int)",
          "package": "lazy-csv",
          "partial": "Text End",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTextEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSV.Lazy.String",
          "name": "csvTextStart",
          "package": "lazy-csv",
          "signature": "(Int, Int)",
          "source": "src/Text-CSV-Lazy-String.html#CSVField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "csvTextStart",
          "normalized": "(Int,Int)",
          "package": "lazy-csv",
          "partial": "Text Start",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTextStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate that the named columns of a table have exactly the names and\n   ordering given in the argument.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "expectFields",
          "package": "lazy-csv",
          "signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#expectFields",
          "type": "function"
        },
        "index": {
          "description": "Validate that the named columns of table have exactly the names and ordering given in the argument",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "expectFields",
          "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:expectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CSV table to a simpler representation, by dropping all\n   the original location information.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "fromCSVTable",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e [[String]]",
          "source": "src/Text-CSV-Lazy-String.html#fromCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Convert CSV table to simpler representation by dropping all the original location information",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "fromCSVTable",
          "normalized": "CSVTable-\u003e[[String]]",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "CSVTable-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:fromCSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join operator, adds the columns of two tables together.\n   Precondition: the tables have the same number of rows.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "joinCSV",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e CSVTable -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#joinCSV",
          "type": "function"
        },
        "index": {
          "description": "join operator adds the columns of two tables together Precondition the tables have the same number of rows",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "joinCSV",
          "normalized": "CSVTable-\u003eCSVTable-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "CSV",
          "signature": "CSVTable-\u003eCSVTable-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:joinCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a fresh field with the given textual content.\n   The quoting flag is set automatically based on the text.\n   Textual extents are not particularly useful, since there was no original\n   input to refer to.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "mkCSVField",
          "package": "lazy-csv",
          "signature": "Int -\u003e Int -\u003e String -\u003e CSVField",
          "source": "src/Text-CSV-Lazy-String.html#mkCSVField",
          "type": "function"
        },
        "index": {
          "description": "Generate fresh field with the given textual content The quoting flag is set automatically based on the text Textual extents are not particularly useful since there was no original input to refer to",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "mkCSVField",
          "normalized": "Int-\u003eInt-\u003eString-\u003eCSVField",
          "package": "lazy-csv",
          "partial": "CSVField",
          "signature": "Int-\u003eInt-\u003eString-\u003eCSVField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:mkCSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generator for a new CSV column, of arbitrary length.\n   The result can be joined to an existing table if desired.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "mkEmptyColumn",
          "package": "lazy-csv",
          "signature": "String -\u003e CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#mkEmptyColumn",
          "type": "function"
        },
        "index": {
          "description": "generator for new CSV column of arbitrary length The result can be joined to an existing table if desired",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "mkEmptyColumn",
          "normalized": "String-\u003eCSVTable",
          "package": "lazy-csv",
          "partial": "Empty Column",
          "signature": "String-\u003eCSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:mkEmptyColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA first-stage parser for CSV (comma-separated values) data.\n   The individual fields remain as text, but errors in CSV formatting\n   are reported.  Errors (containing unrecognisable rows/fields) are\n   interspersed with the valid rows/fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "parseCSV",
          "package": "lazy-csv",
          "signature": "String -\u003e CSVResult",
          "source": "src/Text-CSV-Lazy-String.html#parseCSV",
          "type": "function"
        },
        "index": {
          "description": "first-stage parser for CSV comma-separated values data The individual fields remain as text but errors in CSV formatting are reported Errors containing unrecognisable rows fields are interspersed with the valid rows fields",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "parseCSV",
          "normalized": "String-\u003eCSVResult",
          "package": "lazy-csv",
          "partial": "CSV",
          "signature": "String-\u003eCSVResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:parseCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes CSV is not comma-separated, but delimiter-separated\n   values (DSV).  The choice of delimiter is arbitrary, but semi-colon\n   is common in locales where comma is used as a decimal point, and tab\n   is also common.  The Boolean argument is\n   whether newlines should be accepted within quoted fields.  The CSV RFC\n   says newlines can occur in quotes, but other DSV formats might say\n   otherwise.  You can often get better error messages if newlines are\n   disallowed.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "parseDSV",
          "package": "lazy-csv",
          "signature": "Bool -\u003e Char -\u003e String -\u003e CSVResult",
          "source": "src/Text-CSV-Lazy-String.html#parseDSV",
          "type": "function"
        },
        "index": {
          "description": "Sometimes CSV is not comma-separated but delimiter-separated values DSV The choice of delimiter is arbitrary but semi-colon is common in locales where comma is used as decimal point and tab is also common The Boolean argument is whether newlines should be accepted within quoted fields The CSV RFC says newlines can occur in quotes but other DSV formats might say otherwise You can often get better error messages if newlines are disallowed",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "parseDSV",
          "normalized": "Bool-\u003eChar-\u003eString-\u003eCSVResult",
          "package": "lazy-csv",
          "partial": "DSV",
          "signature": "Bool-\u003eChar-\u003eString-\u003eCSVResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:parseDSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome pretty-printing for structured CSV errors.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVError",
          "package": "lazy-csv",
          "signature": "CSVError -\u003e String",
          "source": "src/Text-CSV-Lazy-String.html#ppCSVError",
          "type": "function"
        },
        "index": {
          "description": "Some pretty-printing for structured CSV errors",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVError",
          "normalized": "CSVError-\u003eString",
          "package": "lazy-csv",
          "partial": "CSVError",
          "signature": "CSVError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printing for CSV fields, shows positional information in addition\n   to the textual content.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVField",
          "package": "lazy-csv",
          "signature": "CSVField -\u003e String",
          "source": "src/Text-CSV-Lazy-String.html#ppCSVField",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printing for CSV fields shows positional information in addition to the textual content",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVField",
          "normalized": "CSVField-\u003eString",
          "package": "lazy-csv",
          "partial": "CSVField",
          "signature": "CSVField-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a full CSV table back into text, as much like the original\n   input as possible,  e.g. preserving quoted/unquoted format of fields.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVTable",
          "package": "lazy-csv",
          "signature": "CSVTable -\u003e String",
          "source": "src/Text-CSV-Lazy-String.html#ppCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Turn full CSV table back into text as much like the original input as possible e.g preserving quoted unquoted format of fields",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "ppCSVTable",
          "normalized": "CSVTable-\u003eString",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "CSVTable-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a full CSV table back into text, using the given delimiter\n   character.  Quoted/unquoted formatting of the original is preserved.\n   The Boolean argument is to repair fields containing newlines, by\n   replacing the nl with a space.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "ppDSVTable",
          "package": "lazy-csv",
          "signature": "Bool -\u003e Char -\u003e CSVTable -\u003e String",
          "source": "src/Text-CSV-Lazy-String.html#ppDSVTable",
          "type": "function"
        },
        "index": {
          "description": "Turn full CSV table back into text using the given delimiter character Quoted unquoted formatting of the original is preserved The Boolean argument is to repair fields containing newlines by replacing the nl with space",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "ppDSVTable",
          "normalized": "Bool-\u003eChar-\u003eCSVTable-\u003eString",
          "package": "lazy-csv",
          "partial": "DSVTable",
          "signature": "Bool-\u003eChar-\u003eCSVTable-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppDSVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect and/or re-arrange columns from a CSV table, based on names in the\n   header row of the table.  The original header row is re-arranged too.\n   The result is either a list of column names that were not present, or\n   the (possibly re-arranged) sub-table.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "selectFields",
          "package": "lazy-csv",
          "signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
          "source": "src/Text-CSV-Lazy-String.html#selectFields",
          "type": "function"
        },
        "index": {
          "description": "Select and or re-arrange columns from CSV table based on names in the header row of the table The original header row is re-arranged too The result is either list of column names that were not present or the possibly re-arranged sub-table",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "selectFields",
          "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "package": "lazy-csv",
          "partial": "Fields",
          "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:selectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a simple list of lists into a CSVTable by the addition of\n   logical locations.  (Textual locations are not so useful.)\n   Rows of varying lengths generate errors.  Fields that need\n   quotation marks are automatically marked as such.\n\u003c/p\u003e",
          "module": "Text.CSV.Lazy.String",
          "name": "toCSVTable",
          "package": "lazy-csv",
          "signature": "[[String]] -\u003e ([CSVError], CSVTable)",
          "source": "src/Text-CSV-Lazy-String.html#toCSVTable",
          "type": "function"
        },
        "index": {
          "description": "Convert simple list of lists into CSVTable by the addition of logical locations Textual locations are not so useful Rows of varying lengths generate errors Fields that need quotation marks are automatically marked as such",
          "hierarchy": "Text CSV Lazy String",
          "module": "Text.CSV.Lazy.String",
          "name": "toCSVTable",
          "normalized": "[[String]]-\u003e([CSVError],CSVTable)",
          "package": "lazy-csv",
          "partial": "CSVTable",
          "signature": "[[String]]-\u003e([CSVError],CSVTable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:toCSVTable"
      }
    }
  ]
]