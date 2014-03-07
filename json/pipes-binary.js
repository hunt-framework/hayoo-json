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
        "word": "pipes-binary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epipes\u003c/code\u003e utilities for encoding and decoding values as byte streams\n\u003c/p\u003e\u003cp\u003eThe tutorial at the bottom of this module illustrates how to use this\n library.\n\u003c/p\u003e\u003cp\u003eIn this module, the following type synonym compatible with the \u003ccode\u003elens\u003c/code\u003e,\n \u003ccode\u003elens-family\u003c/code\u003e and \u003ccode\u003elens-family-core\u003c/code\u003e libraries is used but not exported:\n\u003c/p\u003e\u003cpre\u003e\n type Lens' a b = forall f . \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f =\u003e (b -\u003e f b) -\u003e (a -\u003e f a)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Pipes.Binary",
          "name": "Binary",
          "package": "pipes-binary",
          "source": "src/Pipes-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "pipes utilities for encoding and decoding values as byte streams The tutorial at the bottom of this module illustrates how to use this library In this module the following type synonym compatible with the lens lens-family and lens-family-core libraries is used but not exported type Lens forall Functor",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "Binary",
          "package": "pipes-binary",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e decoding error, as provided by \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "DecodingError",
          "package": "pipes-binary",
          "source": "src/Pipes-Binary.html#DecodingError",
          "type": "data"
        },
        "index": {
          "description": "Get decoding error as provided by Fail",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "DecodingError",
          "package": "pipes-binary",
          "partial": "Decoding Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#t:DecodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Binary",
          "name": "DecodingError",
          "package": "pipes-binary",
          "signature": "DecodingError",
          "source": "src/Pipes-Binary.html#DecodingError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "DecodingError",
          "package": "pipes-binary",
          "partial": "Decoding Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:DecodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bytes consumed before the error\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "deConsumed",
          "package": "pipes-binary",
          "signature": "ByteOffset",
          "source": "src/Pipes-Binary.html#DecodingError",
          "type": "function"
        },
        "index": {
          "description": "Number of bytes consumed before the error",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "deConsumed",
          "package": "pipes-binary",
          "partial": "Consumed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:deConsumed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError message\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "deMessage",
          "package": "pipes-binary",
          "signature": "String",
          "source": "src/Pipes-Binary.html#DecodingError",
          "type": "function"
        },
        "index": {
          "description": "Error message",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "deMessage",
          "package": "pipes-binary",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:deMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value from a byte stream.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "decode",
          "package": "pipes-binary",
          "signature": "Parser ByteString m (Either DecodingError a)",
          "source": "src/Pipes-Binary.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Parse value from byte stream",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decode",
          "package": "pipes-binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except this requires an explicit \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e instead of any\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "decodeGet",
          "package": "pipes-binary",
          "signature": "Get a -\u003e Parser ByteString m (Either DecodingError a)",
          "source": "src/Pipes-Binary.html#decodeGet",
          "type": "function"
        },
        "index": {
          "description": "Like decode except this requires an explicit Get instead of any Binary instance",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decodeGet",
          "normalized": "Get a-\u003eParser ByteString b(Either DecodingError a)",
          "package": "pipes-binary",
          "partial": "Get",
          "signature": "Get a-\u003eParser ByteString m(Either DecodingError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeL\u003c/a\u003e\u003c/code\u003e, except this requires an explicit \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e instead of any\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "decodeGetL",
          "package": "pipes-binary",
          "signature": "Get a -\u003e Parser ByteString m (Either DecodingError (ByteOffset, a))",
          "source": "src/Pipes-Binary.html#decodeGetL",
          "type": "function"
        },
        "index": {
          "description": "Like decodeL except this requires an explicit Get instead of any Binary instance",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decodeGetL",
          "normalized": "Get a-\u003eParser ByteString b(Either DecodingError(ByteOffset,a))",
          "package": "pipes-binary",
          "partial": "Get",
          "signature": "Get a-\u003eParser ByteString m(Either DecodingError(ByteOffset,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeGetL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, but also returns the length of input consumed in order to\n to decode the value.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "decodeL",
          "package": "pipes-binary",
          "signature": "Parser ByteString m (Either DecodingError (ByteOffset, a))",
          "source": "src/Pipes-Binary.html#decodeL",
          "type": "function"
        },
        "index": {
          "description": "Like decode but also returns the length of input consumed in order to to decode the value",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decodeL",
          "normalized": "Parser ByteString a(Either DecodingError(ByteOffset,b))",
          "package": "pipes-binary",
          "signature": "Parser ByteString m(Either DecodingError(ByteOffset,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eImproper lens\u003c/em\u003e that turns a stream of bytes into a stream of decoded\n values.\n\u003c/p\u003e\u003cp\u003eBy \u003cem\u003eimproper lens\u003c/em\u003e we mean that in practice you can't expect the\n \u003cem\u003eMonad Morphism Laws\u003c/em\u003e to be true when using \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r) /= \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= k)  /= \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e . f\n\u003c/pre\u003e",
          "module": "Pipes.Binary",
          "name": "decoded",
          "package": "pipes-binary",
          "signature": "Lens' (Producer ByteString m r) (Producer a m (Either (DecodingError, Producer ByteString m r) r))",
          "source": "src/Pipes-Binary.html#decoded",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that turns stream of bytes into stream of decoded values By improper lens we mean that in practice you can expect the Monad Morphism Laws to be true when using decoded with zoom zoom decoded return return zoom decoded zoom zoom",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decoded",
          "normalized": "Lens'(Producer ByteString a b)(Producer c a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-binary",
          "signature": "Lens'(Producer ByteString m r)(Producer a m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e, except this tags each decoded value with the length of\n input consumed in order to decode it.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "decodedL",
          "package": "pipes-binary",
          "signature": "Lens' (Producer ByteString m r) (Producer (ByteOffset, a) m (Either (DecodingError, Producer ByteString m r) r))",
          "source": "src/Pipes-Binary.html#decodedL",
          "type": "function"
        },
        "index": {
          "description": "Like decoded except this tags each decoded value with the length of input consumed in order to decode it",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "decodedL",
          "normalized": "Lens'(Producer ByteString a b)(Producer(ByteOffset,c)a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-binary",
          "signature": "Lens'(Producer ByteString m r)(Producer(ByteOffset,a)m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:decodedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a byte stream.\n\u003c/p\u003e\u003cp\u003eKeep in mind that a single encode value might be split into many \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n chunks, that is, the lenght of the obtained \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e might be greater than\n 1.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHint:\u003c/em\u003e You can easily turn this \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that encodes\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instances as they flow downstream using:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e m r\n\u003c/pre\u003e",
          "module": "Pipes.Binary",
          "name": "encode",
          "package": "pipes-binary",
          "signature": "a -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-Binary.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convert value to byte stream Keep in mind that single encode value might be split into many ByteString chunks that is the lenght of the obtained Producer might be greater than Hint You can easily turn this Producer into Pipe that encodes Binary instances as they flow downstream using for cat encode Monad Binary Pipe ByteString",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "encode",
          "normalized": "a-\u003eProducer' ByteString b()",
          "package": "pipes-binary",
          "signature": "a-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, except this uses an explicit \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Binary",
          "name": "encodePut",
          "package": "pipes-binary",
          "signature": "Put -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-Binary.html#encodePut",
          "type": "function"
        },
        "index": {
          "description": "Like encode except this uses an explicit Put",
          "hierarchy": "Pipes Binary",
          "module": "Pipes.Binary",
          "name": "encodePut",
          "normalized": "Put-\u003eProducer' ByteString a()",
          "package": "pipes-binary",
          "partial": "Put",
          "signature": "Put-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-binary/docs/Pipes-Binary.html#v:encodePut"
      }
    }
  ]
]