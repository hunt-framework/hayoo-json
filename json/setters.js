[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/setters/docs/Control-Monad-State-Puts.html#",
      "description": {
        "fct-module": "Control.Monad.State.Puts",
        "fct-package": "setters",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Puts.html",
        "fct-type": "module",
        "title": "Puts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad State Puts",
        "module": "Control.Monad.State.Puts",
        "name": "Puts",
        "normalized": "",
        "package": "setters",
        "partial": "Puts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/setters/docs/Control-Monad-State-Puts.html#v:puts",
      "description": {
        "fct-descr": "\u003cp\u003ePuts is just an opposite to gets.\n Compare `x \u003c- gets field' with `puts setField newValue'.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Puts",
        "fct-package": "setters",
        "fct-signature": "(a -\u003e s -\u003e s) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Puts.html#puts",
        "fct-type": "function",
        "title": "puts"
      },
      "index": {
        "description": "Puts is just an opposite to gets Compare gets field with puts setField newValue",
        "hierarchy": "Control Monad State Puts",
        "module": "Control.Monad.State.Puts",
        "name": "puts",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ec()",
        "package": "setters",
        "partial": "",
        "signature": "(a-\u003es-\u003es)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#",
      "description": {
        "fct-module": "Data.Setters",
        "fct-package": "setters",
        "fct-signature": "module",
        "fct-source": "src/Data-Setters.html",
        "fct-type": "module",
        "title": "Setters"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Setters",
        "module": "Data.Setters",
        "name": "Setters",
        "normalized": "",
        "package": "setters",
        "partial": "Setters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#v:declareSetters",
      "description": {
        "fct-descr": "\u003cp\u003eDeclare setters for all fields of given `data' type.\n For example, for \n\u003c/p\u003e\u003cpre\u003e data Record = Record {\n       ...\n       someField :: Integer,\n       ... }\n\u003c/pre\u003e\u003cp\u003eone will automatically get\n\u003c/p\u003e\u003cpre\u003e someField :: Record -\u003e Integer.\n\u003c/pre\u003e\u003cp\u003eAfter calling\n\u003c/p\u003e\u003cpre\u003e $(declareSetters ''Record)\n\u003c/pre\u003e\u003cp\u003eone will get\n\u003c/p\u003e\u003cpre\u003e setSomeField :: Integer -\u003e Record -\u003e Record.\n\u003c/pre\u003e",
        "fct-module": "Data.Setters",
        "fct-package": "setters",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Setters.html#declareSetters",
        "fct-type": "function",
        "title": "declareSetters"
      },
      "index": {
        "description": "Declare setters for all fields of given data type For example for data Record Record someField Integer one will automatically get someField Record Integer After calling declareSetters Record one will get setSomeField Integer Record Record",
        "hierarchy": "Data Setters",
        "module": "Data.Setters",
        "name": "declareSetters",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "setters",
        "partial": "Setters",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/setters/docs/Data-Setters.html#v:declareSetters-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edeclareSetters\u003c/a\u003e\u003c/code\u003e, but add data type name to all setters' names.\n For example, one will get \u003ccode\u003esetRecordSomeField\u003c/code\u003e instead of \u003ccode\u003esetSomeField\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Setters",
        "fct-package": "setters",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Setters.html#declareSetters%27",
        "fct-type": "function",
        "title": "declareSetters'"
      },
      "index": {
        "description": "Similar to declareSetters but add data type name to all setters names For example one will get setRecordSomeField instead of setSomeField",
        "hierarchy": "Data Setters",
        "module": "Data.Setters",
        "name": "declareSetters'",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "setters",
        "partial": "Setters'",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  }
]