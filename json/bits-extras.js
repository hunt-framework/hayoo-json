[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtended bit operations, implemented using GCC builtins (see\n \u003ca\u003ehttp://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Extras.html",
        "fct-type": "module",
        "title": "Extras"
      },
      "index": {
        "description": "Extended bit operations implemented using GCC builtins see http gcc.gnu.org onlinedocs gcc Other-Builtins.html",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "Extras",
        "normalized": "",
        "package": "bits-extras",
        "partial": "Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#t:ExtraBits",
      "description": {
        "fct-descr": "\u003cp\u003eInstances provided: \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "class",
        "fct-source": "src/Data-Bits-Extras.html#ExtraBits",
        "fct-type": "class",
        "title": "ExtraBits"
      },
      "index": {
        "description": "Instances provided Word Word8 Word16 Word32 Word64 Int Int8 Int16 Int32 Int64",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "ExtraBits",
        "normalized": "",
        "package": "bits-extras",
        "partial": "Extra Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:byteSwap",
      "description": {
        "fct-descr": "\u003cp\u003eReturns x with the order of the bytes reversed; for example,\n 0xaabbccdd becomes 0xddccbbaa. Byte here always means exactly 8 bits. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e x",
        "fct-source": "src/Data-Bits-Extras.html#byteSwap",
        "fct-type": "method",
        "title": "byteSwap"
      },
      "index": {
        "description": "Returns with the order of the bytes reversed for example xaabbccdd becomes xddccbbaa Byte here always means exactly bits",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "byteSwap",
        "normalized": "a-\u003ea",
        "package": "bits-extras",
        "partial": "Swap",
        "signature": "x-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:leadingZeros",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of leading 0-bits in x, starting at the most\n significant bit position. If x is 0, the result is undefined. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#leadingZeros",
        "fct-type": "method",
        "title": "leadingZeros"
      },
      "index": {
        "description": "Returns the number of leading bits in starting at the most significant bit position If is the result is undefined",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "leadingZeros",
        "normalized": "a-\u003eWord",
        "package": "bits-extras",
        "partial": "Zeros",
        "signature": "x-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:lowestBitPlus1",
      "description": {
        "fct-descr": "\u003cp\u003eReturns one plus the index of the least significant 1-bit of x, or if\n x is zero, returns zero. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#lowestBitPlus1",
        "fct-type": "method",
        "title": "lowestBitPlus1"
      },
      "index": {
        "description": "Returns one plus the index of the least significant bit of or if is zero returns zero",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "lowestBitPlus1",
        "normalized": "a-\u003eWord",
        "package": "bits-extras",
        "partial": "Bit Plus",
        "signature": "x-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:parity",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the parity of x, i.e. the number of 1-bits in x modulo 2. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#parity",
        "fct-type": "method",
        "title": "parity"
      },
      "index": {
        "description": "Returns the parity of i.e the number of bits in modulo",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "parity",
        "normalized": "a-\u003eWord",
        "package": "bits-extras",
        "partial": "",
        "signature": "x-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:populationCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of 1-bits in x. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#populationCount",
        "fct-type": "method",
        "title": "populationCount"
      },
      "index": {
        "description": "Returns the number of bits in",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "populationCount",
        "normalized": "a-\u003eWord",
        "package": "bits-extras",
        "partial": "Count",
        "signature": "x-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:trailingZeros",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of trailing 0-bits in x, starting at the least\n significant bit position. If x is 0, the result is undefined. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits-extras",
        "fct-signature": "x -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#trailingZeros",
        "fct-type": "method",
        "title": "trailingZeros"
      },
      "index": {
        "description": "Returns the number of trailing bits in starting at the least significant bit position If is the result is undefined",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "trailingZeros",
        "normalized": "a-\u003eWord",
        "package": "bits-extras",
        "partial": "Zeros",
        "signature": "x-\u003eWord"
      }
    }
  }
]