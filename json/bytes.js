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
        "word": "bytes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generalizes the \u003ccode\u003ebinary\u003c/code\u003e \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ecereal\u003c/code\u003e \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e\n monads in an ad hoc fashion to permit code to be written that is\n compatible across them.\n\u003c/p\u003e\u003cp\u003eMoreover, this class permits code to be written to be portable over\n various monad transformers applied to these as base monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bytes.Get",
          "name": "Get",
          "package": "bytes",
          "source": "src/Data-Bytes-Get.html",
          "type": "module"
        },
        "index": {
          "description": "This module generalizes the binary Get and cereal Get monads in an ad hoc fashion to permit code to be written that is compatible across them Moreover this class permits code to be written to be portable over various monad transformers applied to these as base monads",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "Get",
          "package": "bytes",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Get",
          "name": "MonadGet",
          "package": "bytes",
          "source": "src/Data-Bytes-Get.html#MonadGet",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "MonadGet",
          "package": "bytes",
          "partial": "Monad Get",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#t:MonadGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf at least \u003ccode\u003en\u003c/code\u003e bytes are available return at least that much of the current input.\n Otherwise fail.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "ensure",
          "package": "bytes",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Data-Bytes-Get.html#ensure",
          "type": "method"
        },
        "index": {
          "description": "If at least bytes are available return at least that much of the current input Otherwise fail",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "ensure",
          "normalized": "Int-\u003ea ByteString",
          "package": "bytes",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getByteString",
          "package": "bytes",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Data-Bytes-Get.html#getByteString",
          "type": "method"
        },
        "index": {
          "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getByteString",
          "normalized": "Int-\u003ea ByteString",
          "package": "bytes",
          "partial": "Byte String",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getBytes",
          "package": "bytes",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Data-Bytes-Get.html#getBytes",
          "type": "method"
        },
        "index": {
          "description": "Pull bytes from the input as strict ByteString",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getBytes",
          "normalized": "Int-\u003ea ByteString",
          "package": "bytes",
          "partial": "Bytes",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e method for lazy ByteStrings. Does not fail if fewer than\n \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getLazyByteString",
          "package": "bytes",
          "signature": "Int64 -\u003e m ByteString",
          "source": "src/Data-Bytes-Get.html#getLazyByteString",
          "type": "method"
        },
        "index": {
          "description": "An efficient get method for lazy ByteStrings Does not fail if fewer than bytes are left in the input",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getLazyByteString",
          "normalized": "Int-\u003ea ByteString",
          "package": "bytes",
          "partial": "Lazy Byte String",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord16be",
          "package": "bytes",
          "signature": "m Word16",
          "source": "src/Data-Bytes-Get.html#getWord16be",
          "type": "method"
        },
        "index": {
          "description": "Read Word16 in big endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord16be",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a 2 byte \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord16host",
          "package": "bytes",
          "signature": "m Word16",
          "source": "src/Data-Bytes-Get.html#getWord16host",
          "type": "method"
        },
        "index": {
          "description": "Read byte Word16 in native host order and host endianness",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord16host",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord16le",
          "package": "bytes",
          "signature": "m Word16",
          "source": "src/Data-Bytes-Get.html#getWord16le",
          "type": "method"
        },
        "index": {
          "description": "Read Word16 in little endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord16le",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord32be",
          "package": "bytes",
          "signature": "m Word32",
          "source": "src/Data-Bytes-Get.html#getWord32be",
          "type": "method"
        },
        "index": {
          "description": "Read Word32 in big endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord32be",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord32host",
          "package": "bytes",
          "signature": "m Word32",
          "source": "src/Data-Bytes-Get.html#getWord32host",
          "type": "method"
        },
        "index": {
          "description": "Read Word32 in native host order and host endianness",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord32host",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord32le",
          "package": "bytes",
          "signature": "m Word32",
          "source": "src/Data-Bytes-Get.html#getWord32le",
          "type": "method"
        },
        "index": {
          "description": "Read Word32 in little endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord32le",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord64be",
          "package": "bytes",
          "signature": "m Word64",
          "source": "src/Data-Bytes-Get.html#getWord64be",
          "type": "method"
        },
        "index": {
          "description": "Read Word64 in big endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord64be",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianess.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord64host",
          "package": "bytes",
          "signature": "m Word64",
          "source": "src/Data-Bytes-Get.html#getWord64host",
          "type": "method"
        },
        "index": {
          "description": "Read Word64 in native host order and host endianess",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord64host",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord64le",
          "package": "bytes",
          "signature": "m Word64",
          "source": "src/Data-Bytes-Get.html#getWord64le",
          "type": "method"
        },
        "index": {
          "description": "Read Word64 in little endian format",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord64le",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word8 from the monad state\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWord8",
          "package": "bytes",
          "signature": "m Word8",
          "source": "src/Data-Bytes-Get.html#getWord8",
          "type": "method"
        },
        "index": {
          "description": "Read Word8 from the monad state",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWord8",
          "package": "bytes",
          "partial": "Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a single native machine word. The word is read in\n host order, host endian form, for the machine you're on. On a 64 bit\n machine the Word is an 8 byte value, on a 32 bit machine, 4 bytes.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "getWordhost",
          "package": "bytes",
          "signature": "m Word",
          "source": "src/Data-Bytes-Get.html#getWordhost",
          "type": "method"
        },
        "index": {
          "description": "Read single native machine word The word is read in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "getWordhost",
          "package": "bytes",
          "partial": "Wordhost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "isEmpty",
          "package": "bytes",
          "signature": "m Bool",
          "source": "src/Data-Bytes-Get.html#isEmpty",
          "type": "method"
        },
        "index": {
          "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "isEmpty",
          "package": "bytes",
          "partial": "Empty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "lookAhead",
          "package": "bytes",
          "signature": "m a -\u003e m a",
          "source": "src/Data-Bytes-Get.html#lookAhead",
          "type": "method"
        },
        "index": {
          "description": "Run ga but return without consuming its input Fails if ga fails",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "lookAhead",
          "normalized": "a b-\u003ea b",
          "package": "bytes",
          "partial": "Ahead",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "lookAheadE",
          "package": "bytes",
          "signature": "m (Either a b) -\u003e m (Either a b)",
          "source": "src/Data-Bytes-Get.html#lookAheadE",
          "type": "method"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "lookAheadE",
          "normalized": "a(Either b c)-\u003ea(Either b c)",
          "package": "bytes",
          "partial": "Ahead",
          "signature": "m(Either a b)-\u003em(Either a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAheadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "lookAheadM",
          "package": "bytes",
          "signature": "m (Maybe a) -\u003e m (Maybe a)",
          "source": "src/Data-Bytes-Get.html#lookAheadM",
          "type": "method"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "lookAheadM",
          "normalized": "a(Maybe b)-\u003ea(Maybe b)",
          "package": "bytes",
          "partial": "Ahead",
          "signature": "m(Maybe a)-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n Note that this forces the rest of the input.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "remaining",
          "package": "bytes",
          "signature": "m (Remaining m)",
          "source": "src/Data-Bytes-Get.html#remaining",
          "type": "method"
        },
        "index": {
          "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed Note that this forces the rest of the input",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "remaining",
          "package": "bytes",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet something from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "runGetL",
          "package": "bytes",
          "signature": "Get a -\u003e ByteString -\u003e a",
          "source": "src/Data-Bytes-Get.html#runGetL",
          "type": "function"
        },
        "index": {
          "description": "Get something from lazy ByteString using runGet",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "runGetL",
          "normalized": "Get a-\u003eByteString-\u003ea",
          "package": "bytes",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:runGetL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet something from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "runGetS",
          "package": "bytes",
          "signature": "Get a -\u003e ByteString -\u003e Either String a",
          "source": "src/Data-Bytes-Get.html#runGetS",
          "type": "function"
        },
        "index": {
          "description": "Get something from strict ByteString using runGet",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "runGetS",
          "normalized": "Get a-\u003eByteString-\u003eEither String a",
          "package": "bytes",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:runGetS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
          "module": "Data.Bytes.Get",
          "name": "skip",
          "package": "bytes",
          "signature": "Int -\u003e m ()",
          "source": "src/Data-Bytes-Get.html#skip",
          "type": "method"
        },
        "index": {
          "description": "Skip ahead bytes Fails if fewer than bytes are available",
          "hierarchy": "Data Bytes Get",
          "module": "Data.Bytes.Get",
          "name": "skip",
          "normalized": "Int-\u003ea()",
          "package": "bytes",
          "signature": "Int-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generalizes the \u003ccode\u003ebinary\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePutM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ecereal\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePutM\u003c/a\u003e\u003c/code\u003e\n monads in an ad hoc fashion to permit code to be written that is\n compatible across them.\n\u003c/p\u003e\u003cp\u003eMoreover, this class permits code to be written to be portable over\n various monad transformers applied to these as base monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bytes.Put",
          "name": "Put",
          "package": "bytes",
          "source": "src/Data-Bytes-Put.html",
          "type": "module"
        },
        "index": {
          "description": "This module generalizes the binary PutM and cereal PutM monads in an ad hoc fashion to permit code to be written that is compatible across them Moreover this class permits code to be written to be portable over various monad transformers applied to these as base monads",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "Put",
          "package": "bytes",
          "partial": "Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Put",
          "name": "MonadPut",
          "package": "bytes",
          "source": "src/Data-Bytes-Put.html#MonadPut",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "MonadPut",
          "package": "bytes",
          "partial": "Monad Put",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#t:MonadPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any, yielding a\n new chunk in the result \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf we're building a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003ecereal\u003c/code\u003e then this does nothing.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "flush",
          "package": "bytes",
          "signature": "m ()",
          "source": "src/Data-Bytes-Put.html#flush",
          "type": "method"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result ByteString If we re building strict ByteString with cereal then this does nothing",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "flush",
          "normalized": "a()",
          "package": "bytes",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient primitive to write a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into the output buffer.\n\u003c/p\u003e\u003cp\u003eIn \u003ccode\u003ebinary\u003c/code\u003e this flushes the current buffer, and writes the argument into a new chunk.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putByteString",
          "package": "bytes",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putByteString",
          "type": "method"
        },
        "index": {
          "description": "An efficient primitive to write strict ByteString into the output buffer In binary this flushes the current buffer and writes the argument into new chunk",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putByteString",
          "normalized": "ByteString-\u003ea()",
          "package": "bytes",
          "partial": "Byte String",
          "signature": "ByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e efficiently.\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003ebinary\u003c/code\u003e, this simply appends the chunks to the output buffer\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putLazyByteString",
          "package": "bytes",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putLazyByteString",
          "type": "method"
        },
        "index": {
          "description": "Write lazy ByteString efficiently With binary this simply appends the chunks to the output buffer",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putLazyByteString",
          "normalized": "ByteString-\u003ea()",
          "package": "bytes",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord16be",
          "package": "bytes",
          "signature": "Word16 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord16be",
          "type": "method"
        },
        "index": {
          "description": "Write Word16 in big endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord16be",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003e\u003ca\u003eputWordhost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord16host",
          "package": "bytes",
          "signature": "Word16 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord16host",
          "type": "method"
        },
        "index": {
          "description": "Write Word16 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord16host",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord16le",
          "package": "bytes",
          "signature": "Word16 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord16le",
          "type": "method"
        },
        "index": {
          "description": "Write Word16 in little endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord16le",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord32be",
          "package": "bytes",
          "signature": "Word32 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord32be",
          "type": "method"
        },
        "index": {
          "description": "Write Word32 in big endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord32be",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord32host",
          "package": "bytes",
          "signature": "Word32 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord32host",
          "type": "method"
        },
        "index": {
          "description": "Write Word32 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord32host",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord32le",
          "package": "bytes",
          "signature": "Word32 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord32le",
          "type": "method"
        },
        "index": {
          "description": "Write Word32 in little endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord32le",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord64be",
          "package": "bytes",
          "signature": "Word64 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord64be",
          "type": "method"
        },
        "index": {
          "description": "Write Word64 in big endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord64be",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord64host",
          "package": "bytes",
          "signature": "Word64 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord64host",
          "type": "method"
        },
        "index": {
          "description": "Write Word64 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord64host",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord64le",
          "package": "bytes",
          "signature": "Word64 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord64le",
          "type": "method"
        },
        "index": {
          "description": "Write Word64 in little endian format",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord64le",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently write a byte into the output buffer\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWord8",
          "package": "bytes",
          "signature": "Word8 -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWord8",
          "type": "method"
        },
        "index": {
          "description": "Efficiently write byte into the output buffer",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWord8",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Word",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "putWordhost",
          "package": "bytes",
          "signature": "Word -\u003e m ()",
          "source": "src/Data-Bytes-Put.html#putWordhost",
          "type": "method"
        },
        "index": {
          "description": "Write single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "putWordhost",
          "normalized": "Word-\u003ea()",
          "package": "bytes",
          "partial": "Wordhost",
          "signature": "Word-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "runPutL",
          "package": "bytes",
          "signature": "Put -\u003e ByteString",
          "source": "src/Data-Bytes-Put.html#runPutL",
          "type": "function"
        },
        "index": {
          "description": "Put value into lazy ByteString using runPut",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "runPutL",
          "normalized": "Put-\u003eByteString",
          "package": "bytes",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:runPutL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bytes.Put",
          "name": "runPutS",
          "package": "bytes",
          "signature": "Put -\u003e ByteString",
          "source": "src/Data-Bytes-Put.html#runPutS",
          "type": "function"
        },
        "index": {
          "description": "Put value into strict ByteString using runPut",
          "hierarchy": "Data Bytes Put",
          "module": "Data.Bytes.Put",
          "name": "runPutS",
          "normalized": "Put-\u003eByteString",
          "package": "bytes",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:runPutS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains two main classes, each providing methods to\n serialize and deserialize types. \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e is the primary class,\n to be used for the canonical way to serialize a specific\n type. \u003ccode\u003e\u003ca\u003eSerialEndian\u003c/a\u003e\u003c/code\u003e is used to provide endian-specific methods\n for serializing a type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bytes.Serial",
          "name": "Serial",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains two main classes each providing methods to serialize and deserialize types Serial is the primary class to be used for the canonical way to serialize specific type SerialEndian is used to provide endian-specific methods for serializing type",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "Serial",
          "package": "bytes",
          "partial": "Serial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally to provide generic serialization\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "GSerial",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#GSerial",
          "type": "class"
        },
        "index": {
          "description": "Used internally to provide generic serialization",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "GSerial",
          "package": "bytes",
          "partial": "GSerial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally to provide generic serialization\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "GSerial1",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#GSerial1",
          "type": "class"
        },
        "index": {
          "description": "Used internally to provide generic serialization",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "GSerial1",
          "package": "bytes",
          "partial": "GSerial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerial1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally to provide generic big-endian serialization\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "GSerialEndian",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#GSerialEndian",
          "type": "class"
        },
        "index": {
          "description": "Used internally to provide generic big-endian serialization",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "GSerialEndian",
          "package": "bytes",
          "partial": "GSerial Endian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerialEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods to serialize and deserialize type \u003ccode\u003ea\u003c/code\u003e to a binary representation\n\u003c/p\u003e\u003cp\u003eInstances provided here for fixed-with Integers and Words are big endian.\nInstances for strict and lazy bytestrings store also the length of bytestring\nbig endian. Instances for Word and Int are host endian as they are\nmachine-specific types.\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "Serial",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#Serial",
          "type": "class"
        },
        "index": {
          "description": "Methods to serialize and deserialize type to binary representation Instances provided here for fixed-with Integers and Words are big endian Instances for strict and lazy bytestrings store also the length of bytestring big endian Instances for Word and Int are host endian as they are machine-specific types",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "Serial",
          "package": "bytes",
          "partial": "Serial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "Serial1",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#Serial1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "Serial1",
          "package": "bytes",
          "partial": "Serial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "Serial2",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#Serial2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "Serial2",
          "package": "bytes",
          "partial": "Serial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods to serialize and deserialize type \u003ccode\u003ea\u003c/code\u003e to a big and little endian\nbinary representations. Methods suffixed with \u003ca\u003ehost\u003c/a\u003e are automatically defined\nto use equal the methods corresponding to the current machine's native\nendianness, but they can be overridden.\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "SerialEndian",
          "package": "bytes",
          "source": "src/Data-Bytes-Serial.html#SerialEndian",
          "type": "class"
        },
        "index": {
          "description": "Methods to serialize and deserialize type to big and little endian binary representations Methods suffixed with host are automatically defined to use equal the methods corresponding to the current machine native endianness but they can be overridden",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "SerialEndian",
          "package": "bytes",
          "partial": "Serial Endian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:SerialEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserialize",
          "package": "bytes",
          "signature": "m a",
          "source": "src/Data-Bytes-Serial.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserialize",
          "package": "bytes",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserialize1",
          "package": "bytes",
          "signature": "m (f a)",
          "source": "src/Data-Bytes-Serial.html#deserialize1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserialize1",
          "package": "bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserialize2",
          "package": "bytes",
          "signature": "m (f a b)",
          "source": "src/Data-Bytes-Serial.html#deserialize2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserialize2",
          "package": "bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserializeBE",
          "package": "bytes",
          "signature": "m a",
          "source": "src/Data-Bytes-Serial.html#deserializeBE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserializeBE",
          "package": "bytes",
          "partial": "BE",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserializeHost",
          "package": "bytes",
          "signature": "m a",
          "source": "src/Data-Bytes-Serial.html#deserializeHost",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserializeHost",
          "package": "bytes",
          "partial": "Host",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserializeLE",
          "package": "bytes",
          "signature": "m a",
          "source": "src/Data-Bytes-Serial.html#deserializeLE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserializeLE",
          "package": "bytes",
          "partial": "LE",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserializeWith",
          "package": "bytes",
          "signature": "m a -\u003e m (f a)",
          "source": "src/Data-Bytes-Serial.html#deserializeWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserializeWith",
          "normalized": "a b-\u003ea(c b)",
          "package": "bytes",
          "partial": "With",
          "signature": "m a-\u003em(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "deserializeWith2",
          "package": "bytes",
          "signature": "m a -\u003e m b -\u003e m (f a b)",
          "source": "src/Data-Bytes-Serial.html#deserializeWith2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "deserializeWith2",
          "normalized": "a b-\u003ea c-\u003ea(d b c)",
          "package": "bytes",
          "partial": "With",
          "signature": "m a-\u003em b-\u003em(f a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeWith2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gdeserialize",
          "package": "bytes",
          "signature": "m (f a)",
          "source": "src/Data-Bytes-Serial.html#gdeserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gdeserialize",
          "package": "bytes",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeBE",
          "package": "bytes",
          "signature": "m (f a)",
          "source": "src/Data-Bytes-Serial.html#gdeserializeBE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeBE",
          "package": "bytes",
          "partial": "BE",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeLE",
          "package": "bytes",
          "signature": "m (f a)",
          "source": "src/Data-Bytes-Serial.html#gdeserializeLE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeLE",
          "package": "bytes",
          "partial": "LE",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeWith",
          "package": "bytes",
          "signature": "m a -\u003e m (f a)",
          "source": "src/Data-Bytes-Serial.html#gdeserializeWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gdeserializeWith",
          "normalized": "a b-\u003ea(c b)",
          "package": "bytes",
          "partial": "With",
          "signature": "m a-\u003em(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gserialize",
          "package": "bytes",
          "signature": "f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#gserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gserialize",
          "normalized": "a b-\u003ec()",
          "package": "bytes",
          "signature": "f a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gserializeBE",
          "package": "bytes",
          "signature": "f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#gserializeBE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gserializeBE",
          "normalized": "a b-\u003ec()",
          "package": "bytes",
          "partial": "BE",
          "signature": "f a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gserializeLE",
          "package": "bytes",
          "signature": "f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#gserializeLE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gserializeLE",
          "normalized": "a b-\u003ec()",
          "package": "bytes",
          "partial": "LE",
          "signature": "f a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "gserializeWith",
          "package": "bytes",
          "signature": "(a -\u003e m ()) -\u003e f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#gserializeWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "gserializeWith",
          "normalized": "(a-\u003eb())-\u003ec a-\u003eb()",
          "package": "bytes",
          "partial": "With",
          "signature": "(a-\u003em())-\u003ef a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeserialize any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e in a host-specific format.\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "restore",
          "package": "bytes",
          "signature": "m a",
          "source": "src/Data-Bytes-Serial.html#restore",
          "type": "function"
        },
        "index": {
          "description": "deserialize any Storable in host-specific format",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "restore",
          "package": "bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serialize",
          "package": "bytes",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serialize",
          "normalized": "a-\u003eb()",
          "package": "bytes",
          "signature": "a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serialize1",
          "package": "bytes",
          "signature": "f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serialize1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serialize1",
          "normalized": "a b-\u003ec()",
          "package": "bytes",
          "signature": "f a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serialize2",
          "package": "bytes",
          "signature": "f a b -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serialize2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serialize2",
          "normalized": "a b c-\u003ed()",
          "package": "bytes",
          "signature": "f a b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serializeBE",
          "package": "bytes",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serializeBE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serializeBE",
          "normalized": "a-\u003eb()",
          "package": "bytes",
          "partial": "BE",
          "signature": "a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serializeHost",
          "package": "bytes",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serializeHost",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serializeHost",
          "normalized": "a-\u003eb()",
          "package": "bytes",
          "partial": "Host",
          "signature": "a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serializeLE",
          "package": "bytes",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serializeLE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serializeLE",
          "normalized": "a-\u003eb()",
          "package": "bytes",
          "partial": "LE",
          "signature": "a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serializeWith",
          "package": "bytes",
          "signature": "(a -\u003e m ()) -\u003e f a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serializeWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serializeWith",
          "normalized": "(a-\u003eb())-\u003ec a-\u003eb()",
          "package": "bytes",
          "partial": "With",
          "signature": "(a-\u003em())-\u003ef a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Serial",
          "name": "serializeWith2",
          "package": "bytes",
          "signature": "(a -\u003e m ()) -\u003e (b -\u003e m ()) -\u003e f a b -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#serializeWith2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "serializeWith2",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003ed a c-\u003eb()",
          "package": "bytes",
          "partial": "With",
          "signature": "(a-\u003em())-\u003e(b-\u003em())-\u003ef a b-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeWith2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eserialize any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e in a host-specific format.\n\u003c/p\u003e",
          "module": "Data.Bytes.Serial",
          "name": "store",
          "package": "bytes",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Bytes-Serial.html#store",
          "type": "function"
        },
        "index": {
          "description": "serialize any Storable in host-specific format",
          "hierarchy": "Data Bytes Serial",
          "module": "Data.Bytes.Serial",
          "name": "store",
          "normalized": "a-\u003eb()",
          "package": "bytes",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen one wants to think of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as a dumb bitstring, converting\n it to a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e avoids pesky complications with respect to sign\n extension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bytes.Signed",
          "name": "Signed",
          "package": "bytes",
          "source": "src/Data-Bytes-Signed.html",
          "type": "module"
        },
        "index": {
          "description": "When one wants to think of an Int as dumb bitstring converting it to Word avoids pesky complications with respect to sign extension",
          "hierarchy": "Data Bytes Signed",
          "module": "Data.Bytes.Signed",
          "name": "Signed",
          "package": "bytes",
          "partial": "Signed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Signed",
          "name": "Signed",
          "package": "bytes",
          "signature": "Signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Signed",
          "module": "Data.Bytes.Signed",
          "name": "Signed",
          "package": "bytes",
          "partial": "Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#t:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Signed",
          "name": "Unsigned",
          "package": "bytes",
          "signature": "Unsigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Signed",
          "module": "Data.Bytes.Signed",
          "name": "Unsigned",
          "package": "bytes",
          "partial": "Unsigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#t:Unsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Signed",
          "name": "signed",
          "package": "bytes",
          "signature": "i -\u003e Signed i",
          "source": "src/Data-Bytes-Signed.html#signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Signed",
          "module": "Data.Bytes.Signed",
          "name": "signed",
          "normalized": "a-\u003eSigned a",
          "package": "bytes",
          "signature": "i-\u003eSigned i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#v:signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.Signed",
          "name": "unsigned",
          "package": "bytes",
          "signature": "i -\u003e Unsigned i",
          "source": "src/Data-Bytes-Signed.html#unsigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes Signed",
          "module": "Data.Bytes.Signed",
          "name": "unsigned",
          "normalized": "a-\u003eUnsigned a",
          "package": "bytes",
          "signature": "i-\u003eUnsigned i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#v:unsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e wrapper with a \u003ccode\u003eSerial\u003c/code\u003e instance\n that generates base-128 variable-width ints.  Values are encoded 7\n bits at a time, with the most significant being a continuation bit.\n Thus, the numbers from 0 to 127 require only a single byte to\n encode, those from 128 to 16383 require two bytes, etc.\n\u003c/p\u003e\u003cp\u003eThis format is taken from Google's \u003cem\u003eProtocol Buffers\u003c/em\u003e, which\n provides a bit more verbiage on the encoding:\n \u003ca\u003ehttps://developers.google.com/protocol-buffers/docs/encoding#varints\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "source": "src/Data-Bytes-VarInt.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides VarInt wrapper with Serial instance that generates base-128 variable-width ints Values are encoded bits at time with the most significant being continuation bit Thus the numbers from to require only single byte to encode those from to require two bytes etc This format is taken from Google Protocol Buffers which provides bit more verbiage on the encoding https developers.google.com protocol-buffers docs encoding varints",
          "hierarchy": "Data Bytes VarInt",
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "partial": "Var Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "source": "src/Data-Bytes-VarInt.html#VarInt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Bytes VarInt",
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "partial": "Var Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#t:VarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "signature": "VarInt",
          "source": "src/Data-Bytes-VarInt.html#VarInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes VarInt",
          "module": "Data.Bytes.VarInt",
          "name": "VarInt",
          "package": "bytes",
          "partial": "Var Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#v:VarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bytes.VarInt",
          "name": "unVarInt",
          "package": "bytes",
          "signature": "n",
          "source": "src/Data-Bytes-VarInt.html#VarInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bytes VarInt",
          "module": "Data.Bytes.VarInt",
          "name": "unVarInt",
          "package": "bytes",
          "partial": "Var Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#v:unVarInt"
      }
    }
  ]
]