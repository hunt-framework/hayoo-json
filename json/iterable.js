[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for instantiating Iterable for types with Vector containers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Iterable.Instantiate.Vector",
        "fct-package": "iterable",
        "fct-signature": "module",
        "fct-source": "src/Data-Iterable-Instantiate-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Helpers for instantiating Iterable for types with Vector containers",
        "hierarchy": "Data Iterable Instantiate Vector",
        "module": "Data.Iterable.Instantiate.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "iterable",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate-Vector.html#v:gen_vector_iterable",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a direct instance of iterable between $typA and $typB with\n   given names of getter and setter, so that:\n   $getter :: $typA -\u003e $typB \n   $setter :: $typB -\u003e $typA -\u003e $typA\n\u003c/p\u003e",
        "fct-module": "Data.Iterable.Instantiate.Vector",
        "fct-package": "iterable",
        "fct-signature": "Q Type -\u003e Q Type -\u003e Q Exp -\u003e Q Exp -\u003e DecsQ",
        "fct-source": "src/Data-Iterable-Instantiate-Vector.html#gen_vector_iterable",
        "fct-type": "function",
        "title": "gen_vector_iterable"
      },
      "index": {
        "description": "Generates direct instance of iterable between typA and typB with given names of getter and setter so that getter typA typB setter typB typA typA",
        "hierarchy": "Data Iterable Instantiate Vector",
        "module": "Data.Iterable.Instantiate.Vector",
        "name": "gen_vector_iterable",
        "normalized": "Q Type-\u003eQ Type-\u003eQ Exp-\u003eQ Exp-\u003eDecsQ",
        "package": "iterable",
        "partial": "",
        "signature": "Q Type-\u003eQ Type-\u003eQ Exp-\u003eQ Exp-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for instantiating transitive and reflexive instances of Iterable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Iterable.Instantiate",
        "fct-package": "iterable",
        "fct-signature": "module",
        "fct-source": "src/Data-Iterable-Instantiate.html",
        "fct-type": "module",
        "title": "Instantiate"
      },
      "index": {
        "description": "Helpers for instantiating transitive and reflexive instances of Iterable",
        "hierarchy": "Data Iterable Instantiate",
        "module": "Data.Iterable.Instantiate",
        "name": "Instantiate",
        "normalized": "",
        "package": "iterable",
        "partial": "Instantiate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#v:self_iterable",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates convenience function for iterating over a single object.\nself_iterable typA = gen_iterable typA typA [e| id |] [e| L.singleton |]\n\u003c/p\u003e",
        "fct-module": "Data.Iterable.Instantiate",
        "fct-package": "iterable",
        "fct-signature": "Q Type -\u003e DecsQ",
        "fct-source": "src/Data-Iterable-Instantiate.html#self_iterable",
        "fct-type": "function",
        "title": "self_iterable"
      },
      "index": {
        "description": "Generates convenience function for iterating over single object self iterable typA gen iterable typA typA id L.singleton",
        "hierarchy": "Data Iterable Instantiate",
        "module": "Data.Iterable.Instantiate",
        "name": "self_iterable",
        "normalized": "Q Type-\u003eDecsQ",
        "package": "iterable",
        "partial": "",
        "signature": "Q Type-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable-Instantiate.html#v:trans_iterable",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a transitive instance of \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e between $typA and $typC,\n   assuming existence of \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e $typA $typB, and \u003ccode\u003e\u003ca\u003eIterable\u003c/a\u003e\u003c/code\u003e $typB $typC.\n\u003c/p\u003e",
        "fct-module": "Data.Iterable.Instantiate",
        "fct-package": "iterable",
        "fct-signature": "Q Type -\u003e Q Type -\u003e Q Type -\u003e DecsQ",
        "fct-source": "src/Data-Iterable-Instantiate.html#trans_iterable",
        "fct-type": "function",
        "title": "trans_iterable"
      },
      "index": {
        "description": "Generates transitive instance of Iterable between typA and typC assuming existence of Iterable typA typB and Iterable typB typC",
        "hierarchy": "Data Iterable Instantiate",
        "module": "Data.Iterable.Instantiate",
        "name": "trans_iterable",
        "normalized": "Q Type-\u003eQ Type-\u003eQ Type-\u003eDecsQ",
        "package": "iterable",
        "partial": "",
        "signature": "Q Type-\u003eQ Type-\u003eQ Type-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclares Iterable class for handling multi-level, heterogeneous, monomorphic collections that allow nested iteration.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "module",
        "fct-source": "src/Data-Iterable.html",
        "fct-type": "module",
        "title": "Iterable"
      },
      "index": {
        "description": "Declares Iterable class for handling multi-level heterogeneous monomorphic collections that allow nested iteration",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "Iterable",
        "normalized": "",
        "package": "iterable",
        "partial": "Iterable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#t:Iterable",
      "description": {
        "fct-descr": "\u003cp\u003eClass for iterating all nested components \u003ccode\u003eb\u003c/code\u003e of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "class",
        "fct-source": "src/Data-Iterable.html#Iterable",
        "fct-type": "class",
        "title": "Iterable"
      },
      "index": {
        "description": "Class for iterating all nested components of type",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "Iterable",
        "normalized": "",
        "package": "iterable",
        "partial": "Iterable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldM",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(c -\u003e b -\u003e m c) -\u003e c -\u003e a -\u003e m c",
        "fct-source": "src/Data-Iterable.html#itfoldM",
        "fct-type": "method",
        "title": "itfoldM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itfoldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed-\u003ec a",
        "package": "iterable",
        "partial": "",
        "signature": "(c-\u003eb-\u003em c)-\u003ec-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldl",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(c -\u003e b -\u003e c) -\u003e c -\u003e a -\u003e c",
        "fct-source": "src/Data-Iterable.html#itfoldl",
        "fct-type": "method",
        "title": "itfoldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itfoldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
        "package": "iterable",
        "partial": "",
        "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldl-39-",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(c -\u003e b -\u003e c) -\u003e c -\u003e a -\u003e c",
        "fct-source": "src/Data-Iterable.html#itfoldl%27",
        "fct-type": "method",
        "title": "itfoldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itfoldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
        "package": "iterable",
        "partial": "",
        "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itfoldr",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(b -\u003e c -\u003e c) -\u003e c -\u003e a -\u003e c",
        "fct-source": "src/Data-Iterable.html#itfoldr",
        "fct-type": "method",
        "title": "itfoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itfoldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
        "package": "iterable",
        "partial": "",
        "signature": "(b-\u003ec-\u003ec)-\u003ec-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itlength",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "b -\u003e a -\u003e Int",
        "fct-source": "src/Data-Iterable.html#itlength",
        "fct-type": "method",
        "title": "itlength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itlength",
        "normalized": "a-\u003eb-\u003eInt",
        "package": "iterable",
        "partial": "",
        "signature": "b-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itmap",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(b -\u003e b) -\u003e a -\u003e a",
        "fct-source": "src/Data-Iterable.html#itmap",
        "fct-type": "method",
        "title": "itmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itmap",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "iterable",
        "partial": "",
        "signature": "(b-\u003eb)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iterable/docs/Data-Iterable.html#v:itmapM",
      "description": {
        "fct-module": "Data.Iterable",
        "fct-package": "iterable",
        "fct-signature": "(b -\u003e m b) -\u003e a -\u003e m a",
        "fct-source": "src/Data-Iterable.html#itmapM",
        "fct-type": "method",
        "title": "itmapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iterable",
        "module": "Data.Iterable",
        "name": "itmapM",
        "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
        "package": "iterable",
        "partial": "",
        "signature": "(b-\u003em b)-\u003ea-\u003em a"
      }
    }
  }
]