[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctional arrays with constant-time update.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Diff.html",
        "fct-type": "module",
        "title": "Diff"
      },
      "index": {
        "description": "Functional arrays with constant-time update",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "Diff",
        "normalized": "",
        "package": "diffarray",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:DiffArray",
      "description": {
        "fct-descr": "\u003cp\u003eFully polymorphic lazy boxed diff array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Diff.html#DiffArray",
        "fct-type": "type",
        "title": "DiffArray"
      },
      "index": {
        "description": "Fully polymorphic lazy boxed diff array",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "DiffArray",
        "normalized": "",
        "package": "diffarray",
        "partial": "Diff Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:DiffUArray",
      "description": {
        "fct-descr": "\u003cp\u003eStrict unboxed diff array, working only for elements\n of primitive types but more compact and usually faster than \u003ccode\u003e\u003ca\u003eDiffArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Diff.html#DiffUArray",
        "fct-type": "type",
        "title": "DiffUArray"
      },
      "index": {
        "description": "Strict unboxed diff array working only for elements of primitive types but more compact and usually faster than DiffArray",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "DiffUArray",
        "normalized": "",
        "package": "diffarray",
        "partial": "Diff UArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:IOToDiffArray",
      "description": {
        "fct-descr": "\u003cp\u003eAn arbitrary \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e type living in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad can be converted\n to a diff array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Diff.html#IOToDiffArray",
        "fct-type": "data",
        "title": "IOToDiffArray"
      },
      "index": {
        "description": "An arbitrary MArray type living in the IO monad can be converted to diff array",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "IOToDiffArray",
        "normalized": "",
        "package": "diffarray",
        "partial": "IOTo Diff Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:newDiffArray",
      "description": {
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "(i, i) -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
        "fct-source": "src/Data-Array-Diff.html#newDiffArray",
        "fct-type": "function",
        "title": "newDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "newDiffArray",
        "normalized": "(a,a)-\u003e[(Int,b)]-\u003eIO(IOToDiffArray c a b)",
        "package": "diffarray",
        "partial": "Diff Array",
        "signature": "(i,i)-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:readDiffArray",
      "description": {
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "IOToDiffArray a i e -\u003e Int -\u003e IO e",
        "fct-source": "src/Data-Array-Diff.html#readDiffArray",
        "fct-type": "function",
        "title": "readDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "readDiffArray",
        "normalized": "IOToDiffArray a b c-\u003eInt-\u003eIO c",
        "package": "diffarray",
        "partial": "Diff Array",
        "signature": "IOToDiffArray a i e-\u003eInt-\u003eIO e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:replaceDiffArray",
      "description": {
        "fct-module": "Data.Array.Diff",
        "fct-package": "diffarray",
        "fct-signature": "IOToDiffArray a i e -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
        "fct-source": "src/Data-Array-Diff.html#replaceDiffArray",
        "fct-type": "function",
        "title": "replaceDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Diff",
        "module": "Data.Array.Diff",
        "name": "replaceDiffArray",
        "normalized": "IOToDiffArray a b c-\u003e[(Int,c)]-\u003eIO(IOToDiffArray a b c)",
        "package": "diffarray",
        "partial": "Diff Array",
        "signature": "IOToDiffArray a i e-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)"
      }
    }
  }
]