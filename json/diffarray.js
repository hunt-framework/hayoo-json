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
        "word": "diffarray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctional arrays with constant-time update.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Diff",
          "name": "Diff",
          "package": "diffarray",
          "source": "src/Data-Array-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "Functional arrays with constant-time update",
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "Diff",
          "package": "diffarray",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFully polymorphic lazy boxed diff array.\n\u003c/p\u003e",
          "module": "Data.Array.Diff",
          "name": "DiffArray",
          "package": "diffarray",
          "source": "src/Data-Array-Diff.html#DiffArray",
          "type": "type"
        },
        "index": {
          "description": "Fully polymorphic lazy boxed diff array",
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "DiffArray",
          "package": "diffarray",
          "partial": "Diff Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:DiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict unboxed diff array, working only for elements\n of primitive types but more compact and usually faster than \u003ccode\u003e\u003ca\u003eDiffArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Diff",
          "name": "DiffUArray",
          "package": "diffarray",
          "source": "src/Data-Array-Diff.html#DiffUArray",
          "type": "type"
        },
        "index": {
          "description": "Strict unboxed diff array working only for elements of primitive types but more compact and usually faster than DiffArray",
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "DiffUArray",
          "package": "diffarray",
          "partial": "Diff UArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:DiffUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e type living in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad can be converted\n to a diff array.\n\u003c/p\u003e",
          "module": "Data.Array.Diff",
          "name": "IOToDiffArray",
          "package": "diffarray",
          "source": "src/Data-Array-Diff.html#IOToDiffArray",
          "type": "data"
        },
        "index": {
          "description": "An arbitrary MArray type living in the IO monad can be converted to diff array",
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "IOToDiffArray",
          "package": "diffarray",
          "partial": "IOTo Diff Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#t:IOToDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Diff",
          "name": "newDiffArray",
          "package": "diffarray",
          "signature": "(i, i) -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
          "source": "src/Data-Array-Diff.html#newDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "newDiffArray",
          "normalized": "(a,a)-\u003e[(Int,b)]-\u003eIO(IOToDiffArray c a b)",
          "package": "diffarray",
          "partial": "Diff Array",
          "signature": "(i,i)-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:newDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Diff",
          "name": "readDiffArray",
          "package": "diffarray",
          "signature": "IOToDiffArray a i e -\u003e Int -\u003e IO e",
          "source": "src/Data-Array-Diff.html#readDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "readDiffArray",
          "normalized": "IOToDiffArray a b c-\u003eInt-\u003eIO c",
          "package": "diffarray",
          "partial": "Diff Array",
          "signature": "IOToDiffArray a i e-\u003eInt-\u003eIO e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:readDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Diff",
          "name": "replaceDiffArray",
          "package": "diffarray",
          "signature": "IOToDiffArray a i e -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
          "source": "src/Data-Array-Diff.html#replaceDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Diff",
          "module": "Data.Array.Diff",
          "name": "replaceDiffArray",
          "normalized": "IOToDiffArray a b c-\u003e[(Int,c)]-\u003eIO(IOToDiffArray a b c)",
          "package": "diffarray",
          "partial": "Diff Array",
          "signature": "IOToDiffArray a i e-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diffarray/docs/Data-Array-Diff.html#v:replaceDiffArray"
      }
    }
  ]
]