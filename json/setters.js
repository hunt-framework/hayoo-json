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
        "word": "setters"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Puts",
          "name": "Puts",
          "package": "setters",
          "source": "src/Control-Monad-State-Puts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad State Puts",
          "module": "Control.Monad.State.Puts",
          "name": "Puts",
          "package": "setters",
          "partial": "Puts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/setters/docs/Control-Monad-State-Puts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts is just an opposite to gets.\n Compare `x \u003c- gets field' with `puts setField newValue'.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Puts",
          "name": "puts",
          "package": "setters",
          "signature": "(a -\u003e s -\u003e s) -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-State-Puts.html#puts",
          "type": "function"
        },
        "index": {
          "description": "Puts is just an opposite to gets Compare gets field with puts setField newValue",
          "hierarchy": "Control Monad State Puts",
          "module": "Control.Monad.State.Puts",
          "name": "puts",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ec()",
          "package": "setters",
          "signature": "(a-\u003es-\u003es)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/setters/docs/Control-Monad-State-Puts.html#v:puts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Setters",
          "name": "Setters",
          "package": "setters",
          "source": "src/Data-Setters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Setters",
          "module": "Data.Setters",
          "name": "Setters",
          "package": "setters",
          "partial": "Setters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare setters for all fields of given `data' type.\n For example, for \n\u003c/p\u003e\u003cpre\u003e data Record = Record {\n       ...\n       someField :: Integer,\n       ... }\n\u003c/pre\u003e\u003cp\u003eone will automatically get\n\u003c/p\u003e\u003cpre\u003e someField :: Record -\u003e Integer.\n\u003c/pre\u003e\u003cp\u003eAfter calling\n\u003c/p\u003e\u003cpre\u003e $(declareSetters ''Record)\n\u003c/pre\u003e\u003cp\u003eone will get\n\u003c/p\u003e\u003cpre\u003e setSomeField :: Integer -\u003e Record -\u003e Record.\n\u003c/pre\u003e",
          "module": "Data.Setters",
          "name": "declareSetters",
          "package": "setters",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Setters.html#declareSetters",
          "type": "function"
        },
        "index": {
          "description": "Declare setters for all fields of given data type For example for data Record Record someField Integer one will automatically get someField Record Integer After calling declareSetters Record one will get setSomeField Integer Record Record",
          "hierarchy": "Data Setters",
          "module": "Data.Setters",
          "name": "declareSetters",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "setters",
          "partial": "Setters",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#v:declareSetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edeclareSetters\u003c/a\u003e\u003c/code\u003e, but add data type name to all setters' names.\n For example, one will get \u003ccode\u003esetRecordSomeField\u003c/code\u003e instead of \u003ccode\u003esetSomeField\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Setters",
          "name": "declareSetters'",
          "package": "setters",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Setters.html#declareSetters%27",
          "type": "function"
        },
        "index": {
          "description": "Similar to declareSetters but add data type name to all setters names For example one will get setRecordSomeField instead of setSomeField",
          "hierarchy": "Data Setters",
          "module": "Data.Setters",
          "name": "declareSetters'",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "setters",
          "partial": "Setters'",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#v:declareSetters-39-"
      }
    }
  ]
]