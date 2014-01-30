[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports facilities similar to those exported by the\n \u003ca\u003ePipes.Aeson\u003c/a\u003e module, except they do not restrict the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n that might be encoded or decoded to be just valid top-level values. That is,\n not only \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003es, according to to the RFC-4627 JSON\n standard.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Aeson.Unsafe",
        "fct-package": "pipes-aeson",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Aeson-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "This module exports facilities similar to those exported by the Pipes.Aeson module except they do not restrict the Value that might be encoded or decoded to be just valid top-level values That is not only Object or Array according to to the RFC-4627 JSON standard",
        "hierarchy": "Pipes Aeson Unsafe",
        "module": "Pipes.Aeson.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "pipes-aeson",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unsafe.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except it will decode any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance,\n not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson.Unsafe",
        "fct-package": "pipes-aeson",
        "fct-signature": "StateT (Producer ByteString m r) m (Either DecodingError (Int, b))",
        "fct-source": "src/Pipes-Aeson-Unsafe.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Like decode except it will decode any ToJSON instance not just Array or Object",
        "hierarchy": "Pipes Aeson Unsafe",
        "module": "Pipes.Aeson.Unsafe",
        "name": "decode",
        "normalized": "StateT(Producer ByteString a b)a(Either DecodingError(Int,c))",
        "package": "pipes-aeson",
        "partial": "",
        "signature": "StateT(Producer ByteString m r)m(Either DecodingError(Int,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unsafe.html#v:decodeMany",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeMany\u003c/a\u003e\u003c/code\u003e, except it will decode any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e\n instance, not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson.Unsafe",
        "fct-package": "pipes-aeson",
        "fct-signature": "Producer ByteString m r-\u003e Producer (Int, b) m (Either (DecodingError, Producer ByteString m r) r)",
        "fct-type": "function",
        "title": "decodeMany"
      },
      "index": {
        "description": "Like decodeMany except it will decode any ToJSON instance not just Array or Object",
        "hierarchy": "Pipes Aeson Unsafe",
        "module": "Pipes.Aeson.Unsafe",
        "name": "decodeMany",
        "normalized": "Producer ByteString a b-\u003eProducer(Int,c)a(Either(DecodingError,Producer ByteString a b)b)",
        "package": "pipes-aeson",
        "partial": "Many",
        "signature": "Producer ByteString m r-\u003eProducer(Int,b)m(Either(DecodingError,Producer ByteString m r)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unsafe.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, except it accepts any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance,\n not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson.Unsafe",
        "fct-package": "pipes-aeson",
        "fct-signature": "a -\u003e Producer ByteString m ()",
        "fct-source": "src/Pipes-Aeson-Unsafe.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Like encode except it accepts any ToJSON instance not just Array or Object",
        "hierarchy": "Pipes Aeson Unsafe",
        "module": "Pipes.Aeson.Unsafe",
        "name": "encode",
        "normalized": "a-\u003eProducer ByteString b()",
        "package": "pipes-aeson",
        "partial": "",
        "signature": "a-\u003eProducer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to encode and decode JSON values flowing downstream\n through Pipes streams.\n\u003c/p\u003e\u003cp\u003eThis module builds on top of the \u003ccode\u003eaeson\u003c/code\u003e, \u003ccode\u003epipes\u003c/code\u003e and \u003ccode\u003epipes-parse\u003c/code\u003e\n libraries, and assumes you know how to use them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Aeson.html",
        "fct-type": "module",
        "title": "Aeson"
      },
      "index": {
        "description": "This module allows you to encode and decode JSON values flowing downstream through Pipes streams This module builds on top of the aeson pipes and pipes-parse libraries and assumes you know how to use them",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "Aeson",
        "normalized": "",
        "package": "pipes-aeson",
        "partial": "Aeson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#t:DecodingError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error while decoding a JSON value.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Aeson-Internal.html#DecodingError",
        "fct-type": "data",
        "title": "DecodingError"
      },
      "index": {
        "description": "An error while decoding JSON value",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "DecodingError",
        "normalized": "",
        "package": "pipes-aeson",
        "partial": "Decoding Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:ParserError",
      "description": {
        "fct-descr": "\u003cp\u003eAn Attoparsec error that happened while parsing the raw JSON string.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "ParserError ParsingError",
        "fct-source": "src/Pipes-Aeson-Internal.html#DecodingError",
        "fct-type": "function",
        "title": "ParserError"
      },
      "index": {
        "description": "An Attoparsec error that happened while parsing the raw JSON string",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "ParserError",
        "normalized": "",
        "package": "pipes-aeson",
        "partial": "Parser Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:ValueError",
      "description": {
        "fct-descr": "\u003cp\u003eAn Aeson error that happened while trying to convert a\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to  an \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, as reported by\n \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "ValueError String",
        "fct-source": "src/Pipes-Aeson-Internal.html#DecodingError",
        "fct-type": "function",
        "title": "ValueError"
      },
      "index": {
        "description": "An Aeson error that happened while trying to convert Value to an FromJSON instance as reported by Error",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "ValueError",
        "normalized": "",
        "package": "pipes-aeson",
        "partial": "Value Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e JSON value from the underlying state.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDo not\u003c/em\u003e use this function if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has leading empty\n chunks or whitespace, otherwise you may get unexpected parsing errors.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e restricts its output to them. If you\n prefer to ignore the standard and decode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then use \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e\n from the \u003ca\u003ePipes.Aeson.Unsafe\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "StateT (Producer ByteString m r) m (Either DecodingError (Int, b))",
        "fct-source": "src/Pipes-Aeson.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decodes an Object or Array JSON value from the underlying state Do not use this function if the underlying Producer has leading empty chunks or whitespace otherwise you may get unexpected parsing errors Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this Producer restricts its output to them If you prefer to ignore the standard and decode any Value then use decode from the Pipes.Aeson.Unsafe module",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "decode",
        "normalized": "StateT(Producer ByteString a b)a(Either DecodingError(Int,c))",
        "package": "pipes-aeson",
        "partial": "",
        "signature": "StateT(Producer ByteString m r)m(Either DecodingError(Int,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decodeMany",
      "description": {
        "fct-descr": "\u003cp\u003eContinuously \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e the JSON output from the given \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, sending\n downstream pairs of each successfully decoded entity together with the number\n of bytes consumed in order to produce it. Whitespace in between JSON content\n is ignored.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e runs until it either runs out of input or until a decoding\n failure occurs, in which case it returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eDecodingError\u003c/a\u003e\u003c/code\u003e and\n a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e with any leftovers. You can use \u003ccode\u003e\u003ca\u003eerrorP\u003c/a\u003e\u003c/code\u003e to turn the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n return value into an \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e restricts its output to them. If you\n prefer to ignore the standard and decode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then use\n \u003ccode\u003e\u003ca\u003edecodeMany\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003ePipes.Aeson.Unsafe\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "Producer ByteString m r-\u003e Producer (Int, b) m (Either (DecodingError, Producer ByteString m r) r)",
        "fct-type": "function",
        "title": "decodeMany"
      },
      "index": {
        "description": "Continuously decode the JSON output from the given Producer sending downstream pairs of each successfully decoded entity together with the number of bytes consumed in order to produce it Whitespace in between JSON content is ignored This Producer runs until it either runs out of input or until decoding failure occurs in which case it returns Left with DecodingError and Producer with any leftovers You can use errorP to turn the Either return value into an ErrorT monad transformer Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this Producer restricts its output to them If you prefer to ignore the standard and decode any Value then use decodeMany from the Pipes.Aeson.Unsafe module",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "decodeMany",
        "normalized": "Producer ByteString a b-\u003eProducer(Int,c)a(Either(DecodingError,Producer ByteString a b)b)",
        "package": "pipes-aeson",
        "partial": "Many",
        "signature": "Producer ByteString m r-\u003eProducer(Int,b)m(Either(DecodingError,Producer ByteString m r)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e as JSON and send it downstream,\n possibly in more than one \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunk.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this function restricts its input to them. If you\n prefer to ignore the standard and encode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e\n from the \u003ca\u003ePipes.Aeson.Unsafe\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "Pipes.Aeson",
        "fct-package": "pipes-aeson",
        "fct-signature": "Either Object Array -\u003e Producer ByteString m ()",
        "fct-source": "src/Pipes-Aeson.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode an Array or Object as JSON and send it downstream possibly in more than one ByteString chunk Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this function restricts its input to them If you prefer to ignore the standard and encode any Value then use encode from the Pipes.Aeson.Unsafe module",
        "hierarchy": "Pipes Aeson",
        "module": "Pipes.Aeson",
        "name": "encode",
        "normalized": "Either Object Array-\u003eProducer ByteString a()",
        "package": "pipes-aeson",
        "partial": "",
        "signature": "Either Object Array-\u003eProducer ByteString m()"
      }
    }
  }
]