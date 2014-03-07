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
        "word": "numbering"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "Numbering",
          "package": "numbering",
          "source": "src/Data-Numbering.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "Numbering",
          "package": "numbering",
          "partial": "Numbering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvariant: \n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e - 1, \n     \u003ccode\u003e\u003ca\u003etoInt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e i) == i \n\u003c/pre\u003e\u003cp\u003eThis implies that \n\u003c/p\u003e\u003cpre\u003e\n For all a of the form \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e i (with i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e - 1), \n     \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoInt\u003c/a\u003e\u003c/code\u003e a) = a\n\u003c/pre\u003e\u003cp\u003eThe behaviour of \u003ccode\u003efromInt\u003c/code\u003e for out-of-bounds indices and that of \u003ccode\u003etoInt\u003c/code\u003e for elements not occuring in the numbering is undefined. \n\u003c/p\u003e\u003cp\u003eThus, assuming the invariant holds, \u003ccode\u003etoInt\u003c/code\u003e is uniquely determined by \u003ccode\u003efromInt\u003c/code\u003e (on valid inputs).\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "Numbering",
          "package": "numbering",
          "source": "src/Data-Numbering.html#Numbering",
          "type": "data"
        },
        "index": {
          "description": "Invariant For all in nuLength toInt fromInt This implies that For all of the form fromInt with in nuLength fromInt toInt The behaviour of fromInt for out-of-bounds indices and that of toInt for elements not occuring in the numbering is undefined Thus assuming the invariant holds toInt is uniquely determined by fromInt on valid inputs",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "Numbering",
          "package": "numbering",
          "partial": "Numbering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#t:Numbering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "NumberingBrokenInvariantException",
          "package": "numbering",
          "source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "NumberingBrokenInvariantException",
          "package": "numbering",
          "partial": "Numbering Broken Invariant Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#t:NumberingBrokenInvariantException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "NumberingBrokenInvariantException",
          "package": "numbering",
          "signature": "NumberingBrokenInvariantException",
          "source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "NumberingBrokenInvariantException",
          "package": "numbering",
          "partial": "Numbering Broken Invariant Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:NumberingBrokenInvariantException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Unsafe\" because the invariant isn't checked.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "UnsafeMkNumbering",
          "package": "numbering",
          "signature": "UnsafeMkNumbering",
          "source": "src/Data-Numbering.html#Numbering",
          "type": "function"
        },
        "index": {
          "description": "Unsafe because the invariant isn checked",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "UnsafeMkNumbering",
          "package": "numbering",
          "partial": "Unsafe Mk Numbering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:UnsafeMkNumbering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "checkNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Either (NumberingBrokenInvariantException a) ()",
          "source": "src/Data-Numbering.html#checkNu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "checkNu",
          "normalized": "Numbering a-\u003eEither(NumberingBrokenInvariantException a)()",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Numbering a-\u003eEither(NumberingBrokenInvariantException a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:checkNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantic \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (for in-bounds inputs), but backs the numbering with a new vector and map having just the required length (example: \u003ccode\u003econsolidateNu (\u003ccode\u003e\u003ca\u003enuTake\u003c/a\u003e\u003c/code\u003e 1 (\u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e largeVector))\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "consolidateNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#consolidateNu",
          "type": "function"
        },
        "index": {
          "description": "Semantic id for in-bounds inputs but backs the numbering with new vector and map having just the required length example consolidateNu nuTake nuFromDistinctVector largeVector",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "consolidateNu",
          "normalized": "Numbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Numbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:consolidateNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econsolidateNu\u003c/a\u003e\u003c/code\u003e, but uses unboxed vectors.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "consolidateUnboxNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#consolidateUnboxNu",
          "type": "function"
        },
        "index": {
          "description": "Like consolidateNu but uses unboxed vectors",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "consolidateUnboxNu",
          "normalized": "Numbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Unbox Nu",
          "signature": "Numbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:consolidateUnboxNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "eitherNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Numbering b -\u003e Numbering (Either a b)",
          "source": "src/Data-Numbering.html#eitherNu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "eitherNu",
          "normalized": "Numbering a-\u003eNumbering b-\u003eNumbering(Either a b)",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Numbering a-\u003eNumbering b-\u003eNumbering(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:eitherNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "emptyNu",
          "package": "numbering",
          "signature": "Numbering a",
          "source": "src/Data-Numbering.html#emptyNu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "emptyNu",
          "package": "numbering",
          "partial": "Nu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:emptyNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumNu a b\u003c/code\u003e creates a numbering of the elements \u003ccode\u003e[a .. b]\u003c/code\u003e (inclusively). \n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "enumNu",
          "package": "numbering",
          "signature": "a -\u003e a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#enumNu",
          "type": "function"
        },
        "index": {
          "description": "enumNu creates numbering of the elements inclusively",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "enumNu",
          "normalized": "a-\u003ea-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "a-\u003ea-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:enumNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumNu' i j\u003c/code\u003e creates a numbering of the elements \u003ccode\u003e[toEnum i .. toEnum j]\u003c/code\u003e (inclusively). \n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "enumNu'",
          "package": "numbering",
          "signature": "Int -\u003e Int -\u003e Numbering a",
          "source": "src/Data-Numbering.html#enumNu%27",
          "type": "function"
        },
        "index": {
          "description": "enumNu creates numbering of the elements toEnum toEnum inclusively",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "enumNu'",
          "normalized": "Int-\u003eInt-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu'",
          "signature": "Int-\u003eInt-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:enumNu-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumbering of all elements of a finite type.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "finiteTypeNu",
          "package": "numbering",
          "signature": "Numbering a",
          "source": "src/Data-Numbering.html#finiteTypeNu",
          "type": "function"
        },
        "index": {
          "description": "Numbering of all elements of finite type",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "finiteTypeNu",
          "package": "numbering",
          "partial": "Type Nu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:finiteTypeNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "fromInt",
          "package": "numbering",
          "signature": "Int -\u003e a",
          "source": "src/Data-Numbering.html#Numbering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "fromInt",
          "normalized": "Int-\u003ea",
          "package": "numbering",
          "partial": "Int",
          "signature": "Int-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity numbering\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "idNu",
          "package": "numbering",
          "signature": "Int-\u003e Numbering Int",
          "type": "function"
        },
        "index": {
          "description": "Identity numbering",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "idNu",
          "normalized": "Int-\u003eNumbering Int",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Int-\u003eNumbering Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:idNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003emapNu f g nu\u003c/code\u003e, the arguments must satisfy\n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. \u003ccode\u003e\u003ca\u003enuLength\u003c/a\u003e\u003c/code\u003e nu - 1, \n     (g . f) a == a\n          where\n              a = \u003ccode\u003e\u003ca\u003efromInt\u003c/a\u003e\u003c/code\u003e nu i\n\u003c/pre\u003e",
          "module": "Data.Numbering",
          "name": "mapNu",
          "package": "numbering",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Numbering a -\u003e Numbering b",
          "source": "src/Data-Numbering.html#mapNu",
          "type": "function"
        },
        "index": {
          "description": "In mapNu nu the arguments must satisfy For all in nuLength nu where fromInt nu",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "mapNu",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eNumbering a-\u003eNumbering b",
          "package": "numbering",
          "partial": "Nu",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eNumbering a-\u003eNumbering b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:mapNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nbie_fromIntOfIndex",
          "package": "numbering",
          "signature": "a",
          "source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nbie_fromIntOfIndex",
          "package": "numbering",
          "partial": "Int Of Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_fromIntOfIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nbie_index",
          "package": "numbering",
          "signature": "Int",
          "source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nbie_index",
          "package": "numbering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nbie_toIntOfFromIntOfIndex",
          "package": "numbering",
          "signature": "Int",
          "source": "src/Data-Numbering.html#NumberingBrokenInvariantException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nbie_toIntOfFromIntOfIndex",
          "package": "numbering",
          "partial": "Int Of From Int Of Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nbie_toIntOfFromIntOfIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity for nonpositive arg.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuDrop",
          "package": "numbering",
          "signature": "Int -\u003e Numbering a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuDrop",
          "type": "function"
        },
        "index": {
          "description": "Identity for nonpositive arg",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuDrop",
          "normalized": "Int-\u003eNumbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Drop",
          "signature": "Int-\u003eNumbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuElements",
          "package": "numbering",
          "signature": "Numbering a -\u003e [a]",
          "source": "src/Data-Numbering.html#nuElements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuElements",
          "normalized": "Numbering a-\u003e[a]",
          "package": "numbering",
          "partial": "Elements",
          "signature": "Numbering a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuFromDistinctIntList",
          "package": "numbering",
          "signature": "[Int] -\u003e Numbering Int",
          "source": "src/Data-Numbering.html#nuFromDistinctIntList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromDistinctIntList",
          "normalized": "[Int]-\u003eNumbering Int",
          "package": "numbering",
          "partial": "From Distinct Int List",
          "signature": "[Int]-\u003eNumbering Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctIntList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromDistinctList",
          "package": "numbering",
          "signature": "[a] -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuFromDistinctList",
          "type": "function"
        },
        "index": {
          "description": "See nuFromDistinctVector",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromDistinctList",
          "normalized": "[a]-\u003eNumbering a",
          "package": "numbering",
          "partial": "From Distinct List",
          "signature": "[a]-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromDistinctUnboxList",
          "package": "numbering",
          "signature": "[a] -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuFromDistinctUnboxList",
          "type": "function"
        },
        "index": {
          "description": "See nuFromDistinctVector",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromDistinctUnboxList",
          "normalized": "[a]-\u003eNumbering a",
          "package": "numbering",
          "partial": "From Distinct Unbox List",
          "signature": "[a]-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctUnboxList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distinctness precondition is checked (we have to create a map anyway).\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromDistinctVector",
          "package": "numbering",
          "signature": "v a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuFromDistinctVector",
          "type": "function"
        },
        "index": {
          "description": "The distinctness precondition is checked we have to create map anyway",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromDistinctVector",
          "normalized": "a b-\u003eNumbering b",
          "package": "numbering",
          "partial": "From Distinct Vector",
          "signature": "v a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows customization of the map type used.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromDistinctVectorG",
          "package": "numbering",
          "signature": "map-\u003e ((a -\u003e Int -\u003e Int -\u003e t) -\u003e a -\u003e Int -\u003e map -\u003e map)-\u003e (a -\u003e map -\u003e Maybe Int)-\u003e v a-\u003e Numbering a",
          "type": "function"
        },
        "index": {
          "description": "Allows customization of the map type used",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromDistinctVectorG",
          "normalized": "a-\u003e((b-\u003eInt-\u003eInt-\u003ec)-\u003eb-\u003eInt-\u003ea-\u003ea)-\u003e(b-\u003ea-\u003eMaybe Int)-\u003ed b-\u003eNumbering b",
          "package": "numbering",
          "partial": "From Distinct Vector",
          "signature": "map-\u003e((a-\u003eInt-\u003eInt-\u003et)-\u003ea-\u003eInt-\u003emap-\u003emap)-\u003e(a-\u003emap-\u003eMaybe Int)-\u003ev a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromDistinctVectorG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromIntList",
          "package": "numbering",
          "signature": "[Int] -\u003e Numbering Int",
          "source": "src/Data-Numbering.html#nuFromIntList",
          "type": "function"
        },
        "index": {
          "description": "Uniquifies the input first resulting in an unspecified order",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromIntList",
          "normalized": "[Int]-\u003eNumbering Int",
          "package": "numbering",
          "partial": "From Int List",
          "signature": "[Int]-\u003eNumbering Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromIntList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromList",
          "package": "numbering",
          "signature": "[a] -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuFromList",
          "type": "function"
        },
        "index": {
          "description": "Uniquifies the input first resulting in an unspecified order",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromList",
          "normalized": "[a]-\u003eNumbering a",
          "package": "numbering",
          "partial": "From List",
          "signature": "[a]-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Uses a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e because \u003ca\u003eData.Set\u003c/a\u003e doesn't expose the necessary index-based API)\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromSet",
          "package": "numbering",
          "signature": "Map Int ignored -\u003e Numbering Int",
          "source": "src/Data-Numbering.html#nuFromSet",
          "type": "function"
        },
        "index": {
          "description": "Uses Map because Data.Set doesn expose the necessary index-based API",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromSet",
          "normalized": "Map Int a-\u003eNumbering Int",
          "package": "numbering",
          "partial": "From Set",
          "signature": "Map Int ignored-\u003eNumbering Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniquifies the input first (resulting in an unspecified order).\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuFromUnboxList",
          "package": "numbering",
          "signature": "[a] -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuFromUnboxList",
          "type": "function"
        },
        "index": {
          "description": "Uniquifies the input first resulting in an unspecified order",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuFromUnboxList",
          "normalized": "[a]-\u003eNumbering a",
          "package": "numbering",
          "partial": "From Unbox List",
          "signature": "[a]-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuFromUnboxList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuIndices",
          "package": "numbering",
          "signature": "Numbering a -\u003e [Int]",
          "source": "src/Data-Numbering.html#nuIndices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuIndices",
          "normalized": "Numbering a-\u003e[Int]",
          "package": "numbering",
          "partial": "Indices",
          "signature": "Numbering a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuLength",
          "package": "numbering",
          "signature": "Int",
          "source": "src/Data-Numbering.html#Numbering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuLength",
          "package": "numbering",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuTake",
          "package": "numbering",
          "signature": "Int -\u003e Numbering a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#nuTake",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuTake",
          "normalized": "Int-\u003eNumbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Take",
          "signature": "Int-\u003eNumbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuElements\u003c/a\u003e\u003c/code\u003e. Won't actually be distinct if the invariant is broken.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuToDistinctList",
          "package": "numbering",
          "signature": "Numbering a -\u003e [a]",
          "source": "src/Data-Numbering.html#nuToDistinctList",
          "type": "function"
        },
        "index": {
          "description": "nuElements Won actually be distinct if the invariant is broken",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuToDistinctList",
          "normalized": "Numbering a-\u003e[a]",
          "package": "numbering",
          "partial": "To Distinct List",
          "signature": "Numbering a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToDistinctList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuToVector\u003c/a\u003e\u003c/code\u003e. Won't actually be distinct if the invariant is broken.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuToDistinctVector",
          "package": "numbering",
          "signature": "Numbering a -\u003e v a",
          "source": "src/Data-Numbering.html#nuToDistinctVector",
          "type": "function"
        },
        "index": {
          "description": "nuToVector Won actually be distinct if the invariant is broken",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuToDistinctVector",
          "normalized": "Numbering a-\u003eb a",
          "package": "numbering",
          "partial": "To Distinct Vector",
          "signature": "Numbering a-\u003ev a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToDistinctVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e= \u003ccode\u003e\u003ca\u003enuElements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "nuToList",
          "package": "numbering",
          "signature": "Numbering a -\u003e [a]",
          "source": "src/Data-Numbering.html#nuToList",
          "type": "function"
        },
        "index": {
          "description": "nuElements",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuToList",
          "normalized": "Numbering a-\u003e[a]",
          "package": "numbering",
          "partial": "To List",
          "signature": "Numbering a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "nuToVector",
          "package": "numbering",
          "signature": "Numbering a -\u003e v a",
          "source": "src/Data-Numbering.html#nuToVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "nuToVector",
          "normalized": "Numbering a-\u003eb a",
          "package": "numbering",
          "partial": "To Vector",
          "signature": "Numbering a-\u003ev a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:nuToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "pairNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Numbering b -\u003e Numbering (a, b)",
          "source": "src/Data-Numbering.html#pairNu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "pairNu",
          "normalized": "Numbering a-\u003eNumbering b-\u003eNumbering(a,b)",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Numbering a-\u003eNumbering b-\u003eNumbering(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:pairNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a numbering for an pair-like type, given numberings for the component types.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "prodNu",
          "package": "numbering",
          "signature": "(a -\u003e a2)-\u003e (a -\u003e a1)-\u003e (a2 -\u003e a1 -\u003e a)-\u003e Numbering a2-\u003e Numbering a1-\u003e Numbering a",
          "type": "function"
        },
        "index": {
          "description": "Creates numbering for an pair-like type given numberings for the component types",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "prodNu",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:prodNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003ereindexNu k f g nu\u003c/code\u003e, the arguments must satisfy\n\u003c/p\u003e\u003cpre\u003e\n For all i in 0 .. k,\n     (g . f) i == i\n\u003c/pre\u003e\u003cp\u003eNote: Decreasing the length with this function will \u003cem\u003enot\u003c/em\u003e release any memory retained\n by the closures in the input numbering (e.g. the vector, for numberings created by \u003ccode\u003e\u003ca\u003enuFromDistinctVector\u003c/a\u003e\u003c/code\u003e). Use \u003ccode\u003e\u003ca\u003econsolidateNu\u003c/a\u003e\u003c/code\u003e afterwards for that.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "reindexNu",
          "package": "numbering",
          "signature": "Int-\u003e (Int -\u003e Int)-\u003e (Int -\u003e Int)-\u003e Numbering a-\u003e Numbering a",
          "type": "function"
        },
        "index": {
          "description": "In reindexNu nu the arguments must satisfy For all in Note Decreasing the length with this function will not release any memory retained by the closures in the input numbering e.g the vector for numberings created by nuFromDistinctVector Use consolidateNu afterwards for that",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "reindexNu",
          "normalized": "Int-\u003e(Int-\u003eInt)-\u003e(Int-\u003eInt)-\u003eNumbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Int-\u003e(Int-\u003eInt)-\u003e(Int-\u003eInt)-\u003eNumbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:reindexNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "reverseNu",
          "package": "numbering",
          "signature": "Numbering a -\u003e Numbering a",
          "source": "src/Data-Numbering.html#reverseNu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "reverseNu",
          "normalized": "Numbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "Numbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:reverseNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a numbering for an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e-like type, given numberings for the summand types.\n\u003c/p\u003e",
          "module": "Data.Numbering",
          "name": "sumNu",
          "package": "numbering",
          "signature": "(a1 -\u003e a)-\u003e (a2 -\u003e a)-\u003e ((a1 -\u003e Int) -\u003e (a2 -\u003e Int) -\u003e a -\u003e Int)-\u003e Numbering a1-\u003e Numbering a2-\u003e Numbering a",
          "type": "function"
        },
        "index": {
          "description": "Creates numbering for an Either like type given numberings for the summand types",
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "sumNu",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e((a-\u003eInt)-\u003e(a-\u003eInt)-\u003ea-\u003eInt)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
          "package": "numbering",
          "partial": "Nu",
          "signature": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e((a-\u003eInt)-\u003e(a-\u003eInt)-\u003ea-\u003eInt)-\u003eNumbering a-\u003eNumbering a-\u003eNumbering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:sumNu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbering",
          "name": "toInt",
          "package": "numbering",
          "signature": "a -\u003e Int",
          "source": "src/Data-Numbering.html#Numbering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Numbering",
          "module": "Data.Numbering",
          "name": "toInt",
          "normalized": "a-\u003eInt",
          "package": "numbering",
          "partial": "Int",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbering/docs/Data-Numbering.html#v:toInt"
      }
    }
  ]
]