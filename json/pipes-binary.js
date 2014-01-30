[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports facilities that allow you to encode and decode Pipes\n streams of binary values. It builds on top of the \u003ccode\u003ebinary\u003c/code\u003e, \u003ccode\u003epipes\u003c/code\u003e and\n \u003ccode\u003epipes-parse\u003c/code\u003e libraries, and assumes you know how to use those libraries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "This module exports facilities that allow you to encode and decode Pipes streams of binary values It builds on top of the binary pipes and pipes-parse libraries and assumes you know how to use those libraries",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "pipes-binary",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#t:DecodingError",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e decoding error, as provided by \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Binary-Internal.html#DecodingError",
        "fct-type": "data",
        "title": "DecodingError"
      },
      "index": {
        "description": "Get decoding error as provided by Fail",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "DecodingError",
        "normalized": "",
        "package": "pipes-binary",
        "partial": "Decoding Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:DecodingError",
      "description": {
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "DecodingError",
        "fct-source": "src/Pipes-Binary-Internal.html#DecodingError",
        "fct-type": "function",
        "title": "DecodingError"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "DecodingError",
        "normalized": "",
        "package": "pipes-binary",
        "partial": "Decoding Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decode leading output from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance, returning either a \u003ccode\u003e\u003ca\u003eDecodingError\u003c/a\u003e\u003c/code\u003e on failure, or a\n pair with the decoded entity together with the number of bytes consumed in\n order to produce it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDo not\u003c/em\u003e use this function if \u003ccode\u003e\u003ca\u003eisEndOfBytes\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise you\n may get unexpected decoding errors.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "StateT (Producer ByteString m r) m (Either DecodingError (ByteOffset, b))",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Try to decode leading output from the underlying Producer into Binary instance returning either DecodingError on failure or pair with the decoded entity together with the number of bytes consumed in order to produce it Do not use this function if isEndOfBytes returns True otherwise you may get unexpected decoding errors",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "decode",
        "normalized": "StateT(Producer ByteString a b)a(Either DecodingError(ByteOffset,c))",
        "package": "pipes-binary",
        "partial": "",
        "signature": "StateT(Producer ByteString m r)m(Either DecodingError(ByteOffset,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeGet",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except it takes an explicit \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "Get b-\u003e StateT (Producer ByteString m r) m (Either DecodingError (ByteOffset, b))",
        "fct-type": "function",
        "title": "decodeGet"
      },
      "index": {
        "description": "Like decode except it takes an explicit Get monad",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "decodeGet",
        "normalized": "Get a-\u003eStateT(Producer ByteString b c)b(Either DecodingError(ByteOffset,a))",
        "package": "pipes-binary",
        "partial": "Get",
        "signature": "Get b-\u003eStateT(Producer ByteString m r)m(Either DecodingError(ByteOffset,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeGetMany",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeMany\u003c/a\u003e\u003c/code\u003e, except it takes an explicit \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "Get b-\u003e Producer ByteString m r-\u003e Producer' (ByteOffset, b) m (Either (DecodingError, Producer ByteString m r) r)",
        "fct-type": "function",
        "title": "decodeGetMany"
      },
      "index": {
        "description": "Like decodeMany except it takes an explicit Get monad",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "decodeGetMany",
        "normalized": "Get a-\u003eProducer ByteString b c-\u003eProducer'(ByteOffset,a)b(Either(DecodingError,Producer ByteString b c)c)",
        "package": "pipes-binary",
        "partial": "Get Many",
        "signature": "Get b-\u003eProducer ByteString m r-\u003eProducer'(ByteOffset,b)m(Either(DecodingError,Producer ByteString m r)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeMany",
      "description": {
        "fct-descr": "\u003cp\u003eContinuously decode output from the given \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e\n instance, sending downstream pairs of each successfully decoded entity\n together with the number of bytes consumed in order to produce it.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e runs until it either runs out of input or a decoding\n failure occurs, in which case it returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eDecodingError\u003c/a\u003e\u003c/code\u003e and\n a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e with any leftovers. You can use \u003ccode\u003e\u003ca\u003eerrorP\u003c/a\u003e\u003c/code\u003e to turn the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n return value into an \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "Producer ByteString m r-\u003e Producer' (ByteOffset, b) m (Either (DecodingError, Producer ByteString m r) r)",
        "fct-type": "function",
        "title": "decodeMany"
      },
      "index": {
        "description": "Continuously decode output from the given Producer into Binary instance sending downstream pairs of each successfully decoded entity together with the number of bytes consumed in order to produce it This Producer runs until it either runs out of input or decoding failure occurs in which case it returns Left with DecodingError and Producer with any leftovers You can use errorP to turn the Either return value into an ErrorT monad transformer",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "decodeMany",
        "normalized": "Producer ByteString a b-\u003eProducer'(ByteOffset,c)a(Either(DecodingError,Producer ByteString a b)b)",
        "package": "pipes-binary",
        "partial": "Many",
        "signature": "Producer ByteString m r-\u003eProducer'(ByteOffset,b)m(Either(DecodingError,Producer ByteString m r)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes the given \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance and sends it downstream in\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks.\n\u003c/p\u003e\u003cp\u003eHint: You can easily turn this \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that encodes\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instances as they flow downstream using:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e m r\n\u003c/pre\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "x -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-Binary.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encodes the given Binary instance and sends it downstream in ByteString chunks Hint You can easily turn this Producer into Pipe that encodes Binary instances as they flow downstream using for cat encode Monad Binary Pipe ByteString",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "encode",
        "normalized": "a-\u003eProducer' ByteString b()",
        "package": "pipes-binary",
        "partial": "",
        "signature": "x-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:encodePut",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, except it takes an explicit \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "Put -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-Binary.html#encodePut",
        "fct-type": "function",
        "title": "encodePut"
      },
      "index": {
        "description": "Like encode except it takes an explicit Put monad",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "encodePut",
        "normalized": "Put-\u003eProducer' ByteString a()",
        "package": "pipes-binary",
        "partial": "Put",
        "signature": "Put-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:peConsumed",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of bytes consumed before the error.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "ByteOffset",
        "fct-source": "src/Pipes-Binary-Internal.html#DecodingError",
        "fct-type": "function",
        "title": "peConsumed"
      },
      "index": {
        "description": "Number of bytes consumed before the error",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "peConsumed",
        "normalized": "",
        "package": "pipes-binary",
        "partial": "Consumed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:peMessage",
      "description": {
        "fct-descr": "\u003cp\u003eError message.\n\u003c/p\u003e",
        "fct-module": "Pipes.Binary",
        "fct-package": "pipes-binary",
        "fct-signature": "String",
        "fct-source": "src/Pipes-Binary-Internal.html#DecodingError",
        "fct-type": "function",
        "title": "peMessage"
      },
      "index": {
        "description": "Error message",
        "hierarchy": "Pipes Binary",
        "module": "Pipes.Binary",
        "name": "peMessage",
        "normalized": "",
        "package": "pipes-binary",
        "partial": "Message",
        "signature": ""
      }
    }
  }
]