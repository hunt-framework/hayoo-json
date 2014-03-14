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
        "word": "rowrecord"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate instances for converting lists of strings to records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RowRecord.TH",
          "name": "TH",
          "package": "rowrecord",
          "source": "src/Text-RowRecord-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Generate instances for converting lists of strings to records",
          "hierarchy": "Text RowRecord TH",
          "module": "Text.RowRecord.TH",
          "name": "TH",
          "package": "rowrecord",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance for each of the named types.\n\u003c/p\u003e\u003cp\u003eEach type must have exactly one constructor, in record style.\n\u003c/p\u003e\u003cp\u003eColumn names are derived from the record field names by dropping the first\n \u003ccode\u003e'_'\u003c/code\u003e-separated component.  This allows for a prefix to disambiguate record\n labels between types.\n\u003c/p\u003e\u003cp\u003eFor example, with\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo\n   { f_bar :: String\n   , f_baz :: Int }\n $(rowRecords [''Foo])\n\u003c/pre\u003e\u003cp\u003ewe can parse files of the form\n\u003c/p\u003e\u003cpre\u003e bar,baz\n abc,3\n def,5\n\u003c/pre\u003e\u003cp\u003eassuming an appropriate CSV parser.\n\u003c/p\u003e",
          "module": "Text.RowRecord.TH",
          "name": "rowRecords",
          "package": "rowrecord",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Text-RowRecord-TH.html#rowRecords",
          "type": "function"
        },
        "index": {
          "description": "Generate ParseRow instance for each of the named types Each type must have exactly one constructor in record style Column names are derived from the record field names by dropping the first separated component This allows for prefix to disambiguate record labels between types For example with data Foo Foo bar String baz Int rowRecords Foo we can parse files of the form bar baz abc def assuming an appropriate CSV parser",
          "hierarchy": "Text RowRecord TH",
          "module": "Text.RowRecord.TH",
          "name": "rowRecords",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "rowrecord",
          "partial": "Records",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord-TH.html#v:rowRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert lists of strings to records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RowRecord",
          "name": "RowRecord",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html",
          "type": "module"
        },
        "index": {
          "description": "Convert lists of strings to records",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "RowRecord",
          "package": "rowrecord",
          "partial": "Row Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a column.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "Column",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#Column",
          "type": "type"
        },
        "index": {
          "description": "Identifies column",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Column",
          "package": "rowrecord",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of field types which can be decoded from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe input can be \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to represent a missing field.\n The instance \u003ccode\u003eField a =\u003e Field (Maybe a)\u003c/code\u003e models optional fields.\n\u003c/p\u003e\u003cp\u003eIf your record contains custom types, you must create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n instance for each.  If you have base types but need different \n parsing behavior, you can use a \u003ccode\u003enewtype\u003c/code\u003e wrapper.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "Field",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#Field",
          "type": "class"
        },
        "index": {
          "description": "Class of field types which can be decoded from String The input can be Nothing to represent missing field The instance Field Field Maybe models optional fields If your record contains custom types you must create Field instance for each If you have base types but need different parsing behavior you can use newtype wrapper",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Field",
          "package": "rowrecord",
          "partial": "Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types which can be parsed from a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n These types are typically single-constructor records.\n\u003c/p\u003e\u003cp\u003eInstances may be generated using \u003ccode\u003eText.RowRecord.TH\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "ParseRow",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#ParseRow",
          "type": "class"
        },
        "index": {
          "description": "Class of types which can be parsed from Row These types are typically single-constructor records Instances may be generated using Text.RowRecord.TH",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "ParseRow",
          "package": "rowrecord",
          "partial": "Parse Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:ParseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parse result.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "Result",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#Result",
          "type": "data"
        },
        "index": {
          "description": "parse result",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Result",
          "package": "rowrecord",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA row of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "Row",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#Row",
          "type": "type"
        },
        "index": {
          "description": "row of String data",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Row",
          "package": "rowrecord",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible errors from parsing a row.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "RowError",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#RowError",
          "type": "data"
        },
        "index": {
          "description": "Possible errors from parsing row",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "RowError",
          "package": "rowrecord",
          "partial": "Row Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:RowError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "Table",
          "package": "rowrecord",
          "source": "src/Text-RowRecord.html#Table",
          "type": "type"
        },
        "index": {
          "description": "table",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Table",
          "package": "rowrecord",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "Failure",
          "package": "rowrecord",
          "signature": "Failure RowError",
          "source": "src/Text-RowRecord.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Failure",
          "package": "rowrecord",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "MissingField",
          "package": "rowrecord",
          "signature": "MissingField Column",
          "source": "src/Text-RowRecord.html#RowError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "MissingField",
          "package": "rowrecord",
          "partial": "Missing Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:MissingField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "NoParse",
          "package": "rowrecord",
          "signature": "NoParse Column String",
          "source": "src/Text-RowRecord.html#RowError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "NoParse",
          "package": "rowrecord",
          "partial": "No Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:NoParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "Success",
          "package": "rowrecord",
          "signature": "Success a",
          "source": "src/Text-RowRecord.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "Success",
          "package": "rowrecord",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "decode",
          "package": "rowrecord",
          "signature": "Maybe String -\u003e Result a",
          "source": "src/Text-RowRecord.html#decode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "decode",
          "normalized": "Maybe String-\u003eResult a",
          "package": "rowrecord",
          "signature": "Maybe String-\u003eResult a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e rows into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n Uses the first row as column names.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "fromStrings",
          "package": "rowrecord",
          "signature": "[[String]] -\u003e Result Table",
          "source": "src/Text-RowRecord.html#fromStrings",
          "type": "function"
        },
        "index": {
          "description": "Convert list of String rows into Table Uses the first row as column names",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "fromStrings",
          "normalized": "[[String]]-\u003eResult Table",
          "package": "rowrecord",
          "partial": "Strings",
          "signature": "[[String]]-\u003eResult Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:fromStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a field by column name.\n\u003c/p\u003e\u003cp\u003eCalled from TH-generated code, but may be\n useful independently.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "getField",
          "package": "rowrecord",
          "signature": "Column -\u003e Row -\u003e Result a",
          "source": "src/Text-RowRecord.html#getField",
          "type": "function"
        },
        "index": {
          "description": "Decode field by column name Called from TH-generated code but may be useful independently",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "getField",
          "normalized": "Column-\u003eRow-\u003eResult a",
          "package": "rowrecord",
          "partial": "Field",
          "signature": "Column-\u003eRow-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RowRecord",
          "name": "parseRow",
          "package": "rowrecord",
          "signature": "Row -\u003e Result a",
          "source": "src/Text-RowRecord.html#parseRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "parseRow",
          "normalized": "Row-\u003eResult a",
          "package": "rowrecord",
          "partial": "Row",
          "signature": "Row-\u003eResult a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:parseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a whole table.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "parseTable",
          "package": "rowrecord",
          "signature": "Table -\u003e Result [a]",
          "source": "src/Text-RowRecord.html#parseTable",
          "type": "function"
        },
        "index": {
          "description": "Parse whole table",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "parseTable",
          "normalized": "Table-\u003eResult[a]",
          "package": "rowrecord",
          "partial": "Table",
          "signature": "Table-\u003eResult[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:parseTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for a required field.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "require",
          "package": "rowrecord",
          "signature": "(String -\u003e Maybe a) -\u003e Maybe String -\u003e Result a",
          "source": "src/Text-RowRecord.html#require",
          "type": "function"
        },
        "index": {
          "description": "Implement decode for required field",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "require",
          "normalized": "(String-\u003eMaybe a)-\u003eMaybe String-\u003eResult a",
          "package": "rowrecord",
          "signature": "(String-\u003eMaybe a)-\u003eMaybe String-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.RowRecord",
          "name": "safeRead",
          "package": "rowrecord",
          "signature": "String -\u003e Maybe a",
          "source": "src/Text-RowRecord.html#safeRead",
          "type": "function"
        },
        "index": {
          "description": "read in Maybe",
          "hierarchy": "Text RowRecord",
          "module": "Text.RowRecord",
          "name": "safeRead",
          "normalized": "String-\u003eMaybe a",
          "package": "rowrecord",
          "partial": "Read",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rowrecord/docs/Text-RowRecord.html#v:safeRead"
      }
    }
  ]
]