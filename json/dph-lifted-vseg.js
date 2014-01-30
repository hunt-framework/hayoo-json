[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosures.\n   Used when closure converting the source program during vectorisation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html",
        "fct-type": "module",
        "title": "Closure"
      },
      "index": {
        "description": "Closures Used when closure converting the source program during vectorisation",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "Closure",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the fixity of the closure type constructor.\n\u003c/p\u003e\u003cp\u003eThe type of closures.\n   This bundles up:\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
        "fct-type": "data",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Define the fixity of the closure type constructor The type of closures This bundles up",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": ":-\u003e",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#t:PData",
      "description": {
        "fct-descr": "\u003cp\u003eA chunk of parallel array data with a linear index space.\n\u003c/p\u003e\u003cp\u003eIn contrast to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e may not have a fixed length, and its\n   elements may have been converted to a generic representation. Whereas a\n   \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e is the \"user view\" of an array, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e is a type only\n   used internally to the library.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData",
        "fct-type": "function",
        "title": "PData"
      },
      "index": {
        "description": "chunk of parallel array data with linear index space In contrast to PArray PData may not have fixed length and its elements may have been converted to generic representation Whereas PArray is the user view of an array PData is type only used internally to the library",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "PData",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:-36-:",
      "description": {
        "fct-descr": "\u003cp\u003eClosure application.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a :-\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A",
        "fct-type": "function",
        "title": "($:)"
      },
      "index": {
        "description": "Closure application",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "($:) $:",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:-36-:-94-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted closure application.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (a :-\u003e b) -\u003e PArray a -\u003e PArray b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A%5E",
        "fct-type": "function",
        "title": "($:^)"
      },
      "index": {
        "description": "Lifted closure application",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "($:^) $:^",
        "normalized": "PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:Clo",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Clo (env -\u003e a -\u003e b) (Int -\u003e PData env -\u003e PData a -\u003e PData b) env",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
        "fct-type": "function",
        "title": "Clo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "Clo",
        "normalized": "Clo(a-\u003eb-\u003ec)(Int-\u003ePData a-\u003ePData b-\u003ePData c)a",
        "package": "dph-lifted-vseg",
        "partial": "Clo",
        "signature": "Clo(env-\u003ea-\u003eb)(Int-\u003ePData env-\u003ePData a-\u003ePData b)env"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure1",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-1 closure,\n   from unlifted and lifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b) -\u003e (Int -\u003e PData a -\u003e PData b) -\u003e a :-\u003e b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure1",
        "fct-type": "function",
        "title": "closure1"
      },
      "index": {
        "description": "Construct an arity-1 closure from unlifted and lifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure1",
        "normalized": "(a-\u003eb)-\u003e(Int-\u003ePData a-\u003ePData b)-\u003ea-\u003eb",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(Int-\u003ePData a-\u003ePData b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-1 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "forall a b.  (a -\u003e b) -\u003e (PArray a -\u003e PArray b) -\u003e a :-\u003e b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure1%27",
        "fct-type": "function",
        "title": "closure1'"
      },
      "index": {
        "description": "Construct an arity-1 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure1'",
        "normalized": "a b c(b-\u003ed)-\u003e(PArray b-\u003ePArray d)-\u003eb-\u003ed",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "forall a b.(a-\u003eb)-\u003e(PArray a-\u003ePArray b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure2",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-2 closure,\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c) -\u003e a :-\u003e (b :-\u003e c)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure2",
        "fct-type": "function",
        "title": "closure2"
      },
      "index": {
        "description": "Construct an arity-2 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure2",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003e(b-\u003ec)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003e(b-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure2-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-2 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (PArray a -\u003e PArray b -\u003e PArray c) -\u003e a :-\u003e (b :-\u003e c)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure2%27",
        "fct-type": "function",
        "title": "closure2'"
      },
      "index": {
        "description": "Construct an arity-2 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure2'",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure3",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-3 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure3",
        "fct-type": "function",
        "title": "closure3"
      },
      "index": {
        "description": "Construct an arity-3 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d)-\u003ea-\u003e(b-\u003e(c-\u003ed))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure3-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-3 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure3%27",
        "fct-type": "function",
        "title": "closure3'"
      },
      "index": {
        "description": "Construct an arity-3 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure3'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure4",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-4 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure4",
        "fct-type": "function",
        "title": "closure4"
      },
      "index": {
        "description": "Construct an arity-4 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure4-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-4 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure4%27",
        "fct-type": "function",
        "title": "closure4'"
      },
      "index": {
        "description": "Construct an arity-4 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure4'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure5",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-5 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure5",
        "fct-type": "function",
        "title": "closure5"
      },
      "index": {
        "description": "Construct an arity-5 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure5-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-5 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure5%27",
        "fct-type": "function",
        "title": "closure5'"
      },
      "index": {
        "description": "Construct an arity-5 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure5'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure6",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure6",
        "fct-type": "function",
        "title": "closure6"
      },
      "index": {
        "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure6-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-6 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure6%27",
        "fct-type": "function",
        "title": "closure6'"
      },
      "index": {
        "description": "Construct an arity-6 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure6'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure7",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g -\u003e PData h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure7",
        "fct-type": "function",
        "title": "closure7"
      },
      "index": {
        "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure7-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-7 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure7%27",
        "fct-type": "function",
        "title": "closure7'"
      },
      "index": {
        "description": "Construct an arity-7 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure7'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure8",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g -\u003e PData h -\u003e PData i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure8",
        "fct-type": "function",
        "title": "closure8"
      },
      "index": {
        "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h-\u003ePData i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h-\u003ePData i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure8-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arity-8 closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#closure8%27",
        "fct-type": "function",
        "title": "closure8'"
      },
      "index": {
        "description": "Construct an arity-8 closure",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "closure8'",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:liftedApply",
      "description": {
        "fct-descr": "\u003cp\u003eLifted closure application, taking an explicit lifting context.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Closure",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e PData (a :-\u003e b) -\u003e PData a -\u003e PData b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#liftedApply",
        "fct-type": "function",
        "title": "liftedApply"
      },
      "index": {
        "description": "Lifted closure application taking an explicit lifting context",
        "hierarchy": "Data Array Parallel Lifted Closure",
        "module": "Data.Array.Parallel.Lifted.Closure",
        "name": "liftedApply",
        "normalized": "Int-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
        "package": "dph-lifted-vseg",
        "partial": "Apply",
        "signature": "Int-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosure converted lifted array combinators.\n   The vectoriser produces code that uses these combinators directly.\n\u003c/p\u003e\u003cp\u003eAll of the combinators in this module are polymorphic, work on \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, and\n   take \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e dictionaries. Combinators that are specific to a certain element type,\n   like \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, are defined in the corresponding prelude module, \n   eg \u003ca\u003eData.Array.Parallel.Prelude.Int\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Closure converted lifted array combinators The vectoriser produces code that uses these combinators directly All of the combinators in this module are polymorphic work on PArray and take PA dictionaries Combinators that are specific to certain element type like Int are defined in the corresponding prelude module eg Data.Array.Parallel.Prelude.Int",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:appendPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(len result). Append two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e (PArray a :-\u003e PArray a)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#appendPP",
        "fct-type": "function",
        "title": "appendPP"
      },
      "index": {
        "description": "len result Append two arrays",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "appendPP",
        "normalized": "PArray a-\u003e(PArray a-\u003ePArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray a-\u003e(PArray a-\u003ePArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:concatPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(len result). Concatenate a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#concatPP",
        "fct-type": "function",
        "title": "concatPP"
      },
      "index": {
        "description": "len result Concatenate nested array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "concatPP",
        "normalized": "PArray(PArray a)-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray(PArray a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:crossMapPP",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e ((a :-\u003e PArray b) :-\u003e PArray (a, b))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#crossMapPP",
        "fct-type": "function",
        "title": "crossMapPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "crossMapPP",
        "normalized": "PArray a-\u003e((a-\u003ePArray b)-\u003ePArray(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "Map PP",
        "signature": "PArray a-\u003e((a-\u003ePArray b)-\u003ePArray(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:emptyPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#emptyPP",
        "fct-type": "function",
        "title": "emptyPP"
      },
      "index": {
        "description": "Construct an empty array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "emptyPP",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:filterPP",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the elements from an array that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a :-\u003e Bool) :-\u003e (PArray a :-\u003e PArray a)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#filterPP",
        "fct-type": "function",
        "title": "filterPP"
      },
      "index": {
        "description": "Extract the elements from an array that match the given predicate",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "filterPP",
        "normalized": "(a-\u003eBool)-\u003e(PArray a-\u003ePArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "(a-\u003eBool)-\u003e(PArray a-\u003ePArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:fromNestedPArrayPP",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity function, used as the vectorised version of fromNestedPArrayP\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) :-\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#fromNestedPArrayPP",
        "fct-type": "function",
        "title": "fromNestedPArrayPP"
      },
      "index": {
        "description": "Identity function used as the vectorised version of fromNestedPArrayP",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "fromNestedPArrayPP",
        "normalized": "PArray(PArray a)-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "Nested PArray PP",
        "signature": "PArray(PArray a)-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:fromPArrayPP",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity function, used as the vectorised version of fromPArrayP.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#fromPArrayPP",
        "fct-type": "function",
        "title": "fromPArrayPP"
      },
      "index": {
        "description": "Identity function used as the vectorised version of fromPArrayP",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "fromPArrayPP",
        "normalized": "PArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "PArray PP",
        "signature": "PArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:indexPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Lookup a single element from the source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e (Int :-\u003e a)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#indexPP",
        "fct-type": "function",
        "title": "indexPP"
      },
      "index": {
        "description": "Lookup single element from the source array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "indexPP",
        "normalized": "PArray a-\u003e(Int-\u003ea)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray a-\u003e(Int-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:lengthPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the number of elements in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#lengthPP",
        "fct-type": "function",
        "title": "lengthPP"
      },
      "index": {
        "description": "Take the number of elements in an array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "lengthPP",
        "normalized": "PArray a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:mapPP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to every element of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a :-\u003e b) :-\u003e (PArray a :-\u003e PArray b)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#mapPP",
        "fct-type": "function",
        "title": "mapPP"
      },
      "index": {
        "description": "Apply worker function to every element of an array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "mapPP",
        "normalized": "(a-\u003eb)-\u003e(PArray a-\u003ePArray b)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "(a-\u003eb)-\u003e(PArray a-\u003ePArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:replicatePP",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Construct an array of the given size, that maps all elements to the same value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int :-\u003e (a :-\u003e PArray a)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#replicatePP",
        "fct-type": "function",
        "title": "replicatePP"
      },
      "index": {
        "description": "Construct an array of the given size that maps all elements to the same value",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "replicatePP",
        "normalized": "Int-\u003e(a-\u003ePArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "Int-\u003e(a-\u003ePArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:singletonPP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an array containing a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#singletonPP",
        "fct-type": "function",
        "title": "singletonPP"
      },
      "index": {
        "description": "Construct an array containing single element",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "singletonPP",
        "normalized": "a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:slicePP",
      "description": {
        "fct-descr": "\u003cp\u003eO(len slice). Extract a range of elements from an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int :-\u003e (Int :-\u003e (PArray a :-\u003e PArray a))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#slicePP",
        "fct-type": "function",
        "title": "slicePP"
      },
      "index": {
        "description": "len slice Extract range of elements from an array",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "slicePP",
        "normalized": "Int-\u003e(Int-\u003e(PArray a-\u003ePArray a))",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "Int-\u003e(Int-\u003e(PArray a-\u003ePArray a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:toPArrayPP",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity function, used as the vectorised version of toPArrayP.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#toPArrayPP",
        "fct-type": "function",
        "title": "toPArrayPP"
      },
      "index": {
        "description": "Identity function used as the vectorised version of toPArrayP",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "toPArrayPP",
        "normalized": "PArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "PArray PP",
        "signature": "PArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:unzipPP",
      "description": {
        "fct-descr": "\u003cp\u003eUnzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (a, b) :-\u003e (PArray a, PArray b)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#unzipPP",
        "fct-type": "function",
        "title": "unzipPP"
      },
      "index": {
        "description": "Unzip an array of pairs into pair of arrays",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "unzipPP",
        "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray(a,b)-\u003e(PArray a,PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:zipPP",
      "description": {
        "fct-descr": "\u003cp\u003eZip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a :-\u003e (PArray b :-\u003e PArray (a, b))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#zipPP",
        "fct-type": "function",
        "title": "zipPP"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "zipPP",
        "normalized": "PArray a-\u003e(PArray b-\u003ePArray(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "PP",
        "signature": "PArray a-\u003e(PArray b-\u003ePArray(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:zipWithPP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to every pair of two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted.Combinators",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a :-\u003e (b :-\u003e c)) :-\u003e (PArray a :-\u003e (PArray b :-\u003e PArray c))",
        "fct-source": "src/Data-Array-Parallel-Lifted-Combinators.html#zipWithPP",
        "fct-type": "function",
        "title": "zipWithPP"
      },
      "index": {
        "description": "Apply worker function to every pair of two arrays",
        "hierarchy": "Data Array Parallel Lifted Combinators",
        "module": "Data.Array.Parallel.Lifted.Combinators",
        "name": "zipWithPP",
        "normalized": "(a-\u003e(b-\u003ec))-\u003e(PArray a-\u003e(PArray b-\u003ePArray c))",
        "package": "dph-lifted-vseg",
        "partial": "With PP",
        "signature": "(a-\u003e(b-\u003ec))-\u003e(PArray a-\u003e(PArray b-\u003ePArray c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosures and closure converted lifted array combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "Closures and closure converted lifted array combinators",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel array data.\n\u003c/p\u003e\u003cp\u003eThis is an interface onto the internal array types and operators defined\n   by the library, and should not normally be used by client programs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html",
        "fct-type": "module",
        "title": "PData"
      },
      "index": {
        "description": "Parallel array data This is an interface onto the internal array types and operators defined by the library and should not normally be used by client programs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PData",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "parallel array consisting of length field and some array data",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PData",
      "description": {
        "fct-descr": "\u003cp\u003eA chunk of parallel array data with a linear index space.\n\u003c/p\u003e\u003cp\u003eIn contrast to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e may not have a fixed length, and its\n   elements may have been converted to a generic representation. Whereas a\n   \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e is the \"user view\" of an array, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e is a type only\n   used internally to the library.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData",
        "fct-type": "function",
        "title": "PData"
      },
      "index": {
        "description": "chunk of parallel array data with linear index space In contrast to PArray PData may not have fixed length and its elements may have been converted to generic representation Whereas PArray is the user view of an array PData is type only used internally to the library",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PData",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PDatas",
      "description": {
        "fct-descr": "\u003cp\u003eSeveral chunks of parallel array data.\n\u003c/p\u003e\u003cp\u003eAlthough a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e of atomic type such as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e only contains a\n   single \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e chunk, nested arrays may contain several, which we \n   wrap up into a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas",
        "fct-type": "function",
        "title": "PDatas"
      },
      "index": {
        "description": "Several chunks of parallel array data Although PArray of atomic type such as Int only contains single PData chunk nested arrays may contain several which we wrap up into PDatas",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PDatas",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PDatas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PR",
      "description": {
        "fct-descr": "\u003cp\u003eThe PR (Parallel Representation) class holds primitive array operators that\n   work on our generic representation of data.\n\u003c/p\u003e\u003cp\u003eThere are instances for all atomic types such  as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, tuples,\n   nested arrays `PData (PArray a)` and for the  generic types we used to represent\n   user level algebraic data, \u003ccode\u003eSum2\u003c/code\u003e and \u003ccode\u003eWrap\u003c/code\u003e and \u003ccode\u003eVoid\u003c/code\u003e. All array data \n   is converted to this fixed set of types.\n\u003c/p\u003e\u003cp\u003eTODO: refactor to change PData Int to U.Array Int, \n         there's not need to wrap an extra PData constructor around these arrays,\n         and the type of bpermute is different than the others.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PR",
        "fct-type": "class",
        "title": "PR"
      },
      "index": {
        "description": "The PR Parallel Representation class holds primitive array operators that work on our generic representation of data There are instances for all atomic types such as Int and Double tuples nested arrays PData PArray and for the generic types we used to represent user level algebraic data Sum2 and Wrap and Void All array data is converted to this fixed set of types TODO refactor to change PData Int to U.Array Int there not need to wrap an extra PData constructor around these arrays and the type of bpermute is different than the others",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:PArray",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int# (PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
        "fct-type": "function",
        "title": "PArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendPR",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendPR",
        "fct-type": "method",
        "title": "appendPR"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "appendPR",
        "normalized": "PData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appenddPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Append two collections of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appenddPR",
        "fct-type": "method",
        "title": "appenddPR"
      },
      "index": {
        "description": "Append two collections of PData",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "appenddPR",
        "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendlPR",
      "description": {
        "fct-descr": "\u003cp\u003eLifted append.\n   Both arrays must contain the same number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData (PArray a) -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#appendlPR",
        "fct-type": "function",
        "title": "appendlPR"
      },
      "index": {
        "description": "Lifted append Both arrays must contain the same number of elements",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "appendlPR",
        "normalized": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented append.\n\u003c/p\u003e\u003cp\u003eThe first descriptor defines the segmentation of the result, \n   and the others define the segmentation of each source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendvsPR",
        "fct-type": "method",
        "title": "appendvsPR"
      },
      "index": {
        "description": "Segmented append The first descriptor defines the segmentation of the result and the others define the segmentation of each source array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "appendvsPR",
        "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:combine2PR",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e\u003cp\u003eSee the documentation for selectors in the dph-prim-seq library\n   for how this works.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#combine2PR",
        "fct-type": "method",
        "title": "combine2PR"
      },
      "index": {
        "description": "Combine two arrays based on selector See the documentation for selectors in the dph-prim-seq library for how this works",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "combine2PR",
        "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:concatPR",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#concatPR",
        "fct-type": "function",
        "title": "concatPR"
      },
      "index": {
        "description": "Concatenate nested array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "concatPR",
        "normalized": "PData(PArray a)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:concatlPR",
      "description": {
        "fct-descr": "\u003cp\u003eLifted concatenation.\n\u003c/p\u003e\u003cp\u003eConcatenate all the arrays in a triply nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray (PArray a)) -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#concatlPR",
        "fct-type": "function",
        "title": "concatlPR"
      },
      "index": {
        "description": "Lifted concatenation Concatenate all the arrays in triply nested array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "concatlPR",
        "normalized": "PData(PArray(PArray a))-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray(PArray a))-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:coversPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Check that an index is within an array.\n\u003c/p\u003e\u003cp\u003eArrays containing \u003ccode\u003eVoid\u003c/code\u003e elements don't have a fixed length, and return \n   \u003ccode\u003eVoid\u003c/code\u003e for all indices. If the array does have a fixed length, and the \n   flag is true, then we allow the index to be equal to this length, as\n   well as less than it.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#coversPR",
        "fct-type": "method",
        "title": "coversPR"
      },
      "index": {
        "description": "debugging Check that an index is within an array Arrays containing Void elements don have fixed length and return Void for all indices If the array does have fixed length and the flag is true then we allow the index to be equal to this length as well as less than it",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "coversPR",
        "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:emptyPR",
      "description": {
        "fct-descr": "\u003cp\u003eProduce an empty array with size zero.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptyPR",
        "fct-type": "method",
        "title": "emptyPR"
      },
      "index": {
        "description": "Produce an empty array with size zero",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "emptyPR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:emptydPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield an empty collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptydPR",
        "fct-type": "method",
        "title": "emptydPR"
      },
      "index": {
        "description": "Yield an empty collection of PData",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "emptydPR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(slice len). Extract a slice of elements from an array,\n  given the starting index and length of the slice.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractPR",
        "fct-type": "method",
        "title": "extractPR"
      },
      "index": {
        "description": "slice len Extract slice of elements from an array given the starting index and length of the slice",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "extractPR",
        "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractssPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n\u003c/p\u003e\u003cp\u003eThe Scattered Segment Descriptor (\u003ccode\u003eSSegd\u003c/code\u003e) describes where to get each \n  slice, and all slices are concatenated together into the result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e SSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractssPR",
        "fct-type": "method",
        "title": "extractssPR"
      },
      "index": {
        "description": "sum seglens Shared extract Extract several slices from several source arrays The Scattered Segment Descriptor SSegd describes where to get each slice and all slices are concatenated together into the result",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "extractssPR",
        "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eSSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n  TODO: we're refactoring the library so functions use the VSeg form directly,\n        instead of going via a SSegd.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractvsPR",
        "fct-type": "method",
        "title": "extractvsPR"
      },
      "index": {
        "description": "sum seglens Shared extract Extract several slices from several source arrays TODO we re refactoring the library so functions use the VSeg form directly instead of going via SSegd",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "extractvsPR",
        "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eVSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractvs_delay",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for extracts that is NOT INLINED.\n\u003c/p\u003e\u003cp\u003eThis is experimental, used to initialise the pnested_flat field\n   of a nested array. It\u003ccode\u003es\u003c/code\u003e marked at NOINLINE to avoid code explosion.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#extractvs_delay",
        "fct-type": "function",
        "title": "extractvs_delay"
      },
      "index": {
        "description": "Wrapper for extracts that is NOT INLINED This is experimental used to initialise the pnested flat field of nested array It marked at NOINLINE to avoid code explosion",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "extractvs_delay",
        "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PDatas a-\u003eVSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:flattenPR",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a nested array, yielding a plain segment descriptor and \n   concatenated data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e (Segd, PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#flattenPR",
        "fct-type": "function",
        "title": "flattenPR"
      },
      "index": {
        "description": "Flatten nested array yielding plain segment descriptor and concatenated data",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "flattenPR",
        "normalized": "PData(PArray a)-\u003e(Segd,PData a)",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003e(Segd,PData a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromListPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list to a PData.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[a] -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#fromListPR",
        "fct-type": "function",
        "title": "fromListPR"
      },
      "index": {
        "description": "Convert list to PData",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "fromListPR",
        "normalized": "[a]-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "List PR",
        "signature": "[a]-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromVectorPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a boxed vector to an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectorPR",
        "fct-type": "method",
        "title": "fromVectorPR"
      },
      "index": {
        "description": "Convert boxed vector to an array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "fromVectorPR",
        "normalized": "Vector a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PR",
        "signature": "Vector a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromVectordPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Convert a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector (PData a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectordPR",
        "fct-type": "method",
        "title": "fromVectordPR"
      },
      "index": {
        "description": "Convert vector of PData to PDatas",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "fromVectordPR",
        "normalized": "Vector(PData a)-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PR",
        "signature": "Vector(PData a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Retrieve a single element from a single array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexPR",
        "fct-type": "method",
        "title": "indexPR"
      },
      "index": {
        "description": "Retrieve single element from single array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "indexPR",
        "normalized": "PData a-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexdPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Lookup a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e from a collection.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexdPR",
        "fct-type": "method",
        "title": "indexdPR"
      },
      "index": {
        "description": "Lookup PData from collection",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "indexdPR",
        "normalized": "PDatas a-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexlPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(len result). Lifted indexing\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#indexlPR",
        "fct-type": "function",
        "title": "indexlPR"
      },
      "index": {
        "description": "len result Lifted indexing",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "indexlPR",
        "normalized": "PData(PArray a)-\u003ePData Int-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003ePData Int-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Shared indexing.\n   Retrieve several elements from several chunks of array data, \n   given the chunkid and index in that chunk for each element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexsPR",
        "fct-type": "method",
        "title": "indexsPR"
      },
      "index": {
        "description": "Shared indexing Retrieve several elements from several chunks of array data given the chunkid and index in that chunk for each element",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "indexsPR",
        "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Shared indexing\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexvsPR",
        "fct-type": "method",
        "title": "indexvsPR"
      },
      "index": {
        "description": "Shared indexing",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "indexvsPR",
        "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length field of a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Take the length field of PArray",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "length",
        "normalized": "PArray a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:lengthPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length of an array, if it has one.\n\u003c/p\u003e\u003cp\u003eApplying this function to an array of \u003ccode\u003eVoid\u003c/code\u003e will yield \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, as\n   these arrays have no fixed length. To check array bounds, use the\n   \u003ccode\u003e\u003ca\u003ecoversPR\u003c/a\u003e\u003c/code\u003e method instead, as that is a total function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthPR",
        "fct-type": "method",
        "title": "lengthPR"
      },
      "index": {
        "description": "Get the length of an array if it has one Applying this function to an array of Void will yield error as these arrays have no fixed length To check array bounds use the coversPR method instead as that is total function",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "lengthPR",
        "normalized": "PData a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:lengthdPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield how many \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e are in the collection.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthdPR",
        "fct-type": "method",
        "title": "lengthdPR"
      },
      "index": {
        "description": "Yield how many PData are in the collection",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "lengthdPR",
        "normalized": "PDatas a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:mkPNested",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "VSegd -\u003e PDatas a -\u003e Segd -\u003e PData a -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#mkPNested",
        "fct-type": "function",
        "title": "mkPNested"
      },
      "index": {
        "description": "Construct nested array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "mkPNested",
        "normalized": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PNested",
        "signature": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:nfPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Ensure an array is fully evaluted.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#nfPR",
        "fct-type": "method",
        "title": "nfPR"
      },
      "index": {
        "description": "debugging Ensure an array is fully evaluted",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "nfPR",
        "normalized": "PData a-\u003e()",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:packByTagPR",
      "description": {
        "fct-descr": "\u003cp\u003eSelect elements of an array that have their corresponding tag set to\n   the given value. \n\u003c/p\u003e\u003cp\u003eThe data array must define at least as many elements as the length\n   of the tags array. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#packByTagPR",
        "fct-type": "method",
        "title": "packByTagPR"
      },
      "index": {
        "description": "Select elements of an array that have their corresponding tag set to the given value The data array must define at least as many elements as the length of the tags array",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "packByTagPR",
        "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PR",
        "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:pprpDataPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Pretty print the physical representation of some array data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpDataPR",
        "fct-type": "method",
        "title": "pprpDataPR"
      },
      "index": {
        "description": "debugging Pretty print the physical representation of some array data",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "pprpDataPR",
        "normalized": "PData a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "Data PR",
        "signature": "PData a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:pprpPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Pretty print the physical representation of an element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpPR",
        "fct-type": "method",
        "title": "pprpPR"
      },
      "index": {
        "description": "debugging Pretty print the physical representation of an element",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "pprpPR",
        "normalized": "a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:replicatePR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the\n  same value.\n\u003c/p\u003e\u003cp\u003eWe require the replication count to be \u003e 0 so that it's easier to\n   maintain the \u003ccode\u003e\u003ca\u003evalidPR\u003c/a\u003e\u003c/code\u003e invariants for nested arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatePR",
        "fct-type": "method",
        "title": "replicatePR"
      },
      "index": {
        "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "replicatePR",
        "normalized": "Int-\u003ea-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Int-\u003ea-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:replicatesPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eGiven a Segment Descriptor (Segd), replicate each each element in the\n   array according to the length of the corrsponding segment.\n   The array data must define at least as many elements as there are segments\n   in the descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatesPR",
        "fct-type": "method",
        "title": "replicatesPR"
      },
      "index": {
        "description": "sum lengths Segmented replicate Given Segment Descriptor Segd replicate each each element in the array according to the length of the corrsponding segment The array data must define at least as many elements as there are segments in the descriptor",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "replicatesPR",
        "normalized": "Segd-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Segd-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:similarPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Weak equality of contained elements.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for functions of the same type. In the case of nested arrays,\n   returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the array defines the same set of elements, but does not\n   care about the exact form of the segement descriptors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#similarPR",
        "fct-type": "method",
        "title": "similarPR"
      },
      "index": {
        "description": "debugging Weak equality of contained elements Returns True for functions of the same type In the case of nested arrays returns True if the array defines the same set of elements but does not care about the exact form of the segement descriptors",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "similarPR",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:singletondPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield a singleton collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#singletondPR",
        "fct-type": "method",
        "title": "singletondPR"
      },
      "index": {
        "description": "Yield singleton collection of PData",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "singletondPR",
        "normalized": "PData a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:slicelPR",
      "description": {
        "fct-descr": "\u003cp\u003eExtract some slices from some arrays.\n\u003c/p\u003e\u003cp\u003eAll three parameters must have the same length, and we take\n   one slice from each of the source arrays. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData Int-\u003e PData Int-\u003e PData (PArray a)-\u003e PData (PArray a)",
        "fct-type": "function",
        "title": "slicelPR"
      },
      "index": {
        "description": "Extract some slices from some arrays All three parameters must have the same length and we take one slice from each of the source arrays",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "slicelPR",
        "normalized": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:takeData",
      "description": {
        "fct-descr": "\u003cp\u003eTake the \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#takeData",
        "fct-type": "function",
        "title": "takeData"
      },
      "index": {
        "description": "Take the PData of PArray",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "takeData",
        "normalized": "PArray a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Data",
        "signature": "PArray a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:takeSegdPD",
      "description": {
        "fct-descr": "\u003cp\u003eTake the segment descriptor from a nested array and demote it to a\n   plain Segd.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#takeSegdPD",
        "fct-type": "function",
        "title": "takeSegdPD"
      },
      "index": {
        "description": "Take the segment descriptor from nested array and demote it to plain Segd",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "takeSegdPD",
        "normalized": "PData(PArray a)-\u003eSegd",
        "package": "dph-lifted-vseg",
        "partial": "Segd PD",
        "signature": "PData(PArray a)-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toListPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a PData to a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#toListPR",
        "fct-type": "function",
        "title": "toListPR"
      },
      "index": {
        "description": "Convert PData to list",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "toListPR",
        "normalized": "PData a-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "List PR",
        "signature": "PData a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toVectorPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array to a boxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectorPR",
        "fct-type": "method",
        "title": "toVectorPR"
      },
      "index": {
        "description": "Convert an array to boxed vector",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "toVectorPR",
        "normalized": "PData a-\u003eVector a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PR",
        "signature": "PData a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toVectordPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Convert a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e to a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Vector (PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectordPR",
        "fct-type": "method",
        "title": "toVectordPR"
      },
      "index": {
        "description": "Convert PDatas to vector of PData",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "toVectordPR",
        "normalized": "PDatas a-\u003eVector(PData a)",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PR",
        "signature": "PDatas a-\u003eVector(PData a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepDataPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Given a 'PData a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDataPR",
        "fct-type": "method",
        "title": "typeRepDataPR"
      },
      "index": {
        "description": "debugging Given PData get the representation of the",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "typeRepDataPR",
        "normalized": "PData a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Data PR",
        "signature": "PData a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepDatasPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Given a 'PDatas a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDatasPR",
        "fct-type": "method",
        "title": "typeRepDatasPR"
      },
      "index": {
        "description": "debugging Given PDatas get the representation of the",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "typeRepDatasPR",
        "normalized": "PDatas a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Datas PR",
        "signature": "PDatas a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Get the representation of this type.\n   We don't use the Typeable class for this because the vectoriser\n   won't handle the Typeable superclass on PR.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepPR",
        "fct-type": "method",
        "title": "typeRepPR"
      },
      "index": {
        "description": "debugging Get the representation of this type We don use the Typeable class for this because the vectoriser won handle the Typeable superclass on PR",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "typeRepPR",
        "normalized": "a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep PR",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unconcatPR",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a nested array given a single flat data vector, \n   and a template nested array that defines the segmentation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData b -\u003e PData (PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Nested.html#unconcatPR",
        "fct-type": "function",
        "title": "unconcatPR"
      },
      "index": {
        "description": "Build nested array given single flat data vector and template nested array that defines the segmentation",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "unconcatPR",
        "normalized": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unzipPD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (a, b) -\u003e (PData a, PData b)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#unzipPD",
        "fct-type": "function",
        "title": "unzipPD"
      },
      "index": {
        "description": "Unzip an array of pairs into pair of arrays",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "unzipPD",
        "normalized": "PData(a,b)-\u003e(PData a,PData b)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData(a,b)-\u003e(PData a,PData b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unziplPD",
      "description": {
        "fct-descr": "\u003cp\u003eLifted unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray (a, b)) -\u003e PData (PArray a, PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#unziplPD",
        "fct-type": "function",
        "title": "unziplPD"
      },
      "index": {
        "description": "Lifted unzip",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "unziplPD",
        "normalized": "PData(PArray(a,b))-\u003ePData(PArray a,PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData(PArray(a,b))-\u003ePData(PArray a,PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:validPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Check that an array has a well formed representation.\n   This should only return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e where there is a bug in the library.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#validPR",
        "fct-type": "method",
        "title": "validPR"
      },
      "index": {
        "description": "debugging Check that an array has well formed representation This should only return False where there is bug in the library",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "validPR",
        "normalized": "PData a-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip3PD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData (a, b, c)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple3.html#zip3PD",
        "fct-type": "function",
        "title": "zip3PD"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "zip3PD",
        "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData(a,b,c)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip4PD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData (a, b, c, d)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple4.html#zip4PD",
        "fct-type": "function",
        "title": "zip4PD"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "zip4PD",
        "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData(a,b,c,d)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip5PD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData (a, b, c, d, e)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple5.html#zip5PD",
        "fct-type": "function",
        "title": "zip5PD"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "zip5PD",
        "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData(a,b,c,d,e)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData(a,b,c,d,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip6PD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData (a, b, c, d, e, f)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple6.html#zip6PD",
        "fct-type": "function",
        "title": "zip6PD"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "zip6PD",
        "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData(a,b,c,d,e,f)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData(a,b,c,d,e,f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zipPD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData b -\u003e PData (a, b)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#zipPD",
        "fct-type": "function",
        "title": "zipPD"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "zipPD",
        "normalized": "PData a-\u003ePData b-\u003ePData(a,b)",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "PData a-\u003ePData b-\u003ePData(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:ziplPR",
      "description": {
        "fct-descr": "\u003cp\u003eLifted zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PData",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData (PArray b) -\u003e PData (PArray (a, b))",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#ziplPR",
        "fct-type": "function",
        "title": "ziplPR"
      },
      "index": {
        "description": "Lifted zip",
        "hierarchy": "Data Array Parallel PArray PData",
        "module": "Data.Array.Parallel.PArray.PData",
        "name": "ziplPR",
        "normalized": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003ePRepr\u003c/a\u003e\u003c/code\u003e family and \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e class that converts between the user\n   level element types and our generic representation.\n   Apart from \u003ccode\u003e\u003ca\u003eunpackPA\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e wrapper functions defined here all have\n   equivalent \u003ccode\u003e\u003ca\u003ePR\u003c/a\u003e\u003c/code\u003e versions in \u003ca\u003eData.Array.Parallel.PArray.PData\u003c/a\u003e,\n   so see there for documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html",
        "fct-type": "module",
        "title": "PRepr"
      },
      "index": {
        "description": "Defines the PRepr family and PA class that converts between the user level element types and our generic representation Apart from unpackPA the PA wrapper functions defined here all have equivalent PR versions in Data.Array.Parallel.PArray.PData so see there for documentation",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "PRepr",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#t:PA",
      "description": {
        "fct-descr": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
        "fct-type": "class",
        "title": "PA"
      },
      "index": {
        "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "PA",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#t:PRepr",
      "description": {
        "fct-descr": "\u003cp\u003eFamily of Representable types. These are the types that we know how to\n   represent generically. \u003ccode\u003e\u003ca\u003ePRepr\u003c/a\u003e\u003c/code\u003e takes an arbitrary type and produces the\n   generic type we use to  represent it.\n\u003c/p\u003e\u003cp\u003eInstances for simple types are defined by the library. \n   For algebraic types, it's up to the vectoriser/client module to create\n   a suitable instance.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PRepr",
        "fct-type": "function",
        "title": "PRepr"
      },
      "index": {
        "description": "Family of Representable types These are the types that we know how to represent generically PRepr takes an arbitrary type and produces the generic type we use to represent it Instances for simple types are defined by the library For algebraic types it up to the vectoriser client module to create suitable instance",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "PRepr",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appendPA",
        "fct-type": "function",
        "title": "appendPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "appendPA",
        "normalized": "PData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appenddPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appenddPA",
        "fct-type": "function",
        "title": "appenddPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "appenddPA",
        "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendlPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData (PArray a) -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#appendlPA",
        "fct-type": "function",
        "title": "appendlPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "appendlPA",
        "normalized": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendsPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appendsPA",
        "fct-type": "function",
        "title": "appendsPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "appendsPA",
        "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:bpermutePA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#bpermutePA",
        "fct-type": "function",
        "title": "bpermutePA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "bpermutePA",
        "normalized": "PData a-\u003eArray Int-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003eArray Int-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:combine2PA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#combine2PA",
        "fct-type": "function",
        "title": "combine2PA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "combine2PA",
        "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:concatPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#concatPA",
        "fct-type": "function",
        "title": "concatPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "concatPA",
        "normalized": "PData(PArray a)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray a)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:concatlPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray (PArray a)) -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#concatlPA",
        "fct-type": "function",
        "title": "concatlPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "concatlPA",
        "normalized": "PData(PArray(PArray a))-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray(PArray a))-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:coversPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#coversPA",
        "fct-type": "function",
        "title": "coversPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "coversPA",
        "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:emptyPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#emptyPA",
        "fct-type": "function",
        "title": "emptyPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "emptyPA",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:emptydPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#emptydPA",
        "fct-type": "function",
        "title": "emptydPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "emptydPA",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractPA",
        "fct-type": "function",
        "title": "extractPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "extractPA",
        "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractssPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e SSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractssPA",
        "fct-type": "function",
        "title": "extractssPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "extractssPA",
        "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eSSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractvsPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractvsPA",
        "fct-type": "function",
        "title": "extractvsPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "extractvsPA",
        "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eVSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PRepr a) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPRepr",
        "fct-type": "method",
        "title": "fromArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "fromArrPRepr",
        "normalized": "PData(PRepr a)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Arr PRepr",
        "signature": "PData(PRepr a)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas (PRepr a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPReprs",
        "fct-type": "method",
        "title": "fromArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "fromArrPReprs",
        "normalized": "PDatas(PRepr a)-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Arr PReprs",
        "signature": "PDatas(PRepr a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PRepr a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromPRepr",
        "fct-type": "method",
        "title": "fromPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "fromPRepr",
        "normalized": "PRepr a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": "PRepr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromVectorPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromVectorPA",
        "fct-type": "function",
        "title": "fromVectorPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "fromVectorPA",
        "normalized": "Vector a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PA",
        "signature": "Vector a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromVectordPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector (PData a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromVectordPA",
        "fct-type": "function",
        "title": "fromVectordPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "fromVectordPA",
        "normalized": "Vector(PData a)-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PA",
        "signature": "Vector(PData a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexPA",
        "fct-type": "function",
        "title": "indexPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "indexPA",
        "normalized": "PData a-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexdPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexdPA",
        "fct-type": "function",
        "title": "indexdPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "indexdPA",
        "normalized": "PDatas a-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexlPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#indexlPA",
        "fct-type": "function",
        "title": "indexlPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "indexlPA",
        "normalized": "PData(PArray a)-\u003ePData Int-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray a)-\u003ePData Int-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexsPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexsPA",
        "fct-type": "function",
        "title": "indexsPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "indexsPA",
        "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexvsPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexvsPA",
        "fct-type": "function",
        "title": "indexvsPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "indexvsPA",
        "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:lengthPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#lengthPA",
        "fct-type": "function",
        "title": "lengthPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "lengthPA",
        "normalized": "PData a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:lengthdPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#lengthdPA",
        "fct-type": "function",
        "title": "lengthdPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "lengthdPA",
        "normalized": "PDatas a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PDatas a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:mkPNestedPA",
      "description": {
        "fct-descr": "\u003cp\u003eConatruct a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "VSegd -\u003e PDatas a -\u003e Segd -\u003e PData a -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#mkPNestedPA",
        "fct-type": "function",
        "title": "mkPNestedPA"
      },
      "index": {
        "description": "Conatruct nested array",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "mkPNestedPA",
        "normalized": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PNested PA",
        "signature": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:nfPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#nfPA",
        "fct-type": "function",
        "title": "nfPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "nfPA",
        "normalized": "PData a-\u003e()",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:packByTagPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#packByTagPA",
        "fct-type": "function",
        "title": "packByTagPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "packByTagPA",
        "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PA",
        "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:pprpDataPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#pprpDataPA",
        "fct-type": "function",
        "title": "pprpDataPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "pprpDataPA",
        "normalized": "PData a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "Data PA",
        "signature": "PData a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:pprpPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#pprpPA",
        "fct-type": "function",
        "title": "pprpPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "pprpPA",
        "normalized": "a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:replicatePA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#replicatePA",
        "fct-type": "function",
        "title": "replicatePA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "replicatePA",
        "normalized": "Int-\u003ea-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "Int-\u003ea-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:replicatesPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#replicatesPA",
        "fct-type": "function",
        "title": "replicatesPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "replicatesPA",
        "normalized": "Segd-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "Segd-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:similarPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#similarPA",
        "fct-type": "function",
        "title": "similarPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "similarPA",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:singletondPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#singletondPA",
        "fct-type": "function",
        "title": "singletondPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "singletondPA",
        "normalized": "PData a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:slicelPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData Int -\u003e PData Int -\u003e PData (PArray a) -\u003e PData (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#slicelPA",
        "fct-type": "function",
        "title": "slicelPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "slicelPA",
        "normalized": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPRepr",
        "fct-type": "method",
        "title": "toArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toArrPRepr",
        "normalized": "PData a-\u003ePData(PRepr a)",
        "package": "dph-lifted-vseg",
        "partial": "Arr PRepr",
        "signature": "PData a-\u003ePData(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e PDatas (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPReprs",
        "fct-type": "method",
        "title": "toArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toArrPReprs",
        "normalized": "PDatas a-\u003ePDatas(PRepr a)",
        "package": "dph-lifted-vseg",
        "partial": "Arr PReprs",
        "signature": "PDatas a-\u003ePDatas(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toNestedArrPRepr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a nested array to its generic representation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData (PArray (PRepr a))",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toNestedArrPRepr",
        "fct-type": "function",
        "title": "toNestedArrPRepr"
      },
      "index": {
        "description": "Convert nested array to its generic representation",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toNestedArrPRepr",
        "normalized": "PData(PArray a)-\u003ePData(PArray(PRepr a))",
        "package": "dph-lifted-vseg",
        "partial": "Nested Arr PRepr",
        "signature": "PData(PArray a)-\u003ePData(PArray(PRepr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e PRepr a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toPRepr",
        "fct-type": "method",
        "title": "toPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toPRepr",
        "normalized": "a-\u003ePRepr a",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": "a-\u003ePRepr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toVectorPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toVectorPA",
        "fct-type": "function",
        "title": "toVectorPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toVectorPA",
        "normalized": "PData a-\u003eVector a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PA",
        "signature": "PData a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toVectordPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Vector (PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toVectordPA",
        "fct-type": "function",
        "title": "toVectordPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "toVectordPA",
        "normalized": "PDatas a-\u003eVector(PData a)",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PA",
        "signature": "PDatas a-\u003eVector(PData a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepDataPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepDataPA",
        "fct-type": "function",
        "title": "typeRepDataPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "typeRepDataPA",
        "normalized": "PData a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Data PA",
        "signature": "PData a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepDatasPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepDatasPA",
        "fct-type": "function",
        "title": "typeRepDatasPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "typeRepDatasPA",
        "normalized": "PDatas a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Datas PA",
        "signature": "PDatas a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepPA",
        "fct-type": "function",
        "title": "typeRepPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "typeRepPA",
        "normalized": "a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep PA",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:unconcatPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData b -\u003e PData (PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#unconcatPA",
        "fct-type": "function",
        "title": "unconcatPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "unconcatPA",
        "normalized": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:unpackPA",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack an array to reveal its representation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PData (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#unpackPA",
        "fct-type": "function",
        "title": "unpackPA"
      },
      "index": {
        "description": "Unpack an array to reveal its representation",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "unpackPA",
        "normalized": "PArray a-\u003ePData(PRepr a)",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PArray a-\u003ePData(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:validPA",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#validPA",
        "fct-type": "function",
        "title": "validPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "validPA",
        "normalized": "PData a-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:ziplPA",
      "description": {
        "fct-descr": "\u003cp\u003eLifted zip on PData arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.PRepr",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PArray a) -\u003e PData (PArray b) -\u003e PData (PArray (a, b))",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Tuple.html#ziplPA",
        "fct-type": "function",
        "title": "ziplPA"
      },
      "index": {
        "description": "Lifted zip on PData arrays",
        "hierarchy": "Data Array Parallel PArray PRepr",
        "module": "Data.Array.Parallel.PArray.PRepr",
        "name": "ziplPA",
        "normalized": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that work on parallel arrays of scalar elements.\n   Unlike the functions defined in D.A.P.PArray, these only need\n   Scalar dictionaries, instead of PR or PA dictionaries. \n\u003c/p\u003e\u003cp\u003eThey are used when defining vectorised Prelude functions, \n    eg in D.A.P.Prelude.Int and D.A.P.Prelude.Double.\n\u003c/p\u003e\u003cp\u003eThe map and zipWith functions are also used by the vectoriser when\n   vectorising uses of scalar operators like (+).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html",
        "fct-type": "module",
        "title": "Scalar"
      },
      "index": {
        "description": "Functions that work on parallel arrays of scalar elements Unlike the functions defined in D.A.P.PArray these only need Scalar dictionaries instead of PR or PA dictionaries They are used when defining vectorised Prelude functions eg in D.A.P.Prelude.Int and D.A.P.Prelude.Double The map and zipWith functions are also used by the vectoriser when vectorising uses of scalar operators like",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "Scalar",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#t:Scalar",
      "description": {
        "fct-descr": "\u003cp\u003eClass of Scalar data that can be converted to and from single unboxed\n   vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
        "fct-type": "class",
        "title": "Scalar"
      },
      "index": {
        "description": "Class of Scalar data that can be converted to and from single unboxed vectors",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "Scalar",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a range of integers.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e PArray Int",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Construct range of integers",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "enumFromTo",
        "normalized": "Int-\u003eInt-\u003ePArray Int",
        "package": "dph-lifted-vseg",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003ePArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTol",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int -\u003e PArray Int -\u003e PArray (PArray Int)",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTol",
        "fct-type": "function",
        "title": "enumFromTol"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "enumFromTol",
        "normalized": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)",
        "package": "dph-lifted-vseg",
        "partial": "From Tol",
        "signature": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e PArray a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Left fold over an array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fold",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array, using the first element to initialise the state.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e PArray a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1",
        "fct-type": "function",
        "title": "fold1"
      },
      "index": {
        "description": "Left fold over an array using the first element to initialise the state",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fold1",
        "normalized": "(a-\u003ea-\u003ea)-\u003ePArray a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ePArray a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1Index",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array, also passing the index of each element\n   to the parameter function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "((Int, a) -\u003e (Int, a) -\u003e (Int, a)) -\u003e PArray a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1Index",
        "fct-type": "function",
        "title": "fold1Index"
      },
      "index": {
        "description": "Left fold over an array also passing the index of each element to the parameter function",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fold1Index",
        "normalized": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1s",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented fold of an array of arrays, using the first element of each\n   segment to initialse the state for that segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e PArray (PArray a) -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1s",
        "fct-type": "function",
        "title": "fold1s"
      },
      "index": {
        "description": "Segmented fold of an array of arrays using the first element of each segment to initialse the state for that segment",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fold1s",
        "normalized": "(a-\u003ea-\u003ea)-\u003ePArray(PArray a)-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ePArray(PArray a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1sIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented fold over an array, also passing the index of each \n   element to the parameter function.\n   TODO: fold the psegs then replicate, like in the other folds.\n         this currently has the wrong complexity.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "((Int, a) -\u003e (Int, a) -\u003e (Int, a)) -\u003e PArray (PArray a) -\u003e PArray Int",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1sIndex",
        "fct-type": "function",
        "title": "fold1sIndex"
      },
      "index": {
        "description": "Segmented fold over an array also passing the index of each element to the parameter function TODO fold the psegs then replicate like in the other folds this currently has the wrong complexity",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fold1sIndex",
        "normalized": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray(PArray a)-\u003ePArray Int",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray(PArray a)-\u003ePArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:folds",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented fold of an array of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e PArray (PArray a) -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#folds",
        "fct-type": "function",
        "title": "folds"
      },
      "index": {
        "description": "Segmented fold of an array of arrays",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "folds",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray(PArray a)-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray(PArray a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
        "fct-type": "method",
        "title": "fromScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fromScalarPData",
        "normalized": "PData a-\u003eArray a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PData",
        "signature": "PData a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromScalarPDatas",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Arrays a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPDatas",
        "fct-type": "method",
        "title": "fromScalarPDatas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fromScalarPDatas",
        "normalized": "PDatas a-\u003eArrays a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PDatas",
        "signature": "PDatas a-\u003eArrays a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray",
        "fct-type": "function",
        "title": "fromUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fromUArray",
        "normalized": "Array a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "Array a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray2",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an U.Array of pairs to a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array (a, b) -\u003e PArray (a, b)",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray2",
        "fct-type": "function",
        "title": "fromUArray2"
      },
      "index": {
        "description": "Convert an U.Array of pairs to PArray",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "fromUArray2",
        "normalized": "Array(a,b)-\u003ePArray(a,b)",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "Array(a,b)-\u003ePArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to every element of an array, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b) -\u003e PArray a -\u003e PArray b",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply worker function to every element of an array yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ePArray a-\u003ePArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
        "fct-type": "method",
        "title": "toScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "toScalarPData",
        "normalized": "Array a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PData",
        "signature": "Array a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toScalarPDatas",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Arrays a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPDatas",
        "fct-type": "method",
        "title": "toScalarPDatas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "toScalarPDatas",
        "normalized": "Arrays a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PDatas",
        "signature": "Arrays a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toUArray",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toUArray",
        "fct-type": "function",
        "title": "toUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "toUArray",
        "normalized": "PArray a-\u003eArray a",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "PArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eZip two arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e PArray a -\u003e PArray b -\u003e PArray c",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Zip two arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003eZip three arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Zip three arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003eZip four arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Zip four arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003eZip five arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Zip five arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003eZip six arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Zip six arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003eZip seven arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Zip seven arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith8",
      "description": {
        "fct-descr": "\u003cp\u003eEight seven arrays, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray.Scalar",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith8",
        "fct-type": "function",
        "title": "zipWith8"
      },
      "index": {
        "description": "Eight seven arrays yielding new array",
        "hierarchy": "Data Array Parallel PArray Scalar",
        "module": "Data.Array.Parallel.PArray.Scalar",
        "name": "zipWith8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnvectorised parallel arrays.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e These operators may be used directly by unvectorised client programs.\n\u003c/li\u003e\u003cli\u003e They are also used by the \u003ca\u003eData.Array.Parallel.Lifted.Combinators\u003c/a\u003e\n     module to define the closure converted versions that vectorised code\n     uses.\n\u003c/li\u003e\u003cli\u003e In general, the operators here are all unsafe and don't do bounds checks.\n     The lifted versions also don't check that each of the argument arrays\n     have the same length.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-PArray.html",
        "fct-type": "module",
        "title": "PArray"
      },
      "index": {
        "description": "Unvectorised parallel arrays These operators may be used directly by unvectorised client programs They are also used by the Data.Array.Parallel.Lifted.Combinators module to define the closure converted versions that vectorised code uses In general the operators here are all unsafe and don do bounds checks The lifted versions also don check that each of the argument arrays have the same length",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#t:PA",
      "description": {
        "fct-descr": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
        "fct-type": "class",
        "title": "PA"
      },
      "index": {
        "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PA",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "parallel array consisting of length field and some array data",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "append",
        "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:appendl",
      "description": {
        "fct-descr": "\u003cp\u003eLifted append.\n   Both arrays must have the same length\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray (PArray a) -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#appendl",
        "fct-type": "function",
        "title": "appendl"
      },
      "index": {
        "description": "Lifted append Both arrays must have the same length",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "appendl",
        "normalized": "PArray(PArray a)-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray(PArray a)-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:combine2",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e PArray a -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#combine2",
        "fct-type": "function",
        "title": "combine2"
      },
      "index": {
        "description": "Combine two arrays based on selector",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "combine2",
        "normalized": "Sel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Sel-\u003ePArray a-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate nested array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "concat",
        "normalized": "PArray(PArray a)-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:concatl",
      "description": {
        "fct-descr": "\u003cp\u003eLifted concat.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray (PArray a)) -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#concatl",
        "fct-type": "function",
        "title": "concatl"
      },
      "index": {
        "description": "Lifted concat",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "concatl",
        "normalized": "PArray(PArray(PArray a))-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray(PArray a))-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). An empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "empty",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a range of integers.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e PArray Int",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Construct range of integers",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "enumFromTo",
        "normalized": "Int-\u003eInt-\u003ePArray Int",
        "package": "dph-lifted-vseg",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003ePArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:enumFromTol",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int -\u003e PArray Int -\u003e PArray (PArray Int)",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTol",
        "fct-type": "function",
        "title": "enumFromTol"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "enumFromTol",
        "normalized": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)",
        "package": "dph-lifted-vseg",
        "partial": "From Tol",
        "signature": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a range of elements from an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Int -\u003e Int -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "Extract range of elements from an array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "extract",
        "normalized": "PArray a-\u003eInt-\u003eInt-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003eInt-\u003eInt-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extracts",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented extract.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector (PArray a) -\u003e SSegd -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#extracts",
        "fct-type": "function",
        "title": "extracts"
      },
      "index": {
        "description": "Segmented extract",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "extracts",
        "normalized": "Vector(PArray a)-\u003eSSegd-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Vector(PArray a)-\u003eSSegd-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extracts-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eextracts\u003c/a\u003e\u003c/code\u003e that takes arrays of sources, starts and lengths of\n   the segments, and uses these to build the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n   TODO: The lengths of the sources, starts and lengths arrays must be the same, \n         but this is not checked.\n         All sourceids must point to valid data arrays.\n         Segments must be within their corresponding source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector (PArray a)-\u003e PArray Int-\u003e PArray Int-\u003e PArray Int-\u003e PArray a",
        "fct-type": "function",
        "title": "extracts'"
      },
      "index": {
        "description": "Wrapper for extracts that takes arrays of sources starts and lengths of the segments and uses these to build the SSegd TODO The lengths of the sources starts and lengths arrays must be the same but this is not checked All sourceids must point to valid data arrays Segments must be within their corresponding source array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "extracts'",
        "normalized": "Vector(PArray a)-\u003ePArray Int-\u003ePArray Int-\u003ePArray Int-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Vector(PArray a)-\u003ePArray Int-\u003ePArray Int-\u003ePArray Int-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[a] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list to PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromList",
        "normalized": "[a]-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "List",
        "signature": "[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromUArray",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray",
        "fct-type": "function",
        "title": "fromUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromUArray",
        "normalized": "Array a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "Array a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromUArray2",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an U.Array of pairs to a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array (a, b) -\u003e PArray (a, b)",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray2",
        "fct-type": "function",
        "title": "fromUArray2"
      },
      "index": {
        "description": "Convert an U.Array of pairs to PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromUArray2",
        "normalized": "Array(a,b)-\u003ePArray(a,b)",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "Array(a,b)-\u003ePArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "Convert Vector to PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromVector",
        "normalized": "Vector a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "Vector",
        "signature": "Vector a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Lookup a single element from the source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Lookup single element from the source array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "index",
        "normalized": "PArray a-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:indexl",
      "description": {
        "fct-descr": "\u003cp\u003eO(len indices). Lookup a several elements from several source arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray Int -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#indexl",
        "fct-type": "function",
        "title": "indexl"
      },
      "index": {
        "description": "len indices Lookup several elements from several source arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "indexl",
        "normalized": "PArray(PArray a)-\u003ePArray Int-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray Int-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length field of a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Take the length field of PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "length",
        "normalized": "PArray a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:lengthl",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length of some arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray Int",
        "fct-source": "src/Data-Array-Parallel-PArray.html#lengthl",
        "fct-type": "function",
        "title": "lengthl"
      },
      "index": {
        "description": "Take the length of some arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "lengthl",
        "normalized": "PArray(PArray a)-\u003ePArray Int",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:nestUSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a nested array from a segment descriptor and some flat data.\n   The segment descriptor must represent as many elements as present\n   in the flat data array, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e PArray a -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#nestUSegd",
        "fct-type": "function",
        "title": "nestUSegd"
      },
      "index": {
        "description": "Create nested array from segment descriptor and some flat data The segment descriptor must represent as many elements as present in the flat data array else error",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "nestUSegd",
        "normalized": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "USegd",
        "signature": "Segd-\u003ePArray a-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:nf",
      "description": {
        "fct-descr": "\u003cp\u003eForce an array to normal form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray.html#nf",
        "fct-type": "function",
        "title": "nf"
      },
      "index": {
        "description": "Force an array to normal form",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "nf",
        "normalized": "PArray a-\u003e()",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the elements of an array that have their tag set to True.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray Bool -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Select the elements of an array that have their tag set to True",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "pack",
        "normalized": "PArray a-\u003ePArray Bool-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray Bool-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:packByTag",
      "description": {
        "fct-descr": "\u003cp\u003eFilter an array based on some tags.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Array Tag -\u003e Tag -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#packByTag",
        "fct-type": "function",
        "title": "packByTag"
      },
      "index": {
        "description": "Filter an array based on some tags",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "packByTag",
        "normalized": "PArray a-\u003eArray Tag-\u003eTag-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "By Tag",
        "signature": "PArray a-\u003eArray Tag-\u003eTag-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:packl",
      "description": {
        "fct-descr": "\u003cp\u003eLifted pack.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray (PArray Bool) -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#packl",
        "fct-type": "function",
        "title": "packl"
      },
      "index": {
        "description": "Lifted pack",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "packl",
        "normalized": "PArray(PArray a)-\u003ePArray(PArray Bool)-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray(PArray Bool)-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the same value.\n   We require the replication count to be \u003e 0 so that it's easier to maintain\n   the validPR invariants for nested arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003ea-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicatel",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum lengths). Lifted replicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int -\u003e PArray a -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#replicatel",
        "fct-type": "function",
        "title": "replicatel"
      },
      "index": {
        "description": "sum lengths Lifted replicate",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "replicatel",
        "normalized": "PArray Int-\u003ePArray a-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray Int-\u003ePArray a-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicates",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#replicates",
        "fct-type": "function",
        "title": "replicates"
      },
      "index": {
        "description": "sum lengths Segmented replicate",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "replicates",
        "normalized": "Segd-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Segd-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicates-39-",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum lengths). Wrapper for segmented replicate that takes replication counts\n  and uses them to build the \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#replicates%27",
        "fct-type": "function",
        "title": "replicates'"
      },
      "index": {
        "description": "sum lengths Wrapper for segmented replicate that takes replication counts and uses them to build the Segd",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "replicates'",
        "normalized": "PArray Int-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray Int-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Produce an array containing a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Produce an array containing single element",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "singleton",
        "normalized": "a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:singletonl",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Produce an array of singleton arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#singletonl",
        "fct-type": "function",
        "title": "singletonl"
      },
      "index": {
        "description": "Produce an array of singleton arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "singletonl",
        "normalized": "PArray a-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a range of elements from an arrary.\n   Like \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e but with the parameters in a different order.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Extract range of elements from an arrary Like extract but with the parameters in different order",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "slice",
        "normalized": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:slicel",
      "description": {
        "fct-descr": "\u003cp\u003eExtract some slices from some arrays.\n   The arrays of starting indices and lengths must themselves\n   have the same length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray Int -\u003e PArray Int -\u003e PArray (PArray a) -\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#slicel",
        "fct-type": "function",
        "title": "slicel"
      },
      "index": {
        "description": "Extract some slices from some arrays The arrays of starting indices and lengths must themselves have the same length",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "slicel",
        "normalized": "PArray Int-\u003ePArray Int-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray Int-\u003ePArray Int-\u003ePArray(PArray a)-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:takeUSegd",
      "description": {
        "fct-descr": "\u003cp\u003eTake the segment descriptor from a nested array and demote it to a\n   plain Segd. This is unsafe because it can cause index space overflow.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-PArray.html#takeUSegd",
        "fct-type": "function",
        "title": "takeUSegd"
      },
      "index": {
        "description": "Take the segment descriptor from nested array and demote it to plain Segd This is unsafe because it can cause index space overflow",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "takeUSegd",
        "normalized": "PArray(PArray a)-\u003eSegd",
        "package": "dph-lifted-vseg",
        "partial": "USegd",
        "signature": "PArray(PArray a)-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-PArray.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert PArray to list",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "toList",
        "normalized": "PArray a-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "List",
        "signature": "PArray a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toUArray",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toUArray",
        "fct-type": "function",
        "title": "toUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "toUArray",
        "normalized": "PArray a-\u003eArray a",
        "package": "dph-lifted-vseg",
        "partial": "UArray",
        "signature": "PArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e        \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Convert PArray to Vector",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "toVector",
        "normalized": "PArray a-\u003eVector a",
        "package": "dph-lifted-vseg",
        "partial": "Vector",
        "signature": "PArray a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:typeRep",
      "description": {
        "fct-descr": "\u003cp\u003eGet the type of a thing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray.html#typeRep",
        "fct-type": "function",
        "title": "typeRep"
      },
      "index": {
        "description": "Get the type of thing",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "typeRep",
        "normalized": "a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unconcat",
      "description": {
        "fct-descr": "\u003cp\u003eImpose a nesting structure on a flat array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray b -\u003e PArray (PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#unconcat",
        "fct-type": "function",
        "title": "unconcat"
      },
      "index": {
        "description": "Impose nesting structure on flat array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "unconcat",
        "normalized": "PArray(PArray a)-\u003ePArray b-\u003ePArray(PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray b-\u003ePArray(PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (a, b) -\u003e (PArray a, PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "Unzip an array of pairs into pair of arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "unzip",
        "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(a,b)-\u003e(PArray a,PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unzipl",
      "description": {
        "fct-descr": "\u003cp\u003eLifted unzip\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray (a, b)) -\u003e PArray (PArray a, PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#unzipl",
        "fct-type": "function",
        "title": "unzipl"
      },
      "index": {
        "description": "Lifted unzip",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "unzipl",
        "normalized": "PArray(PArray(a,b))-\u003ePArray(PArray a,PArray b)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray(a,b))-\u003ePArray(PArray a,PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that an array has a valid internal representation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check that an array has valid internal representation",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "valid",
        "normalized": "PArray a-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n   The two arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray b -\u003e PArray (a, b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs The two arrays must have the same length else error",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zip",
        "normalized": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray b-\u003ePArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip three arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray (a, b, c)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Zip three arrays All arrays must have the same length else error",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zip3",
        "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray(a,b,c)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip four arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray (a, b, c, d)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "Zip four arrays All arrays must have the same length else error",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zip4",
        "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray(a,b,c,d)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip five arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray (a, b, c, d, e)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "Zip five arrays All arrays must have the same length else error",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zip5",
        "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray(a,b,c,d,e)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray(a,b,c,d,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zipl",
      "description": {
        "fct-descr": "\u003cp\u003eLifted zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e PArray (PArray b) -\u003e PArray (PArray (a, b))",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zipl",
        "fct-type": "function",
        "title": "zipl"
      },
      "index": {
        "description": "Lifted zip",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zipl",
        "normalized": "PArray(PArray a)-\u003ePArray(PArray b)-\u003ePArray(PArray(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray(PArray b)-\u003ePArray(PArray(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module sets up the basic vectorisation map for vectorising the DPH Prelude.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "This module sets up the basic vectorisation map for vectorising the DPH Prelude",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Base",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Bool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Eq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Eq"
      },
      "index": {
        "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Eq",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Float",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Num",
      "description": {
        "fct-descr": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Num"
      },
      "index": {
        "description": "Basic numeric class Minimal complete definition all except negate or",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Num",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Ord",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Ord"
      },
      "index": {
        "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Ord",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Ordering",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Ordering",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:PArr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "PArr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "PArr",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Show",
      "description": {
        "fct-descr": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Show"
      },
      "index": {
        "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Show",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(*) *",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(+) +",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(-) -",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(/=) /=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(\u003c) \u003c",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(\u003c=) \u003c=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(==) ==",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(\u003e) \u003e",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "(\u003e=) \u003e=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:EQ",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "EQ",
        "fct-type": "function",
        "title": "EQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "EQ",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "EQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:False",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "False",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "False",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:GT",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "GT",
        "fct-type": "function",
        "title": "GT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "GT",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:LT",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "LT",
        "fct-type": "function",
        "title": "LT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "LT",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "LT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:True",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "True",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "True",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:abs",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "abs"
      },
      "index": {
        "description": "Absolute value",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "abs",
        "normalized": "a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:compare",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Ordering",
        "fct-type": "method",
        "title": "compare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "compare",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:fromInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Integer -\u003e a",
        "fct-type": "method",
        "title": "fromInteger"
      },
      "index": {
        "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "fromInteger",
        "normalized": "Integer-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "Integer",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "max",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "min",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:negate",
      "description": {
        "fct-descr": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "negate"
      },
      "index": {
        "description": "Unary negation",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "negate",
        "normalized": "a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:signum",
      "description": {
        "fct-descr": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Base",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "signum"
      },
      "index": {
        "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
        "hierarchy": "Data Array Parallel Prelude Base",
        "module": "Data.Array.Parallel.Prelude.Base",
        "name": "signum",
        "normalized": "a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html",
        "fct-type": "module",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#t:Bool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Boolean or",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "(||) ||",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Boolean and",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "(&&) &&",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:False",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "False",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "False",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:True",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "True",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "True",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:andP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#andP",
        "fct-type": "function",
        "title": "andP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "andP",
        "normalized": "PArr Bool-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:fromBool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "fromBool",
        "normalized": "Bool-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Bool",
        "signature": "Bool-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e Bool",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Boolean not",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "not",
        "normalized": "Bool-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:orP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#orP",
        "fct-type": "function",
        "title": "orP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "orP",
        "normalized": "PArr Bool-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:otherwise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "otherwise"
      },
      "index": {
        "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "otherwise",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:toBool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#toBool",
        "fct-type": "function",
        "title": "toBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "toBool",
        "normalized": "Int-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "Bool",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html",
        "fct-type": "module",
        "title": "Double"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(*) *",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-42--42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2A%2A",
        "fct-type": "function",
        "title": "(**)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(**) **",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(+) +",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(-) -",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-47-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(/) /",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(/=) /=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003c) \u003c",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003c=) \u003c=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(==) ==",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003e) \u003e",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003e=) \u003e=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "abs",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:acos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#acos",
        "fct-type": "function",
        "title": "acos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "acos",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:acosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#acosh",
        "fct-type": "function",
        "title": "acosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "acosh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:asin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#asin",
        "fct-type": "function",
        "title": "asin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "asin",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:asinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#asinh",
        "fct-type": "function",
        "title": "asinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "asinh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:atan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#atan",
        "fct-type": "function",
        "title": "atan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "atan",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:atanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#atanh",
        "fct-type": "function",
        "title": "atanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "atanh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:cos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#cos",
        "fct-type": "function",
        "title": "cos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "cos",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:cosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#cosh",
        "fct-type": "function",
        "title": "cosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "cosh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:exp",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#exp",
        "fct-type": "function",
        "title": "exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "exp",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:fromInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "fromInt",
        "normalized": "Int-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": "Int-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:log",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#log",
        "fct-type": "function",
        "title": "log"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "log",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:logBase",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#logBase",
        "fct-type": "function",
        "title": "logBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "logBase",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "Base",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "max",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "maxIndexP",
        "normalized": "PArr Double-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "maximumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "min",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "minIndexP",
        "normalized": "PArr Double-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "minimumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "negate",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:pi",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#pi",
        "fct-type": "function",
        "title": "pi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "pi",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "productP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sin",
        "fct-type": "function",
        "title": "sin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sin",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sinh",
        "fct-type": "function",
        "title": "sinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sinh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sqrt",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:tan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "tan",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:tanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#tanh",
        "fct-type": "function",
        "title": "tanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "tanh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html",
        "fct-type": "module",
        "title": "Int"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(*) *",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(+) +",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(-) -",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(/=) /=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003c) \u003c",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003c=) \u003c=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(==) ==",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003e) \u003e",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003e=) \u003e=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "abs",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:div",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "div",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:enumFromToP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e PArr Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#enumFromToP",
        "fct-type": "function",
        "title": "enumFromToP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "enumFromToP",
        "normalized": "Int-\u003eInt-\u003ePArr Int",
        "package": "dph-lifted-vseg",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003ePArr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "max",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "maxIndexP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "maximumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "min",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "minIndexP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "minimumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:mod",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#mod",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "mod",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "negate",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "productP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "sqrt",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "sumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Ordering",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Ordering.html",
        "fct-type": "module",
        "title": "Ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Ordering",
        "module": "Data.Array.Parallel.Prelude.Ordering",
        "name": "Ordering",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#t:Ordering",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Ordering",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Ordering",
        "module": "Data.Array.Parallel.Prelude.Ordering",
        "name": "Ordering",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isEQ",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Ordering",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Ordering -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Ordering.html#isEQ",
        "fct-type": "function",
        "title": "isEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Ordering",
        "module": "Data.Array.Parallel.Prelude.Ordering",
        "name": "isEQ",
        "normalized": "Ordering-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "EQ",
        "signature": "Ordering-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isGT",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Ordering",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Ordering -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Ordering.html#isGT",
        "fct-type": "function",
        "title": "isGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Ordering",
        "module": "Data.Array.Parallel.Prelude.Ordering",
        "name": "isGT",
        "normalized": "Ordering-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "GT",
        "signature": "Ordering-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isLT",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Ordering",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Ordering -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Ordering.html#isLT",
        "fct-type": "function",
        "title": "isLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Ordering",
        "module": "Data.Array.Parallel.Prelude.Ordering",
        "name": "isLT",
        "normalized": "Ordering-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "LT",
        "signature": "Ordering-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosure converted tuple data constructors used by the vectoriser.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Tuple",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html",
        "fct-type": "module",
        "title": "Tuple"
      },
      "index": {
        "description": "Closure converted tuple data constructors used by the vectoriser",
        "hierarchy": "Data Array Parallel Prelude Tuple",
        "module": "Data.Array.Parallel.Prelude.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Tuple",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (a, b))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup2",
        "fct-type": "function",
        "title": "tup2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Tuple",
        "module": "Data.Array.Parallel.Prelude.Tuple",
        "name": "tup2",
        "normalized": "a-\u003e(b-\u003e(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Tuple",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (a, b, c)))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup3",
        "fct-type": "function",
        "title": "tup3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Tuple",
        "module": "Data.Array.Parallel.Prelude.Tuple",
        "name": "tup3",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup4",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Tuple",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (a, b, c, d))))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup4",
        "fct-type": "function",
        "title": "tup4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Tuple",
        "module": "Data.Array.Parallel.Prelude.Tuple",
        "name": "tup4",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup5",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Tuple",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (a, b, c, d, e)))))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup5",
        "fct-type": "function",
        "title": "tup5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Tuple",
        "module": "Data.Array.Parallel.Prelude.Tuple",
        "name": "tup5",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html",
        "fct-type": "module",
        "title": "Word8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(*) *",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(+) +",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(-) -",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(/=) /=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003c) \u003c",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003c=) \u003c=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(==) ==",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003e) \u003e",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003e=) \u003e=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "abs",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:div",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "div",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:fromInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "fromInt",
        "normalized": "Int-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "max",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "maxIndexP",
        "normalized": "PArr Word-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "maximumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "min",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "minIndexP",
        "normalized": "PArr Word-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Index",
        "signature": "PArr Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "minimumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:mod",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#mod",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "mod",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "negate",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "productP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "sqrt",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "sumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:toInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#toInt",
        "fct-type": "function",
        "title": "toInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "toInt",
        "normalized": "Word-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "Int",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules bundles all vectorised versions of Prelude definitions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module should not be explicitly imported in user code anymore.\u003c/em\u003e\n  User code should only import \u003ccode\u003e\u003ca\u003eParallel\u003c/a\u003e\u003c/code\u003e and, until the\n  vectoriser supports type classes, the type-specific\n  modules \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude.html",
        "fct-type": "module",
        "title": "Prelude"
      },
      "index": {
        "description": "This modules bundles all vectorised versions of Prelude definitions This module should not be explicitly imported in user code anymore User code should only import Parallel and until the vectoriser supports type classes the type-specific modules",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Prelude",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the API used by the vectoriser.\n   The vectoriser wants a slightly different interface to the one used \n   natively by the library. This module performs the impedance matching.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "This is the API used by the vectoriser The vectoriser wants slightly different interface to the one used natively by the library This module performs the impedance matching",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the fixity of the closure type constructor.\n\u003c/p\u003e\u003cp\u003eThe type of closures.\n   This bundles up:\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
        "fct-type": "data",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Define the fixity of the closure type constructor The type of closures This bundles up",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": ":-\u003e",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PA",
      "description": {
        "fct-descr": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
        "fct-type": "class",
        "title": "PA"
      },
      "index": {
        "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "PA",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PData",
      "description": {
        "fct-descr": "\u003cp\u003eA chunk of parallel array data with a linear index space.\n\u003c/p\u003e\u003cp\u003eIn contrast to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e may not have a fixed length, and its\n   elements may have been converted to a generic representation. Whereas a\n   \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e is the \"user view\" of an array, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e is a type only\n   used internally to the library.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData",
        "fct-type": "function",
        "title": "PData"
      },
      "index": {
        "description": "chunk of parallel array data with linear index space In contrast to PArray PData may not have fixed length and its elements may have been converted to generic representation Whereas PArray is the user view of an array PData is type only used internally to the library",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "PData",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PDatas",
      "description": {
        "fct-descr": "\u003cp\u003eSeveral chunks of parallel array data.\n\u003c/p\u003e\u003cp\u003eAlthough a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e of atomic type such as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e only contains a\n   single \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e chunk, nested arrays may contain several, which we \n   wrap up into a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas",
        "fct-type": "function",
        "title": "PDatas"
      },
      "index": {
        "description": "Several chunks of parallel array data Although PArray of atomic type such as Int only contains single PData chunk nested arrays may contain several which we wrap up into PDatas",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "PDatas",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PDatas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PR",
      "description": {
        "fct-descr": "\u003cp\u003eThe PR (Parallel Representation) class holds primitive array operators that\n   work on our generic representation of data.\n\u003c/p\u003e\u003cp\u003eThere are instances for all atomic types such  as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, tuples,\n   nested arrays `PData (PArray a)` and for the  generic types we used to represent\n   user level algebraic data, \u003ccode\u003eSum2\u003c/code\u003e and \u003ccode\u003eWrap\u003c/code\u003e and \u003ccode\u003eVoid\u003c/code\u003e. All array data \n   is converted to this fixed set of types.\n\u003c/p\u003e\u003cp\u003eTODO: refactor to change PData Int to U.Array Int, \n         there's not need to wrap an extra PData constructor around these arrays,\n         and the type of bpermute is different than the others.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PR",
        "fct-type": "class",
        "title": "PR"
      },
      "index": {
        "description": "The PR Parallel Representation class holds primitive array operators that work on our generic representation of data There are instances for all atomic types such as Int and Double tuples nested arrays PData PArray and for the generic types we used to represent user level algebraic data Sum2 and Wrap and Void All array data is converted to this fixed set of types TODO refactor to change PData Int to U.Array Int there not need to wrap an extra PData constructor around these arrays and the type of bpermute is different than the others",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "PR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PRepr",
      "description": {
        "fct-descr": "\u003cp\u003eFamily of Representable types. These are the types that we know how to\n   represent generically. \u003ccode\u003e\u003ca\u003ePRepr\u003c/a\u003e\u003c/code\u003e takes an arbitrary type and produces the\n   generic type we use to  represent it.\n\u003c/p\u003e\u003cp\u003eInstances for simple types are defined by the library. \n   For algebraic types, it's up to the vectoriser/client module to create\n   a suitable instance.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PRepr",
        "fct-type": "function",
        "title": "PRepr"
      },
      "index": {
        "description": "Family of Representable types These are the types that we know how to represent generically PRepr takes an arbitrary type and produces the generic type we use to represent it Instances for simple types are defined by the library For algebraic types it up to the vectoriser client module to create suitable instance",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "PRepr",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Scalar",
      "description": {
        "fct-descr": "\u003cp\u003eClass of Scalar data that can be converted to and from single unboxed\n   vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
        "fct-type": "class",
        "title": "Scalar"
      },
      "index": {
        "description": "Class of Scalar data that can be converted to and from single unboxed vectors",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Scalar",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sel2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Prim.html#Sel2",
        "fct-type": "type",
        "title": "Sel2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Sel2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sels2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Sum2.html#Sels2",
        "fct-type": "type",
        "title": "Sels2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Sels2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Sels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sum2",
      "description": {
        "fct-descr": "\u003cp\u003eSum types used for the generic representation of algebraic data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Sum2"
      },
      "index": {
        "description": "Sum types used for the generic representation of algebraic data",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Sum2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sum3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Sum3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Sum3",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e type is used when representing enumerations. \n\u003c/p\u003e\u003cp\u003eA type like Bool is represented as \u003ccode\u003eSum2 Void Void\u003c/code\u003e, meaning that we only\n   only care about the tag of the data constructor and not its argumnent.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "The Void type is used when representing enumerations type like Bool is represented as Sum2 Void Void meaning that we only only care about the tag of the data constructor and not its argumnent",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Void",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Wrap",
      "description": {
        "fct-descr": "\u003cp\u003eWhen converting a data type to its generic representation, we use\n   \u003ccode\u003e\u003ca\u003eWrap\u003c/a\u003e\u003c/code\u003e to help us convert only one layer at a time. For example:\n\u003c/p\u003e\u003cpre\u003e\n   data Foo a = Foo Int a\n\ninstance PA a =\u003e PA (Foo a) where\n    type PRepr (Foo a) = (Int, Wrap a)  -- define how (Foo a) is represented\n\u003c/pre\u003e\u003cp\u003eHere we've converted the \u003ccode\u003eFoo\u003c/code\u003e data constructor to a pair, and Int\n   is its own representation type. We have PData/PR instances for pairs and\n   Ints, so we can work with arrays of these types. However, we can't just\n   use (Int, a) as the representation of (Foo a) because \u003ccode\u003ea\u003c/code\u003e might\n   be user defined and we won't have PData/PR instances for it.\n\u003c/p\u003e\u003cp\u003eInstead, we wrap the second element with the Wrap constructor, which tells\n   us that if we want to process this element we still need to convert it\n   to the generic representation (and back). This last part is done by\n   the PR instance of Wrap, who's methods are defined by calls to the *PD \n   functions from \u003ca\u003eData.Array.Parallel.PArray.PRepr\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Wrap"
      },
      "index": {
        "description": "When converting data type to its generic representation we use Wrap to help us convert only one layer at time For example data Foo Foo Int instance PA PA Foo where type PRepr Foo Int Wrap define how Foo is represented Here we ve converted the Foo data constructor to pair and Int is its own representation type We have PData PR instances for pairs and Ints so we can work with arrays of these types However we can just use Int as the representation of Foo because might be user defined and we won have PData PR instances for it Instead we wrap the second element with the Wrap constructor which tells us that if we want to process this element we still need to convert it to the generic representation and back This last part is done by the PR instance of Wrap who methods are defined by calls to the PD functions from Data.Array.Parallel.PArray.PRepr",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Wrap",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:-36-:",
      "description": {
        "fct-descr": "\u003cp\u003eApply a closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "forall a b.  (a :-\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Prim.html#%24%3A",
        "fct-type": "function",
        "title": "($:)"
      },
      "index": {
        "description": "Apply closure",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "($:) $:",
        "normalized": "a b c(b-\u003ed)-\u003eb-\u003ed",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "forall a b.(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt2_1",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Alt2_1 a",
        "fct-type": "function",
        "title": "Alt2_1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Alt2_1",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt2_2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Alt2_2 b",
        "fct-type": "function",
        "title": "Alt2_2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Alt2_2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_1",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Alt3_1 a",
        "fct-type": "function",
        "title": "Alt3_1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Alt3_1",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Alt3_2 b",
        "fct-type": "function",
        "title": "Alt3_2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Alt3_2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Alt3_3 c",
        "fct-type": "function",
        "title": "Alt3_3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Alt3_3",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Clo",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Clo (env -\u003e a -\u003e b) (Int -\u003e PData env -\u003e PData a -\u003e PData b) env",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
        "fct-type": "function",
        "title": "Clo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Clo",
        "normalized": "Clo(a-\u003eb-\u003ec)(Int-\u003ePData a-\u003ePData b-\u003ePData c)a",
        "package": "dph-lifted-vseg",
        "partial": "Clo",
        "signature": "Clo(env-\u003ea-\u003eb)(Int-\u003ePData env-\u003ePData a-\u003ePData b)env"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Wrap",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Wrap",
        "fct-type": "function",
        "title": "Wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "Wrap",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appendPR",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendPR",
        "fct-type": "method",
        "title": "appendPR"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "appendPR",
        "normalized": "PData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appenddPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Append two collections of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appenddPR",
        "fct-type": "method",
        "title": "appenddPR"
      },
      "index": {
        "description": "Append two collections of PData",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "appenddPR",
        "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appendvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented append.\n\u003c/p\u003e\u003cp\u003eThe first descriptor defines the segmentation of the result, \n   and the others define the segmentation of each source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendvsPR",
        "fct-type": "method",
        "title": "appendvsPR"
      },
      "index": {
        "description": "Segmented append The first descriptor defines the segmentation of the result and the others define the segmentation of each source array",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "appendvsPR",
        "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(e -\u003e a -\u003e b) -\u003e (Int# -\u003e PData e -\u003e PData a -\u003e PData b) -\u003e e -\u003e a :-\u003e b",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure",
        "fct-type": "function",
        "title": "closure"
      },
      "index": {
        "description": "Construct closure",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(Int #-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003eb-\u003ec",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(e-\u003ea-\u003eb)-\u003e(Int #-\u003ePData e-\u003ePData a-\u003ePData b)-\u003ee-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure1",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "forall a b.  (a -\u003e b) -\u003e (PArray a -\u003e PArray b) -\u003e a :-\u003e b",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure1",
        "fct-type": "function",
        "title": "closure1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure1",
        "normalized": "a b c(b-\u003ed)-\u003e(PArray b-\u003ePArray d)-\u003eb-\u003ed",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "forall a b.(a-\u003eb)-\u003e(PArray a-\u003ePArray b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (PArray a -\u003e PArray b -\u003e PArray c) -\u003e a :-\u003e (b :-\u003e c)",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure2",
        "fct-type": "function",
        "title": "closure2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure2",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure3",
        "fct-type": "function",
        "title": "closure3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure4",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure4",
        "fct-type": "function",
        "title": "closure4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure5",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure5",
        "fct-type": "function",
        "title": "closure5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure6",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure6",
        "fct-type": "function",
        "title": "closure6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure7",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure7",
        "fct-type": "function",
        "title": "closure7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure8",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
        "fct-source": "src/Data-Array-Parallel-Prim.html#closure8",
        "fct-type": "function",
        "title": "closure8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "closure8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PA_Double-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Double# -\u003e PArray_Double# -\u003e PArray_Double#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#combine2PA_Double%23",
        "fct-type": "function",
        "title": "combine2PA_Double#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "combine2PA_Double#",
        "normalized": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Double #-\u003ePArray_Double #-\u003ePArray_Double #",
        "package": "dph-lifted-vseg",
        "partial": "PA Double",
        "signature": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Double #-\u003ePArray_Double #-\u003ePArray_Double #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PA_Int-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#combine2PA_Int%23",
        "fct-type": "function",
        "title": "combine2PA_Int#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "combine2PA_Int#",
        "normalized": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #",
        "package": "dph-lifted-vseg",
        "partial": "PA Int",
        "signature": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PD",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#combine2PD",
        "fct-type": "function",
        "title": "combine2PD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "combine2PD",
        "normalized": "Int #-\u003eSel-\u003ePData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "Int #-\u003eSel-\u003ePData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PR",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e\u003cp\u003eSee the documentation for selectors in the dph-prim-seq library\n   for how this works.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#combine2PR",
        "fct-type": "method",
        "title": "combine2PR"
      },
      "index": {
        "description": "Combine two arrays based on selector See the documentation for selectors in the dph-prim-seq library for how this works",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "combine2PR",
        "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:coversPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Check that an index is within an array.\n\u003c/p\u003e\u003cp\u003eArrays containing \u003ccode\u003eVoid\u003c/code\u003e elements don't have a fixed length, and return \n   \u003ccode\u003eVoid\u003c/code\u003e for all indices. If the array does have a fixed length, and the \n   flag is true, then we allow the index to be equal to this length, as\n   well as less than it.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#coversPR",
        "fct-type": "method",
        "title": "coversPR"
      },
      "index": {
        "description": "debugging Check that an index is within an array Arrays containing Void elements don have fixed length and return Void for all indices If the array does have fixed length and the flag is true then we allow the index to be equal to this length as well as less than it",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "coversPR",
        "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:elementsSel2_0-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#elementsSel2_0%23",
        "fct-type": "function",
        "title": "elementsSel2_0#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "elementsSel2_0#",
        "normalized": "Sel-\u003eInt #",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": "Sel-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:elementsSel2_1-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#elementsSel2_1%23",
        "fct-type": "function",
        "title": "elementsSel2_1#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "elementsSel2_1#",
        "normalized": "Sel-\u003eInt #",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": "Sel-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPA_Double-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray_Double#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#emptyPA_Double%23",
        "fct-type": "function",
        "title": "emptyPA_Double#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "emptyPA_Double#",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPA_Int-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray_Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#emptyPA_Int%23",
        "fct-type": "function",
        "title": "emptyPA_Int#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "emptyPA_Int#",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PA Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#emptyPD",
        "fct-type": "function",
        "title": "emptyPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "emptyPD",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPR",
      "description": {
        "fct-descr": "\u003cp\u003eProduce an empty array with size zero.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptyPR",
        "fct-type": "method",
        "title": "emptyPR"
      },
      "index": {
        "description": "Produce an empty array with size zero",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "emptyPR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptydPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield an empty collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptydPR",
        "fct-type": "method",
        "title": "emptydPR"
      },
      "index": {
        "description": "Yield an empty collection of PData",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "emptydPR",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(slice len). Extract a slice of elements from an array,\n  given the starting index and length of the slice.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractPR",
        "fct-type": "method",
        "title": "extractPR"
      },
      "index": {
        "description": "slice len Extract slice of elements from an array given the starting index and length of the slice",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "extractPR",
        "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractssPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n\u003c/p\u003e\u003cp\u003eThe Scattered Segment Descriptor (\u003ccode\u003eSSegd\u003c/code\u003e) describes where to get each \n  slice, and all slices are concatenated together into the result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e SSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractssPR",
        "fct-type": "method",
        "title": "extractssPR"
      },
      "index": {
        "description": "sum seglens Shared extract Extract several slices from several source arrays The Scattered Segment Descriptor SSegd describes where to get each slice and all slices are concatenated together into the result",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "extractssPR",
        "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eSSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n  TODO: we're refactoring the library so functions use the VSeg form directly,\n        instead of going via a SSegd.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractvsPR",
        "fct-type": "method",
        "title": "extractvsPR"
      },
      "index": {
        "description": "sum seglens Shared extract Extract several slices from several source arrays TODO we re refactoring the library so functions use the VSeg form directly instead of going via SSegd",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "extractvsPR",
        "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eVSegd-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData (PRepr a) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPRepr",
        "fct-type": "method",
        "title": "fromArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromArrPRepr",
        "normalized": "PData(PRepr a)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Arr PRepr",
        "signature": "PData(PRepr a)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas (PRepr a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPReprs",
        "fct-type": "method",
        "title": "fromArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromArrPReprs",
        "normalized": "PDatas(PRepr a)-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Arr PReprs",
        "signature": "PDatas(PRepr a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PRepr a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromPRepr",
        "fct-type": "method",
        "title": "fromPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromPRepr",
        "normalized": "PRepr a-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": "PRepr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
        "fct-type": "method",
        "title": "fromScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromScalarPData",
        "normalized": "PData a-\u003eArray a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PData",
        "signature": "PData a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromScalarPDatas",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Arrays a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPDatas",
        "fct-type": "method",
        "title": "fromScalarPDatas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromScalarPDatas",
        "normalized": "PDatas a-\u003eArrays a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PDatas",
        "signature": "PDatas a-\u003eArrays a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVectorPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a boxed vector to an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectorPR",
        "fct-type": "method",
        "title": "fromVectorPR"
      },
      "index": {
        "description": "Convert boxed vector to an array",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromVectorPR",
        "normalized": "Vector a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PR",
        "signature": "Vector a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVectordPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Convert a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Vector (PData a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectordPR",
        "fct-type": "method",
        "title": "fromVectordPR"
      },
      "index": {
        "description": "Convert vector of PData to PDatas",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromVectordPR",
        "normalized": "Vector(PData a)-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PR",
        "signature": "Vector(PData a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVoid",
      "description": {
        "fct-descr": "\u003cp\u003eCoerce a \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e to a different type. Used as a placeholder like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n   Forcing the result yields \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "fromVoid"
      },
      "index": {
        "description": "Coerce Void to different type Used as placeholder like undefined Forcing the result yields error",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "fromVoid",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Retrieve a single element from a single array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexPR",
        "fct-type": "method",
        "title": "indexPR"
      },
      "index": {
        "description": "Retrieve single element from single array",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "indexPR",
        "normalized": "PData a-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexdPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Lookup a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e from a collection.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexdPR",
        "fct-type": "method",
        "title": "indexdPR"
      },
      "index": {
        "description": "Lookup PData from collection",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "indexdPR",
        "normalized": "PDatas a-\u003eInt-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eInt-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Shared indexing.\n   Retrieve several elements from several chunks of array data, \n   given the chunkid and index in that chunk for each element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexsPR",
        "fct-type": "method",
        "title": "indexsPR"
      },
      "index": {
        "description": "Shared indexing Retrieve several elements from several chunks of array data given the chunkid and index in that chunk for each element",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "indexsPR",
        "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexvsPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Shared indexing\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexvsPR",
        "fct-type": "method",
        "title": "indexvsPR"
      },
      "index": {
        "description": "Shared indexing",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "indexvsPR",
        "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length of an array, if it has one.\n\u003c/p\u003e\u003cp\u003eApplying this function to an array of \u003ccode\u003eVoid\u003c/code\u003e will yield \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, as\n   these arrays have no fixed length. To check array bounds, use the\n   \u003ccode\u003e\u003ca\u003ecoversPR\u003c/a\u003e\u003c/code\u003e method instead, as that is a total function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthPR",
        "fct-type": "method",
        "title": "lengthPR"
      },
      "index": {
        "description": "Get the length of an array if it has one Applying this function to an array of Void will yield error as these arrays have no fixed length To check array bounds use the coversPR method instead as that is total function",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "lengthPR",
        "normalized": "PData a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthSels2-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sels2 -\u003e Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#lengthSels2%23",
        "fct-type": "function",
        "title": "lengthSels2#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "lengthSels2#",
        "normalized": "Sels-\u003eInt #",
        "package": "dph-lifted-vseg",
        "partial": "Sels",
        "signature": "Sels-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthdPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield how many \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e are in the collection.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthdPR",
        "fct-type": "method",
        "title": "lengthdPR"
      },
      "index": {
        "description": "Yield how many PData are in the collection",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "lengthdPR",
        "normalized": "PDatas a-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PDatas a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:liftedApply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a lifted closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e PData (a :-\u003e b) -\u003e PData a -\u003e PData b",
        "fct-source": "src/Data-Array-Parallel-Prim.html#liftedApply",
        "fct-type": "function",
        "title": "liftedApply"
      },
      "index": {
        "description": "Apply lifted closure",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "liftedApply",
        "normalized": "Int #-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
        "package": "dph-lifted-vseg",
        "partial": "Apply",
        "signature": "Int #-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:liftedClosure",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a lifted closure.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(e -\u003e a -\u003e b) -\u003e (Int# -\u003e PData e -\u003e PData a -\u003e PData b) -\u003e PData e -\u003e PData (a :-\u003e b)",
        "fct-source": "src/Data-Array-Parallel-Prim.html#liftedClosure",
        "fct-type": "function",
        "title": "liftedClosure"
      },
      "index": {
        "description": "Construct lifted closure",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "liftedClosure",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(Int #-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ePData a-\u003ePData(b-\u003ec)",
        "package": "dph-lifted-vseg",
        "partial": "Closure",
        "signature": "(e-\u003ea-\u003eb)-\u003e(Int #-\u003ePData e-\u003ePData a-\u003ePData b)-\u003ePData e-\u003ePData(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:nfPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Ensure an array is fully evaluted.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#nfPR",
        "fct-type": "method",
        "title": "nfPR"
      },
      "index": {
        "description": "debugging Ensure an array is fully evaluted",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "nfPR",
        "normalized": "PData a-\u003e()",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPA_Double-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#packByTagPA_Double%23",
        "fct-type": "function",
        "title": "packByTagPA_Double#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "packByTagPA_Double#",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PA Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPA_Int-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#packByTagPA_Int%23",
        "fct-type": "function",
        "title": "packByTagPA_Int#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "packByTagPA_Int#",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PA Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Int# -\u003e Array Tag -\u003e Int# -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#packByTagPD",
        "fct-type": "function",
        "title": "packByTagPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "packByTagPD",
        "normalized": "PData a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PD",
        "signature": "PData a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPR",
      "description": {
        "fct-descr": "\u003cp\u003eSelect elements of an array that have their corresponding tag set to\n   the given value. \n\u003c/p\u003e\u003cp\u003eThe data array must define at least as many elements as the length\n   of the tags array. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#packByTagPR",
        "fct-type": "method",
        "title": "packByTagPR"
      },
      "index": {
        "description": "Select elements of an array that have their corresponding tag set to the given value The data array must define at least as many elements as the length of the tags array",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "packByTagPR",
        "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "By Tag PR",
        "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pickSel2-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e Int# -\u003e Array Bool",
        "fct-source": "src/Data-Array-Parallel-Prim.html#pickSel2%23",
        "fct-type": "function",
        "title": "pickSel2#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "pickSel2#",
        "normalized": "Sel-\u003eInt #-\u003eArray Bool",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": "Sel-\u003eInt #-\u003eArray Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pprpDataPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Pretty print the physical representation of some array data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpDataPR",
        "fct-type": "method",
        "title": "pprpDataPR"
      },
      "index": {
        "description": "debugging Pretty print the physical representation of some array data",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "pprpDataPR",
        "normalized": "PData a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "Data PR",
        "signature": "PData a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pprpPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Pretty print the physical representation of an element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpPR",
        "fct-type": "method",
        "title": "pprpPR"
      },
      "index": {
        "description": "debugging Pretty print the physical representation of an element",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "pprpPR",
        "normalized": "a-\u003eDoc",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:punit",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e PData ()",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Unit.html#punit",
        "fct-type": "function",
        "title": "punit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "punit",
        "normalized": "Int-\u003ePData()",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003ePData()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pvoid",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData Void",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Void.html#pvoid",
        "fct-type": "function",
        "title": "pvoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "pvoid",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pvoids-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e PDatas Void",
        "fct-source": "src/Data-Array-Parallel-Prim.html#pvoids%23",
        "fct-type": "function",
        "title": "pvoids#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "pvoids#",
        "normalized": "Int #-\u003ePDatas Void",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int #-\u003ePDatas Void"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePA_Double-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e Double# -\u003e PArray_Double#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#replicatePA_Double%23",
        "fct-type": "function",
        "title": "replicatePA_Double#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicatePA_Double#",
        "normalized": "Int #-\u003eDouble #-\u003ePArray_Double #",
        "package": "dph-lifted-vseg",
        "partial": "PA Double",
        "signature": "Int #-\u003eDouble #-\u003ePArray_Double #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePA_Int-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e Int# -\u003e PArray_Int#",
        "fct-source": "src/Data-Array-Parallel-Prim.html#replicatePA_Int%23",
        "fct-type": "function",
        "title": "replicatePA_Int#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicatePA_Int#",
        "normalized": "Int #-\u003eInt #-\u003ePArray_Int #",
        "package": "dph-lifted-vseg",
        "partial": "PA Int",
        "signature": "Int #-\u003eInt #-\u003ePArray_Int #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePD",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-Prim.html#replicatePD",
        "fct-type": "function",
        "title": "replicatePD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicatePD",
        "normalized": "Int #-\u003ea-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PD",
        "signature": "Int #-\u003ea-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the\n  same value.\n\u003c/p\u003e\u003cp\u003eWe require the replication count to be \u003e 0 so that it's easier to\n   maintain the \u003ccode\u003e\u003ca\u003evalidPR\u003c/a\u003e\u003c/code\u003e invariants for nested arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatePR",
        "fct-type": "method",
        "title": "replicatePR"
      },
      "index": {
        "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicatePR",
        "normalized": "Int-\u003ea-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Int-\u003ea-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicateSel2-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int# -\u003e Int# -\u003e Sel2",
        "fct-source": "src/Data-Array-Parallel-Prim.html#replicateSel2%23",
        "fct-type": "function",
        "title": "replicateSel2#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicateSel2#",
        "normalized": "Int #-\u003eInt #-\u003eSel",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": "Int #-\u003eInt #-\u003eSel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatesPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eGiven a Segment Descriptor (Segd), replicate each each element in the\n   array according to the length of the corrsponding segment.\n   The array data must define at least as many elements as there are segments\n   in the descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Segd -\u003e PData a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatesPR",
        "fct-type": "method",
        "title": "replicatesPR"
      },
      "index": {
        "description": "sum lengths Segmented replicate Given Segment Descriptor Segd replicate each each element in the array according to the length of the corrsponding segment The array data must define at least as many elements as there are segments in the descriptor",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "replicatesPR",
        "normalized": "Segd-\u003ePData a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "Segd-\u003ePData a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_map",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b) -\u003e PArray a -\u003e PArray b",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_map",
        "fct-type": "function",
        "title": "scalar_map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_map",
        "normalized": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ePArray a-\u003ePArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e PArray a -\u003e PArray b -\u003e PArray c",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith",
        "fct-type": "function",
        "title": "scalar_zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith3",
        "fct-type": "function",
        "title": "scalar_zipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith4",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith4",
        "fct-type": "function",
        "title": "scalar_zipWith4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith5",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith5",
        "fct-type": "function",
        "title": "scalar_zipWith5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith6",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith6",
        "fct-type": "function",
        "title": "scalar_zipWith6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith7",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith7",
        "fct-type": "function",
        "title": "scalar_zipWith7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith8",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i",
        "fct-source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith8",
        "fct-type": "function",
        "title": "scalar_zipWith8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "scalar_zipWith8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:similarPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Weak equality of contained elements.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for functions of the same type. In the case of nested arrays,\n   returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the array defines the same set of elements, but does not\n   care about the exact form of the segement descriptors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#similarPR",
        "fct-type": "method",
        "title": "similarPR"
      },
      "index": {
        "description": "debugging Weak equality of contained elements Returns True for functions of the same type In the case of nested arrays returns True if the array defines the same set of elements but does not care about the exact form of the segement descriptors",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "similarPR",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:singletondPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield a singleton collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#singletondPR",
        "fct-type": "method",
        "title": "singletondPR"
      },
      "index": {
        "description": "Yield singleton collection of PData",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "singletondPR",
        "normalized": "PData a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tagsSel2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Sel2 -\u003e Array Tag",
        "fct-source": "src/Data-Array-Parallel-Prim.html#tagsSel2",
        "fct-type": "function",
        "title": "tagsSel2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "tagsSel2",
        "normalized": "Sel-\u003eArray Tag",
        "package": "dph-lifted-vseg",
        "partial": "Sel",
        "signature": "Sel-\u003eArray Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e PData (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPRepr",
        "fct-type": "method",
        "title": "toArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toArrPRepr",
        "normalized": "PData a-\u003ePData(PRepr a)",
        "package": "dph-lifted-vseg",
        "partial": "Arr PRepr",
        "signature": "PData a-\u003ePData(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e PDatas (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPReprs",
        "fct-type": "method",
        "title": "toArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toArrPReprs",
        "normalized": "PDatas a-\u003ePDatas(PRepr a)",
        "package": "dph-lifted-vseg",
        "partial": "Arr PReprs",
        "signature": "PDatas a-\u003ePDatas(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e PRepr a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toPRepr",
        "fct-type": "method",
        "title": "toPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toPRepr",
        "normalized": "a-\u003ePRepr a",
        "package": "dph-lifted-vseg",
        "partial": "PRepr",
        "signature": "a-\u003ePRepr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Array a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
        "fct-type": "method",
        "title": "toScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toScalarPData",
        "normalized": "Array a-\u003ePData a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PData",
        "signature": "Array a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toScalarPDatas",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Arrays a -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPDatas",
        "fct-type": "method",
        "title": "toScalarPDatas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toScalarPDatas",
        "normalized": "Arrays a-\u003ePDatas a",
        "package": "dph-lifted-vseg",
        "partial": "Scalar PDatas",
        "signature": "Arrays a-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toVectorPR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array to a boxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectorPR",
        "fct-type": "method",
        "title": "toVectorPR"
      },
      "index": {
        "description": "Convert an array to boxed vector",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toVectorPR",
        "normalized": "PData a-\u003eVector a",
        "package": "dph-lifted-vseg",
        "partial": "Vector PR",
        "signature": "PData a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toVectordPR",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Convert a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e to a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e Vector (PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectordPR",
        "fct-type": "method",
        "title": "toVectordPR"
      },
      "index": {
        "description": "Convert PDatas to vector of PData",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "toVectordPR",
        "normalized": "PDatas a-\u003eVector(PData a)",
        "package": "dph-lifted-vseg",
        "partial": "Vectord PR",
        "signature": "PDatas a-\u003eVector(PData a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup2",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (a, b))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup2",
        "fct-type": "function",
        "title": "tup2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "tup2",
        "normalized": "a-\u003e(b-\u003e(a,b))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup3",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (a, b, c)))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup3",
        "fct-type": "function",
        "title": "tup3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "tup3",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup4",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (a, b, c, d))))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup4",
        "fct-type": "function",
        "title": "tup4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "tup4",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup5",
      "description": {
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (a, b, c, d, e)))))",
        "fct-source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup5",
        "fct-type": "function",
        "title": "tup5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "tup5",
        "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepDataPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Given a 'PData a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDataPR",
        "fct-type": "method",
        "title": "typeRepDataPR"
      },
      "index": {
        "description": "debugging Given PData get the representation of the",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "typeRepDataPR",
        "normalized": "PData a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Data PR",
        "signature": "PData a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepDatasPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Given a 'PDatas a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PDatas a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDatasPR",
        "fct-type": "method",
        "title": "typeRepDatasPR"
      },
      "index": {
        "description": "debugging Given PDatas get the representation of the",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "typeRepDatasPR",
        "normalized": "PDatas a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep Datas PR",
        "signature": "PDatas a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Get the representation of this type.\n   We don't use the Typeable class for this because the vectoriser\n   won't handle the Typeable superclass on PR.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e TypeRep",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepPR",
        "fct-type": "method",
        "title": "typeRepPR"
      },
      "index": {
        "description": "debugging Get the representation of this type We don use the Typeable class for this because the vectoriser won handle the Typeable superclass on PR",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "typeRepPR",
        "normalized": "a-\u003eTypeRep",
        "package": "dph-lifted-vseg",
        "partial": "Rep PR",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:unWrap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "unWrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "unWrap",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:validPR",
      "description": {
        "fct-descr": "\u003cp\u003e(debugging) Check that an array has a well formed representation.\n   This should only return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e where there is a bug in the library.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PData a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#validPR",
        "fct-type": "method",
        "title": "validPR"
      },
      "index": {
        "description": "debugging Check that an array has well formed representation This should only return False where there is bug in the library",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "validPR",
        "normalized": "PData a-\u003eBool",
        "package": "dph-lifted-vseg",
        "partial": "PR",
        "signature": "PData a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:void",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003evalue\u003c/code\u003e with the void type. Used as a placholder like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n   Forcing this yields \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prim",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Void",
        "fct-type": "function",
        "title": "void"
      },
      "index": {
        "description": "value with the void type Used as placholder like undefined Forcing this yields error",
        "hierarchy": "Data Array Parallel Prim",
        "module": "Data.Array.Parallel.Prim",
        "name": "void",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#t:Op",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "Op",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#t:Trace",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Trace",
        "fct-type": "data",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpAppend",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpAppend",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpAppend",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpAppendL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpAppendL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpAppendL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpAppendL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpCombine2",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpCombine2",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpCombine2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpCombine2",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Combine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpConcat",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpConcat",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpConcat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpConcat",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpConcatL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpConcatL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpConcatL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpConcatL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpExtract",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpExtract",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpExtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpExtract",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpExtractS",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpExtractS",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpExtractS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpExtractS",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpIndex",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpIndex",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpIndex",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpIndexL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpIndexL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpIndexL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpIndexL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpLength",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpLength",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpLength",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpLengthL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpLengthL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpLengthL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpLengthL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPack",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpPack",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpPack"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpPack",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPackByTag",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpPackByTag",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpPackByTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpPackByTag",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Pack By Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPackL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpPackL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpPackL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpPackL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicate",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpReplicate",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpReplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpReplicate",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicateL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpReplicateL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpReplicateL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpReplicateL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicateS",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpReplicateS",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpReplicateS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpReplicateS",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSingleton",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpSingleton",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpSingleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpSingleton",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Singleton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSingletonL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpSingletonL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpSingletonL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpSingletonL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Singleton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSlice",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpSlice",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpSlice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpSlice",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSliceL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpSliceL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpSliceL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpSliceL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnconcat",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpUnconcat",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpUnconcat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpUnconcat",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Unconcat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnzip",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpUnzip",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpUnzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpUnzip",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Unzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnzipL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpUnzipL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpUnzipL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpUnzipL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Unzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpZip",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpZip",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpZip",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpZipL",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "OpZipL",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "OpZipL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "OpZipL",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Op Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:Trace",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Trace Op",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Trace",
        "fct-type": "function",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceContext",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceContext",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceCount",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceDstLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceDstLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceDstLength",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Dst Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceElemType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "TypeRep",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceElemType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceElemType",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Elem Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceLength",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceOp",
      "description": {
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Op -\u003e a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Trace.html#traceOp",
        "fct-type": "function",
        "title": "traceOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceOp",
        "normalized": "Op-\u003ea-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "Op",
        "signature": "Op-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrc1Length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceSrc1Length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceSrc1Length",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Src Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrc2Length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceSrc2Length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceSrc2Length",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Src Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrcLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Parallel.Trace",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int",
        "fct-source": "src/Data-Array-Parallel-Trace.html#Op",
        "fct-type": "function",
        "title": "traceSrcLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Trace",
        "module": "Data.Array.Parallel.Trace",
        "name": "traceSrcLength",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Src Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUser level interface to vectorised parallel arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e In the current implementation, the functionality provided in\n  this module is tied to the vectoriser pass of GHC, invoked by `-fvectorise`.\n  These functions will not work at all in unvectorised code. To operate on\n  parallel arrays in unvectorised code, use the functions in\n  \u003ca\u003eData.Array.Parallel.PArray\u003c/a\u003e and convert between array representations by\n  using \u003ccode\u003e\u003ca\u003efromPArrayP\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoPArrayP\u003c/a\u003e\u003c/code\u003e from \u003cem\u003evectorised\u003c/em\u003e code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "User level interface to vectorised parallel arrays WARNING In the current implementation the functionality provided in this module is tied to the vectoriser pass of GHC invoked by fvectorise These functions will not work at all in unvectorised code To operate on parallel arrays in unvectorised code use the functions in Data.Array.Parallel.PArray and convert between array representations by using fromPArrayP and toPArrayP from vectorised code",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "parallel array consisting of length field and some array data",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:-33-:",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a single element from the source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel.html#%21%3A",
        "fct-type": "function",
        "title": "(!:)"
      },
      "index": {
        "description": "Lookup single element from the source array",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "(!:) !:",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:-43-:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#%2B%3A%2B",
        "fct-type": "function",
        "title": "(+:+)"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "(+:+) +:+",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:appendP",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#appendP",
        "fct-type": "function",
        "title": "appendP"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "appendP",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:concatP",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate an array of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:[:a:]:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#concatP",
        "fct-type": "function",
        "title": "concatP"
      },
      "index": {
        "description": "Concatenate an array of arrays",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "concatP",
        "normalized": "[[a]]-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:crossMapP",
      "description": {
        "fct-descr": "\u003cp\u003eFor every element \u003ccode\u003ea\u003c/code\u003e apply the function to get an array of \u003ccode\u003eb\u003c/code\u003e then,\n   and return an array of all the \u003ccode\u003ea\u003c/code\u003es and \u003ccode\u003eb\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e (a -\u003e [:b:]) -\u003e [:(a, b):]",
        "fct-source": "src/Data-Array-Parallel.html#crossMapP",
        "fct-type": "function",
        "title": "crossMapP"
      },
      "index": {
        "description": "For every element apply the function to get an array of then and return an array of all the and",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "crossMapP",
        "normalized": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
        "package": "dph-lifted-vseg",
        "partial": "Map",
        "signature": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:emptyP",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an empty array, with no elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:]",
        "fct-source": "src/Data-Array-Parallel.html#emptyP",
        "fct-type": "function",
        "title": "emptyP"
      },
      "index": {
        "description": "Construct an empty array with no elements",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "emptyP",
        "normalized": "[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:filterP",
      "description": {
        "fct-descr": "\u003cp\u003eFilter an array, keeping only those elements that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e Bool) -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#filterP",
        "fct-type": "function",
        "title": "filterP"
      },
      "index": {
        "description": "Filter an array keeping only those elements that match the given predicate",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "filterP",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:fromNestedPArrayP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray (PArray a) -\u003e [:[:a:]:]",
        "fct-source": "src/Data-Array-Parallel.html#fromNestedPArrayP",
        "fct-type": "function",
        "title": "fromNestedPArrayP"
      },
      "index": {
        "description": "Convert between PArray and array representations",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "fromNestedPArrayP",
        "normalized": "PArray(PArray a)-\u003e[[a]]",
        "package": "dph-lifted-vseg",
        "partial": "Nested PArray",
        "signature": "PArray(PArray a)-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:fromPArrayP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "PArray a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#fromPArrayP",
        "fct-type": "function",
        "title": "fromPArrayP"
      },
      "index": {
        "description": "Convert between PArray and array representations",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "fromPArrayP",
        "normalized": "PArray a-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": "PArray a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:indexP",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a single element from the source array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel.html#indexP",
        "fct-type": "function",
        "title": "indexP"
      },
      "index": {
        "description": "Lookup single element from the source array",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "indexP",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:lengthP",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e Int",
        "fct-source": "src/Data-Array-Parallel.html#lengthP",
        "fct-type": "function",
        "title": "lengthP"
      },
      "index": {
        "description": "Take the length of an array",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "lengthP",
        "normalized": "[a]-\u003eInt",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:mapP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to every element of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b) -\u003e [:a:] -\u003e [:b:]",
        "fct-source": "src/Data-Array-Parallel.html#mapP",
        "fct-type": "function",
        "title": "mapP"
      },
      "index": {
        "description": "Apply worker function to every element of an array",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "mapP",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:replicateP",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an array by replicating the given element some number of times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#replicateP",
        "fct-type": "function",
        "title": "replicateP"
      },
      "index": {
        "description": "Construct an array by replicating the given element some number of times",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "replicateP",
        "normalized": "Int-\u003ea-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:singletonP",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an array with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#singletonP",
        "fct-type": "function",
        "title": "singletonP"
      },
      "index": {
        "description": "Construct an array with single element",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "singletonP",
        "normalized": "a-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:sliceP",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a slice from an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "Int -\u003e Int -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#sliceP",
        "fct-type": "function",
        "title": "sliceP"
      },
      "index": {
        "description": "Extract slice from an array",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "sliceP",
        "normalized": "Int-\u003eInt-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:toPArrayP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel.html#toPArrayP",
        "fct-type": "function",
        "title": "toPArrayP"
      },
      "index": {
        "description": "Convert between PArray and array representations",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "toPArrayP",
        "normalized": "[a]-\u003ePArray a",
        "package": "dph-lifted-vseg",
        "partial": "PArray",
        "signature": "[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:unzipP",
      "description": {
        "fct-descr": "\u003cp\u003eUnzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:(a, b):] -\u003e ([:a:], [:b:])",
        "fct-source": "src/Data-Array-Parallel.html#unzipP",
        "fct-type": "function",
        "title": "unzipP"
      },
      "index": {
        "description": "Unzip an array of pairs into pair of arrays",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "unzipP",
        "normalized": "[(a,b)]-\u003e([a],[b])",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[(a,b)]-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:zipP",
      "description": {
        "fct-descr": "\u003cp\u003eZip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "[:a:] -\u003e [:b:] -\u003e [:(a, b):]",
        "fct-source": "src/Data-Array-Parallel.html#zipP",
        "fct-type": "function",
        "title": "zipP"
      },
      "index": {
        "description": "Zip pair of arrays into an array of pairs",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zipP",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "dph-lifted-vseg",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:zipWithP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to every pair of two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-vseg",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:]",
        "fct-source": "src/Data-Array-Parallel.html#zipWithP",
        "fct-type": "function",
        "title": "zipWithP"
      },
      "index": {
        "description": "Apply worker function to every pair of two arrays",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zipWithP",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "dph-lifted-vseg",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  }
]