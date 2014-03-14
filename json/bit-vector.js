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
        "word": "bit-vector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Bit",
          "name": "Bit",
          "package": "bit-vector",
          "source": "src/Data-Vector-Bit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "Bit",
          "package": "bit-vector",
          "partial": "Bit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e is a little-endian \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "BitVector",
          "package": "bit-vector",
          "source": "src/Data-Vector-Bit.html#BitVector",
          "type": "type"
        },
        "index": {
          "description": "BitVector is little-endian Vector of Bool",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "BitVector",
          "package": "bit-vector",
          "partial": "Bit Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#t:BitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e to an instance of \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "pack",
          "package": "bit-vector",
          "signature": "BitVector -\u003e a",
          "source": "src/Data-Vector-Bit.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Converts BitVector to an instance of Bits",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "pack",
          "normalized": "BitVector-\u003ea",
          "package": "bit-vector",
          "signature": "BitVector-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Bit",
          "name": "packInt",
          "package": "bit-vector",
          "signature": "BitVector -\u003e Int",
          "source": "src/Data-Vector-Bit.html#packInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "packInt",
          "normalized": "BitVector-\u003eInt",
          "package": "bit-vector",
          "partial": "Int",
          "signature": "BitVector-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:packInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Bit",
          "name": "packInteger",
          "package": "bit-vector",
          "signature": "BitVector -\u003e Integer",
          "source": "src/Data-Vector-Bit.html#packInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "packInteger",
          "normalized": "BitVector-\u003eInteger",
          "package": "bit-vector",
          "partial": "Integer",
          "signature": "BitVector-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:packInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePads a \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e to the specified length by adding a vector of\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e values to the most-significant end.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "pad",
          "package": "bit-vector",
          "signature": "Int -\u003e BitVector -\u003e BitVector",
          "source": "src/Data-Vector-Bit.html#pad",
          "type": "function"
        },
        "index": {
          "description": "Pads BitVector to the specified length by adding vector of False values to the most-significant end",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "pad",
          "normalized": "Int-\u003eBitVector-\u003eBitVector",
          "package": "bit-vector",
          "signature": "Int-\u003eBitVector-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePads two \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003es to the length of the longest vector. If the\n vectors are the same length, \u003ccode\u003e\u003ca\u003epadMax\u003c/a\u003e\u003c/code\u003e does nothing.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "padMax",
          "package": "bit-vector",
          "signature": "BitVector -\u003e BitVector -\u003e (BitVector, BitVector)",
          "source": "src/Data-Vector-Bit.html#padMax",
          "type": "function"
        },
        "index": {
          "description": "Pads two BitVector to the length of the longest vector If the vectors are the same length padMax does nothing",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "padMax",
          "normalized": "BitVector-\u003eBitVector-\u003e(BitVector,BitVector)",
          "package": "bit-vector",
          "partial": "Max",
          "signature": "BitVector-\u003eBitVector-\u003e(BitVector,BitVector)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:padMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscards any \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e values at the most-significant end of the\n given \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "trimLeading",
          "package": "bit-vector",
          "signature": "BitVector -\u003e BitVector",
          "source": "src/Data-Vector-Bit.html#trimLeading",
          "type": "function"
        },
        "index": {
          "description": "Discards any False values at the most-significant end of the given BitVector",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "trimLeading",
          "normalized": "BitVector-\u003eBitVector",
          "package": "bit-vector",
          "partial": "Leading",
          "signature": "BitVector-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:trimLeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an instance of \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this uses \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e, and will not work for instances which\n do not implement this method, notably \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e. To unpack\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values, use \u003ccode\u003e\u003ca\u003eunpackInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "unpack",
          "package": "bit-vector",
          "signature": "a -\u003e BitVector",
          "source": "src/Data-Vector-Bit.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts an instance of Bits to BitVector Note this uses bitSize and will not work for instances which do not implement this method notably Integer To unpack Integer values use unpackInteger",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "unpack",
          "normalized": "a-\u003eBitVector",
          "package": "bit-vector",
          "signature": "a-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Bit",
          "name": "unpackInt",
          "package": "bit-vector",
          "signature": "Int -\u003e BitVector",
          "source": "src/Data-Vector-Bit.html#unpackInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "unpackInt",
          "normalized": "Int-\u003eBitVector",
          "package": "bit-vector",
          "partial": "Int",
          "signature": "Int-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:unpackInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Bit",
          "name": "unpackInteger",
          "package": "bit-vector",
          "signature": "Integer -\u003e BitVector",
          "source": "src/Data-Vector-Bit.html#unpackInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "unpackInteger",
          "normalized": "Integer-\u003eBitVector",
          "package": "bit-vector",
          "partial": "Integer",
          "signature": "Integer-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:unpackInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, except pads the vectors to equal length\n rather than discarding elements of the longer vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Bit",
          "name": "zipPad",
          "package": "bit-vector",
          "signature": "BitVector -\u003e BitVector -\u003e Vector (Bool, Bool)",
          "source": "src/Data-Vector-Bit.html#zipPad",
          "type": "function"
        },
        "index": {
          "description": "Like zip except pads the vectors to equal length rather than discarding elements of the longer vector",
          "hierarchy": "Data Vector Bit",
          "module": "Data.Vector.Bit",
          "name": "zipPad",
          "normalized": "BitVector-\u003eBitVector-\u003eVector(Bool,Bool)",
          "package": "bit-vector",
          "partial": "Pad",
          "signature": "BitVector-\u003eBitVector-\u003eVector(Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bit-vector/docs/Data-Vector-Bit.html#v:zipPad"
      }
    }
  ]
]