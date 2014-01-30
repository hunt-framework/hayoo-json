[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module parses and dumps documents that are formatted more or\n   less according to RFC 4180, \"Common Format and MIME Type for\n   Comma-Separated Values (CSV) Files\",\n   \u003ca\u003ehttp://www.rfc-editor.org/rfc/rfc4180.txt\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere are some issues with this RFC. I will describe what these\n   issues are and how I deal with them.\n\u003c/p\u003e\u003cp\u003eFirst, the RFC prescribes CRLF standard network line breaks, but\n   you are likely to run across CSV files with other line endings, so\n   we accept any sequence of CRs and LFs as a line break. \n\u003c/p\u003e\u003cp\u003eSecond, there is an optional header line, but the format for the\n   header line is exactly like a regular record and you can only\n   figure out whether it exists from the mime type, which may not be\n   available. I ignore the issues of header lines and simply turn them\n   into regular records.\n\u003c/p\u003e\u003cp\u003eThird, there is an inconsistency, in that the formal grammar\n   specifies that fields can contain only certain US ASCII characters,\n   but the specification of the MIME type allows for other character\n   sets. I will allow all characters in fields, except for commas, CRs\n   and LFs in unquoted fields. This should make it possible to parse\n   CSV files in any encoding, but it allows for characters such as\n   tabs that the RFC may be interpreted to forbid even in non-US-ASCII\n   character sets. \n\u003c/p\u003e\u003cp\u003eNOTE: Several people have asked me to implement extensions that are\n   used in non-US versions Microsoft Excel. This library implements\n   RFC-compliant CSV, not Microsoft Excel CSV. If you want to write a\n   library that deals with the CSV-like formats used by non-US versions\n   of Excel or any other software, you should write a separate library. I\n   suggest you call it Text.SSV, for \u003ca\u003eSomething Separated Values.\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "module",
        "fct-source": "src/Text-CSV.html",
        "fct-type": "module",
        "title": "CSV"
      },
      "index": {
        "description": "This module parses and dumps documents that are formatted more or less according to RFC Common Format and MIME Type for Comma-Separated Values CSV Files http www.rfc-editor.org rfc rfc4180.txt There are some issues with this RFC will describe what these issues are and how deal with them First the RFC prescribes CRLF standard network line breaks but you are likely to run across CSV files with other line endings so we accept any sequence of CRs and LFs as line break Second there is an optional header line but the format for the header line is exactly like regular record and you can only figure out whether it exists from the mime type which may not be available ignore the issues of header lines and simply turn them into regular records Third there is an inconsistency in that the formal grammar specifies that fields can contain only certain US ASCII characters but the specification of the MIME type allows for other character sets will allow all characters in fields except for commas CRs and LFs in unquoted fields This should make it possible to parse CSV files in any encoding but it allows for characters such as tabs that the RFC may be interpreted to forbid even in non-US-ASCII character sets NOTE Several people have asked me to implement extensions that are used in non-US versions Microsoft Excel This library implements RFC-compliant CSV not Microsoft Excel CSV If you want to write library that deals with the CSV-like formats used by non-US versions of Excel or any other software you should write separate library suggest you call it Text.SSV for Something Separated Values",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "CSV",
        "normalized": "",
        "package": "csv",
        "partial": "CSV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#t:CSV",
      "description": {
        "fct-descr": "\u003cp\u003eA CSV file is a series of records. According to the RFC, the\n records all have to have the same length. As an extension, I\n allow variable length records.\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV.html#CSV",
        "fct-type": "type",
        "title": "CSV"
      },
      "index": {
        "description": "CSV file is series of records According to the RFC the records all have to have the same length As an extension allow variable length records",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "CSV",
        "normalized": "",
        "package": "csv",
        "partial": "CSV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA field is a string\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "field is string",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "Field",
        "normalized": "",
        "package": "csv",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eA record is a series of fields\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "type",
        "fct-source": "src/Text-CSV.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "record is series of fields",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "Record",
        "normalized": "",
        "package": "csv",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#v:csv",
      "description": {
        "fct-descr": "\u003cp\u003eA Parsec parser for parsing CSV files\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "Parser CSV",
        "fct-source": "src/Text-CSV.html#csv",
        "fct-type": "function",
        "title": "csv"
      },
      "index": {
        "description": "Parsec parser for parsing CSV files",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "csv",
        "normalized": "",
        "package": "csv",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#v:parseCSV",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a file name (used only for error messages) and a string to\n parse, run the parser.\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "FilePath -\u003e String -\u003e Either ParseError CSV",
        "fct-source": "src/Text-CSV.html#parseCSV",
        "fct-type": "function",
        "title": "parseCSV"
      },
      "index": {
        "description": "Given file name used only for error messages and string to parse run the parser",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "parseCSV",
        "normalized": "FilePath-\u003eString-\u003eEither ParseError CSV",
        "package": "csv",
        "partial": "CSV",
        "signature": "FilePath-\u003eString-\u003eEither ParseError CSV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#v:parseCSVFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a file name, read from that file and run the parser\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "FilePath -\u003e IO (Either ParseError CSV)",
        "fct-source": "src/Text-CSV.html#parseCSVFromFile",
        "fct-type": "function",
        "title": "parseCSVFromFile"
      },
      "index": {
        "description": "Given file name read from that file and run the parser",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "parseCSVFromFile",
        "normalized": "FilePath-\u003eIO(Either ParseError CSV)",
        "package": "csv",
        "partial": "CSVFrom File",
        "signature": "FilePath-\u003eIO(Either ParseError CSV)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#v:parseCSVTest",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a string, run the parser, and print the result on stdout.\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Text-CSV.html#parseCSVTest",
        "fct-type": "function",
        "title": "parseCSVTest"
      },
      "index": {
        "description": "Given string run the parser and print the result on stdout",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "parseCSVTest",
        "normalized": "String-\u003eIO()",
        "package": "csv",
        "partial": "CSVTest",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csv/docs/Text-CSV.html#v:printCSV",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an object of type CSV, generate a CSV formatted\n string. Always uses escaped fields.\n\u003c/p\u003e",
        "fct-module": "Text.CSV",
        "fct-package": "csv",
        "fct-signature": "CSV -\u003e String",
        "fct-source": "src/Text-CSV.html#printCSV",
        "fct-type": "function",
        "title": "printCSV"
      },
      "index": {
        "description": "Given an object of type CSV generate CSV formatted string Always uses escaped fields",
        "hierarchy": "Text CSV",
        "module": "Text.CSV",
        "name": "printCSV",
        "normalized": "CSV-\u003eString",
        "package": "csv",
        "partial": "CSV",
        "signature": "CSV-\u003eString"
      }
    }
  }
]