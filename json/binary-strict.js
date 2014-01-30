[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy bytestrings, bit by bit.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-BitBuilder.html",
        "fct-type": "module",
        "title": "BitBuilder"
      },
      "index": {
        "description": "Efficient construction of lazy bytestrings bit by bit",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "BitBuilder",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#t:BitBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n There are several functions for constructing \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003es, but only one\n to inspect them: to extract any data, you have to turn them into lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e constructs a lazy \u003ccode\u003eL.Bytestring\u003c/code\u003e by filling byte\n arrays piece by piece.  As each buffer is filled, it is 'popped'\n off, to become a new chunk of the resulting lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n All this is hidden from the user of the \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is closely based on the Builder monad, but this one deals with\n single bits at a time.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-BitBuilder.html#BitBuilder",
        "fct-type": "data",
        "title": "BitBuilder"
      },
      "index": {
        "description": "BitBuilder is an efficient way to build lazy ByteString There are several functions for constructing BitBuilder but only one to inspect them to extract any data you have to turn them into lazy ByteString using toLazyByteString Internally BitBuilder constructs lazy L.Bytestring by filling byte arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy ByteString All this is hidden from the user of the BitBuilder This is closely based on the Builder monad but this one deals with single bits at time",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "BitBuilder",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The concatenation of two BitBuilders, an associative operation\n with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e x y) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e x) (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "BitBuilder -\u003e BitBuilder -\u003e BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "The concatenation of two BitBuilders an associative operation with identity empty satisfying toLazyByteString append append toLazyByteString toLazyByteString",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "append",
        "normalized": "BitBuilder-\u003eBitBuilder-\u003eBitBuilder",
        "package": "binary-strict",
        "partial": "",
        "signature": "BitBuilder-\u003eBitBuilder-\u003eBitBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty BitBuilder, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty BitBuilder satisfying toLazyByteString empty empty",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "empty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result lazy ByteString",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "flush",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromBits",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a BitBuilder by taking the bottom n bits of a Bits instance. If\n   the instance has less than n bits, this acts as if there was an infinite\n   zero filled prefix\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e a -\u003e BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#fromBits",
        "fct-type": "function",
        "title": "fromBits"
      },
      "index": {
        "description": "Construct BitBuilder by taking the bottom bits of Bits instance If the instance has less than bits this acts as if there was an infinite zero filled prefix",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "fromBits",
        "normalized": "Int-\u003ea-\u003eBitBuilder",
        "package": "binary-strict",
        "partial": "Bits",
        "signature": "Int-\u003ea-\u003eBitBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromByteString",
      "description": {
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "(ByteString, Int) -\u003e BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "fromByteString",
        "normalized": "(ByteString,Int)-\u003eBitBuilder",
        "package": "binary-strict",
        "partial": "Byte String",
        "signature": "(ByteString,Int)-\u003eBitBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:fromLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A BitBuilder taking a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e bs) = bs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#fromLazyByteString",
        "fct-type": "function",
        "title": "fromLazyByteString"
      },
      "index": {
        "description": "BitBuilder taking lazy ByteString satisfying toLazyByteString fromLazyByteString bs bs",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "fromLazyByteString",
        "normalized": "ByteString-\u003eBitBuilder",
        "package": "binary-strict",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eBitBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A BitBuilder taking a single bit, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "Bool -\u003e BitBuilder",
        "fct-source": "src/Data-Binary-BitBuilder.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "BitBuilder taking single bit satisfying toLazyByteString singleton singleton",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "singleton",
        "normalized": "Bool-\u003eBitBuilder",
        "package": "binary-strict",
        "partial": "",
        "signature": "Bool-\u003eBitBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitBuilder.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBitBuilder\u003c/a\u003e\u003c/code\u003e.\n The construction work takes place if and when the relevant part of\n the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is demanded.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitBuilder",
        "fct-package": "binary-strict",
        "fct-signature": "BitBuilder -\u003e ByteString",
        "fct-source": "src/Data-Binary-BitBuilder.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Extract lazy ByteString from BitBuilder The construction work takes place if and when the relevant part of the lazy ByteString is demanded",
        "hierarchy": "Data Binary BitBuilder",
        "module": "Data.Binary.BitBuilder",
        "name": "toLazyByteString",
        "normalized": "BitBuilder-\u003eByteString",
        "package": "binary-strict",
        "partial": "Lazy Byte String",
        "signature": "BitBuilder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the writer dual to BitGet. It allows one to append bits in a monad\n and get a strict ByteString as a result. Bits are appended from the MSB of\n the first byte towards the LSB of the last byte.\n\u003c/p\u003e\u003cp\u003eThis is best suited to small bit-fields because it accumulates bytes using\n snoc, so large results will cause a lot of copying. It would be possible\n to switch to using something similar to the Builder monad if need arises.\n However, since most protocols only have small bit fields, this should\n suffice for many cases.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-BitPut.html",
        "fct-type": "module",
        "title": "BitPut"
      },
      "index": {
        "description": "This is the writer dual to BitGet It allows one to append bits in monad and get strict ByteString as result Bits are appended from the MSB of the first byte towards the LSB of the last byte This is best suited to small bit-fields because it accumulates bytes using snoc so large results will cause lot of copying It would be possible to switch to using something similar to the Builder monad if need arises However since most protocols only have small bit fields this should suffice for many cases",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "BitPut",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPut",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "type",
        "fct-source": "src/Data-Binary-BitPut.html#BitPut",
        "fct-type": "type",
        "title": "BitPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "BitPut",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPutM",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-BitPut.html#BitPutM",
        "fct-type": "data",
        "title": "BitPutM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "BitPutM",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#t:BitPutT",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-BitPut.html#BitPutT",
        "fct-type": "data",
        "title": "BitPutT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "BitPutT",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBit",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a single bit\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "Bool -\u003e BitPut",
        "fct-source": "src/Data-Binary-BitPut.html#putBit",
        "fct-type": "function",
        "title": "putBit"
      },
      "index": {
        "description": "Append single bit",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putBit",
        "normalized": "Bool-\u003eBitPut",
        "package": "binary-strict",
        "partial": "Bit",
        "signature": "Bool-\u003eBitPut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBitT",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "Bool -\u003e BitPutT m ()",
        "fct-source": "src/Data-Binary-BitPut.html#putBitT",
        "fct-type": "function",
        "title": "putBitT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putBitT",
        "normalized": "Bool-\u003eBitPutT a()",
        "package": "binary-strict",
        "partial": "Bit",
        "signature": "Bool-\u003eBitPutT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putBits",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a value. Note that this function is undefined for instances of Bits\n   which have no fixed bitsize (like Integer)\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "a -\u003e BitPut",
        "fct-source": "src/Data-Binary-BitPut.html#putBits",
        "fct-type": "function",
        "title": "putBits"
      },
      "index": {
        "description": "Append value Note that this function is undefined for instances of Bits which have no fixed bitsize like Integer",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putBits",
        "normalized": "a-\u003eBitPut",
        "package": "binary-strict",
        "partial": "Bits",
        "signature": "a-\u003eBitPut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a ByteString\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e BitPut",
        "fct-source": "src/Data-Binary-BitPut.html#putByteString",
        "fct-type": "function",
        "title": "putByteString"
      },
      "index": {
        "description": "Append ByteString",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putByteString",
        "normalized": "ByteString-\u003eBitPut",
        "package": "binary-strict",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBitPut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putLeftByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a left aligned ByteString where ByteString has a partial byte\n   with the given number of valid bits, from the MSB downwards. The number\n   of such bits must be 0..7. (A normal ByteString, which all bytes full\n   would use 0)\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "(ByteString, Int) -\u003e BitPut",
        "fct-source": "src/Data-Binary-BitPut.html#putLeftByteString",
        "fct-type": "function",
        "title": "putLeftByteString"
      },
      "index": {
        "description": "Append left aligned ByteString where ByteString has partial byte with the given number of valid bits from the MSB downwards The number of such bits must be normal ByteString which all bytes full would use",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putLeftByteString",
        "normalized": "(ByteString,Int)-\u003eBitPut",
        "package": "binary-strict",
        "partial": "Left Byte String",
        "signature": "(ByteString,Int)-\u003eBitPut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putNBits",
      "description": {
        "fct-descr": "\u003cp\u003eAppend the bottom n bits of the given bits value. In the case that more\n   bits are requested than the value provides, this acts as if the value\n   has as unlimited number of leading 0 bits.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e a -\u003e BitPut",
        "fct-source": "src/Data-Binary-BitPut.html#putNBits",
        "fct-type": "function",
        "title": "putNBits"
      },
      "index": {
        "description": "Append the bottom bits of the given bits value In the case that more bits are requested than the value provides this acts as if the value has as unlimited number of leading bits",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putNBits",
        "normalized": "Int-\u003ea-\u003eBitPut",
        "package": "binary-strict",
        "partial": "NBits",
        "signature": "Int-\u003ea-\u003eBitPut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:putNBitsT",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e a -\u003e BitPutT m ()",
        "fct-source": "src/Data-Binary-BitPut.html#putNBitsT",
        "fct-type": "function",
        "title": "putNBitsT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "putNBitsT",
        "normalized": "Int-\u003ea-\u003eBitPutT b()",
        "package": "binary-strict",
        "partial": "NBits",
        "signature": "Int-\u003ea-\u003eBitPutT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPut",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "BitPut -\u003e ByteString",
        "fct-source": "src/Data-Binary-BitPut.html#runBitPut",
        "fct-type": "function",
        "title": "runBitPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "runBitPut",
        "normalized": "BitPut-\u003eByteString",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": "BitPut-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPutM",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "BitPutM a -\u003e (a, ByteString)",
        "fct-source": "src/Data-Binary-BitPut.html#runBitPutM",
        "fct-type": "function",
        "title": "runBitPutM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "runBitPutM",
        "normalized": "BitPutM a-\u003e(a,ByteString)",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": "BitPutM a-\u003e(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-BitPut.html#v:runBitPutT",
      "description": {
        "fct-module": "Data.Binary.BitPut",
        "fct-package": "binary-strict",
        "fct-signature": "BitPutT m a -\u003e m (a, ByteString)",
        "fct-source": "src/Data-Binary-BitPut.html#runBitPutT",
        "fct-type": "function",
        "title": "runBitPutT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary BitPut",
        "module": "Data.Binary.BitPut",
        "name": "runBitPutT",
        "normalized": "BitPutT a b-\u003ea(b,ByteString)",
        "package": "binary-strict",
        "partial": "Bit Put",
        "signature": "BitPutT m a-\u003em(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a reader monad for parsing bit-aligned data. The usual Get monad\n handles byte aligned data well.\n\u003c/p\u003e\u003cp\u003eIn this monad, the current offset into the input is a number of bits, and\n fetching n bits from the current position will shift everything correctly.\n Bit vectors are represented as ByteStrings here either the first \u003ccode\u003en\u003c/code\u003e bits\n are valid (left aligned) or the last \u003ccode\u003en\u003c/code\u003e bits are (right aligned).\n\u003c/p\u003e\u003cp\u003eIf one is looking to parse integers etc, right alignment is the easist to\n work with, however left alignment makes more sense in some situations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-BitGet.html",
        "fct-type": "module",
        "title": "BitGet"
      },
      "index": {
        "description": "This is reader monad for parsing bit-aligned data The usual Get monad handles byte aligned data well In this monad the current offset into the input is number of bits and fetching bits from the current position will shift everything correctly Bit vectors are represented as ByteStrings here either the first bits are valid left aligned or the last bits are right aligned If one is looking to parse integers etc right alignment is the easist to work with however left alignment makes more sense in some situations",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "BitGet",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#t:BitGet",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#BitGet",
        "fct-type": "data",
        "title": "BitGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "BitGet",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord16",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word16 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet Word16",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getAsWord16",
        "fct-type": "function",
        "title": "getAsWord16"
      },
      "index": {
        "description": "Read Word16 in big endian format",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getAsWord16",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-strict",
        "partial": "As Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord32",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word32 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet Word32",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getAsWord32",
        "fct-type": "function",
        "title": "getAsWord32"
      },
      "index": {
        "description": "Read Word32 in big endian format",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getAsWord32",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-strict",
        "partial": "As Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord64",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word64 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet Word64",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getAsWord64",
        "fct-type": "function",
        "title": "getAsWord64"
      },
      "index": {
        "description": "Read Word64 in big endian format",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getAsWord64",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-strict",
        "partial": "As Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getAsWord8",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet Word8",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getAsWord8",
        "fct-type": "function",
        "title": "getAsWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getAsWord8",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-strict",
        "partial": "As Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getBit",
      "description": {
        "fct-descr": "\u003cp\u003eGet a single bit from the input\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Bool",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getBit",
        "fct-type": "function",
        "title": "getBit"
      },
      "index": {
        "description": "Get single bit from the input",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getBit",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getLeftByteString",
      "description": {
        "fct-descr": "\u003cp\u003eGet a ByteString with the given number of bits, left aligned.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet ByteString",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getLeftByteString",
        "fct-type": "function",
        "title": "getLeftByteString"
      },
      "index": {
        "description": "Get ByteString with the given number of bits left aligned",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getLeftByteString",
        "normalized": "Int-\u003eBitGet ByteString",
        "package": "binary-strict",
        "partial": "Left Byte String",
        "signature": "Int-\u003eBitGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getRightByteString",
      "description": {
        "fct-descr": "\u003cp\u003eGet a ByteString with the given number of bits in, right aligned.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet ByteString",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getRightByteString",
        "fct-type": "function",
        "title": "getRightByteString"
      },
      "index": {
        "description": "Get ByteString with the given number of bits in right aligned",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getRightByteString",
        "normalized": "Int-\u003eBitGet ByteString",
        "package": "binary-strict",
        "partial": "Right Byte String",
        "signature": "Int-\u003eBitGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16be",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word16",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord16be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16host",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word16",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord16host",
        "fct-type": "function",
        "title": "getWord16host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord16host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord16le",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word16",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord16le",
        "fct-type": "function",
        "title": "getWord16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord16le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32be",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word32",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord32be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32host",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word32",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord32host",
        "fct-type": "function",
        "title": "getWord32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord32host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord32le",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word32",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord32le",
        "fct-type": "function",
        "title": "getWord32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord32le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64be",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word64",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord64be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64host",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word64",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord64host",
        "fct-type": "function",
        "title": "getWord64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord64host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord64le",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word64",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord64le",
        "fct-type": "function",
        "title": "getWord64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord64le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWord8",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word8",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWord8",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:getWordhost",
      "description": {
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Word",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#getWordhost",
        "fct-type": "function",
        "title": "getWordhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "getWordhost",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn true if there are no more bits to parse\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Bool",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Return true if there are no more bits to parse",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "isEmpty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet a -\u003e BitGet a",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "Run ga but return without consuming its input Fails if ga fails",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "lookAhead",
        "normalized": "BitGet a-\u003eBitGet a",
        "package": "binary-strict",
        "partial": "Ahead",
        "signature": "BitGet a-\u003eBitGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of bits remaining to be parsed\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "BitGet Int",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#remaining",
        "fct-type": "function",
        "title": "remaining"
      },
      "index": {
        "description": "Return the number of bits remaining to be parsed",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "remaining",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:runBitGet",
      "description": {
        "fct-descr": "\u003cp\u003eRun a BitGet on a ByteString\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e BitGet a -\u003e Either String a",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#runBitGet",
        "fct-type": "function",
        "title": "runBitGet"
      },
      "index": {
        "description": "Run BitGet on ByteString",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "runBitGet",
        "normalized": "ByteString-\u003eBitGet a-\u003eEither String a",
        "package": "binary-strict",
        "partial": "Bit Get",
        "signature": "ByteString-\u003eBitGet a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitGet.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip \u003ccode\u003en\u003c/code\u003e bits of the input. Fails if less then \u003ccode\u003en\u003c/code\u003e bits remain\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e BitGet ()",
        "fct-source": "src/Data-Binary-Strict-BitGet.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Skip bits of the input Fails if less then bits remain",
        "hierarchy": "Data Binary Strict BitGet",
        "module": "Data.Binary.Strict.BitGet",
        "name": "skip",
        "normalized": "Int-\u003eBitGet()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Int-\u003eBitGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#",
      "description": {
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html",
        "fct-type": "module",
        "title": "BitUtil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "BitUtil",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Bit Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:bottomNBits",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a Word8 with the bottom n bits set\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Word8",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#bottomNBits",
        "fct-type": "function",
        "title": "bottomNBits"
      },
      "index": {
        "description": "Return Word8 with the bottom bits set",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "bottomNBits",
        "normalized": "Int-\u003eWord",
        "package": "binary-strict",
        "partial": "NBits",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:leftShift",
      "description": {
        "fct-descr": "\u003cp\u003eShift the whole ByteString some number of bits left where 0 \u003c= \u003ccode\u003en\u003c/code\u003e \u003c 8\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#leftShift",
        "fct-type": "function",
        "title": "leftShift"
      },
      "index": {
        "description": "Shift the whole ByteString some number of bits left where",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "leftShift",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "binary-strict",
        "partial": "Shift",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:leftTruncateBits",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a ByteString to a given number of bits (counting from the left)\n   by masking out extra bits in the last byte\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#leftTruncateBits",
        "fct-type": "function",
        "title": "leftTruncateBits"
      },
      "index": {
        "description": "Truncate ByteString to given number of bits counting from the left by masking out extra bits in the last byte",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "leftTruncateBits",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "binary-strict",
        "partial": "Truncate Bits",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:rightShift",
      "description": {
        "fct-descr": "\u003cp\u003eShift the whole ByteString some number of bits right where 0 \u003c= \u003ccode\u003en\u003c/code\u003e \u003c 8\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#rightShift",
        "fct-type": "function",
        "title": "rightShift"
      },
      "index": {
        "description": "Shift the whole ByteString some number of bits right where",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "rightShift",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "binary-strict",
        "partial": "Shift",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:rightTruncateBits",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a ByteString to a given number of bits (counting from the right)\n   by masking out extra bits in the first byte\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#rightTruncateBits",
        "fct-type": "function",
        "title": "rightTruncateBits"
      },
      "index": {
        "description": "Truncate ByteString to given number of bits counting from the right by masking out extra bits in the first byte",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "rightTruncateBits",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "binary-strict",
        "partial": "Truncate Bits",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-BitUtil.html#v:topNBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used for masking the last byte of a ByteString so that extra\n   bits don't leak in\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.BitUtil",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Word8",
        "fct-source": "src/Data-Binary-Strict-BitUtil.html#topNBits",
        "fct-type": "function",
        "title": "topNBits"
      },
      "index": {
        "description": "This is used for masking the last byte of ByteString so that extra bits don leak in",
        "hierarchy": "Data Binary Strict BitUtil",
        "module": "Data.Binary.Strict.BitUtil",
        "name": "topNBits",
        "normalized": "Int-\u003eWord",
        "package": "binary-strict",
        "partial": "NBits",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ByteSet is a fast Set object for Word8's. The construction of these\n   objects isn't terribly quick, but the member function should be about\n   as good as you can get. Thus, you should use this when \u003ccode\u003emember\u003c/code\u003e is the\n   most common operation\n\u003c/p\u003e\u003cp\u003eThis object is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Binary.Strict.ByteSet as BSet\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html",
        "fct-type": "module",
        "title": "ByteSet"
      },
      "index": {
        "description": "ByteSet is fast Set object for Word8 The construction of these objects isn terribly quick but the member function should be about as good as you can get Thus you should use this when member is the most common operation This object is designed to be imported qualified import qualified Data.Binary.Strict.ByteSet as BSet",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "ByteSet",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Byte Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#t:ByteSet",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#ByteSet",
        "fct-type": "data",
        "title": "ByteSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "ByteSet",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Byte Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:complement",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#complement",
        "fct-type": "function",
        "title": "complement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "complement",
        "normalized": "ByteSet-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteSet-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:difference",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "difference",
        "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteSet-\u003eByteSet-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty set\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty set",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "empty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:fromList",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "[Word8] -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "fromList",
        "normalized": "[Word]-\u003eByteSet",
        "package": "binary-strict",
        "partial": "List",
        "signature": "[Word]-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:full",
      "description": {
        "fct-descr": "\u003cp\u003eThe set contained all elements\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#full",
        "fct-type": "function",
        "title": "full"
      },
      "index": {
        "description": "The set contained all elements",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "full",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:intersection",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "intersection",
        "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteSet-\u003eByteSet-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:member",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "member",
        "normalized": "ByteSet-\u003eWord-\u003eBool",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteSet-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a ByteSet containing all the elements from a to b, inclusive.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "Word8 -\u003e Word8 -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "Construct ByteSet containing all the elements from to inclusive",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "range",
        "normalized": "Word-\u003eWord-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eA set with a single element\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "Word8 -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "set with single element",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "singleton",
        "normalized": "Word-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "Word-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:toList",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e [Word8]",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "toList",
        "normalized": "ByteSet-\u003e[Word]",
        "package": "binary-strict",
        "partial": "List",
        "signature": "ByteSet-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-ByteSet.html#v:union",
      "description": {
        "fct-module": "Data.Binary.Strict.ByteSet",
        "fct-package": "binary-strict",
        "fct-signature": "ByteSet -\u003e ByteSet -\u003e ByteSet",
        "fct-source": "src/Data-Binary-Strict-ByteSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict ByteSet",
        "module": "Data.Binary.Strict.ByteSet",
        "name": "union",
        "normalized": "ByteSet-\u003eByteSet-\u003eByteSet",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteSet-\u003eByteSet-\u003eByteSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a single class which abstracts over Get and\n   IncrementalGet, so that one can write parsers which work in both.\n   If you are using this module, you may find that\n   -fno-monomorphism-restriction is very useful.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "This module contains single class which abstracts over Get and IncrementalGet so that one can write parsers which work in both If you are using this module you may find that fno-monomorphism-restriction is very useful",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "Class",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#t:BinaryParser",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the generic class for the set of binary parsers. This lets you\n   write parser functions which are agnostic about the pattern of parsing\n   in which they get used (incremental, strict, bitwise etc)\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "class",
        "fct-source": "src/Data-Binary-Strict-Class.html#BinaryParser",
        "fct-type": "class",
        "title": "BinaryParser"
      },
      "index": {
        "description": "This is the generic class for the set of binary parsers This lets you write parser functions which are agnostic about the pattern of parsing in which they get used incremental strict bitwise etc",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "BinaryParser",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Binary Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:bytesRead",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Int",
        "fct-source": "src/Data-Binary-Strict-Class.html#bytesRead",
        "fct-type": "method",
        "title": "bytesRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "bytesRead",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getByteString",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Data-Binary-Strict-Class.html#getByteString",
        "fct-type": "method",
        "title": "getByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getByteString",
        "normalized": "Int-\u003ea ByteString",
        "package": "binary-strict",
        "partial": "Byte String",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16be",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord16be",
        "fct-type": "method",
        "title": "getWord16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord16be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16host",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord16host",
        "fct-type": "method",
        "title": "getWord16host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord16host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord16le",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord16le",
        "fct-type": "method",
        "title": "getWord16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord16le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32be",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord32be",
        "fct-type": "method",
        "title": "getWord32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord32be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32host",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord32host",
        "fct-type": "method",
        "title": "getWord32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord32host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord32le",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord32le",
        "fct-type": "method",
        "title": "getWord32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord32le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64be",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord64be",
        "fct-type": "method",
        "title": "getWord64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord64be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64host",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord64host",
        "fct-type": "method",
        "title": "getWord64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord64host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord64le",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord64le",
        "fct-type": "method",
        "title": "getWord64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord64le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWord8",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word8",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWord8",
        "fct-type": "method",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWord8",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:getWordhost",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Word",
        "fct-source": "src/Data-Binary-Strict-Class.html#getWordhost",
        "fct-type": "method",
        "title": "getWordhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "getWordhost",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:isEmpty",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Bool",
        "fct-source": "src/Data-Binary-Strict-Class.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "isEmpty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:many",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m a -\u003e m [a]",
        "fct-source": "src/Data-Binary-Strict-Class.html#many",
        "fct-type": "method",
        "title": "many"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "many",
        "normalized": "a b-\u003ea[b]",
        "package": "binary-strict",
        "partial": "",
        "signature": "m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:many1",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m a -\u003e m [a]",
        "fct-source": "src/Data-Binary-Strict-Class.html#many1",
        "fct-type": "method",
        "title": "many1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "many1",
        "normalized": "a b-\u003ea[b]",
        "package": "binary-strict",
        "partial": "",
        "signature": "m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:oneOf",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e m Word8",
        "fct-source": "src/Data-Binary-Strict-Class.html#oneOf",
        "fct-type": "method",
        "title": "oneOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "oneOf",
        "normalized": "(Word-\u003eBool)-\u003ea Word",
        "package": "binary-strict",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:optional",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m a -\u003e m (Maybe a)",
        "fct-source": "src/Data-Binary-Strict-Class.html#optional",
        "fct-type": "method",
        "title": "optional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "optional",
        "normalized": "a b-\u003ea(Maybe b)",
        "package": "binary-strict",
        "partial": "",
        "signature": "m a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:remaining",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "m Int",
        "fct-source": "src/Data-Binary-Strict-Class.html#remaining",
        "fct-type": "method",
        "title": "remaining"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "remaining",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:skip",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Data-Binary-Strict-Class.html#skip",
        "fct-type": "method",
        "title": "skip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "skip",
        "normalized": "Int-\u003ea()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:spanOf",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e m ByteString",
        "fct-source": "src/Data-Binary-Strict-Class.html#spanOf",
        "fct-type": "method",
        "title": "spanOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "spanOf",
        "normalized": "(Word-\u003eBool)-\u003ea ByteString",
        "package": "binary-strict",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:spanOf1",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e m ByteString",
        "fct-source": "src/Data-Binary-Strict-Class.html#spanOf1",
        "fct-type": "method",
        "title": "spanOf1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "spanOf1",
        "normalized": "(Word-\u003eBool)-\u003ea ByteString",
        "package": "binary-strict",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:string",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Data-Binary-Strict-Class.html#string",
        "fct-type": "method",
        "title": "string"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "string",
        "normalized": "ByteString-\u003ea()",
        "package": "binary-strict",
        "partial": "",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Class.html#v:word8",
      "description": {
        "fct-module": "Data.Binary.Strict.Class",
        "fct-package": "binary-strict",
        "fct-signature": "Word8 -\u003e m ()",
        "fct-source": "src/Data-Binary-Strict-Class.html#word8",
        "fct-type": "method",
        "title": "word8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Class",
        "module": "Data.Binary.Strict.Class",
        "name": "word8",
        "normalized": "Word-\u003ea()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a strict version of the Get monad from the binary package. It's\n pretty much just a copy and paste job from the original source code.\n The binary team are currently unsure about their future plans w.r.t.\n strictness, so this is a stop gap measure.\n\u003c/p\u003e\u003cp\u003eTo use, write a function in the Get monad:\n\u003c/p\u003e\u003cpre\u003e import Data.Binary.Strict.Get as BinStrict\n import Data.ByteString as BS\n parse :: BinStrict.Get\n parse = getWord16be\n main = print $ runGet parse $ BS.pack [1, 1]\n\u003c/pre\u003e\u003cp\u003eThis results in a tuple of (Right 257, \"\") (where the second element is\n just the remaining data after the parser has run)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-Get.html",
        "fct-type": "module",
        "title": "Get"
      },
      "index": {
        "description": "This is strict version of the Get monad from the binary package It pretty much just copy and paste job from the original source code The binary team are currently unsure about their future plans w.r.t strictness so this is stop gap measure To use write function in the Get monad import Data.Binary.Strict.Get as BinStrict import Data.ByteString as BS parse BinStrict.Get parse getWord16be main print runGet parse BS.pack This results in tuple of Right where the second element is just the remaining data after the parser has run",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "Get",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#t:Get",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Strict-Get.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "Get",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:bytesRead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the total number of bytes read to this point.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Int",
        "fct-source": "src/Data-Binary-Strict-Get.html#bytesRead",
        "fct-type": "function",
        "title": "bytesRead"
      },
      "index": {
        "description": "Get the total number of bytes read to this point",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "bytesRead",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Data-Binary-Strict-Get.html#getByteString",
        "fct-type": "function",
        "title": "getByteString"
      },
      "index": {
        "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getByteString",
        "normalized": "Int-\u003eGet ByteString",
        "package": "binary-strict",
        "partial": "Byte String",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getFloat32host",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Binary-Strict-Get.html#getFloat32host",
        "fct-type": "function",
        "title": "getFloat32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getFloat32host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getFloat64host",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Double",
        "fct-source": "src/Data-Binary-Strict-Get.html#getFloat64host",
        "fct-type": "function",
        "title": "getFloat64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getFloat64host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16be",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord16be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16host",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord16host",
        "fct-type": "function",
        "title": "getWord16host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord16host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord16le",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord16le",
        "fct-type": "function",
        "title": "getWord16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord16le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32be",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord32be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32host",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord32host",
        "fct-type": "function",
        "title": "getWord32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord32host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord32le",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord32le",
        "fct-type": "function",
        "title": "getWord32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord32le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64be",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord64be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64host",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord64host",
        "fct-type": "function",
        "title": "getWord64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord64host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord64le",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord64le",
        "fct-type": "function",
        "title": "getWord64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord64le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWord8",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word8",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWord8",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:getWordhost",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Word",
        "fct-source": "src/Data-Binary-Strict-Get.html#getWordhost",
        "fct-type": "function",
        "title": "getWordhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "getWordhost",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Bool",
        "fct-source": "src/Data-Binary-Strict-Get.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "isEmpty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get a -\u003e Get a",
        "fct-source": "src/Data-Binary-Strict-Get.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "Run ga but return without consuming its input Fails if ga fails",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "lookAhead",
        "normalized": "Get a-\u003eGet a",
        "package": "binary-strict",
        "partial": "Ahead",
        "signature": "Get a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAheadE",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get (Either a b) -\u003e Get (Either a b)",
        "fct-source": "src/Data-Binary-Strict-Get.html#lookAheadE",
        "fct-type": "function",
        "title": "lookAheadE"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "lookAheadE",
        "normalized": "Get(Either a b)-\u003eGet(Either a b)",
        "package": "binary-strict",
        "partial": "Ahead",
        "signature": "Get(Either a b)-\u003eGet(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:lookAheadM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get (Maybe a) -\u003e Get (Maybe a)",
        "fct-source": "src/Data-Binary-Strict-Get.html#lookAheadM",
        "fct-type": "function",
        "title": "lookAheadM"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "lookAheadM",
        "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
        "package": "binary-strict",
        "partial": "Ahead",
        "signature": "Get(Maybe a)-\u003eGet(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:plus",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get a -\u003e Get a -\u003e Get a",
        "fct-source": "src/Data-Binary-Strict-Get.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "plus",
        "normalized": "Get a-\u003eGet a-\u003eGet a",
        "package": "binary-strict",
        "partial": "",
        "signature": "Get a-\u003eGet a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get Int",
        "fct-source": "src/Data-Binary-Strict-Get.html#remaining",
        "fct-type": "function",
        "title": "remaining"
      },
      "index": {
        "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "remaining",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:runGet",
      "description": {
        "fct-descr": "\u003cp\u003eRun a parser on the given input and return the result (either an error\n   string from a call to \u003ccode\u003efail\u003c/code\u003e, or the parsing result) and the remainder of\n   of the input.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get a -\u003e ByteString -\u003e (Either String a, ByteString)",
        "fct-source": "src/Data-Binary-Strict-Get.html#runGet",
        "fct-type": "function",
        "title": "runGet"
      },
      "index": {
        "description": "Run parser on the given input and return the result either an error string from call to fail or the parsing result and the remainder of of the input",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "runGet",
        "normalized": "Get a-\u003eByteString-\u003e(Either String a,ByteString)",
        "package": "binary-strict",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003e(Either String a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Get ()",
        "fct-source": "src/Data-Binary-Strict-Get.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Skip ahead bytes Fails if fewer than bytes are available",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "skip",
        "normalized": "Int-\u003eGet()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Int-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:spanOf",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Get ByteString",
        "fct-source": "src/Data-Binary-Strict-Get.html#spanOf",
        "fct-type": "function",
        "title": "spanOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "spanOf",
        "normalized": "(Word-\u003eBool)-\u003eGet ByteString",
        "package": "binary-strict",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Get.html#v:zero",
      "description": {
        "fct-module": "Data.Binary.Strict.Get",
        "fct-package": "binary-strict",
        "fct-signature": "Get a",
        "fct-source": "src/Data-Binary-Strict-Get.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Get",
        "module": "Data.Binary.Strict.Get",
        "name": "zero",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a version of the Get monad for incremental parsing. The parser is\n written as if a single, huge, strict ByteString was to be parsed. It\n produces results as it parses by calling yield.\n\u003c/p\u003e\u003cp\u003eHowever, if the parser runs out of data, rather than failing the caller sees\n a Partial result, which includes the list of yielded values so far and a\n continuation. By calling the continuation with more data, the parser\n continues, none the wiser.\n\u003c/p\u003e\u003cp\u003eTake the following example\n\u003c/p\u003e\u003cpre\u003e testParse = do\n   a \u003c- getWord16be\n   b \u003c- getWord16be\n   return $ a + b\n\n test = runGet testParse $ B.pack [1,0,0]\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003etestParse\u003c/code\u003e needs to read 4 bytes in order to complete, so test is\n a Partial, which includes the continuation function, so which you can pass\n more data until it completes\n\u003c/p\u003e\u003cp\u003eThe lookahead functions have been removed from this parser because of their\n incompatibility with the incremental monad at the moment.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html",
        "fct-type": "module",
        "title": "IncrementalGet"
      },
      "index": {
        "description": "This is version of the Get monad for incremental parsing The parser is written as if single huge strict ByteString was to be parsed It produces results as it parses by calling yield However if the parser runs out of data rather than failing the caller sees Partial result which includes the list of yielded values so far and continuation By calling the continuation with more data the parser continues none the wiser Take the following example testParse do getWord16be getWord16be return test runGet testParse B.pack Here testParse needs to read bytes in order to complete so test is Partial which includes the continuation function so which you can pass more data until it completes The lookahead functions have been removed from this parser because of their incompatibility with the incremental monad at the moment",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "IncrementalGet",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Incremental Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#t:Get",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "Get",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a partial parse\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of partial parse",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "Result",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Failed",
      "description": {
        "fct-descr": "\u003cp\u003ethe parse failed with the given error message\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Failed String",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
        "fct-type": "function",
        "title": "Failed"
      },
      "index": {
        "description": "the parse failed with the given error message",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "Failed",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Finished",
      "description": {
        "fct-descr": "\u003cp\u003ethe parse finished and produced the given list of\n   results doing so. Any unparsed data is returned.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Finished ByteString a",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
        "fct-type": "function",
        "title": "Finished"
      },
      "index": {
        "description": "the parse finished and produced the given list of results doing so Any unparsed data is returned",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "Finished",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:Partial",
      "description": {
        "fct-descr": "\u003cp\u003ethe parse ran out of data before finishing, but produced\n   the given list of results before doing so. To continue the\n   parse pass more data to the given continuation\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Partial (ByteString -\u003e Result a)",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#Result",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "the parse ran out of data before finishing but produced the given list of results before doing so To continue the parse pass more data to the given continuation",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "Partial",
        "normalized": "Partial(ByteString-\u003eResult a)",
        "package": "binary-strict",
        "partial": "Partial",
        "signature": "Partial(ByteString-\u003eResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:bytesRead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the total number of bytes read to this point.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Int",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#bytesRead",
        "fct-type": "function",
        "title": "bytesRead"
      },
      "index": {
        "description": "Get the total number of bytes read to this point",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "bytesRead",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Get r ByteString",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getByteString",
        "fct-type": "function",
        "title": "getByteString"
      },
      "index": {
        "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getByteString",
        "normalized": "Int-\u003eGet a ByteString",
        "package": "binary-strict",
        "partial": "Byte String",
        "signature": "Int-\u003eGet r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16be",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word16",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord16be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16host",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word16",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16host",
        "fct-type": "function",
        "title": "getWord16host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord16host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord16le",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word16",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord16le",
        "fct-type": "function",
        "title": "getWord16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord16le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32be",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word32",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord32be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32host",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word32",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32host",
        "fct-type": "function",
        "title": "getWord32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord32host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord32le",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word32",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord32le",
        "fct-type": "function",
        "title": "getWord32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord32le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64be",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word64",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord64be",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64host",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word64",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64host",
        "fct-type": "function",
        "title": "getWord64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord64host",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord64le",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word64",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord64le",
        "fct-type": "function",
        "title": "getWord64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord64le",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWord8",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word8",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWord8",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:getWordhost",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Word",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#getWordhost",
        "fct-type": "function",
        "title": "getWordhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "getWordhost",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Bool",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "isEmpty",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:plus",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the choice operator. If the first option fails, the second is\n   tried. The failure of the first option must happen within this function\n   otherwise rollback is not attempted.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r a -\u003e Get r a -\u003e Get r a",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "This is the choice operator If the first option fails the second is tried The failure of the first option must happen within this function otherwise rollback is not attempted",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "plus",
        "normalized": "Get a b-\u003eGet a b-\u003eGet a b",
        "package": "binary-strict",
        "partial": "",
        "signature": "Get r a-\u003eGet r a-\u003eGet r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r Int",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#remaining",
        "fct-type": "function",
        "title": "remaining"
      },
      "index": {
        "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "remaining",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:runGet",
      "description": {
        "fct-descr": "\u003cp\u003eStart a parser and return the first Result.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r r -\u003e ByteString -\u003e Result r",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#runGet",
        "fct-type": "function",
        "title": "runGet"
      },
      "index": {
        "description": "Start parser and return the first Result",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "runGet",
        "normalized": "Get a a-\u003eByteString-\u003eResult a",
        "package": "binary-strict",
        "partial": "Get",
        "signature": "Get r r-\u003eByteString-\u003eResult r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Int -\u003e Get r ()",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Skip ahead bytes Fails if fewer than bytes are available",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "skip",
        "normalized": "Int-\u003eGet a()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Int-\u003eGet r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:spanOf",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Get r ByteString",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#spanOf",
        "fct-type": "function",
        "title": "spanOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "spanOf",
        "normalized": "(Word-\u003eBool)-\u003eGet a ByteString",
        "package": "binary-strict",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003eGet r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:suspend",
      "description": {
        "fct-descr": "\u003cp\u003eYield a partial and get more data\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r ()",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#suspend",
        "fct-type": "function",
        "title": "suspend"
      },
      "index": {
        "description": "Yield partial and get more data",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "suspend",
        "normalized": "Get a()",
        "package": "binary-strict",
        "partial": "",
        "signature": "Get r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-IncrementalGet.html#v:zero",
      "description": {
        "fct-module": "Data.Binary.Strict.IncrementalGet",
        "fct-package": "binary-strict",
        "fct-signature": "Get r a",
        "fct-source": "src/Data-Binary-Strict-IncrementalGet.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict IncrementalGet",
        "module": "Data.Binary.Strict.IncrementalGet",
        "name": "zero",
        "normalized": "",
        "package": "binary-strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#",
      "description": {
        "fct-module": "Data.Binary.Strict.Util",
        "fct-package": "binary-strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Strict-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Strict Util",
        "module": "Data.Binary.Strict.Util",
        "name": "Util",
        "normalized": "",
        "package": "binary-strict",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#v:hexDump",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the same operation as hexDumpString, but also writes it to stdout\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Util",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e IO ()",
        "fct-source": "src/Data-Binary-Strict-Util.html#hexDump",
        "fct-type": "function",
        "title": "hexDump"
      },
      "index": {
        "description": "Performs the same operation as hexDumpString but also writes it to stdout",
        "hierarchy": "Data Binary Strict Util",
        "module": "Data.Binary.Strict.Util",
        "name": "hexDump",
        "normalized": "ByteString-\u003eIO()",
        "package": "binary-strict",
        "partial": "Dump",
        "signature": "ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-strict/docs/Data-Binary-Strict-Util.html#v:hexDumpString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a strict ByteString to a lazy Char8 ByteString, where the format\n   is the same as running hexdump -C on it.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Strict.Util",
        "fct-package": "binary-strict",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-Binary-Strict-Util.html#hexDumpString",
        "fct-type": "function",
        "title": "hexDumpString"
      },
      "index": {
        "description": "Convert strict ByteString to lazy Char8 ByteString where the format is the same as running hexdump on it",
        "hierarchy": "Data Binary Strict Util",
        "module": "Data.Binary.Strict.Util",
        "name": "hexDumpString",
        "normalized": "ByteString-\u003eByteString",
        "package": "binary-strict",
        "partial": "Dump String",
        "signature": "ByteString-\u003eByteString"
      }
    }
  }
]