[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "module",
        "fct-source": "src/Data-Numbering.html",
        "fct-type": "module",
        "title": "Numbering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "Numbering",
        "normalized": "",
        "package": "numbering",
        "partial": "Numbering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#t:Numbering",
      "description": {
        "fct-descr": "\u003cp\u003eInvariant: \n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e - 1, \n     \u003ccode\u003e\u003ca\u003etoInt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e i) == i \n\u003c/pre\u003e\u003cp\u003eThis implies that \n\u003c/p\u003e\u003cpre\u003e\n For all a of the form \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e i (with i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e - 1), \n     \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoInt\u003c/a\u003e\u003c/code\u003e a) = a\n\u003c/pre\u003e\u003cp\u003eThe behaviour of \u003ccode\u003efromInt\u003c/code\u003e for out-of-bounds indices and that of \u003ccode\u003etoInt\u003c/code\u003e for elements not occuring in the numbering is undefined. \n\u003c/p\u003e\u003cp\u003eThus, assuming the invariant holds, \u003ccode\u003etoInt\u003c/code\u003e is uniquely determined by \u003ccode\u003efromInt\u003c/code\u003e (on valid inputs).\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "data",
        "fct-source": "src/Data-Numbering.html#Numbering",
        "fct-type": "data",
        "title": "Numbering"
      },
      "index": {
        "description": "Invariant For all in nuLength toInt fromInt This implies that For all of the form fromInt with in nuLength fromInt toInt The behaviour of fromInt for out-of-bounds indices and that of toInt for elements not occuring in the numbering is undefined Thus assuming the invariant holds toInt is uniquely determined by fromInt on valid inputs",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "Numbering",
        "normalized": "",
        "package": "numbering",
        "partial": "Numbering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#t:NumberingBrokenInvariantException",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "data",
        "fct-source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
        "fct-type": "data",
        "title": "NumberingBrokenInvariantException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "NumberingBrokenInvariantException",
        "normalized": "",
        "package": "numbering",
        "partial": "Numbering Broken Invariant Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:NumberingBrokenInvariantException",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "NumberingBrokenInvariantException",
        "fct-source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
        "fct-type": "function",
        "title": "NumberingBrokenInvariantException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "NumberingBrokenInvariantException",
        "normalized": "",
        "package": "numbering",
        "partial": "Numbering Broken Invariant Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:UnsafeMkNumbering",
      "description": {
        "fct-descr": "\u003cp\u003e\"Unsafe\" because the invariant isn't checked.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "UnsafeMkNumbering",
        "fct-source": "src/Data-Numbering.html#Numbering",
        "fct-type": "function",
        "title": "UnsafeMkNumbering"
      },
      "index": {
        "description": "Unsafe because the invariant isn checked",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "UnsafeMkNumbering",
        "normalized": "",
        "package": "numbering",
        "partial": "Unsafe Mk Numbering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:checkNu",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Either (NumberingBrokenInvariantException a) ()",
        "fct-source": "src/Data-Numbering.html#checkNu",
        "fct-type": "function",
        "title": "checkNu"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "checkNu",
        "normalized": "Numbering a-\u003eEither(NumberingBrokenInvariantException a)()",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Numbering a-\u003eEither(NumberingBrokenInvariantException a)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:consolidateNu",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (for in-bounds inputs), but backs the numbering with a new vector and map having just the required length (example: \u003ccode\u003econsolidateNu (\u003ccode\u003e\u003ca\u003enuTake\u003c/a\u003e\u003c/code\u003e 1 (\u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e largeVector))\u003c/code\u003e). \n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#consolidateNu",
        "fct-type": "function",
        "title": "consolidateNu"
      },
      "index": {
        "description": "Semantic id for in-bounds inputs but backs the numbering with new vector and map having just the required length example consolidateNu nuTake nuFromDistinctVector largeVector",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "consolidateNu",
        "normalized": "Numbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Numbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:consolidateUnboxNu",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econsolidateNu\u003c/a\u003e\u003c/code\u003e, but uses unboxed vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#consolidateUnboxNu",
        "fct-type": "function",
        "title": "consolidateUnboxNu"
      },
      "index": {
        "description": "Like consolidateNu but uses unboxed vectors",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "consolidateUnboxNu",
        "normalized": "Numbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Unbox Nu",
        "signature": "Numbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:eitherNu",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Numbering b -\u003e Numbering (Either a b)",
        "fct-source": "src/Data-Numbering.html#eitherNu",
        "fct-type": "function",
        "title": "eitherNu"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "eitherNu",
        "normalized": "Numbering a-\u003eNumbering b-\u003eNumbering(Either a b)",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Numbering a-\u003eNumbering b-\u003eNumbering(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:emptyNu",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a",
        "fct-source": "src/Data-Numbering.html#emptyNu",
        "fct-type": "function",
        "title": "emptyNu"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "emptyNu",
        "normalized": "",
        "package": "numbering",
        "partial": "Nu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:enumNu",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eenumNu a b\u003c/code\u003e creates a numbering of the elements \u003ccode\u003e[a .. b]\u003c/code\u003e (inclusively). \n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "a -\u003e a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#enumNu",
        "fct-type": "function",
        "title": "enumNu"
      },
      "index": {
        "description": "enumNu creates numbering of the elements inclusively",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "enumNu",
        "normalized": "a-\u003ea-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "a-\u003ea-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:enumNu-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eenumNu' i j\u003c/code\u003e creates a numbering of the elements \u003ccode\u003e[toEnum i .. toEnum j]\u003c/code\u003e (inclusively). \n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int -\u003e Int -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#enumNu%27",
        "fct-type": "function",
        "title": "enumNu'"
      },
      "index": {
        "description": "enumNu creates numbering of the elements toEnum toEnum inclusively",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "enumNu'",
        "normalized": "Int-\u003eInt-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu'",
        "signature": "Int-\u003eInt-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:finiteTypeNu",
      "description": {
        "fct-descr": "\u003cp\u003eNumbering of all elements of a finite type.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a",
        "fct-source": "src/Data-Numbering.html#finiteTypeNu",
        "fct-type": "function",
        "title": "finiteTypeNu"
      },
      "index": {
        "description": "Numbering of all elements of finite type",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "finiteTypeNu",
        "normalized": "",
        "package": "numbering",
        "partial": "Type Nu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:fromInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int -\u003e a",
        "fct-source": "src/Data-Numbering.html#Numbering",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "fromInt",
        "normalized": "Int-\u003ea",
        "package": "numbering",
        "partial": "Int",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:idNu",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity numbering\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int-\u003e Numbering Int",
        "fct-type": "function",
        "title": "idNu"
      },
      "index": {
        "description": "Identity numbering",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "idNu",
        "normalized": "Int-\u003eNumbering Int",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Int-\u003eNumbering Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:mapNu",
      "description": {
        "fct-descr": "\u003cp\u003eIn \u003ccode\u003emapNu f g nu\u003c/code\u003e, the arguments must satisfy\n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e nu - 1, \n     (g . f) a == a\n          where\n              a = \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e nu i\n\u003c/pre\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Numbering a -\u003e Numbering b",
        "fct-source": "src/Data-Numbering.html#mapNu",
        "fct-type": "function",
        "title": "mapNu"
      },
      "index": {
        "description": "In mapNu nu the arguments must satisfy For all in nuLength nu where fromInt nu",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "mapNu",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eNumbering a-\u003eNumbering b",
        "package": "numbering",
        "partial": "Nu",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eNumbering a-\u003eNumbering b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_fromIntOfIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "a",
        "fct-source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
        "fct-type": "function",
        "title": "nbie_fromIntOfIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nbie_fromIntOfIndex",
        "normalized": "",
        "package": "numbering",
        "partial": "Int Of Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_index",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int",
        "fct-source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
        "fct-type": "function",
        "title": "nbie_index"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nbie_index",
        "normalized": "",
        "package": "numbering",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_toIntOfFromIntOfIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int",
        "fct-source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
        "fct-type": "function",
        "title": "nbie_toIntOfFromIntOfIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nbie_toIntOfFromIntOfIndex",
        "normalized": "",
        "package": "numbering",
        "partial": "Int Of From Int Of Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuDrop",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity for nonpositive arg.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int -\u003e Numbering a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuDrop",
        "fct-type": "function",
        "title": "nuDrop"
      },
      "index": {
        "description": "Identity for nonpositive arg",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuDrop",
        "normalized": "Int-\u003eNumbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Drop",
        "signature": "Int-\u003eNumbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuElements",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e [a]",
        "fct-source": "src/Data-Numbering.html#nuElements",
        "fct-type": "function",
        "title": "nuElements"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuElements",
        "normalized": "Numbering a-\u003e[a]",
        "package": "numbering",
        "partial": "Elements",
        "signature": "Numbering a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctIntList",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[Int] -\u003e Numbering Int",
        "fct-source": "src/Data-Numbering.html#nuFromDistinctIntList",
        "fct-type": "function",
        "title": "nuFromDistinctIntList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromDistinctIntList",
        "normalized": "[Int]-\u003eNumbering Int",
        "package": "numbering",
        "partial": "From Distinct Int List",
        "signature": "[Int]-\u003eNumbering Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctList",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[a] -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuFromDistinctList",
        "fct-type": "function",
        "title": "nuFromDistinctList"
      },
      "index": {
        "description": "See nuFromDistinctVector",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromDistinctList",
        "normalized": "[a]-\u003eNumbering a",
        "package": "numbering",
        "partial": "From Distinct List",
        "signature": "[a]-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctUnboxList",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[a] -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuFromDistinctUnboxList",
        "fct-type": "function",
        "title": "nuFromDistinctUnboxList"
      },
      "index": {
        "description": "See nuFromDistinctVector",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromDistinctUnboxList",
        "normalized": "[a]-\u003eNumbering a",
        "package": "numbering",
        "partial": "From Distinct Unbox List",
        "signature": "[a]-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctVector",
      "description": {
        "fct-descr": "\u003cp\u003eThe distinctness precondition is checked (we have to create a map anyway).\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "v a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuFromDistinctVector",
        "fct-type": "function",
        "title": "nuFromDistinctVector"
      },
      "index": {
        "description": "The distinctness precondition is checked we have to create map anyway",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromDistinctVector",
        "normalized": "a b-\u003eNumbering b",
        "package": "numbering",
        "partial": "From Distinct Vector",
        "signature": "v a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctVectorG",
      "description": {
        "fct-descr": "\u003cp\u003eAllows customization of the map type used.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "map-\u003e ((a -\u003e Int -\u003e Int -\u003e t) -\u003e a -\u003e Int -\u003e map -\u003e map)-\u003e (a -\u003e map -\u003e Maybe Int)-\u003e v a-\u003e Numbering a",
        "fct-type": "function",
        "title": "nuFromDistinctVectorG"
      },
      "index": {
        "description": "Allows customization of the map type used",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromDistinctVectorG",
        "normalized": "a-\u003e((b-\u003eInt-\u003eInt-\u003ec)-\u003eb-\u003eInt-\u003ea-\u003ea)-\u003e(b-\u003ea-\u003eMaybe Int)-\u003ed b-\u003eNumbering b",
        "package": "numbering",
        "partial": "From Distinct Vector",
        "signature": "map-\u003e((a-\u003eInt-\u003eInt-\u003et)-\u003ea-\u003eInt-\u003emap-\u003emap)-\u003e(a-\u003emap-\u003eMaybe Int)-\u003ev a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromIntList",
      "description": {
        "fct-descr": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[Int] -\u003e Numbering Int",
        "fct-source": "src/Data-Numbering.html#nuFromIntList",
        "fct-type": "function",
        "title": "nuFromIntList"
      },
      "index": {
        "description": "Uniquifies the input first resulting in an unspecified order",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromIntList",
        "normalized": "[Int]-\u003eNumbering Int",
        "package": "numbering",
        "partial": "From Int List",
        "signature": "[Int]-\u003eNumbering Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromList",
      "description": {
        "fct-descr": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[a] -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuFromList",
        "fct-type": "function",
        "title": "nuFromList"
      },
      "index": {
        "description": "Uniquifies the input first resulting in an unspecified order",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromList",
        "normalized": "[a]-\u003eNumbering a",
        "package": "numbering",
        "partial": "From List",
        "signature": "[a]-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromSet",
      "description": {
        "fct-descr": "\u003cp\u003e(Uses a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e because \u003ca\u003eData.Set\u003c/a\u003e doesn't expose the necessary index-based API)\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Map Int ignored -\u003e Numbering Int",
        "fct-source": "src/Data-Numbering.html#nuFromSet",
        "fct-type": "function",
        "title": "nuFromSet"
      },
      "index": {
        "description": "Uses Map because Data.Set doesn expose the necessary index-based API",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromSet",
        "normalized": "Map Int a-\u003eNumbering Int",
        "package": "numbering",
        "partial": "From Set",
        "signature": "Map Int ignored-\u003eNumbering Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromUnboxList",
      "description": {
        "fct-descr": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "[a] -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuFromUnboxList",
        "fct-type": "function",
        "title": "nuFromUnboxList"
      },
      "index": {
        "description": "Uniquifies the input first resulting in an unspecified order",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuFromUnboxList",
        "normalized": "[a]-\u003eNumbering a",
        "package": "numbering",
        "partial": "From Unbox List",
        "signature": "[a]-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuIndices",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e [Int]",
        "fct-source": "src/Data-Numbering.html#nuIndices",
        "fct-type": "function",
        "title": "nuIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuIndices",
        "normalized": "Numbering a-\u003e[Int]",
        "package": "numbering",
        "partial": "Indices",
        "signature": "Numbering a-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int",
        "fct-source": "src/Data-Numbering.html#Numbering",
        "fct-type": "function",
        "title": "nuLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuLength",
        "normalized": "",
        "package": "numbering",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuTake",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int -\u003e Numbering a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#nuTake",
        "fct-type": "function",
        "title": "nuTake"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuTake",
        "normalized": "Int-\u003eNumbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Take",
        "signature": "Int-\u003eNumbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToDistinctList",
      "description": {
        "fct-descr": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuElements\u003c/a\u003e\u003c/code\u003e. Won't actually be distinct if the invariant is broken.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e [a]",
        "fct-source": "src/Data-Numbering.html#nuToDistinctList",
        "fct-type": "function",
        "title": "nuToDistinctList"
      },
      "index": {
        "description": "nuElements Won actually be distinct if the invariant is broken",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuToDistinctList",
        "normalized": "Numbering a-\u003e[a]",
        "package": "numbering",
        "partial": "To Distinct List",
        "signature": "Numbering a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToDistinctVector",
      "description": {
        "fct-descr": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuToVector\u003c/a\u003e\u003c/code\u003e. Won't actually be distinct if the invariant is broken.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e v a",
        "fct-source": "src/Data-Numbering.html#nuToDistinctVector",
        "fct-type": "function",
        "title": "nuToDistinctVector"
      },
      "index": {
        "description": "nuToVector Won actually be distinct if the invariant is broken",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuToDistinctVector",
        "normalized": "Numbering a-\u003eb a",
        "package": "numbering",
        "partial": "To Distinct Vector",
        "signature": "Numbering a-\u003ev a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToList",
      "description": {
        "fct-descr": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuElements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e [a]",
        "fct-source": "src/Data-Numbering.html#nuToList",
        "fct-type": "function",
        "title": "nuToList"
      },
      "index": {
        "description": "nuElements",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuToList",
        "normalized": "Numbering a-\u003e[a]",
        "package": "numbering",
        "partial": "To List",
        "signature": "Numbering a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToVector",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e v a",
        "fct-source": "src/Data-Numbering.html#nuToVector",
        "fct-type": "function",
        "title": "nuToVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "nuToVector",
        "normalized": "Numbering a-\u003eb a",
        "package": "numbering",
        "partial": "To Vector",
        "signature": "Numbering a-\u003ev a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:pairNu",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Numbering b -\u003e Numbering (a, b)",
        "fct-source": "src/Data-Numbering.html#pairNu",
        "fct-type": "function",
        "title": "pairNu"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "pairNu",
        "normalized": "Numbering a-\u003eNumbering b-\u003eNumbering(a,b)",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Numbering a-\u003eNumbering b-\u003eNumbering(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:prodNu",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a numbering for an pair-like type, given numberings for the component types.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "(a -\u003e a2)-\u003e (a -\u003e a1)-\u003e (a2 -\u003e a1 -\u003e a)-\u003e Numbering a2-\u003e Numbering a1-\u003e Numbering a",
        "fct-type": "function",
        "title": "prodNu"
      },
      "index": {
        "description": "Creates numbering for an pair-like type given numberings for the component types",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "prodNu",
        "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:reindexNu",
      "description": {
        "fct-descr": "\u003cp\u003eIn \u003ccode\u003ereindexNu k f g nu\u003c/code\u003e, the arguments must satisfy\n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. k,\n     (g . f) i == i\n\u003c/pre\u003e\u003cp\u003eNote: Decreasing the length with this function will \u003cem\u003enot\u003c/em\u003e release any memory retained\n by the closures in the input numbering (e.g. the vector, for numberings created by \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e). Use \u003ccode\u003e\u003ca\u003econsolidateNu\u003c/a\u003e\u003c/code\u003e afterwards for that.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Int-\u003e (Int -\u003e Int)-\u003e (Int -\u003e Int)-\u003e Numbering a-\u003e Numbering a",
        "fct-type": "function",
        "title": "reindexNu"
      },
      "index": {
        "description": "In reindexNu nu the arguments must satisfy For all in Note Decreasing the length with this function will not release any memory retained by the closures in the input numbering e.g the vector for numberings created by nuFromDistinctVector Use consolidateNu afterwards for that",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "reindexNu",
        "normalized": "Int-\u003e(Int-\u003eInt)-\u003e(Int-\u003eInt)-\u003eNumbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Int-\u003e(Int-\u003eInt)-\u003e(Int-\u003eInt)-\u003eNumbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:reverseNu",
      "description": {
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "Numbering a -\u003e Numbering a",
        "fct-source": "src/Data-Numbering.html#reverseNu",
        "fct-type": "function",
        "title": "reverseNu"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "reverseNu",
        "normalized": "Numbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "Numbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:sumNu",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a numbering for an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e-like type, given numberings for the summand types.\n\u003c/p\u003e",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "(a1 -\u003e a)-\u003e (a2 -\u003e a)-\u003e ((a1 -\u003e Int) -\u003e (a2 -\u003e Int) -\u003e a -\u003e Int)-\u003e Numbering a1-\u003e Numbering a2-\u003e Numbering a",
        "fct-type": "function",
        "title": "sumNu"
      },
      "index": {
        "description": "Creates numbering for an Either like type given numberings for the summand types",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "sumNu",
        "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e((a-\u003eInt)-\u003e(a-\u003eInt)-\u003ea-\u003eInt)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
        "package": "numbering",
        "partial": "Nu",
        "signature": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e((a-\u003eInt)-\u003e(a-\u003eInt)-\u003ea-\u003eInt)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:toInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Numbering",
        "fct-package": "numbering",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Numbering.html#Numbering",
        "fct-type": "function",
        "title": "toInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Numbering",
        "module": "Data.Numbering",
        "name": "toInt",
        "normalized": "a-\u003eInt",
        "package": "numbering",
        "partial": "Int",
        "signature": "a-\u003eInt"
      }
    }
  }
]