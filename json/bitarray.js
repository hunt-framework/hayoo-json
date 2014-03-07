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
        "word": "bitarray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable one-dimensional packed bit arrays in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitArray.IO",
          "name": "IO",
          "package": "bitarray",
          "source": "src/Data-BitArray-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable one-dimensional packed bit arrays in the IO monad",
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "IO",
          "package": "bitarray",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "IOBitArray",
          "package": "bitarray",
          "source": "src/Data-BitArray-IO.html#IOBitArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "IOBitArray",
          "package": "bitarray",
          "partial": "IOBit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#t:IOBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflips the bit and returns the \u003cem\u003eold\u003c/em\u003e value\n\u003c/p\u003e",
          "module": "Data.BitArray.IO",
          "name": "flipBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e IO Bool",
          "source": "src/Data-BitArray-IO.html#flipBit",
          "type": "function"
        },
        "index": {
          "description": "flips the bit and returns the old value",
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "flipBit",
          "normalized": "IOBitArray-\u003eInt-\u003eIO Bool",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "IOBitArray-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:flipBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "freezeBitArray",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e IO BitArray",
          "source": "src/Data-BitArray-IO.html#freezeBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "freezeBitArray",
          "normalized": "IOBitArray-\u003eIO BitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "IOBitArray-\u003eIO BitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:freezeBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "getBitArrayBounds",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e IO (Int, Int)",
          "source": "src/Data-BitArray-IO.html#getBitArrayBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "getBitArrayBounds",
          "normalized": "IOBitArray-\u003eIO(Int,Int)",
          "package": "bitarray",
          "partial": "Bit Array Bounds",
          "signature": "IOBitArray-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:getBitArrayBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "newBitArray",
          "package": "bitarray",
          "signature": "(Int, Int) -\u003e Bool -\u003e IO IOBitArray",
          "source": "src/Data-BitArray-IO.html#newBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "newBitArray",
          "normalized": "(Int,Int)-\u003eBool-\u003eIO IOBitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "(Int,Int)-\u003eBool-\u003eIO IOBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:newBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "readBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e IO Bool",
          "source": "src/Data-BitArray-IO.html#readBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "readBit",
          "normalized": "IOBitArray-\u003eInt-\u003eIO Bool",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "IOBitArray-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:readBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "thawBitArray",
          "package": "bitarray",
          "signature": "BitArray -\u003e IO IOBitArray",
          "source": "src/Data-BitArray-IO.html#thawBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "thawBitArray",
          "normalized": "BitArray-\u003eIO IOBitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "BitArray-\u003eIO IOBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:thawBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "unsafeFlipBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e IO Bool",
          "source": "src/Data-BitArray-IO.html#unsafeFlipBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "unsafeFlipBit",
          "normalized": "IOBitArray-\u003eInt-\u003eIO Bool",
          "package": "bitarray",
          "partial": "Flip Bit",
          "signature": "IOBitArray-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:unsafeFlipBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "unsafeFreezeBitArray",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e IO BitArray",
          "source": "src/Data-BitArray-IO.html#unsafeFreezeBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "unsafeFreezeBitArray",
          "normalized": "IOBitArray-\u003eIO BitArray",
          "package": "bitarray",
          "partial": "Freeze Bit Array",
          "signature": "IOBitArray-\u003eIO BitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:unsafeFreezeBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "unsafeReadBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e IO Bool",
          "source": "src/Data-BitArray-IO.html#unsafeReadBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "unsafeReadBit",
          "normalized": "IOBitArray-\u003eInt-\u003eIO Bool",
          "package": "bitarray",
          "partial": "Read Bit",
          "signature": "IOBitArray-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:unsafeReadBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "unsafeThawBitArray",
          "package": "bitarray",
          "signature": "BitArray -\u003e IO IOBitArray",
          "source": "src/Data-BitArray-IO.html#unsafeThawBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "unsafeThawBitArray",
          "normalized": "BitArray-\u003eIO IOBitArray",
          "package": "bitarray",
          "partial": "Thaw Bit Array",
          "signature": "BitArray-\u003eIO IOBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:unsafeThawBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "unsafeWriteBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e Bool -\u003e IO ()",
          "source": "src/Data-BitArray-IO.html#unsafeWriteBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "unsafeWriteBit",
          "normalized": "IOBitArray-\u003eInt-\u003eBool-\u003eIO()",
          "package": "bitarray",
          "partial": "Write Bit",
          "signature": "IOBitArray-\u003eInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:unsafeWriteBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.IO",
          "name": "writeBit",
          "package": "bitarray",
          "signature": "IOBitArray -\u003e Int -\u003e Bool -\u003e IO ()",
          "source": "src/Data-BitArray-IO.html#writeBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray IO",
          "module": "Data.BitArray.IO",
          "name": "writeBit",
          "normalized": "IOBitArray-\u003eInt-\u003eBool-\u003eIO()",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "IOBitArray-\u003eInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-IO.html#v:writeBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable one-dimensional packed bit arrays in the (strict) ST monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitArray.ST",
          "name": "ST",
          "package": "bitarray",
          "source": "src/Data-BitArray-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable one-dimensional packed bit arrays in the strict ST monad",
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "ST",
          "package": "bitarray",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "STBitArray",
          "package": "bitarray",
          "source": "src/Data-BitArray-ST.html#STBitArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "STBitArray",
          "package": "bitarray",
          "partial": "STBit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#t:STBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflips the bit and returns the \u003cem\u003eold\u003c/em\u003e value\n\u003c/p\u003e",
          "module": "Data.BitArray.ST",
          "name": "flipBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e ST s Bool",
          "source": "src/Data-BitArray-ST.html#flipBit",
          "type": "function"
        },
        "index": {
          "description": "flips the bit and returns the old value",
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "flipBit",
          "normalized": "STBitArray a-\u003eInt-\u003eST a Bool",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "STBitArray s-\u003eInt-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:flipBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "freezeBitArray",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e ST s BitArray",
          "source": "src/Data-BitArray-ST.html#freezeBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "freezeBitArray",
          "normalized": "STBitArray a-\u003eST a BitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "STBitArray s-\u003eST s BitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:freezeBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "getBitArrayBounds",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e ST s (Int, Int)",
          "source": "src/Data-BitArray-ST.html#getBitArrayBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "getBitArrayBounds",
          "normalized": "STBitArray a-\u003eST a(Int,Int)",
          "package": "bitarray",
          "partial": "Bit Array Bounds",
          "signature": "STBitArray s-\u003eST s(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:getBitArrayBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "newBitArray",
          "package": "bitarray",
          "signature": "(Int, Int) -\u003e Bool -\u003e ST s (STBitArray s)",
          "source": "src/Data-BitArray-ST.html#newBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "newBitArray",
          "normalized": "(Int,Int)-\u003eBool-\u003eST a(STBitArray a)",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "(Int,Int)-\u003eBool-\u003eST s(STBitArray s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:newBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "readBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e ST s Bool",
          "source": "src/Data-BitArray-ST.html#readBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "readBit",
          "normalized": "STBitArray a-\u003eInt-\u003eST a Bool",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "STBitArray s-\u003eInt-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:readBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "thawBitArray",
          "package": "bitarray",
          "signature": "BitArray -\u003e ST s (STBitArray s)",
          "source": "src/Data-BitArray-ST.html#thawBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "thawBitArray",
          "normalized": "BitArray-\u003eST a(STBitArray a)",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "BitArray-\u003eST s(STBitArray s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:thawBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "unsafeFlipBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e ST s Bool",
          "source": "src/Data-BitArray-ST.html#unsafeFlipBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "unsafeFlipBit",
          "normalized": "STBitArray a-\u003eInt-\u003eST a Bool",
          "package": "bitarray",
          "partial": "Flip Bit",
          "signature": "STBitArray s-\u003eInt-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:unsafeFlipBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "unsafeFreezeBitArray",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e ST s BitArray",
          "source": "src/Data-BitArray-ST.html#unsafeFreezeBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "unsafeFreezeBitArray",
          "normalized": "STBitArray a-\u003eST a BitArray",
          "package": "bitarray",
          "partial": "Freeze Bit Array",
          "signature": "STBitArray s-\u003eST s BitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:unsafeFreezeBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "unsafeReadBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e ST s Bool",
          "source": "src/Data-BitArray-ST.html#unsafeReadBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "unsafeReadBit",
          "normalized": "STBitArray a-\u003eInt-\u003eST a Bool",
          "package": "bitarray",
          "partial": "Read Bit",
          "signature": "STBitArray s-\u003eInt-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:unsafeReadBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "unsafeThawBitArray",
          "package": "bitarray",
          "signature": "BitArray -\u003e ST s (STBitArray s)",
          "source": "src/Data-BitArray-ST.html#unsafeThawBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "unsafeThawBitArray",
          "normalized": "BitArray-\u003eST a(STBitArray a)",
          "package": "bitarray",
          "partial": "Thaw Bit Array",
          "signature": "BitArray-\u003eST s(STBitArray s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:unsafeThawBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "unsafeWriteBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e Bool -\u003e ST s ()",
          "source": "src/Data-BitArray-ST.html#unsafeWriteBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "unsafeWriteBit",
          "normalized": "STBitArray a-\u003eInt-\u003eBool-\u003eST a()",
          "package": "bitarray",
          "partial": "Write Bit",
          "signature": "STBitArray s-\u003eInt-\u003eBool-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:unsafeWriteBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray.ST",
          "name": "writeBit",
          "package": "bitarray",
          "signature": "STBitArray s -\u003e Int -\u003e Bool -\u003e ST s ()",
          "source": "src/Data-BitArray-ST.html#writeBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray ST",
          "module": "Data.BitArray.ST",
          "name": "writeBit",
          "normalized": "STBitArray a-\u003eInt-\u003eBool-\u003eST a()",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "STBitArray s-\u003eInt-\u003eBool-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray-ST.html#v:writeBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable one-dimensional packed bit arrays.\n The main advantage should be compactness in memory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitArray",
          "name": "BitArray",
          "package": "bitarray",
          "source": "src/Data-BitArray.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable one-dimensional packed bit arrays The main advantage should be compactness in memory",
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "BitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA packed bit array. \n Internally, it is represented as an unboxed array of \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e-s.\n\u003c/p\u003e",
          "module": "Data.BitArray",
          "name": "BitArray",
          "package": "bitarray",
          "source": "src/Data-BitArray-Immutable.html#BitArray",
          "type": "data"
        },
        "index": {
          "description": "packed bit array Internally it is represented as an unboxed array of Word64",
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "BitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#t:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "accumBitArray",
          "package": "bitarray",
          "signature": "(Bool -\u003e a -\u003e Bool) -\u003e Bool -\u003e (Int, Int) -\u003e [(Int, a)] -\u003e BitArray",
          "source": "src/Data-BitArray.html#accumBitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "accumBitArray",
          "normalized": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(Int,Int)-\u003e[(Int,a)]-\u003eBitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(Int,Int)-\u003e[(Int,a)]-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:accumBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnspecified values become \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitArray",
          "name": "bitArray",
          "package": "bitarray",
          "signature": "(Int, Int) -\u003e [(Int, Bool)] -\u003e BitArray",
          "source": "src/Data-BitArray.html#bitArray",
          "type": "function"
        },
        "index": {
          "description": "Unspecified values become False",
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "bitArray",
          "normalized": "(Int,Int)-\u003e[(Int,Bool)]-\u003eBitArray",
          "package": "bitarray",
          "partial": "Array",
          "signature": "(Int,Int)-\u003e[(Int,Bool)]-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:bitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first argument gives the default value (instead of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.BitArray",
          "name": "bitArray'",
          "package": "bitarray",
          "signature": "Bool -\u003e (Int, Int) -\u003e [(Int, Bool)] -\u003e BitArray",
          "source": "src/Data-BitArray.html#bitArray%27",
          "type": "function"
        },
        "index": {
          "description": "The first argument gives the default value instead of False",
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "bitArray'",
          "normalized": "Bool-\u003e(Int,Int)-\u003e[(Int,Bool)]-\u003eBitArray",
          "package": "bitarray",
          "partial": "Array'",
          "signature": "Bool-\u003e(Int,Int)-\u003e[(Int,Bool)]-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:bitArray-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "bitArrayBounds",
          "package": "bitarray",
          "signature": "BitArray -\u003e (Int, Int)",
          "source": "src/Data-BitArray.html#bitArrayBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "bitArrayBounds",
          "normalized": "BitArray-\u003e(Int,Int)",
          "package": "bitarray",
          "partial": "Array Bounds",
          "signature": "BitArray-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:bitArrayBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "bits",
          "package": "bitarray",
          "signature": "BitArray -\u003e [Bool]",
          "source": "src/Data-BitArray.html#bits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "bits",
          "normalized": "BitArray-\u003e[Bool]",
          "package": "bitarray",
          "signature": "BitArray-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "bits01",
          "package": "bitarray",
          "signature": "BitArray -\u003e [Int]",
          "source": "src/Data-BitArray.html#bits01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "bits01",
          "normalized": "BitArray-\u003e[Int]",
          "package": "bitarray",
          "signature": "BitArray-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:bits01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the list is too short, the rest of the array is filled with \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitArray",
          "name": "listBitArray",
          "package": "bitarray",
          "signature": "(Int, Int) -\u003e [Bool] -\u003e BitArray",
          "source": "src/Data-BitArray.html#listBitArray",
          "type": "function"
        },
        "index": {
          "description": "If the list is too short the rest of the array is filled with False",
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "listBitArray",
          "normalized": "(Int,Int)-\u003e[Bool]-\u003eBitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "(Int,Int)-\u003e[Bool]-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:listBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "listBitArray01",
          "package": "bitarray",
          "signature": "(Int, Int) -\u003e [Int] -\u003e BitArray",
          "source": "src/Data-BitArray.html#listBitArray01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "listBitArray01",
          "normalized": "(Int,Int)-\u003e[Int]-\u003eBitArray",
          "package": "bitarray",
          "partial": "Bit Array",
          "signature": "(Int,Int)-\u003e[Int]-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:listBitArray01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "lookupBit",
          "package": "bitarray",
          "signature": "BitArray -\u003e Int -\u003e Bool",
          "source": "src/Data-BitArray.html#lookupBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "lookupBit",
          "normalized": "BitArray-\u003eInt-\u003eBool",
          "package": "bitarray",
          "partial": "Bit",
          "signature": "BitArray-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:lookupBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitArray",
          "name": "unsafeLookupBit",
          "package": "bitarray",
          "signature": "BitArray -\u003e Int -\u003e Bool",
          "source": "src/Data-BitArray.html#unsafeLookupBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitArray",
          "module": "Data.BitArray",
          "name": "unsafeLookupBit",
          "normalized": "BitArray-\u003eInt-\u003eBool",
          "package": "bitarray",
          "partial": "Lookup Bit",
          "signature": "BitArray-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitarray/docs/Data-BitArray.html#v:unsafeLookupBit"
      }
    }
  ]
]