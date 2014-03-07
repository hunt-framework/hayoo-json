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
        "word": "smallarray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "Unsafe",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "Unsafe",
          "package": "smallarray",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "Elt",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Internal.html#Elt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "Elt",
          "package": "smallarray",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely copy the elements of an array. Array bounds are not checked.\n\u003c/p\u003e",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeCopy",
          "package": "smallarray",
          "signature": "MArray s e -\u003e Int -\u003e MArray s e -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-SmallArray-Internal.html#unsafeCopy",
          "type": "function"
        },
        "index": {
          "description": "Unsafely copy the elements of an array Array bounds are not checked",
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeCopy",
          "normalized": "MArray a b-\u003eInt-\u003eMArray a b-\u003eInt-\u003eInt-\u003eST a()",
          "package": "smallarray",
          "partial": "Copy",
          "signature": "MArray s e-\u003eInt-\u003eMArray s e-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeFreeze",
          "package": "smallarray",
          "signature": "MArray s e -\u003e ST s (Array e)",
          "source": "src/Data-SmallArray-Internal.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeFreeze",
          "normalized": "MArray a b-\u003eST a(Array b)",
          "package": "smallarray",
          "partial": "Freeze",
          "signature": "MArray s e-\u003eST s(Array e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeIndex",
          "package": "smallarray",
          "signature": "Array e -\u003e Int -\u003e e",
          "source": "src/Data-SmallArray-Internal.html#unsafeIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeIndex",
          "normalized": "Array a-\u003eInt-\u003ea",
          "package": "smallarray",
          "partial": "Index",
          "signature": "Array e-\u003eInt-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array. The contents are not initialized in any way, and\n may be invalid.\n\u003c/p\u003e",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeNew",
          "package": "smallarray",
          "signature": "Int -\u003e ST s (MArray s e)",
          "source": "src/Data-SmallArray-Internal.html#unsafeNew",
          "type": "function"
        },
        "index": {
          "description": "Create new array The contents are not initialized in any way and may be invalid",
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeNew",
          "normalized": "Int-\u003eST a(MArray a b)",
          "package": "smallarray",
          "partial": "New",
          "signature": "Int-\u003eST s(MArray s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeRead",
          "package": "smallarray",
          "signature": "MArray s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-SmallArray-Internal.html#unsafeRead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeRead",
          "normalized": "MArray a b-\u003eInt-\u003eST a b",
          "package": "smallarray",
          "partial": "Read",
          "signature": "MArray s e-\u003eInt-\u003eST s e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeWrite",
          "package": "smallarray",
          "signature": "MArray s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-SmallArray-Internal.html#unsafeWrite",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SmallArray Unsafe",
          "module": "Data.SmallArray.Unsafe",
          "name": "unsafeWrite",
          "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "smallarray",
          "partial": "Write",
          "signature": "MArray s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePacked, unboxed, heap-resident arrays.  Suitable for performance\n critical use, both in terms of large data quantities and high\n speed.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.SmallArray as A\n\u003c/pre\u003e\u003cp\u003eThe names in this module resemble those in the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e family\n of modules, but are shorter due to the assumption of qualifid\n naming.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SmallArray",
          "name": "SmallArray",
          "package": "smallarray",
          "source": "src/Data-SmallArray.html",
          "type": "module"
        },
        "index": {
          "description": "Packed unboxed heap-resident arrays Suitable for performance critical use both in terms of large data quantities and high speed This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.SmallArray as The names in this module resemble those in the Array family of modules but are shorter due to the assumption of qualifid naming",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "SmallArray",
          "package": "smallarray",
          "partial": "Small Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple array. Indexing starts from zero.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "Array",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Internal.html#Array",
          "type": "data"
        },
        "index": {
          "description": "simple array Indexing starts from zero",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "Array",
          "package": "smallarray",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray",
          "name": "Elt",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Internal.html#Elt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "Elt",
          "package": "smallarray",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray",
          "name": "IArray",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Internal.html#IArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "IArray",
          "package": "smallarray",
          "partial": "IArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple mutable array. Indexing starts from zero.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "MArray",
          "package": "smallarray",
          "source": "src/Data-SmallArray-Internal.html#MArray",
          "type": "data"
        },
        "index": {
          "description": "simple mutable array Indexing starts from zero",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "MArray",
          "package": "smallarray",
          "partial": "MArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an array in its entirety. The destination array must be at\n least as big as the source.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "copy",
          "package": "smallarray",
          "signature": "MArray s e-\u003e MArray s e-\u003e ST s ()",
          "type": "function"
        },
        "index": {
          "description": "Copy an array in its entirety The destination array must be at least as big as the source",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "copy",
          "normalized": "MArray a b-\u003eMArray a b-\u003eST a()",
          "package": "smallarray",
          "signature": "MArray s e-\u003eMArray s e-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty array\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "empty",
          "package": "smallarray",
          "signature": "Array e",
          "source": "src/Data-SmallArray-Internal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty array",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "empty",
          "package": "smallarray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array from a list.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "fromList",
          "package": "smallarray",
          "signature": "[e] -\u003e Array e",
          "source": "src/Data-SmallArray-Internal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create an array from list",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "fromList",
          "normalized": "[a]-\u003eArray a",
          "package": "smallarray",
          "partial": "List",
          "signature": "[e]-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an element in an array at the specified\n location. Array indices start at zero.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "index",
          "package": "smallarray",
          "signature": "Array e -\u003e Int -\u003e e",
          "source": "src/Data-SmallArray-Internal.html#index",
          "type": "method"
        },
        "index": {
          "description": "Retrieve an element in an array at the specified location Array indices start at zero",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "index",
          "normalized": "Array a-\u003eInt-\u003ea",
          "package": "smallarray",
          "signature": "Array e-\u003eInt-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of an array.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "length",
          "package": "smallarray",
          "signature": "a -\u003e Int",
          "source": "src/Data-SmallArray-Internal.html#length",
          "type": "method"
        },
        "index": {
          "description": "Return the length of an array",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "smallarray",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array with the specified default value.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "new",
          "package": "smallarray",
          "signature": "Int -\u003e e -\u003e ST s (MArray s e)",
          "source": "src/Data-SmallArray-Internal.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new array with the specified default value",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "new",
          "normalized": "Int-\u003ea-\u003eST b(MArray b a)",
          "package": "smallarray",
          "signature": "Int-\u003ee-\u003eST s(MArray s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an element from a mutable array at the\n specified location. Array indices start at zero.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "read",
          "package": "smallarray",
          "signature": "MArray s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-SmallArray-Internal.html#read",
          "type": "method"
        },
        "index": {
          "description": "Retrieve an element from mutable array at the specified location Array indices start at zero",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "read",
          "normalized": "MArray a b-\u003eInt-\u003eST a b",
          "package": "smallarray",
          "signature": "MArray s e-\u003eInt-\u003eST s e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action creating a mutable array, and return the resulting\n equivalent pure array. No copy is performed.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "run",
          "package": "smallarray",
          "signature": "(forall s.  ST s (MArray s e)) -\u003e Array e",
          "source": "src/Data-SmallArray-Internal.html#run",
          "type": "function"
        },
        "index": {
          "description": "Execute an action creating mutable array and return the resulting equivalent pure array No copy is performed",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "run",
          "normalized": "(a b ST c(MArray c d))-\u003eArray d",
          "package": "smallarray",
          "signature": "(forall s. ST s(MArray s e))-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SmallArray",
          "name": "run'",
          "package": "smallarray",
          "signature": "(forall s.  ST s (MArray s e, a)) -\u003e (Array e, a)",
          "source": "src/Data-SmallArray-Internal.html#run%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "run'",
          "normalized": "(a b ST c(MArray c d,e))-\u003e(Array d,e)",
          "package": "smallarray",
          "signature": "(forall s. ST s(MArray s e,a))-\u003e(Array e,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:run-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the array to a list.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "toList",
          "package": "smallarray",
          "signature": "Array e -\u003e [e]",
          "source": "src/Data-SmallArray-Internal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Output the array to list",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "toList",
          "normalized": "Array a-\u003e[a]",
          "package": "smallarray",
          "partial": "List",
          "signature": "Array e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element to a mutable array at\n the specified location. Array indices start\n at zero.\n\u003c/p\u003e",
          "module": "Data.SmallArray",
          "name": "write",
          "package": "smallarray",
          "signature": "MArray s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-SmallArray-Internal.html#write",
          "type": "method"
        },
        "index": {
          "description": "Write an element to mutable array at the specified location Array indices start at zero",
          "hierarchy": "Data SmallArray",
          "module": "Data.SmallArray",
          "name": "write",
          "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "smallarray",
          "signature": "MArray s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:write"
      }
    }
  ]
]