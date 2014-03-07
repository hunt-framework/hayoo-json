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
        "word": "bool-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some convenient functions for dealing with Booleans.\n\u003c/p\u003e\u003cp\u003eThe most important one being \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e, a function that can be used in place of\n the build-in \u003ccode\u003eif then else\u003c/code\u003e-syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bool.Extras",
          "name": "Extras",
          "package": "bool-extras",
          "source": "src/Data-Bool-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some convenient functions for dealing with Booleans The most important one being bool function that can be used in place of the build-in if then else syntax",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "Extras",
          "package": "bool-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebra for Bool data type.\n\u003c/p\u003e\u003cp\u003eThe first field of the pair represents the \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value,\n the second field represents the \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "BoolAlgebra",
          "package": "bool-extras",
          "source": "src/Data-Bool-Extras.html#BoolAlgebra",
          "type": "type"
        },
        "index": {
          "description": "Algebra for Bool data type The first field of the pair represents the False value the second field represents the True value",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "BoolAlgebra",
          "package": "bool-extras",
          "partial": "Bool Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#t:BoolAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnamorphism for booleans.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "ana",
          "package": "bool-extras",
          "signature": "(b -\u003e Bool) -\u003e b -\u003e Bool",
          "source": "src/Data-Bool-Extras.html#ana",
          "type": "function"
        },
        "index": {
          "description": "Anamorphism for booleans",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "ana",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eBool",
          "package": "bool-extras",
          "signature": "(b-\u003eBool)-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the fold over a boolean value.\n\u003c/p\u003e\u003cp\u003eReturns its first argument when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e,\n returns its second argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eComparable to the \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e functions for their respective data\n types.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "bool",
          "package": "bool-extras",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Data-Bool-Extras.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Defines the fold over boolean value Returns its first argument when applied to False returns its second argument when applied to True Comparable to the maybe or either functions for their respective data types",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "bool-extras",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatamorphism for booleans.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "cata",
          "package": "bool-extras",
          "signature": "BoolAlgebra r -\u003e Bool -\u003e r",
          "source": "src/Data-Bool-Extras.html#cata",
          "type": "function"
        },
        "index": {
          "description": "Catamorphism for booleans",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "cata",
          "normalized": "BoolAlgebra a-\u003eBool-\u003ea",
          "package": "bool-extras",
          "signature": "BoolAlgebra r-\u003eBool-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean operation for monoids.\n\u003c/p\u003e\u003cp\u003eReturns its first argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n returns \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "mwhen",
          "package": "bool-extras",
          "signature": "a -\u003e Bool -\u003e a",
          "source": "src/Data-Bool-Extras.html#mwhen",
          "type": "function"
        },
        "index": {
          "description": "Boolean operation for monoids Returns its first argument when applied to True returns mempty when applied to False",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "mwhen",
          "normalized": "a-\u003eBool-\u003ea",
          "package": "bool-extras",
          "signature": "a-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:mwhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean operation for monads, with a monoid default.\n\u003c/p\u003e\u003cp\u003eReturn its first argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n returns `return mempty' when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "mwhenM",
          "package": "bool-extras",
          "signature": "m a -\u003e Bool -\u003e m a",
          "source": "src/Data-Bool-Extras.html#mwhenM",
          "type": "function"
        },
        "index": {
          "description": "Boolean operation for monads with monoid default Return its first argument when applied to True returns return mempty when applied to False",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "mwhenM",
          "normalized": "a b-\u003eBool-\u003ea b",
          "package": "bool-extras",
          "signature": "m a-\u003eBool-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:mwhenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean operation for arrows.\n\u003c/p\u003e\u003cp\u003eReturns its first argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n returns \u003ccode\u003e\u003ca\u003ereturnA\u003c/a\u003e\u003c/code\u003e when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "whenA",
          "package": "bool-extras",
          "signature": "a b b -\u003e Bool -\u003e a b b",
          "source": "src/Data-Bool-Extras.html#whenA",
          "type": "function"
        },
        "index": {
          "description": "Boolean operation for arrows Returns its first argument when applied to True returns returnA when applied to False",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "whenA",
          "normalized": "a b b-\u003eBool-\u003ea b b",
          "package": "bool-extras",
          "signature": "a b b-\u003eBool-\u003ea b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:whenA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean operation for categories.\n\u003c/p\u003e\u003cp\u003eReturns its first argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n returns \u003ccode\u003eControl.Category.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bool.Extras",
          "name": "whenC",
          "package": "bool-extras",
          "signature": "cat a a -\u003e Bool -\u003e cat a a",
          "source": "src/Data-Bool-Extras.html#whenC",
          "type": "function"
        },
        "index": {
          "description": "Boolean operation for categories Returns its first argument when applied to True returns Control.Category id when applied to False",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "whenC",
          "normalized": "a b b-\u003eBool-\u003ea b b",
          "package": "bool-extras",
          "signature": "cat a a-\u003eBool-\u003ecat a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:whenC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean operation for monads.\n\u003c/p\u003e\u003cp\u003eReturns its first argument when applied to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n returns \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e when applied to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eControl.Monad.\u003c/code\u003e\u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e can be expressed in terms of \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e, like so:\n\u003c/p\u003e\u003cpre\u003e when :: Monad m =\u003e Bool -\u003e m () -\u003e m ()\n when b m = (const m `whenM` b) ()\n\u003c/pre\u003e",
          "module": "Data.Bool.Extras",
          "name": "whenM",
          "package": "bool-extras",
          "signature": "(a -\u003e m a) -\u003e Bool -\u003e a -\u003e m a",
          "source": "src/Data-Bool-Extras.html#whenM",
          "type": "function"
        },
        "index": {
          "description": "Boolean operation for monads Returns its first argument when applied to True returns return when applied to False Control.Monad when can be expressed in terms of whenM like so when Monad Bool when const whenM",
          "hierarchy": "Data Bool Extras",
          "module": "Data.Bool.Extras",
          "name": "whenM",
          "normalized": "(a-\u003eb a)-\u003eBool-\u003ea-\u003eb a",
          "package": "bool-extras",
          "signature": "(a-\u003em a)-\u003eBool-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bool-extras/docs/Data-Bool-Extras.html#v:whenM"
      }
    }
  ]
]