[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-IEEE754.html",
        "fct-type": "module",
        "title": "IEEE754"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "IEEE754",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:BitCount",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "type",
        "fct-source": "src/Data-Binary-IEEE754.html#BitCount",
        "fct-type": "type",
        "title": "BitCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "BitCount",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Bit Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:Exponent",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "type",
        "fct-source": "src/Data-Binary-IEEE754.html#Exponent",
        "fct-type": "type",
        "title": "Exponent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "Exponent",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Exponent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#t:Fraction",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "type",
        "fct-source": "src/Data-Binary-IEEE754.html#Fraction",
        "fct-type": "type",
        "title": "Fraction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "Fraction",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Fraction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:bitSlice",
      "description": {
        "fct-descr": "\u003cp\u003eConsidering a byte list as a sequence of bits, slice it from start\n inclusive to end exclusive, and return the resulting bit sequence as an\n integer\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "[Word8] -\u003e BitCount -\u003e BitCount -\u003e Integer",
        "fct-source": "src/Data-Binary-IEEE754.html#bitSlice",
        "fct-type": "function",
        "title": "bitSlice"
      },
      "index": {
        "description": "Considering byte list as sequence of bits slice it from start inclusive to end exclusive and return the resulting bit sequence as an integer",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "bitSlice",
        "normalized": "[Word]-\u003eBitCount-\u003eBitCount-\u003eInteger",
        "package": "ieee754-parser",
        "partial": "Slice",
        "signature": "[Word]-\u003eBitCount-\u003eBitCount-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:exponentWidth",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the proper size of the exponent field, in bits, given the\n size of the full structure.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "BitCount -\u003e BitCount",
        "fct-source": "src/Data-Binary-IEEE754.html#exponentWidth",
        "fct-type": "function",
        "title": "exponentWidth"
      },
      "index": {
        "description": "Calculate the proper size of the exponent field in bits given the size of the full structure",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "exponentWidth",
        "normalized": "BitCount-\u003eBitCount",
        "package": "ieee754-parser",
        "partial": "Width",
        "signature": "BitCount-\u003eBitCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat",
      "description": {
        "fct-descr": "\u003cp\u003eParse a floating-point value of the given width from within a Get monad.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "BitCount -\u003e ([Word8] -\u003e a) -\u003e Get a",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat",
        "fct-type": "function",
        "title": "getFloat"
      },
      "index": {
        "description": "Parse floating-point value of the given width from within Get monad",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat",
        "normalized": "BitCount-\u003e([Word]-\u003ea)-\u003eGet a",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": "BitCount-\u003e([Word]-\u003ea)-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat16be",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat16be",
        "fct-type": "function",
        "title": "getFloat16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat16be",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat16le",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat16le",
        "fct-type": "function",
        "title": "getFloat16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat16le",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat32be",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat32be",
        "fct-type": "function",
        "title": "getFloat32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat32be",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat32le",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat32le",
        "fct-type": "function",
        "title": "getFloat32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat32le",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat64be",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Double",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat64be",
        "fct-type": "function",
        "title": "getFloat64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat64be",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:getFloat64le",
      "description": {
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Get Double",
        "fct-source": "src/Data-Binary-IEEE754.html#getFloat64le",
        "fct-type": "function",
        "title": "getFloat64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "getFloat64le",
        "normalized": "",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:mergeFloat",
      "description": {
        "fct-descr": "\u003cp\u003eParse values into a form suitable for encodeFloat\n sign exponent fraction width-in-bits -\u003e fraction, exponent\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Exponent -\u003e Fraction -\u003e BitCount -\u003e (Integer, Int)",
        "fct-source": "src/Data-Binary-IEEE754.html#mergeFloat",
        "fct-type": "function",
        "title": "mergeFloat"
      },
      "index": {
        "description": "Parse values into form suitable for encodeFloat sign exponent fraction width-in-bits fraction exponent",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "mergeFloat",
        "normalized": "Exponent-\u003eFraction-\u003eBitCount-\u003e(Integer,Int)",
        "package": "ieee754-parser",
        "partial": "Float",
        "signature": "Exponent-\u003eFraction-\u003eBitCount-\u003e(Integer,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:parseFloatBE",
      "description": {
        "fct-descr": "\u003cp\u003eParse a big-endian byte list into a floating-point value.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "[Word8] -\u003e a",
        "fct-source": "src/Data-Binary-IEEE754.html#parseFloatBE",
        "fct-type": "function",
        "title": "parseFloatBE"
      },
      "index": {
        "description": "Parse big-endian byte list into floating-point value",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "parseFloatBE",
        "normalized": "[Word]-\u003ea",
        "package": "ieee754-parser",
        "partial": "Float BE",
        "signature": "[Word]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:parseFloatLE",
      "description": {
        "fct-descr": "\u003cp\u003eParse a little-endian byte list into a floating-point value.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "[Word8] -\u003e a",
        "fct-source": "src/Data-Binary-IEEE754.html#parseFloatLE",
        "fct-type": "function",
        "title": "parseFloatLE"
      },
      "index": {
        "description": "Parse little-endian byte list into floating-point value",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "parseFloatLE",
        "normalized": "[Word]-\u003ea",
        "package": "ieee754-parser",
        "partial": "Float LE",
        "signature": "[Word]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:splitRawIEEE754",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a raw bit array into (sign, exponent, fraction) components. These\n components have not been processed (unbiased, added significant bit,\n etc).\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "[Word8] -\u003e (Bool, Exponent, Fraction)",
        "fct-source": "src/Data-Binary-IEEE754.html#splitRawIEEE754",
        "fct-type": "function",
        "title": "splitRawIEEE754"
      },
      "index": {
        "description": "Split raw bit array into sign exponent fraction components These components have not been processed unbiased added significant bit etc",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "splitRawIEEE754",
        "normalized": "[Word]-\u003e(Bool,Exponent,Fraction)",
        "package": "ieee754-parser",
        "partial": "Raw IEEE",
        "signature": "[Word]-\u003e(Bool,Exponent,Fraction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee754-parser/docs/Data-Binary-IEEE754.html#v:unbias",
      "description": {
        "fct-descr": "\u003cp\u003eUnbias an exponent\n\u003c/p\u003e",
        "fct-module": "Data.Binary.IEEE754",
        "fct-package": "ieee754-parser",
        "fct-signature": "Exponent -\u003e BitCount -\u003e Exponent",
        "fct-source": "src/Data-Binary-IEEE754.html#unbias",
        "fct-type": "function",
        "title": "unbias"
      },
      "index": {
        "description": "Unbias an exponent",
        "hierarchy": "Data Binary IEEE754",
        "module": "Data.Binary.IEEE754",
        "name": "unbias",
        "normalized": "Exponent-\u003eBitCount-\u003eExponent",
        "package": "ieee754-parser",
        "partial": "",
        "signature": "Exponent-\u003eBitCount-\u003eExponent"
      }
    }
  }
]