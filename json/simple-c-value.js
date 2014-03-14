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
        "word": "simple-c-value"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "CValue",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "CValue",
          "package": "simple-c-value",
          "partial": "CValue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic C value\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "CValue",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "data"
        },
        "index": {
          "description": "generic value",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "CValue",
          "package": "simple-c-value",
          "partial": "CValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:CValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive from this to convert from a CValue to Haskell type\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "FromCValue",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#FromCValue",
          "type": "class"
        },
        "index": {
          "description": "Derive from this to convert from CValue to Haskell type",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "FromCValue",
          "package": "simple-c-value",
          "partial": "From CValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:FromCValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive C values\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "PrimitiveValue",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "data"
        },
        "index": {
          "description": "Primitive values",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PrimitiveValue",
          "package": "simple-c-value",
          "partial": "Primitive Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:PrimitiveValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step in union path\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "Side",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#Side",
          "type": "data"
        },
        "index": {
          "description": "step in union path",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "Side",
          "package": "simple-c-value",
          "partial": "Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToCValue Class\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "ToCValue",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#ToCValue",
          "type": "class"
        },
        "index": {
          "description": "ToCValue Class",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "ToCValue",
          "package": "simple-c-value",
          "partial": "To CValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:ToCValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used for the conversion from a CValue back to Haskell type. Ideally it should be\n   and index, but unforunately this does not work with the way Generics creates its :+: binary tree.\n   I'm leaving it here for now, but I might find a more elegant way to handle this.\n\u003c/p\u003e",
          "module": "Language.C.Simple.CValue",
          "name": "UnionPath",
          "package": "simple-c-value",
          "source": "src/Language-C-Simple-CValue.html#UnionPath",
          "type": "type"
        },
        "index": {
          "description": "This is used for the conversion from CValue back to Haskell type Ideally it should be and index but unforunately this does not work with the way Generics creates its binary tree leaving it here for now but might find more elegant way to handle this",
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "UnionPath",
          "package": "simple-c-value",
          "partial": "Union Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#t:UnionPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "Lft",
          "package": "simple-c-value",
          "signature": "Lft",
          "source": "src/Language-C-Simple-CValue.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "Lft",
          "package": "simple-c-value",
          "partial": "Lft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:Lft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PChar",
          "package": "simple-c-value",
          "signature": "PChar CChar",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PChar",
          "package": "simple-c-value",
          "partial": "PChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PClock",
          "package": "simple-c-value",
          "signature": "PClock CClock",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PClock",
          "package": "simple-c-value",
          "partial": "PClock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PDouble",
          "package": "simple-c-value",
          "signature": "PDouble CDouble",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PDouble",
          "package": "simple-c-value",
          "partial": "PDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PFloat",
          "package": "simple-c-value",
          "signature": "PFloat CFloat",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PFloat",
          "package": "simple-c-value",
          "partial": "PFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PInt",
          "package": "simple-c-value",
          "signature": "PInt CInt",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PInt",
          "package": "simple-c-value",
          "partial": "PInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PIntMax",
          "package": "simple-c-value",
          "signature": "PIntMax CIntMax",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PIntMax",
          "package": "simple-c-value",
          "partial": "PInt Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PIntMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PIntPtr",
          "package": "simple-c-value",
          "signature": "PIntPtr CIntPtr",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PIntPtr",
          "package": "simple-c-value",
          "partial": "PInt Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PIntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PLLong",
          "package": "simple-c-value",
          "signature": "PLLong CLLong",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PLLong",
          "package": "simple-c-value",
          "partial": "PLLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PLLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PLong",
          "package": "simple-c-value",
          "signature": "PLong CLong",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PLong",
          "package": "simple-c-value",
          "partial": "PLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PPtrdiff",
          "package": "simple-c-value",
          "signature": "PPtrdiff CPtrdiff",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PPtrdiff",
          "package": "simple-c-value",
          "partial": "PPtrdiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PPtrdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PSChar",
          "package": "simple-c-value",
          "signature": "PSChar CSChar",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PSChar",
          "package": "simple-c-value",
          "partial": "PSChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PSChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PSUSeconds",
          "package": "simple-c-value",
          "signature": "PSUSeconds CSUSeconds",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PSUSeconds",
          "package": "simple-c-value",
          "partial": "PSUSeconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PSUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PShort",
          "package": "simple-c-value",
          "signature": "PShort CShort",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PShort",
          "package": "simple-c-value",
          "partial": "PShort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PSigAtomic",
          "package": "simple-c-value",
          "signature": "PSigAtomic CSigAtomic",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PSigAtomic",
          "package": "simple-c-value",
          "partial": "PSig Atomic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PSigAtomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PSize",
          "package": "simple-c-value",
          "signature": "PSize CSize",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PSize",
          "package": "simple-c-value",
          "partial": "PSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PTime",
          "package": "simple-c-value",
          "signature": "PTime CTime",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PTime",
          "package": "simple-c-value",
          "partial": "PTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUChar",
          "package": "simple-c-value",
          "signature": "PUChar CUChar",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUChar",
          "package": "simple-c-value",
          "partial": "PUChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUInt",
          "package": "simple-c-value",
          "signature": "PUInt CUInt",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUInt",
          "package": "simple-c-value",
          "partial": "PUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUIntMax",
          "package": "simple-c-value",
          "signature": "PUIntMax CUIntMax",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUIntMax",
          "package": "simple-c-value",
          "partial": "PUInt Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUIntMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUIntPtr",
          "package": "simple-c-value",
          "signature": "PUIntPtr CUIntPtr",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUIntPtr",
          "package": "simple-c-value",
          "partial": "PUInt Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUIntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PULLong",
          "package": "simple-c-value",
          "signature": "PULLong CULLong",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PULLong",
          "package": "simple-c-value",
          "partial": "PULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PULLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PULong",
          "package": "simple-c-value",
          "signature": "PULong CULong",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PULong",
          "package": "simple-c-value",
          "partial": "PULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PULong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUSeconds",
          "package": "simple-c-value",
          "signature": "PUSeconds CUSeconds",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUSeconds",
          "package": "simple-c-value",
          "partial": "PUSeconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PUShort",
          "package": "simple-c-value",
          "signature": "PUShort CUShort",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PUShort",
          "package": "simple-c-value",
          "partial": "PUShort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PUShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "PWchar",
          "package": "simple-c-value",
          "signature": "PWchar CWchar",
          "source": "src/Language-C-Simple-CValue.html#PrimitiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "PWchar",
          "package": "simple-c-value",
          "partial": "PWchar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:PWchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "Rght",
          "package": "simple-c-value",
          "signature": "Rght",
          "source": "src/Language-C-Simple-CValue.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "Rght",
          "package": "simple-c-value",
          "partial": "Rght",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:Rght"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "VArray",
          "package": "simple-c-value",
          "signature": "VArray [CValue]",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "VArray",
          "normalized": "VArray[CValue]",
          "package": "simple-c-value",
          "partial": "VArray",
          "signature": "VArray[CValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:VArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "VMember",
          "package": "simple-c-value",
          "signature": "VMember CValue",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "VMember",
          "package": "simple-c-value",
          "partial": "VMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:VMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "VPrimitive",
          "package": "simple-c-value",
          "signature": "VPrimitive PrimitiveValue",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "VPrimitive",
          "package": "simple-c-value",
          "partial": "VPrimitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:VPrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "VStruct",
          "package": "simple-c-value",
          "signature": "VStruct [CValue]",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "VStruct",
          "normalized": "VStruct[CValue]",
          "package": "simple-c-value",
          "partial": "VStruct",
          "signature": "VStruct[CValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:VStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "VUnion",
          "package": "simple-c-value",
          "signature": "VUnion UnionPath CValue",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "VUnion",
          "package": "simple-c-value",
          "partial": "VUnion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:VUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "Void",
          "package": "simple-c-value",
          "signature": "Void",
          "source": "src/Language-C-Simple-CValue.html#CValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "Void",
          "package": "simple-c-value",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "fromCValue",
          "package": "simple-c-value",
          "signature": "CValue -\u003e Either String a",
          "source": "src/Language-C-Simple-CValue.html#fromCValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "fromCValue",
          "normalized": "CValue-\u003eEither String a",
          "package": "simple-c-value",
          "partial": "CValue",
          "signature": "CValue-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:fromCValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Simple.CValue",
          "name": "toCValue",
          "package": "simple-c-value",
          "signature": "a -\u003e CValue",
          "source": "src/Language-C-Simple-CValue.html#toCValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language C Simple CValue",
          "module": "Language.C.Simple.CValue",
          "name": "toCValue",
          "normalized": "a-\u003eCValue",
          "package": "simple-c-value",
          "partial": "CValue",
          "signature": "a-\u003eCValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-c-value/docs/Language-C-Simple-CValue.html#v:toCValue"
      }
    }
  ]
]