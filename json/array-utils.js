[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "Util",
        "normalized": "",
        "package": "array-utils",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateAll",
      "description": {
        "fct-descr": "\u003cp\u003eupdateAll mutates every element in an array while avoiding all bounds checks. Think of it as a mutable version of map. \u003cem\u003eO(size of arr)\u003c/em\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003earr \u003c- newArray (1,10) 0 :: IO (IOArray Int Int)\n\u003c/code\u003e\u003c/strong\u003e    -- Produces a 1 based array with 10 elements all set to 0.\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eupdateAll arr (+ 10)\n\u003c/code\u003e\u003c/strong\u003e    -- Updates all elements to 10\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e e)-\u003e a i e-\u003e m ()",
        "fct-type": "function",
        "title": "updateAll"
      },
      "index": {
        "description": "updateAll mutates every element in an array while avoiding all bounds checks Think of it as mutable version of map size of arr arr newArray IO IOArray Int Int Produces based array with elements all set to updateAll arr Updates all elements to",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateAll",
        "normalized": "(a-\u003ea)-\u003eb c a-\u003ed()",
        "package": "array-utils",
        "partial": "All",
        "signature": "(e-\u003ee)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateAllIx",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as updateAll, but also providing the index to the\n mapping function. \u003cem\u003eO(size of arr)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e e) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateAllIx",
        "fct-type": "function",
        "title": "updateAllIx"
      },
      "index": {
        "description": "The same as updateAll but also providing the index to the mapping function size of arr",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateAllIx",
        "normalized": "(a-\u003eb-\u003eb)-\u003ec a b-\u003ed()",
        "package": "array-utils",
        "partial": "All Ix",
        "signature": "(i-\u003ee-\u003ee)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateAllIxM",
      "description": {
        "fct-descr": "\u003cp\u003eThe same updateAllIx but taking a monadic function. \u003cem\u003eO(size of arr)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e m e) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateAllIxM",
        "fct-type": "function",
        "title": "updateAllIxM"
      },
      "index": {
        "description": "The same updateAllIx but taking monadic function size of arr",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateAllIxM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003ed a b-\u003ec()",
        "package": "array-utils",
        "partial": "All Ix",
        "signature": "(i-\u003ee-\u003em e)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateAllM",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as updateAll but taking a monadic function. \u003cem\u003eO(size of arr)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e m e) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateAllM",
        "fct-type": "function",
        "title": "updateAllM"
      },
      "index": {
        "description": "The same as updateAll but taking monadic function size of arr",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateAllM",
        "normalized": "(a-\u003eb a)-\u003ec d a-\u003eb()",
        "package": "array-utils",
        "partial": "All",
        "signature": "(e-\u003em e)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateOn",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a mapping function, and a list of indicies to mutate.\n\u003c/p\u003e\u003cp\u003eThrows an \u003ccode\u003e\u003ca\u003eIndexOutOfBounds\u003c/a\u003e\u003c/code\u003e exception if any of the indicies are\nout of bounds. In this case the array will be left unmutated.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(length xs)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e e)-\u003e [i]-\u003e a i e-\u003e m ()",
        "fct-type": "function",
        "title": "updateOn"
      },
      "index": {
        "description": "Takes mapping function and list of indicies to mutate Throws an IndexOutOfBounds exception if any of the indicies are out of bounds In this case the array will be left unmutated length xs",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateOn",
        "normalized": "(a-\u003ea)-\u003e[b]-\u003ec b a-\u003ed()",
        "package": "array-utils",
        "partial": "On",
        "signature": "(e-\u003ee)-\u003e[i]-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateOnIx",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e e) -\u003e [i] -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateOnIx",
        "fct-type": "function",
        "title": "updateOnIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateOnIx",
        "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003ec a b-\u003ed()",
        "package": "array-utils",
        "partial": "On Ix",
        "signature": "(i-\u003ee-\u003ee)-\u003e[i]-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateOnIxM",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e m e) -\u003e [i] -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateOnIxM",
        "fct-type": "function",
        "title": "updateOnIxM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateOnIxM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003e[a]-\u003ed a b-\u003ec()",
        "package": "array-utils",
        "partial": "On Ix",
        "signature": "(i-\u003ee-\u003em e)-\u003e[i]-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateOnM",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e m e) -\u003e [i] -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateOnM",
        "fct-type": "function",
        "title": "updateOnM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateOnM",
        "normalized": "(a-\u003eb a)-\u003e[c]-\u003ed c a-\u003eb()",
        "package": "array-utils",
        "partial": "On",
        "signature": "(e-\u003em e)-\u003e[i]-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateSlice",
      "description": {
        "fct-descr": "\u003cp\u003eupdateSlice mutates every element in an array between a start\nindex and an end index. \u003cem\u003eO(size of arr)\u003c/em\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003earr \u003c- newArray (1,10) 0 :: IO (IOArray Int Int)\n\u003c/code\u003e\u003c/strong\u003e    -- Produces a 1 based array with 10 elements all set to 0.\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eupdateSlice arr (2,4) (+ 10)\n\u003c/code\u003e\u003c/strong\u003e    -- Updates elements at indexes 2, 3 and 4 to 10\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e e)-\u003e (i, i)-\u003e a i e-\u003e m ()",
        "fct-type": "function",
        "title": "updateSlice"
      },
      "index": {
        "description": "updateSlice mutates every element in an array between start index and an end index size of arr arr newArray IO IOArray Int Int Produces based array with elements all set to updateSlice arr Updates elements at indexes and to",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateSlice",
        "normalized": "(a-\u003ea)-\u003e(b,b)-\u003ec b a-\u003ed()",
        "package": "array-utils",
        "partial": "Slice",
        "signature": "(e-\u003ee)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateSliceM",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e m e) -\u003e (i, i) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateSliceM",
        "fct-type": "function",
        "title": "updateSliceM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateSliceM",
        "normalized": "(a-\u003eb a)-\u003e(c,c)-\u003ed c a-\u003eb()",
        "package": "array-utils",
        "partial": "Slice",
        "signature": "(e-\u003em e)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateWithin",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an update function \u003ccode\u003ef\u003c/code\u003e and a tuple of indicies '(start, finish)',\nand applies the function to all elements returned by 'range (start, finish)'.\n\u003c/p\u003e\u003cp\u003eIf this is a 2D array, then the area updated will be the box bounded by these elements,\nand the rectangular prism area for a 3D array etc.\n\u003c/p\u003e\u003cp\u003eThrows an \u003ccode\u003e\u003ca\u003eIndexOutOfBounds\u003c/a\u003e\u003c/code\u003e exception if either of the indicies are out of bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e e)-\u003e (i, i)-\u003e a i e-\u003e m ()",
        "fct-type": "function",
        "title": "updateWithin"
      },
      "index": {
        "description": "Takes an update function and tuple of indicies start finish and applies the function to all elements returned by range start finish If this is array then the area updated will be the box bounded by these elements and the rectangular prism area for array etc Throws an IndexOutOfBounds exception if either of the indicies are out of bounds",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateWithin",
        "normalized": "(a-\u003ea)-\u003e(b,b)-\u003ec b a-\u003ed()",
        "package": "array-utils",
        "partial": "Within",
        "signature": "(e-\u003ee)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateWithinIx",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e e) -\u003e (i, i) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateWithinIx",
        "fct-type": "function",
        "title": "updateWithinIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateWithinIx",
        "normalized": "(a-\u003eb-\u003eb)-\u003e(a,a)-\u003ec a b-\u003ed()",
        "package": "array-utils",
        "partial": "Within Ix",
        "signature": "(i-\u003ee-\u003ee)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateWithinIxM",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(i -\u003e e -\u003e m e) -\u003e (i, i) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateWithinIxM",
        "fct-type": "function",
        "title": "updateWithinIxM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateWithinIxM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003e(a,a)-\u003ed a b-\u003ec()",
        "package": "array-utils",
        "partial": "Within Ix",
        "signature": "(i-\u003ee-\u003em e)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-utils/docs/Data-Array-Util.html#v:updateWithinM",
      "description": {
        "fct-module": "Data.Array.Util",
        "fct-package": "array-utils",
        "fct-signature": "(e -\u003e m e) -\u003e (i, i) -\u003e a i e -\u003e m ()",
        "fct-source": "src/Data-Array-Util.html#updateWithinM",
        "fct-type": "function",
        "title": "updateWithinM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Util",
        "module": "Data.Array.Util",
        "name": "updateWithinM",
        "normalized": "(a-\u003eb a)-\u003e(c,c)-\u003ed c a-\u003eb()",
        "package": "array-utils",
        "partial": "Within",
        "signature": "(e-\u003em e)-\u003e(i,i)-\u003ea i e-\u003em()"
      }
    }
  }
]