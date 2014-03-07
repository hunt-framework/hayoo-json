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
        "word": "AC-Boolean"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes (and instances) for things that are like Booleans.\n\u003c/p\u003e\u003cp\u003eThe names of methods in \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e clash with the standard Prelude,\n  so you probably want to inport the Prelude hiding these three\n  names (since the class methods do the same thing, but with more\n  general type signatures).\n\u003c/p\u003e\u003cp\u003ePlease note the following points:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This module imports \u003ca\u003eControl.Monad.Instances\u003c/a\u003e, which brings\n    several new \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instances into scope.\n\u003c/li\u003e\u003cli\u003e Among other things, a monad instance for functions is brought\n    into scope. This, combined with the \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e instance for\n    monads, causes any function that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e to become\n    a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e itself. This allows you to write constructions such\n    as \u003ccode\u003e(\u003e 5) && (\u003c 9)\u003c/code\u003e, which has the obvious meaning.\n\u003c/li\u003e\u003cli\u003e Another interesting consequence of the \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e instance for\n    monads is that \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e. You can use\n    this to implement 3-value logic (\"true\", \"false\" and\n    \"other\"), with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e implementing \"other\". Any logical\n    operations yield \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e unless all arguments are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n    something. (This is usually the behaviour you want.)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "AC-Boolean",
          "source": "src/Data-Boolean.html",
          "type": "module"
        },
        "index": {
          "description": "Type classes and instances for things that are like Booleans The names of methods in Boolean clash with the standard Prelude so you probably want to inport the Prelude hiding these three names since the class methods do the same thing but with more general type signatures Please note the following points This module imports Control.Monad.Instances which brings several new Monad instances into scope Among other things monad instance for functions is brought into scope This combined with the Boolean instance for monads causes any function that returns Boolean to become Boolean itself This allows you to write constructions such as which has the obvious meaning Another interesting consequence of the Boolean instance for monads is that Maybe Bool is Boolean You can use this to implement value logic true false and other with Nothing implementing other Any logical operations yield Nothing unless all arguments are Just something This is usually the behaviour you want",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "AC-Boolean",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for things that have true and false values.\n\u003c/p\u003e\u003cp\u003eInstances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Normal \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values (obviously).\n\u003c/li\u003e\u003cli\u003e Any function that yields a \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e as its result.\n    (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e)\n    This instance arrises due to the monad instance for functions.\n\u003c/li\u003e\u003cli\u003e Any monadic action that yields a \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e as its result.\n    (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Boolean",
          "name": "BoolValue",
          "package": "AC-Boolean",
          "source": "src/Data-Boolean.html#BoolValue",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for things that have true and false values Instances Normal Bool values obviously Any function that yields BoolValue as its result true const True false const False This instance arrises due to the monad instance for functions Any monadic action that yields BoolValue as its result true return True false return False",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "BoolValue",
          "package": "AC-Boolean",
          "partial": "Bool Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#t:BoolValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for things that support Boolean operators.\n\u003c/p\u003e\u003cp\u003eInstances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Normal \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values (obviously).\n\u003c/li\u003e\u003cli\u003e Any function that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n    This instance arrises due to the monad instance for functions.\n\u003c/li\u003e\u003cli\u003e Any monadic action that returns a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n    The left action is performed before the right action (which may\n    be significant, depending on the monad).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "AC-Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for things that support Boolean operators Instances Normal Bool values obviously Any function that returns Boolean This instance arrises due to the monad instance for functions Any monadic action that returns Boolean The left action is performed before the right action which may be significant depending on the monad",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "AC-Boolean",
          "partial": "Boolean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical-OR of two values. (Inclusive-OR.)\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "(||)",
          "package": "AC-Boolean",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-Boolean.html#%7C%7C",
          "type": "method"
        },
        "index": {
          "description": "Logical-OR of two values Inclusive-OR",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "(||) ||",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AC-Boolean",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical-AND of two values.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "(&&)",
          "package": "AC-Boolean",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-Boolean.html#%26%26",
          "type": "method"
        },
        "index": {
          "description": "Logical-AND of two values",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "(&&) &&",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AC-Boolean",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Boolean",
          "name": "false",
          "package": "AC-Boolean",
          "signature": "b",
          "source": "src/Data-Boolean.html#false",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "false",
          "package": "AC-Boolean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value to the appropriate \u003ccode\u003e\u003ca\u003eBoolValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "lift_bool",
          "package": "AC-Boolean",
          "signature": "Bool -\u003e b",
          "source": "src/Data-Boolean.html#lift_bool",
          "type": "function"
        },
        "index": {
          "description": "Convert Bool value to the appropriate BoolValue",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "lift_bool",
          "normalized": "Bool-\u003ea",
          "package": "AC-Boolean",
          "signature": "Bool-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:lift_bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical-NOT of two values. (Logical inverse.)\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "not",
          "package": "AC-Boolean",
          "signature": "b -\u003e b",
          "source": "src/Data-Boolean.html#not",
          "type": "method"
        },
        "index": {
          "description": "Logical-NOT of two values Logical inverse",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "not",
          "normalized": "a-\u003ea",
          "package": "AC-Boolean",
          "signature": "b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Boolean",
          "name": "true",
          "package": "AC-Boolean",
          "signature": "b",
          "source": "src/Data-Boolean.html#true",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "true",
          "package": "AC-Boolean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExclusive-OR (XOR). There is a default implementation, but you\n    can override it for efficiency if desired.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "xor",
          "package": "AC-Boolean",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-Boolean.html#xor",
          "type": "method"
        },
        "index": {
          "description": "Exclusive-OR XOR There is default implementation but you can override it for efficiency if desired",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "xor",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AC-Boolean",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Boolean/docs/Data-Boolean.html#v:xor"
      }
    }
  ]
]