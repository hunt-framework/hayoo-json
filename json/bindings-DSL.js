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
        "word": "bindings-DSL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Utilities",
          "name": "Utilities",
          "package": "bindings-DSL",
          "source": "src/Bindings-Utilities.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bindings Utilities",
          "module": "Bindings.Utilities",
          "name": "Utilities",
          "package": "bindings-DSL",
          "partial": "Utilities",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estorableCast\u003c/a\u003e\u003c/code\u003e works like \u003ccode\u003e\u003ca\u003estorableCastArray\u003c/a\u003e\u003c/code\u003e, except that it\n takes a single value and returns a single value.\n\u003c/p\u003e",
          "module": "Bindings.Utilities",
          "name": "storableCast",
          "package": "bindings-DSL",
          "signature": "a -\u003e IO b",
          "source": "src/Bindings-Utilities.html#storableCast",
          "type": "function"
        },
        "index": {
          "description": "storableCast works like storableCastArray except that it takes single value and returns single value",
          "hierarchy": "Bindings Utilities",
          "module": "Bindings.Utilities",
          "name": "storableCast",
          "normalized": "a-\u003eIO b",
          "package": "bindings-DSL",
          "partial": "Cast",
          "signature": "a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#v:storableCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estorableCastArray\u003c/a\u003e\u003c/code\u003e takes a list of values of a first type, stores it\n at a contiguous memory area (that is first blanked with 0s), and then\n reads it as if it was a list of a second type, with enough elements to\n fill at least the same space.\n\u003c/p\u003e\u003cpre\u003e\n ghci\n :m + Bindings.Sandbox Data.Int\n storableCastArray (replicate 13 (1::Int8)) :: IO [Int32]\n         ==\u003e [16843009,16843009,16843009,1]\n\u003c/pre\u003e",
          "module": "Bindings.Utilities",
          "name": "storableCastArray",
          "package": "bindings-DSL",
          "signature": "[a] -\u003e IO [b]",
          "source": "src/Bindings-Utilities.html#storableCastArray",
          "type": "function"
        },
        "index": {
          "description": "storableCastArray takes list of values of first type stores it at contiguous memory area that is first blanked with and then reads it as if it was list of second type with enough elements to fill at least the same space ghci Bindings.Sandbox Data.Int storableCastArray replicate Int8 IO Int32",
          "hierarchy": "Bindings Utilities",
          "module": "Bindings.Utilities",
          "name": "storableCastArray",
          "normalized": "[a]-\u003eIO[b]",
          "package": "bindings-DSL",
          "partial": "Cast Array",
          "signature": "[a]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-DSL/docs/Bindings-Utilities.html#v:storableCastArray"
      }
    }
  ]
]