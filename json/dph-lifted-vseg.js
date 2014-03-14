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
        "word": "dph-lifted-vseg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosures.\n   Used when closure converting the source program during vectorisation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "Closure",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html",
          "type": "module"
        },
        "index": {
          "description": "Closures Used when closure converting the source program during vectorisation",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "Closure",
          "package": "dph-lifted-vseg",
          "partial": "Closure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the fixity of the closure type constructor.\n\u003c/p\u003e\u003cp\u003eThe type of closures.\n   This bundles up:\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": ":-\u003e",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "Define the fixity of the closure type constructor The type of closures This bundles up",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": ":-\u003e",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chunk of parallel array data with a linear index space.\n\u003c/p\u003e\u003cp\u003eIn contrast to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e may not have a fixed length, and its\n   elements may have been converted to a generic representation. Whereas a\n   \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e is the \"user view\" of an array, a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e is a type only\n   used internally to the library.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Lifted.Closure\",\"Data.Array.Parallel.PArray.PData\",\"Data.Array.Parallel.Prim\"]",
          "name": "PData",
          "package": "dph-lifted-vseg",
          "signature": "PData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#t:PData\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PData\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PData\"]"
        },
        "index": {
          "description": "chunk of parallel array data with linear index space In contrast to PArray PData may not have fixed length and its elements may have been converted to generic representation Whereas PArray is the user view of an array PData is type only used internally to the library",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "PData",
          "package": "dph-lifted-vseg",
          "partial": "PData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#t:PData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosure application.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "($:)",
          "package": "dph-lifted-vseg",
          "signature": "(a :-\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A",
          "type": "function"
        },
        "index": {
          "description": "Closure application",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "($:) $:",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:-36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted closure application.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "($:^)",
          "package": "dph-lifted-vseg",
          "signature": "PArray (a :-\u003e b) -\u003e PArray a -\u003e PArray b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A%5E",
          "type": "function"
        },
        "index": {
          "description": "Lifted closure application",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "($:^) $:^",
          "normalized": "PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "package": "dph-lifted-vseg",
          "signature": "PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:-36-:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Lifted.Closure\",\"Data.Array.Parallel.Prim\"]",
          "name": "Clo",
          "package": "dph-lifted-vseg",
          "signature": "Clo (env -\u003e a -\u003e b) (Int -\u003e PData env -\u003e PData a -\u003e PData b) env",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:Clo\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Clo\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "Clo",
          "normalized": "Clo(a-\u003eb-\u003ec)(Int-\u003ePData a-\u003ePData b-\u003ePData c)a",
          "package": "dph-lifted-vseg",
          "partial": "Clo",
          "signature": "Clo(env-\u003ea-\u003eb)(Int-\u003ePData env-\u003ePData a-\u003ePData b)env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:Clo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-1 closure,\n   from unlifted and lifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure1",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b) -\u003e (Int -\u003e PData a -\u003e PData b) -\u003e a :-\u003e b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure1",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-1 closure from unlifted and lifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure1",
          "normalized": "(a-\u003eb)-\u003e(Int-\u003ePData a-\u003ePData b)-\u003ea-\u003eb",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb)-\u003e(Int-\u003ePData a-\u003ePData b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-1 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure1'",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.  (a -\u003e b) -\u003e (PArray a -\u003e PArray b) -\u003e a :-\u003e b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure1%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-1 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure1'",
          "normalized": "a b c(b-\u003ed)-\u003e(PArray b-\u003ePArray d)-\u003eb-\u003ed",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.(a-\u003eb)-\u003e(PArray a-\u003ePArray b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-2 closure,\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure2",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c) -\u003e a :-\u003e (b :-\u003e c)",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure2",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-2 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003e(b-\u003ec)",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003e(b-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-2 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure2'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e (PArray a -\u003e PArray b -\u003e PArray c) -\u003e a :-\u003e (b :-\u003e c)",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure2%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-2 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure2'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-3 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure3",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure3",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-3 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-3 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure3'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure3%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-3 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure3'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-4 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure4",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure4",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-4 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-4 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure4'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure4%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-4 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure4'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure4-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-5 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure5",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure5",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-5 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-5 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure5'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure5%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-5 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure5'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure5-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure6",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure6",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-6 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure6'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure6%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-6 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure6'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure6-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure7",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g -\u003e PData h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure7",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-7 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure7'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure7%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-7 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure7'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure7-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-6 closure\n   from lifted and unlifted versions of a primitive function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure8",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (Int -\u003e PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData g -\u003e PData h -\u003e PData i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure8",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-6 closure from lifted and unlifted versions of primitive function",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h-\u003ePData i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(Int-\u003ePData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData g-\u003ePData h-\u003ePData i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arity-8 closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure8'",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#closure8%27",
          "type": "function"
        },
        "index": {
          "description": "Construct an arity-8 closure",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "closure8'",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:closure8-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted closure application, taking an explicit lifting context.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "liftedApply",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e PData (a :-\u003e b) -\u003e PData a -\u003e PData b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#liftedApply",
          "type": "function"
        },
        "index": {
          "description": "Lifted closure application taking an explicit lifting context",
          "hierarchy": "Data Array Parallel Lifted Closure",
          "module": "Data.Array.Parallel.Lifted.Closure",
          "name": "liftedApply",
          "normalized": "Int-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
          "package": "dph-lifted-vseg",
          "partial": "Apply",
          "signature": "Int-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Closure.html#v:liftedApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosure converted lifted array combinators.\n   The vectoriser produces code that uses these combinators directly.\n\u003c/p\u003e\u003cp\u003eAll of the combinators in this module are polymorphic, work on \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e, and\n   take \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e dictionaries. Combinators that are specific to a certain element type,\n   like \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, are defined in the corresponding prelude module, \n   eg \u003ca\u003eData.Array.Parallel.Prelude.Int\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "Combinators",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Closure converted lifted array combinators The vectoriser produces code that uses these combinators directly All of the combinators in this module are polymorphic work on PArray and take PA dictionaries Combinators that are specific to certain element type like Int are defined in the corresponding prelude module eg Data.Array.Parallel.Prelude.Int",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "Combinators",
          "package": "dph-lifted-vseg",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len result). Append two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "appendPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e (PArray a :-\u003e PArray a)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#appendPP",
          "type": "function"
        },
        "index": {
          "description": "len result Append two arrays",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "appendPP",
          "normalized": "PArray a-\u003e(PArray a-\u003ePArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray a-\u003e(PArray a-\u003ePArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:appendPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len result). Concatenate a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "concatPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#concatPP",
          "type": "function"
        },
        "index": {
          "description": "len result Concatenate nested array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "concatPP",
          "normalized": "PArray(PArray a)-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray(PArray a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:concatPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "crossMapPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e ((a :-\u003e PArray b) :-\u003e PArray (a, b))",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#crossMapPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "crossMapPP",
          "normalized": "PArray a-\u003e((a-\u003ePArray b)-\u003ePArray(a,b))",
          "package": "dph-lifted-vseg",
          "partial": "Map PP",
          "signature": "PArray a-\u003e((a-\u003ePArray b)-\u003ePArray(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:crossMapPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "emptyPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#emptyPP",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "emptyPP",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:emptyPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements from an array that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "filterPP",
          "package": "dph-lifted-vseg",
          "signature": "(a :-\u003e Bool) :-\u003e (PArray a :-\u003e PArray a)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#filterPP",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements from an array that match the given predicate",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "filterPP",
          "normalized": "(a-\u003eBool)-\u003e(PArray a-\u003ePArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "(a-\u003eBool)-\u003e(PArray a-\u003ePArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:filterPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function, used as the vectorised version of fromNestedPArrayP\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "fromNestedPArrayPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) :-\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#fromNestedPArrayPP",
          "type": "function"
        },
        "index": {
          "description": "Identity function used as the vectorised version of fromNestedPArrayP",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "fromNestedPArrayPP",
          "normalized": "PArray(PArray a)-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "Nested PArray PP",
          "signature": "PArray(PArray a)-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:fromNestedPArrayPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function, used as the vectorised version of fromPArrayP.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "fromPArrayPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#fromPArrayPP",
          "type": "function"
        },
        "index": {
          "description": "Identity function used as the vectorised version of fromPArrayP",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "fromPArrayPP",
          "normalized": "PArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "PArray PP",
          "signature": "PArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:fromPArrayPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Lookup a single element from the source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "indexPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e (Int :-\u003e a)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#indexPP",
          "type": "function"
        },
        "index": {
          "description": "Lookup single element from the source array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "indexPP",
          "normalized": "PArray a-\u003e(Int-\u003ea)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray a-\u003e(Int-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:indexPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the number of elements in an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "lengthPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e Int",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#lengthPP",
          "type": "function"
        },
        "index": {
          "description": "Take the number of elements in an array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "lengthPP",
          "normalized": "PArray a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:lengthPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to every element of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "mapPP",
          "package": "dph-lifted-vseg",
          "signature": "(a :-\u003e b) :-\u003e (PArray a :-\u003e PArray b)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#mapPP",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to every element of an array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "mapPP",
          "normalized": "(a-\u003eb)-\u003e(PArray a-\u003ePArray b)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "(a-\u003eb)-\u003e(PArray a-\u003ePArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:mapPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Construct an array of the given size, that maps all elements to the same value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "replicatePP",
          "package": "dph-lifted-vseg",
          "signature": "Int :-\u003e (a :-\u003e PArray a)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#replicatePP",
          "type": "function"
        },
        "index": {
          "description": "Construct an array of the given size that maps all elements to the same value",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "replicatePP",
          "normalized": "Int-\u003e(a-\u003ePArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "Int-\u003e(a-\u003ePArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:replicatePP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an array containing a single element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "singletonPP",
          "package": "dph-lifted-vseg",
          "signature": "a :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#singletonPP",
          "type": "function"
        },
        "index": {
          "description": "Construct an array containing single element",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "singletonPP",
          "normalized": "a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:singletonPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len slice). Extract a range of elements from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "slicePP",
          "package": "dph-lifted-vseg",
          "signature": "Int :-\u003e (Int :-\u003e (PArray a :-\u003e PArray a))",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#slicePP",
          "type": "function"
        },
        "index": {
          "description": "len slice Extract range of elements from an array",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "slicePP",
          "normalized": "Int-\u003e(Int-\u003e(PArray a-\u003ePArray a))",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "Int-\u003e(Int-\u003e(PArray a-\u003ePArray a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:slicePP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function, used as the vectorised version of toPArrayP.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "toPArrayPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#toPArrayPP",
          "type": "function"
        },
        "index": {
          "description": "Identity function used as the vectorised version of toPArrayP",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "toPArrayPP",
          "normalized": "PArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "PArray PP",
          "signature": "PArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:toPArrayPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "unzipPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray (a, b) :-\u003e (PArray a, PArray b)",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#unzipPP",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "unzipPP",
          "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:unzipPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "zipPP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a :-\u003e (PArray b :-\u003e PArray (a, b))",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#zipPP",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "zipPP",
          "normalized": "PArray a-\u003e(PArray b-\u003ePArray(a,b))",
          "package": "dph-lifted-vseg",
          "partial": "PP",
          "signature": "PArray a-\u003e(PArray b-\u003ePArray(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:zipPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to every pair of two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "zipWithPP",
          "package": "dph-lifted-vseg",
          "signature": "(a :-\u003e (b :-\u003e c)) :-\u003e (PArray a :-\u003e (PArray b :-\u003e PArray c))",
          "source": "src/Data-Array-Parallel-Lifted-Combinators.html#zipWithPP",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to every pair of two arrays",
          "hierarchy": "Data Array Parallel Lifted Combinators",
          "module": "Data.Array.Parallel.Lifted.Combinators",
          "name": "zipWithPP",
          "normalized": "(a-\u003e(b-\u003ec))-\u003e(PArray a-\u003e(PArray b-\u003ePArray c))",
          "package": "dph-lifted-vseg",
          "partial": "With PP",
          "signature": "(a-\u003e(b-\u003ec))-\u003e(PArray a-\u003e(PArray b-\u003ePArray c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted-Combinators.html#v:zipWithPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosures and closure converted lifted array combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "Lifted",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "Closures and closure converted lifted array combinators",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "Lifted",
          "package": "dph-lifted-vseg",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel array data.\n\u003c/p\u003e\u003cp\u003eThis is an interface onto the internal array types and operators defined\n   by the library, and should not normally be used by client programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PData",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel array data This is an interface onto the internal array types and operators defined by the library and should not normally be used by client programs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PData",
          "package": "dph-lifted-vseg",
          "partial": "PData",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "parallel array consisting of length field and some array data",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeveral chunks of parallel array data.\n\u003c/p\u003e\u003cp\u003eAlthough a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e of atomic type such as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e only contains a\n   single \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e chunk, nested arrays may contain several, which we \n   wrap up into a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.PArray.PData\",\"Data.Array.Parallel.Prim\"]",
          "name": "PDatas",
          "package": "dph-lifted-vseg",
          "signature": "PDatas",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PDatas\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PDatas\"]"
        },
        "index": {
          "description": "Several chunks of parallel array data Although PArray of atomic type such as Int only contains single PData chunk nested arrays may contain several which we wrap up into PDatas",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PDatas",
          "package": "dph-lifted-vseg",
          "partial": "PDatas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PR (Parallel Representation) class holds primitive array operators that\n   work on our generic representation of data.\n\u003c/p\u003e\u003cp\u003eThere are instances for all atomic types such  as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, tuples,\n   nested arrays `PData (PArray a)` and for the  generic types we used to represent\n   user level algebraic data, \u003ccode\u003eSum2\u003c/code\u003e and \u003ccode\u003eWrap\u003c/code\u003e and \u003ccode\u003eVoid\u003c/code\u003e. All array data \n   is converted to this fixed set of types.\n\u003c/p\u003e\u003cp\u003eTODO: refactor to change PData Int to U.Array Int, \n         there's not need to wrap an extra PData constructor around these arrays,\n         and the type of bpermute is different than the others.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PR",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PR",
          "type": "class"
        },
        "index": {
          "description": "The PR Parallel Representation class holds primitive array operators that work on our generic representation of data There are instances for all atomic types such as Int and Double tuples nested arrays PData PArray and for the generic types we used to represent user level algebraic data Sum2 and Wrap and Void All array data is converted to this fixed set of types TODO refactor to change PData Int to U.Array Int there not need to wrap an extra PData constructor around these arrays and the type of bpermute is different than the others",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#t:PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int# (PData a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendPR",
          "type": "method"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendPR",
          "normalized": "PData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Append two collections of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appenddPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appenddPR",
          "type": "method"
        },
        "index": {
          "description": "Append two collections of PData",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appenddPR",
          "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appenddPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted append.\n   Both arrays must contain the same number of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendlPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData (PArray a) -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#appendlPR",
          "type": "function"
        },
        "index": {
          "description": "Lifted append Both arrays must contain the same number of elements",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendlPR",
          "normalized": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendlPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented append.\n\u003c/p\u003e\u003cp\u003eThe first descriptor defines the segmentation of the result, \n   and the others define the segmentation of each source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendvsPR",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendvsPR",
          "type": "method"
        },
        "index": {
          "description": "Segmented append The first descriptor defines the segmentation of the result and the others define the segmentation of each source array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "appendvsPR",
          "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:appendvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e\u003cp\u003eSee the documentation for selectors in the dph-prim-seq library\n   for how this works.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "combine2PR",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#combine2PR",
          "type": "method"
        },
        "index": {
          "description": "Combine two arrays based on selector See the documentation for selectors in the dph-prim-seq library for how this works",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "combine2PR",
          "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:combine2PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "concatPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#concatPR",
          "type": "function"
        },
        "index": {
          "description": "Concatenate nested array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "concatPR",
          "normalized": "PData(PArray a)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:concatPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted concatenation.\n\u003c/p\u003e\u003cp\u003eConcatenate all the arrays in a triply nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "concatlPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray (PArray a)) -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#concatlPR",
          "type": "function"
        },
        "index": {
          "description": "Lifted concatenation Concatenate all the arrays in triply nested array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "concatlPR",
          "normalized": "PData(PArray(PArray a))-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray(PArray a))-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:concatlPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Check that an index is within an array.\n\u003c/p\u003e\u003cp\u003eArrays containing \u003ccode\u003eVoid\u003c/code\u003e elements don't have a fixed length, and return \n   \u003ccode\u003eVoid\u003c/code\u003e for all indices. If the array does have a fixed length, and the \n   flag is true, then we allow the index to be equal to this length, as\n   well as less than it.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "coversPR",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#coversPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Check that an index is within an array Arrays containing Void elements don have fixed length and return Void for all indices If the array does have fixed length and the flag is true then we allow the index to be equal to this length as well as less than it",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "coversPR",
          "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:coversPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an empty array with size zero.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "emptyPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptyPR",
          "type": "method"
        },
        "index": {
          "description": "Produce an empty array with size zero",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "emptyPR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:emptyPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield an empty collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "emptydPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptydPR",
          "type": "method"
        },
        "index": {
          "description": "Yield an empty collection of PData",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "emptydPR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:emptydPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(slice len). Extract a slice of elements from an array,\n  given the starting index and length of the slice.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractPR",
          "type": "method"
        },
        "index": {
          "description": "slice len Extract slice of elements from an array given the starting index and length of the slice",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractPR",
          "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n\u003c/p\u003e\u003cp\u003eThe Scattered Segment Descriptor (\u003ccode\u003eSSegd\u003c/code\u003e) describes where to get each \n  slice, and all slices are concatenated together into the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractssPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e SSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractssPR",
          "type": "method"
        },
        "index": {
          "description": "sum seglens Shared extract Extract several slices from several source arrays The Scattered Segment Descriptor SSegd describes where to get each slice and all slices are concatenated together into the result",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractssPR",
          "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eSSegd-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractssPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n  TODO: we're refactoring the library so functions use the VSeg form directly,\n        instead of going via a SSegd.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractvsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractvsPR",
          "type": "method"
        },
        "index": {
          "description": "sum seglens Shared extract Extract several slices from several source arrays TODO we re refactoring the library so functions use the VSeg form directly instead of going via SSegd",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractvsPR",
          "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eVSegd-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for extracts that is NOT INLINED.\n\u003c/p\u003e\u003cp\u003eThis is experimental, used to initialise the pnested_flat field\n   of a nested array. It\u003ccode\u003es\u003c/code\u003e marked at NOINLINE to avoid code explosion.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractvs_delay",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#extractvs_delay",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for extracts that is NOT INLINED This is experimental used to initialise the pnested flat field of nested array It marked at NOINLINE to avoid code explosion",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "extractvs_delay",
          "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a-\u003eVSegd-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:extractvs_delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a nested array, yielding a plain segment descriptor and \n   concatenated data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "flattenPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e (Segd, PData a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#flattenPR",
          "type": "function"
        },
        "index": {
          "description": "Flatten nested array yielding plain segment descriptor and concatenated data",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "flattenPR",
          "normalized": "PData(PArray a)-\u003e(Segd,PData a)",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003e(Segd,PData a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:flattenPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a PData.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromListPR",
          "package": "dph-lifted-vseg",
          "signature": "[a] -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#fromListPR",
          "type": "function"
        },
        "index": {
          "description": "Convert list to PData",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromListPR",
          "normalized": "[a]-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "List PR",
          "signature": "[a]-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromListPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boxed vector to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromVectorPR",
          "package": "dph-lifted-vseg",
          "signature": "Vector a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectorPR",
          "type": "method"
        },
        "index": {
          "description": "Convert boxed vector to an array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromVectorPR",
          "normalized": "Vector a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PR",
          "signature": "Vector a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromVectorPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromVectordPR",
          "package": "dph-lifted-vseg",
          "signature": "Vector (PData a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectordPR",
          "type": "method"
        },
        "index": {
          "description": "Convert vector of PData to PDatas",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "fromVectordPR",
          "normalized": "Vector(PData a)-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PR",
          "signature": "Vector(PData a)-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:fromVectordPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a single element from a single array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexPR",
          "type": "method"
        },
        "index": {
          "description": "Retrieve single element from single array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexPR",
          "normalized": "PData a-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Lookup a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e from a collection.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexdPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexdPR",
          "type": "method"
        },
        "index": {
          "description": "Lookup PData from collection",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexdPR",
          "normalized": "PDatas a-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eInt-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexdPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len result). Lifted indexing\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexlPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#indexlPR",
          "type": "function"
        },
        "index": {
          "description": "len result Lifted indexing",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexlPR",
          "normalized": "PData(PArray a)-\u003ePData Int-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003ePData Int-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexlPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Shared indexing.\n   Retrieve several elements from several chunks of array data, \n   given the chunkid and index in that chunk for each element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexsPR",
          "type": "method"
        },
        "index": {
          "description": "Shared indexing Retrieve several elements from several chunks of array data given the chunkid and index in that chunk for each element",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexsPR",
          "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Shared indexing\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexvsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexvsPR",
          "type": "method"
        },
        "index": {
          "description": "Shared indexing",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "indexvsPR",
          "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:indexvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length field of a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.PArray.PData\",\"Data.Array.Parallel.PArray\"]",
          "name": "length",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:length\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:length\"]"
        },
        "index": {
          "description": "Take the length field of PArray",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "length",
          "normalized": "PArray a-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length of an array, if it has one.\n\u003c/p\u003e\u003cp\u003eApplying this function to an array of \u003ccode\u003eVoid\u003c/code\u003e will yield \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, as\n   these arrays have no fixed length. To check array bounds, use the\n   \u003ccode\u003e\u003ca\u003ecoversPR\u003c/a\u003e\u003c/code\u003e method instead, as that is a total function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "lengthPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthPR",
          "type": "method"
        },
        "index": {
          "description": "Get the length of an array if it has one Applying this function to an array of Void will yield error as these arrays have no fixed length To check array bounds use the coversPR method instead as that is total function",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "lengthPR",
          "normalized": "PData a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:lengthPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield how many \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e are in the collection.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "lengthdPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthdPR",
          "type": "method"
        },
        "index": {
          "description": "Yield how many PData are in the collection",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "lengthdPR",
          "normalized": "PDatas a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:lengthdPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "mkPNested",
          "package": "dph-lifted-vseg",
          "signature": "VSegd -\u003e PDatas a -\u003e Segd -\u003e PData a -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#mkPNested",
          "type": "function"
        },
        "index": {
          "description": "Construct nested array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "mkPNested",
          "normalized": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PNested",
          "signature": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:mkPNested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Ensure an array is fully evaluted.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "nfPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#nfPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Ensure an array is fully evaluted",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "nfPR",
          "normalized": "PData a-\u003e()",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:nfPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect elements of an array that have their corresponding tag set to\n   the given value. \n\u003c/p\u003e\u003cp\u003eThe data array must define at least as many elements as the length\n   of the tags array. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "packByTagPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#packByTagPR",
          "type": "method"
        },
        "index": {
          "description": "Select elements of an array that have their corresponding tag set to the given value The data array must define at least as many elements as the length of the tags array",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "packByTagPR",
          "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PR",
          "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:packByTagPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Pretty print the physical representation of some array data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "pprpDataPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpDataPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Pretty print the physical representation of some array data",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "pprpDataPR",
          "normalized": "PData a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "Data PR",
          "signature": "PData a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:pprpDataPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Pretty print the physical representation of an element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "pprpPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Pretty print the physical representation of an element",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "pprpPR",
          "normalized": "a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:pprpPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the\n  same value.\n\u003c/p\u003e\u003cp\u003eWe require the replication count to be \u003e 0 so that it's easier to\n   maintain the \u003ccode\u003e\u003ca\u003evalidPR\u003c/a\u003e\u003c/code\u003e invariants for nested arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "replicatePR",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatePR",
          "type": "method"
        },
        "index": {
          "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "replicatePR",
          "normalized": "Int-\u003ea-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Int-\u003ea-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:replicatePR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eGiven a Segment Descriptor (Segd), replicate each each element in the\n   array according to the length of the corrsponding segment.\n   The array data must define at least as many elements as there are segments\n   in the descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "replicatesPR",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatesPR",
          "type": "method"
        },
        "index": {
          "description": "sum lengths Segmented replicate Given Segment Descriptor Segd replicate each each element in the array according to the length of the corrsponding segment The array data must define at least as many elements as there are segments in the descriptor",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "replicatesPR",
          "normalized": "Segd-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Segd-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:replicatesPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Weak equality of contained elements.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for functions of the same type. In the case of nested arrays,\n   returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the array defines the same set of elements, but does not\n   care about the exact form of the segement descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "similarPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#similarPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Weak equality of contained elements Returns True for functions of the same type In the case of nested arrays returns True if the array defines the same set of elements but does not care about the exact form of the segement descriptors",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "similarPR",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:similarPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield a singleton collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "singletondPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#singletondPR",
          "type": "method"
        },
        "index": {
          "description": "Yield singleton collection of PData",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "singletondPR",
          "normalized": "PData a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:singletondPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract some slices from some arrays.\n\u003c/p\u003e\u003cp\u003eAll three parameters must have the same length, and we take\n   one slice from each of the source arrays. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "slicelPR",
          "package": "dph-lifted-vseg",
          "signature": "PData Int-\u003e PData Int-\u003e PData (PArray a)-\u003e PData (PArray a)",
          "type": "function"
        },
        "index": {
          "description": "Extract some slices from some arrays All three parameters must have the same length and we take one slice from each of the source arrays",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "slicelPR",
          "normalized": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:slicelPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "takeData",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#takeData",
          "type": "function"
        },
        "index": {
          "description": "Take the PData of PArray",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "takeData",
          "normalized": "PArray a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Data",
          "signature": "PArray a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:takeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the segment descriptor from a nested array and demote it to a\n   plain Segd.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "takeSegdPD",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e Segd",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#takeSegdPD",
          "type": "function"
        },
        "index": {
          "description": "Take the segment descriptor from nested array and demote it to plain Segd",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "takeSegdPD",
          "normalized": "PData(PArray a)-\u003eSegd",
          "package": "dph-lifted-vseg",
          "partial": "Segd PD",
          "signature": "PData(PArray a)-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:takeSegdPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a PData to a list.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toListPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e [a]",
          "source": "src/Data-Array-Parallel-PArray-PData.html#toListPR",
          "type": "function"
        },
        "index": {
          "description": "Convert PData to list",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toListPR",
          "normalized": "PData a-\u003e[a]",
          "package": "dph-lifted-vseg",
          "partial": "List PR",
          "signature": "PData a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toListPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a boxed vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toVectorPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectorPR",
          "type": "method"
        },
        "index": {
          "description": "Convert an array to boxed vector",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toVectorPR",
          "normalized": "PData a-\u003eVector a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PR",
          "signature": "PData a-\u003eVector a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toVectorPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e to a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toVectordPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Vector (PData a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectordPR",
          "type": "method"
        },
        "index": {
          "description": "Convert PDatas to vector of PData",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "toVectordPR",
          "normalized": "PDatas a-\u003eVector(PData a)",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PR",
          "signature": "PDatas a-\u003eVector(PData a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:toVectordPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Given a 'PData a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepDataPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDataPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Given PData get the representation of the",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepDataPR",
          "normalized": "PData a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Data PR",
          "signature": "PData a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepDataPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Given a 'PDatas a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepDatasPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDatasPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Given PDatas get the representation of the",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepDatasPR",
          "normalized": "PDatas a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Datas PR",
          "signature": "PDatas a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepDatasPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Get the representation of this type.\n   We don't use the Typeable class for this because the vectoriser\n   won't handle the Typeable superclass on PR.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Get the representation of this type We don use the Typeable class for this because the vectoriser won handle the Typeable superclass on PR",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "typeRepPR",
          "normalized": "a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep PR",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:typeRepPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a nested array given a single flat data vector, \n   and a template nested array that defines the segmentation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unconcatPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData b -\u003e PData (PArray b)",
          "source": "src/Data-Array-Parallel-PArray-PData-Nested.html#unconcatPR",
          "type": "function"
        },
        "index": {
          "description": "Build nested array given single flat data vector and template nested array that defines the segmentation",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unconcatPR",
          "normalized": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unconcatPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unzipPD",
          "package": "dph-lifted-vseg",
          "signature": "PData (a, b) -\u003e (PData a, PData b)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#unzipPD",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unzipPD",
          "normalized": "PData(a,b)-\u003e(PData a,PData b)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData(a,b)-\u003e(PData a,PData b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unzipPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted unzip.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unziplPD",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray (a, b)) -\u003e PData (PArray a, PArray b)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#unziplPD",
          "type": "function"
        },
        "index": {
          "description": "Lifted unzip",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "unziplPD",
          "normalized": "PData(PArray(a,b))-\u003ePData(PArray a,PArray b)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData(PArray(a,b))-\u003ePData(PArray a,PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:unziplPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Check that an array has a well formed representation.\n   This should only return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e where there is a bug in the library.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "validPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#validPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Check that an array has well formed representation This should only return False where there is bug in the library",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "validPR",
          "normalized": "PData a-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:validPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip3PD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData (a, b, c)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple3.html#zip3PD",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip3PD",
          "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData(a,b,c)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip3PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip4PD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData (a, b, c, d)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple4.html#zip4PD",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip4PD",
          "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData(a,b,c,d)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip4PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip5PD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData (a, b, c, d, e)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple5.html#zip5PD",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip5PD",
          "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData(a,b,c,d,e)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip5PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip6PD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData b -\u003e PData c -\u003e PData d -\u003e PData e -\u003e PData f -\u003e PData (a, b, c, d, e, f)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple6.html#zip6PD",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zip6PD",
          "normalized": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData(a,b,c,d,e,f)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData a-\u003ePData b-\u003ePData c-\u003ePData d-\u003ePData e-\u003ePData f-\u003ePData(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zip6PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zipPD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData b -\u003e PData (a, b)",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#zipPD",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "zipPD",
          "normalized": "PData a-\u003ePData b-\u003ePData(a,b)",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "PData a-\u003ePData b-\u003ePData(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:zipPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted zip.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "ziplPR",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData (PArray b) -\u003e PData (PArray (a, b))",
          "source": "src/Data-Array-Parallel-PArray-PData-Tuple2.html#ziplPR",
          "type": "function"
        },
        "index": {
          "description": "Lifted zip",
          "hierarchy": "Data Array Parallel PArray PData",
          "module": "Data.Array.Parallel.PArray.PData",
          "name": "ziplPR",
          "normalized": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PData.html#v:ziplPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003ePRepr\u003c/a\u003e\u003c/code\u003e family and \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e class that converts between the user\n   level element types and our generic representation.\n   Apart from \u003ccode\u003e\u003ca\u003eunpackPA\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ePA\u003c/a\u003e\u003c/code\u003e wrapper functions defined here all have\n   equivalent \u003ccode\u003e\u003ca\u003ePR\u003c/a\u003e\u003c/code\u003e versions in \u003ca\u003eData.Array.Parallel.PArray.PData\u003c/a\u003e,\n   so see there for documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "PRepr",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the PRepr family and PA class that converts between the user level element types and our generic representation Apart from unpackPA the PA wrapper functions defined here all have equivalent PR versions in Data.Array.Parallel.PArray.PData so see there for documentation",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "PRepr",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
          "type": "class"
        },
        "index": {
          "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFamily of Representable types. These are the types that we know how to\n   represent generically. \u003ccode\u003e\u003ca\u003ePRepr\u003c/a\u003e\u003c/code\u003e takes an arbitrary type and produces the\n   generic type we use to  represent it.\n\u003c/p\u003e\u003cp\u003eInstances for simple types are defined by the library. \n   For algebraic types, it's up to the vectoriser/client module to create\n   a suitable instance.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.PArray.PRepr\",\"Data.Array.Parallel.Prim\"]",
          "name": "PRepr",
          "package": "dph-lifted-vseg",
          "signature": "PRepr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#t:PRepr\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PRepr\"]"
        },
        "index": {
          "description": "Family of Representable types These are the types that we know how to represent generically PRepr takes an arbitrary type and produces the generic type we use to represent it Instances for simple types are defined by the library For algebraic types it up to the vectoriser client module to create suitable instance",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "PRepr",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#t:PRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appendPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendPA",
          "normalized": "PData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003ePData a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appenddPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appenddPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appenddPA",
          "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appenddPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendlPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData (PArray a) -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#appendlPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendlPA",
          "normalized": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray a)-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendlPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendsPA",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#appendsPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "appendsPA",
          "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:appendsPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "bpermutePA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#bpermutePA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "bpermutePA",
          "normalized": "PData a-\u003eArray Int-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003eArray Int-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:bpermutePA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "combine2PA",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#combine2PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "combine2PA",
          "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:combine2PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "concatPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#concatPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "concatPA",
          "normalized": "PData(PArray a)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray a)-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:concatPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "concatlPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray (PArray a)) -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#concatlPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "concatlPA",
          "normalized": "PData(PArray(PArray a))-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray(PArray a))-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:concatlPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "coversPA",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#coversPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "coversPA",
          "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:coversPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "emptyPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#emptyPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "emptyPA",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:emptyPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "emptydPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#emptydPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "emptydPA",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:emptydPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractPA",
          "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractssPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e SSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractssPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractssPA",
          "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eSSegd-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractssPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractvsPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#extractvsPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "extractvsPA",
          "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eVSegd-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:extractvsPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromArrPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PData (PRepr a) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromArrPRepr",
          "normalized": "PData(PRepr a)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Arr PRepr",
          "signature": "PData(PRepr a)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromArrPReprs",
          "package": "dph-lifted-vseg",
          "signature": "PDatas (PRepr a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromArrPReprs",
          "normalized": "PDatas(PRepr a)-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Arr PReprs",
          "signature": "PDatas(PRepr a)-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PRepr a -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromPRepr",
          "normalized": "PRepr a-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "signature": "PRepr a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromVectorPA",
          "package": "dph-lifted-vseg",
          "signature": "Vector a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromVectorPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromVectorPA",
          "normalized": "Vector a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PA",
          "signature": "Vector a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromVectorPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromVectordPA",
          "package": "dph-lifted-vseg",
          "signature": "Vector (PData a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromVectordPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "fromVectordPA",
          "normalized": "Vector(PData a)-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PA",
          "signature": "Vector(PData a)-\u003ePDatas a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:fromVectordPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexPA",
          "normalized": "PData a-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexdPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexdPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexdPA",
          "normalized": "PDatas a-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eInt-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexdPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexlPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#indexlPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexlPA",
          "normalized": "PData(PArray a)-\u003ePData Int-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray a)-\u003ePData Int-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexlPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexsPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexsPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexsPA",
          "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexsPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexvsPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#indexvsPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "indexvsPA",
          "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:indexvsPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "lengthPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#lengthPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "lengthPA",
          "normalized": "PData a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:lengthPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "lengthdPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#lengthdPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "lengthdPA",
          "normalized": "PDatas a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PDatas a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:lengthdPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConatruct a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "mkPNestedPA",
          "package": "dph-lifted-vseg",
          "signature": "VSegd -\u003e PDatas a -\u003e Segd -\u003e PData a -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#mkPNestedPA",
          "type": "function"
        },
        "index": {
          "description": "Conatruct nested array",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "mkPNestedPA",
          "normalized": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PNested PA",
          "signature": "VSegd-\u003ePDatas a-\u003eSegd-\u003ePData a-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:mkPNestedPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "nfPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#nfPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "nfPA",
          "normalized": "PData a-\u003e()",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:nfPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "packByTagPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#packByTagPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "packByTagPA",
          "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PA",
          "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:packByTagPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "pprpDataPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#pprpDataPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "pprpDataPA",
          "normalized": "PData a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "Data PA",
          "signature": "PData a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:pprpDataPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "pprpPA",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#pprpPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "pprpPA",
          "normalized": "a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:pprpPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "replicatePA",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#replicatePA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "replicatePA",
          "normalized": "Int-\u003ea-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "Int-\u003ea-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:replicatePA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "replicatesPA",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#replicatesPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "replicatesPA",
          "normalized": "Segd-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "Segd-\u003ePData a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:replicatesPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "similarPA",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#similarPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "similarPA",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:similarPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "singletondPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#singletondPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "singletondPA",
          "normalized": "PData a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003ePDatas a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:singletondPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "slicelPA",
          "package": "dph-lifted-vseg",
          "signature": "PData Int -\u003e PData Int -\u003e PData (PArray a) -\u003e PData (PArray a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#slicelPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "slicelPA",
          "normalized": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData Int-\u003ePData Int-\u003ePData(PArray a)-\u003ePData(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:slicelPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toArrPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toArrPRepr",
          "normalized": "PData a-\u003ePData(PRepr a)",
          "package": "dph-lifted-vseg",
          "partial": "Arr PRepr",
          "signature": "PData a-\u003ePData(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toArrPReprs",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e PDatas (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toArrPReprs",
          "normalized": "PDatas a-\u003ePDatas(PRepr a)",
          "package": "dph-lifted-vseg",
          "partial": "Arr PReprs",
          "signature": "PDatas a-\u003ePDatas(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a nested array to its generic representation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toNestedArrPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData (PArray (PRepr a))",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toNestedArrPRepr",
          "type": "function"
        },
        "index": {
          "description": "Convert nested array to its generic representation",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toNestedArrPRepr",
          "normalized": "PData(PArray a)-\u003ePData(PArray(PRepr a))",
          "package": "dph-lifted-vseg",
          "partial": "Nested Arr PRepr",
          "signature": "PData(PArray a)-\u003ePData(PArray(PRepr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toNestedArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toPRepr",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e PRepr a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toPRepr",
          "normalized": "a-\u003ePRepr a",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "signature": "a-\u003ePRepr a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toVectorPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toVectorPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toVectorPA",
          "normalized": "PData a-\u003eVector a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PA",
          "signature": "PData a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toVectorPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toVectordPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Vector (PData a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toVectordPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "toVectordPA",
          "normalized": "PDatas a-\u003eVector(PData a)",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PA",
          "signature": "PDatas a-\u003eVector(PData a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:toVectordPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepDataPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepDataPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepDataPA",
          "normalized": "PData a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Data PA",
          "signature": "PData a-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepDataPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepDatasPA",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepDatasPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepDatasPA",
          "normalized": "PDatas a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Datas PA",
          "signature": "PDatas a-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepDatasPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepPA",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#typeRepPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "typeRepPA",
          "normalized": "a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep PA",
          "signature": "a-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:typeRepPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "unconcatPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData b -\u003e PData (PArray b)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Nested.html#unconcatPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "unconcatPA",
          "normalized": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray a)-\u003ePData b-\u003ePData(PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:unconcatPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack an array to reveal its representation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "unpackPA",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PData (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#unpackPA",
          "type": "function"
        },
        "index": {
          "description": "Unpack an array to reveal its representation",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "unpackPA",
          "normalized": "PArray a-\u003ePData(PRepr a)",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PArray a-\u003ePData(PRepr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:unpackPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "validPA",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#validPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "validPA",
          "normalized": "PData a-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:validPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted zip on PData arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "ziplPA",
          "package": "dph-lifted-vseg",
          "signature": "PData (PArray a) -\u003e PData (PArray b) -\u003e PData (PArray (a, b))",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Tuple.html#ziplPA",
          "type": "function"
        },
        "index": {
          "description": "Lifted zip on PData arrays",
          "hierarchy": "Data Array Parallel PArray PRepr",
          "module": "Data.Array.Parallel.PArray.PRepr",
          "name": "ziplPA",
          "normalized": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "signature": "PData(PArray a)-\u003ePData(PArray b)-\u003ePData(PArray(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-PRepr.html#v:ziplPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that work on parallel arrays of scalar elements.\n   Unlike the functions defined in D.A.P.PArray, these only need\n   Scalar dictionaries, instead of PR or PA dictionaries. \n\u003c/p\u003e\u003cp\u003eThey are used when defining vectorised Prelude functions, \n    eg in D.A.P.Prelude.Int and D.A.P.Prelude.Double.\n\u003c/p\u003e\u003cp\u003eThe map and zipWith functions are also used by the vectoriser when\n   vectorising uses of scalar operators like (+).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html",
          "type": "module"
        },
        "index": {
          "description": "Functions that work on parallel arrays of scalar elements Unlike the functions defined in D.A.P.PArray these only need Scalar dictionaries instead of PR or PA dictionaries They are used when defining vectorised Prelude functions eg in D.A.P.Prelude.Int and D.A.P.Prelude.Double The map and zipWith functions are also used by the vectoriser when vectorising uses of scalar operators like",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "partial": "Scalar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of Scalar data that can be converted to and from single unboxed\n   vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
          "type": "class"
        },
        "index": {
          "description": "Class of Scalar data that can be converted to and from single unboxed vectors",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "partial": "Scalar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a range of integers.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.PArray.Scalar\",\"Data.Array.Parallel.PArray\"]",
          "name": "enumFromTo",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e PArray Int",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTo\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:enumFromTo\"]"
        },
        "index": {
          "description": "Construct range of integers",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "enumFromTo",
          "normalized": "Int-\u003eInt-\u003ePArray Int",
          "package": "dph-lifted-vseg",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003ePArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.PArray.Scalar\",\"Data.Array.Parallel.PArray\"]",
          "name": "enumFromTol",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int -\u003e PArray Int -\u003e PArray (PArray Int)",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#enumFromTol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTol\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:enumFromTol\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "enumFromTol",
          "normalized": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)",
          "package": "dph-lifted-vseg",
          "partial": "From Tol",
          "signature": "PArray Int-\u003ePArray Int-\u003ePArray(PArray Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:enumFromTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e PArray a -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Left fold over an array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray a-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over an array, using the first element to initialise the state.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e a -\u003e a) -\u003e PArray a -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "Left fold over an array using the first element to initialise the state",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003ePArray a-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003ea-\u003ea)-\u003ePArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over an array, also passing the index of each element\n   to the parameter function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1Index",
          "package": "dph-lifted-vseg",
          "signature": "((Int, a) -\u003e (Int, a) -\u003e (Int, a)) -\u003e PArray a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1Index",
          "type": "function"
        },
        "index": {
          "description": "Left fold over an array also passing the index of each element to the parameter function",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1Index",
          "normalized": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented fold of an array of arrays, using the first element of each\n   segment to initialse the state for that segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1s",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e a -\u003e a) -\u003e PArray (PArray a) -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1s",
          "type": "function"
        },
        "index": {
          "description": "Segmented fold of an array of arrays using the first element of each segment to initialse the state for that segment",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1s",
          "normalized": "(a-\u003ea-\u003ea)-\u003ePArray(PArray a)-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003ea-\u003ea)-\u003ePArray(PArray a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented fold over an array, also passing the index of each \n   element to the parameter function.\n   TODO: fold the psegs then replicate, like in the other folds.\n         this currently has the wrong complexity.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1sIndex",
          "package": "dph-lifted-vseg",
          "signature": "((Int, a) -\u003e (Int, a) -\u003e (Int, a)) -\u003e PArray (PArray a) -\u003e PArray Int",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fold1sIndex",
          "type": "function"
        },
        "index": {
          "description": "Segmented fold over an array also passing the index of each element to the parameter function TODO fold the psegs then replicate like in the other folds this currently has the wrong complexity",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fold1sIndex",
          "normalized": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray(PArray a)-\u003ePArray Int",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "((Int,a)-\u003e(Int,a)-\u003e(Int,a))-\u003ePArray(PArray a)-\u003ePArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fold1sIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented fold of an array of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "folds",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e PArray (PArray a) -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#folds",
          "type": "function"
        },
        "index": {
          "description": "Segmented fold of an array of arrays",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "folds",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray(PArray a)-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ePArray(PArray a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:folds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromScalarPData",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromScalarPData",
          "normalized": "PData a-\u003eArray a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PData",
          "signature": "PData a-\u003eArray a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromScalarPDatas",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPDatas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromScalarPDatas",
          "normalized": "PDatas a-\u003eArrays a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PDatas",
          "signature": "PDatas a-\u003eArrays a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromScalarPDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.PArray.Scalar\",\"Data.Array.Parallel.PArray\"]",
          "name": "fromUArray",
          "package": "dph-lifted-vseg",
          "signature": "Array a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromUArray\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromUArray",
          "normalized": "Array a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "UArray",
          "signature": "Array a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an U.Array of pairs to a PArray.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.PArray.Scalar\",\"Data.Array.Parallel.PArray\"]",
          "name": "fromUArray2",
          "package": "dph-lifted-vseg",
          "signature": "Array (a, b) -\u003e PArray (a, b)",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromUArray2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray2\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromUArray2\"]"
        },
        "index": {
          "description": "Convert an U.Array of pairs to PArray",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "fromUArray2",
          "normalized": "Array(a,b)-\u003ePArray(a,b)",
          "package": "dph-lifted-vseg",
          "partial": "UArray",
          "signature": "Array(a,b)-\u003ePArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:fromUArray2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to every element of an array, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "map",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b) -\u003e PArray a -\u003e PArray b",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to every element of an array yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "toScalarPData",
          "package": "dph-lifted-vseg",
          "signature": "Array a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "toScalarPData",
          "normalized": "Array a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PData",
          "signature": "Array a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "toScalarPDatas",
          "package": "dph-lifted-vseg",
          "signature": "Arrays a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPDatas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "toScalarPDatas",
          "normalized": "Arrays a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PDatas",
          "signature": "Arrays a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toScalarPDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.PArray.Scalar\",\"Data.Array.Parallel.PArray\"]",
          "name": "toUArray",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Array a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toUArray\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toUArray\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "toUArray",
          "normalized": "PArray a-\u003eArray a",
          "package": "dph-lifted-vseg",
          "partial": "UArray",
          "signature": "PArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:toUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e PArray a -\u003e PArray b -\u003e PArray c",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Zip two arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip three arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith3",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Zip three arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip four arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith4",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Zip four arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip five arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith5",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Zip five arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip six arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith6",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Zip six arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip seven arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith7",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Zip seven arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEight seven arrays, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith8",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#zipWith8",
          "type": "function"
        },
        "index": {
          "description": "Eight seven arrays yielding new array",
          "hierarchy": "Data Array Parallel PArray Scalar",
          "module": "Data.Array.Parallel.PArray.Scalar",
          "name": "zipWith8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray-Scalar.html#v:zipWith8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnvectorised parallel arrays.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e These operators may be used directly by unvectorised client programs.\n\u003c/li\u003e\u003cli\u003e They are also used by the \u003ca\u003eData.Array.Parallel.Lifted.Combinators\u003c/a\u003e\n     module to define the closure converted versions that vectorised code\n     uses.\n\u003c/li\u003e\u003cli\u003e In general, the operators here are all unsafe and don't do bounds checks.\n     The lifted versions also don't check that each of the argument arrays\n     have the same length.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray.html",
          "type": "module"
        },
        "index": {
          "description": "Unvectorised parallel arrays These operators may be used directly by unvectorised client programs They are also used by the Data.Array.Parallel.Lifted.Combinators module to define the closure converted versions that vectorised code uses In general the operators here are all unsafe and don do bounds checks The lifted versions also don check that each of the argument arrays have the same length",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
          "type": "class"
        },
        "index": {
          "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "parallel array consisting of length field and some array data",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "append",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "append",
          "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted append.\n   Both arrays must have the same length\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "appendl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray (PArray a) -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#appendl",
          "type": "function"
        },
        "index": {
          "description": "Lifted append Both arrays must have the same length",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "appendl",
          "normalized": "PArray(PArray a)-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:appendl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "combine2",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e PArray a -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#combine2",
          "type": "function"
        },
        "index": {
          "description": "Combine two arrays based on selector",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "combine2",
          "normalized": "Sel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Sel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:combine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "concat",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate nested array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "concat",
          "normalized": "PArray(PArray a)-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted concat.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "concatl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray (PArray a)) -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#concatl",
          "type": "function"
        },
        "index": {
          "description": "Lifted concat",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "concatl",
          "normalized": "PArray(PArray(PArray a))-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray(PArray a))-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:concatl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). An empty array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "empty",
          "package": "dph-lifted-vseg",
          "signature": "PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "empty",
          "package": "dph-lifted-vseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a range of elements from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "extract",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Int -\u003e Int -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Extract range of elements from an array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "extract",
          "normalized": "PArray a-\u003eInt-\u003eInt-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003eInt-\u003eInt-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented extract.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "extracts",
          "package": "dph-lifted-vseg",
          "signature": "Vector (PArray a) -\u003e SSegd -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#extracts",
          "type": "function"
        },
        "index": {
          "description": "Segmented extract",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "extracts",
          "normalized": "Vector(PArray a)-\u003eSSegd-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Vector(PArray a)-\u003eSSegd-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extracts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eextracts\u003c/a\u003e\u003c/code\u003e that takes arrays of sources, starts and lengths of\n   the segments, and uses these to build the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n   TODO: The lengths of the sources, starts and lengths arrays must be the same, \n         but this is not checked.\n         All sourceids must point to valid data arrays.\n         Segments must be within their corresponding source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "extracts'",
          "package": "dph-lifted-vseg",
          "signature": "Vector (PArray a)-\u003e PArray Int-\u003e PArray Int-\u003e PArray Int-\u003e PArray a",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for extracts that takes arrays of sources starts and lengths of the segments and uses these to build the SSegd TODO The lengths of the sources starts and lengths arrays must be the same but this is not checked All sourceids must point to valid data arrays Segments must be within their corresponding source array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "extracts'",
          "normalized": "Vector(PArray a)-\u003ePArray Int-\u003ePArray Int-\u003ePArray Int-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Vector(PArray a)-\u003ePArray Int-\u003ePArray Int-\u003ePArray Int-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:extracts-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromList",
          "package": "dph-lifted-vseg",
          "signature": "[a] -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to PArray",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromList",
          "normalized": "[a]-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "List",
          "signature": "[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromVector",
          "package": "dph-lifted-vseg",
          "signature": "Vector a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector to PArray",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromVector",
          "normalized": "Vector a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "Vector",
          "signature": "Vector a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Lookup a single element from the source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "index",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-PArray.html#index",
          "type": "function"
        },
        "index": {
          "description": "Lookup single element from the source array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "index",
          "normalized": "PArray a-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len indices). Lookup a several elements from several source arrays\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "indexl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray Int -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#indexl",
          "type": "function"
        },
        "index": {
          "description": "len indices Lookup several elements from several source arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "indexl",
          "normalized": "PArray(PArray a)-\u003ePArray Int-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray Int-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:indexl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length of some arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "lengthl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray Int",
          "source": "src/Data-Array-Parallel-PArray.html#lengthl",
          "type": "function"
        },
        "index": {
          "description": "Take the length of some arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "lengthl",
          "normalized": "PArray(PArray a)-\u003ePArray Int",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:lengthl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a nested array from a segment descriptor and some flat data.\n   The segment descriptor must represent as many elements as present\n   in the flat data array, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "nestUSegd",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e PArray a -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#nestUSegd",
          "type": "function"
        },
        "index": {
          "description": "Create nested array from segment descriptor and some flat data The segment descriptor must represent as many elements as present in the flat data array else error",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "nestUSegd",
          "normalized": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "partial": "USegd",
          "signature": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:nestUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce an array to normal form.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "nf",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray.html#nf",
          "type": "function"
        },
        "index": {
          "description": "Force an array to normal form",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "nf",
          "normalized": "PArray a-\u003e()",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:nf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the elements of an array that have their tag set to True.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "pack",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray Bool -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Select the elements of an array that have their tag set to True",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "pack",
          "normalized": "PArray a-\u003ePArray Bool-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray Bool-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter an array based on some tags.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "packByTag",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Array Tag -\u003e Tag -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#packByTag",
          "type": "function"
        },
        "index": {
          "description": "Filter an array based on some tags",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "packByTag",
          "normalized": "PArray a-\u003eArray Tag-\u003eTag-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "By Tag",
          "signature": "PArray a-\u003eArray Tag-\u003eTag-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:packByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted pack.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "packl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray (PArray Bool) -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#packl",
          "type": "function"
        },
        "index": {
          "description": "Lifted pack",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "packl",
          "normalized": "PArray(PArray a)-\u003ePArray(PArray Bool)-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray(PArray Bool)-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:packl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the same value.\n   We require the replication count to be \u003e 0 so that it's easier to maintain\n   the validPR invariants for nested arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicate",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003ea-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum lengths). Lifted replicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicatel",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int -\u003e PArray a -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#replicatel",
          "type": "function"
        },
        "index": {
          "description": "sum lengths Lifted replicate",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicatel",
          "normalized": "PArray Int-\u003ePArray a-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int-\u003ePArray a-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicatel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicates",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#replicates",
          "type": "function"
        },
        "index": {
          "description": "sum lengths Segmented replicate",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicates",
          "normalized": "Segd-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Segd-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum lengths). Wrapper for segmented replicate that takes replication counts\n  and uses them to build the \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicates'",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#replicates%27",
          "type": "function"
        },
        "index": {
          "description": "sum lengths Wrapper for segmented replicate that takes replication counts and uses them to build the Segd",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicates'",
          "normalized": "PArray Int-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:replicates-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Produce an array containing a single element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "singleton",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Produce an array containing single element",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "singleton",
          "normalized": "a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Produce an array of singleton arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "singletonl",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#singletonl",
          "type": "function"
        },
        "index": {
          "description": "Produce an array of singleton arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "singletonl",
          "normalized": "PArray a-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:singletonl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a range of elements from an arrary.\n   Like \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e but with the parameters in a different order.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "slice",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Extract range of elements from an arrary Like extract but with the parameters in different order",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "slice",
          "normalized": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract some slices from some arrays.\n   The arrays of starting indices and lengths must themselves\n   have the same length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "slicel",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int -\u003e PArray Int -\u003e PArray (PArray a) -\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-PArray.html#slicel",
          "type": "function"
        },
        "index": {
          "description": "Extract some slices from some arrays The arrays of starting indices and lengths must themselves have the same length",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "slicel",
          "normalized": "PArray Int-\u003ePArray Int-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
          "package": "dph-lifted-vseg",
          "signature": "PArray Int-\u003ePArray Int-\u003ePArray(PArray a)-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:slicel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the segment descriptor from a nested array and demote it to a\n   plain Segd. This is unsafe because it can cause index space overflow.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "takeUSegd",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e Segd",
          "source": "src/Data-Array-Parallel-PArray.html#takeUSegd",
          "type": "function"
        },
        "index": {
          "description": "Take the segment descriptor from nested array and demote it to plain Segd This is unsafe because it can cause index space overflow",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "takeUSegd",
          "normalized": "PArray(PArray a)-\u003eSegd",
          "package": "dph-lifted-vseg",
          "partial": "USegd",
          "signature": "PArray(PArray a)-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:takeUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "toList",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e [a]",
          "source": "src/Data-Array-Parallel-PArray.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert PArray to list",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "toList",
          "normalized": "PArray a-\u003e[a]",
          "package": "dph-lifted-vseg",
          "partial": "List",
          "signature": "PArray a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e        \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "toVector",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-PArray.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "Convert PArray to Vector",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "toVector",
          "normalized": "PArray a-\u003eVector a",
          "package": "dph-lifted-vseg",
          "partial": "Vector",
          "signature": "PArray a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the type of a thing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "typeRep",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray.html#typeRep",
          "type": "function"
        },
        "index": {
          "description": "Get the type of thing",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "typeRep",
          "normalized": "a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep",
          "signature": "a-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:typeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImpose a nesting structure on a flat array\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "unconcat",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray b -\u003e PArray (PArray b)",
          "source": "src/Data-Array-Parallel-PArray.html#unconcat",
          "type": "function"
        },
        "index": {
          "description": "Impose nesting structure on flat array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "unconcat",
          "normalized": "PArray(PArray a)-\u003ePArray b-\u003ePArray(PArray b)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray b-\u003ePArray(PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzip",
          "package": "dph-lifted-vseg",
          "signature": "PArray (a, b) -\u003e (PArray a, PArray b)",
          "source": "src/Data-Array-Parallel-PArray.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzip",
          "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted unzip\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzipl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray (a, b)) -\u003e PArray (PArray a, PArray b)",
          "source": "src/Data-Array-Parallel-PArray.html#unzipl",
          "type": "function"
        },
        "index": {
          "description": "Lifted unzip",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzipl",
          "normalized": "PArray(PArray(a,b))-\u003ePArray(PArray a,PArray b)",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray(a,b))-\u003ePArray(PArray a,PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:unzipl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that an array has a valid internal representation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "valid",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check that an array has valid internal representation",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "valid",
          "normalized": "PArray a-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip a pair of arrays into an array of pairs.\n   The two arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray b -\u003e PArray (a, b)",
          "source": "src/Data-Array-Parallel-PArray.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs The two arrays must have the same length else error",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip",
          "normalized": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip three arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip3",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray (a, b, c)",
          "source": "src/Data-Array-Parallel-PArray.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Zip three arrays All arrays must have the same length else error",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip3",
          "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray(a,b,c)",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip four arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip4",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray (a, b, c, d)",
          "source": "src/Data-Array-Parallel-PArray.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Zip four arrays All arrays must have the same length else error",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip4",
          "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray(a,b,c,d)",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip five arrays.\n   All arrays must have the same length, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip5",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray (a, b, c, d, e)",
          "source": "src/Data-Array-Parallel-PArray.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Zip five arrays All arrays must have the same length else error",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip5",
          "normalized": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray(a,b,c,d,e)",
          "package": "dph-lifted-vseg",
          "signature": "PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted zip.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zipl",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e PArray (PArray b) -\u003e PArray (PArray (a, b))",
          "source": "src/Data-Array-Parallel-PArray.html#zipl",
          "type": "function"
        },
        "index": {
          "description": "Lifted zip",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zipl",
          "normalized": "PArray(PArray a)-\u003ePArray(PArray b)-\u003ePArray(PArray(a,b))",
          "package": "dph-lifted-vseg",
          "signature": "PArray(PArray a)-\u003ePArray(PArray b)-\u003ePArray(PArray(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-PArray.html#v:zipl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module sets up the basic vectorisation map for vectorising the DPH Prelude.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Base",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module sets up the basic vectorisation map for vectorising the DPH Prelude",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Base",
          "package": "dph-lifted-vseg",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Eq",
          "package": "dph-lifted-vseg",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Eq",
          "package": "dph-lifted-vseg",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Float",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Float",
          "package": "dph-lifted-vseg",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Num",
          "package": "dph-lifted-vseg",
          "type": "class"
        },
        "index": {
          "description": "Basic numeric class Minimal complete definition all except negate or",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Num",
          "package": "dph-lifted-vseg",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Ord",
          "package": "dph-lifted-vseg",
          "type": "class"
        },
        "index": {
          "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Ord",
          "package": "dph-lifted-vseg",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "PArr",
          "package": "dph-lifted-vseg",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "PArr",
          "package": "dph-lifted-vseg",
          "partial": "PArr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:PArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Show",
          "package": "dph-lifted-vseg",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Show",
          "package": "dph-lifted-vseg",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(*)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(+)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(-)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(/=)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003c)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003c=)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003c=) \u003c=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(==)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003e)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003e=)",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "(\u003e=) \u003e=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "EQ",
          "package": "dph-lifted-vseg",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "EQ",
          "package": "dph-lifted-vseg",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Base\",\"Data.Array.Parallel.Prelude.Bool\"]",
          "name": "False",
          "package": "dph-lifted-vseg",
          "signature": "False",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:False\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:False\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "False",
          "package": "dph-lifted-vseg",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "GT",
          "package": "dph-lifted-vseg",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "GT",
          "package": "dph-lifted-vseg",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "LT",
          "package": "dph-lifted-vseg",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "LT",
          "package": "dph-lifted-vseg",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Base\",\"Data.Array.Parallel.Prelude.Bool\"]",
          "name": "True",
          "package": "dph-lifted-vseg",
          "signature": "True",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:True\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:True\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "True",
          "package": "dph-lifted-vseg",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "abs",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Absolute value",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "compare",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Ordering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "fromInteger",
          "package": "dph-lifted-vseg",
          "signature": "Integer -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "Integer",
          "signature": "Integer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "max",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "min",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "negate",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Unary negation",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "signum",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
          "hierarchy": "Data Array Parallel Prelude Base",
          "module": "Data.Array.Parallel.Prelude.Base",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Base.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-vseg",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(||)",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(&&)",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "andP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#andP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "andP",
          "normalized": "PArr Bool-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "PArr Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:andP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "fromBool",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#fromBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "fromBool",
          "normalized": "Bool-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Bool",
          "signature": "Bool-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "not",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "orP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#orP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "orP",
          "normalized": "PArr Bool-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "PArr Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:orP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "otherwise",
          "package": "dph-lifted-vseg",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "otherwise",
          "package": "dph-lifted-vseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "toBool",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#toBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "toBool",
          "normalized": "Int-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "Bool",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Bool.html#v:toBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Double.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "partial": "Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-vseg",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(*)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(*) *",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(**)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(**) **",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(+)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(+) +",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(-)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(-) -",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/) /",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/=)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/=) /=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c) \u003c",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c=)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c=) \u003c=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(==)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(==) ==",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e) \u003e",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e=)",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e=) \u003e=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "abs",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "abs",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acos",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#acos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acos",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acosh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#acosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acosh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asin",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#asin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asin",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asinh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#asinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asinh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atan",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#atan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atan",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atanh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#atanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atanh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cos",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#cos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cos",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cosh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#cosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cosh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "exp",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "exp",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "fromInt",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "fromInt",
          "normalized": "Int-\u003eDouble",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "signature": "Int-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "log",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "log",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "logBase",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#logBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "logBase",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "partial": "Base",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "max",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "max",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maxIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maxIndexP",
          "normalized": "PArr Double-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maximumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maximumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "min",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "min",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minIndexP",
          "normalized": "PArr Double-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minimumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minimumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "negate",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "negate",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "pi",
          "package": "dph-lifted-vseg",
          "signature": "Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#pi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "pi",
          "package": "dph-lifted-vseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "productP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "productP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sin",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sin",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sinh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sinh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sqrt",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sqrt",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tan",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tan",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tanh",
          "package": "dph-lifted-vseg",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#tanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tanh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-vseg",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Double.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Int.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(*)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(*) *",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(+)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(+) +",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(-)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(-) -",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(/=)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(/=) /=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c) \u003c",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c=)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c=) \u003c=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(==)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(==) ==",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e) \u003e",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e=)",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e=) \u003e=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "abs",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "abs",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "div",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "div",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "enumFromToP",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e PArr Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#enumFromToP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "enumFromToP",
          "normalized": "Int-\u003eInt-\u003ePArr Int",
          "package": "dph-lifted-vseg",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003ePArr Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:enumFromToP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "max",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "max",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maxIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maxIndexP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maximumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maximumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "min",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "min",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minIndexP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minimumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minimumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "mod",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "mod",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "negate",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "negate",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "productP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "productP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sqrt",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sqrt",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Int.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Ordering.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Ordering",
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "partial": "Ordering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Ordering",
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "Ordering",
          "package": "dph-lifted-vseg",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isEQ",
          "package": "dph-lifted-vseg",
          "signature": "Ordering -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Ordering.html#isEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Ordering",
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isEQ",
          "normalized": "Ordering-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "EQ",
          "signature": "Ordering-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isGT",
          "package": "dph-lifted-vseg",
          "signature": "Ordering -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Ordering.html#isGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Ordering",
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isGT",
          "normalized": "Ordering-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "GT",
          "signature": "Ordering-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isLT",
          "package": "dph-lifted-vseg",
          "signature": "Ordering -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Ordering.html#isLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Ordering",
          "module": "Data.Array.Parallel.Prelude.Ordering",
          "name": "isLT",
          "normalized": "Ordering-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "LT",
          "signature": "Ordering-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Ordering.html#v:isLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClosure converted tuple data constructors used by the vectoriser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "Tuple",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Closure converted tuple data constructors used by the vectoriser",
          "hierarchy": "Data Array Parallel Prelude Tuple",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "Tuple",
          "package": "dph-lifted-vseg",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Tuple\",\"Data.Array.Parallel.Prim\"]",
          "name": "tup2",
          "package": "dph-lifted-vseg",
          "signature": "a :-\u003e (b :-\u003e (a, b))",
          "source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup2\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup2\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Tuple",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "tup2",
          "normalized": "a-\u003e(b-\u003e(a,b))",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003e(b-\u003e(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Tuple\",\"Data.Array.Parallel.Prim\"]",
          "name": "tup3",
          "package": "dph-lifted-vseg",
          "signature": "a :-\u003e (b :-\u003e (c :-\u003e (a, b, c)))",
          "source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup3\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup3\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Tuple",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "tup3",
          "normalized": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003e(b-\u003e(c-\u003e(a,b,c)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Tuple\",\"Data.Array.Parallel.Prim\"]",
          "name": "tup4",
          "package": "dph-lifted-vseg",
          "signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (a, b, c, d))))",
          "source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup4\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup4\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Tuple",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "tup4",
          "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(a,b,c,d))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Prelude.Tuple\",\"Data.Array.Parallel.Prim\"]",
          "name": "tup5",
          "package": "dph-lifted-vseg",
          "signature": "a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (a, b, c, d, e)))))",
          "source": "src/Data-Array-Parallel-Prelude-Tuple.html#tup5",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup5\",\"http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tup5\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Tuple",
          "module": "Data.Array.Parallel.Prelude.Tuple",
          "name": "tup5",
          "normalized": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(a,b,c,d,e)))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Tuple.html#v:tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-vseg",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(*)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(*) *",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(+)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(+) +",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(-)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(-) -",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(/=)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(/=) /=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c) \u003c",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c=)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c=) \u003c=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(==)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(==) ==",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e) \u003e",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e=)",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e=) \u003e=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "abs",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "abs",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "div",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "div",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "fromInt",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "fromInt",
          "normalized": "Int-\u003eWord",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "max",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "max",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maxIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maxIndexP",
          "normalized": "PArr Word-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maximumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maximumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "min",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "min",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minIndexP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minIndexP",
          "normalized": "PArr Word-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Index",
          "signature": "PArr Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minimumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minimumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "mod",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "mod",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "negate",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "negate",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "productP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "productP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sqrt",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sqrt",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sumP",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-vseg",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "toInt",
          "package": "dph-lifted-vseg",
          "signature": "Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#toInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "toInt",
          "normalized": "Word-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "Int",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude-Word8.html#v:toInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules bundles all vectorised versions of Prelude definitions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module should not be explicitly imported in user code anymore.\u003c/em\u003e\n  User code should only import \u003ccode\u003e\u003ca\u003eParallel\u003c/a\u003e\u003c/code\u003e and, until the\n  vectoriser supports type classes, the type-specific\n  modules \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Prelude",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "This modules bundles all vectorised versions of Prelude definitions This module should not be explicitly imported in user code anymore User code should only import Parallel and until the vectoriser supports type classes the type-specific modules",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Prelude",
          "package": "dph-lifted-vseg",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the API used by the vectoriser.\n   The vectoriser wants a slightly different interface to the one used \n   natively by the library. This module performs the impedance matching.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "Prim",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "This is the API used by the vectoriser The vectoriser wants slightly different interface to the one used natively by the library This module performs the impedance matching",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Prim",
          "package": "dph-lifted-vseg",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the fixity of the closure type constructor.\n\u003c/p\u003e\u003cp\u003eThe type of closures.\n   This bundles up:\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": ":-\u003e",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "Define the fixity of the closure type constructor The type of closures This bundles up",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": ":-\u003e",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n\u003c/p\u003e\u003cp\u003eThe conversions methods should all be O(1). \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#PA",
          "type": "class"
        },
        "index": {
          "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversions methods should all be",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "PA",
          "package": "dph-lifted-vseg",
          "partial": "PA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PR (Parallel Representation) class holds primitive array operators that\n   work on our generic representation of data.\n\u003c/p\u003e\u003cp\u003eThere are instances for all atomic types such  as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, tuples,\n   nested arrays `PData (PArray a)` and for the  generic types we used to represent\n   user level algebraic data, \u003ccode\u003eSum2\u003c/code\u003e and \u003ccode\u003eWrap\u003c/code\u003e and \u003ccode\u003eVoid\u003c/code\u003e. All array data \n   is converted to this fixed set of types.\n\u003c/p\u003e\u003cp\u003eTODO: refactor to change PData Int to U.Array Int, \n         there's not need to wrap an extra PData constructor around these arrays,\n         and the type of bpermute is different than the others.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "PR",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PR",
          "type": "class"
        },
        "index": {
          "description": "The PR Parallel Representation class holds primitive array operators that work on our generic representation of data There are instances for all atomic types such as Int and Double tuples nested arrays PData PArray and for the generic types we used to represent user level algebraic data Sum2 and Wrap and Void All array data is converted to this fixed set of types TODO refactor to change PData Int to U.Array Int there not need to wrap an extra PData constructor around these arrays and the type of bpermute is different than the others",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "PR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of Scalar data that can be converted to and from single unboxed\n   vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
          "type": "class"
        },
        "index": {
          "description": "Class of Scalar data that can be converted to and from single unboxed vectors",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Scalar",
          "package": "dph-lifted-vseg",
          "partial": "Scalar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Sel2",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Prim.html#Sel2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Sel2",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Sels2",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Sum2.html#Sels2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Sels2",
          "package": "dph-lifted-vseg",
          "partial": "Sels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sels2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum types used for the generic representation of algebraic data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "Sum2",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "Sum types used for the generic representation of algebraic data",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Sum2",
          "package": "dph-lifted-vseg",
          "partial": "Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Sum3",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Sum3",
          "package": "dph-lifted-vseg",
          "partial": "Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Sum3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e type is used when representing enumerations. \n\u003c/p\u003e\u003cp\u003eA type like Bool is represented as \u003ccode\u003eSum2 Void Void\u003c/code\u003e, meaning that we only\n   only care about the tag of the data constructor and not its argumnent.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "Void",
          "package": "dph-lifted-vseg",
          "type": "data"
        },
        "index": {
          "description": "The Void type is used when representing enumerations type like Bool is represented as Sum2 Void Void meaning that we only only care about the tag of the data constructor and not its argumnent",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Void",
          "package": "dph-lifted-vseg",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen converting a data type to its generic representation, we use\n   \u003ccode\u003e\u003ca\u003eWrap\u003c/a\u003e\u003c/code\u003e to help us convert only one layer at a time. For example:\n\u003c/p\u003e\u003cpre\u003e\n   data Foo a = Foo Int a\n\ninstance PA a =\u003e PA (Foo a) where\n    type PRepr (Foo a) = (Int, Wrap a)  -- define how (Foo a) is represented\n\u003c/pre\u003e\u003cp\u003eHere we've converted the \u003ccode\u003eFoo\u003c/code\u003e data constructor to a pair, and Int\n   is its own representation type. We have PData/PR instances for pairs and\n   Ints, so we can work with arrays of these types. However, we can't just\n   use (Int, a) as the representation of (Foo a) because \u003ccode\u003ea\u003c/code\u003e might\n   be user defined and we won't have PData/PR instances for it.\n\u003c/p\u003e\u003cp\u003eInstead, we wrap the second element with the Wrap constructor, which tells\n   us that if we want to process this element we still need to convert it\n   to the generic representation (and back). This last part is done by\n   the PR instance of Wrap, who's methods are defined by calls to the *PD \n   functions from \u003ca\u003eData.Array.Parallel.PArray.PRepr\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "Wrap",
          "package": "dph-lifted-vseg",
          "type": "newtype"
        },
        "index": {
          "description": "When converting data type to its generic representation we use Wrap to help us convert only one layer at time For example data Foo Foo Int instance PA PA Foo where type PRepr Foo Int Wrap define how Foo is represented Here we ve converted the Foo data constructor to pair and Int is its own representation type We have PData PR instances for pairs and Ints so we can work with arrays of these types However we can just use Int as the representation of Foo because might be user defined and we won have PData PR instances for it Instead we wrap the second element with the Wrap constructor which tells us that if we want to process this element we still need to convert it to the generic representation and back This last part is done by the PR instance of Wrap who methods are defined by calls to the PD functions from Data.Array.Parallel.PArray.PRepr",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Wrap",
          "package": "dph-lifted-vseg",
          "partial": "Wrap",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "($:)",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.  (a :-\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Array-Parallel-Prim.html#%24%3A",
          "type": "function"
        },
        "index": {
          "description": "Apply closure",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "($:) $:",
          "normalized": "a b c(b-\u003ed)-\u003eb-\u003ed",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:-36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt2_1",
          "package": "dph-lifted-vseg",
          "signature": "Alt2_1 a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt2_1",
          "package": "dph-lifted-vseg",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt2_2",
          "package": "dph-lifted-vseg",
          "signature": "Alt2_2 b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt2_2",
          "package": "dph-lifted-vseg",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt2_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_1",
          "package": "dph-lifted-vseg",
          "signature": "Alt3_1 a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_1",
          "package": "dph-lifted-vseg",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_2",
          "package": "dph-lifted-vseg",
          "signature": "Alt3_2 b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_2",
          "package": "dph-lifted-vseg",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_3",
          "package": "dph-lifted-vseg",
          "signature": "Alt3_3 c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Alt3_3",
          "package": "dph-lifted-vseg",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Alt3_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "Wrap",
          "package": "dph-lifted-vseg",
          "signature": "Wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "Wrap",
          "package": "dph-lifted-vseg",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "appendPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendPR",
          "type": "method"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "appendPR",
          "normalized": "PData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appendPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Append two collections of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "appenddPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e PDatas a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appenddPR",
          "type": "method"
        },
        "index": {
          "description": "Append two collections of PData",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "appenddPR",
          "normalized": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003ePDatas a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appenddPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented append.\n\u003c/p\u003e\u003cp\u003eThe first descriptor defines the segmentation of the result, \n   and the others define the segmentation of each source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "appendvsPR",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e VSegd -\u003e PDatas a -\u003e VSegd -\u003e PDatas a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#appendvsPR",
          "type": "method"
        },
        "index": {
          "description": "Segmented append The first descriptor defines the segmentation of the result and the others define the segmentation of each source array",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "appendvsPR",
          "normalized": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Segd-\u003eVSegd-\u003ePDatas a-\u003eVSegd-\u003ePDatas a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:appendvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure",
          "package": "dph-lifted-vseg",
          "signature": "(e -\u003e a -\u003e b) -\u003e (Int# -\u003e PData e -\u003e PData a -\u003e PData b) -\u003e e -\u003e a :-\u003e b",
          "source": "src/Data-Array-Parallel-Prim.html#closure",
          "type": "function"
        },
        "index": {
          "description": "Construct closure",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(Int #-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ea-\u003eb-\u003ec",
          "package": "dph-lifted-vseg",
          "signature": "(e-\u003ea-\u003eb)-\u003e(Int #-\u003ePData e-\u003ePData a-\u003ePData b)-\u003ee-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure1",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.  (a -\u003e b) -\u003e (PArray a -\u003e PArray b) -\u003e a :-\u003e b",
          "source": "src/Data-Array-Parallel-Prim.html#closure1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure1",
          "normalized": "a b c(b-\u003ed)-\u003e(PArray b-\u003ePArray d)-\u003eb-\u003ed",
          "package": "dph-lifted-vseg",
          "signature": "forall a b.(a-\u003eb)-\u003e(PArray a-\u003ePArray b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure2",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e (PArray a -\u003e PArray b -\u003e PArray c) -\u003e a :-\u003e (b :-\u003e c)",
          "source": "src/Data-Array-Parallel-Prim.html#closure2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec)-\u003e(PArray a-\u003ePArray b-\u003ePArray c)-\u003ea-\u003e(b-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure3",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d) -\u003e a :-\u003e (b :-\u003e (c :-\u003e d))",
          "source": "src/Data-Array-Parallel-Prim.html#closure3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d)-\u003ea-\u003e(b-\u003e(c-\u003ed))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure4",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e e)))",
          "source": "src/Data-Array-Parallel-Prim.html#closure4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003ee)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure5",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e f))))",
          "source": "src/Data-Array-Parallel-Prim.html#closure5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003ef))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure6",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e g)))))",
          "source": "src/Data-Array-Parallel-Prim.html#closure6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003eg)))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure7",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e h))))))",
          "source": "src/Data-Array-Parallel-Prim.html#closure7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003eh))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "closure8",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e (PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i) -\u003e a :-\u003e (b :-\u003e (c :-\u003e (d :-\u003e (e :-\u003e (f :-\u003e (g :-\u003e (h :-\u003e i)))))))",
          "source": "src/Data-Array-Parallel-Prim.html#closure8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "closure8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003e(PArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i)-\u003ea-\u003e(b-\u003e(c-\u003e(d-\u003e(e-\u003e(f-\u003e(g-\u003e(h-\u003ei)))))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:closure8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PA_Double#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Double# -\u003e PArray_Double# -\u003e PArray_Double#",
          "source": "src/Data-Array-Parallel-Prim.html#combine2PA_Double%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PA_Double#",
          "normalized": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Double #-\u003ePArray_Double #-\u003ePArray_Double #",
          "package": "dph-lifted-vseg",
          "partial": "PA Double",
          "signature": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Double #-\u003ePArray_Double #-\u003ePArray_Double #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PA_Double-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PA_Int#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int# -\u003e PArray_Int#",
          "source": "src/Data-Array-Parallel-Prim.html#combine2PA_Int%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PA_Int#",
          "normalized": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #",
          "package": "dph-lifted-vseg",
          "partial": "PA Int",
          "signature": "Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #-\u003ePArray_Int #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PA_Int-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PD",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-Prim.html#combine2PD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PD",
          "normalized": "Int #-\u003eSel-\u003ePData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "Int #-\u003eSel-\u003ePData a-\u003ePData a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays based on a selector.\n\u003c/p\u003e\u003cp\u003eSee the documentation for selectors in the dph-prim-seq library\n   for how this works.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PR",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e PData a -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#combine2PR",
          "type": "method"
        },
        "index": {
          "description": "Combine two arrays based on selector See the documentation for selectors in the dph-prim-seq library for how this works",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "combine2PR",
          "normalized": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Sel-\u003ePData a-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:combine2PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Check that an index is within an array.\n\u003c/p\u003e\u003cp\u003eArrays containing \u003ccode\u003eVoid\u003c/code\u003e elements don't have a fixed length, and return \n   \u003ccode\u003eVoid\u003c/code\u003e for all indices. If the array does have a fixed length, and the \n   flag is true, then we allow the index to be equal to this length, as\n   well as less than it.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "coversPR",
          "package": "dph-lifted-vseg",
          "signature": "Bool -\u003e PData a -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#coversPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Check that an index is within an array Arrays containing Void elements don have fixed length and return Void for all indices If the array does have fixed length and the flag is true then we allow the index to be equal to this length as well as less than it",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "coversPR",
          "normalized": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Bool-\u003ePData a-\u003eInt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:coversPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "elementsSel2_0#",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e Int#",
          "source": "src/Data-Array-Parallel-Prim.html#elementsSel2_0%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "elementsSel2_0#",
          "normalized": "Sel-\u003eInt #",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "signature": "Sel-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:elementsSel2_0-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "elementsSel2_1#",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e Int#",
          "source": "src/Data-Array-Parallel-Prim.html#elementsSel2_1%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "elementsSel2_1#",
          "normalized": "Sel-\u003eInt #",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "signature": "Sel-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:elementsSel2_1-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPA_Double#",
          "package": "dph-lifted-vseg",
          "signature": "PArray_Double#",
          "source": "src/Data-Array-Parallel-Prim.html#emptyPA_Double%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPA_Double#",
          "package": "dph-lifted-vseg",
          "partial": "PA Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPA_Double-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPA_Int#",
          "package": "dph-lifted-vseg",
          "signature": "PArray_Int#",
          "source": "src/Data-Array-Parallel-Prim.html#emptyPA_Int%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPA_Int#",
          "package": "dph-lifted-vseg",
          "partial": "PA Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPA_Int-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPD",
          "package": "dph-lifted-vseg",
          "signature": "PData a",
          "source": "src/Data-Array-Parallel-Prim.html#emptyPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPD",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an empty array with size zero.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptyPR",
          "type": "method"
        },
        "index": {
          "description": "Produce an empty array with size zero",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptyPR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptyPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield an empty collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptydPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#emptydPR",
          "type": "method"
        },
        "index": {
          "description": "Yield an empty collection of PData",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "emptydPR",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:emptydPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(slice len). Extract a slice of elements from an array,\n  given the starting index and length of the slice.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractPR",
          "type": "method"
        },
        "index": {
          "description": "slice len Extract slice of elements from an array given the starting index and length of the slice",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractPR",
          "normalized": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt-\u003eInt-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n\u003c/p\u003e\u003cp\u003eThe Scattered Segment Descriptor (\u003ccode\u003eSSegd\u003c/code\u003e) describes where to get each \n  slice, and all slices are concatenated together into the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractssPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e SSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractssPR",
          "type": "method"
        },
        "index": {
          "description": "sum seglens Shared extract Extract several slices from several source arrays The Scattered Segment Descriptor SSegd describes where to get each slice and all slices are concatenated together into the result",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractssPR",
          "normalized": "PDatas a-\u003eSSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eSSegd-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractssPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum seglens). Shared extract.\n  Extract several slices from several source arrays.\n  TODO: we're refactoring the library so functions use the VSeg form directly,\n        instead of going via a SSegd.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractvsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#extractvsPR",
          "type": "method"
        },
        "index": {
          "description": "sum seglens Shared extract Extract several slices from several source arrays TODO we re refactoring the library so functions use the VSeg form directly instead of going via SSegd",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "extractvsPR",
          "normalized": "PDatas a-\u003eVSegd-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eVSegd-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:extractvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "fromArrPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PData (PRepr a) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromArrPRepr",
          "normalized": "PData(PRepr a)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Arr PRepr",
          "signature": "PData(PRepr a)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "fromArrPReprs",
          "package": "dph-lifted-vseg",
          "signature": "PDatas (PRepr a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromArrPReprs",
          "normalized": "PDatas(PRepr a)-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Arr PReprs",
          "signature": "PDatas(PRepr a)-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "fromPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PRepr a -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#fromPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromPRepr",
          "normalized": "PRepr a-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "signature": "PRepr a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "fromScalarPData",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromScalarPData",
          "normalized": "PData a-\u003eArray a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PData",
          "signature": "PData a-\u003eArray a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "fromScalarPDatas",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPDatas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromScalarPDatas",
          "normalized": "PDatas a-\u003eArrays a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PDatas",
          "signature": "PDatas a-\u003eArrays a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromScalarPDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boxed vector to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVectorPR",
          "package": "dph-lifted-vseg",
          "signature": "Vector a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectorPR",
          "type": "method"
        },
        "index": {
          "description": "Convert boxed vector to an array",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVectorPR",
          "normalized": "Vector a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PR",
          "signature": "Vector a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVectorPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVectordPR",
          "package": "dph-lifted-vseg",
          "signature": "Vector (PData a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#fromVectordPR",
          "type": "method"
        },
        "index": {
          "description": "Convert vector of PData to PDatas",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVectordPR",
          "normalized": "Vector(PData a)-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PR",
          "signature": "Vector(PData a)-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVectordPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e to a different type. Used as a placeholder like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n   Forcing the result yields \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVoid",
          "package": "dph-lifted-vseg",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "Coerce Void to different type Used as placeholder like undefined Forcing the result yields error",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "fromVoid",
          "package": "dph-lifted-vseg",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:fromVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a single element from a single array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexPR",
          "type": "method"
        },
        "index": {
          "description": "Retrieve single element from single array",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexPR",
          "normalized": "PData a-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Lookup a \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e from a collection.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexdPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexdPR",
          "type": "method"
        },
        "index": {
          "description": "Lookup PData from collection",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexdPR",
          "normalized": "PDatas a-\u003eInt-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eInt-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexdPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Shared indexing.\n   Retrieve several elements from several chunks of array data, \n   given the chunkid and index in that chunk for each element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexsPR",
          "type": "method"
        },
        "index": {
          "description": "Shared indexing Retrieve several elements from several chunks of array data given the chunkid and index in that chunk for each element",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexsPR",
          "normalized": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eArray(Int,Int)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Shared indexing\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexvsPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e VSegd -\u003e Array (Int, Int) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#indexvsPR",
          "type": "method"
        },
        "index": {
          "description": "Shared indexing",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "indexvsPR",
          "normalized": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eVSegd-\u003eArray(Int,Int)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:indexvsPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length of an array, if it has one.\n\u003c/p\u003e\u003cp\u003eApplying this function to an array of \u003ccode\u003eVoid\u003c/code\u003e will yield \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, as\n   these arrays have no fixed length. To check array bounds, use the\n   \u003ccode\u003e\u003ca\u003ecoversPR\u003c/a\u003e\u003c/code\u003e method instead, as that is a total function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthPR",
          "type": "method"
        },
        "index": {
          "description": "Get the length of an array if it has one Applying this function to an array of Void will yield error as these arrays have no fixed length To check array bounds use the coversPR method instead as that is total function",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthPR",
          "normalized": "PData a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthSels2#",
          "package": "dph-lifted-vseg",
          "signature": "Sels2 -\u003e Int#",
          "source": "src/Data-Array-Parallel-Prim.html#lengthSels2%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthSels2#",
          "normalized": "Sels-\u003eInt #",
          "package": "dph-lifted-vseg",
          "partial": "Sels",
          "signature": "Sels-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthSels2-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield how many \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e are in the collection.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthdPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#lengthdPR",
          "type": "method"
        },
        "index": {
          "description": "Yield how many PData are in the collection",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "lengthdPR",
          "normalized": "PDatas a-\u003eInt",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PDatas a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:lengthdPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a lifted closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "liftedApply",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e PData (a :-\u003e b) -\u003e PData a -\u003e PData b",
          "source": "src/Data-Array-Parallel-Prim.html#liftedApply",
          "type": "function"
        },
        "index": {
          "description": "Apply lifted closure",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "liftedApply",
          "normalized": "Int #-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
          "package": "dph-lifted-vseg",
          "partial": "Apply",
          "signature": "Int #-\u003ePData(a-\u003eb)-\u003ePData a-\u003ePData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:liftedApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a lifted closure.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "liftedClosure",
          "package": "dph-lifted-vseg",
          "signature": "(e -\u003e a -\u003e b) -\u003e (Int# -\u003e PData e -\u003e PData a -\u003e PData b) -\u003e PData e -\u003e PData (a :-\u003e b)",
          "source": "src/Data-Array-Parallel-Prim.html#liftedClosure",
          "type": "function"
        },
        "index": {
          "description": "Construct lifted closure",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "liftedClosure",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(Int #-\u003ePData a-\u003ePData b-\u003ePData c)-\u003ePData a-\u003ePData(b-\u003ec)",
          "package": "dph-lifted-vseg",
          "partial": "Closure",
          "signature": "(e-\u003ea-\u003eb)-\u003e(Int #-\u003ePData e-\u003ePData a-\u003ePData b)-\u003ePData e-\u003ePData(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:liftedClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Ensure an array is fully evaluted.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "nfPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#nfPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Ensure an array is fully evaluted",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "nfPR",
          "normalized": "PData a-\u003e()",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:nfPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPA_Double#",
          "package": "dph-lifted-vseg",
          "signature": "a",
          "source": "src/Data-Array-Parallel-Prim.html#packByTagPA_Double%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPA_Double#",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PA Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPA_Double-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPA_Int#",
          "package": "dph-lifted-vseg",
          "signature": "a",
          "source": "src/Data-Array-Parallel-Prim.html#packByTagPA_Int%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPA_Int#",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PA Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPA_Int-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPD",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Int# -\u003e Array Tag -\u003e Int# -\u003e PData a",
          "source": "src/Data-Array-Parallel-Prim.html#packByTagPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPD",
          "normalized": "PData a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PD",
          "signature": "PData a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect elements of an array that have their corresponding tag set to\n   the given value. \n\u003c/p\u003e\u003cp\u003eThe data array must define at least as many elements as the length\n   of the tags array. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Array Tag -\u003e Tag -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#packByTagPR",
          "type": "method"
        },
        "index": {
          "description": "Select elements of an array that have their corresponding tag set to the given value The data array must define at least as many elements as the length of the tags array",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "packByTagPR",
          "normalized": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "By Tag PR",
          "signature": "PData a-\u003eArray Tag-\u003eTag-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:packByTagPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "pickSel2#",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e Int# -\u003e Array Bool",
          "source": "src/Data-Array-Parallel-Prim.html#pickSel2%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "pickSel2#",
          "normalized": "Sel-\u003eInt #-\u003eArray Bool",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "signature": "Sel-\u003eInt #-\u003eArray Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pickSel2-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Pretty print the physical representation of some array data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "pprpDataPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpDataPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Pretty print the physical representation of some array data",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "pprpDataPR",
          "normalized": "PData a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "Data PR",
          "signature": "PData a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pprpDataPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Pretty print the physical representation of an element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "pprpPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e Doc",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#pprpPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Pretty print the physical representation of an element",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "pprpPR",
          "normalized": "a-\u003eDoc",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pprpPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "punit",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e PData ()",
          "source": "src/Data-Array-Parallel-PArray-PData-Unit.html#punit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "punit",
          "normalized": "Int-\u003ePData()",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003ePData()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:punit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "pvoid",
          "package": "dph-lifted-vseg",
          "signature": "PData Void",
          "source": "src/Data-Array-Parallel-PArray-PData-Void.html#pvoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "pvoid",
          "package": "dph-lifted-vseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pvoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "pvoids#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e PDatas Void",
          "source": "src/Data-Array-Parallel-Prim.html#pvoids%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "pvoids#",
          "normalized": "Int #-\u003ePDatas Void",
          "package": "dph-lifted-vseg",
          "signature": "Int #-\u003ePDatas Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:pvoids-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePA_Double#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e Double# -\u003e PArray_Double#",
          "source": "src/Data-Array-Parallel-Prim.html#replicatePA_Double%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePA_Double#",
          "normalized": "Int #-\u003eDouble #-\u003ePArray_Double #",
          "package": "dph-lifted-vseg",
          "partial": "PA Double",
          "signature": "Int #-\u003eDouble #-\u003ePArray_Double #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePA_Double-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePA_Int#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e Int# -\u003e PArray_Int#",
          "source": "src/Data-Array-Parallel-Prim.html#replicatePA_Int%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePA_Int#",
          "normalized": "Int #-\u003eInt #-\u003ePArray_Int #",
          "package": "dph-lifted-vseg",
          "partial": "PA Int",
          "signature": "Int #-\u003eInt #-\u003ePArray_Int #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePA_Int-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePD",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e a -\u003e PData a",
          "source": "src/Data-Array-Parallel-Prim.html#replicatePD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePD",
          "normalized": "Int #-\u003ea-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PD",
          "signature": "Int #-\u003ea-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Define an array of the given size, that maps all elements to the\n  same value.\n\u003c/p\u003e\u003cp\u003eWe require the replication count to be \u003e 0 so that it's easier to\n   maintain the \u003ccode\u003e\u003ca\u003evalidPR\u003c/a\u003e\u003c/code\u003e invariants for nested arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePR",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatePR",
          "type": "method"
        },
        "index": {
          "description": "Define an array of the given size that maps all elements to the same value We require the replication count to be so that it easier to maintain the validPR invariants for nested arrays",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatePR",
          "normalized": "Int-\u003ea-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Int-\u003ea-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatePR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "replicateSel2#",
          "package": "dph-lifted-vseg",
          "signature": "Int# -\u003e Int# -\u003e Sel2",
          "source": "src/Data-Array-Parallel-Prim.html#replicateSel2%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicateSel2#",
          "normalized": "Int #-\u003eInt #-\u003eSel",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "signature": "Int #-\u003eInt #-\u003eSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicateSel2-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(sum lengths). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eGiven a Segment Descriptor (Segd), replicate each each element in the\n   array according to the length of the corrsponding segment.\n   The array data must define at least as many elements as there are segments\n   in the descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatesPR",
          "package": "dph-lifted-vseg",
          "signature": "Segd -\u003e PData a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#replicatesPR",
          "type": "method"
        },
        "index": {
          "description": "sum lengths Segmented replicate Given Segment Descriptor Segd replicate each each element in the array according to the length of the corrsponding segment The array data must define at least as many elements as there are segments in the descriptor",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "replicatesPR",
          "normalized": "Segd-\u003ePData a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "Segd-\u003ePData a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:replicatesPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_map",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b) -\u003e PArray a -\u003e PArray b",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_map",
          "normalized": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e PArray a -\u003e PArray b -\u003e PArray c",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ePArray a-\u003ePArray b-\u003ePArray c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith3",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith4",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith5",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith6",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith7",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith8",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e PArray a -\u003e PArray b -\u003e PArray c -\u003e PArray d -\u003e PArray e -\u003e PArray f -\u003e PArray g -\u003e PArray h -\u003e PArray i",
          "source": "src/Data-Array-Parallel-Prim.html#scalar_zipWith8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "scalar_zipWith8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003ePArray a-\u003ePArray b-\u003ePArray c-\u003ePArray d-\u003ePArray e-\u003ePArray f-\u003ePArray g-\u003ePArray h-\u003ePArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:scalar_zipWith8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Weak equality of contained elements.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for functions of the same type. In the case of nested arrays,\n   returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the array defines the same set of elements, but does not\n   care about the exact form of the segement descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "similarPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#similarPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Weak equality of contained elements Returns True for functions of the same type In the case of nested arrays returns True if the array defines the same set of elements but does not care about the exact form of the segement descriptors",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "similarPR",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:similarPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield a singleton collection of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "singletondPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#singletondPR",
          "type": "method"
        },
        "index": {
          "description": "Yield singleton collection of PData",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "singletondPR",
          "normalized": "PData a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:singletondPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "tagsSel2",
          "package": "dph-lifted-vseg",
          "signature": "Sel2 -\u003e Array Tag",
          "source": "src/Data-Array-Parallel-Prim.html#tagsSel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "tagsSel2",
          "normalized": "Sel-\u003eArray Tag",
          "package": "dph-lifted-vseg",
          "partial": "Sel",
          "signature": "Sel-\u003eArray Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:tagsSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "toArrPRepr",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e PData (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toArrPRepr",
          "normalized": "PData a-\u003ePData(PRepr a)",
          "package": "dph-lifted-vseg",
          "partial": "Arr PRepr",
          "signature": "PData a-\u003ePData(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "toArrPReprs",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e PDatas (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toArrPReprs",
          "normalized": "PDatas a-\u003ePDatas(PRepr a)",
          "package": "dph-lifted-vseg",
          "partial": "Arr PReprs",
          "signature": "PDatas a-\u003ePDatas(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "toPRepr",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e PRepr a",
          "source": "src/Data-Array-Parallel-PArray-PRepr-Base.html#toPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toPRepr",
          "normalized": "a-\u003ePRepr a",
          "package": "dph-lifted-vseg",
          "partial": "PRepr",
          "signature": "a-\u003ePRepr a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "toScalarPData",
          "package": "dph-lifted-vseg",
          "signature": "Array a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toScalarPData",
          "normalized": "Array a-\u003ePData a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PData",
          "signature": "Array a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "toScalarPDatas",
          "package": "dph-lifted-vseg",
          "signature": "Arrays a -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPDatas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toScalarPDatas",
          "normalized": "Arrays a-\u003ePDatas a",
          "package": "dph-lifted-vseg",
          "partial": "Scalar PDatas",
          "signature": "Arrays a-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toScalarPDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a boxed vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "toVectorPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectorPR",
          "type": "method"
        },
        "index": {
          "description": "Convert an array to boxed vector",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toVectorPR",
          "normalized": "PData a-\u003eVector a",
          "package": "dph-lifted-vseg",
          "partial": "Vector PR",
          "signature": "PData a-\u003eVector a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toVectorPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a \u003ccode\u003e\u003ca\u003ePDatas\u003c/a\u003e\u003c/code\u003e to a vector of \u003ccode\u003e\u003ca\u003ePData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "toVectordPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e Vector (PData a)",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#toVectordPR",
          "type": "method"
        },
        "index": {
          "description": "Convert PDatas to vector of PData",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "toVectordPR",
          "normalized": "PDatas a-\u003eVector(PData a)",
          "package": "dph-lifted-vseg",
          "partial": "Vectord PR",
          "signature": "PDatas a-\u003eVector(PData a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:toVectordPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Given a 'PData a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepDataPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDataPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Given PData get the representation of the",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepDataPR",
          "normalized": "PData a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Data PR",
          "signature": "PData a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepDataPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Given a 'PDatas a' get the representation of the \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepDatasPR",
          "package": "dph-lifted-vseg",
          "signature": "PDatas a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepDatasPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Given PDatas get the representation of the",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepDatasPR",
          "normalized": "PDatas a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep Datas PR",
          "signature": "PDatas a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepDatasPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Get the representation of this type.\n   We don't use the Typeable class for this because the vectoriser\n   won't handle the Typeable superclass on PR.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepPR",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e TypeRep",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#typeRepPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Get the representation of this type We don use the Typeable class for this because the vectoriser won handle the Typeable superclass on PR",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "typeRepPR",
          "normalized": "a-\u003eTypeRep",
          "package": "dph-lifted-vseg",
          "partial": "Rep PR",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:typeRepPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prim",
          "name": "unWrap",
          "package": "dph-lifted-vseg",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "unWrap",
          "package": "dph-lifted-vseg",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:unWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(debugging) Check that an array has a well formed representation.\n   This should only return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e where there is a bug in the library.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "validPR",
          "package": "dph-lifted-vseg",
          "signature": "PData a -\u003e Bool",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#validPR",
          "type": "method"
        },
        "index": {
          "description": "debugging Check that an array has well formed representation This should only return False where there is bug in the library",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "validPR",
          "normalized": "PData a-\u003eBool",
          "package": "dph-lifted-vseg",
          "partial": "PR",
          "signature": "PData a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:validPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003evalue\u003c/code\u003e with the void type. Used as a placholder like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n   Forcing this yields \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prim",
          "name": "void",
          "package": "dph-lifted-vseg",
          "signature": "Void",
          "type": "function"
        },
        "index": {
          "description": "value with the void type Used as placholder like undefined Forcing this yields error",
          "hierarchy": "Data Array Parallel Prim",
          "module": "Data.Array.Parallel.Prim",
          "name": "void",
          "package": "dph-lifted-vseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Prim.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Trace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "Op",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "Op",
          "package": "dph-lifted-vseg",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-Trace.html#Trace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "partial": "Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpAppend",
          "package": "dph-lifted-vseg",
          "signature": "OpAppend",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpAppend",
          "package": "dph-lifted-vseg",
          "partial": "Op Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpAppendL",
          "package": "dph-lifted-vseg",
          "signature": "OpAppendL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpAppendL",
          "package": "dph-lifted-vseg",
          "partial": "Op Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpAppendL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpCombine2",
          "package": "dph-lifted-vseg",
          "signature": "OpCombine2",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpCombine2",
          "package": "dph-lifted-vseg",
          "partial": "Op Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpCombine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpConcat",
          "package": "dph-lifted-vseg",
          "signature": "OpConcat",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpConcat",
          "package": "dph-lifted-vseg",
          "partial": "Op Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpConcatL",
          "package": "dph-lifted-vseg",
          "signature": "OpConcatL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpConcatL",
          "package": "dph-lifted-vseg",
          "partial": "Op Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpConcatL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpExtract",
          "package": "dph-lifted-vseg",
          "signature": "OpExtract",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpExtract",
          "package": "dph-lifted-vseg",
          "partial": "Op Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpExtractS",
          "package": "dph-lifted-vseg",
          "signature": "OpExtractS",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpExtractS",
          "package": "dph-lifted-vseg",
          "partial": "Op Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpExtractS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpIndex",
          "package": "dph-lifted-vseg",
          "signature": "OpIndex",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpIndex",
          "package": "dph-lifted-vseg",
          "partial": "Op Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpIndexL",
          "package": "dph-lifted-vseg",
          "signature": "OpIndexL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpIndexL",
          "package": "dph-lifted-vseg",
          "partial": "Op Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpIndexL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpLength",
          "package": "dph-lifted-vseg",
          "signature": "OpLength",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpLength",
          "package": "dph-lifted-vseg",
          "partial": "Op Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpLengthL",
          "package": "dph-lifted-vseg",
          "signature": "OpLengthL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpLengthL",
          "package": "dph-lifted-vseg",
          "partial": "Op Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpLengthL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPack",
          "package": "dph-lifted-vseg",
          "signature": "OpPack",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPack",
          "package": "dph-lifted-vseg",
          "partial": "Op Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPackByTag",
          "package": "dph-lifted-vseg",
          "signature": "OpPackByTag",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPackByTag",
          "package": "dph-lifted-vseg",
          "partial": "Op Pack By Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPackByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPackL",
          "package": "dph-lifted-vseg",
          "signature": "OpPackL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpPackL",
          "package": "dph-lifted-vseg",
          "partial": "Op Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpPackL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicate",
          "package": "dph-lifted-vseg",
          "signature": "OpReplicate",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicate",
          "package": "dph-lifted-vseg",
          "partial": "Op Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicateL",
          "package": "dph-lifted-vseg",
          "signature": "OpReplicateL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicateL",
          "package": "dph-lifted-vseg",
          "partial": "Op Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicateL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicateS",
          "package": "dph-lifted-vseg",
          "signature": "OpReplicateS",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpReplicateS",
          "package": "dph-lifted-vseg",
          "partial": "Op Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpReplicateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSingleton",
          "package": "dph-lifted-vseg",
          "signature": "OpSingleton",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSingleton",
          "package": "dph-lifted-vseg",
          "partial": "Op Singleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSingletonL",
          "package": "dph-lifted-vseg",
          "signature": "OpSingletonL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSingletonL",
          "package": "dph-lifted-vseg",
          "partial": "Op Singleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSingletonL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSlice",
          "package": "dph-lifted-vseg",
          "signature": "OpSlice",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSlice",
          "package": "dph-lifted-vseg",
          "partial": "Op Slice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSliceL",
          "package": "dph-lifted-vseg",
          "signature": "OpSliceL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpSliceL",
          "package": "dph-lifted-vseg",
          "partial": "Op Slice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpSliceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnconcat",
          "package": "dph-lifted-vseg",
          "signature": "OpUnconcat",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnconcat",
          "package": "dph-lifted-vseg",
          "partial": "Op Unconcat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnzip",
          "package": "dph-lifted-vseg",
          "signature": "OpUnzip",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnzip",
          "package": "dph-lifted-vseg",
          "partial": "Op Unzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnzipL",
          "package": "dph-lifted-vseg",
          "signature": "OpUnzipL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpUnzipL",
          "package": "dph-lifted-vseg",
          "partial": "Op Unzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpUnzipL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpZip",
          "package": "dph-lifted-vseg",
          "signature": "OpZip",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpZip",
          "package": "dph-lifted-vseg",
          "partial": "Op Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "OpZipL",
          "package": "dph-lifted-vseg",
          "signature": "OpZipL",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "OpZipL",
          "package": "dph-lifted-vseg",
          "partial": "Op Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:OpZipL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "signature": "Trace Op",
          "source": "src/Data-Array-Parallel-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "Trace",
          "package": "dph-lifted-vseg",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceContext",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceContext",
          "package": "dph-lifted-vseg",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceCount",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceCount",
          "package": "dph-lifted-vseg",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceDstLength",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceDstLength",
          "package": "dph-lifted-vseg",
          "partial": "Dst Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceDstLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceElemType",
          "package": "dph-lifted-vseg",
          "signature": "TypeRep",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceElemType",
          "package": "dph-lifted-vseg",
          "partial": "Elem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceElemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceLength",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceLength",
          "package": "dph-lifted-vseg",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceOp",
          "package": "dph-lifted-vseg",
          "signature": "Op -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Trace.html#traceOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceOp",
          "normalized": "Op-\u003ea-\u003ea",
          "package": "dph-lifted-vseg",
          "partial": "Op",
          "signature": "Op-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrc1Length",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrc1Length",
          "package": "dph-lifted-vseg",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrc1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrc2Length",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrc2Length",
          "package": "dph-lifted-vseg",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrc2Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrcLength",
          "package": "dph-lifted-vseg",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Trace.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Trace",
          "module": "Data.Array.Parallel.Trace",
          "name": "traceSrcLength",
          "package": "dph-lifted-vseg",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel-Trace.html#v:traceSrcLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUser level interface to vectorised parallel arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e In the current implementation, the functionality provided in\n  this module is tied to the vectoriser pass of GHC, invoked by `-fvectorise`.\n  These functions will not work at all in unvectorised code. To operate on\n  parallel arrays in unvectorised code, use the functions in\n  \u003ca\u003eData.Array.Parallel.PArray\u003c/a\u003e and convert between array representations by\n  using \u003ccode\u003e\u003ca\u003efromPArrayP\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoPArrayP\u003c/a\u003e\u003c/code\u003e from \u003cem\u003evectorised\u003c/em\u003e code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel",
          "name": "Parallel",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "User level interface to vectorised parallel arrays WARNING In the current implementation the functionality provided in this module is tied to the vectoriser pass of GHC invoked by fvectorise These functions will not work at all in unvectorised code To operate on parallel arrays in unvectorised code use the functions in Data.Array.Parallel.PArray and convert between array representations by using fromPArrayP and toPArrayP from vectorised code",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "Parallel",
          "package": "dph-lifted-vseg",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallel array consisting of a length field and some array data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "source": "src/Data-Array-Parallel-PArray-PData-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "parallel array consisting of length field and some array data",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "PArray",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a single element from the source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "(!:)",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "Lookup single element from the source array",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "(!:) !:",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "(+:+)",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "(+:+) +:+",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "appendP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#appendP",
          "type": "function"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "appendP",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:appendP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate an array of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "concatP",
          "package": "dph-lifted-vseg",
          "signature": "[:[:a:]:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#concatP",
          "type": "function"
        },
        "index": {
          "description": "Concatenate an array of arrays",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "concatP",
          "normalized": "[[a]]-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:concatP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every element \u003ccode\u003ea\u003c/code\u003e apply the function to get an array of \u003ccode\u003eb\u003c/code\u003e then,\n   and return an array of all the \u003ccode\u003ea\u003c/code\u003es and \u003ccode\u003eb\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "crossMapP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e (a -\u003e [:b:]) -\u003e [:(a, b):]",
          "source": "src/Data-Array-Parallel.html#crossMapP",
          "type": "function"
        },
        "index": {
          "description": "For every element apply the function to get an array of then and return an array of all the and",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "crossMapP",
          "normalized": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
          "package": "dph-lifted-vseg",
          "partial": "Map",
          "signature": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:crossMapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an empty array, with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "emptyP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:]",
          "source": "src/Data-Array-Parallel.html#emptyP",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty array with no elements",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "emptyP",
          "normalized": "[a]",
          "package": "dph-lifted-vseg",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:emptyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter an array, keeping only those elements that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "filterP",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e Bool) -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#filterP",
          "type": "function"
        },
        "index": {
          "description": "Filter an array keeping only those elements that match the given predicate",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "filterP",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:filterP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "fromNestedPArrayP",
          "package": "dph-lifted-vseg",
          "signature": "PArray (PArray a) -\u003e [:[:a:]:]",
          "source": "src/Data-Array-Parallel.html#fromNestedPArrayP",
          "type": "function"
        },
        "index": {
          "description": "Convert between PArray and array representations",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "fromNestedPArrayP",
          "normalized": "PArray(PArray a)-\u003e[[a]]",
          "package": "dph-lifted-vseg",
          "partial": "Nested PArray",
          "signature": "PArray(PArray a)-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:fromNestedPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "fromPArrayP",
          "package": "dph-lifted-vseg",
          "signature": "PArray a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#fromPArrayP",
          "type": "function"
        },
        "index": {
          "description": "Convert between PArray and array representations",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "fromPArrayP",
          "normalized": "PArray a-\u003e[a]",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "signature": "PArray a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:fromPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a single element from the source array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "indexP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel.html#indexP",
          "type": "function"
        },
        "index": {
          "description": "Lookup single element from the source array",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "indexP",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:indexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "lengthP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e Int",
          "source": "src/Data-Array-Parallel.html#lengthP",
          "type": "function"
        },
        "index": {
          "description": "Take the length of an array",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "lengthP",
          "normalized": "[a]-\u003eInt",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:lengthP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to every element of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "mapP",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b) -\u003e [:a:] -\u003e [:b:]",
          "source": "src/Data-Array-Parallel.html#mapP",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to every element of an array",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "mapP",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "dph-lifted-vseg",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:mapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array by replicating the given element some number of times.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "replicateP",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#replicateP",
          "type": "function"
        },
        "index": {
          "description": "Construct an array by replicating the given element some number of times",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "replicateP",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:replicateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array with a single element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "singletonP",
          "package": "dph-lifted-vseg",
          "signature": "a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#singletonP",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with single element",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "singletonP",
          "normalized": "a-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:singletonP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a slice from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "sliceP",
          "package": "dph-lifted-vseg",
          "signature": "Int -\u003e Int -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#sliceP",
          "type": "function"
        },
        "index": {
          "description": "Extract slice from an array",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "sliceP",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-vseg",
          "signature": "Int-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:sliceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Convert between \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e and [::] array representations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "toPArrayP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e PArray a",
          "source": "src/Data-Array-Parallel.html#toPArrayP",
          "type": "function"
        },
        "index": {
          "description": "Convert between PArray and array representations",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "toPArrayP",
          "normalized": "[a]-\u003ePArray a",
          "package": "dph-lifted-vseg",
          "partial": "PArray",
          "signature": "[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:toPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "unzipP",
          "package": "dph-lifted-vseg",
          "signature": "[:(a, b):] -\u003e ([:a:], [:b:])",
          "source": "src/Data-Array-Parallel.html#unzipP",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "unzipP",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "dph-lifted-vseg",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:unzipP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a pair of arrays into an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "zipP",
          "package": "dph-lifted-vseg",
          "signature": "[:a:] -\u003e [:b:] -\u003e [:(a, b):]",
          "source": "src/Data-Array-Parallel.html#zipP",
          "type": "function"
        },
        "index": {
          "description": "Zip pair of arrays into an array of pairs",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zipP",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "dph-lifted-vseg",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:zipP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to every pair of two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "zipWithP",
          "package": "dph-lifted-vseg",
          "signature": "(a -\u003e b -\u003e c) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:]",
          "source": "src/Data-Array-Parallel.html#zipWithP",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to every pair of two arrays",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zipWithP",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "dph-lifted-vseg",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-vseg/docs/Data-Array-Parallel.html#v:zipWithP"
      }
    }
  ]
]