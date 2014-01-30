[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-datasize/docs/GHC-DataSize.html#",
      "description": {
        "fct-module": "GHC.DataSize",
        "fct-package": "ghc-datasize",
        "fct-signature": "module",
        "fct-source": "src/GHC-DataSize.html",
        "fct-type": "module",
        "title": "DataSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC DataSize",
        "module": "GHC.DataSize",
        "name": "DataSize",
        "normalized": "",
        "package": "ghc-datasize",
        "partial": "Data Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-datasize/docs/GHC-DataSize.html#v:closureSize",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate size of GHC objects in Bytes. Note that an object may not be\n   evaluated yet and only the size of the initial closure is returned.\n\u003c/p\u003e",
        "fct-module": "GHC.DataSize",
        "fct-package": "ghc-datasize",
        "fct-signature": "a -\u003e IO b",
        "fct-source": "src/GHC-DataSize.html#closureSize",
        "fct-type": "function",
        "title": "closureSize"
      },
      "index": {
        "description": "Calculate size of GHC objects in Bytes Note that an object may not be evaluated yet and only the size of the initial closure is returned",
        "hierarchy": "GHC DataSize",
        "module": "GHC.DataSize",
        "name": "closureSize",
        "normalized": "a-\u003eIO b",
        "package": "ghc-datasize",
        "partial": "Size",
        "signature": "a-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-datasize/docs/GHC-DataSize.html#v:recursiveSize",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the recursive size of GHC objects in Bytes. Note that the actual\n   size in memory is calculated, so shared values are only counted once.\n\u003c/p\u003e\u003cp\u003eCall with\n   \u003ccode\u003e\n    recursiveSize $! 2\n   \u003c/code\u003e\n   to force evaluation to WHNF before calculating the size.\n\u003c/p\u003e\u003cp\u003eCall with\n   \u003ccode\u003e\n    recursiveSize $!! \"foobar\"\n   \u003c/code\u003e\n   ($!! from Control.DeepSeq) to force full evaluation before calculating the\n   size.\n\u003c/p\u003e\u003cp\u003eA garbage collection is performed before the size is calculated, because\n   the garbage collector would make heap walks difficult.\n\u003c/p\u003e",
        "fct-module": "GHC.DataSize",
        "fct-package": "ghc-datasize",
        "fct-signature": "a -\u003e IO b",
        "fct-source": "src/GHC-DataSize.html#recursiveSize",
        "fct-type": "function",
        "title": "recursiveSize"
      },
      "index": {
        "description": "Calculate the recursive size of GHC objects in Bytes Note that the actual size in memory is calculated so shared values are only counted once Call with recursiveSize to force evaluation to WHNF before calculating the size Call with recursiveSize foobar from Control.DeepSeq to force full evaluation before calculating the size garbage collection is performed before the size is calculated because the garbage collector would make heap walks difficult",
        "hierarchy": "GHC DataSize",
        "module": "GHC.DataSize",
        "name": "recursiveSize",
        "normalized": "a-\u003eIO b",
        "package": "ghc-datasize",
        "partial": "Size",
        "signature": "a-\u003eIO b"
      }
    }
  }
]