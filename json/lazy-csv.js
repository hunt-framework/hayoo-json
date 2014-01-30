[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CSV (comma-separated value) format is defined by RFC 4180,\n   \"Common Format and MIME Type for Comma-Separated Values (CSV) Files\",\n   \u003ca\u003ehttp://www.rfc-editor.org/rfc/rfc4180.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis lazy parser can report all CSV formatting errors, whilst also\n   returning all the valid data, so the user can choose whether to\n   continue, to show warnings, or to halt on error.\n\u003c/p\u003e\u003cp\u003eValid fields retain information about their original location in the\n   input, so a secondary parser from textual fields to typed values\n   can give intelligent error messages.\n\u003c/p\u003e\u003cp\u003eIn a valid CSV file, all rows must have the same number of columns.\n   This parser will flag a row with the wrong number of columns as a error.\n   (But the error type contains the actual data, so the user can recover\n   it if desired.)  Completely blank lines are also treated as errors,\n   and again the user is free either to filter these out or convert them\n   to a row of actual null fields.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "module",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "The CSV comma-separated value format is defined by RFC Common Format and MIME Type for Comma-Separated Values CSV Files http www.rfc-editor.org rfc rfc4180.txt This lazy parser can report all CSV formatting errors whilst also returning all the valid data so the user can choose whether to continue to show warnings or to halt on error Valid fields retain information about their original location in the input so secondary parser from textual fields to typed values can give intelligent error messages In valid CSV file all rows must have the same number of columns This parser will flag row with the wrong number of columns as error But the error type contains the actual data so the user can recover it if desired Completely blank lines are also treated as errors and again the user is free either to filter these out or convert them to row of actual null fields",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVError",
      "description": {
        "fct-descr": "\u003cp\u003eA structured error type for CSV formatting mistakes.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "data",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "data",
        "title": "CSVError"
      },
      "index": {
        "description": "structured error type for CSV formatting mistakes",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVField",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV field's content is stored with its logical row and column number,\n   as well as its textual extent.  This information is necessary if you\n   want to generate good error messages in a secondary parsing stage,\n   should you choose to convert the textual fields to typed data values.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "data",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "data",
        "title": "CSVField"
      },
      "index": {
        "description": "CSV field content is stored with its logical row and column number as well as its textual extent This information is necessary if you want to generate good error messages in secondary parsing stage should you choose to convert the textual fields to typed data values",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of parsing a CSV input is a mixed collection of errors\n   and valid rows.  This way of representing things is crucial to the\n   ability to parse lazily whilst still catching format errors.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVResult",
        "fct-type": "type",
        "title": "CSVResult"
      },
      "index": {
        "description": "The result of parsing CSV input is mixed collection of errors and valid rows This way of representing things is crucial to the ability to parse lazily whilst still catching format errors",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVResult",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVRow",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV row is just a sequence of fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVRow",
        "fct-type": "type",
        "title": "CSVRow"
      },
      "index": {
        "description": "CSV row is just sequence of fields",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVRow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#t:CSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV table is a sequence of rows.  All rows have the same number\n   of fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVTable",
        "fct-type": "type",
        "title": "CSVTable"
      },
      "index": {
        "description": "CSV table is sequence of rows All rows have the same number of fields",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVTable",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:BlankLine",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "BlankLine",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "BlankLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "BlankLine",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Blank Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:CSVField",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "CSVField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:CSVFieldError",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVFieldError",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "CSVFieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "CSVFieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:DuplicateHeader",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "DuplicateHeader",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "DuplicateHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "DuplicateHeader",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Duplicate Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:FieldError",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "FieldError",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "FieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "FieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:IncorrectRow",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "IncorrectRow",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "IncorrectRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "IncorrectRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Incorrect Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:NoData",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "NoData",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "NoData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "NoData",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "No Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvColNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvColNum",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Col Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColsActual",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvColsActual"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvColsActual",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Cols Actual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvColsExpected",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvColsExpected"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvColsExpected",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Cols Expected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvDuplicate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!String",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvDuplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvDuplicate",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Duplicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvErrors",
      "description": {
        "fct-descr": "\u003cp\u003eExtract just the errors from a CSV parse.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e [CSVError]",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#csvErrors",
        "fct-type": "function",
        "title": "csvErrors"
      },
      "index": {
        "description": "Extract just the errors from CSV parse",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvErrors",
        "normalized": "CSVResult-\u003e[CSVError]",
        "package": "lazy-csv",
        "partial": "Errors",
        "signature": "CSVResult-\u003e[CSVError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!ByteString",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvFieldContent",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!String",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvFieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFieldQuoted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Bool",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvFieldQuoted",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "[CSVField]",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvFields",
        "normalized": "[CSVField]",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[CSVField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvHeaderSerial",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvHeaderSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvHeaderSerial",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Header Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVError",
        "fct-type": "function",
        "title": "csvRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvRowNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvRowNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvRowNum",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Row Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTable",
      "description": {
        "fct-descr": "\u003cp\u003eExtract just the valid portions of a CSV parse.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#csvTable",
        "fct-type": "function",
        "title": "csvTable"
      },
      "index": {
        "description": "Extract just the valid portions of CSV parse",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvTable",
        "normalized": "CSVResult-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Table",
        "signature": "CSVResult-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTableFull",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the full table, including invalid rows, with padding, and\n   de-duplicated headers.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#csvTableFull",
        "fct-type": "function",
        "title": "csvTableFull"
      },
      "index": {
        "description": "Extract the full table including invalid rows with padding and de-duplicated headers",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvTableFull",
        "normalized": "CSVResult-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Table Full",
        "signature": "CSVResult-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTableHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe header row of the CSV table, assuming it is non-empty.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e [String]",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#csvTableHeader",
        "fct-type": "function",
        "title": "csvTableHeader"
      },
      "index": {
        "description": "The header row of the CSV table assuming it is non-empty",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvTableHeader",
        "normalized": "CSVResult-\u003e[String]",
        "package": "lazy-csv",
        "partial": "Table Header",
        "signature": "CSVResult-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTextEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!(Int, Int)",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvTextEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvTextEnd",
        "normalized": "(Int,Int)",
        "package": "lazy-csv",
        "partial": "Text End",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:csvTextStart",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "!(Int, Int)",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#CSVField",
        "fct-type": "function",
        "title": "csvTextStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "csvTextStart",
        "normalized": "(Int,Int)",
        "package": "lazy-csv",
        "partial": "Text Start",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:expectFields",
      "description": {
        "fct-descr": "\u003cp\u003eValidate that the columns of a table have exactly the names and\n   ordering given in the argument.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#expectFields",
        "fct-type": "function",
        "title": "expectFields"
      },
      "index": {
        "description": "Validate that the columns of table have exactly the names and ordering given in the argument",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "expectFields",
        "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:fromCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a CSV table to a simpler representation, by dropping all\n   the original location information.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e [[ByteString]]",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#fromCSVTable",
        "fct-type": "function",
        "title": "fromCSVTable"
      },
      "index": {
        "description": "Convert CSV table to simpler representation by dropping all the original location information",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "fromCSVTable",
        "normalized": "CSVTable-\u003e[[ByteString]]",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "CSVTable-\u003e[[ByteString]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:joinCSV",
      "description": {
        "fct-descr": "\u003cp\u003eA join operator, adds the columns of two tables together.\n   Precondition: the tables have the same number of rows.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e CSVTable -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#joinCSV",
        "fct-type": "function",
        "title": "joinCSV"
      },
      "index": {
        "description": "join operator adds the columns of two tables together Precondition the tables have the same number of rows",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "joinCSV",
        "normalized": "CSVTable-\u003eCSVTable-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "CSV",
        "signature": "CSVTable-\u003eCSVTable-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:mkCSVField",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a fresh field with the given textual content.\n   The quoting flag is set automatically based on the text.\n   Textual extents are not particularly useful, since there was no original\n   input to refer to.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "Int -\u003e Int -\u003e ByteString -\u003e CSVField",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#mkCSVField",
        "fct-type": "function",
        "title": "mkCSVField"
      },
      "index": {
        "description": "Generate fresh field with the given textual content The quoting flag is set automatically based on the text Textual extents are not particularly useful since there was no original input to refer to",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "mkCSVField",
        "normalized": "Int-\u003eInt-\u003eByteString-\u003eCSVField",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": "Int-\u003eInt-\u003eByteString-\u003eCSVField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:mkEmptyColumn",
      "description": {
        "fct-descr": "\u003cp\u003eA generator for a new CSV column, of arbitrary length.\n   The result can be joined to an existing table if desired.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "String -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#mkEmptyColumn",
        "fct-type": "function",
        "title": "mkEmptyColumn"
      },
      "index": {
        "description": "generator for new CSV column of arbitrary length The result can be joined to an existing table if desired",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "mkEmptyColumn",
        "normalized": "String-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Empty Column",
        "signature": "String-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:parseCSV",
      "description": {
        "fct-descr": "\u003cp\u003eA first-stage parser for CSV (comma-separated values) data.\n   The individual fields remain as text, but errors in CSV formatting\n   are reported.  Errors (containing unrecognisable rows/fields) are\n   interspersed with the valid rows/fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "ByteString -\u003e CSVResult",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#parseCSV",
        "fct-type": "function",
        "title": "parseCSV"
      },
      "index": {
        "description": "first-stage parser for CSV comma-separated values data The individual fields remain as text but errors in CSV formatting are reported Errors containing unrecognisable rows fields are interspersed with the valid rows fields",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "parseCSV",
        "normalized": "ByteString-\u003eCSVResult",
        "package": "lazy-csv",
        "partial": "CSV",
        "signature": "ByteString-\u003eCSVResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:parseDSV",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes CSV is not comma-separated, but delimiter-separated\n   values (DSV).  The choice of delimiter is arbitrary, but semi-colon\n   is common in locales where comma is used as a decimal point, and tab\n   is also common.  The Boolean argument is\n   whether newlines should be accepted within quoted fields.  The CSV RFC\n   says newlines can occur in quotes, but other DSV formats might say\n   otherwise.  You can often get better error messages if newlines are\n   disallowed.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "Bool -\u003e Char -\u003e ByteString -\u003e CSVResult",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#parseDSV",
        "fct-type": "function",
        "title": "parseDSV"
      },
      "index": {
        "description": "Sometimes CSV is not comma-separated but delimiter-separated values DSV The choice of delimiter is arbitrary but semi-colon is common in locales where comma is used as decimal point and tab is also common The Boolean argument is whether newlines should be accepted within quoted fields The CSV RFC says newlines can occur in quotes but other DSV formats might say otherwise You can often get better error messages if newlines are disallowed",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "parseDSV",
        "normalized": "Bool-\u003eChar-\u003eByteString-\u003eCSVResult",
        "package": "lazy-csv",
        "partial": "DSV",
        "signature": "Bool-\u003eChar-\u003eByteString-\u003eCSVResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVError",
      "description": {
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVError -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#ppCSVError",
        "fct-type": "function",
        "title": "ppCSVError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "ppCSVError",
        "normalized": "CSVError-\u003eString",
        "package": "lazy-csv",
        "partial": "CSVError",
        "signature": "CSVError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVField",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-printing for CSV fields, shows positional information in addition\n   to the textual content.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#ppCSVField",
        "fct-type": "function",
        "title": "ppCSVField"
      },
      "index": {
        "description": "Pretty-printing for CSV fields shows positional information in addition to the textual content",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "ppCSVField",
        "normalized": "CSVField-\u003eString",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": "CSVField-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a table back to a lazily-constructed string.  There are lots of\n   possible design decisions one could take, e.g. to re-arrange columns\n   back into something resembling their original order, but here we just\n   take the given table without looking at Row and Field numbers etc.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e ByteString",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#ppCSVTable",
        "fct-type": "function",
        "title": "ppCSVTable"
      },
      "index": {
        "description": "Output table back to lazily-constructed string There are lots of possible design decisions one could take e.g to re-arrange columns back into something resembling their original order but here we just take the given table without looking at Row and Field numbers etc",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "ppCSVTable",
        "normalized": "CSVTable-\u003eByteString",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "CSVTable-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:ppDSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a table back to a lazily-constructed bytestring, using the given\n   delimiter char.  The Boolean argument is to repair fields containing\n   newlines, by replacing the nl with a space.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "Bool -\u003e Char -\u003e CSVTable -\u003e ByteString",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#ppDSVTable",
        "fct-type": "function",
        "title": "ppDSVTable"
      },
      "index": {
        "description": "Output table back to lazily-constructed bytestring using the given delimiter char The Boolean argument is to repair fields containing newlines by replacing the nl with space",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "ppDSVTable",
        "normalized": "Bool-\u003eChar-\u003eCSVTable-\u003eByteString",
        "package": "lazy-csv",
        "partial": "DSVTable",
        "signature": "Bool-\u003eChar-\u003eCSVTable-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:selectFields",
      "description": {
        "fct-descr": "\u003cp\u003eSelect and/or re-arrange columns from a CSV table, based on names in the\n   header row of the table.  The original header row is re-arranged too.\n   The result is either a list of column names that were not present, or\n   the (possibly re-arranged) sub-table.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#selectFields",
        "fct-type": "function",
        "title": "selectFields"
      },
      "index": {
        "description": "Select and or re-arrange columns from CSV table based on names in the header row of the table The original header row is re-arranged too The result is either list of column names that were not present or the possibly re-arranged sub-table",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "selectFields",
        "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-ByteString.html#v:toCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a simple list of lists into a CSVTable by the addition of\n   logical locations.  (Textual locations are not so useful.)\n   Rows of varying lengths generate errors.  Fields that need\n   quotation marks are automatically marked as such.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.ByteString",
        "fct-package": "lazy-csv",
        "fct-signature": "[[ByteString]] -\u003e ([CSVError], CSVTable)",
        "fct-source": "src/Text-CSV-Lazy-ByteString.html#toCSVTable",
        "fct-type": "function",
        "title": "toCSVTable"
      },
      "index": {
        "description": "Convert simple list of lists into CSVTable by the addition of logical locations Textual locations are not so useful Rows of varying lengths generate errors Fields that need quotation marks are automatically marked as such",
        "hierarchy": "Text CSV Lazy ByteString",
        "module": "Text.CSV.Lazy.ByteString",
        "name": "toCSVTable",
        "normalized": "[[ByteString]]-\u003e([CSVError],CSVTable)",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "[[ByteString]]-\u003e([CSVError],CSVTable)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CSV (comma-separated value) format is defined by RFC 4180,\n   \"Common Format and MIME Type for Comma-Separated Values (CSV) Files\",\n   \u003ca\u003ehttp://www.rfc-editor.org/rfc/rfc4180.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis lazy parser can report all CSV formatting errors, whilst also\n   returning all the valid data, so the user can choose whether to\n   continue, to show warnings, or to halt on error.\n\u003c/p\u003e\u003cp\u003eValid fields retain information about their original location in the\n   input, so a secondary parser from textual fields to typed values\n   can give intelligent error messages.\n\u003c/p\u003e\u003cp\u003eIn a valid CSV file, all rows must have the same number of columns.\n   This parser will flag a row with the wrong number of columns as a error.\n   (But the error type contains the actual data, so the user can recover\n   it if desired.)  Completely blank lines are also treated as errors,\n   and again the user is free either to filter these out or convert them\n   to a row of actual null fields.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "module",
        "fct-source": "src/Text-CSV-Lazy-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "The CSV comma-separated value format is defined by RFC Common Format and MIME Type for Comma-Separated Values CSV Files http www.rfc-editor.org rfc rfc4180.txt This lazy parser can report all CSV formatting errors whilst also returning all the valid data so the user can choose whether to continue to show warnings or to halt on error Valid fields retain information about their original location in the input so secondary parser from textual fields to typed values can give intelligent error messages In valid CSV file all rows must have the same number of columns This parser will flag row with the wrong number of columns as error But the error type contains the actual data so the user can recover it if desired Completely blank lines are also treated as errors and again the user is free either to filter these out or convert them to row of actual null fields",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "String",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVError",
      "description": {
        "fct-descr": "\u003cp\u003eA structured error type for CSV formatting mistakes.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "data",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "data",
        "title": "CSVError"
      },
      "index": {
        "description": "structured error type for CSV formatting mistakes",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVField",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV field's content is stored with its logical row and column number,\n   as well as its textual extent.  This information is necessary if you\n   want to generate good error messages in a secondary parsing stage,\n   should you choose to convert the textual fields to typed data values.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "data",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "data",
        "title": "CSVField"
      },
      "index": {
        "description": "CSV field content is stored with its logical row and column number as well as its textual extent This information is necessary if you want to generate good error messages in secondary parsing stage should you choose to convert the textual fields to typed data values",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of parsing a CSV input is a mixed collection of errors\n   and valid rows.  This way of representing things is crucial to the\n   ability to parse lazily whilst still catching format errors.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVResult",
        "fct-type": "type",
        "title": "CSVResult"
      },
      "index": {
        "description": "The result of parsing CSV input is mixed collection of errors and valid rows This way of representing things is crucial to the ability to parse lazily whilst still catching format errors",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVResult",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVRow",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV row is just a sequence of fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVRow",
        "fct-type": "type",
        "title": "CSVRow"
      },
      "index": {
        "description": "CSV row is just sequence of fields",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVRow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#t:CSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV table is a sequence of rows.  All rows have the same number\n   of fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVTable",
        "fct-type": "type",
        "title": "CSVTable"
      },
      "index": {
        "description": "CSV table is sequence of rows All rows have the same number of fields",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVTable",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:BlankLine",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "BlankLine",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "BlankLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "BlankLine",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Blank Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:CSVField",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "CSVField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:CSVFieldError",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVFieldError",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "CSVFieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "CSVFieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "CSVField Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:DuplicateHeader",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "DuplicateHeader",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "DuplicateHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "DuplicateHeader",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Duplicate Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:FieldError",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "FieldError",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "FieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "FieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:IncorrectRow",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "IncorrectRow",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "IncorrectRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "IncorrectRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Incorrect Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:NoData",
      "description": {
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "NoData",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "NoData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "NoData",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "No Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvColNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvColNum",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Col Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColsActual",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvColsActual"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvColsActual",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Cols Actual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvColsExpected",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvColsExpected"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvColsExpected",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Cols Expected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvDuplicate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!String",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvDuplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvDuplicate",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Duplicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvErrors",
      "description": {
        "fct-descr": "\u003cp\u003eExtract just the errors from a CSV parse.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e [CSVError]",
        "fct-source": "src/Text-CSV-Lazy-String.html#csvErrors",
        "fct-type": "function",
        "title": "csvErrors"
      },
      "index": {
        "description": "Extract just the errors from CSV parse",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvErrors",
        "normalized": "CSVResult-\u003e[CSVError]",
        "package": "lazy-csv",
        "partial": "Errors",
        "signature": "CSVResult-\u003e[CSVError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvField",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!String",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvFieldContent",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!String",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvFieldError",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFieldQuoted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Bool",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvFieldQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvFieldQuoted",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Field Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "[CSVField]",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvFields",
        "normalized": "[CSVField]",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[CSVField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvHeaderSerial",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvHeaderSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvHeaderSerial",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Header Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVError",
        "fct-type": "function",
        "title": "csvRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvRow",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvRowNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!Int",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvRowNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvRowNum",
        "normalized": "",
        "package": "lazy-csv",
        "partial": "Row Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTable",
      "description": {
        "fct-descr": "\u003cp\u003eExtract just the valid portions of a CSV parse.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#csvTable",
        "fct-type": "function",
        "title": "csvTable"
      },
      "index": {
        "description": "Extract just the valid portions of CSV parse",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvTable",
        "normalized": "CSVResult-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Table",
        "signature": "CSVResult-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTableFull",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the full table, including invalid rows, repaired with padding.\n   and de-duplicated headers.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#csvTableFull",
        "fct-type": "function",
        "title": "csvTableFull"
      },
      "index": {
        "description": "Extract the full table including invalid rows repaired with padding and de-duplicated headers",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvTableFull",
        "normalized": "CSVResult-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Table Full",
        "signature": "CSVResult-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTableHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThe header row of the CSV table, assuming it is non-empty.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVResult -\u003e [String]",
        "fct-source": "src/Text-CSV-Lazy-String.html#csvTableHeader",
        "fct-type": "function",
        "title": "csvTableHeader"
      },
      "index": {
        "description": "The header row of the CSV table assuming it is non-empty",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvTableHeader",
        "normalized": "CSVResult-\u003e[String]",
        "package": "lazy-csv",
        "partial": "Table Header",
        "signature": "CSVResult-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTextEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!(Int, Int)",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvTextEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvTextEnd",
        "normalized": "(Int,Int)",
        "package": "lazy-csv",
        "partial": "Text End",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:csvTextStart",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "!(Int, Int)",
        "fct-source": "src/Text-CSV-Lazy-String.html#CSVField",
        "fct-type": "function",
        "title": "csvTextStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "csvTextStart",
        "normalized": "(Int,Int)",
        "package": "lazy-csv",
        "partial": "Text Start",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:expectFields",
      "description": {
        "fct-descr": "\u003cp\u003eValidate that the named columns of a table have exactly the names and\n   ordering given in the argument.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#expectFields",
        "fct-type": "function",
        "title": "expectFields"
      },
      "index": {
        "description": "Validate that the named columns of table have exactly the names and ordering given in the argument",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "expectFields",
        "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:fromCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a CSV table to a simpler representation, by dropping all\n   the original location information.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e [[String]]",
        "fct-source": "src/Text-CSV-Lazy-String.html#fromCSVTable",
        "fct-type": "function",
        "title": "fromCSVTable"
      },
      "index": {
        "description": "Convert CSV table to simpler representation by dropping all the original location information",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "fromCSVTable",
        "normalized": "CSVTable-\u003e[[String]]",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "CSVTable-\u003e[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:joinCSV",
      "description": {
        "fct-descr": "\u003cp\u003eA join operator, adds the columns of two tables together.\n   Precondition: the tables have the same number of rows.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e CSVTable -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#joinCSV",
        "fct-type": "function",
        "title": "joinCSV"
      },
      "index": {
        "description": "join operator adds the columns of two tables together Precondition the tables have the same number of rows",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "joinCSV",
        "normalized": "CSVTable-\u003eCSVTable-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "CSV",
        "signature": "CSVTable-\u003eCSVTable-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:mkCSVField",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a fresh field with the given textual content.\n   The quoting flag is set automatically based on the text.\n   Textual extents are not particularly useful, since there was no original\n   input to refer to.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "Int -\u003e Int -\u003e String -\u003e CSVField",
        "fct-source": "src/Text-CSV-Lazy-String.html#mkCSVField",
        "fct-type": "function",
        "title": "mkCSVField"
      },
      "index": {
        "description": "Generate fresh field with the given textual content The quoting flag is set automatically based on the text Textual extents are not particularly useful since there was no original input to refer to",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "mkCSVField",
        "normalized": "Int-\u003eInt-\u003eString-\u003eCSVField",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": "Int-\u003eInt-\u003eString-\u003eCSVField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:mkEmptyColumn",
      "description": {
        "fct-descr": "\u003cp\u003eA generator for a new CSV column, of arbitrary length.\n   The result can be joined to an existing table if desired.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "String -\u003e CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#mkEmptyColumn",
        "fct-type": "function",
        "title": "mkEmptyColumn"
      },
      "index": {
        "description": "generator for new CSV column of arbitrary length The result can be joined to an existing table if desired",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "mkEmptyColumn",
        "normalized": "String-\u003eCSVTable",
        "package": "lazy-csv",
        "partial": "Empty Column",
        "signature": "String-\u003eCSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:parseCSV",
      "description": {
        "fct-descr": "\u003cp\u003eA first-stage parser for CSV (comma-separated values) data.\n   The individual fields remain as text, but errors in CSV formatting\n   are reported.  Errors (containing unrecognisable rows/fields) are\n   interspersed with the valid rows/fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "String -\u003e CSVResult",
        "fct-source": "src/Text-CSV-Lazy-String.html#parseCSV",
        "fct-type": "function",
        "title": "parseCSV"
      },
      "index": {
        "description": "first-stage parser for CSV comma-separated values data The individual fields remain as text but errors in CSV formatting are reported Errors containing unrecognisable rows fields are interspersed with the valid rows fields",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "parseCSV",
        "normalized": "String-\u003eCSVResult",
        "package": "lazy-csv",
        "partial": "CSV",
        "signature": "String-\u003eCSVResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:parseDSV",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes CSV is not comma-separated, but delimiter-separated\n   values (DSV).  The choice of delimiter is arbitrary, but semi-colon\n   is common in locales where comma is used as a decimal point, and tab\n   is also common.  The Boolean argument is\n   whether newlines should be accepted within quoted fields.  The CSV RFC\n   says newlines can occur in quotes, but other DSV formats might say\n   otherwise.  You can often get better error messages if newlines are\n   disallowed.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "Bool -\u003e Char -\u003e String -\u003e CSVResult",
        "fct-source": "src/Text-CSV-Lazy-String.html#parseDSV",
        "fct-type": "function",
        "title": "parseDSV"
      },
      "index": {
        "description": "Sometimes CSV is not comma-separated but delimiter-separated values DSV The choice of delimiter is arbitrary but semi-colon is common in locales where comma is used as decimal point and tab is also common The Boolean argument is whether newlines should be accepted within quoted fields The CSV RFC says newlines can occur in quotes but other DSV formats might say otherwise You can often get better error messages if newlines are disallowed",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "parseDSV",
        "normalized": "Bool-\u003eChar-\u003eString-\u003eCSVResult",
        "package": "lazy-csv",
        "partial": "DSV",
        "signature": "Bool-\u003eChar-\u003eString-\u003eCSVResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVError",
      "description": {
        "fct-descr": "\u003cp\u003eSome pretty-printing for structured CSV errors.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVError -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-String.html#ppCSVError",
        "fct-type": "function",
        "title": "ppCSVError"
      },
      "index": {
        "description": "Some pretty-printing for structured CSV errors",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "ppCSVError",
        "normalized": "CSVError-\u003eString",
        "package": "lazy-csv",
        "partial": "CSVError",
        "signature": "CSVError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVField",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-printing for CSV fields, shows positional information in addition\n   to the textual content.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVField -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-String.html#ppCSVField",
        "fct-type": "function",
        "title": "ppCSVField"
      },
      "index": {
        "description": "Pretty-printing for CSV fields shows positional information in addition to the textual content",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "ppCSVField",
        "normalized": "CSVField-\u003eString",
        "package": "lazy-csv",
        "partial": "CSVField",
        "signature": "CSVField-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a full CSV table back into text, as much like the original\n   input as possible,  e.g. preserving quoted/unquoted format of fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "CSVTable -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-String.html#ppCSVTable",
        "fct-type": "function",
        "title": "ppCSVTable"
      },
      "index": {
        "description": "Turn full CSV table back into text as much like the original input as possible e.g preserving quoted unquoted format of fields",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "ppCSVTable",
        "normalized": "CSVTable-\u003eString",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "CSVTable-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:ppDSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a full CSV table back into text, using the given delimiter\n   character.  Quoted/unquoted formatting of the original is preserved.\n   The Boolean argument is to repair fields containing newlines, by\n   replacing the nl with a space.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "Bool -\u003e Char -\u003e CSVTable -\u003e String",
        "fct-source": "src/Text-CSV-Lazy-String.html#ppDSVTable",
        "fct-type": "function",
        "title": "ppDSVTable"
      },
      "index": {
        "description": "Turn full CSV table back into text using the given delimiter character Quoted unquoted formatting of the original is preserved The Boolean argument is to repair fields containing newlines by replacing the nl with space",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "ppDSVTable",
        "normalized": "Bool-\u003eChar-\u003eCSVTable-\u003eString",
        "package": "lazy-csv",
        "partial": "DSVTable",
        "signature": "Bool-\u003eChar-\u003eCSVTable-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:selectFields",
      "description": {
        "fct-descr": "\u003cp\u003eSelect and/or re-arrange columns from a CSV table, based on names in the\n   header row of the table.  The original header row is re-arranged too.\n   The result is either a list of column names that were not present, or\n   the (possibly re-arranged) sub-table.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "[String] -\u003e CSVTable -\u003e Either [String] CSVTable",
        "fct-source": "src/Text-CSV-Lazy-String.html#selectFields",
        "fct-type": "function",
        "title": "selectFields"
      },
      "index": {
        "description": "Select and or re-arrange columns from CSV table based on names in the header row of the table The original header row is re-arranged too The result is either list of column names that were not present or the possibly re-arranged sub-table",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "selectFields",
        "normalized": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable",
        "package": "lazy-csv",
        "partial": "Fields",
        "signature": "[String]-\u003eCSVTable-\u003eEither[String]CSVTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-csv/docs/Text-CSV-Lazy-String.html#v:toCSVTable",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a simple list of lists into a CSVTable by the addition of\n   logical locations.  (Textual locations are not so useful.)\n   Rows of varying lengths generate errors.  Fields that need\n   quotation marks are automatically marked as such.\n\u003c/p\u003e",
        "fct-module": "Text.CSV.Lazy.String",
        "fct-package": "lazy-csv",
        "fct-signature": "[[String]] -\u003e ([CSVError], CSVTable)",
        "fct-source": "src/Text-CSV-Lazy-String.html#toCSVTable",
        "fct-type": "function",
        "title": "toCSVTable"
      },
      "index": {
        "description": "Convert simple list of lists into CSVTable by the addition of logical locations Textual locations are not so useful Rows of varying lengths generate errors Fields that need quotation marks are automatically marked as such",
        "hierarchy": "Text CSV Lazy String",
        "module": "Text.CSV.Lazy.String",
        "name": "toCSVTable",
        "normalized": "[[String]]-\u003e([CSVError],CSVTable)",
        "package": "lazy-csv",
        "partial": "CSVTable",
        "signature": "[[String]]-\u003e([CSVError],CSVTable)"
      }
    }
  }
]