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
        "word": "dph-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric array class.\n   This is used as a compatability layer during testing and debugging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "Array",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Generic array class This is used as compatability layer during testing and debugging",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "Array",
          "package": "dph-base",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Array",
          "name": "Array",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Array.html#Array",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "Array",
          "package": "dph-base",
          "partial": "Array",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "append",
          "package": "dph-base",
          "signature": "a e -\u003e a e -\u003e a e",
          "source": "src/Data-Array-Parallel-Array.html#append",
          "type": "method"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "append",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "dph-base",
          "signature": "a e-\u003ea e-\u003ea e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "fromList",
          "package": "dph-base",
          "signature": "[e] -\u003e a e",
          "source": "src/Data-Array-Parallel-Array.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to an array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "fromList",
          "normalized": "[a]-\u003eb a",
          "package": "dph-base",
          "partial": "List",
          "signature": "[e]-\u003ea e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a vector to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVector",
          "package": "dph-base",
          "signature": "Vector e -\u003e a e",
          "source": "src/Data-Array-Parallel-Array.html#fromVector",
          "type": "method"
        },
        "index": {
          "description": "Convert vector to an array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVector",
          "normalized": "Vector a-\u003eb a",
          "package": "dph-base",
          "partial": "Vector",
          "signature": "Vector e-\u003ea e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert some vectors to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors1",
          "package": "dph-base",
          "signature": "Vector e -\u003e a e",
          "source": "src/Data-Array-Parallel-Array.html#fromVectors1",
          "type": "function"
        },
        "index": {
          "description": "Convert some vectors to an array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors1",
          "normalized": "Vector a-\u003eb a",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "Vector e-\u003ea e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:fromVectors1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert some vectors to a nested array\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors2",
          "package": "dph-base",
          "signature": "Vector (Vector e) -\u003e a1 (a2 e)",
          "source": "src/Data-Array-Parallel-Array.html#fromVectors2",
          "type": "function"
        },
        "index": {
          "description": "Convert some vectors to nested array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors2",
          "normalized": "Vector(Vector a)-\u003eb(b a)",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "Vector(Vector e)-\u003ea(a e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:fromVectors2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert some vectors to a triply nested array\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors3",
          "package": "dph-base",
          "signature": "Vector (Vector (Vector e)) -\u003e a1 (a2 (a3 e))",
          "source": "src/Data-Array-Parallel-Array.html#fromVectors3",
          "type": "function"
        },
        "index": {
          "description": "Convert some vectors to triply nested array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "fromVectors3",
          "normalized": "Vector(Vector(Vector a))-\u003eb(b(b a))",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "Vector(Vector(Vector e))-\u003ea(a(a e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:fromVectors3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the element at the given index. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "index",
          "package": "dph-base",
          "signature": "a e -\u003e Int -\u003e e",
          "source": "src/Data-Array-Parallel-Array.html#index",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the element at the given index",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "index",
          "normalized": "a b-\u003eInt-\u003eb",
          "package": "dph-base",
          "signature": "a e-\u003eInt-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the length of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "length",
          "package": "dph-base",
          "signature": "a e -\u003e Int",
          "source": "src/Data-Array-Parallel-Array.html#length",
          "type": "method"
        },
        "index": {
          "description": "Yield the length of an array",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "length",
          "normalized": "a b-\u003eInt",
          "package": "dph-base",
          "signature": "a e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield an array with just a single element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "singleton",
          "package": "dph-base",
          "signature": "e -\u003e a e",
          "source": "src/Data-Array-Parallel-Array.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Yield an array with just single element",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "singleton",
          "normalized": "a-\u003eb a",
          "package": "dph-base",
          "signature": "e-\u003ea e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a list.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "toList",
          "package": "dph-base",
          "signature": "a e -\u003e [e]",
          "source": "src/Data-Array-Parallel-Array.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert an array to list",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "dph-base",
          "partial": "List",
          "signature": "a e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "toVector",
          "package": "dph-base",
          "signature": "a e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Array.html#toVector",
          "type": "method"
        },
        "index": {
          "description": "Convert an array to vector",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "toVector",
          "normalized": "a b-\u003eVector b",
          "package": "dph-base",
          "partial": "Vector",
          "signature": "a e-\u003eVector e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the outer level of an array to vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors1",
          "package": "dph-base",
          "signature": "a e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Array.html#toVectors1",
          "type": "function"
        },
        "index": {
          "description": "Convert the outer level of an array to vectors",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors1",
          "normalized": "a b-\u003eVector b",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "a e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:toVectors1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the outer two levels of an array to vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors2",
          "package": "dph-base",
          "signature": "a1 (a2 e) -\u003e Vector (Vector e)",
          "source": "src/Data-Array-Parallel-Array.html#toVectors2",
          "type": "function"
        },
        "index": {
          "description": "Convert the outer two levels of an array to vectors",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors2",
          "normalized": "a(a b)-\u003eVector(Vector b)",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "a(a e)-\u003eVector(Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:toVectors2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the outer three levels of an array to vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors3",
          "package": "dph-base",
          "signature": "a1 (a2 (a3 e)) -\u003e Vector (Vector (Vector e))",
          "source": "src/Data-Array-Parallel-Array.html#toVectors3",
          "type": "function"
        },
        "index": {
          "description": "Convert the outer three levels of an array to vectors",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "toVectors3",
          "normalized": "a(a(a b))-\u003eVector(Vector(Vector b))",
          "package": "dph-base",
          "partial": "Vectors",
          "signature": "a(a(a e))-\u003eVector(Vector(Vector e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:toVectors3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an array has a valid internal representation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Array",
          "name": "valid",
          "package": "dph-base",
          "signature": "a e -\u003e Bool",
          "source": "src/Data-Array-Parallel-Array.html#valid",
          "type": "method"
        },
        "index": {
          "description": "Check whether an array has valid internal representation",
          "hierarchy": "Data Array Parallel Array",
          "module": "Data.Array.Parallel.Array",
          "name": "valid",
          "normalized": "a b-\u003eBool",
          "package": "dph-base",
          "signature": "a e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Array.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHarness for DTrace.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "DTrace",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base-DTrace.html",
          "type": "module"
        },
        "index": {
          "description": "Harness for DTrace",
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "DTrace",
          "package": "dph-base",
          "partial": "DTrace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceArg",
          "package": "dph-base",
          "signature": "String -\u003e a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceArg",
          "normalized": "String-\u003ea-\u003eb-\u003eb",
          "package": "dph-base",
          "partial": "Arg",
          "signature": "String-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceF",
          "package": "dph-base",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceF",
          "normalized": "String-\u003ea-\u003ea",
          "package": "dph-base",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceFn",
          "package": "dph-base",
          "signature": "String -\u003e String -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceFn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceFn",
          "normalized": "String-\u003eString-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Fn",
          "signature": "String-\u003eString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntry",
          "package": "dph-base",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntry",
          "normalized": "String-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Loop Entry",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntryIO",
          "package": "dph-base",
          "signature": "String -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopEntryIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntryIO",
          "normalized": "String-\u003eIO()",
          "package": "dph-base",
          "partial": "Loop Entry IO",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopEntryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntryST",
          "package": "dph-base",
          "signature": "String -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopEntryST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopEntryST",
          "normalized": "String-\u003eST a()",
          "package": "dph-base",
          "partial": "Loop Entry ST",
          "signature": "String-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopEntryST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExit",
          "package": "dph-base",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExit",
          "normalized": "String-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Loop Exit",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExitIO",
          "package": "dph-base",
          "signature": "String -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopExitIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExitIO",
          "normalized": "String-\u003eIO()",
          "package": "dph-base",
          "partial": "Loop Exit IO",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopExitIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExitST",
          "package": "dph-base",
          "signature": "String -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopExitST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopExitST",
          "normalized": "String-\u003eST a()",
          "package": "dph-base",
          "partial": "Loop Exit ST",
          "signature": "String-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopExitST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopIO",
          "package": "dph-base",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopIO",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "dph-base",
          "partial": "Loop IO",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopST",
          "package": "dph-base",
          "signature": "String -\u003e ST s a -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Base-DTrace.html#traceLoopST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base DTrace",
          "module": "Data.Array.Parallel.Base.DTrace",
          "name": "traceLoopST",
          "normalized": "String-\u003eST a b-\u003eST a b",
          "package": "dph-base",
          "partial": "Loop ST",
          "signature": "String-\u003eST s a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-DTrace.html#v:traceLoopST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for defining Read/Show instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "Text",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for defining Read Show instances",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "Text",
          "package": "dph-base",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "Read",
          "package": "dph-base",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "Read",
          "package": "dph-base",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readApp",
          "package": "dph-base",
          "signature": "String -\u003e ReadPrec a",
          "source": "src/Data-Array-Parallel-Base-Text.html#readApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readApp",
          "normalized": "String-\u003eReadPrec a",
          "package": "dph-base",
          "partial": "App",
          "signature": "String-\u003eReadPrec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readList",
          "package": "dph-base",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "dph-base",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProposed replacement for \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e using new-style parsers (GHC only).\n The default definition uses \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e.  Instances that define \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e\n should also define \u003ccode\u003e\u003ca\u003ereadListPrec\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003ereadListPrecDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readListPrec",
          "package": "dph-base",
          "signature": "ReadPrec [a]",
          "type": "method"
        },
        "index": {
          "description": "Proposed replacement for readList using new-style parsers GHC only The default definition uses readList Instances that define readPrec should also define readListPrec as readListPrecDefault",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readListPrec",
          "normalized": "ReadPrec[a]",
          "package": "dph-base",
          "partial": "List Prec",
          "signature": "ReadPrec[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readListPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProposed replacement for \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e using new-style parsers (GHC only).\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readPrec",
          "package": "dph-base",
          "signature": "ReadPrec a",
          "type": "method"
        },
        "index": {
          "description": "Proposed replacement for readsPrec using new-style parsers GHC only",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readPrec",
          "package": "dph-base",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readsApp",
          "package": "dph-base",
          "signature": "Int -\u003e String -\u003e ReadS a",
          "source": "src/Data-Array-Parallel-Base-Text.html#readsApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readsApp",
          "normalized": "Int-\u003eString-\u003eReadS a",
          "package": "dph-base",
          "partial": "App",
          "signature": "Int-\u003eString-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readsApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readsPrec",
          "package": "dph-base",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "readsPrec",
          "package": "dph-base",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.Text",
          "name": "showsApp",
          "package": "dph-base",
          "signature": "Int -\u003e String -\u003e a -\u003e ShowS",
          "source": "src/Data-Array-Parallel-Base-Text.html#showsApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base Text",
          "module": "Data.Array.Parallel.Base.Text",
          "name": "showsApp",
          "normalized": "Int-\u003eString-\u003ea-\u003eShowS",
          "package": "dph-base",
          "partial": "App",
          "signature": "Int-\u003eString-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-Text.html#v:showsApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen \u003ccode\u003e\u003ca\u003etracePrimEnabled\u003c/a\u003e\u003c/code\u003e, DPH programs will print out what flat array\n   primitives they're using at runtime. See \u003ccode\u003e\u003ca\u003etracePrim\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePrim",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html",
          "type": "module"
        },
        "index": {
          "description": "When tracePrimEnabled DPH programs will print out what flat array primitives they re using at runtime See tracePrim for details",
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePrim",
          "package": "dph-base",
          "partial": "Trace Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords information about the use of a flat array primitive.\n\u003c/p\u003e\u003cp\u003eThese are the operator names that the vectoriser introduces.\n\u003c/p\u003e\u003cp\u003eThe actual implementation of each operator varies depending on what\n    DPH primitive library is being used.\n\u003c/p\u003e\u003cp\u003eWe only trace operators that are at least O(n) in complexity. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePrim",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "data"
        },
        "index": {
          "description": "Records information about the use of flat array primitive These are the operator names that the vectoriser introduces The actual implementation of each operator varies depending on what DPH primitive library is being used We only trace operators that are at least in complexity",
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePrim",
          "package": "dph-base",
          "partial": "Trace Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#t:TracePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAnd",
          "package": "dph-base",
          "signature": "TraceAnd",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAnd",
          "package": "dph-base",
          "partial": "Trace And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend",
          "package": "dph-base",
          "signature": "TraceAppend",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend",
          "package": "dph-base",
          "partial": "Trace Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend_s",
          "package": "dph-base",
          "signature": "TraceAppend_s",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend_s",
          "package": "dph-base",
          "partial": "Trace Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceAppend_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend_vs",
          "package": "dph-base",
          "signature": "TraceAppend_vs",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceAppend_vs",
          "package": "dph-base",
          "partial": "Trace Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceAppend_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceBPermute",
          "package": "dph-base",
          "signature": "TraceBPermute",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceBPermute",
          "package": "dph-base",
          "partial": "Trace BPermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceBPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceBPermuteDft",
          "package": "dph-base",
          "signature": "TraceBPermuteDft",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceBPermuteDft",
          "package": "dph-base",
          "partial": "Trace BPermute Dft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceBPermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceCombine",
          "package": "dph-base",
          "signature": "TraceCombine",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceCombine",
          "package": "dph-base",
          "partial": "Trace Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceCombine2",
          "package": "dph-base",
          "signature": "TraceCombine2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceCombine2",
          "package": "dph-base",
          "partial": "Trace Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceCombine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceDrop",
          "package": "dph-base",
          "signature": "TraceDrop",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceDrop",
          "package": "dph-base",
          "partial": "Trace Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSel2_0",
          "package": "dph-base",
          "signature": "TraceElementsSel2_0",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSel2_0",
          "package": "dph-base",
          "partial": "Trace Elements Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceElementsSel2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSel2_1",
          "package": "dph-base",
          "signature": "TraceElementsSel2_1",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSel2_1",
          "package": "dph-base",
          "partial": "Trace Elements Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceElementsSel2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSelRep2_0",
          "package": "dph-base",
          "signature": "TraceElementsSelRep2_0",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSelRep2_0",
          "package": "dph-base",
          "partial": "Trace Elements Sel Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceElementsSelRep2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSelRep2_1",
          "package": "dph-base",
          "signature": "TraceElementsSelRep2_1",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceElementsSelRep2_1",
          "package": "dph-base",
          "partial": "Trace Elements Sel Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceElementsSelRep2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromStepLen",
          "package": "dph-base",
          "signature": "TraceEnumFromStepLen",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromStepLen",
          "package": "dph-base",
          "partial": "Trace Enum From Step Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceEnumFromStepLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromStepLenEach",
          "package": "dph-base",
          "signature": "TraceEnumFromStepLenEach",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromStepLenEach",
          "package": "dph-base",
          "partial": "Trace Enum From Step Len Each",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceEnumFromStepLenEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromThenTo",
          "package": "dph-base",
          "signature": "TraceEnumFromThenTo",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromThenTo",
          "package": "dph-base",
          "partial": "Trace Enum From Then To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceEnumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromTo",
          "package": "dph-base",
          "signature": "TraceEnumFromTo",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceEnumFromTo",
          "package": "dph-base",
          "partial": "Trace Enum From To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceEnumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceExtract",
          "package": "dph-base",
          "signature": "TraceExtract",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceExtract",
          "package": "dph-base",
          "partial": "Trace Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFilter",
          "package": "dph-base",
          "signature": "TraceFilter",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFilter",
          "package": "dph-base",
          "partial": "Trace Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold",
          "package": "dph-base",
          "signature": "TraceFold",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold",
          "package": "dph-base",
          "partial": "Trace Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold1",
          "package": "dph-base",
          "signature": "TraceFold1",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold1",
          "package": "dph-base",
          "partial": "Trace Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold1_s",
          "package": "dph-base",
          "signature": "TraceFold1_s",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold1_s",
          "package": "dph-base",
          "partial": "Trace Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFold1_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold_r",
          "package": "dph-base",
          "signature": "TraceFold_r",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold_r",
          "package": "dph-base",
          "partial": "Trace Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFold_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold_s",
          "package": "dph-base",
          "signature": "TraceFold_s",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceFold_s",
          "package": "dph-base",
          "partial": "Trace Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceFold_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndex",
          "package": "dph-base",
          "signature": "TraceIndex",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndex",
          "package": "dph-base",
          "partial": "Trace Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndexed",
          "package": "dph-base",
          "signature": "TraceIndexed",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndexed",
          "package": "dph-base",
          "partial": "Trace Indexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndicesSel2",
          "package": "dph-base",
          "signature": "TraceIndicesSel2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndicesSel2",
          "package": "dph-base",
          "partial": "Trace Indices Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceIndicesSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndicesSelRep2",
          "package": "dph-base",
          "signature": "TraceIndicesSelRep2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndicesSelRep2",
          "package": "dph-base",
          "partial": "Trace Indices Sel Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceIndicesSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndices_s",
          "package": "dph-base",
          "signature": "TraceIndices_s",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceIndices_s",
          "package": "dph-base",
          "partial": "Trace Indices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceIndices_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceInterleave",
          "package": "dph-base",
          "signature": "TraceInterleave",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceInterleave",
          "package": "dph-base",
          "partial": "Trace Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceInterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMBPermute",
          "package": "dph-base",
          "signature": "TraceMBPermute",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMBPermute",
          "package": "dph-base",
          "partial": "Trace MBPermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceMBPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMap",
          "package": "dph-base",
          "signature": "TraceMap",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMap",
          "package": "dph-base",
          "partial": "Trace Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMkSel2",
          "package": "dph-base",
          "signature": "TraceMkSel2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMkSel2",
          "package": "dph-base",
          "partial": "Trace Mk Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceMkSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMkSelRep2",
          "package": "dph-base",
          "signature": "TraceMkSelRep2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceMkSelRep2",
          "package": "dph-base",
          "partial": "Trace Mk Sel Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceMkSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePack",
          "package": "dph-base",
          "signature": "TracePack",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePack",
          "package": "dph-base",
          "partial": "Trace Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TracePack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePermute",
          "package": "dph-base",
          "signature": "TracePermute",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TracePermute",
          "package": "dph-base",
          "partial": "Trace Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TracePermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceRepeat",
          "package": "dph-base",
          "signature": "TraceRepeat",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceRepeat",
          "package": "dph-base",
          "partial": "Trace Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate",
          "package": "dph-base",
          "signature": "TraceReplicate",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate",
          "package": "dph-base",
          "partial": "Trace Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate_rs",
          "package": "dph-base",
          "signature": "TraceReplicate_rs",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate_rs",
          "package": "dph-base",
          "partial": "Trace Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceReplicate_rs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate_s",
          "package": "dph-base",
          "signature": "TraceReplicate_s",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceReplicate_s",
          "package": "dph-base",
          "partial": "Trace Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceReplicate_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceScan",
          "package": "dph-base",
          "signature": "TraceScan",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceScan",
          "package": "dph-base",
          "partial": "Trace Scan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceSum",
          "package": "dph-base",
          "signature": "TraceSum",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceSum",
          "package": "dph-base",
          "partial": "Trace Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceSum_r",
          "package": "dph-base",
          "signature": "TraceSum_r",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceSum_r",
          "package": "dph-base",
          "partial": "Trace Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceSum_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceTagsSel2",
          "package": "dph-base",
          "signature": "TraceTagsSel2",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceTagsSel2",
          "package": "dph-base",
          "partial": "Trace Tags Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceTagsSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceUpdate",
          "package": "dph-base",
          "signature": "TraceUpdate",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceUpdate",
          "package": "dph-base",
          "partial": "Trace Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceZipWith",
          "package": "dph-base",
          "signature": "TraceZipWith",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "TraceZipWith",
          "package": "dph-base",
          "partial": "Trace Zip With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:TraceZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceCount",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceCount",
          "package": "dph-base",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceDstLength",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceDstLength",
          "package": "dph-base",
          "partial": "Dst Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceDstLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceIndex",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceIndex",
          "package": "dph-base",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceModLength",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceModLength",
          "package": "dph-base",
          "partial": "Mod Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceModLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint tracing information to console.\n\u003c/p\u003e\u003cp\u003eThis function is used to wrap the calls to DPH primitives defined\n    in \u003ccode\u003edph-prim-par\u003c/code\u003e:\u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTracing is only enabled when \u003ccode\u003e\u003ca\u003etracePrimEnabled\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n    otherwise it's a no-op.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "tracePrim",
          "package": "dph-base",
          "signature": "TracePrim -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#tracePrim",
          "type": "function"
        },
        "index": {
          "description": "Print tracing information to console This function is used to wrap the calls to DPH primitives defined in dph-prim-par Data.Array.Parallel.Unlifted Tracing is only enabled when tracePrimEnabled is True otherwise it no-op",
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "tracePrim",
          "normalized": "TracePrim-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Prim",
          "signature": "TracePrim-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:tracePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSliceLength",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSliceLength",
          "package": "dph-base",
          "partial": "Slice Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceSliceLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrc1Length",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrc1Length",
          "package": "dph-base",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceSrc1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrc2Length",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrc2Length",
          "package": "dph-base",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceSrc2Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrcLength",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceSrcLength",
          "package": "dph-base",
          "partial": "Src Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceSrcLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceStart",
          "package": "dph-base",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Base-TracePrim.html#TracePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base TracePrim",
          "module": "Data.Array.Parallel.Base.TracePrim",
          "name": "traceStart",
          "package": "dph-base",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base-TracePrim.html#v:traceStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon config and debugging functions. Imported by most modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "Base",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Common config and debugging functions Imported by most modules",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "Base",
          "package": "dph-base",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strict state-transformer monad.\n A computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e transforms an internal state indexed\n by \u003ccode\u003es\u003c/code\u003e, and returns a value of type \u003ccode\u003ea\u003c/code\u003e.\n The \u003ccode\u003es\u003c/code\u003e parameter is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an uninstantiated type variable (inside invocations of \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e), or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRealWorld\u003c/a\u003e\u003c/code\u003e (inside invocations of \u003ccode\u003e\u003ca\u003estToIO\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt serves to keep the internal states of different invocations\n of \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e separate from each other and from invocations of\n \u003ccode\u003e\u003ca\u003estToIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e operations are strict in the state (though not in\n values stored in the state).  For example,\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e (writeSTRef _|_ v \u003e\u003e= f) = _|_\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "ST",
          "package": "dph-base",
          "type": "newtype"
        },
        "index": {
          "description": "The strict state-transformer monad computation of type ST transforms an internal state indexed by and returns value of type The parameter is either an uninstantiated type variable inside invocations of runST or RealWorld inside invocations of stToIO It serves to keep the internal states of different invocations of runST separate from each other and from invocations of stToIO The and operations are strict in the state though not in values stored in the state For example runST writeSTRef",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "ST",
          "package": "dph-base",
          "partial": "ST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#t:ST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a value of an algebraic type, the tag tells us what\n   data constructor was used to create it.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "Tag",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Base-Tag.html#Tag",
          "type": "type"
        },
        "index": {
          "description": "Given value of an algebraic type the tag tells us what data constructor was used to create it",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "Tag",
          "package": "dph-base",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Base",
          "name": "ST",
          "package": "dph-base",
          "signature": "ST (STRep s a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "ST",
          "package": "dph-base",
          "partial": "ST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:ST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBounds check, enabled when \u003ccode\u003e\u003ca\u003edebug\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe first integer is the length of the array, and the second\n   is the index. The second must be greater or equal to '0' and less than\n   the first integer. If the not then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "check",
          "package": "dph-base",
          "signature": "String -\u003e Int -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#check",
          "type": "function"
        },
        "index": {
          "description": "Bounds check enabled when debug True The first integer is the length of the array and the second is the index The second must be greater or equal to and less than the first integer If the not then error with the String",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "check",
          "normalized": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "package": "dph-base",
          "signature": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBounds check, enabled when \u003ccode\u003e\u003ca\u003edebugCritical\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis version is used to check operations that could corrupt the heap.\n\u003c/p\u003e\u003cp\u003eThe first integer is the length of the array, and the second\n   is the index. The second must be greater or equal to '0' and less than\n   the first integer. If the not then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "checkCritical",
          "package": "dph-base",
          "signature": "String -\u003e Int -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#checkCritical",
          "type": "function"
        },
        "index": {
          "description": "Bounds check enabled when debugCritical True This version is used to check operations that could corrupt the heap The first integer is the length of the array and the second is the index The second must be greater or equal to and less than the first integer If the not then error with the String",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "checkCritical",
          "normalized": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Critical",
          "signature": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:checkCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality check, enabled when \u003ccode\u003e\u003ca\u003edebug\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe two \u003ccode\u003ea\u003c/code\u003e values must be equal, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e gives the location of the error,\n   and the second some helpful message.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "checkEq",
          "package": "dph-base",
          "signature": "String -\u003e String -\u003e a -\u003e a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Base-Debug.html#checkEq",
          "type": "function"
        },
        "index": {
          "description": "Equality check enabled when debug True The two values must be equal else error The first String gives the location of the error and the second some helpful message",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "checkEq",
          "normalized": "String-\u003eString-\u003ea-\u003ea-\u003eb-\u003eb",
          "package": "dph-base",
          "partial": "Eq",
          "signature": "String-\u003eString-\u003ea-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:checkEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength check, enabled when \u003ccode\u003e\u003ca\u003edebug\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCheck that the second integer is greater or equal to `0' and less or equal\n   than the first integer. If the not then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "checkLen",
          "package": "dph-base",
          "signature": "String -\u003e Int -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#checkLen",
          "type": "function"
        },
        "index": {
          "description": "Length check enabled when debug True Check that the second integer is greater or equal to and less or equal than the first integer If the not then error with the String",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "checkLen",
          "normalized": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Len",
          "signature": "String-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:checkLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an array length, check it is not zero.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "checkNotEmpty",
          "package": "dph-base",
          "signature": "String -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#checkNotEmpty",
          "type": "function"
        },
        "index": {
          "description": "Given an array length check it is not zero",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "checkNotEmpty",
          "normalized": "String-\u003eInt-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Not Empty",
          "signature": "String-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:checkNotEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlice check, enable when \u003ccode\u003e\u003ca\u003edebug\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe vector must contain at least \u003ccode\u003esliceStart\u003c/code\u003e + \u003ccode\u003esliceLen\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "checkSlice",
          "package": "dph-base",
          "signature": "String -\u003e Int -\u003e Int -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#checkSlice",
          "type": "function"
        },
        "index": {
          "description": "Slice check enable when debug True The vector must contain at least sliceStart sliceLen elements",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "checkSlice",
          "normalized": "String-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "package": "dph-base",
          "partial": "Slice",
          "signature": "String-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:checkSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable internal consistency checks.\n   This is NOT implied by \u003ccode\u003e\u003ca\u003edebugCritical\u003c/a\u003e\u003c/code\u003e above. If you want both\n   you need to set both to `True.`\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "debug",
          "package": "dph-base",
          "signature": "Bool",
          "source": "src/Data-Array-Parallel-Base-Config.html#debug",
          "type": "function"
        },
        "index": {
          "description": "Enable internal consistency checks This is NOT implied by debugCritical above If you want both you need to set both to True",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "debug",
          "package": "dph-base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable internal consistency checks for operations that could\n   corrupt the heap.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "debugCritical",
          "package": "dph-base",
          "signature": "Bool",
          "source": "src/Data-Array-Parallel-Base-Config.html#debugCritical",
          "type": "function"
        },
        "index": {
          "description": "Enable internal consistency checks for operations that could corrupt the heap",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "debugCritical",
          "package": "dph-base",
          "partial": "Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:debugCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is 0, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is 1.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "fromBool",
          "package": "dph-base",
          "signature": "Bool -\u003e Tag",
          "source": "src/Data-Array-Parallel-Base-Tag.html#fromBool",
          "type": "function"
        },
        "index": {
          "description": "Get the Tag of Bool value False is True is",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "fromBool",
          "normalized": "Bool-\u003eTag",
          "package": "dph-base",
          "partial": "Bool",
          "signature": "Bool-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e. This is identity at the value level.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "intToTag",
          "package": "dph-base",
          "signature": "Int -\u003e Tag",
          "source": "src/Data-Array-Parallel-Base-Tag.html#intToTag",
          "type": "function"
        },
        "index": {
          "description": "Convert an Int to Tag This is identity at the value level",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "intToTag",
          "normalized": "Int-\u003eTag",
          "package": "dph-base",
          "partial": "To Tag",
          "signature": "Int-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:intToTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the value computed by a state transformer computation.\n The \u003ccode\u003eforall\u003c/code\u003e ensures that the internal state used by the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e\n computation is inaccessible to the rest of the program.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "runST",
          "package": "dph-base",
          "signature": "(forall s.  ST s a) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Return the value computed by state transformer computation The forall ensures that the internal state used by the ST computation is inaccessible to the rest of the program",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "runST",
          "normalized": "(a b ST c d)-\u003ed",
          "package": "dph-base",
          "partial": "ST",
          "signature": "(forall s. ST s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:runST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. This is identity at the value level.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "tagToInt",
          "package": "dph-base",
          "signature": "Tag -\u003e Int",
          "source": "src/Data-Array-Parallel-Base-Tag.html#tagToInt",
          "type": "function"
        },
        "index": {
          "description": "Convert Tag to an Int This is identity at the value level",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "tagToInt",
          "normalized": "Tag-\u003eInt",
          "package": "dph-base",
          "partial": "To Int",
          "signature": "Tag-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:tagToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "toBool",
          "package": "dph-base",
          "signature": "Tag -\u003e Bool",
          "source": "src/Data-Array-Parallel-Base-Tag.html#toBool",
          "type": "function"
        },
        "index": {
          "description": "Convert Tag to Bool value",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "toBool",
          "normalized": "Tag-\u003eBool",
          "package": "dph-base",
          "partial": "Bool",
          "signature": "Tag-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:toBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint tracing information for each flat array primitive to console.\n   The tracing hooks are in `dph-prim-par:Data.Array.Parallel.Unlifted`\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "tracePrimEnabled",
          "package": "dph-base",
          "signature": "Bool",
          "source": "src/Data-Array-Parallel-Base-Config.html#tracePrimEnabled",
          "type": "function"
        },
        "index": {
          "description": "Print tracing information for each flat array primitive to console The tracing hooks are in dph-prim-par Data.Array.Parallel.Unlifted",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "tracePrimEnabled",
          "package": "dph-base",
          "partial": "Prim Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:tracePrimEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error saying something was not intitialised.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e must contain a helpful message saying what module\n   the error occured in, and the possible reasons for it.\n   If not then a puppy dies at compile time.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Base",
          "name": "uninitialised",
          "package": "dph-base",
          "signature": "String -\u003e a",
          "source": "src/Data-Array-Parallel-Base-Debug.html#uninitialised",
          "type": "function"
        },
        "index": {
          "description": "Throw an error saying something was not intitialised The String must contain helpful message saying what module the error occured in and the possible reasons for it If not then puppy dies at compile time",
          "hierarchy": "Data Array Parallel Base",
          "module": "Data.Array.Parallel.Base",
          "name": "uninitialised",
          "normalized": "String-\u003ea",
          "package": "dph-base",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Base.html#v:uninitialised"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer classes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Pretty",
          "name": "Pretty",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer classes",
          "hierarchy": "Data Array Parallel Pretty",
          "module": "Data.Array.Parallel.Pretty",
          "name": "Pretty",
          "package": "dph-base",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the physical structure of data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Pretty",
          "name": "PprPhysical",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Pretty.html#PprPhysical",
          "type": "class"
        },
        "index": {
          "description": "Pretty print the physical structure of data",
          "hierarchy": "Data Array Parallel Pretty",
          "module": "Data.Array.Parallel.Pretty",
          "name": "PprPhysical",
          "package": "dph-base",
          "partial": "Ppr Physical",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Pretty.html#t:PprPhysical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print virtual / logical structure of data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Pretty",
          "name": "PprVirtual",
          "package": "dph-base",
          "source": "src/Data-Array-Parallel-Pretty.html#PprVirtual",
          "type": "class"
        },
        "index": {
          "description": "Pretty print virtual logical structure of data",
          "hierarchy": "Data Array Parallel Pretty",
          "module": "Data.Array.Parallel.Pretty",
          "name": "PprVirtual",
          "package": "dph-base",
          "partial": "Ppr Virtual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Pretty.html#t:PprVirtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Pretty",
          "name": "pprp",
          "package": "dph-base",
          "signature": "a -\u003e Doc",
          "source": "src/Data-Array-Parallel-Pretty.html#pprp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Pretty",
          "module": "Data.Array.Parallel.Pretty",
          "name": "pprp",
          "normalized": "a-\u003eDoc",
          "package": "dph-base",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Pretty.html#v:pprp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Pretty",
          "name": "pprv",
          "package": "dph-base",
          "signature": "a -\u003e Doc",
          "source": "src/Data-Array-Parallel-Pretty.html#pprv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Pretty",
          "module": "Data.Array.Parallel.Pretty",
          "name": "pprv",
          "normalized": "a-\u003eDoc",
          "package": "dph-base",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-base/docs/Data-Array-Parallel-Pretty.html#v:pprv"
      }
    }
  ]
]