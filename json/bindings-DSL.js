[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#",
      "description": {
        "fct-module": "Bindings.Utilities",
        "fct-package": "bindings-DSL",
        "fct-signature": "module",
        "fct-source": "src/Bindings-Utilities.html",
        "fct-type": "module",
        "title": "Utilities"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Utilities",
        "module": "Bindings.Utilities",
        "name": "Utilities",
        "normalized": "",
        "package": "bindings-DSL",
        "partial": "Utilities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#v:storableCast",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estorableCast\u003c/a\u003e\u003c/code\u003e works like \u003ccode\u003e\u003ca\u003estorableCastArray\u003c/a\u003e\u003c/code\u003e, except that it\n takes a single value and returns a single value.\n\u003c/p\u003e",
        "fct-module": "Bindings.Utilities",
        "fct-package": "bindings-DSL",
        "fct-signature": "a -\u003e IO b",
        "fct-source": "src/Bindings-Utilities.html#storableCast",
        "fct-type": "function",
        "title": "storableCast"
      },
      "index": {
        "description": "storableCast works like storableCastArray except that it takes single value and returns single value",
        "hierarchy": "Bindings Utilities",
        "module": "Bindings.Utilities",
        "name": "storableCast",
        "normalized": "a-\u003eIO b",
        "package": "bindings-DSL",
        "partial": "Cast",
        "signature": "a-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#v:storableCastArray",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estorableCastArray\u003c/a\u003e\u003c/code\u003e takes a list of values of a first type, stores it\n at a contiguous memory area (that is first blanked with 0s), and then\n reads it as if it was a list of a second type, with enough elements to\n fill at least the same space.\n\u003c/p\u003e\u003cpre\u003e\n ghci\n :m + Bindings.Sandbox Data.Int\n storableCastArray (replicate 13 (1::Int8)) :: IO [Int32]\n         ==\u003e [16843009,16843009,16843009,1]\n\u003c/pre\u003e",
        "fct-module": "Bindings.Utilities",
        "fct-package": "bindings-DSL",
        "fct-signature": "[a] -\u003e IO [b]",
        "fct-source": "src/Bindings-Utilities.html#storableCastArray",
        "fct-type": "function",
        "title": "storableCastArray"
      },
      "index": {
        "description": "storableCastArray takes list of values of first type stores it at contiguous memory area that is first blanked with and then reads it as if it was list of second type with enough elements to fill at least the same space ghci Bindings.Sandbox Data.Int storableCastArray replicate Int8 IO Int32",
        "hierarchy": "Bindings Utilities",
        "module": "Bindings.Utilities",
        "name": "storableCastArray",
        "normalized": "[a]-\u003eIO[b]",
        "package": "bindings-DSL",
        "partial": "Cast Array",
        "signature": "[a]-\u003eIO[b]"
      }
    }
  }
]