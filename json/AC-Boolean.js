[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes (and instances) for things that are like Booleans.\n\u003c/p\u003e\u003cp\u003eThe names of methods in \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e clash with the standard Prelude,\n  so you probably want to inport the Prelude hiding these three\n  names (since the class methods do the same thing, but with more\n  general type signatures).\n\u003c/p\u003e\u003cp\u003ePlease note the following points:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This module imports \u003ca\u003eControl.Monad.Instances\u003c/a\u003e, which brings\n    several new \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instances into scope.\n\u003c/li\u003e\u003cli\u003e Among other things, a monad instance for functions is brought\n    into scope. This, combined with the \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e instance for\n    monads, causes any function that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e to become\n    a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e itself. This allows you to write constructions such\n    as \u003ccode\u003e(\u003e 5) && (\u003c 9)\u003c/code\u003e, which has the obvious meaning.\n\u003c/li\u003e\u003cli\u003e Another interesting consequence of the \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e instance for\n    monads is that \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e. You can use\n    this to implement 3-value logic (\"true\", \"false\" and\n    \"other\"), with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e implementing \"other\". Any logical\n    operations yield \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e unless all arguments are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n    something. (This is usually the behaviour you want.)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "module",
        "fct-source": "src/Data-Boolean.html",
        "fct-type": "module",
        "title": "Boolean"
      },
      "index": {
        "description": "Type classes and instances for things that are like Booleans The names of methods in Boolean clash with the standard Prelude so you probably want to inport the Prelude hiding these three names since the class methods do the same thing but with more general type signatures Please note the following points This module imports Control.Monad.Instances which brings several new Monad instances into scope Among other things monad instance for functions is brought into scope This combined with the Boolean instance for monads causes any function that returns Boolean to become Boolean itself This allows you to write constructions such as which has the obvious meaning Another interesting consequence of the Boolean instance for monads is that Maybe Bool is Boolean You can use this to implement value logic true false and other with Nothing implementing other Any logical operations yield Nothing unless all arguments are Just something This is usually the behaviour you want",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "AC-Boolean",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#t:BoolValue",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass for things that have true and false values.\n\u003c/p\u003e\u003cp\u003eInstances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Normal \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values (obviously).\n\u003c/li\u003e\u003cli\u003e Any function that yields a \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e as its result.\n    (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e)\n    This instance arrises due to the monad instance for functions.\n\u003c/li\u003e\u003cli\u003e Any monadic action that yields a \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e as its result.\n    (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#BoolValue",
        "fct-type": "class",
        "title": "BoolValue"
      },
      "index": {
        "description": "Typeclass for things that have true and false values Instances Normal Bool values obviously Any function that yields BoolValue as its result true const True false const False This instance arrises due to the monad instance for functions Any monadic action that yields BoolValue as its result true return True false return False",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "BoolValue",
        "normalized": "",
        "package": "AC-Boolean",
        "partial": "Bool Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#t:Boolean",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass for things that support Boolean operators.\n\u003c/p\u003e\u003cp\u003eInstances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Normal \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values (obviously).\n\u003c/li\u003e\u003cli\u003e Any function that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n    This instance arrises due to the monad instance for functions.\n\u003c/li\u003e\u003cli\u003e Any monadic action that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n    The left action is performed before the right action (which may\n    be significant, depending on the monad).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#Boolean",
        "fct-type": "class",
        "title": "Boolean"
      },
      "index": {
        "description": "Typeclass for things that support Boolean operators Instances Normal Bool values obviously Any function that returns Boolean This instance arrises due to the monad instance for functions Any monadic action that returns Boolean The left action is performed before the right action which may be significant depending on the monad",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "AC-Boolean",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical-OR of two values. (Inclusive-OR.)\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#%7C%7C",
        "fct-type": "method",
        "title": "(||)"
      },
      "index": {
        "description": "Logical-OR of two values Inclusive-OR",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "(||) ||",
        "normalized": "a-\u003ea-\u003ea",
        "package": "AC-Boolean",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical-AND of two values.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#%26%26",
        "fct-type": "method",
        "title": "(&&)"
      },
      "index": {
        "description": "Logical-AND of two values",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "(&&) &&",
        "normalized": "a-\u003ea-\u003ea",
        "package": "AC-Boolean",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:false",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b",
        "fct-source": "src/Data-Boolean.html#false",
        "fct-type": "method",
        "title": "false"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "false",
        "normalized": "",
        "package": "AC-Boolean",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:lift_bool",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value to the appropriate \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "Bool -\u003e b",
        "fct-source": "src/Data-Boolean.html#lift_bool",
        "fct-type": "function",
        "title": "lift_bool"
      },
      "index": {
        "description": "Convert Bool value to the appropriate BoolValue",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "lift_bool",
        "normalized": "Bool-\u003ea",
        "package": "AC-Boolean",
        "partial": "",
        "signature": "Bool-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eLogical-NOT of two values. (Logical inverse.)\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b -\u003e b",
        "fct-source": "src/Data-Boolean.html#not",
        "fct-type": "method",
        "title": "not"
      },
      "index": {
        "description": "Logical-NOT of two values Logical inverse",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "not",
        "normalized": "a-\u003ea",
        "package": "AC-Boolean",
        "partial": "",
        "signature": "b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:true",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b",
        "fct-source": "src/Data-Boolean.html#true",
        "fct-type": "method",
        "title": "true"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "true",
        "normalized": "",
        "package": "AC-Boolean",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:xor",
      "description": {
        "fct-descr": "\u003cp\u003eExclusive-OR (XOR). There is a default implementation, but you\n    can override it for efficiency if desired.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "AC-Boolean",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#xor",
        "fct-type": "method",
        "title": "xor"
      },
      "index": {
        "description": "Exclusive-OR XOR There is default implementation but you can override it for efficiency if desired",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "xor",
        "normalized": "a-\u003ea-\u003ea",
        "package": "AC-Boolean",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  }
]