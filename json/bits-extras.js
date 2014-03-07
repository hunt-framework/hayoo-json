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
        "word": "bits-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtended bit operations, implemented using GCC builtins (see\n \u003ca\u003ehttp://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits.Extras",
          "name": "Extras",
          "package": "bits-extras",
          "source": "src/Data-Bits-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "Extended bit operations implemented using GCC builtins see http gcc.gnu.org onlinedocs gcc Other-Builtins.html",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "Extras",
          "package": "bits-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances provided: \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "ExtraBits",
          "package": "bits-extras",
          "source": "src/Data-Bits-Extras.html#ExtraBits",
          "type": "class"
        },
        "index": {
          "description": "Instances provided Word Word8 Word16 Word32 Word64 Int Int8 Int16 Int32 Int64",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "ExtraBits",
          "package": "bits-extras",
          "partial": "Extra Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#t:ExtraBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns x with the order of the bytes reversed; for example,\n 0xaabbccdd becomes 0xddccbbaa. Byte here always means exactly 8 bits. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "byteSwap",
          "package": "bits-extras",
          "signature": "x -\u003e x",
          "source": "src/Data-Bits-Extras.html#byteSwap",
          "type": "method"
        },
        "index": {
          "description": "Returns with the order of the bytes reversed for example xaabbccdd becomes xddccbbaa Byte here always means exactly bits",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "byteSwap",
          "normalized": "a-\u003ea",
          "package": "bits-extras",
          "partial": "Swap",
          "signature": "x-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:byteSwap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of leading 0-bits in x, starting at the most\n significant bit position. If x is 0, the result is undefined. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "leadingZeros",
          "package": "bits-extras",
          "signature": "x -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#leadingZeros",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of leading bits in starting at the most significant bit position If is the result is undefined",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "leadingZeros",
          "normalized": "a-\u003eWord",
          "package": "bits-extras",
          "partial": "Zeros",
          "signature": "x-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:leadingZeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns one plus the index of the least significant 1-bit of x, or if\n x is zero, returns zero. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "lowestBitPlus1",
          "package": "bits-extras",
          "signature": "x -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#lowestBitPlus1",
          "type": "method"
        },
        "index": {
          "description": "Returns one plus the index of the least significant bit of or if is zero returns zero",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "lowestBitPlus1",
          "normalized": "a-\u003eWord",
          "package": "bits-extras",
          "partial": "Bit Plus",
          "signature": "x-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:lowestBitPlus1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the parity of x, i.e. the number of 1-bits in x modulo 2. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "parity",
          "package": "bits-extras",
          "signature": "x -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#parity",
          "type": "method"
        },
        "index": {
          "description": "Returns the parity of i.e the number of bits in modulo",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "parity",
          "normalized": "a-\u003eWord",
          "package": "bits-extras",
          "signature": "x-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:parity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of 1-bits in x. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "populationCount",
          "package": "bits-extras",
          "signature": "x -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#populationCount",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of bits in",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "populationCount",
          "normalized": "a-\u003eWord",
          "package": "bits-extras",
          "partial": "Count",
          "signature": "x-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:populationCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of trailing 0-bits in x, starting at the least\n significant bit position. If x is 0, the result is undefined. \n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "trailingZeros",
          "package": "bits-extras",
          "signature": "x -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#trailingZeros",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of trailing bits in starting at the least significant bit position If is the result is undefined",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "trailingZeros",
          "normalized": "a-\u003eWord",
          "package": "bits-extras",
          "partial": "Zeros",
          "signature": "x-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-extras/docs/Data-Bits-Extras.html#v:trailingZeros"
      }
    }
  ]
]