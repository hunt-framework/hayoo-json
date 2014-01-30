[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription ---------------------------------------------------------------\n This module defines unlifted arrays generically as a GADT.\n\u003c/p\u003e\u003cp\u003eSlicing is implemented by each \u003ccode\u003eBUArr\u003c/code\u003e having the slicing information.  A\n possible alternative design would be to maintain this information in\n \u003ccode\u003e\u003ca\u003eUArr\u003c/a\u003e\u003c/code\u003e, but not in the representations, but at the root.  This may seem\n attractive at first, but seems to be more disruptive without any real\n benefits _ this is essentially, because we then need the slicing\n information at each level; ie, also at the leafs where it is sufficient\n using the current implementation.\n\u003c/p\u003e\u003cp\u003eTodo ----------------------------------------------------------------------\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Vector-UArr.html",
        "fct-type": "module",
        "title": "UArr"
      },
      "index": {
        "description": "Description This module defines unlifted arrays generically as GADT Slicing is implemented by each BUArr having the slicing information possible alternative design would be to maintain this information in UArr but not in the representations but at the root This may seem attractive at first but seems to be more disruptive without any real benefits this is essentially because we then need the slicing information at each level ie also at the leafs where it is sufficient using the current implementation Todo",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "UArr",
        "normalized": "",
        "package": "uvector",
        "partial": "UArr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#t:UA",
      "description": {
        "fct-descr": "\u003cp\u003eThis type class determines the types that can be elements immutable\n unboxed arrays. The representation type of these arrays is defined by way\n of an associated type.  All representation-dependent functions are methods\n of this class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Vector-UArr.html#UA",
        "fct-type": "class",
        "title": "UA"
      },
      "index": {
        "description": "This type class determines the types that can be elements immutable unboxed arrays The representation type of these arrays is defined by way of an associated type All representation-dependent functions are methods of this class",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "UA",
        "normalized": "",
        "package": "uvector",
        "partial": "UA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#t:UPrim",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Vector-UArr.html#UPrim",
        "fct-type": "class",
        "title": "UPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "UPrim",
        "normalized": "",
        "package": "uvector",
        "partial": "UPrim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:copyMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ecopyMU\u003c/a\u003e\u003c/code\u003e copies the contents of an immutable unboxed array into \n a mutable one starting from the specified index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e UArr e -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#copyMU",
        "fct-type": "method",
        "title": "copyMU"
      },
      "index": {
        "description": "copyMU copies the contents of an immutable unboxed array into mutable one starting from the specified index",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "copyMU",
        "normalized": "MUArr a b-\u003eInt-\u003eUArr a-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003eUArr e-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:fstU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield the first components of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-UArr.html#fstU",
        "fct-type": "function",
        "title": "fstU"
      },
      "index": {
        "description": "Yield the first components of an array of pairs",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "fstU",
        "normalized": "UArr(a*b)-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:indexU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Read an element from the array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int -\u003e e",
        "fct-source": "src/Data-Array-Vector-UArr.html#indexU",
        "fct-type": "method",
        "title": "indexU"
      },
      "index": {
        "description": "Read an element from the array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "indexU",
        "normalized": "UArr a-\u003eInt-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:lengthMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elengthMU\u003c/a\u003e\u003c/code\u003e yields the length of a mutable unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int",
        "fct-source": "src/Data-Array-Vector-UArr.html#lengthMU",
        "fct-type": "method",
        "title": "lengthMU"
      },
      "index": {
        "description": "lengthMU yields the length of mutable unboxed array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "lengthMU",
        "normalized": "MUArr a b-\u003eInt",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:lengthU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield the length of an unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int",
        "fct-source": "src/Data-Array-Vector-UArr.html#lengthU",
        "fct-type": "method",
        "title": "lengthU"
      },
      "index": {
        "description": "Yield the length of an unboxed array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "lengthU",
        "normalized": "UArr a-\u003eInt",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:memcpyMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memcpyMU",
        "fct-type": "method",
        "title": "memcpyMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "memcpyMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:memcpyOffMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second, beginning at the\n specified offsets for each.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memcpyOffMU",
        "fct-type": "method",
        "title": "memcpyOffMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second beginning at the specified offsets for each",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "memcpyOffMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "Off MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:memmoveOffMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second, beginning at the\n specified offsets for each. This operation is safe even if the source\n and destination are the same.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memmoveOffMU",
        "fct-type": "method",
        "title": "memmoveOffMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second beginning at the specified offsets for each This operation is safe even if the source and destination are the same",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "memmoveOffMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "Off MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:mkMUAPrim",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MBUArr s e -\u003e MUArr e s",
        "fct-source": "src/Data-Array-Vector-UArr.html#mkMUAPrim",
        "fct-type": "method",
        "title": "mkMUAPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "mkMUAPrim",
        "normalized": "MBUArr a b-\u003eMUArr b a",
        "package": "uvector",
        "partial": "MUAPrim",
        "signature": "MBUArr s e-\u003eMUArr e s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:mkUAPrim",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "BUArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#mkUAPrim",
        "fct-type": "method",
        "title": "mkUAPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "mkUAPrim",
        "normalized": "BUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "UAPrim",
        "signature": "BUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:newDynResU",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (forall s.  MUArr e s -\u003e ST s (Int :*: r)) -\u003e UArr e :*: r",
        "fct-source": "src/Data-Array-Vector-UArr.html#newDynResU",
        "fct-type": "function",
        "title": "newDynResU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "newDynResU",
        "normalized": "Int-\u003e(a b MUArr c d-\u003eST d(Int*e))-\u003eUArr c*e",
        "package": "uvector",
        "partial": "Dyn Res",
        "signature": "Int-\u003e(forall s. MUArr e s-\u003eST s(Int*r))-\u003eUArr e*r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:newDynU",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (forall s.  MUArr e s -\u003e ST s Int) -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#newDynU",
        "fct-type": "function",
        "title": "newDynU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "newDynU",
        "normalized": "Int-\u003e(a b MUArr c d-\u003eST d Int)-\u003eUArr c",
        "package": "uvector",
        "partial": "Dyn",
        "signature": "Int-\u003e(forall s. MUArr e s-\u003eST s Int)-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:newMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enewMU\u003c/a\u003e\u003c/code\u003e allocates a mutable unboxed array of the specified length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e ST s (MUArr e s)",
        "fct-source": "src/Data-Array-Vector-UArr.html#newMU",
        "fct-type": "method",
        "title": "newMU"
      },
      "index": {
        "description": "newMU allocates mutable unboxed array of the specified length",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "newMU",
        "normalized": "Int-\u003eST a(MUArr b a)",
        "package": "uvector",
        "partial": "MU",
        "signature": "Int-\u003eST s(MUArr e s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:newU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enewU\u003c/a\u003e\u003c/code\u003e constructs an immutable array of the given size by \n performing the provided initialization function on a mutable representation\n of the output array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (forall s.  MUArr e s -\u003e ST s ()) -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#newU",
        "fct-type": "function",
        "title": "newU"
      },
      "index": {
        "description": "newU constructs an immutable array of the given size by performing the provided initialization function on mutable representation of the output array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "newU",
        "normalized": "Int-\u003e(a b MUArr c d-\u003eST d())-\u003eUArr c",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003e(forall s. MUArr e s-\u003eST s())-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:readMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereadMU\u003c/a\u003e\u003c/code\u003e reads the element at the specified index of a mutable \n unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e ST s e",
        "fct-source": "src/Data-Array-Vector-UArr.html#readMU",
        "fct-type": "method",
        "title": "readMU"
      },
      "index": {
        "description": "readMU reads the element at the specified index of mutable unboxed array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "readMU",
        "normalized": "MUArr a b-\u003eInt-\u003eST b a",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003eST s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:sliceU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esliceU\u003c/a\u003e\u003c/code\u003e restricts access to a subrange of the original array \n (no copying).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int -\u003e Int -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#sliceU",
        "fct-type": "method",
        "title": "sliceU"
      },
      "index": {
        "description": "sliceU restricts access to subrange of the original array no copying",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "sliceU",
        "normalized": "UArr a-\u003eInt-\u003eInt-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt-\u003eInt-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:sndU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield the second components of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr b",
        "fct-source": "src/Data-Array-Vector-UArr.html#sndU",
        "fct-type": "function",
        "title": "sndU"
      },
      "index": {
        "description": "Yield the second components of an array of pairs",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "sndU",
        "normalized": "UArr(a*b)-\u003eUArr b",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unMUAPrim",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MBUArr s e",
        "fct-source": "src/Data-Array-Vector-UArr.html#unMUAPrim",
        "fct-type": "method",
        "title": "unMUAPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unMUAPrim",
        "normalized": "MUArr a b-\u003eMBUArr b a",
        "package": "uvector",
        "partial": "MUAPrim",
        "signature": "MUArr e s-\u003eMBUArr s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unUAPrim",
      "description": {
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e BUArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#unUAPrim",
        "fct-type": "method",
        "title": "unUAPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unUAPrim",
        "normalized": "UArr a-\u003eBUArr a",
        "package": "uvector",
        "partial": "UAPrim",
        "signature": "UArr e-\u003eBUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unitsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield an array of units.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#unitsU",
        "fct-type": "function",
        "title": "unitsU"
      },
      "index": {
        "description": "Yield an array of units",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unitsU",
        "normalized": "Int-\u003eUArr()",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003eUArr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unsafeFreezeAllMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunsafeFreezeAllMU\u003c/a\u003e\u003c/code\u003e converts an entire mutable array into an \n immutable array, without copying. The mutable array must not be mutated \n after this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e ST s (UArr e)",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeFreezeAllMU",
        "fct-type": "function",
        "title": "unsafeFreezeAllMU"
      },
      "index": {
        "description": "unsafeFreezeAllMU converts an entire mutable array into an immutable array without copying The mutable array must not be mutated after this",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unsafeFreezeAllMU",
        "normalized": "MUArr a b-\u003eST b(UArr a)",
        "package": "uvector",
        "partial": "Freeze All MU",
        "signature": "MUArr e s-\u003eST s(UArr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unsafeFreezeMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunsafeFreezeMU\u003c/a\u003e\u003c/code\u003e converts a prefix of a mutable array into an \n immutable unboxed array, without copying. The mutable array must not be \n mutated after this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e ST s (UArr e)",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeFreezeMU",
        "fct-type": "method",
        "title": "unsafeFreezeMU"
      },
      "index": {
        "description": "unsafeFreezeMU converts prefix of mutable array into an immutable unboxed array without copying The mutable array must not be mutated after this",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unsafeFreezeMU",
        "normalized": "MUArr a b-\u003eInt-\u003eST b(UArr a)",
        "package": "uvector",
        "partial": "Freeze MU",
        "signature": "MUArr e s-\u003eInt-\u003eST s(UArr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unsafeUnzipMU",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise unpairing of mutable arrays. This is an unsafe\n operation, as no copying is performed, so changes to the\n unpaired arrays will affect the original, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr (a :*: b) s -\u003e MUArr a s :*: MUArr b s",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeUnzipMU",
        "fct-type": "function",
        "title": "unsafeUnzipMU"
      },
      "index": {
        "description": "Elementwise unpairing of mutable arrays This is an unsafe operation as no copying is performed so changes to the unpaired arrays will affect the original and vice versa",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unsafeUnzipMU",
        "normalized": "MUArr(a*b)c-\u003eMUArr a c*MUArr b c",
        "package": "uvector",
        "partial": "Unzip MU",
        "signature": "MUArr(a*b)s-\u003eMUArr a s*MUArr b s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unsafeZipMU",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise pairing of mutable arrays. This is an unsafe\n operation, as no copying is performed, so changes to the\n pair array will affect the original arrays, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr a s -\u003e MUArr b s -\u003e MUArr (a :*: b) s",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeZipMU",
        "fct-type": "function",
        "title": "unsafeZipMU"
      },
      "index": {
        "description": "Elementwise pairing of mutable arrays This is an unsafe operation as no copying is performed so changes to the pair array will affect the original arrays and vice versa",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unsafeZipMU",
        "normalized": "MUArr a b-\u003eMUArr c b-\u003eMUArr(a*c)b",
        "package": "uvector",
        "partial": "Zip MU",
        "signature": "MUArr a s-\u003eMUArr b s-\u003eMUArr(a*b)s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:unzipU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Elementwise unpairing of array elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr a :*: UArr b",
        "fct-source": "src/Data-Array-Vector-UArr.html#unzipU",
        "fct-type": "function",
        "title": "unzipU"
      },
      "index": {
        "description": "Elementwise unpairing of array elements",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "unzipU",
        "normalized": "UArr(a*b)-\u003eUArr a*UArr b",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr a*UArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:writeMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ewriteMU\u003c/a\u003e\u003c/code\u003e writes a new value to the specified index of a\n mutable unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e e -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#writeMU",
        "fct-type": "method",
        "title": "writeMU"
      },
      "index": {
        "description": "writeMU writes new value to the specified index of mutable unboxed array",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "writeMU",
        "normalized": "MUArr a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003ee-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector-UArr.html#v:zipU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Elementwise pairing of array elements. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B\u003c/em\u003e: The output will be as long as the first array (and will thus \n access past the end of the second array), unlike its List counterpart.\n This will not occur at the time zipU is called, but only after the resulting\n array is accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector.UArr",
        "fct-package": "uvector",
        "fct-signature": "UArr a -\u003e UArr b -\u003e UArr (a :*: b)",
        "fct-source": "src/Data-Array-Vector-UArr.html#zipU",
        "fct-type": "function",
        "title": "zipU"
      },
      "index": {
        "description": "Elementwise pairing of array elements N.B The output will be as long as the first array and will thus access past the end of the second array unlike its List counterpart This will not occur at the time zipU is called but only after the resulting array is accessed",
        "hierarchy": "Data Array Vector UArr",
        "module": "Data.Array.Vector.UArr",
        "name": "zipU",
        "normalized": "UArr a-\u003eUArr b-\u003eUArr(a*b)",
        "package": "uvector",
        "partial": "",
        "signature": "UArr a-\u003eUArr b-\u003eUArr(a*b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe top level interface to operations on strict, non-nested, fusible arrays.\n\u003c/p\u003e\u003cp\u003eNote that the time complexities provided for functions in this package depend\n on fusion. Thus the times given assume that fusion did not occur and that\n the full operation is performed. In some cases fusion can take multiple \u003cem\u003eO(n)\u003c/em\u003e\n operations on UArrs and optimize them out of the generated code completely.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "The top level interface to operations on strict non-nested fusible arrays Note that the time complexities provided for functions in this package depend on fusion Thus the times given assume that fusion did not occur and that the full operation is performed In some cases fusion can take multiple operations on UArrs and optimize them out of the generated code completely",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "uvector",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#t::-42-:",
      "description": {
        "fct-descr": "\u003cp\u003eStrict pair\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#%3A%2A%3A",
        "fct-type": "data",
        "title": ":*:"
      },
      "index": {
        "description": "Strict pair",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": ":*:",
        "normalized": "",
        "package": "uvector",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#t:EitherS",
      "description": {
        "fct-descr": "\u003cp\u003eStrict sum\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#EitherS",
        "fct-type": "data",
        "title": "EitherS"
      },
      "index": {
        "description": "Strict sum",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "EitherS",
        "normalized": "",
        "package": "uvector",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#t:MaybeS",
      "description": {
        "fct-descr": "\u003cp\u003eStrict Maybe\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#MaybeS",
        "fct-type": "data",
        "title": "MaybeS"
      },
      "index": {
        "description": "Strict Maybe",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "MaybeS",
        "normalized": "",
        "package": "uvector",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#t:UA",
      "description": {
        "fct-descr": "\u003cp\u003eThis type class determines the types that can be elements immutable\n unboxed arrays. The representation type of these arrays is defined by way\n of an associated type.  All representation-dependent functions are methods\n of this class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Vector-UArr.html#UA",
        "fct-type": "class",
        "title": "UA"
      },
      "index": {
        "description": "This type class determines the types that can be elements immutable unboxed arrays The representation type of these arrays is defined by way of an associated type All representation-dependent functions are methods of this class",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "UA",
        "normalized": "",
        "package": "uvector",
        "partial": "UA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v::-42-:",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "!a :*: !b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#%3A%2A%3A",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": ":*:",
        "normalized": "",
        "package": "uvector",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:JustS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "JustS !a",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#MaybeS",
        "fct-type": "function",
        "title": "JustS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "JustS",
        "normalized": "",
        "package": "uvector",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:LeftS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "LeftS !a",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#EitherS",
        "fct-type": "function",
        "title": "LeftS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "LeftS",
        "normalized": "",
        "package": "uvector",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:NothingS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "NothingS",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#MaybeS",
        "fct-type": "function",
        "title": "NothingS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "NothingS",
        "normalized": "",
        "package": "uvector",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:RightS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "RightS !b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#EitherS",
        "fct-type": "function",
        "title": "RightS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "RightS",
        "normalized": "",
        "package": "uvector",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:allU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eallU\u003c/a\u003e\u003c/code\u003e p u\u003c/code\u003e determines whether all elements in array \u003ccode\u003eu\u003c/code\u003e satisfy \n predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e Bool) -\u003e UArr e -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#allU",
        "fct-type": "function",
        "title": "allU"
      },
      "index": {
        "description": "allU determines whether all elements in array satisfy predicate",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "allU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "(e-\u003eBool)-\u003eUArr e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:andU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eandU\u003c/a\u003e\u003c/code\u003e yields the conjunction of a boolean array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#andU",
        "fct-type": "function",
        "title": "andU"
      },
      "index": {
        "description": "andU yields the conjunction of boolean array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "andU",
        "normalized": "UArr Bool-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "UArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:anyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eanyU\u003c/a\u003e\u003c/code\u003e p u\u003c/code\u003e determines whether any element in array \u003ccode\u003eu\u003c/code\u003e satisfies\n predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e Bool) -\u003e UArr e -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#anyU",
        "fct-type": "function",
        "title": "anyU"
      },
      "index": {
        "description": "anyU determines whether any element in array satisfies predicate",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "anyU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "(e-\u003eBool)-\u003eUArr e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:appendU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eappendU\u003c/a\u003e\u003c/code\u003e concatenates two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#appendU",
        "fct-type": "function",
        "title": "appendU"
      },
      "index": {
        "description": "appendU concatenates two arrays",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "appendU",
        "normalized": "UArr a-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:atomicUpdateMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatomicUpdateMU\u003c/a\u003e\u003c/code\u003e arr upds\u003c/code\u003e replaces elements at specific indices\n of \u003ccode\u003earr\u003c/code\u003e based on the contents of \u003ccode\u003eupds\u003c/code\u003e (where \u003ccode\u003e\u003ccode\u003efstS\u003c/code\u003e\u003c/code\u003e indicates the index to\n replace, \u003ccode\u003e\u003ccode\u003esndS\u003c/code\u003e\u003c/code\u003e the replacement value).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e UArr (Int :*: e) -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-Strict-Permute.html#atomicUpdateMU",
        "fct-type": "function",
        "title": "atomicUpdateMU"
      },
      "index": {
        "description": "atomicUpdateMU arr upds replaces elements at specific indices of arr based on the contents of upds where fstS indicates the index to replace sndS the replacement value",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "atomicUpdateMU",
        "normalized": "MUArr a b-\u003eUArr(Int*a)-\u003eST b()",
        "package": "uvector",
        "partial": "Update MU",
        "signature": "MUArr e s-\u003eUArr(Int*e)-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:combineU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecombineU\u003c/a\u003e\u003c/code\u003e f a1 a2\u003c/code\u003e yields an array by picking elements from \u003ccode\u003ea1\u003c/code\u003e\n if \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e at the given position, and picking elements from \u003ccode\u003ea2\u003c/code\u003e \n otherwise. For example:\n\u003c/p\u003e\u003cpre\u003ecombineU (toU [True,True,False,True,False,False]) (toU [1..3]) (toU [4..6])\u003c/pre\u003e\u003cp\u003eyields \u003ccode\u003etoU [1.0,2.0,4.0,3.0,5.0,6.0]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr Bool -\u003e UArr a -\u003e UArr a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#combineU",
        "fct-type": "function",
        "title": "combineU"
      },
      "index": {
        "description": "combineU a1 a2 yields an array by picking elements from a1 if is True at the given position and picking elements from a2 otherwise For example combineU toU True True False True False False toU toU yields toU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "combineU",
        "normalized": "UArr Bool-\u003eUArr a-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr Bool-\u003eUArr a-\u003eUArr a-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:concatU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Concatenate a list of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "[UArr e] -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#concatU",
        "fct-type": "function",
        "title": "concatU"
      },
      "index": {
        "description": "Concatenate list of arrays",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "concatU",
        "normalized": "[UArr a]-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "[UArr e]-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:consU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003econsU\u003c/a\u003e\u003c/code\u003e prepends the given element to an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "e -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#consU",
        "fct-type": "function",
        "title": "consU"
      },
      "index": {
        "description": "consU prepends the given element to an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "consU",
        "normalized": "a-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "e-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:copyMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ecopyMU\u003c/a\u003e\u003c/code\u003e copies the contents of an immutable unboxed array into \n a mutable one starting from the specified index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e UArr e -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#copyMU",
        "fct-type": "method",
        "title": "copyMU"
      },
      "index": {
        "description": "copyMU copies the contents of an immutable unboxed array into mutable one starting from the specified index",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "copyMU",
        "normalized": "MUArr a b-\u003eInt-\u003eUArr a-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003eUArr e-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:curryS",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e in regular pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "((a :*: b) -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#curryS",
        "fct-type": "function",
        "title": "curryS"
      },
      "index": {
        "description": "Analogous to curry in regular pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "curryS",
        "normalized": "((a*b)-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "uvector",
        "partial": "",
        "signature": "((a*b)-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:dropU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edropU\u003c/a\u003e\u003c/code\u003e yields the suffix obtained by dropping the given number\n of elements from an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#dropU",
        "fct-type": "function",
        "title": "dropU"
      },
      "index": {
        "description": "dropU yields the suffix obtained by dropping the given number of elements from an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "dropU",
        "normalized": "Int-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:dropWhileU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edropWhileU\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhileU\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e Bool) -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#dropWhileU",
        "fct-type": "function",
        "title": "dropWhileU"
      },
      "index": {
        "description": "dropWhileU xs returns the suffix remaining after takeWhileU xs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "dropWhileU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "While",
        "signature": "(e-\u003eBool)-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:elemU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eelemU\u003c/a\u003e\u003c/code\u003e determines whether the given element is in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "e -\u003e UArr e -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#elemU",
        "fct-type": "function",
        "title": "elemU"
      },
      "index": {
        "description": "elemU determines whether the given element is in an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "elemU",
        "normalized": "a-\u003eUArr a-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "e-\u003eUArr e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:emptyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eemptyU\u003c/a\u003e\u003c/code\u003e yields an empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#emptyU",
        "fct-type": "function",
        "title": "emptyU"
      },
      "index": {
        "description": "emptyU yields an empty array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "emptyU",
        "normalized": "",
        "package": "uvector",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:enumFromStepLenU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumFromStepLenU\u003c/a\u003e\u003c/code\u003e s d n\u003c/code\u003e yields an enumerated array of length \u003ccode\u003en\u003c/code\u003e\n starting from \u003ccode\u003es\u003c/code\u003e with an increment of \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e UArr Int",
        "fct-source": "src/Data-Array-Vector-Strict-Enum.html#enumFromStepLenU",
        "fct-type": "function",
        "title": "enumFromStepLenU"
      },
      "index": {
        "description": "enumFromStepLenU yields an enumerated array of length starting from with an increment of",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "enumFromStepLenU",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eUArr Int",
        "package": "uvector",
        "partial": "From Step Len",
        "signature": "Int-\u003eInt-\u003eInt-\u003eUArr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:enumFromThenToU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eenumFromThenToU\u003c/a\u003e\u003c/code\u003e yields an enumerated array using a specific \n step value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e UArr Int",
        "fct-source": "src/Data-Array-Vector-Strict-Enum.html#enumFromThenToU",
        "fct-type": "function",
        "title": "enumFromThenToU"
      },
      "index": {
        "description": "enumFromThenToU yields an enumerated array using specific step value",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "enumFromThenToU",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eUArr Int",
        "package": "uvector",
        "partial": "From Then To",
        "signature": "Int-\u003eInt-\u003eInt-\u003eUArr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:enumFromToEachU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumFromToEachU\u003c/a\u003e\u003c/code\u003e n u\u003c/code\u003e yields an array by taking each strict pair\n \u003ccode\u003eu\u003c/code\u003e and treating it as a range to generate successive values over. For\n example:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eenumFromToEachU 7 (toU [3 :*: 6, 8 :*: 10])\u003c/code\u003e\n yields \u003ccode\u003etoU [3,4,5,6,8,9,10]\u003c/code\u003e \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B\u003c/em\u003e: This function will allocate \u003ccode\u003en\u003c/code\u003e slots for the output array, and will\n happily overrun its allocated space if the \u003ccode\u003eu\u003c/code\u003e leads it to do so. The caller\n is expected to ensure that \u003ccode\u003en \u003ca\u003e= (sumU . mapU (\\(x :*: y) -\u003c/a\u003e y - x + 1) $ u)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr (Int :*: Int) -\u003e UArr Int",
        "fct-source": "src/Data-Array-Vector-Strict-Enum.html#enumFromToEachU",
        "fct-type": "function",
        "title": "enumFromToEachU"
      },
      "index": {
        "description": "enumFromToEachU yields an array by taking each strict pair and treating it as range to generate successive values over For example enumFromToEachU toU yields toU N.B This function will allocate slots for the output array and will happily overrun its allocated space if the leads it to do so The caller is expected to ensure that sumU mapU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "enumFromToEachU",
        "normalized": "Int-\u003eUArr(Int*Int)-\u003eUArr Int",
        "package": "uvector",
        "partial": "From To Each",
        "signature": "Int-\u003eUArr(Int*Int)-\u003eUArr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:enumFromToFracU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Like \u003ccode\u003e\u003ca\u003eenumFromToU\u003c/a\u003e\u003c/code\u003e, but works on fractional numbers (still \n incrementing by 1 each time).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "a -\u003e a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Enum.html#enumFromToFracU",
        "fct-type": "function",
        "title": "enumFromToFracU"
      },
      "index": {
        "description": "Like enumFromToU but works on fractional numbers still incrementing by each time",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "enumFromToFracU",
        "normalized": "a-\u003ea-\u003eUArr a",
        "package": "uvector",
        "partial": "From To Frac",
        "signature": "a-\u003ea-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:enumFromToU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eenumFromToU\u003c/a\u003e\u003c/code\u003e yields an enumerated array, analogous to \u003ccode\u003e\u003ca\u003eenumFromTo\u003c/a\u003e\u003c/code\u003e,\n but only works on instances of Integral.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "a -\u003e a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Enum.html#enumFromToU",
        "fct-type": "function",
        "title": "enumFromToU"
      },
      "index": {
        "description": "enumFromToU yields an enumerated array analogous to enumFromTo but only works on instances of Integral",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "enumFromToU",
        "normalized": "a-\u003ea-\u003eUArr a",
        "package": "uvector",
        "partial": "From To",
        "signature": "a-\u003ea-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:filterU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efilterU\u003c/a\u003e\u003c/code\u003e extracts all elements from an array that satisfy \n the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e Bool) -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#filterU",
        "fct-type": "function",
        "title": "filterU"
      },
      "index": {
        "description": "filterU extracts all elements from an array that satisfy the given predicate",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "filterU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "(e-\u003eBool)-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:findIndexU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003efindIndexU\u003c/a\u003e\u003c/code\u003e function takes a predicate and an array and returns\n the index of the first element in the array satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e Bool) -\u003e UArr a -\u003e Maybe Int",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#findIndexU",
        "fct-type": "function",
        "title": "findIndexU"
      },
      "index": {
        "description": "fusion The findIndexU function takes predicate and an array and returns the index of the first element in the array satisfying the predicate or Nothing if there is no such element",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "findIndexU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eMaybe Int",
        "package": "uvector",
        "partial": "Index",
        "signature": "(a-\u003eBool)-\u003eUArr a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:findU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003efindU\u003c/a\u003e\u003c/code\u003e function takes a predicate and an array\n and returns the first element in the list matching the predicate, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e Bool) -\u003e UArr a -\u003e Maybe a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#findU",
        "fct-type": "function",
        "title": "findU"
      },
      "index": {
        "description": "fusion The findU function takes predicate and an array and returns the first element in the list matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "findU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eMaybe a",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eUArr a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fold1MaybeU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efold1MaybeU\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003efold1U\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eNothingS\u003c/a\u003e\u003c/code\u003e if the\n input array is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e MaybeS a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#fold1MaybeU",
        "fct-type": "function",
        "title": "fold1MaybeU"
      },
      "index": {
        "description": "fold1MaybeU behaves like fold1U but returns NothingS if the input array is empty",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fold1MaybeU",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eMaybeS a",
        "package": "uvector",
        "partial": "Maybe",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eMaybeS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fold1U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efold1U\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldU\u003c/a\u003e\u003c/code\u003e that requires a non-empty input\n array. Throws an exception if its input array is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#fold1U",
        "fct-type": "function",
        "title": "fold1U"
      },
      "index": {
        "description": "fold1U is variant of foldU that requires non-empty input array Throws an exception if its input array is empty",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fold1U",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldU\u003c/a\u003e\u003c/code\u003e reduces an array using an associative combination function\n and its unit.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UArr a -\u003e a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldU",
        "fct-type": "function",
        "title": "foldU"
      },
      "index": {
        "description": "foldU reduces an array using an associative combination function and its unit",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldU",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldl1MaybeU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl1MaybeU\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003efoldl1U\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eNothingS\u003c/a\u003e\u003c/code\u003e if the\n input array is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e MaybeS a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldl1MaybeU",
        "fct-type": "function",
        "title": "foldl1MaybeU"
      },
      "index": {
        "description": "foldl1MaybeU behaves like foldl1U but returns NothingS if the input array is empty",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldl1MaybeU",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eMaybeS a",
        "package": "uvector",
        "partial": "Maybe",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eMaybeS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldl1U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl1U\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldlU\u003c/a\u003e\u003c/code\u003e that assumes a non-empty input\n array, but requires no starting element. Throws an exception if the input\n array is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldl1U",
        "fct-type": "function",
        "title": "foldl1U"
      },
      "index": {
        "description": "foldl1U is variant of foldlU that assumes non-empty input array but requires no starting element Throws an exception if the input array is empty",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldl1U",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldlU\u003c/a\u003e\u003c/code\u003e reduces an array proceeding from the left.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e UArr a -\u003e b",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldlU",
        "fct-type": "function",
        "title": "foldlU"
      },
      "index": {
        "description": "foldlU reduces an array proceeding from the left",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eUArr b-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eUArr a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldr1U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to a non-empty 'UArr a'.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldr1U",
        "fct-type": "function",
        "title": "foldr1U"
      },
      "index": {
        "description": "variant of foldr that has no starting value argument and thus must be applied to non-empty UArr",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldr1U",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:foldrU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldrU\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a 'UArr a',\n reduces the 'UArr a' using the binary operator, from right to left.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e UArr a -\u003e b",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#foldrU",
        "fct-type": "function",
        "title": "foldrU"
      },
      "index": {
        "description": "foldrU applied to binary operator starting value typically the right-identity of the operator and UArr reduces the UArr using the binary operator from right to left",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "foldrU",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eUArr a-\u003eb",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eUArr a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fromMaybeS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromMaybeS\u003c/a\u003e\u003c/code\u003e n m\u003c/code\u003e returns \u003ccode\u003en\u003c/code\u003e if \u003ccode\u003em\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothingS\u003c/a\u003e\u003c/code\u003e and the value\n wrapped in \u003ccode\u003e\u003ca\u003eJustS\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "a -\u003e MaybeS a -\u003e a",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#fromMaybeS",
        "fct-type": "function",
        "title": "fromMaybeS"
      },
      "index": {
        "description": "fromMaybeS returns if is NothingS and the value wrapped in JustS otherwise",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fromMaybeS",
        "normalized": "a-\u003eMaybeS a-\u003ea",
        "package": "uvector",
        "partial": "Maybe",
        "signature": "a-\u003eMaybeS a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fromU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efromU\u003c/a\u003e\u003c/code\u003e collects the elements of a \u003ccode\u003e\u003ca\u003eUArr\u003c/a\u003e\u003c/code\u003e into a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e [e]",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#fromU",
        "fct-type": "function",
        "title": "fromU"
      },
      "index": {
        "description": "fromU collects the elements of UArr into list",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fromU",
        "normalized": "UArr a-\u003e[a]",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fstS",
      "description": {
        "fct-descr": "\u003cp\u003eAnalog to \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e in regular pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a :*: b) -\u003e a",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#fstS",
        "fct-type": "function",
        "title": "fstS"
      },
      "index": {
        "description": "Analog to fst in regular pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fstS",
        "normalized": "(a*b)-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "(a*b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:fstU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield the first components of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-UArr.html#fstU",
        "fct-type": "function",
        "title": "fstU"
      },
      "index": {
        "description": "Yield the first components of an array of pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "fstU",
        "normalized": "UArr(a*b)-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:headU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eheadU\u003c/a\u003e\u003c/code\u003e yields the first element of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#headU",
        "fct-type": "function",
        "title": "headU"
      },
      "index": {
        "description": "headU yields the first element of an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "headU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:indexU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eindexU\u003c/a\u003e\u003c/code\u003e extracts an element out of an immutable unboxed array.\n\u003c/p\u003e\u003cp\u003eTODO: use indexU, the non-streaming version.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#indexU",
        "fct-type": "function",
        "title": "indexU"
      },
      "index": {
        "description": "indexU extracts an element out of an immutable unboxed array TODO use indexU the non-streaming version",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "indexU",
        "normalized": "UArr a-\u003eInt-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:indexedU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eindexedU\u003c/a\u003e\u003c/code\u003e associates each element of the array with its index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e UArr (Int :*: e)",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#indexedU",
        "fct-type": "function",
        "title": "indexedU"
      },
      "index": {
        "description": "indexedU associates each element of the array with its index",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "indexedU",
        "normalized": "UArr a-\u003eUArr(Int*a)",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr(Int*e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:initU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003einitU\u003c/a\u003e\u003c/code\u003e yields the input array without its last element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#initU",
        "fct-type": "function",
        "title": "initU"
      },
      "index": {
        "description": "initU yields the input array without its last element",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "initU",
        "normalized": "UArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:iterateU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterateU\u003c/a\u003e\u003c/code\u003e n f a\u003c/code\u003e constructs an array of size \u003ccode\u003en\u003c/code\u003e by iteratively \n applying \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#iterateU",
        "fct-type": "function",
        "title": "iterateU"
      },
      "index": {
        "description": "iterateU constructs an array of size by iteratively applying to",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "iterateU",
        "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:lastU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elastU\u003c/a\u003e\u003c/code\u003e yields the last element of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#lastU",
        "fct-type": "function",
        "title": "lastU"
      },
      "index": {
        "description": "lastU yields the last element of an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "lastU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:lengthMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elengthMU\u003c/a\u003e\u003c/code\u003e yields the length of a mutable unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int",
        "fct-source": "src/Data-Array-Vector-UArr.html#lengthMU",
        "fct-type": "method",
        "title": "lengthMU"
      },
      "index": {
        "description": "lengthMU yields the length of mutable unboxed array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "lengthMU",
        "normalized": "MUArr a b-\u003eInt",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:lengthU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elengthU\u003c/a\u003e\u003c/code\u003e returns the length of a \u003ccode\u003e\u003ca\u003eUArr\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#lengthU",
        "fct-type": "function",
        "title": "lengthU"
      },
      "index": {
        "description": "lengthU returns the length of UArr as an Int",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "lengthU",
        "normalized": "UArr a-\u003eInt",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:lookupU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elookupU\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an array\n of pairs treated as an association table.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "a -\u003e UArr (a :*: b) -\u003e Maybe b",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#lookupU",
        "fct-type": "function",
        "title": "lookupU"
      },
      "index": {
        "description": "fusion lookupU key assocs looks up key in an array of pairs treated as an association table",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "lookupU",
        "normalized": "a-\u003eUArr(a*b)-\u003eMaybe b",
        "package": "uvector",
        "partial": "",
        "signature": "a-\u003eUArr(a*b)-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:mapAccumLU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emapAccumLU\u003c/a\u003e\u003c/code\u003e is an accumulating map from left to right. Unlike its\n List counterpart, it does not return the accumulator.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(c -\u003e a -\u003e c :*: b) -\u003e c -\u003e UArr a -\u003e UArr b",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#mapAccumLU",
        "fct-type": "function",
        "title": "mapAccumLU"
      },
      "index": {
        "description": "mapAccumLU is an accumulating map from left to right Unlike its List counterpart it does not return the accumulator",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "mapAccumLU",
        "normalized": "(a-\u003eb-\u003ea*c)-\u003ea-\u003eUArr b-\u003eUArr c",
        "package": "uvector",
        "partial": "Accum LU",
        "signature": "(c-\u003ea-\u003ec*b)-\u003ec-\u003eUArr a-\u003eUArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:mapU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emapU\u003c/a\u003e\u003c/code\u003e maps a function over an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e e') -\u003e UArr e -\u003e UArr e'",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#mapU",
        "fct-type": "function",
        "title": "mapU"
      },
      "index": {
        "description": "mapU maps function over an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "mapU",
        "normalized": "(a-\u003eb)-\u003eUArr a-\u003eUArr b",
        "package": "uvector",
        "partial": "",
        "signature": "(e-\u003ee')-\u003eUArr e-\u003eUArr e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:maximumByU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emaximumByU\u003c/a\u003e\u003c/code\u003e finds the maximum element in an array under the given \n ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#maximumByU",
        "fct-type": "function",
        "title": "maximumByU"
      },
      "index": {
        "description": "maximumByU finds the maximum element in an array under the given ordering",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "maximumByU",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "By",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eUArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:maximumU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emaximumU\u003c/a\u003e\u003c/code\u003e finds the maximum element in an array of orderable \n elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#maximumU",
        "fct-type": "function",
        "title": "maximumU"
      },
      "index": {
        "description": "maximumU finds the maximum element in an array of orderable elements",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "maximumU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:maybeS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003emaybeS\u003c/a\u003e\u003c/code\u003e n f m\u003c/code\u003e is the catamorphism for \u003ccode\u003e\u003ca\u003eMaybeS\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003en\u003c/code\u003e if \n \u003ccode\u003em\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothingS\u003c/a\u003e\u003c/code\u003e, and applying \u003ccode\u003ef\u003c/code\u003e to the value wrapped in \u003ccode\u003e\u003ca\u003eJustS\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e MaybeS a -\u003e b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#maybeS",
        "fct-type": "function",
        "title": "maybeS"
      },
      "index": {
        "description": "maybeS is the catamorphism for MaybeS returning if is NothingS and applying to the value wrapped in JustS otherwise",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "maybeS",
        "normalized": "a-\u003e(b-\u003ea)-\u003eMaybeS b-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eMaybeS a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:memcpyMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memcpyMU",
        "fct-type": "method",
        "title": "memcpyMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "memcpyMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:memcpyOffMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second, beginning at the\n specified offsets for each.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memcpyOffMU",
        "fct-type": "method",
        "title": "memcpyOffMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second beginning at the specified offsets for each",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "memcpyOffMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "Off MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:memmoveOffMU",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a portion of one mutable array to a second, beginning at the\n specified offsets for each. This operation is safe even if the source\n and destination are the same.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#memmoveOffMU",
        "fct-type": "method",
        "title": "memmoveOffMU"
      },
      "index": {
        "description": "Copy portion of one mutable array to second beginning at the specified offsets for each This operation is safe even if the source and destination are the same",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "memmoveOffMU",
        "normalized": "MUArr a b-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
        "package": "uvector",
        "partial": "Off MU",
        "signature": "MUArr e s-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:minimumByU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eminimumByU\u003c/a\u003e\u003c/code\u003e finds the minimum element in an array under the given \n ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#minimumByU",
        "fct-type": "function",
        "title": "minimumByU"
      },
      "index": {
        "description": "minimumByU finds the minimum element in an array under the given ordering",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "minimumByU",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eUArr a-\u003ea",
        "package": "uvector",
        "partial": "By",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eUArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:minimumU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eminimumU\u003c/a\u003e\u003c/code\u003e finds the minimum element in an array of orderable \n elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#minimumU",
        "fct-type": "function",
        "title": "minimumU"
      },
      "index": {
        "description": "minimumU finds the minimum element in an array of orderable elements",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "minimumU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:newMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enewMU\u003c/a\u003e\u003c/code\u003e allocates a mutable unboxed array of the specified length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e ST s (MUArr e s)",
        "fct-source": "src/Data-Array-Vector-UArr.html#newMU",
        "fct-type": "method",
        "title": "newMU"
      },
      "index": {
        "description": "newMU allocates mutable unboxed array of the specified length",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "newMU",
        "normalized": "Int-\u003eST a(MUArr b a)",
        "package": "uvector",
        "partial": "MU",
        "signature": "Int-\u003eST s(MUArr e s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:newU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enewU\u003c/a\u003e\u003c/code\u003e constructs an immutable array of the given size by \n performing the provided initialization function on a mutable representation\n of the output array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (forall s.  MUArr e s -\u003e ST s ()) -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#newU",
        "fct-type": "function",
        "title": "newU"
      },
      "index": {
        "description": "newU constructs an immutable array of the given size by performing the provided initialization function on mutable representation of the output array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "newU",
        "normalized": "Int-\u003e(a b MUArr c d-\u003eST d())-\u003eUArr c",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003e(forall s. MUArr e s-\u003eST s())-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:notElemU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Negation of \u003ccode\u003e\u003ca\u003eelemU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "e -\u003e UArr e -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#notElemU",
        "fct-type": "function",
        "title": "notElemU"
      },
      "index": {
        "description": "Negation of elemU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "notElemU",
        "normalized": "a-\u003eUArr a-\u003eBool",
        "package": "uvector",
        "partial": "Elem",
        "signature": "e-\u003eUArr e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:nullU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enullU\u003c/a\u003e\u003c/code\u003e tests whether the given array is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#nullU",
        "fct-type": "function",
        "title": "nullU"
      },
      "index": {
        "description": "nullU tests whether the given array is empty",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "nullU",
        "normalized": "UArr a-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:orU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eandU\u003c/a\u003e\u003c/code\u003e yields the disjunction of a boolean array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#orU",
        "fct-type": "function",
        "title": "orU"
      },
      "index": {
        "description": "andU yields the disjunction of boolean array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "orU",
        "normalized": "UArr Bool-\u003eBool",
        "package": "uvector",
        "partial": "",
        "signature": "UArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:packU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003epackU\u003c/a\u003e\u003c/code\u003e extracts all elements from an array according to the \n provided flag array. For example:\n\u003c/p\u003e\u003cpre\u003epackU (toU [1..5]) (toU [True,False,False,False,True])\u003c/pre\u003e\u003cp\u003eyields \u003ccode\u003etoU [1.0,5.0]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e UArr Bool -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#packU",
        "fct-type": "function",
        "title": "packU"
      },
      "index": {
        "description": "packU extracts all elements from an array according to the provided flag array For example packU toU toU True False False False True yields toU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "packU",
        "normalized": "UArr a-\u003eUArr Bool-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr Bool-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:pairS",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a pair to a strict pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a, b) -\u003e a :*: b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#pairS",
        "fct-type": "function",
        "title": "pairS"
      },
      "index": {
        "description": "Converts pair to strict pair",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "pairS",
        "normalized": "(a,b)-\u003ea*b",
        "package": "uvector",
        "partial": "",
        "signature": "(a,b)-\u003ea*b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:permuteMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003epermuteMU\u003c/a\u003e\u003c/code\u003e permutes a \u003ccode\u003e\u003ca\u003eMUArr\u003c/a\u003e\u003c/code\u003e according to a UArr of permuted\n indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e UArr e -\u003e UArr Int -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-Strict-Permute.html#permuteMU",
        "fct-type": "function",
        "title": "permuteMU"
      },
      "index": {
        "description": "permuteMU permutes MUArr according to UArr of permuted indices",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "permuteMU",
        "normalized": "MUArr a b-\u003eUArr a-\u003eUArr Int-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eUArr e-\u003eUArr Int-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:productU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eproductU\u003c/a\u003e\u003c/code\u003e computes the product of an array of a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#productU",
        "fct-type": "function",
        "title": "productU"
      },
      "index": {
        "description": "productU computes the product of an array of Num instance",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "productU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:readMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereadMU\u003c/a\u003e\u003c/code\u003e reads the element at the specified index of a mutable \n unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e ST s e",
        "fct-source": "src/Data-Array-Vector-UArr.html#readMU",
        "fct-type": "method",
        "title": "readMU"
      },
      "index": {
        "description": "readMU reads the element at the specified index of mutable unboxed array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "readMU",
        "normalized": "MUArr a b-\u003eInt-\u003eST b a",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003eST s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:repeatU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeatU\u003c/a\u003e\u003c/code\u003e n u\u003c/code\u003e repeats an array \u003ccode\u003eu\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#repeatU",
        "fct-type": "function",
        "title": "repeatU"
      },
      "index": {
        "description": "repeatU repeats an array times",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "repeatU",
        "normalized": "Int-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:replicateEachU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateEachU\u003c/a\u003e\u003c/code\u003e n r e\u003c/code\u003e yields an array such that each element in\n \u003ccode\u003ee\u003c/code\u003e is repeated as many times as the value contained at the corresponding\n index in \u003ccode\u003er\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ereplicateEachU 10 (toU [1..3]) (toU [3..5])\u003c/code\u003e yields \u003ccode\u003etoU [3.0,4.0,4.0,5.0,5.0,5.0]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B\u003c/em\u003e: the \u003ccode\u003en\u003c/code\u003e parameter specifies how many elements are \u003cem\u003eallocated\u003c/em\u003e for the\n output array, but the function will happily overrun the allocated buffer for\n all sorts of interesting effects! The caller is expected to ensure that \n \u003ccode\u003en \u003c= sumU r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr Int -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#replicateEachU",
        "fct-type": "function",
        "title": "replicateEachU"
      },
      "index": {
        "description": "replicateEachU yields an array such that each element in is repeated as many times as the value contained at the corresponding index in For example replicateEachU toU toU yields toU N.B the parameter specifies how many elements are allocated for the output array but the function will happily overrun the allocated buffer for all sorts of interesting effects The caller is expected to ensure that sumU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "replicateEachU",
        "normalized": "Int-\u003eUArr Int-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "Each",
        "signature": "Int-\u003eUArr Int-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:replicateU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateU\u003c/a\u003e\u003c/code\u003e n e\u003c/code\u003e yields an array containing \u003ccode\u003en\u003c/code\u003e repetitions of \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#replicateU",
        "fct-type": "function",
        "title": "replicateU"
      },
      "index": {
        "description": "replicateU yields an array containing repetitions of",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "replicateU",
        "normalized": "Int-\u003ea-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003ee-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:scan1U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escan1U\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e, but requires no starting value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#scan1U",
        "fct-type": "function",
        "title": "scan1U"
      },
      "index": {
        "description": "scan1U is like scanU but requires no starting value",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "scan1U",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:scanResU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanResU\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e, but yields a strict pair with the\n \u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e result as its \u003ccode\u003efstS\u003c/code\u003e and the \u003ca\u003emissing\u003c/a\u003e element (\u003ccode\u003e\u003ca\u003efoldU\u003c/a\u003e\u003c/code\u003e on the same\n arguments) as its \u003ccode\u003esndS\u003c/code\u003e. Compare:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escanl (+) 0.0 [1..5]\u003c/code\u003e gives \u003ccode\u003e[0.0,1.0,3.0,6.0,10.0,15.0]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escanlU (+) 0.0 $ toU [1..5]\u003c/code\u003e gives \u003ccode\u003etoU [0.0,1.0,3.0,6.0,10.0]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escanResU (+) 0.0 $ toU [1..5]\u003c/code\u003e gives \u003ccode\u003etoU [0.0,1.0,3.0,6.0,10.0] :*: 15.0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UArr a -\u003e UArr a :*: a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#scanResU",
        "fct-type": "function",
        "title": "scanResU"
      },
      "index": {
        "description": "scanResU behaves like scanU but yields strict pair with the scanU result as its fstS and the missing element foldU on the same arguments as its sndS Compare scanl gives scanlU toU gives toU scanResU toU gives toU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "scanResU",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003eUArr a*a",
        "package": "uvector",
        "partial": "Res",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003eUArr a*a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:scanU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003efoldU\u003c/a\u003e\u003c/code\u003e on all prefixes (except the array\n itself) of the input array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UArr a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#scanU",
        "fct-type": "function",
        "title": "scanU"
      },
      "index": {
        "description": "scanU is equivalent to foldU on all prefixes except the array itself of the input array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "scanU",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUArr a-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:scanl1U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanl1U\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003escanlU\u003c/a\u003e\u003c/code\u003e, but requires no starting value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UArr a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#scanl1U",
        "fct-type": "function",
        "title": "scanl1U"
      },
      "index": {
        "description": "scanl1U is like scanlU but requires no starting value",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "scanl1U",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eUArr a-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:scanlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanlU\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003efoldlU\u003c/a\u003e\u003c/code\u003e on all prefixes (except the\n array itself) of the input array.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B\u003c/em\u003e: the behavior of this function differs from that of Data.List. Compare:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escanl (+) 0.0 [1..5]\u003c/code\u003e gives \u003ccode\u003e[0.0,1.0,3.0,6.0,10.0,15.0]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escanlU (+) 0.0 $ toU [1..5]\u003c/code\u003e gives \u003ccode\u003etoU [0.0,1.0,3.0,6.0,10.0]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo get behavior closer to the List counterpart, see \u003ccode\u003e\u003ca\u003escanResU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e UArr a -\u003e UArr b",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#scanlU",
        "fct-type": "function",
        "title": "scanlU"
      },
      "index": {
        "description": "scanlU is equivalent to foldlU on all prefixes except the array itself of the input array N.B the behavior of this function differs from that of Data.List Compare scanl gives scanlU toU gives toU To get behavior closer to the List counterpart see scanResU",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "scanlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eUArr b-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eUArr a-\u003eUArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:singletonU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esingletonU\u003c/a\u003e\u003c/code\u003e yields a singleton array containing the given element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#singletonU",
        "fct-type": "function",
        "title": "singletonU"
      },
      "index": {
        "description": "singletonU yields singleton array containing the given element",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "singletonU",
        "normalized": "a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:sliceU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esliceU\u003c/a\u003e\u003c/code\u003e restricts access to a subrange of the original array \n (no copying).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e Int -\u003e Int -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-UArr.html#sliceU",
        "fct-type": "method",
        "title": "sliceU"
      },
      "index": {
        "description": "sliceU restricts access to subrange of the original array no copying",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "sliceU",
        "normalized": "UArr a-\u003eInt-\u003eInt-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eInt-\u003eInt-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:sndS",
      "description": {
        "fct-descr": "\u003cp\u003eAnalog to \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e in regular pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a :*: b) -\u003e b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#sndS",
        "fct-type": "function",
        "title": "sndS"
      },
      "index": {
        "description": "Analog to snd in regular pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "sndS",
        "normalized": "(a*b)-\u003eb",
        "package": "uvector",
        "partial": "",
        "signature": "(a*b)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:sndU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield the second components of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr b",
        "fct-source": "src/Data-Array-Vector-UArr.html#sndU",
        "fct-type": "function",
        "title": "sndU"
      },
      "index": {
        "description": "Yield the second components of an array of pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "sndU",
        "normalized": "UArr(a*b)-\u003eUArr b",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:snocU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esnocU\u003c/a\u003e\u003c/code\u003e appends the given element to an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#snocU",
        "fct-type": "function",
        "title": "snocU"
      },
      "index": {
        "description": "snocU appends the given element to an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "snocU",
        "normalized": "UArr a-\u003ea-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:splitAtU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esplitAtU\u003c/a\u003e\u003c/code\u003e splits an array into two subarrays at the given index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr e -\u003e (UArr e, UArr e)",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#splitAtU",
        "fct-type": "function",
        "title": "splitAtU"
      },
      "index": {
        "description": "splitAtU splits an array into two subarrays at the given index",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "splitAtU",
        "normalized": "Int-\u003eUArr a-\u003e(UArr a,UArr a)",
        "package": "uvector",
        "partial": "At",
        "signature": "Int-\u003eUArr e-\u003e(UArr e,UArr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:streamU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003estreamU\u003c/a\u003e\u003c/code\u003e generates a stream from an array, from left to right.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr a -\u003e Stream a",
        "fct-source": "src/Data-Array-Vector-Strict-Stream.html#streamU",
        "fct-type": "function",
        "title": "streamU"
      },
      "index": {
        "description": "streamU generates stream from an array from left to right",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "streamU",
        "normalized": "UArr a-\u003eStream a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:sumU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esumU\u003c/a\u003e\u003c/code\u003e computes the sum of an array of a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e e",
        "fct-source": "src/Data-Array-Vector-Strict-Sums.html#sumU",
        "fct-type": "function",
        "title": "sumU"
      },
      "index": {
        "description": "sumU computes the sum of an array of Num instance",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "sumU",
        "normalized": "UArr a-\u003ea",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:tailU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etailU\u003c/a\u003e\u003c/code\u003e yields the given array without its initial element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#tailU",
        "fct-type": "function",
        "title": "tailU"
      },
      "index": {
        "description": "tailU yields the given array without its initial element",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "tailU",
        "normalized": "UArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:takeU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etakeU\u003c/a\u003e\u003c/code\u003e yields the prefix of the given length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#takeU",
        "fct-type": "function",
        "title": "takeU"
      },
      "index": {
        "description": "takeU yields the prefix of the given length of an array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "takeU",
        "normalized": "Int-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:takeWhileU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etakeWhileU\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a UArr \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(e -\u003e Bool) -\u003e UArr e -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#takeWhileU",
        "fct-type": "function",
        "title": "takeWhileU"
      },
      "index": {
        "description": "takeWhileU applied to predicate and UArr xs returns the longest prefix possibly empty of xs of elements that satisfy",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "takeWhileU",
        "normalized": "(a-\u003eBool)-\u003eUArr a-\u003eUArr a",
        "package": "uvector",
        "partial": "While",
        "signature": "(e-\u003eBool)-\u003eUArr e-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:toU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etoU\u003c/a\u003e\u003c/code\u003e turns a list into a \u003ccode\u003e\u003ca\u003eUArr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "[e] -\u003e UArr e",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#toU",
        "fct-type": "function",
        "title": "toU"
      },
      "index": {
        "description": "toU turns list into UArr",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "toU",
        "normalized": "[a]-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "[e]-\u003eUArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:uncurryS",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e in regular pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (a :*: b) -\u003e c",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#uncurryS",
        "fct-type": "function",
        "title": "uncurryS"
      },
      "index": {
        "description": "Analogous to uncurry in regular pairs",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "uncurryS",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a*b)-\u003ec",
        "package": "uvector",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(a*b)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unfoldU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunfoldU\u003c/a\u003e\u003c/code\u003e n f z\u003c/code\u003e builds an array of size \u003ccode\u003en\u003c/code\u003e from a seed value\n \u003ccode\u003ez\u003c/code\u003e by iteratively applying \u003ccode\u003ef\u003c/code\u003e, stopping when \u003ccode\u003en\u003c/code\u003e elements have been \n generated or \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothingS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e (b -\u003e MaybeS (a :*: b)) -\u003e b -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#unfoldU",
        "fct-type": "function",
        "title": "unfoldU"
      },
      "index": {
        "description": "unfoldU builds an array of size from seed value by iteratively applying stopping when elements have been generated or returns NothingS",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unfoldU",
        "normalized": "Int-\u003e(a-\u003eMaybeS(b*a))-\u003ea-\u003eUArr b",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003e(b-\u003eMaybeS(a*b))-\u003eb-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unitsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Yield an array of units.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Int -\u003e UArr ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#unitsU",
        "fct-type": "function",
        "title": "unitsU"
      },
      "index": {
        "description": "Yield an array of units",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unitsU",
        "normalized": "Int-\u003eUArr()",
        "package": "uvector",
        "partial": "",
        "signature": "Int-\u003eUArr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unpairS",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a strict pair to a pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a :*: b) -\u003e (a, b)",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#unpairS",
        "fct-type": "function",
        "title": "unpairS"
      },
      "index": {
        "description": "Converts strict pair to pair",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unpairS",
        "normalized": "(a*b)-\u003e(a,b)",
        "package": "uvector",
        "partial": "",
        "signature": "(a*b)-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafeFreezeAllMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunsafeFreezeAllMU\u003c/a\u003e\u003c/code\u003e converts an entire mutable array into an \n immutable array, without copying. The mutable array must not be mutated \n after this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e ST s (UArr e)",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeFreezeAllMU",
        "fct-type": "function",
        "title": "unsafeFreezeAllMU"
      },
      "index": {
        "description": "unsafeFreezeAllMU converts an entire mutable array into an immutable array without copying The mutable array must not be mutated after this",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafeFreezeAllMU",
        "normalized": "MUArr a b-\u003eST b(UArr a)",
        "package": "uvector",
        "partial": "Freeze All MU",
        "signature": "MUArr e s-\u003eST s(UArr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafeFreezeMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunsafeFreezeMU\u003c/a\u003e\u003c/code\u003e converts a prefix of a mutable array into an \n immutable unboxed array, without copying. The mutable array must not be \n mutated after this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e ST s (UArr e)",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeFreezeMU",
        "fct-type": "method",
        "title": "unsafeFreezeMU"
      },
      "index": {
        "description": "unsafeFreezeMU converts prefix of mutable array into an immutable unboxed array without copying The mutable array must not be mutated after this",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafeFreezeMU",
        "normalized": "MUArr a b-\u003eInt-\u003eST b(UArr a)",
        "package": "uvector",
        "partial": "Freeze MU",
        "signature": "MUArr e s-\u003eInt-\u003eST s(UArr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafeUnzipMU",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise unpairing of mutable arrays. This is an unsafe\n operation, as no copying is performed, so changes to the\n unpaired arrays will affect the original, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr (a :*: b) s -\u003e MUArr a s :*: MUArr b s",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeUnzipMU",
        "fct-type": "function",
        "title": "unsafeUnzipMU"
      },
      "index": {
        "description": "Elementwise unpairing of mutable arrays This is an unsafe operation as no copying is performed so changes to the unpaired arrays will affect the original and vice versa",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafeUnzipMU",
        "normalized": "MUArr(a*b)c-\u003eMUArr a c*MUArr b c",
        "package": "uvector",
        "partial": "Unzip MU",
        "signature": "MUArr(a*b)s-\u003eMUArr a s*MUArr b s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafeZipMU",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise pairing of mutable arrays. This is an unsafe\n operation, as no copying is performed, so changes to the\n pair array will affect the original arrays, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr a s -\u003e MUArr b s -\u003e MUArr (a :*: b) s",
        "fct-source": "src/Data-Array-Vector-UArr.html#unsafeZipMU",
        "fct-type": "function",
        "title": "unsafeZipMU"
      },
      "index": {
        "description": "Elementwise pairing of mutable arrays This is an unsafe operation as no copying is performed so changes to the pair array will affect the original arrays and vice versa",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafeZipMU",
        "normalized": "MUArr a b-\u003eMUArr c b-\u003eMUArr(a*c)b",
        "package": "uvector",
        "partial": "Zip MU",
        "signature": "MUArr a s-\u003eMUArr b s-\u003eMUArr(a*b)s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafe_pairS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a, b) -\u003e a :*: b",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#unsafe_pairS",
        "fct-type": "function",
        "title": "unsafe_pairS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafe_pairS",
        "normalized": "(a,b)-\u003ea*b",
        "package": "uvector",
        "partial": "",
        "signature": "(a,b)-\u003ea*b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unsafe_unpairS",
      "description": {
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a :*: b) -\u003e (a, b)",
        "fct-source": "src/Data-Array-Vector-Prim-Hyperstrict.html#unsafe_unpairS",
        "fct-type": "function",
        "title": "unsafe_unpairS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unsafe_unpairS",
        "normalized": "(a*b)-\u003e(a,b)",
        "package": "uvector",
        "partial": "",
        "signature": "(a*b)-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unstreamMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunstreamMU\u003c/a\u003e\u003c/code\u003e fills a mutable array from a stream from left to right\n and yields the number of elements written.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr a s -\u003e Stream a -\u003e ST s Int",
        "fct-source": "src/Data-Array-Vector-Strict-Stream.html#unstreamMU",
        "fct-type": "function",
        "title": "unstreamMU"
      },
      "index": {
        "description": "unstreamMU fills mutable array from stream from left to right and yields the number of elements written",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unstreamMU",
        "normalized": "MUArr a b-\u003eStream a-\u003eST b Int",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr a s-\u003eStream a-\u003eST s Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unstreamU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunstreamU\u003c/a\u003e\u003c/code\u003e creates an array from a stream, filling it from left \n to right.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "Stream a -\u003e UArr a",
        "fct-source": "src/Data-Array-Vector-Strict-Stream.html#unstreamU",
        "fct-type": "function",
        "title": "unstreamU"
      },
      "index": {
        "description": "unstreamU creates an array from stream filling it from left to right",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unstreamU",
        "normalized": "Stream a-\u003eUArr a",
        "package": "uvector",
        "partial": "",
        "signature": "Stream a-\u003eUArr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unzip3U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunzip3U\u003c/a\u003e\u003c/code\u003e unpairs an array of strict triples into three arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr ((e1 :*: e2) :*: e3) -\u003e (UArr e1 :*: UArr e2) :*: UArr e3",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#unzip3U",
        "fct-type": "function",
        "title": "unzip3U"
      },
      "index": {
        "description": "unzip3U unpairs an array of strict triples into three arrays",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unzip3U",
        "normalized": "UArr((a*a)*a)-\u003e(UArr a*UArr a)*UArr a",
        "package": "uvector",
        "partial": "",
        "signature": "UArr((e*e)*e)-\u003e(UArr e*UArr e)*UArr e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:unzipU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Elementwise unpairing of array elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr (a :*: b) -\u003e UArr a :*: UArr b",
        "fct-source": "src/Data-Array-Vector-UArr.html#unzipU",
        "fct-type": "function",
        "title": "unzipU"
      },
      "index": {
        "description": "Elementwise unpairing of array elements",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "unzipU",
        "normalized": "UArr(a*b)-\u003eUArr a*UArr b",
        "package": "uvector",
        "partial": "",
        "signature": "UArr(a*b)-\u003eUArr a*UArr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:writeMU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ewriteMU\u003c/a\u003e\u003c/code\u003e writes a new value to the specified index of a\n mutable unboxed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "MUArr e s -\u003e Int -\u003e e -\u003e ST s ()",
        "fct-source": "src/Data-Array-Vector-UArr.html#writeMU",
        "fct-type": "method",
        "title": "writeMU"
      },
      "index": {
        "description": "writeMU writes new value to the specified index of mutable unboxed array",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "writeMU",
        "normalized": "MUArr a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "uvector",
        "partial": "MU",
        "signature": "MUArr e s-\u003eInt-\u003ee-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:zip3U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezip3U\u003c/a\u003e\u003c/code\u003e takes three arrays and returns an array of triples.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr e1 -\u003e UArr e2 -\u003e UArr e3 -\u003e UArr ((e1 :*: e2) :*: e3)",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#zip3U",
        "fct-type": "function",
        "title": "zip3U"
      },
      "index": {
        "description": "zip3U takes three arrays and returns an array of triples",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "zip3U",
        "normalized": "UArr a-\u003eUArr a-\u003eUArr a-\u003eUArr((a*a)*a)",
        "package": "uvector",
        "partial": "",
        "signature": "UArr e-\u003eUArr e-\u003eUArr e-\u003eUArr((e*e)*e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:zipU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Elementwise pairing of array elements. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B\u003c/em\u003e: The output will be as long as the first array (and will thus \n access past the end of the second array), unlike its List counterpart.\n This will not occur at the time zipU is called, but only after the resulting\n array is accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "UArr a -\u003e UArr b -\u003e UArr (a :*: b)",
        "fct-source": "src/Data-Array-Vector-UArr.html#zipU",
        "fct-type": "function",
        "title": "zipU"
      },
      "index": {
        "description": "Elementwise pairing of array elements N.B The output will be as long as the first array and will thus access past the end of the second array unlike its List counterpart This will not occur at the time zipU is called but only after the resulting array is accessed",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "zipU",
        "normalized": "UArr a-\u003eUArr b-\u003eUArr(a*b)",
        "package": "uvector",
        "partial": "",
        "signature": "UArr a-\u003eUArr b-\u003eUArr(a*b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:zipWith3U",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezipWith3U\u003c/a\u003e\u003c/code\u003e applies a function to corresponding elements of three\n arrays, yielding an array with the results.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e UArr a -\u003e UArr b -\u003e UArr c -\u003e UArr d",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#zipWith3U",
        "fct-type": "function",
        "title": "zipWith3U"
      },
      "index": {
        "description": "zipWith3U applies function to corresponding elements of three arrays yielding an array with the results",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "zipWith3U",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArr a-\u003eUArr b-\u003eUArr c-\u003eUArr d",
        "package": "uvector",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArr a-\u003eUArr b-\u003eUArr c-\u003eUArr d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uvector/docs/Data-Array-Vector.html#v:zipWithU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezipWithU\u003c/a\u003e\u003c/code\u003e applies a function to corresponding elements of two \n arrays, yielding an array containing the results.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Vector",
        "fct-package": "uvector",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e UArr a -\u003e UArr b -\u003e UArr c",
        "fct-source": "src/Data-Array-Vector-Strict-Basics.html#zipWithU",
        "fct-type": "function",
        "title": "zipWithU"
      },
      "index": {
        "description": "zipWithU applies function to corresponding elements of two arrays yielding an array containing the results",
        "hierarchy": "Data Array Vector",
        "module": "Data.Array.Vector",
        "name": "zipWithU",
        "normalized": "(a-\u003eb-\u003ec)-\u003eUArr a-\u003eUArr b-\u003eUArr c",
        "package": "uvector",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eUArr a-\u003eUArr b-\u003eUArr c"
      }
    }
  }
]