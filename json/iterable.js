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
        "word": "iterable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for instantiating Iterable for types with Vector containers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iterable.Instantiate.Vector",
          "name": "Vector",
          "package": "iterable",
          "source": "src/Data-Iterable-Instantiate-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers for instantiating Iterable for types with Vector containers",
          "hierarchy": "Data Iterable Instantiate Vector",
          "module": "Data.Iterable.Instantiate.Vector",
          "name": "Vector",
          "package": "iterable",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a direct instance of iterable between $typA and $typB with\n   given names of getter and setter, so that:\n   $getter :: $typA -\u003e $typB \n   $setter :: $typB -\u003e $typA -\u003e $typA\n\u003c/p\u003e",
          "module": "Data.Iterable.Instantiate.Vector",
          "name": "gen_vector_iterable",
          "package": "iterable",
          "signature": "Q Type -\u003e Q Type -\u003e Q Exp -\u003e Q Exp -\u003e DecsQ",
          "source": "src/Data-Iterable-Instantiate-Vector.html#gen_vector_iterable",
          "type": "function"
        },
        "index": {
          "description": "Generates direct instance of iterable between typA and typB with given names of getter and setter so that getter typA typB setter typB typA typA",
          "hierarchy": "Data Iterable Instantiate Vector",
          "module": "Data.Iterable.Instantiate.Vector",
          "name": "gen_vector_iterable",
          "normalized": "Q Type-\u003eQ Type-\u003eQ Exp-\u003eQ Exp-\u003eDecsQ",
          "package": "iterable",
          "signature": "Q Type-\u003eQ Type-\u003eQ Exp-\u003eQ Exp-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate-Vector.html#v:gen_vector_iterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for instantiating transitive and reflexive instances of Iterable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iterable.Instantiate",
          "name": "Instantiate",
          "package": "iterable",
          "source": "src/Data-Iterable-Instantiate.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers for instantiating transitive and reflexive instances of Iterable",
          "hierarchy": "Data Iterable Instantiate",
          "module": "Data.Iterable.Instantiate",
          "name": "Instantiate",
          "package": "iterable",
          "partial": "Instantiate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates convenience function for iterating over a single object.\nself_iterable typA = gen_iterable typA typA [e| id |] [e| L.singleton |]\n\u003c/p\u003e",
          "module": "Data.Iterable.Instantiate",
          "name": "self_iterable",
          "package": "iterable",
          "signature": "Q Type -\u003e DecsQ",
          "source": "src/Data-Iterable-Instantiate.html#self_iterable",
          "type": "function"
        },
        "index": {
          "description": "Generates convenience function for iterating over single object self iterable typA gen iterable typA typA id L.singleton",
          "hierarchy": "Data Iterable Instantiate",
          "module": "Data.Iterable.Instantiate",
          "name": "self_iterable",
          "normalized": "Q Type-\u003eDecsQ",
          "package": "iterable",
          "signature": "Q Type-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#v:self_iterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a transitive instance of \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e between $typA and $typC,\n   assuming existence of \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e $typA $typB, and \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e $typB $typC.\n\u003c/p\u003e",
          "module": "Data.Iterable.Instantiate",
          "name": "trans_iterable",
          "package": "iterable",
          "signature": "Q Type -\u003e Q Type -\u003e Q Type -\u003e DecsQ",
          "source": "src/Data-Iterable-Instantiate.html#trans_iterable",
          "type": "function"
        },
        "index": {
          "description": "Generates transitive instance of Iterable between typA and typC assuming existence of Iterable typA typB and Iterable typB typC",
          "hierarchy": "Data Iterable Instantiate",
          "module": "Data.Iterable.Instantiate",
          "name": "trans_iterable",
          "normalized": "Q Type-\u003eQ Type-\u003eQ Type-\u003eDecsQ",
          "package": "iterable",
          "signature": "Q Type-\u003eQ Type-\u003eQ Type-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#v:trans_iterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclares Iterable class for handling multi-level, heterogeneous, monomorphic collections that allow nested iteration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iterable",
          "name": "Iterable",
          "package": "iterable",
          "source": "src/Data-Iterable.html",
          "type": "module"
        },
        "index": {
          "description": "Declares Iterable class for handling multi-level heterogeneous monomorphic collections that allow nested iteration",
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "Iterable",
          "package": "iterable",
          "partial": "Iterable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for iterating all nested components \u003ccode\u003eb\u003c/code\u003e of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iterable",
          "name": "Iterable",
          "package": "iterable",
          "source": "src/Data-Iterable.html#Iterable",
          "type": "class"
        },
        "index": {
          "description": "Class for iterating all nested components of type",
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "Iterable",
          "package": "iterable",
          "partial": "Iterable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#t:Iterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itfoldM",
          "package": "iterable",
          "signature": "(c -\u003e b -\u003e m c) -\u003e c -\u003e a -\u003e m c",
          "source": "src/Data-Iterable.html#itfoldM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itfoldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed-\u003ec a",
          "package": "iterable",
          "signature": "(c-\u003eb-\u003em c)-\u003ec-\u003ea-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itfoldl",
          "package": "iterable",
          "signature": "(c -\u003e b -\u003e c) -\u003e c -\u003e a -\u003e c",
          "source": "src/Data-Iterable.html#itfoldl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itfoldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "iterable",
          "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003ea-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itfoldl'",
          "package": "iterable",
          "signature": "(c -\u003e b -\u003e c) -\u003e c -\u003e a -\u003e c",
          "source": "src/Data-Iterable.html#itfoldl%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itfoldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "iterable",
          "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003ea-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itfoldr",
          "package": "iterable",
          "signature": "(b -\u003e c -\u003e c) -\u003e c -\u003e a -\u003e c",
          "source": "src/Data-Iterable.html#itfoldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itfoldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "iterable",
          "signature": "(b-\u003ec-\u003ec)-\u003ec-\u003ea-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itlength",
          "package": "iterable",
          "signature": "b -\u003e a -\u003e Int",
          "source": "src/Data-Iterable.html#itlength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itlength",
          "normalized": "a-\u003eb-\u003eInt",
          "package": "iterable",
          "signature": "b-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itmap",
          "package": "iterable",
          "signature": "(b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Iterable.html#itmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itmap",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "iterable",
          "signature": "(b-\u003eb)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iterable",
          "name": "itmapM",
          "package": "iterable",
          "signature": "(b -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Data-Iterable.html#itmapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iterable",
          "module": "Data.Iterable",
          "name": "itmapM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "iterable",
          "signature": "(b-\u003em b)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itmapM"
      }
    }
  ]
]