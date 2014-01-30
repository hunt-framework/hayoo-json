[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse bits easily. Parsing can be done either in a monadic style, or more\n efficiently, using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e style.\n\u003c/p\u003e\u003cp\u003eFor the monadic style, write your parser as a \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e monad using the\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetBool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord16be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord32be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord64be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003efunctions and run it with \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor the applicative style, compose the fuctions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword16be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword32be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword64be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ebyteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eto make a \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e.\n Use \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e to turn it into the \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e monad to be able to run it with\n \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Bits-Get.html",
        "fct-type": "module",
        "title": "Get"
      },
      "index": {
        "description": "Parse bits easily Parsing can be done either in monadic style or more efficiently using the Applicative style For the monadic style write your parser as BitGet monad using the getBool getWord8 getWord16be getWord32be getWord64be getByteString functions and run it with runBitGet For the applicative style compose the fuctions bool word8 word16be word32be word64be byteString to make Block Use block to turn it into the BitGet monad to be able to run it with runBitGet",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "Get",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#t:BitGet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e is a monad, applicative and a functor. See \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e\n for how to run it.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Bits-Get.html#BitGet",
        "fct-type": "data",
        "title": "BitGet"
      },
      "index": {
        "description": "BitGet is monad applicative and functor See runBitGet for how to run it",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "BitGet",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Bit Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#t:Block",
      "description": {
        "fct-descr": "\u003cp\u003eA block that will be read with only one boundry check. Needs to know the\n number of bits in advance.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Bits-Get.html#Block",
        "fct-type": "data",
        "title": "Block"
      },
      "index": {
        "description": "block that will be read with only one boundry check Needs to know the number of bits in advance",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "Block",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003eGet a block. Will be read with one single boundry check, and\n therefore requires a statically known number of bits.\n Build blocks using \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword16be\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword32be\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword64be\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ebyteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Block a -\u003e BitGet a",
        "fct-source": "src/Data-Binary-Bits-Get.html#block",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "Get block Will be read with one single boundry check and therefore requires statically known number of bits Build blocks using bool word8 word16be word32be word64be byteString and Applicative",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "block",
        "normalized": "Block a-\u003eBitGet a",
        "package": "binary-bits",
        "partial": "",
        "signature": "Block a-\u003eBitGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:bool",
      "description": {
        "fct-descr": "\u003cp\u003eRead a 1 bit \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Block Bool",
        "fct-source": "src/Data-Binary-Bits-Get.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "Read bit Bool",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "bool",
        "normalized": "",
        "package": "binary-bits",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:byteString",
      "description": {
        "fct-descr": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bytes as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Block ByteString",
        "fct-source": "src/Data-Binary-Bits-Get.html#byteString",
        "fct-type": "function",
        "title": "byteString"
      },
      "index": {
        "description": "Read bytes as ByteString",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "byteString",
        "normalized": "Int-\u003eBlock ByteString",
        "package": "binary-bits",
        "partial": "String",
        "signature": "Int-\u003eBlock ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getBool",
      "description": {
        "fct-descr": "\u003cp\u003eGet 1 bit as a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "BitGet Bool",
        "fct-source": "src/Data-Binary-Bits-Get.html#getBool",
        "fct-type": "function",
        "title": "getBool"
      },
      "index": {
        "description": "Get bit as Bool",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getBool",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bytes as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet ByteString",
        "fct-source": "src/Data-Binary-Bits-Get.html#getByteString",
        "fct-type": "function",
        "title": "getByteString"
      },
      "index": {
        "description": "Get bytes as ByteString",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getByteString",
        "normalized": "Int-\u003eBitGet ByteString",
        "package": "binary-bits",
        "partial": "Byte String",
        "signature": "Int-\u003eBitGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getLazyByteString",
      "description": {
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet ByteString",
        "fct-source": "src/Data-Binary-Bits-Get.html#getLazyByteString",
        "fct-type": "function",
        "title": "getLazyByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getLazyByteString",
        "normalized": "Int-\u003eBitGet ByteString",
        "package": "binary-bits",
        "partial": "Lazy Byte String",
        "signature": "Int-\u003eBitGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..16]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet Word16",
        "fct-source": "src/Data-Binary-Bits-Get.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "Get bits as Word16 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getWord16be",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..32]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet Word32",
        "fct-source": "src/Data-Binary-Bits-Get.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "Get bits as Word32 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getWord32be",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..64]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet Word64",
        "fct-source": "src/Data-Binary-Bits-Get.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "Get bits as Word64 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getWord64be",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord8",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..8]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet Word8",
        "fct-source": "src/Data-Binary-Bits-Get.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "Get bits as Word8 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "getWord8",
        "normalized": "Int-\u003eBitGet Word",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eBitGet Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:runBitGet",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e within the Binary packages \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. If a byte has\n been partially consumed it will be discarded once \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e is finished.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "BitGet a -\u003e Get a",
        "fct-source": "src/Data-Binary-Bits-Get.html#runBitGet",
        "fct-type": "function",
        "title": "runBitGet"
      },
      "index": {
        "description": "Run BitGet within the Binary packages Get monad If byte has been partially consumed it will be discarded once runBitGet is finished",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "runBitGet",
        "normalized": "BitGet a-\u003eGet a",
        "package": "binary-bits",
        "partial": "Bit Get",
        "signature": "BitGet a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word16be",
      "description": {
        "fct-descr": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..16]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Block Word16",
        "fct-source": "src/Data-Binary-Bits-Get.html#word16be",
        "fct-type": "function",
        "title": "word16be"
      },
      "index": {
        "description": "Read bits as Word16 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "word16be",
        "normalized": "Int-\u003eBlock Word",
        "package": "binary-bits",
        "partial": "",
        "signature": "Int-\u003eBlock Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word32be",
      "description": {
        "fct-descr": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..32]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Block Word32",
        "fct-source": "src/Data-Binary-Bits-Get.html#word32be",
        "fct-type": "function",
        "title": "word32be"
      },
      "index": {
        "description": "Read bits as Word32 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "word32be",
        "normalized": "Int-\u003eBlock Word",
        "package": "binary-bits",
        "partial": "",
        "signature": "Int-\u003eBlock Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word64be",
      "description": {
        "fct-descr": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..64]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Block Word64",
        "fct-source": "src/Data-Binary-Bits-Get.html#word64be",
        "fct-type": "function",
        "title": "word64be"
      },
      "index": {
        "description": "Read bits as Word64 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "word64be",
        "normalized": "Int-\u003eBlock Word",
        "package": "binary-bits",
        "partial": "",
        "signature": "Int-\u003eBlock Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word8",
      "description": {
        "fct-descr": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..8]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Get",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Block Word8",
        "fct-source": "src/Data-Binary-Bits-Get.html#word8",
        "fct-type": "function",
        "title": "word8"
      },
      "index": {
        "description": "Read bits as Word8 must be within",
        "hierarchy": "Data Binary Bits Get",
        "module": "Data.Binary.Bits.Get",
        "name": "word8",
        "normalized": "Int-\u003eBlock Word",
        "package": "binary-bits",
        "partial": "",
        "signature": "Int-\u003eBlock Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePut bits easily.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Bits-Put.html",
        "fct-type": "module",
        "title": "Put"
      },
      "index": {
        "description": "Put bits easily",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "Put",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#t:BitPut",
      "description": {
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "data",
        "fct-source": "src/Data-Binary-Bits-Put.html#BitPut",
        "fct-type": "data",
        "title": "BitPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "BitPut",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Bit Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:joinPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eBitPut\u003c/a\u003e\u003c/code\u003e. Any partially written bytes will be flushed\n before \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e executes to ensure byte alignment.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Put -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#joinPut",
        "fct-type": "function",
        "title": "joinPut"
      },
      "index": {
        "description": "Run Put inside BitPut Any partially written bytes will be flushed before Put executes to ensure byte alignment",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "joinPut",
        "normalized": "Put-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Put",
        "signature": "Put-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putBool",
      "description": {
        "fct-descr": "\u003cp\u003ePut a 1 bit \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Bool -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putBool",
        "fct-type": "function",
        "title": "putBool"
      },
      "index": {
        "description": "Put bit Bool",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putBool",
        "normalized": "Bool-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Bool",
        "signature": "Bool-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putByteString",
      "description": {
        "fct-descr": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "ByteString -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putByteString",
        "fct-type": "function",
        "title": "putByteString"
      },
      "index": {
        "description": "Put ByteString",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putByteString",
        "normalized": "ByteString-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord16be",
      "description": {
        "fct-descr": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Word16 -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putWord16be",
        "fct-type": "function",
        "title": "putWord16be"
      },
      "index": {
        "description": "Put the lower bits of Word16",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putWord16be",
        "normalized": "Int-\u003eWord-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eWord-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord32be",
      "description": {
        "fct-descr": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Word32 -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putWord32be",
        "fct-type": "function",
        "title": "putWord32be"
      },
      "index": {
        "description": "Put the lower bits of Word32",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putWord32be",
        "normalized": "Int-\u003eWord-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eWord-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord64be",
      "description": {
        "fct-descr": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Word64 -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putWord64be",
        "fct-type": "function",
        "title": "putWord64be"
      },
      "index": {
        "description": "Put the lower bits of Word64",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putWord64be",
        "normalized": "Int-\u003eWord-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eWord-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord8",
      "description": {
        "fct-descr": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e Word8 -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits-Put.html#putWord8",
        "fct-type": "function",
        "title": "putWord8"
      },
      "index": {
        "description": "Put the lower bits of Word8",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "putWord8",
        "normalized": "Int-\u003eWord-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Word",
        "signature": "Int-\u003eWord-\u003eBitPut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:runBitPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eBitPut\u003c/a\u003e\u003c/code\u003e monad inside \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Binary.Bits.Put",
        "fct-package": "binary-bits",
        "fct-signature": "BitPut () -\u003e Put",
        "fct-source": "src/Data-Binary-Bits-Put.html#runBitPut",
        "fct-type": "function",
        "title": "runBitPut"
      },
      "index": {
        "description": "Run the BitPut monad inside Put",
        "hierarchy": "Data Binary Bits Put",
        "module": "Data.Binary.Bits.Put",
        "name": "runBitPut",
        "normalized": "BitPut()-\u003ePut",
        "package": "binary-bits",
        "partial": "Bit Put",
        "signature": "BitPut()-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse and write bits easily. Parsing can be done either in a monadic style, or more\n efficiently, using the \u003ccode\u003eApplicative\u003c/code\u003e style. Writing is monadic style only.\n See \u003ca\u003eData.Binary.Bits.Get\u003c/a\u003e and \u003ca\u003eData.Binary.Bits.Put\u003c/a\u003e, respectively.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Binary.Bits",
        "fct-package": "binary-bits",
        "fct-signature": "module",
        "fct-source": "src/Data-Binary-Bits.html",
        "fct-type": "module",
        "title": "Bits"
      },
      "index": {
        "description": "Parse and write bits easily Parsing can be done either in monadic style or more efficiently using the Applicative style Writing is monadic style only See Data.Binary.Bits.Get and Data.Binary.Bits.Put respectively",
        "hierarchy": "Data Binary Bits",
        "module": "Data.Binary.Bits",
        "name": "Bits",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#t:BinaryBit",
      "description": {
        "fct-module": "Data.Binary.Bits",
        "fct-package": "binary-bits",
        "fct-signature": "class",
        "fct-source": "src/Data-Binary-Bits.html#BinaryBit",
        "fct-type": "class",
        "title": "BinaryBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Bits",
        "module": "Data.Binary.Bits",
        "name": "BinaryBit",
        "normalized": "",
        "package": "binary-bits",
        "partial": "Binary Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#v:getBits",
      "description": {
        "fct-module": "Data.Binary.Bits",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e BitGet a",
        "fct-source": "src/Data-Binary-Bits.html#getBits",
        "fct-type": "method",
        "title": "getBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Bits",
        "module": "Data.Binary.Bits",
        "name": "getBits",
        "normalized": "Int-\u003eBitGet a",
        "package": "binary-bits",
        "partial": "Bits",
        "signature": "Int-\u003eBitGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#v:putBits",
      "description": {
        "fct-module": "Data.Binary.Bits",
        "fct-package": "binary-bits",
        "fct-signature": "Int -\u003e a -\u003e BitPut ()",
        "fct-source": "src/Data-Binary-Bits.html#putBits",
        "fct-type": "method",
        "title": "putBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Binary Bits",
        "module": "Data.Binary.Bits",
        "name": "putBits",
        "normalized": "Int-\u003ea-\u003eBitPut()",
        "package": "binary-bits",
        "partial": "Bits",
        "signature": "Int-\u003ea-\u003eBitPut()"
      }
    }
  }
]