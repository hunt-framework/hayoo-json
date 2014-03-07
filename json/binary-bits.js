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
        "word": "binary-bits"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse bits easily. Parsing can be done either in a monadic style, or more\n efficiently, using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e style.\n\u003c/p\u003e\u003cp\u003eFor the monadic style, write your parser as a \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e monad using the\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetBool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord16be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord32be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetWord64be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003efunctions and run it with \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor the applicative style, compose the fuctions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword16be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword32be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eword64be\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ebyteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eto make a \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e.\n Use \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e to turn it into the \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e monad to be able to run it with\n \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "Get",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits-Get.html",
          "type": "module"
        },
        "index": {
          "description": "Parse bits easily Parsing can be done either in monadic style or more efficiently using the Applicative style For the monadic style write your parser as BitGet monad using the getBool getWord8 getWord16be getWord32be getWord64be getByteString functions and run it with runBitGet For the applicative style compose the fuctions bool word8 word16be word32be word64be byteString to make Block Use block to turn it into the BitGet monad to be able to run it with runBitGet",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "Get",
          "package": "binary-bits",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e is a monad, applicative and a functor. See \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e\n for how to run it.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "BitGet",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits-Get.html#BitGet",
          "type": "data"
        },
        "index": {
          "description": "BitGet is monad applicative and functor See runBitGet for how to run it",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "BitGet",
          "package": "binary-bits",
          "partial": "Bit Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#t:BitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block that will be read with only one boundry check. Needs to know the\n number of bits in advance.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "Block",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits-Get.html#Block",
          "type": "data"
        },
        "index": {
          "description": "block that will be read with only one boundry check Needs to know the number of bits in advance",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "Block",
          "package": "binary-bits",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a block. Will be read with one single boundry check, and\n therefore requires a statically known number of bits.\n Build blocks using \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword16be\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword32be\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eword64be\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ebyteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "block",
          "package": "binary-bits",
          "signature": "Block a -\u003e BitGet a",
          "source": "src/Data-Binary-Bits-Get.html#block",
          "type": "function"
        },
        "index": {
          "description": "Get block Will be read with one single boundry check and therefore requires statically known number of bits Build blocks using bool word8 word16be word32be word64be byteString and Applicative",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "block",
          "normalized": "Block a-\u003eBitGet a",
          "package": "binary-bits",
          "signature": "Block a-\u003eBitGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 1 bit \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "bool",
          "package": "binary-bits",
          "signature": "Block Bool",
          "source": "src/Data-Binary-Bits-Get.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Read bit Bool",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "bool",
          "package": "binary-bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bytes as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "byteString",
          "package": "binary-bits",
          "signature": "Int -\u003e Block ByteString",
          "source": "src/Data-Binary-Bits-Get.html#byteString",
          "type": "function"
        },
        "index": {
          "description": "Read bytes as ByteString",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "byteString",
          "normalized": "Int-\u003eBlock ByteString",
          "package": "binary-bits",
          "partial": "String",
          "signature": "Int-\u003eBlock ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:byteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet 1 bit as a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getBool",
          "package": "binary-bits",
          "signature": "BitGet Bool",
          "source": "src/Data-Binary-Bits-Get.html#getBool",
          "type": "function"
        },
        "index": {
          "description": "Get bit as Bool",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getBool",
          "package": "binary-bits",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bytes as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getByteString",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet ByteString",
          "source": "src/Data-Binary-Bits-Get.html#getByteString",
          "type": "function"
        },
        "index": {
          "description": "Get bytes as ByteString",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getByteString",
          "normalized": "Int-\u003eBitGet ByteString",
          "package": "binary-bits",
          "partial": "Byte String",
          "signature": "Int-\u003eBitGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Bits.Get",
          "name": "getLazyByteString",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet ByteString",
          "source": "src/Data-Binary-Bits-Get.html#getLazyByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getLazyByteString",
          "normalized": "Int-\u003eBitGet ByteString",
          "package": "binary-bits",
          "partial": "Lazy Byte String",
          "signature": "Int-\u003eBitGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..16]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord16be",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet Word16",
          "source": "src/Data-Binary-Bits-Get.html#getWord16be",
          "type": "function"
        },
        "index": {
          "description": "Get bits as Word16 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord16be",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..32]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord32be",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet Word32",
          "source": "src/Data-Binary-Bits-Get.html#getWord32be",
          "type": "function"
        },
        "index": {
          "description": "Get bits as Word32 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord32be",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..64]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord64be",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet Word64",
          "source": "src/Data-Binary-Bits-Get.html#getWord64be",
          "type": "function"
        },
        "index": {
          "description": "Get bits as Word64 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord64be",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..8]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord8",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet Word8",
          "source": "src/Data-Binary-Bits-Get.html#getWord8",
          "type": "function"
        },
        "index": {
          "description": "Get bits as Word8 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "getWord8",
          "normalized": "Int-\u003eBitGet Word",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eBitGet Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eBitGet\u003c/a\u003e\u003c/code\u003e within the Binary packages \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. If a byte has\n been partially consumed it will be discarded once \u003ccode\u003e\u003ca\u003erunBitGet\u003c/a\u003e\u003c/code\u003e is finished.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "runBitGet",
          "package": "binary-bits",
          "signature": "BitGet a -\u003e Get a",
          "source": "src/Data-Binary-Bits-Get.html#runBitGet",
          "type": "function"
        },
        "index": {
          "description": "Run BitGet within the Binary packages Get monad If byte has been partially consumed it will be discarded once runBitGet is finished",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "runBitGet",
          "normalized": "BitGet a-\u003eGet a",
          "package": "binary-bits",
          "partial": "Bit Get",
          "signature": "BitGet a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:runBitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..16]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "word16be",
          "package": "binary-bits",
          "signature": "Int -\u003e Block Word16",
          "source": "src/Data-Binary-Bits-Get.html#word16be",
          "type": "function"
        },
        "index": {
          "description": "Read bits as Word16 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "word16be",
          "normalized": "Int-\u003eBlock Word",
          "package": "binary-bits",
          "signature": "Int-\u003eBlock Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..32]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "word32be",
          "package": "binary-bits",
          "signature": "Int -\u003e Block Word32",
          "source": "src/Data-Binary-Bits-Get.html#word32be",
          "type": "function"
        },
        "index": {
          "description": "Read bits as Word32 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "word32be",
          "normalized": "Int-\u003eBlock Word",
          "package": "binary-bits",
          "signature": "Int-\u003eBlock Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..64]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "word64be",
          "package": "binary-bits",
          "signature": "Int -\u003e Block Word64",
          "source": "src/Data-Binary-Bits-Get.html#word64be",
          "type": "function"
        },
        "index": {
          "description": "Read bits as Word64 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "word64be",
          "normalized": "Int-\u003eBlock Word",
          "package": "binary-bits",
          "signature": "Int-\u003eBlock Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bits as a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e must be within \u003ccode\u003e[0..8]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Get",
          "name": "word8",
          "package": "binary-bits",
          "signature": "Int -\u003e Block Word8",
          "source": "src/Data-Binary-Bits-Get.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Read bits as Word8 must be within",
          "hierarchy": "Data Binary Bits Get",
          "module": "Data.Binary.Bits.Get",
          "name": "word8",
          "normalized": "Int-\u003eBlock Word",
          "package": "binary-bits",
          "signature": "Int-\u003eBlock Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Get.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePut bits easily.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "Put",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits-Put.html",
          "type": "module"
        },
        "index": {
          "description": "Put bits easily",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "Put",
          "package": "binary-bits",
          "partial": "Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Bits.Put",
          "name": "BitPut",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits-Put.html#BitPut",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "BitPut",
          "package": "binary-bits",
          "partial": "Bit Put",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#t:BitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eBitPut\u003c/a\u003e\u003c/code\u003e. Any partially written bytes will be flushed\n before \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e executes to ensure byte alignment.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "joinPut",
          "package": "binary-bits",
          "signature": "Put -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#joinPut",
          "type": "function"
        },
        "index": {
          "description": "Run Put inside BitPut Any partially written bytes will be flushed before Put executes to ensure byte alignment",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "joinPut",
          "normalized": "Put-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Put",
          "signature": "Put-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:joinPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a 1 bit \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putBool",
          "package": "binary-bits",
          "signature": "Bool -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putBool",
          "type": "function"
        },
        "index": {
          "description": "Put bit Bool",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putBool",
          "normalized": "Bool-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Bool",
          "signature": "Bool-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putByteString",
          "package": "binary-bits",
          "signature": "ByteString -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putByteString",
          "type": "function"
        },
        "index": {
          "description": "Put ByteString",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putByteString",
          "normalized": "ByteString-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord16be",
          "package": "binary-bits",
          "signature": "Int -\u003e Word16 -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putWord16be",
          "type": "function"
        },
        "index": {
          "description": "Put the lower bits of Word16",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord16be",
          "normalized": "Int-\u003eWord-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eWord-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord32be",
          "package": "binary-bits",
          "signature": "Int -\u003e Word32 -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putWord32be",
          "type": "function"
        },
        "index": {
          "description": "Put the lower bits of Word32",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord32be",
          "normalized": "Int-\u003eWord-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eWord-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord64be",
          "package": "binary-bits",
          "signature": "Int -\u003e Word64 -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putWord64be",
          "type": "function"
        },
        "index": {
          "description": "Put the lower bits of Word64",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord64be",
          "normalized": "Int-\u003eWord-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eWord-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the \u003ccode\u003en\u003c/code\u003e lower bits of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord8",
          "package": "binary-bits",
          "signature": "Int -\u003e Word8 -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits-Put.html#putWord8",
          "type": "function"
        },
        "index": {
          "description": "Put the lower bits of Word8",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "putWord8",
          "normalized": "Int-\u003eWord-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Word",
          "signature": "Int-\u003eWord-\u003eBitPut()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:putWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eBitPut\u003c/a\u003e\u003c/code\u003e monad inside \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Bits.Put",
          "name": "runBitPut",
          "package": "binary-bits",
          "signature": "BitPut () -\u003e Put",
          "source": "src/Data-Binary-Bits-Put.html#runBitPut",
          "type": "function"
        },
        "index": {
          "description": "Run the BitPut monad inside Put",
          "hierarchy": "Data Binary Bits Put",
          "module": "Data.Binary.Bits.Put",
          "name": "runBitPut",
          "normalized": "BitPut()-\u003ePut",
          "package": "binary-bits",
          "partial": "Bit Put",
          "signature": "BitPut()-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits-Put.html#v:runBitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse and write bits easily. Parsing can be done either in a monadic style, or more\n efficiently, using the \u003ccode\u003eApplicative\u003c/code\u003e style. Writing is monadic style only.\n See \u003ca\u003eData.Binary.Bits.Get\u003c/a\u003e and \u003ca\u003eData.Binary.Bits.Put\u003c/a\u003e, respectively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Bits",
          "name": "Bits",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits.html",
          "type": "module"
        },
        "index": {
          "description": "Parse and write bits easily Parsing can be done either in monadic style or more efficiently using the Applicative style Writing is monadic style only See Data.Binary.Bits.Get and Data.Binary.Bits.Put respectively",
          "hierarchy": "Data Binary Bits",
          "module": "Data.Binary.Bits",
          "name": "Bits",
          "package": "binary-bits",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Bits",
          "name": "BinaryBit",
          "package": "binary-bits",
          "source": "src/Data-Binary-Bits.html#BinaryBit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Binary Bits",
          "module": "Data.Binary.Bits",
          "name": "BinaryBit",
          "package": "binary-bits",
          "partial": "Binary Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#t:BinaryBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Bits",
          "name": "getBits",
          "package": "binary-bits",
          "signature": "Int -\u003e BitGet a",
          "source": "src/Data-Binary-Bits.html#getBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Bits",
          "module": "Data.Binary.Bits",
          "name": "getBits",
          "normalized": "Int-\u003eBitGet a",
          "package": "binary-bits",
          "partial": "Bits",
          "signature": "Int-\u003eBitGet a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#v:getBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Bits",
          "name": "putBits",
          "package": "binary-bits",
          "signature": "Int -\u003e a -\u003e BitPut ()",
          "source": "src/Data-Binary-Bits.html#putBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Bits",
          "module": "Data.Binary.Bits",
          "name": "putBits",
          "normalized": "Int-\u003ea-\u003eBitPut()",
          "package": "binary-bits",
          "partial": "Bits",
          "signature": "Int-\u003ea-\u003eBitPut()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-bits/docs/Data-Binary-Bits.html#v:putBits"
      }
    }
  ]
]