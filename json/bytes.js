[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generalizes the \u003ccode\u003ebinary\u003c/code\u003e \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ecereal\u003c/code\u003e \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e\n monads in an ad hoc fashion to permit code to be written that is\n compatible across them.\n\u003c/p\u003e\u003cp\u003eMoreover, this class permits code to be written to be portable over\n various monad transformers applied to these as base monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "module",
        "fct-source": "src/Data-Bytes-Get.html",
        "fct-type": "module",
        "title": "Get"
      },
      "index": {
        "description": "This module generalizes the binary Get and cereal Get monads in an ad hoc fashion to permit code to be written that is compatible across them Moreover this class permits code to be written to be portable over various monad transformers applied to these as base monads",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "Get",
        "normalized": "",
        "package": "bytes",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#t:MonadGet",
      "description": {
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Get.html#MonadGet",
        "fct-type": "class",
        "title": "MonadGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "MonadGet",
        "normalized": "",
        "package": "bytes",
        "partial": "Monad Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:ensure",
      "description": {
        "fct-descr": "\u003cp\u003eIf at least \u003ccode\u003en\u003c/code\u003e bytes are available return at least that much of the current input.\n Otherwise fail.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Data-Bytes-Get.html#ensure",
        "fct-type": "method",
        "title": "ensure"
      },
      "index": {
        "description": "If at least bytes are available return at least that much of the current input Otherwise fail",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "ensure",
        "normalized": "Int-\u003ea ByteString",
        "package": "bytes",
        "partial": "",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Data-Bytes-Get.html#getByteString",
        "fct-type": "method",
        "title": "getByteString"
      },
      "index": {
        "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getByteString",
        "normalized": "Int-\u003ea ByteString",
        "package": "bytes",
        "partial": "Byte String",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getBytes",
      "description": {
        "fct-descr": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Data-Bytes-Get.html#getBytes",
        "fct-type": "method",
        "title": "getBytes"
      },
      "index": {
        "description": "Pull bytes from the input as strict ByteString",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getBytes",
        "normalized": "Int-\u003ea ByteString",
        "package": "bytes",
        "partial": "Bytes",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e method for lazy ByteStrings. Does not fail if fewer than\n \u003ccode\u003en\u003c/code\u003e bytes are left in the input.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Int64 -\u003e m ByteString",
        "fct-source": "src/Data-Bytes-Get.html#getLazyByteString",
        "fct-type": "method",
        "title": "getLazyByteString"
      },
      "index": {
        "description": "An efficient get method for lazy ByteStrings Does not fail if fewer than bytes are left in the input",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getLazyByteString",
        "normalized": "Int-\u003ea ByteString",
        "package": "bytes",
        "partial": "Lazy Byte String",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Bytes-Get.html#getWord16be",
        "fct-type": "method",
        "title": "getWord16be"
      },
      "index": {
        "description": "Read Word16 in big endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord16be",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a 2 byte \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Bytes-Get.html#getWord16host",
        "fct-type": "method",
        "title": "getWord16host"
      },
      "index": {
        "description": "Read byte Word16 in native host order and host endianness",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord16host",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word16",
        "fct-source": "src/Data-Bytes-Get.html#getWord16le",
        "fct-type": "method",
        "title": "getWord16le"
      },
      "index": {
        "description": "Read Word16 in little endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord16le",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Bytes-Get.html#getWord32be",
        "fct-type": "method",
        "title": "getWord32be"
      },
      "index": {
        "description": "Read Word32 in big endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord32be",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Bytes-Get.html#getWord32host",
        "fct-type": "method",
        "title": "getWord32host"
      },
      "index": {
        "description": "Read Word32 in native host order and host endianness",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord32host",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word32",
        "fct-source": "src/Data-Bytes-Get.html#getWord32le",
        "fct-type": "method",
        "title": "getWord32le"
      },
      "index": {
        "description": "Read Word32 in little endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord32le",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Bytes-Get.html#getWord64be",
        "fct-type": "method",
        "title": "getWord64be"
      },
      "index": {
        "description": "Read Word64 in big endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord64be",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianess.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Bytes-Get.html#getWord64host",
        "fct-type": "method",
        "title": "getWord64host"
      },
      "index": {
        "description": "Read Word64 in native host order and host endianess",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord64host",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word64",
        "fct-source": "src/Data-Bytes-Get.html#getWord64le",
        "fct-type": "method",
        "title": "getWord64le"
      },
      "index": {
        "description": "Read Word64 in little endian format",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord64le",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWord8",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word8 from the monad state\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word8",
        "fct-source": "src/Data-Bytes-Get.html#getWord8",
        "fct-type": "method",
        "title": "getWord8"
      },
      "index": {
        "description": "Read Word8 from the monad state",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWord8",
        "normalized": "",
        "package": "bytes",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:getWordhost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a single native machine word. The word is read in\n host order, host endian form, for the machine you're on. On a 64 bit\n machine the Word is an 8 byte value, on a 32 bit machine, 4 bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Word",
        "fct-source": "src/Data-Bytes-Get.html#getWordhost",
        "fct-type": "method",
        "title": "getWordhost"
      },
      "index": {
        "description": "Read single native machine word The word is read in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "getWordhost",
        "normalized": "",
        "package": "bytes",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether all input has been consumed,\n i.e. there are no remaining unparsed bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m Bool",
        "fct-source": "src/Data-Bytes-Get.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "Test whether all input has been consumed i.e there are no remaining unparsed bytes",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "isEmpty",
        "normalized": "",
        "package": "bytes",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Data-Bytes-Get.html#lookAhead",
        "fct-type": "method",
        "title": "lookAhead"
      },
      "index": {
        "description": "Run ga but return without consuming its input Fails if ga fails",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "lookAhead",
        "normalized": "a b-\u003ea b",
        "package": "bytes",
        "partial": "Ahead",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAheadE",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m (Either a b) -\u003e m (Either a b)",
        "fct-source": "src/Data-Bytes-Get.html#lookAheadE",
        "fct-type": "method",
        "title": "lookAheadE"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "lookAheadE",
        "normalized": "a(Either b c)-\u003ea(Either b c)",
        "package": "bytes",
        "partial": "Ahead",
        "signature": "m(Either a b)-\u003em(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:lookAheadM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m (Maybe a) -\u003e m (Maybe a)",
        "fct-source": "src/Data-Bytes-Get.html#lookAheadM",
        "fct-type": "method",
        "title": "lookAheadM"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "lookAheadM",
        "normalized": "a(Maybe b)-\u003ea(Maybe b)",
        "package": "bytes",
        "partial": "Ahead",
        "signature": "m(Maybe a)-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of remaining unparsed bytes.\n Useful for checking whether all input has been consumed.\n Note that this forces the rest of the input.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "m (Remaining m)",
        "fct-source": "src/Data-Bytes-Get.html#remaining",
        "fct-type": "method",
        "title": "remaining"
      },
      "index": {
        "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed Note that this forces the rest of the input",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "remaining",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:runGetL",
      "description": {
        "fct-descr": "\u003cp\u003eGet something from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Get a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-Bytes-Get.html#runGetL",
        "fct-type": "function",
        "title": "runGetL"
      },
      "index": {
        "description": "Get something from lazy ByteString using runGet",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "runGetL",
        "normalized": "Get a-\u003eByteString-\u003ea",
        "package": "bytes",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:runGetS",
      "description": {
        "fct-descr": "\u003cp\u003eGet something from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Get a -\u003e ByteString -\u003e Either String a",
        "fct-source": "src/Data-Bytes-Get.html#runGetS",
        "fct-type": "function",
        "title": "runGetS"
      },
      "index": {
        "description": "Get something from strict ByteString using runGet",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "runGetS",
        "normalized": "Get a-\u003eByteString-\u003eEither String a",
        "package": "bytes",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Get.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Get",
        "fct-package": "bytes",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Data-Bytes-Get.html#skip",
        "fct-type": "method",
        "title": "skip"
      },
      "index": {
        "description": "Skip ahead bytes Fails if fewer than bytes are available",
        "hierarchy": "Data Bytes Get",
        "module": "Data.Bytes.Get",
        "name": "skip",
        "normalized": "Int-\u003ea()",
        "package": "bytes",
        "partial": "",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generalizes the \u003ccode\u003ebinary\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePutM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ecereal\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePutM\u003c/a\u003e\u003c/code\u003e\n monads in an ad hoc fashion to permit code to be written that is\n compatible across them.\n\u003c/p\u003e\u003cp\u003eMoreover, this class permits code to be written to be portable over\n various monad transformers applied to these as base monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "module",
        "fct-source": "src/Data-Bytes-Put.html",
        "fct-type": "module",
        "title": "Put"
      },
      "index": {
        "description": "This module generalizes the binary PutM and cereal PutM monads in an ad hoc fashion to permit code to be written that is compatible across them Moreover this class permits code to be written to be portable over various monad transformers applied to these as base monads",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "Put",
        "normalized": "",
        "package": "bytes",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#t:MonadPut",
      "description": {
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Put.html#MonadPut",
        "fct-type": "class",
        "title": "MonadPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "MonadPut",
        "normalized": "",
        "package": "bytes",
        "partial": "Monad Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003ePop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any, yielding a\n new chunk in the result \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf we're building a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003ecereal\u003c/code\u003e then this does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "m ()",
        "fct-source": "src/Data-Bytes-Put.html#flush",
        "fct-type": "method",
        "title": "flush"
      },
      "index": {
        "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result ByteString If we re building strict ByteString with cereal then this does nothing",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "flush",
        "normalized": "a()",
        "package": "bytes",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient primitive to write a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into the output buffer.\n\u003c/p\u003e\u003cp\u003eIn \u003ccode\u003ebinary\u003c/code\u003e this flushes the current buffer, and writes the argument into a new chunk.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putByteString",
        "fct-type": "method",
        "title": "putByteString"
      },
      "index": {
        "description": "An efficient primitive to write strict ByteString into the output buffer In binary this flushes the current buffer and writes the argument into new chunk",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putByteString",
        "normalized": "ByteString-\u003ea()",
        "package": "bytes",
        "partial": "Byte String",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e efficiently.\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003ebinary\u003c/code\u003e, this simply appends the chunks to the output buffer\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putLazyByteString",
        "fct-type": "method",
        "title": "putLazyByteString"
      },
      "index": {
        "description": "Write lazy ByteString efficiently With binary this simply appends the chunks to the output buffer",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putLazyByteString",
        "normalized": "ByteString-\u003ea()",
        "package": "bytes",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word16 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord16be",
        "fct-type": "method",
        "title": "putWord16be"
      },
      "index": {
        "description": "Write Word16 in big endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord16be",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003e\u003ca\u003eputWordhost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word16 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord16host",
        "fct-type": "method",
        "title": "putWord16host"
      },
      "index": {
        "description": "Write Word16 in native host order and host endianness For portability issues see putWordhost",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord16host",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word16 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord16le",
        "fct-type": "method",
        "title": "putWord16le"
      },
      "index": {
        "description": "Write Word16 in little endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord16le",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word32 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord32be",
        "fct-type": "method",
        "title": "putWord32be"
      },
      "index": {
        "description": "Write Word32 in big endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord32be",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word32 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord32host",
        "fct-type": "method",
        "title": "putWord32host"
      },
      "index": {
        "description": "Write Word32 in native host order and host endianness For portability issues see putWordhost",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord32host",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word32 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord32le",
        "fct-type": "method",
        "title": "putWord32le"
      },
      "index": {
        "description": "Write Word32 in little endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord32le",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word64 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord64be",
        "fct-type": "method",
        "title": "putWord64be"
      },
      "index": {
        "description": "Write Word64 in big endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord64be",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word64 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord64host",
        "fct-type": "method",
        "title": "putWord64host"
      },
      "index": {
        "description": "Write Word64 in native host order and host endianness For portability issues see putWordhost",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord64host",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word64 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord64le",
        "fct-type": "method",
        "title": "putWord64le"
      },
      "index": {
        "description": "Write Word64 in little endian format",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord64le",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWord8",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently write a byte into the output buffer\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word8 -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWord8",
        "fct-type": "method",
        "title": "putWord8"
      },
      "index": {
        "description": "Efficiently write byte into the output buffer",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWord8",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Word",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:putWordhost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Word -\u003e m ()",
        "fct-source": "src/Data-Bytes-Put.html#putWordhost",
        "fct-type": "method",
        "title": "putWordhost"
      },
      "index": {
        "description": "Write single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "putWordhost",
        "normalized": "Word-\u003ea()",
        "package": "bytes",
        "partial": "Wordhost",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:runPutL",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Put -\u003e ByteString",
        "fct-source": "src/Data-Bytes-Put.html#runPutL",
        "fct-type": "function",
        "title": "runPutL"
      },
      "index": {
        "description": "Put value into lazy ByteString using runPut",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "runPutL",
        "normalized": "Put-\u003eByteString",
        "package": "bytes",
        "partial": "Put",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Put.html#v:runPutS",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Put",
        "fct-package": "bytes",
        "fct-signature": "Put -\u003e ByteString",
        "fct-source": "src/Data-Bytes-Put.html#runPutS",
        "fct-type": "function",
        "title": "runPutS"
      },
      "index": {
        "description": "Put value into strict ByteString using runPut",
        "hierarchy": "Data Bytes Put",
        "module": "Data.Bytes.Put",
        "name": "runPutS",
        "normalized": "Put-\u003eByteString",
        "package": "bytes",
        "partial": "Put",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains two main classes, each providing methods to\n serialize and deserialize types. \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e is the primary class,\n to be used for the canonical way to serialize a specific\n type. \u003ccode\u003e\u003ca\u003eSerialEndian\u003c/a\u003e\u003c/code\u003e is used to provide endian-specific methods\n for serializing a type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "module",
        "fct-source": "src/Data-Bytes-Serial.html",
        "fct-type": "module",
        "title": "Serial"
      },
      "index": {
        "description": "This module contains two main classes each providing methods to serialize and deserialize types Serial is the primary class to be used for the canonical way to serialize specific type SerialEndian is used to provide endian-specific methods for serializing type",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "bytes",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerial",
      "description": {
        "fct-descr": "\u003cp\u003eUsed internally to provide generic serialization\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#GSerial",
        "fct-type": "class",
        "title": "GSerial"
      },
      "index": {
        "description": "Used internally to provide generic serialization",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "GSerial",
        "normalized": "",
        "package": "bytes",
        "partial": "GSerial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerial1",
      "description": {
        "fct-descr": "\u003cp\u003eUsed internally to provide generic serialization\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#GSerial1",
        "fct-type": "class",
        "title": "GSerial1"
      },
      "index": {
        "description": "Used internally to provide generic serialization",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "GSerial1",
        "normalized": "",
        "package": "bytes",
        "partial": "GSerial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:GSerialEndian",
      "description": {
        "fct-descr": "\u003cp\u003eUsed internally to provide generic big-endian serialization\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#GSerialEndian",
        "fct-type": "class",
        "title": "GSerialEndian"
      },
      "index": {
        "description": "Used internally to provide generic big-endian serialization",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "GSerialEndian",
        "normalized": "",
        "package": "bytes",
        "partial": "GSerial Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial",
      "description": {
        "fct-descr": "\u003cp\u003eMethods to serialize and deserialize type \u003ccode\u003ea\u003c/code\u003e to a binary representation\n\u003c/p\u003e\u003cp\u003eInstances provided here for fixed-with Integers and Words are big endian.\nInstances for strict and lazy bytestrings store also the length of bytestring\nbig endian. Instances for Word and Int are host endian as they are\nmachine-specific types.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#Serial",
        "fct-type": "class",
        "title": "Serial"
      },
      "index": {
        "description": "Methods to serialize and deserialize type to binary representation Instances provided here for fixed-with Integers and Words are big endian Instances for strict and lazy bytestrings store also the length of bytestring big endian Instances for Word and Int are host endian as they are machine-specific types",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "bytes",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial1",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#Serial1",
        "fct-type": "class",
        "title": "Serial1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "Serial1",
        "normalized": "",
        "package": "bytes",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:Serial2",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#Serial2",
        "fct-type": "class",
        "title": "Serial2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "Serial2",
        "normalized": "",
        "package": "bytes",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#t:SerialEndian",
      "description": {
        "fct-descr": "\u003cp\u003eMethods to serialize and deserialize type \u003ccode\u003ea\u003c/code\u003e to a big and little endian\nbinary representations. Methods suffixed with \u003ca\u003ehost\u003c/a\u003e are automatically defined\nto use equal the methods corresponding to the current machine's native\nendianness, but they can be overridden.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "class",
        "fct-source": "src/Data-Bytes-Serial.html#SerialEndian",
        "fct-type": "class",
        "title": "SerialEndian"
      },
      "index": {
        "description": "Methods to serialize and deserialize type to big and little endian binary representations Methods suffixed with host are automatically defined to use equal the methods corresponding to the current machine native endianness but they can be overridden",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "SerialEndian",
        "normalized": "",
        "package": "bytes",
        "partial": "Serial Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a",
        "fct-source": "src/Data-Bytes-Serial.html#deserialize",
        "fct-type": "method",
        "title": "deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserialize",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize1",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#deserialize1",
        "fct-type": "function",
        "title": "deserialize1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserialize1",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserialize2",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m (f a b)",
        "fct-source": "src/Data-Bytes-Serial.html#deserialize2",
        "fct-type": "function",
        "title": "deserialize2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserialize2",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeBE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a",
        "fct-source": "src/Data-Bytes-Serial.html#deserializeBE",
        "fct-type": "method",
        "title": "deserializeBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserializeBE",
        "normalized": "",
        "package": "bytes",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeHost",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a",
        "fct-source": "src/Data-Bytes-Serial.html#deserializeHost",
        "fct-type": "method",
        "title": "deserializeHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserializeHost",
        "normalized": "",
        "package": "bytes",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeLE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a",
        "fct-source": "src/Data-Bytes-Serial.html#deserializeLE",
        "fct-type": "method",
        "title": "deserializeLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserializeLE",
        "normalized": "",
        "package": "bytes",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeWith",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a -\u003e m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#deserializeWith",
        "fct-type": "method",
        "title": "deserializeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserializeWith",
        "normalized": "a b-\u003ea(c b)",
        "package": "bytes",
        "partial": "With",
        "signature": "m a-\u003em(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:deserializeWith2",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a -\u003e m b -\u003e m (f a b)",
        "fct-source": "src/Data-Bytes-Serial.html#deserializeWith2",
        "fct-type": "method",
        "title": "deserializeWith2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "deserializeWith2",
        "normalized": "a b-\u003ea c-\u003ea(d b c)",
        "package": "bytes",
        "partial": "With",
        "signature": "m a-\u003em b-\u003em(f a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserialize",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#gdeserialize",
        "fct-type": "method",
        "title": "gdeserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gdeserialize",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeBE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#gdeserializeBE",
        "fct-type": "method",
        "title": "gdeserializeBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gdeserializeBE",
        "normalized": "",
        "package": "bytes",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeLE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#gdeserializeLE",
        "fct-type": "method",
        "title": "gdeserializeLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gdeserializeLE",
        "normalized": "",
        "package": "bytes",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gdeserializeWith",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a -\u003e m (f a)",
        "fct-source": "src/Data-Bytes-Serial.html#gdeserializeWith",
        "fct-type": "method",
        "title": "gdeserializeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gdeserializeWith",
        "normalized": "a b-\u003ea(c b)",
        "package": "bytes",
        "partial": "With",
        "signature": "m a-\u003em(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserialize",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#gserialize",
        "fct-type": "method",
        "title": "gserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gserialize",
        "normalized": "a b-\u003ec()",
        "package": "bytes",
        "partial": "",
        "signature": "f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeBE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#gserializeBE",
        "fct-type": "method",
        "title": "gserializeBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gserializeBE",
        "normalized": "a b-\u003ec()",
        "package": "bytes",
        "partial": "BE",
        "signature": "f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeLE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#gserializeLE",
        "fct-type": "method",
        "title": "gserializeLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gserializeLE",
        "normalized": "a b-\u003ec()",
        "package": "bytes",
        "partial": "LE",
        "signature": "f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:gserializeWith",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "(a -\u003e m ()) -\u003e f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#gserializeWith",
        "fct-type": "method",
        "title": "gserializeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "gserializeWith",
        "normalized": "(a-\u003eb())-\u003ec a-\u003eb()",
        "package": "bytes",
        "partial": "With",
        "signature": "(a-\u003em())-\u003ef a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:restore",
      "description": {
        "fct-descr": "\u003cp\u003edeserialize any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e in a host-specific format.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "m a",
        "fct-source": "src/Data-Bytes-Serial.html#restore",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "deserialize any Storable in host-specific format",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "restore",
        "normalized": "",
        "package": "bytes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serialize",
        "fct-type": "method",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serialize",
        "normalized": "a-\u003eb()",
        "package": "bytes",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize1",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serialize1",
        "fct-type": "function",
        "title": "serialize1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serialize1",
        "normalized": "a b-\u003ec()",
        "package": "bytes",
        "partial": "",
        "signature": "f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serialize2",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "f a b -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serialize2",
        "fct-type": "function",
        "title": "serialize2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serialize2",
        "normalized": "a b c-\u003ed()",
        "package": "bytes",
        "partial": "",
        "signature": "f a b-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeBE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serializeBE",
        "fct-type": "method",
        "title": "serializeBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serializeBE",
        "normalized": "a-\u003eb()",
        "package": "bytes",
        "partial": "BE",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeHost",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serializeHost",
        "fct-type": "method",
        "title": "serializeHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serializeHost",
        "normalized": "a-\u003eb()",
        "package": "bytes",
        "partial": "Host",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeLE",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serializeLE",
        "fct-type": "method",
        "title": "serializeLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serializeLE",
        "normalized": "a-\u003eb()",
        "package": "bytes",
        "partial": "LE",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeWith",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "(a -\u003e m ()) -\u003e f a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serializeWith",
        "fct-type": "method",
        "title": "serializeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serializeWith",
        "normalized": "(a-\u003eb())-\u003ec a-\u003eb()",
        "package": "bytes",
        "partial": "With",
        "signature": "(a-\u003em())-\u003ef a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:serializeWith2",
      "description": {
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "(a -\u003e m ()) -\u003e (b -\u003e m ()) -\u003e f a b -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#serializeWith2",
        "fct-type": "method",
        "title": "serializeWith2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "serializeWith2",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003ed a c-\u003eb()",
        "package": "bytes",
        "partial": "With",
        "signature": "(a-\u003em())-\u003e(b-\u003em())-\u003ef a b-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Serial.html#v:store",
      "description": {
        "fct-descr": "\u003cp\u003eserialize any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e in a host-specific format.\n\u003c/p\u003e",
        "fct-module": "Data.Bytes.Serial",
        "fct-package": "bytes",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Bytes-Serial.html#store",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "serialize any Storable in host-specific format",
        "hierarchy": "Data Bytes Serial",
        "module": "Data.Bytes.Serial",
        "name": "store",
        "normalized": "a-\u003eb()",
        "package": "bytes",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen one wants to think of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as a dumb bitstring, converting\n it to a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e avoids pesky complications with respect to sign\n extension.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bytes.Signed",
        "fct-package": "bytes",
        "fct-signature": "module",
        "fct-source": "src/Data-Bytes-Signed.html",
        "fct-type": "module",
        "title": "Signed"
      },
      "index": {
        "description": "When one wants to think of an Int as dumb bitstring converting it to Word avoids pesky complications with respect to sign extension",
        "hierarchy": "Data Bytes Signed",
        "module": "Data.Bytes.Signed",
        "name": "Signed",
        "normalized": "",
        "package": "bytes",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#t:Signed",
      "description": {
        "fct-module": "Data.Bytes.Signed",
        "fct-package": "bytes",
        "fct-signature": "Signed",
        "fct-type": "function",
        "title": "Signed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Signed",
        "module": "Data.Bytes.Signed",
        "name": "Signed",
        "normalized": "",
        "package": "bytes",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#t:Unsigned",
      "description": {
        "fct-module": "Data.Bytes.Signed",
        "fct-package": "bytes",
        "fct-signature": "Unsigned",
        "fct-type": "function",
        "title": "Unsigned"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Signed",
        "module": "Data.Bytes.Signed",
        "name": "Unsigned",
        "normalized": "",
        "package": "bytes",
        "partial": "Unsigned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#v:signed",
      "description": {
        "fct-module": "Data.Bytes.Signed",
        "fct-package": "bytes",
        "fct-signature": "i -\u003e Signed i",
        "fct-source": "src/Data-Bytes-Signed.html#signed",
        "fct-type": "function",
        "title": "signed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Signed",
        "module": "Data.Bytes.Signed",
        "name": "signed",
        "normalized": "a-\u003eSigned a",
        "package": "bytes",
        "partial": "",
        "signature": "i-\u003eSigned i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-Signed.html#v:unsigned",
      "description": {
        "fct-module": "Data.Bytes.Signed",
        "fct-package": "bytes",
        "fct-signature": "i -\u003e Unsigned i",
        "fct-source": "src/Data-Bytes-Signed.html#unsigned",
        "fct-type": "function",
        "title": "unsigned"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes Signed",
        "module": "Data.Bytes.Signed",
        "name": "unsigned",
        "normalized": "a-\u003eUnsigned a",
        "package": "bytes",
        "partial": "",
        "signature": "i-\u003eUnsigned i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e wrapper with a \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e instance\n that generates base-128 variable-width ints.  Values are encoded 7\n bits at a time, with the most significant being a continuation bit.\n Thus, the numbers from 0 to 127 require only a single byte to\n encode, those from 128 to 16383 require two bytes, etc.\n\u003c/p\u003e\u003cp\u003eThis format is taken from Google's \u003cem\u003eProtocol Buffers\u003c/em\u003e, which\n provides a bit more verbiage on the encoding:\n \u003ca\u003ehttps://developers.google.com/protocol-buffers/docs/encoding#varints\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bytes.VarInt",
        "fct-package": "bytes",
        "fct-signature": "module",
        "fct-source": "src/Data-Bytes-VarInt.html",
        "fct-type": "module",
        "title": "VarInt"
      },
      "index": {
        "description": "This module provides VarInt wrapper with Serial instance that generates base-128 variable-width ints Values are encoded bits at time with the most significant being continuation bit Thus the numbers from to require only single byte to encode those from to require two bytes etc This format is taken from Google Protocol Buffers which provides bit more verbiage on the encoding https developers.google.com protocol-buffers docs encoding varints",
        "hierarchy": "Data Bytes VarInt",
        "module": "Data.Bytes.VarInt",
        "name": "VarInt",
        "normalized": "",
        "package": "bytes",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#t:VarInt",
      "description": {
        "fct-descr": "\u003cp\u003eInteger/Word types serialized to base-128 variable-width ints.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Monoid (mconcat)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.ByteString.Lazy (toChunks)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emconcat $ toChunks $ runPutL $ serialize (97 :: Word64)\n\u003c/code\u003e\u003c/strong\u003e\"\\NUL\\NUL\\NUL\\NUL\\NUL\\NUL\\NULa\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emconcat $ toChunks $ runPutL $ serialize (97 :: VarInt Word64)\n\u003c/code\u003e\u003c/strong\u003e\"a\"\n\u003c/pre\u003e",
        "fct-module": "Data.Bytes.VarInt",
        "fct-package": "bytes",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Bytes-VarInt.html#VarInt",
        "fct-type": "newtype",
        "title": "VarInt"
      },
      "index": {
        "description": "Integer Word types serialized to base-128 variable-width ints import Data.Monoid mconcat import Data.ByteString.Lazy toChunks mconcat toChunks runPutL serialize Word64 NUL NUL NUL NUL NUL NUL NULa mconcat toChunks runPutL serialize VarInt Word64",
        "hierarchy": "Data Bytes VarInt",
        "module": "Data.Bytes.VarInt",
        "name": "VarInt",
        "normalized": "",
        "package": "bytes",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#v:VarInt",
      "description": {
        "fct-module": "Data.Bytes.VarInt",
        "fct-package": "bytes",
        "fct-signature": "VarInt",
        "fct-source": "src/Data-Bytes-VarInt.html#VarInt",
        "fct-type": "function",
        "title": "VarInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes VarInt",
        "module": "Data.Bytes.VarInt",
        "name": "VarInt",
        "normalized": "",
        "package": "bytes",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytes/docs/Data-Bytes-VarInt.html#v:unVarInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Bytes.VarInt",
        "fct-package": "bytes",
        "fct-signature": "n",
        "fct-source": "src/Data-Bytes-VarInt.html#VarInt",
        "fct-type": "function",
        "title": "unVarInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bytes VarInt",
        "module": "Data.Bytes.VarInt",
        "name": "unVarInt",
        "normalized": "",
        "package": "bytes",
        "partial": "Var Int",
        "signature": ""
      }
    }
  }
]