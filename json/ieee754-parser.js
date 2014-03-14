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
        "word": "ieee754-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "IEEE754",
          "package": "ieee754-parser",
          "source": "src/Data-Binary-IEEE754.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "IEEE754",
          "package": "ieee754-parser",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "BitCount",
          "package": "ieee754-parser",
          "source": "src/Data-Binary-IEEE754.html#BitCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "BitCount",
          "package": "ieee754-parser",
          "partial": "Bit Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:BitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "Exponent",
          "package": "ieee754-parser",
          "source": "src/Data-Binary-IEEE754.html#Exponent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "Exponent",
          "package": "ieee754-parser",
          "partial": "Exponent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "Fraction",
          "package": "ieee754-parser",
          "source": "src/Data-Binary-IEEE754.html#Fraction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "Fraction",
          "package": "ieee754-parser",
          "partial": "Fraction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:Fraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsidering a byte list as a sequence of bits, slice it from start\n inclusive to end exclusive, and return the resulting bit sequence as an\n integer\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "bitSlice",
          "package": "ieee754-parser",
          "signature": "[Word8] -\u003e BitCount -\u003e BitCount -\u003e Integer",
          "source": "src/Data-Binary-IEEE754.html#bitSlice",
          "type": "function"
        },
        "index": {
          "description": "Considering byte list as sequence of bits slice it from start inclusive to end exclusive and return the resulting bit sequence as an integer",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "bitSlice",
          "normalized": "[Word]-\u003eBitCount-\u003eBitCount-\u003eInteger",
          "package": "ieee754-parser",
          "partial": "Slice",
          "signature": "[Word]-\u003eBitCount-\u003eBitCount-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:bitSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the proper size of the exponent field, in bits, given the\n size of the full structure.\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "exponentWidth",
          "package": "ieee754-parser",
          "signature": "BitCount -\u003e BitCount",
          "source": "src/Data-Binary-IEEE754.html#exponentWidth",
          "type": "function"
        },
        "index": {
          "description": "Calculate the proper size of the exponent field in bits given the size of the full structure",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "exponentWidth",
          "normalized": "BitCount-\u003eBitCount",
          "package": "ieee754-parser",
          "partial": "Width",
          "signature": "BitCount-\u003eBitCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:exponentWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a floating-point value of the given width from within a Get monad.\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat",
          "package": "ieee754-parser",
          "signature": "BitCount -\u003e ([Word8] -\u003e a) -\u003e Get a",
          "source": "src/Data-Binary-IEEE754.html#getFloat",
          "type": "function"
        },
        "index": {
          "description": "Parse floating-point value of the given width from within Get monad",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat",
          "normalized": "BitCount-\u003e([Word]-\u003ea)-\u003eGet a",
          "package": "ieee754-parser",
          "partial": "Float",
          "signature": "BitCount-\u003e([Word]-\u003ea)-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat16be",
          "package": "ieee754-parser",
          "signature": "Get Float",
          "source": "src/Data-Binary-IEEE754.html#getFloat16be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat16be",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat16le",
          "package": "ieee754-parser",
          "signature": "Get Float",
          "source": "src/Data-Binary-IEEE754.html#getFloat16le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat16le",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat32be",
          "package": "ieee754-parser",
          "signature": "Get Float",
          "source": "src/Data-Binary-IEEE754.html#getFloat32be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat32be",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat32le",
          "package": "ieee754-parser",
          "signature": "Get Float",
          "source": "src/Data-Binary-IEEE754.html#getFloat32le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat32le",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat64be",
          "package": "ieee754-parser",
          "signature": "Get Double",
          "source": "src/Data-Binary-IEEE754.html#getFloat64be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat64be",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.IEEE754",
          "name": "getFloat64le",
          "package": "ieee754-parser",
          "signature": "Get Double",
          "source": "src/Data-Binary-IEEE754.html#getFloat64le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "getFloat64le",
          "package": "ieee754-parser",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse values into a form suitable for encodeFloat\n sign exponent fraction width-in-bits -\u003e fraction, exponent\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "mergeFloat",
          "package": "ieee754-parser",
          "signature": "Exponent -\u003e Fraction -\u003e BitCount -\u003e (Integer, Int)",
          "source": "src/Data-Binary-IEEE754.html#mergeFloat",
          "type": "function"
        },
        "index": {
          "description": "Parse values into form suitable for encodeFloat sign exponent fraction width-in-bits fraction exponent",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "mergeFloat",
          "normalized": "Exponent-\u003eFraction-\u003eBitCount-\u003e(Integer,Int)",
          "package": "ieee754-parser",
          "partial": "Float",
          "signature": "Exponent-\u003eFraction-\u003eBitCount-\u003e(Integer,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:mergeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a big-endian byte list into a floating-point value.\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "parseFloatBE",
          "package": "ieee754-parser",
          "signature": "[Word8] -\u003e a",
          "source": "src/Data-Binary-IEEE754.html#parseFloatBE",
          "type": "function"
        },
        "index": {
          "description": "Parse big-endian byte list into floating-point value",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "parseFloatBE",
          "normalized": "[Word]-\u003ea",
          "package": "ieee754-parser",
          "partial": "Float BE",
          "signature": "[Word]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:parseFloatBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a little-endian byte list into a floating-point value.\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "parseFloatLE",
          "package": "ieee754-parser",
          "signature": "[Word8] -\u003e a",
          "source": "src/Data-Binary-IEEE754.html#parseFloatLE",
          "type": "function"
        },
        "index": {
          "description": "Parse little-endian byte list into floating-point value",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "parseFloatLE",
          "normalized": "[Word]-\u003ea",
          "package": "ieee754-parser",
          "partial": "Float LE",
          "signature": "[Word]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:parseFloatLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a raw bit array into (sign, exponent, fraction) components. These\n components have not been processed (unbiased, added significant bit,\n etc).\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "splitRawIEEE754",
          "package": "ieee754-parser",
          "signature": "[Word8] -\u003e (Bool, Exponent, Fraction)",
          "source": "src/Data-Binary-IEEE754.html#splitRawIEEE754",
          "type": "function"
        },
        "index": {
          "description": "Split raw bit array into sign exponent fraction components These components have not been processed unbiased added significant bit etc",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "splitRawIEEE754",
          "normalized": "[Word]-\u003e(Bool,Exponent,Fraction)",
          "package": "ieee754-parser",
          "partial": "Raw IEEE",
          "signature": "[Word]-\u003e(Bool,Exponent,Fraction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:splitRawIEEE754"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbias an exponent\n\u003c/p\u003e",
          "module": "Data.Binary.IEEE754",
          "name": "unbias",
          "package": "ieee754-parser",
          "signature": "Exponent -\u003e BitCount -\u003e Exponent",
          "source": "src/Data-Binary-IEEE754.html#unbias",
          "type": "function"
        },
        "index": {
          "description": "Unbias an exponent",
          "hierarchy": "Data Binary IEEE754",
          "module": "Data.Binary.IEEE754",
          "name": "unbias",
          "normalized": "Exponent-\u003eBitCount-\u003eExponent",
          "package": "ieee754-parser",
          "signature": "Exponent-\u003eBitCount-\u003eExponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:unbias"
      }
    }
  ]
]