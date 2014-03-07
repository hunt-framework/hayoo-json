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
        "word": "binary-strict"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy bytestrings, bit by bit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "BitBuilder",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitBuilder.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient construction of lazy bytestrings bit by bit",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "BitBuilder",
          "package": "binary-strict",
          "partial": "Bit Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n There are several functions for constructing \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003es, but only one\n to inspect them: to extract any data, you have to turn them into lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e constructs a lazy \u003ccode\u003eL.Bytestring\u003c/code\u003e by filling byte\n arrays piece by piece.  As each buffer is filled, it is 'popped'\n off, to become a new chunk of the resulting lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n All this is hidden from the user of the \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is closely based on the Builder monad, but this one deals with\n single bits at a time.\n\u003c/p\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "BitBuilder",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitBuilder.html#BitBuilder",
          "type": "data"
        },
        "index": {
          "description": "BitBuilder is an efficient way to build lazy ByteString There are several functions for constructing BitBuilder but only one to inspect them to extract any data you have to turn them into lazy ByteString using toLazyByteString Internally BitBuilder constructs lazy L.Bytestring by filling byte arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy ByteString All this is hidden from the user of the BitBuilder This is closely based on the Builder monad but this one deals with single bits at time",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "BitBuilder",
          "package": "binary-strict",
          "partial": "Bit Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#t:BitBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The concatenation of two BitBuilders, an associative operation\n with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e x y) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e x) (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "append",
          "package": "binary-strict",
          "signature": "BitBuilder -\u003e BitBuilder -\u003e BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#append",
          "type": "function"
        },
        "index": {
          "description": "The concatenation of two BitBuilders an associative operation with identity empty satisfying toLazyByteString append append toLazyByteString toLazyByteString",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "append",
          "normalized": "BitBuilder-\u003eBitBuilder-\u003eBitBuilder",
          "package": "binary-strict",
          "signature": "BitBuilder-\u003eBitBuilder-\u003eBitBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty BitBuilder, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "empty",
          "package": "binary-strict",
          "signature": "BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty BitBuilder satisfying toLazyByteString empty empty",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "empty",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "flush",
          "package": "binary-strict",
          "signature": "BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result lazy ByteString",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "flush",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a BitBuilder by taking the bottom n bits of a Bits instance. If\n   the instance has less than n bits, this acts as if there was an infinite\n   zero filled prefix\n\u003c/p\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "fromBits",
          "package": "binary-strict",
          "signature": "Int -\u003e a -\u003e BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#fromBits",
          "type": "function"
        },
        "index": {
          "description": "Construct BitBuilder by taking the bottom bits of Bits instance If the instance has less than bits this acts as if there was an infinite zero filled prefix",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "fromBits",
          "normalized": "Int-\u003ea-\u003eBitBuilder",
          "package": "binary-strict",
          "partial": "Bits",
          "signature": "Int-\u003ea-\u003eBitBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitBuilder",
          "name": "fromByteString",
          "package": "binary-strict",
          "signature": "(ByteString, Int) -\u003e BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#fromByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "fromByteString",
          "normalized": "(ByteString,Int)-\u003eBitBuilder",
          "package": "binary-strict",
          "partial": "Byte String",
          "signature": "(ByteString,Int)-\u003eBitBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A BitBuilder taking a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e bs) = bs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "fromLazyByteString",
          "package": "binary-strict",
          "signature": "ByteString -\u003e BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#fromLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "BitBuilder taking lazy ByteString satisfying toLazyByteString fromLazyByteString bs bs",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "fromLazyByteString",
          "normalized": "ByteString-\u003eBitBuilder",
          "package": "binary-strict",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003eBitBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A BitBuilder taking a single bit, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "singleton",
          "package": "binary-strict",
          "signature": "Bool -\u003e BitBuilder",
          "source": "src/Data-Binary-BitBuilder.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "BitBuilder taking single bit satisfying toLazyByteString singleton singleton",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "singleton",
          "normalized": "Bool-\u003eBitBuilder",
          "package": "binary-strict",
          "signature": "Bool-\u003eBitBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e.\n The construction work takes place if and when the relevant part of\n the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is demanded.\n\u003c/p\u003e",
          "module": "Data.Binary.BitBuilder",
          "name": "toLazyByteString",
          "package": "binary-strict",
          "signature": "BitBuilder -\u003e ByteString",
          "source": "src/Data-Binary-BitBuilder.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Extract lazy ByteString from BitBuilder The construction work takes place if and when the relevant part of the lazy ByteString is demanded",
          "hierarchy": "Data Binary BitBuilder",
          "module": "Data.Binary.BitBuilder",
          "name": "toLazyByteString",
          "normalized": "BitBuilder-\u003eByteString",
          "package": "binary-strict",
          "partial": "Lazy Byte String",
          "signature": "BitBuilder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the writer dual to BitGet. It allows one to append bits in a monad\n and get a strict ByteString as a result. Bits are appended from the MSB of\n the first byte towards the LSB of the last byte.\n\u003c/p\u003e\u003cp\u003eThis is best suited to small bit-fields because it accumulates bytes using\n snoc, so large results will cause a lot of copying. It would be possible\n to switch to using something similar to the Builder monad if need arises.\n However, since most protocols only have small bit fields, this should\n suffice for many cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.BitPut",
          "name": "BitPut",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitPut.html",
          "type": "module"
        },
        "index": {
          "description": "This is the writer dual to BitGet It allows one to append bits in monad and get strict ByteString as result Bits are appended from the MSB of the first byte towards the LSB of the last byte This is best suited to small bit-fields because it accumulates bytes using snoc so large results will cause lot of copying It would be possible to switch to using something similar to the Builder monad if need arises However since most protocols only have small bit fields this should suffice for many cases",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "BitPut",
          "package": "binary-strict",
          "partial": "Bit Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "BitPut",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitPut.html#BitPut",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "BitPut",
          "package": "binary-strict",
          "partial": "Bit Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "BitPutM",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitPut.html#BitPutM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "BitPutM",
          "package": "binary-strict",
          "partial": "Bit Put",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "BitPutT",
          "package": "binary-strict",
          "source": "src/Data-Binary-BitPut.html#BitPutT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "BitPutT",
          "package": "binary-strict",
          "partial": "Bit Put",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPutT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a single bit\n\u003c/p\u003e",
          "module": "Data.Binary.BitPut",
          "name": "putBit",
          "package": "binary-strict",
          "signature": "Bool -\u003e BitPut",
          "source": "src/Data-Binary-BitPut.html#putBit",
          "type": "function"
        },
        "index": {
          "description": "Append single bit",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putBit",
          "normalized": "Bool-\u003eBitPut",
          "package": "binary-strict",
          "partial": "Bit",
          "signature": "Bool-\u003eBitPut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "putBitT",
          "package": "binary-strict",
          "signature": "Bool -\u003e BitPutT m ()",
          "source": "src/Data-Binary-BitPut.html#putBitT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putBitT",
          "normalized": "Bool-\u003eBitPutT a()",
          "package": "binary-strict",
          "partial": "Bit",
          "signature": "Bool-\u003eBitPutT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBitT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a value. Note that this function is undefined for instances of Bits\n   which have no fixed bitsize (like Integer)\n\u003c/p\u003e",
          "module": "Data.Binary.BitPut",
          "name": "putBits",
          "package": "binary-strict",
          "signature": "a -\u003e BitPut",
          "source": "src/Data-Binary-BitPut.html#putBits",
          "type": "function"
        },
        "index": {
          "description": "Append value Note that this function is undefined for instances of Bits which have no fixed bitsize like Integer",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putBits",
          "normalized": "a-\u003eBitPut",
          "package": "binary-strict",
          "partial": "Bits",
          "signature": "a-\u003eBitPut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a ByteString\n\u003c/p\u003e",
          "module": "Data.Binary.BitPut",
          "name": "putByteString",
          "package": "binary-strict",
          "signature": "ByteString -\u003e BitPut",
          "source": "src/Data-Binary-BitPut.html#putByteString",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putByteString",
          "normalized": "ByteString-\u003eBitPut",
          "package": "binary-strict",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBitPut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a left aligned ByteString where ByteString has a partial byte\n   with the given number of valid bits, from the MSB downwards. The number\n   of such bits must be 0..7. (A normal ByteString, which all bytes full\n   would use 0)\n\u003c/p\u003e",
          "module": "Data.Binary.BitPut",
          "name": "putLeftByteString",
          "package": "binary-strict",
          "signature": "(ByteString, Int) -\u003e BitPut",
          "source": "src/Data-Binary-BitPut.html#putLeftByteString",
          "type": "function"
        },
        "index": {
          "description": "Append left aligned ByteString where ByteString has partial byte with the given number of valid bits from the MSB downwards The number of such bits must be normal ByteString which all bytes full would use",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putLeftByteString",
          "normalized": "(ByteString,Int)-\u003eBitPut",
          "package": "binary-strict",
          "partial": "Left Byte String",
          "signature": "(ByteString,Int)-\u003eBitPut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putLeftByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend the bottom n bits of the given bits value. In the case that more\n   bits are requested than the value provides, this acts as if the value\n   has as unlimited number of leading 0 bits.\n\u003c/p\u003e",
          "module": "Data.Binary.BitPut",
          "name": "putNBits",
          "package": "binary-strict",
          "signature": "Int -\u003e a -\u003e BitPut",
          "source": "src/Data-Binary-BitPut.html#putNBits",
          "type": "function"
        },
        "index": {
          "description": "Append the bottom bits of the given bits value In the case that more bits are requested than the value provides this acts as if the value has as unlimited number of leading bits",
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putNBits",
          "normalized": "Int-\u003ea-\u003eBitPut",
          "package": "binary-strict",
          "partial": "NBits",
          "signature": "Int-\u003ea-\u003eBitPut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putNBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "putNBitsT",
          "package": "binary-strict",
          "signature": "Int -\u003e a -\u003e BitPutT m ()",
          "source": "src/Data-Binary-BitPut.html#putNBitsT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "putNBitsT",
          "normalized": "Int-\u003ea-\u003eBitPutT b()",
          "package": "binary-strict",
          "partial": "NBits",
          "signature": "Int-\u003ea-\u003eBitPutT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putNBitsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "runBitPut",
          "package": "binary-strict",
          "signature": "BitPut -\u003e ByteString",
          "source": "src/Data-Binary-BitPut.html#runBitPut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "runBitPut",
          "normalized": "BitPut-\u003eByteString",
          "package": "binary-strict",
          "partial": "Bit Put",
          "signature": "BitPut-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "runBitPutM",
          "package": "binary-strict",
          "signature": "BitPutM a -\u003e (a, ByteString)",
          "source": "src/Data-Binary-BitPut.html#runBitPutM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "runBitPutM",
          "normalized": "BitPutM a-\u003e(a,ByteString)",
          "package": "binary-strict",
          "partial": "Bit Put",
          "signature": "BitPutM a-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.BitPut",
          "name": "runBitPutT",
          "package": "binary-strict",
          "signature": "BitPutT m a -\u003e m (a, ByteString)",
          "source": "src/Data-Binary-BitPut.html#runBitPutT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary BitPut",
          "module": "Data.Binary.BitPut",
          "name": "runBitPutT",
          "normalized": "BitPutT a b-\u003ea(b,ByteString)",
          "package": "binary-strict",
          "partial": "Bit Put",
          "signature": "BitPutT m a-\u003em(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPutT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a reader monad for parsing bit-aligned data. The usual Get monad\n handles byte aligned data well.\n\u003c/p\u003e\u003cp\u003eIn this monad, the current offset into the input is a number of bits, and\n fetching n bits from the current position will shift everything correctly.\n Bit vectors are represented as ByteStrings here either the first \u003ccode\u003en\u003c/code\u003e bits\n are valid (left aligned) or the last \u003ccode\u003en\u003c/code\u003e bits are (right aligned).\n\u003c/p\u003e\u003cp\u003eIf one is looking to parse integers etc, right alignment is the easist to\n work with, however left alignment makes more sense in some situations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "BitGet",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-BitGet.html",
          "type": "module"
        },
        "index": {
          "description": "This is reader monad for parsing bit-aligned data The usual Get monad handles byte aligned data well In this monad the current offset into the input is number of bits and fetching bits from the current position will shift everything correctly Bit vectors are represented as ByteStrings here either the first bits are valid left aligned or the last bits are right aligned If one is looking to parse integers etc right alignment is the easist to work with however left alignment makes more sense in some situations",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "BitGet",
          "package": "binary-strict",
          "partial": "Bit Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "BitGet",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-BitGet.html#BitGet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "BitGet",
          "package": "binary-strict",
          "partial": "Bit Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#t:BitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord16",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet Word16",
          "source": "src/Data-Binary-Strict-BitGet.html#getAsWord16",
          "type": "function"
        },
        "index": {
          "description": "Read Word16 in big endian format",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord16",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-strict",
          "partial": "As Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord32",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet Word32",
          "source": "src/Data-Binary-Strict-BitGet.html#getAsWord32",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in big endian format",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord32",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-strict",
          "partial": "As Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord64",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet Word64",
          "source": "src/Data-Binary-Strict-BitGet.html#getAsWord64",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in big endian format",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord64",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-strict",
          "partial": "As Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord8",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet Word8",
          "source": "src/Data-Binary-Strict-BitGet.html#getAsWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getAsWord8",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-strict",
          "partial": "As Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a single bit from the input\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getBit",
          "package": "binary-strict",
          "signature": "BitGet Bool",
          "source": "src/Data-Binary-Strict-BitGet.html#getBit",
          "type": "function"
        },
        "index": {
          "description": "Get single bit from the input",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getBit",
          "package": "binary-strict",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a ByteString with the given number of bits, left aligned.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getLeftByteString",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet ByteString",
          "source": "src/Data-Binary-Strict-BitGet.html#getLeftByteString",
          "type": "function"
        },
        "index": {
          "description": "Get ByteString with the given number of bits left aligned",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getLeftByteString",
          "normalized": "Int-\u003eBitGet ByteString",
          "package": "binary-strict",
          "partial": "Left Byte String",
          "signature": "Int-\u003eBitGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getLeftByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a ByteString with the given number of bits in, right aligned.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getRightByteString",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet ByteString",
          "source": "src/Data-Binary-Strict-BitGet.html#getRightByteString",
          "type": "function"
        },
        "index": {
          "description": "Get ByteString with the given number of bits in right aligned",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getRightByteString",
          "normalized": "Int-\u003eBitGet ByteString",
          "package": "binary-strict",
          "partial": "Right Byte String",
          "signature": "Int-\u003eBitGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getRightByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16be",
          "package": "binary-strict",
          "signature": "BitGet Word16",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord16be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16host",
          "package": "binary-strict",
          "signature": "BitGet Word16",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord16host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16le",
          "package": "binary-strict",
          "signature": "BitGet Word16",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord16le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord16le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32be",
          "package": "binary-strict",
          "signature": "BitGet Word32",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord32be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32host",
          "package": "binary-strict",
          "signature": "BitGet Word32",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord32host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32le",
          "package": "binary-strict",
          "signature": "BitGet Word32",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord32le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord32le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64be",
          "package": "binary-strict",
          "signature": "BitGet Word64",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord64be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64host",
          "package": "binary-strict",
          "signature": "BitGet Word64",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord64host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64le",
          "package": "binary-strict",
          "signature": "BitGet Word64",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord64le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord64le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord8",
          "package": "binary-strict",
          "signature": "BitGet Word8",
          "source": "src/Data-Binary-Strict-BitGet.html#getWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWord8",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWordhost",
          "package": "binary-strict",
          "signature": "BitGet Word",
          "source": "src/Data-Binary-Strict-BitGet.html#getWordhost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "getWordhost",
          "package": "binary-strict",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true if there are no more bits to parse\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "isEmpty",
          "package": "binary-strict",
          "signature": "BitGet Bool",
          "source": "src/Data-Binary-Strict-BitGet.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Return true if there are no more bits to parse",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "isEmpty",
          "package": "binary-strict",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "lookAhead",
          "package": "binary-strict",
          "signature": "BitGet a -\u003e BitGet a",
          "source": "src/Data-Binary-Strict-BitGet.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "Run ga but return without consuming its input Fails if ga fails",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "lookAhead",
          "normalized": "BitGet a-\u003eBitGet a",
          "package": "binary-strict",
          "partial": "Ahead",
          "signature": "BitGet a-\u003eBitGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of bits remaining to be parsed\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "remaining",
          "package": "binary-strict",
          "signature": "BitGet Int",
          "source": "src/Data-Binary-Strict-BitGet.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "Return the number of bits remaining to be parsed",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "remaining",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a BitGet on a ByteString\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "runBitGet",
          "package": "binary-strict",
          "signature": "ByteString -\u003e BitGet a -\u003e Either String a",
          "source": "src/Data-Binary-Strict-BitGet.html#runBitGet",
          "type": "function"
        },
        "index": {
          "description": "Run BitGet on ByteString",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "runBitGet",
          "normalized": "ByteString-\u003eBitGet a-\u003eEither String a",
          "package": "binary-strict",
          "partial": "Bit Get",
          "signature": "ByteString-\u003eBitGet a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:runBitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip \u003ccode\u003en\u003c/code\u003e bits of the input. Fails if less then \u003ccode\u003en\u003c/code\u003e bits remain\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitGet",
          "name": "skip",
          "package": "binary-strict",
          "signature": "Int -\u003e BitGet ()",
          "source": "src/Data-Binary-Strict-BitGet.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip bits of the input Fails if less then bits remain",
          "hierarchy": "Data Binary Strict BitGet",
          "module": "Data.Binary.Strict.BitGet",
          "name": "skip",
          "normalized": "Int-\u003eBitGet()",
          "package": "binary-strict",
          "signature": "Int-\u003eBitGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.BitUtil",
          "name": "BitUtil",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-BitUtil.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "BitUtil",
          "package": "binary-strict",
          "partial": "Bit Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a Word8 with the bottom n bits set\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "bottomNBits",
          "package": "binary-strict",
          "signature": "Int -\u003e Word8",
          "source": "src/Data-Binary-Strict-BitUtil.html#bottomNBits",
          "type": "function"
        },
        "index": {
          "description": "Return Word8 with the bottom bits set",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "bottomNBits",
          "normalized": "Int-\u003eWord",
          "package": "binary-strict",
          "partial": "NBits",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:bottomNBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the whole ByteString some number of bits left where 0 \u003c= \u003ccode\u003en\u003c/code\u003e \u003c 8\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "leftShift",
          "package": "binary-strict",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Binary-Strict-BitUtil.html#leftShift",
          "type": "function"
        },
        "index": {
          "description": "Shift the whole ByteString some number of bits left where",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "leftShift",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "binary-strict",
          "partial": "Shift",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:leftShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate a ByteString to a given number of bits (counting from the left)\n   by masking out extra bits in the last byte\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "leftTruncateBits",
          "package": "binary-strict",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Binary-Strict-BitUtil.html#leftTruncateBits",
          "type": "function"
        },
        "index": {
          "description": "Truncate ByteString to given number of bits counting from the left by masking out extra bits in the last byte",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "leftTruncateBits",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "binary-strict",
          "partial": "Truncate Bits",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:leftTruncateBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the whole ByteString some number of bits right where 0 \u003c= \u003ccode\u003en\u003c/code\u003e \u003c 8\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "rightShift",
          "package": "binary-strict",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Binary-Strict-BitUtil.html#rightShift",
          "type": "function"
        },
        "index": {
          "description": "Shift the whole ByteString some number of bits right where",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "rightShift",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "binary-strict",
          "partial": "Shift",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:rightShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate a ByteString to a given number of bits (counting from the right)\n   by masking out extra bits in the first byte\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "rightTruncateBits",
          "package": "binary-strict",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Binary-Strict-BitUtil.html#rightTruncateBits",
          "type": "function"
        },
        "index": {
          "description": "Truncate ByteString to given number of bits counting from the right by masking out extra bits in the first byte",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "rightTruncateBits",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "binary-strict",
          "partial": "Truncate Bits",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:rightTruncateBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used for masking the last byte of a ByteString so that extra\n   bits don't leak in\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "topNBits",
          "package": "binary-strict",
          "signature": "Int -\u003e Word8",
          "source": "src/Data-Binary-Strict-BitUtil.html#topNBits",
          "type": "function"
        },
        "index": {
          "description": "This is used for masking the last byte of ByteString so that extra bits don leak in",
          "hierarchy": "Data Binary Strict BitUtil",
          "module": "Data.Binary.Strict.BitUtil",
          "name": "topNBits",
          "normalized": "Int-\u003eWord",
          "package": "binary-strict",
          "partial": "NBits",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:topNBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ByteSet is a fast Set object for Word8's. The construction of these\n   objects isn't terribly quick, but the member function should be about\n   as good as you can get. Thus, you should use this when \u003ccode\u003emember\u003c/code\u003e is the\n   most common operation\n\u003c/p\u003e\u003cp\u003eThis object is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Binary.Strict.ByteSet as BSet\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "ByteSet",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-ByteSet.html",
          "type": "module"
        },
        "index": {
          "description": "ByteSet is fast Set object for Word8 The construction of these objects isn terribly quick but the member function should be about as good as you can get Thus you should use this when member is the most common operation This object is designed to be imported qualified import qualified Data.Binary.Strict.ByteSet as BSet",
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "ByteSet",
          "package": "binary-strict",
          "partial": "Byte Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "ByteSet",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-ByteSet.html#ByteSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "ByteSet",
          "package": "binary-strict",
          "partial": "Byte Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#t:ByteSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "complement",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#complement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "complement",
          "normalized": "ByteSet-\u003eByteSet",
          "package": "binary-strict",
          "signature": "ByteSet-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "difference",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#difference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "difference",
          "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
          "package": "binary-strict",
          "signature": "ByteSet-\u003eByteSet-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty set\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "empty",
          "package": "binary-strict",
          "signature": "ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty set",
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "empty",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "fromList",
          "package": "binary-strict",
          "signature": "[Word8] -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "fromList",
          "normalized": "[Word]-\u003eByteSet",
          "package": "binary-strict",
          "partial": "List",
          "signature": "[Word]-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set contained all elements\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "full",
          "package": "binary-strict",
          "signature": "ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#full",
          "type": "function"
        },
        "index": {
          "description": "The set contained all elements",
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "full",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "intersection",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#intersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "intersection",
          "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
          "package": "binary-strict",
          "signature": "ByteSet-\u003eByteSet-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "member",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Binary-Strict-ByteSet.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "member",
          "normalized": "ByteSet-\u003eWord-\u003eBool",
          "package": "binary-strict",
          "signature": "ByteSet-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a ByteSet containing all the elements from a to b, inclusive.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "range",
          "package": "binary-strict",
          "signature": "Word8 -\u003e Word8 -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#range",
          "type": "function"
        },
        "index": {
          "description": "Construct ByteSet containing all the elements from to inclusive",
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "range",
          "normalized": "Word-\u003eWord-\u003eByteSet",
          "package": "binary-strict",
          "signature": "Word-\u003eWord-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set with a single element\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "singleton",
          "package": "binary-strict",
          "signature": "Word8 -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "set with single element",
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "singleton",
          "normalized": "Word-\u003eByteSet",
          "package": "binary-strict",
          "signature": "Word-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "toList",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e [Word8]",
          "source": "src/Data-Binary-Strict-ByteSet.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "toList",
          "normalized": "ByteSet-\u003e[Word]",
          "package": "binary-strict",
          "partial": "List",
          "signature": "ByteSet-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.ByteSet",
          "name": "union",
          "package": "binary-strict",
          "signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
          "source": "src/Data-Binary-Strict-ByteSet.html#union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict ByteSet",
          "module": "Data.Binary.Strict.ByteSet",
          "name": "union",
          "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
          "package": "binary-strict",
          "signature": "ByteSet-\u003eByteSet-\u003eByteSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a single class which abstracts over Get and\n   IncrementalGet, so that one can write parsers which work in both.\n   If you are using this module, you may find that\n   -fno-monomorphism-restriction is very useful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Strict.Class",
          "name": "Class",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-Class.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains single class which abstracts over Get and IncrementalGet so that one can write parsers which work in both If you are using this module you may find that fno-monomorphism-restriction is very useful",
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "Class",
          "package": "binary-strict",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the generic class for the set of binary parsers. This lets you\n   write parser functions which are agnostic about the pattern of parsing\n   in which they get used (incremental, strict, bitwise etc)\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Class",
          "name": "BinaryParser",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-Class.html#BinaryParser",
          "type": "class"
        },
        "index": {
          "description": "This is the generic class for the set of binary parsers This lets you write parser functions which are agnostic about the pattern of parsing in which they get used incremental strict bitwise etc",
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "BinaryParser",
          "package": "binary-strict",
          "partial": "Binary Parser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#t:BinaryParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "bytesRead",
          "package": "binary-strict",
          "signature": "m Int",
          "source": "src/Data-Binary-Strict-Class.html#bytesRead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "bytesRead",
          "package": "binary-strict",
          "partial": "Read",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getByteString",
          "package": "binary-strict",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Data-Binary-Strict-Class.html#getByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getByteString",
          "normalized": "Int-\u003ea ByteString",
          "package": "binary-strict",
          "partial": "Byte String",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16be",
          "package": "binary-strict",
          "signature": "m Word16",
          "source": "src/Data-Binary-Strict-Class.html#getWord16be",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16host",
          "package": "binary-strict",
          "signature": "m Word16",
          "source": "src/Data-Binary-Strict-Class.html#getWord16host",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16le",
          "package": "binary-strict",
          "signature": "m Word16",
          "source": "src/Data-Binary-Strict-Class.html#getWord16le",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord16le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32be",
          "package": "binary-strict",
          "signature": "m Word32",
          "source": "src/Data-Binary-Strict-Class.html#getWord32be",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32host",
          "package": "binary-strict",
          "signature": "m Word32",
          "source": "src/Data-Binary-Strict-Class.html#getWord32host",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32le",
          "package": "binary-strict",
          "signature": "m Word32",
          "source": "src/Data-Binary-Strict-Class.html#getWord32le",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord32le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64be",
          "package": "binary-strict",
          "signature": "m Word64",
          "source": "src/Data-Binary-Strict-Class.html#getWord64be",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64host",
          "package": "binary-strict",
          "signature": "m Word64",
          "source": "src/Data-Binary-Strict-Class.html#getWord64host",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64le",
          "package": "binary-strict",
          "signature": "m Word64",
          "source": "src/Data-Binary-Strict-Class.html#getWord64le",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord64le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWord8",
          "package": "binary-strict",
          "signature": "m Word8",
          "source": "src/Data-Binary-Strict-Class.html#getWord8",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWord8",
          "package": "binary-strict",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "getWordhost",
          "package": "binary-strict",
          "signature": "m Word",
          "source": "src/Data-Binary-Strict-Class.html#getWordhost",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "getWordhost",
          "package": "binary-strict",
          "partial": "Wordhost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "isEmpty",
          "package": "binary-strict",
          "signature": "m Bool",
          "source": "src/Data-Binary-Strict-Class.html#isEmpty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "isEmpty",
          "package": "binary-strict",
          "partial": "Empty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "many",
          "package": "binary-strict",
          "signature": "m a -\u003e m [a]",
          "source": "src/Data-Binary-Strict-Class.html#many",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "many",
          "normalized": "a b-\u003ea[b]",
          "package": "binary-strict",
          "signature": "m a-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "many1",
          "package": "binary-strict",
          "signature": "m a -\u003e m [a]",
          "source": "src/Data-Binary-Strict-Class.html#many1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "many1",
          "normalized": "a b-\u003ea[b]",
          "package": "binary-strict",
          "signature": "m a-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "oneOf",
          "package": "binary-strict",
          "signature": "(Word8 -\u003e Bool) -\u003e m Word8",
          "source": "src/Data-Binary-Strict-Class.html#oneOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "oneOf",
          "normalized": "(Word-\u003eBool)-\u003ea Word",
          "package": "binary-strict",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "optional",
          "package": "binary-strict",
          "signature": "m a -\u003e m (Maybe a)",
          "source": "src/Data-Binary-Strict-Class.html#optional",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "optional",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "binary-strict",
          "signature": "m a-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "remaining",
          "package": "binary-strict",
          "signature": "m Int",
          "source": "src/Data-Binary-Strict-Class.html#remaining",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "remaining",
          "package": "binary-strict",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "skip",
          "package": "binary-strict",
          "signature": "Int -\u003e m ()",
          "source": "src/Data-Binary-Strict-Class.html#skip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "skip",
          "normalized": "Int-\u003ea()",
          "package": "binary-strict",
          "signature": "Int-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "spanOf",
          "package": "binary-strict",
          "signature": "(Word8 -\u003e Bool) -\u003e m ByteString",
          "source": "src/Data-Binary-Strict-Class.html#spanOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "spanOf",
          "normalized": "(Word-\u003eBool)-\u003ea ByteString",
          "package": "binary-strict",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:spanOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "spanOf1",
          "package": "binary-strict",
          "signature": "(Word8 -\u003e Bool) -\u003e m ByteString",
          "source": "src/Data-Binary-Strict-Class.html#spanOf1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "spanOf1",
          "normalized": "(Word-\u003eBool)-\u003ea ByteString",
          "package": "binary-strict",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:spanOf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "string",
          "package": "binary-strict",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Data-Binary-Strict-Class.html#string",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "string",
          "normalized": "ByteString-\u003ea()",
          "package": "binary-strict",
          "signature": "ByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Class",
          "name": "word8",
          "package": "binary-strict",
          "signature": "Word8 -\u003e m ()",
          "source": "src/Data-Binary-Strict-Class.html#word8",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Strict Class",
          "module": "Data.Binary.Strict.Class",
          "name": "word8",
          "normalized": "Word-\u003ea()",
          "package": "binary-strict",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a strict version of the Get monad from the binary package. It's\n pretty much just a copy and paste job from the original source code.\n The binary team are currently unsure about their future plans w.r.t.\n strictness, so this is a stop gap measure.\n\u003c/p\u003e\u003cp\u003eTo use, write a function in the Get monad:\n\u003c/p\u003e\u003cpre\u003e import Data.Binary.Strict.Get as BinStrict\n import Data.ByteString as BS\n parse :: BinStrict.Get\n parse = getWord16be\n main = print $ runGet parse $ BS.pack [1, 1]\n\u003c/pre\u003e\u003cp\u003eThis results in a tuple of (Right 257, \"\") (where the second element is\n just the remaining data after the parser has run)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "Get",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-Get.html",
          "type": "module"
        },
        "index": {
          "description": "This is strict version of the Get monad from the binary package It pretty much just copy and paste job from the original source code The binary team are currently unsure about their future plans w.r.t strictness so this is stop gap measure To use write function in the Get monad import Data.Binary.Strict.Get as BinStrict import Data.ByteString as BS parse BinStrict.Get parse getWord16be main print runGet parse BS.pack This results in tuple of Right where the second element is just the remaining data after the parser has run",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "Get",
          "package": "binary-strict",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "Get",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-Get.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "Get",
          "package": "binary-strict",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the total number of bytes read to this point.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "bytesRead",
          "package": "binary-strict",
          "signature": "Get Int",
          "source": "src/Data-Binary-Strict-Get.html#bytesRead",
          "type": "function"
        },
        "index": {
          "description": "Get the total number of bytes read to this point",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "bytesRead",
          "package": "binary-strict",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "getByteString",
          "package": "binary-strict",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Binary-Strict-Get.html#getByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "binary-strict",
          "partial": "Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getFloat32host",
          "package": "binary-strict",
          "signature": "Get Float",
          "source": "src/Data-Binary-Strict-Get.html#getFloat32host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getFloat32host",
          "package": "binary-strict",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getFloat32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getFloat64host",
          "package": "binary-strict",
          "signature": "Get Double",
          "source": "src/Data-Binary-Strict-Get.html#getFloat64host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getFloat64host",
          "package": "binary-strict",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getFloat64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16be",
          "package": "binary-strict",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Strict-Get.html#getWord16be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16host",
          "package": "binary-strict",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Strict-Get.html#getWord16host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16le",
          "package": "binary-strict",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Strict-Get.html#getWord16le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord16le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32be",
          "package": "binary-strict",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Strict-Get.html#getWord32be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32host",
          "package": "binary-strict",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Strict-Get.html#getWord32host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32le",
          "package": "binary-strict",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Strict-Get.html#getWord32le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord32le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64be",
          "package": "binary-strict",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Strict-Get.html#getWord64be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64host",
          "package": "binary-strict",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Strict-Get.html#getWord64host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64le",
          "package": "binary-strict",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Strict-Get.html#getWord64le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord64le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWord8",
          "package": "binary-strict",
          "signature": "Get Word8",
          "source": "src/Data-Binary-Strict-Get.html#getWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWord8",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "getWordhost",
          "package": "binary-strict",
          "signature": "Get Word",
          "source": "src/Data-Binary-Strict-Get.html#getWordhost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "getWordhost",
          "package": "binary-strict",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "isEmpty",
          "package": "binary-strict",
          "signature": "Get Bool",
          "source": "src/Data-Binary-Strict-Get.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "isEmpty",
          "package": "binary-strict",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAhead",
          "package": "binary-strict",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Strict-Get.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "Run ga but return without consuming its input Fails if ga fails",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAhead",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-strict",
          "partial": "Ahead",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAheadE",
          "package": "binary-strict",
          "signature": "Get (Either a b) -\u003e Get (Either a b)",
          "source": "src/Data-Binary-Strict-Get.html#lookAheadE",
          "type": "function"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAheadE",
          "normalized": "Get(Either a b)-\u003eGet(Either a b)",
          "package": "binary-strict",
          "partial": "Ahead",
          "signature": "Get(Either a b)-\u003eGet(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAheadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAheadM",
          "package": "binary-strict",
          "signature": "Get (Maybe a) -\u003e Get (Maybe a)",
          "source": "src/Data-Binary-Strict-Get.html#lookAheadM",
          "type": "function"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "lookAheadM",
          "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
          "package": "binary-strict",
          "partial": "Ahead",
          "signature": "Get(Maybe a)-\u003eGet(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "plus",
          "package": "binary-strict",
          "signature": "Get a -\u003e Get a -\u003e Get a",
          "source": "src/Data-Binary-Strict-Get.html#plus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "plus",
          "normalized": "Get a-\u003eGet a-\u003eGet a",
          "package": "binary-strict",
          "signature": "Get a-\u003eGet a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "remaining",
          "package": "binary-strict",
          "signature": "Get Int",
          "source": "src/Data-Binary-Strict-Get.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "remaining",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser on the given input and return the result (either an error\n   string from a call to \u003ccode\u003efail\u003c/code\u003e, or the parsing result) and the remainder of\n   of the input.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "runGet",
          "package": "binary-strict",
          "signature": "Get a -\u003e ByteString -\u003e (Either String a, ByteString)",
          "source": "src/Data-Binary-Strict-Get.html#runGet",
          "type": "function"
        },
        "index": {
          "description": "Run parser on the given input and return the result either an error string from call to fail or the parsing result and the remainder of of the input",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "runGet",
          "normalized": "Get a-\u003eByteString-\u003e(Either String a,ByteString)",
          "package": "binary-strict",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003e(Either String a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:runGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Get",
          "name": "skip",
          "package": "binary-strict",
          "signature": "Int -\u003e Get ()",
          "source": "src/Data-Binary-Strict-Get.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip ahead bytes Fails if fewer than bytes are available",
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "skip",
          "normalized": "Int-\u003eGet()",
          "package": "binary-strict",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "spanOf",
          "package": "binary-strict",
          "signature": "(Word8 -\u003e Bool) -\u003e Get ByteString",
          "source": "src/Data-Binary-Strict-Get.html#spanOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "spanOf",
          "normalized": "(Word-\u003eBool)-\u003eGet ByteString",
          "package": "binary-strict",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:spanOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Get",
          "name": "zero",
          "package": "binary-strict",
          "signature": "Get a",
          "source": "src/Data-Binary-Strict-Get.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict Get",
          "module": "Data.Binary.Strict.Get",
          "name": "zero",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a version of the Get monad for incremental parsing. The parser is\n written as if a single, huge, strict ByteString was to be parsed. It\n produces results as it parses by calling yield.\n\u003c/p\u003e\u003cp\u003eHowever, if the parser runs out of data, rather than failing the caller sees\n a Partial result, which includes the list of yielded values so far and a\n continuation. By calling the continuation with more data, the parser\n continues, none the wiser.\n\u003c/p\u003e\u003cp\u003eTake the following example\n\u003c/p\u003e\u003cpre\u003e testParse = do\n   a \u003c- getWord16be\n   b \u003c- getWord16be\n   return $ a + b\n\n test = runGet testParse $ B.pack [1,0,0]\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003etestParse\u003c/code\u003e needs to read 4 bytes in order to complete, so test is\n a Partial, which includes the continuation function, so which you can pass\n more data until it completes\n\u003c/p\u003e\u003cp\u003eThe lookahead functions have been removed from this parser because of their\n incompatibility with the incremental monad at the moment.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "IncrementalGet",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-IncrementalGet.html",
          "type": "module"
        },
        "index": {
          "description": "This is version of the Get monad for incremental parsing The parser is written as if single huge strict ByteString was to be parsed It produces results as it parses by calling yield However if the parser runs out of data rather than failing the caller sees Partial result which includes the list of yielded values so far and continuation By calling the continuation with more data the parser continues none the wiser Take the following example testParse do getWord16be getWord16be return test runGet testParse B.pack Here testParse needs to read bytes in order to complete so test is Partial which includes the continuation function so which you can pass more data until it completes The lookahead functions have been removed from this parser because of their incompatibility with the incremental monad at the moment",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "IncrementalGet",
          "package": "binary-strict",
          "partial": "Incremental Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Get",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Get",
          "package": "binary-strict",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a partial parse\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Result",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of partial parse",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Result",
          "package": "binary-strict",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe parse failed with the given error message\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Failed",
          "package": "binary-strict",
          "signature": "Failed String",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
          "type": "function"
        },
        "index": {
          "description": "the parse failed with the given error message",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Failed",
          "package": "binary-strict",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe parse finished and produced the given list of\n   results doing so. Any unparsed data is returned.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Finished",
          "package": "binary-strict",
          "signature": "Finished ByteString a",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
          "type": "function"
        },
        "index": {
          "description": "the parse finished and produced the given list of results doing so Any unparsed data is returned",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Finished",
          "package": "binary-strict",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe parse ran out of data before finishing, but produced\n   the given list of results before doing so. To continue the\n   parse pass more data to the given continuation\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Partial",
          "package": "binary-strict",
          "signature": "Partial (ByteString -\u003e Result a)",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
          "type": "function"
        },
        "index": {
          "description": "the parse ran out of data before finishing but produced the given list of results before doing so To continue the parse pass more data to the given continuation",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "Partial",
          "normalized": "Partial(ByteString-\u003eResult a)",
          "package": "binary-strict",
          "partial": "Partial",
          "signature": "Partial(ByteString-\u003eResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the total number of bytes read to this point.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "bytesRead",
          "package": "binary-strict",
          "signature": "Get r Int",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#bytesRead",
          "type": "function"
        },
        "index": {
          "description": "Get the total number of bytes read to this point",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "bytesRead",
          "package": "binary-strict",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getByteString",
          "package": "binary-strict",
          "signature": "Int -\u003e Get r ByteString",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getByteString",
          "normalized": "Int-\u003eGet a ByteString",
          "package": "binary-strict",
          "partial": "Byte String",
          "signature": "Int-\u003eGet r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16be",
          "package": "binary-strict",
          "signature": "Get r Word16",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16host",
          "package": "binary-strict",
          "signature": "Get r Word16",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16le",
          "package": "binary-strict",
          "signature": "Get r Word16",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord16le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32be",
          "package": "binary-strict",
          "signature": "Get r Word32",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32host",
          "package": "binary-strict",
          "signature": "Get r Word32",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32le",
          "package": "binary-strict",
          "signature": "Get r Word32",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord32le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64be",
          "package": "binary-strict",
          "signature": "Get r Word64",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64be",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64host",
          "package": "binary-strict",
          "signature": "Get r Word64",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64host",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64le",
          "package": "binary-strict",
          "signature": "Get r Word64",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord64le",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord8",
          "package": "binary-strict",
          "signature": "Get r Word8",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWord8",
          "package": "binary-strict",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWordhost",
          "package": "binary-strict",
          "signature": "Get r Word",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#getWordhost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "getWordhost",
          "package": "binary-strict",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "isEmpty",
          "package": "binary-strict",
          "signature": "Get r Bool",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "isEmpty",
          "package": "binary-strict",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the choice operator. If the first option fails, the second is\n   tried. The failure of the first option must happen within this function\n   otherwise rollback is not attempted.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "plus",
          "package": "binary-strict",
          "signature": "Get r a -\u003e Get r a -\u003e Get r a",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#plus",
          "type": "function"
        },
        "index": {
          "description": "This is the choice operator If the first option fails the second is tried The failure of the first option must happen within this function otherwise rollback is not attempted",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "plus",
          "normalized": "Get a b-\u003eGet a b-\u003eGet a b",
          "package": "binary-strict",
          "signature": "Get r a-\u003eGet r a-\u003eGet r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "remaining",
          "package": "binary-strict",
          "signature": "Get r Int",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "remaining",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a parser and return the first Result.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "runGet",
          "package": "binary-strict",
          "signature": "Get r r -\u003e ByteString -\u003e Result r",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#runGet",
          "type": "function"
        },
        "index": {
          "description": "Start parser and return the first Result",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "runGet",
          "normalized": "Get a a-\u003eByteString-\u003eResult a",
          "package": "binary-strict",
          "partial": "Get",
          "signature": "Get r r-\u003eByteString-\u003eResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:runGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "skip",
          "package": "binary-strict",
          "signature": "Int -\u003e Get r ()",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip ahead bytes Fails if fewer than bytes are available",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "skip",
          "normalized": "Int-\u003eGet a()",
          "package": "binary-strict",
          "signature": "Int-\u003eGet r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "spanOf",
          "package": "binary-strict",
          "signature": "(Word8 -\u003e Bool) -\u003e Get r ByteString",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#spanOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "spanOf",
          "normalized": "(Word-\u003eBool)-\u003eGet a ByteString",
          "package": "binary-strict",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003eGet r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:spanOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a partial and get more data\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "suspend",
          "package": "binary-strict",
          "signature": "Get r ()",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#suspend",
          "type": "function"
        },
        "index": {
          "description": "Yield partial and get more data",
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "suspend",
          "normalized": "Get a()",
          "package": "binary-strict",
          "signature": "Get r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:suspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "zero",
          "package": "binary-strict",
          "signature": "Get r a",
          "source": "src/Data-Binary-Strict-IncrementalGet.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Strict IncrementalGet",
          "module": "Data.Binary.Strict.IncrementalGet",
          "name": "zero",
          "package": "binary-strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Strict.Util",
          "name": "Util",
          "package": "binary-strict",
          "source": "src/Data-Binary-Strict-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binary Strict Util",
          "module": "Data.Binary.Strict.Util",
          "name": "Util",
          "package": "binary-strict",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the same operation as hexDumpString, but also writes it to stdout\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Util",
          "name": "hexDump",
          "package": "binary-strict",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Binary-Strict-Util.html#hexDump",
          "type": "function"
        },
        "index": {
          "description": "Performs the same operation as hexDumpString but also writes it to stdout",
          "hierarchy": "Data Binary Strict Util",
          "module": "Data.Binary.Strict.Util",
          "name": "hexDump",
          "normalized": "ByteString-\u003eIO()",
          "package": "binary-strict",
          "partial": "Dump",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#v:hexDump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a strict ByteString to a lazy Char8 ByteString, where the format\n   is the same as running hexdump -C on it.\n\u003c/p\u003e",
          "module": "Data.Binary.Strict.Util",
          "name": "hexDumpString",
          "package": "binary-strict",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Binary-Strict-Util.html#hexDumpString",
          "type": "function"
        },
        "index": {
          "description": "Convert strict ByteString to lazy Char8 ByteString where the format is the same as running hexdump on it",
          "hierarchy": "Data Binary Strict Util",
          "module": "Data.Binary.Strict.Util",
          "name": "hexDumpString",
          "normalized": "ByteString-\u003eByteString",
          "package": "binary-strict",
          "partial": "Dump String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#v:hexDumpString"
      }
    }
  ]
]