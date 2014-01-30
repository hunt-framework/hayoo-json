[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "module",
        "fct-source": "src/Data-SmallArray-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "smallarray",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#t:Elt",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "class",
        "fct-source": "src/Data-SmallArray-Internal.html#Elt",
        "fct-type": "class",
        "title": "Elt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "Elt",
        "normalized": "",
        "package": "smallarray",
        "partial": "Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeCopy",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely copy the elements of an array. Array bounds are not checked.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e Int -\u003e MArray s e -\u003e Int -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeCopy",
        "fct-type": "function",
        "title": "unsafeCopy"
      },
      "index": {
        "description": "Unsafely copy the elements of an array Array bounds are not checked",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeCopy",
        "normalized": "MArray a b-\u003eInt-\u003eMArray a b-\u003eInt-\u003eInt-\u003eST a()",
        "package": "smallarray",
        "partial": "Copy",
        "signature": "MArray s e-\u003eInt-\u003eMArray s e-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeFreeze",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e ST s (Array e)",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeFreeze",
        "normalized": "MArray a b-\u003eST a(Array b)",
        "package": "smallarray",
        "partial": "Freeze",
        "signature": "MArray s e-\u003eST s(Array e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeIndex",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "Array e -\u003e Int -\u003e e",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeIndex",
        "fct-type": "method",
        "title": "unsafeIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeIndex",
        "normalized": "Array a-\u003eInt-\u003ea",
        "package": "smallarray",
        "partial": "Index",
        "signature": "Array e-\u003eInt-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array. The contents are not initialized in any way, and\n may be invalid.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "Int -\u003e ST s (MArray s e)",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeNew",
        "fct-type": "function",
        "title": "unsafeNew"
      },
      "index": {
        "description": "Create new array The contents are not initialized in any way and may be invalid",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeNew",
        "normalized": "Int-\u003eST a(MArray a b)",
        "package": "smallarray",
        "partial": "New",
        "signature": "Int-\u003eST s(MArray s e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeRead",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e Int -\u003e ST s e",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeRead",
        "fct-type": "method",
        "title": "unsafeRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeRead",
        "normalized": "MArray a b-\u003eInt-\u003eST a b",
        "package": "smallarray",
        "partial": "Read",
        "signature": "MArray s e-\u003eInt-\u003eST s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray-Unsafe.html#v:unsafeWrite",
      "description": {
        "fct-module": "Data.SmallArray.Unsafe",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e Int -\u003e e -\u003e ST s ()",
        "fct-source": "src/Data-SmallArray-Internal.html#unsafeWrite",
        "fct-type": "method",
        "title": "unsafeWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray Unsafe",
        "module": "Data.SmallArray.Unsafe",
        "name": "unsafeWrite",
        "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
        "package": "smallarray",
        "partial": "Write",
        "signature": "MArray s e-\u003eInt-\u003ee-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePacked, unboxed, heap-resident arrays.  Suitable for performance\n critical use, both in terms of large data quantities and high\n speed.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.SmallArray as A\n\u003c/pre\u003e\u003cp\u003eThe names in this module resemble those in the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e family\n of modules, but are shorter due to the assumption of qualifid\n naming.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "module",
        "fct-source": "src/Data-SmallArray.html",
        "fct-type": "module",
        "title": "SmallArray"
      },
      "index": {
        "description": "Packed unboxed heap-resident arrays Suitable for performance critical use both in terms of large data quantities and high speed This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.SmallArray as The names in this module resemble those in the Array family of modules but are shorter due to the assumption of qualifid naming",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "SmallArray",
        "normalized": "",
        "package": "smallarray",
        "partial": "Small Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA simple array. Indexing starts from zero.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "data",
        "fct-source": "src/Data-SmallArray-Internal.html#Array",
        "fct-type": "data",
        "title": "Array"
      },
      "index": {
        "description": "simple array Indexing starts from zero",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "Array",
        "normalized": "",
        "package": "smallarray",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:Elt",
      "description": {
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "class",
        "fct-source": "src/Data-SmallArray-Internal.html#Elt",
        "fct-type": "class",
        "title": "Elt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "Elt",
        "normalized": "",
        "package": "smallarray",
        "partial": "Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:IArray",
      "description": {
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "class",
        "fct-source": "src/Data-SmallArray-Internal.html#IArray",
        "fct-type": "class",
        "title": "IArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "IArray",
        "normalized": "",
        "package": "smallarray",
        "partial": "IArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#t:MArray",
      "description": {
        "fct-descr": "\u003cp\u003eA simple mutable array. Indexing starts from zero.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "data",
        "fct-source": "src/Data-SmallArray-Internal.html#MArray",
        "fct-type": "data",
        "title": "MArray"
      },
      "index": {
        "description": "simple mutable array Indexing starts from zero",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "MArray",
        "normalized": "",
        "package": "smallarray",
        "partial": "MArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an array in its entirety. The destination array must be at\n least as big as the source.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e-\u003e MArray s e-\u003e ST s ()",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy an array in its entirety The destination array must be at least as big as the source",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "copy",
        "normalized": "MArray a b-\u003eMArray a b-\u003eST a()",
        "package": "smallarray",
        "partial": "",
        "signature": "MArray s e-\u003eMArray s e-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty array\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "Array e",
        "fct-source": "src/Data-SmallArray-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty array",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "empty",
        "normalized": "",
        "package": "smallarray",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array from a list.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "[e] -\u003e Array e",
        "fct-source": "src/Data-SmallArray-Internal.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create an array from list",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "fromList",
        "normalized": "[a]-\u003eArray a",
        "package": "smallarray",
        "partial": "List",
        "signature": "[e]-\u003eArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve an element in an array at the specified\n location. Array indices start at zero.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "Array e -\u003e Int -\u003e e",
        "fct-source": "src/Data-SmallArray-Internal.html#index",
        "fct-type": "method",
        "title": "index"
      },
      "index": {
        "description": "Retrieve an element in an array at the specified location Array indices start at zero",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "index",
        "normalized": "Array a-\u003eInt-\u003ea",
        "package": "smallarray",
        "partial": "",
        "signature": "Array e-\u003eInt-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-SmallArray-Internal.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "Return the length of an array",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "smallarray",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array with the specified default value.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "Int -\u003e e -\u003e ST s (MArray s e)",
        "fct-source": "src/Data-SmallArray-Internal.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new array with the specified default value",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "new",
        "normalized": "Int-\u003ea-\u003eST b(MArray b a)",
        "package": "smallarray",
        "partial": "",
        "signature": "Int-\u003ee-\u003eST s(MArray s e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve an element from a mutable array at the\n specified location. Array indices start at zero.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e Int -\u003e ST s e",
        "fct-source": "src/Data-SmallArray-Internal.html#read",
        "fct-type": "method",
        "title": "read"
      },
      "index": {
        "description": "Retrieve an element from mutable array at the specified location Array indices start at zero",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "read",
        "normalized": "MArray a b-\u003eInt-\u003eST a b",
        "package": "smallarray",
        "partial": "",
        "signature": "MArray s e-\u003eInt-\u003eST s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action creating a mutable array, and return the resulting\n equivalent pure array. No copy is performed.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "(forall s.  ST s (MArray s e)) -\u003e Array e",
        "fct-source": "src/Data-SmallArray-Internal.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Execute an action creating mutable array and return the resulting equivalent pure array No copy is performed",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "run",
        "normalized": "(a b ST c(MArray c d))-\u003eArray d",
        "package": "smallarray",
        "partial": "",
        "signature": "(forall s. ST s(MArray s e))-\u003eArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:run-39-",
      "description": {
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "(forall s.  ST s (MArray s e, a)) -\u003e (Array e, a)",
        "fct-source": "src/Data-SmallArray-Internal.html#run%27",
        "fct-type": "function",
        "title": "run'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "run'",
        "normalized": "(a b ST c(MArray c d,e))-\u003e(Array d,e)",
        "package": "smallarray",
        "partial": "",
        "signature": "(forall s. ST s(MArray s e,a))-\u003e(Array e,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the array to a list.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "Array e -\u003e [e]",
        "fct-source": "src/Data-SmallArray-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Output the array to list",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "toList",
        "normalized": "Array a-\u003e[a]",
        "package": "smallarray",
        "partial": "List",
        "signature": "Array e-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/smallarray/docs/Data-SmallArray.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element to a mutable array at\n the specified location. Array indices start\n at zero.\n\u003c/p\u003e",
        "fct-module": "Data.SmallArray",
        "fct-package": "smallarray",
        "fct-signature": "MArray s e -\u003e Int -\u003e e -\u003e ST s ()",
        "fct-source": "src/Data-SmallArray-Internal.html#write",
        "fct-type": "method",
        "title": "write"
      },
      "index": {
        "description": "Write an element to mutable array at the specified location Array indices start at zero",
        "hierarchy": "Data SmallArray",
        "module": "Data.SmallArray",
        "name": "write",
        "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
        "package": "smallarray",
        "partial": "",
        "signature": "MArray s e-\u003eInt-\u003ee-\u003eST s()"
      }
    }
  }
]