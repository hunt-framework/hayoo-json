[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate instances for converting lists of strings to records.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RowRecord.TH",
        "fct-package": "rowrecord",
        "fct-signature": "module",
        "fct-source": "src/Text-RowRecord-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Generate instances for converting lists of strings to records",
        "hierarchy": "Text RowRecord TH",
        "module": "Text.RowRecord.TH",
        "name": "TH",
        "normalized": "",
        "package": "rowrecord",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord-TH.html#v:rowRecords",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance for each of the named types.\n\u003c/p\u003e\u003cp\u003eEach type must have exactly one constructor, in record style.\n\u003c/p\u003e\u003cp\u003eColumn names are derived from the record field names by dropping the first\n \u003ccode\u003e'_'\u003c/code\u003e-separated component.  This allows for a prefix to disambiguate record\n labels between types.\n\u003c/p\u003e\u003cp\u003eFor example, with\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo\n   { f_bar :: String\n   , f_baz :: Int }\n $(rowRecords [''Foo])\n\u003c/pre\u003e\u003cp\u003ewe can parse files of the form\n\u003c/p\u003e\u003cpre\u003e bar,baz\n abc,3\n def,5\n\u003c/pre\u003e\u003cp\u003eassuming an appropriate CSV parser.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord.TH",
        "fct-package": "rowrecord",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Text-RowRecord-TH.html#rowRecords",
        "fct-type": "function",
        "title": "rowRecords"
      },
      "index": {
        "description": "Generate ParseRow instance for each of the named types Each type must have exactly one constructor in record style Column names are derived from the record field names by dropping the first separated component This allows for prefix to disambiguate record labels between types For example with data Foo Foo bar String baz Int rowRecords Foo we can parse files of the form bar baz abc def assuming an appropriate CSV parser",
        "hierarchy": "Text RowRecord TH",
        "module": "Text.RowRecord.TH",
        "name": "rowRecords",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "rowrecord",
        "partial": "Records",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert lists of strings to records.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "module",
        "fct-source": "src/Text-RowRecord.html",
        "fct-type": "module",
        "title": "RowRecord"
      },
      "index": {
        "description": "Convert lists of strings to records",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "RowRecord",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Row Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Column",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies a column.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "type",
        "fct-source": "src/Text-RowRecord.html#Column",
        "fct-type": "type",
        "title": "Column"
      },
      "index": {
        "description": "Identifies column",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Column",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eClass of field types which can be decoded from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe input can be \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to represent a missing field.\n The instance \u003ccode\u003eField a =\u003e Field (Maybe a)\u003c/code\u003e models optional fields.\n\u003c/p\u003e\u003cp\u003eIf your record contains custom types, you must create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n instance for each.  If you have base types but need different \n parsing behavior, you can use a \u003ccode\u003enewtype\u003c/code\u003e wrapper.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "class",
        "fct-source": "src/Text-RowRecord.html#Field",
        "fct-type": "class",
        "title": "Field"
      },
      "index": {
        "description": "Class of field types which can be decoded from String The input can be Nothing to represent missing field The instance Field Field Maybe models optional fields If your record contains custom types you must create Field instance for each If you have base types but need different parsing behavior you can use newtype wrapper",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Field",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:ParseRow",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types which can be parsed from a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n These types are typically single-constructor records.\n\u003c/p\u003e\u003cp\u003eInstances may be generated using \u003ccode\u003eText.RowRecord.TH\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "class",
        "fct-source": "src/Text-RowRecord.html#ParseRow",
        "fct-type": "class",
        "title": "ParseRow"
      },
      "index": {
        "description": "Class of types which can be parsed from Row These types are typically single-constructor records Instances may be generated using Text.RowRecord.TH",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "ParseRow",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Parse Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eA parse result.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "data",
        "fct-source": "src/Text-RowRecord.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "parse result",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Result",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Row",
      "description": {
        "fct-descr": "\u003cp\u003eA row of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "type",
        "fct-source": "src/Text-RowRecord.html#Row",
        "fct-type": "type",
        "title": "Row"
      },
      "index": {
        "description": "row of String data",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Row",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:RowError",
      "description": {
        "fct-descr": "\u003cp\u003ePossible errors from parsing a row.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "data",
        "fct-source": "src/Text-RowRecord.html#RowError",
        "fct-type": "data",
        "title": "RowError"
      },
      "index": {
        "description": "Possible errors from parsing row",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "RowError",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Row Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eA table.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "type",
        "fct-source": "src/Text-RowRecord.html#Table",
        "fct-type": "type",
        "title": "Table"
      },
      "index": {
        "description": "table",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Table",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:Failure",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Failure RowError",
        "fct-source": "src/Text-RowRecord.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Failure",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:MissingField",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "MissingField Column",
        "fct-source": "src/Text-RowRecord.html#RowError",
        "fct-type": "function",
        "title": "MissingField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "MissingField",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Missing Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:NoParse",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "NoParse Column String",
        "fct-source": "src/Text-RowRecord.html#RowError",
        "fct-type": "function",
        "title": "NoParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "NoParse",
        "normalized": "",
        "package": "rowrecord",
        "partial": "No Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:Success",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Success a",
        "fct-source": "src/Text-RowRecord.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "Success",
        "normalized": "",
        "package": "rowrecord",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:decode",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Maybe String -\u003e Result a",
        "fct-source": "src/Text-RowRecord.html#decode",
        "fct-type": "method",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "decode",
        "normalized": "Maybe String-\u003eResult a",
        "package": "rowrecord",
        "partial": "",
        "signature": "Maybe String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:fromStrings",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e rows into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n Uses the first row as column names.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "[[String]] -\u003e Result Table",
        "fct-source": "src/Text-RowRecord.html#fromStrings",
        "fct-type": "function",
        "title": "fromStrings"
      },
      "index": {
        "description": "Convert list of String rows into Table Uses the first row as column names",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "fromStrings",
        "normalized": "[[String]]-\u003eResult Table",
        "package": "rowrecord",
        "partial": "Strings",
        "signature": "[[String]]-\u003eResult Table"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a field by column name.\n\u003c/p\u003e\u003cp\u003eCalled from TH-generated code, but may be\n useful independently.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Column -\u003e Row -\u003e Result a",
        "fct-source": "src/Text-RowRecord.html#getField",
        "fct-type": "function",
        "title": "getField"
      },
      "index": {
        "description": "Decode field by column name Called from TH-generated code but may be useful independently",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "getField",
        "normalized": "Column-\u003eRow-\u003eResult a",
        "package": "rowrecord",
        "partial": "Field",
        "signature": "Column-\u003eRow-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:parseRow",
      "description": {
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Row -\u003e Result a",
        "fct-source": "src/Text-RowRecord.html#parseRow",
        "fct-type": "method",
        "title": "parseRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "parseRow",
        "normalized": "Row-\u003eResult a",
        "package": "rowrecord",
        "partial": "Row",
        "signature": "Row-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:parseTable",
      "description": {
        "fct-descr": "\u003cp\u003eParse a whole table.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "Table -\u003e Result [a]",
        "fct-source": "src/Text-RowRecord.html#parseTable",
        "fct-type": "function",
        "title": "parseTable"
      },
      "index": {
        "description": "Parse whole table",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "parseTable",
        "normalized": "Table-\u003eResult[a]",
        "package": "rowrecord",
        "partial": "Table",
        "signature": "Table-\u003eResult[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003eImplement \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for a required field.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "(String -\u003e Maybe a) -\u003e Maybe String -\u003e Result a",
        "fct-source": "src/Text-RowRecord.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "Implement decode for required field",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "require",
        "normalized": "(String-\u003eMaybe a)-\u003eMaybe String-\u003eResult a",
        "package": "rowrecord",
        "partial": "",
        "signature": "(String-\u003eMaybe a)-\u003eMaybe String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:safeRead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.RowRecord",
        "fct-package": "rowrecord",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Text-RowRecord.html#safeRead",
        "fct-type": "function",
        "title": "safeRead"
      },
      "index": {
        "description": "read in Maybe",
        "hierarchy": "Text RowRecord",
        "module": "Text.RowRecord",
        "name": "safeRead",
        "normalized": "String-\u003eMaybe a",
        "package": "rowrecord",
        "partial": "Read",
        "signature": "String-\u003eMaybe a"
      }
    }
  }
]