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
        "word": "pipes-aeson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports facilities similar to those exported by the\n \u003ca\u003ePipes.Aeson\u003c/a\u003e module, except they do not restrict the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n that might be encoded or decoded to be just valid top-level values. That is,\n not only \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003es, according to to the RFC-4627 JSON\n standard.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "Unchecked",
          "package": "pipes-aeson",
          "source": "src/Pipes-Aeson-Unchecked.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports facilities similar to those exported by the Pipes.Aeson module except they do not restrict the Value that might be encoded or decoded to be just valid top-level values That is not only Object or Array according to to the RFC-4627 JSON standard",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "Unchecked",
          "package": "pipes-aeson",
          "partial": "Unchecked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except it will decode any \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e\n instance, not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decode",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m (Either DecodingError a)",
          "type": "function"
        },
        "index": {
          "description": "Like decode except it will decode any FromJSON instance not just Array or Object",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decode",
          "package": "pipes-aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except it also returns the length of JSON input that was\n consumed in order to obtain the value, not including the length of whitespace\n between each parsed JSON input.\n\u003c/p\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decodeL",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m (Either DecodingError (Int, a))",
          "type": "function"
        },
        "index": {
          "description": "Like decode except it also returns the length of JSON input that was consumed in order to obtain the value not including the length of whitespace between each parsed JSON input",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decodeL",
          "normalized": "Parser ByteString a(Either DecodingError(Int,b))",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m(Either DecodingError(Int,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#v:decodeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e, except it will decode and decode any\n \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decoded",
          "package": "pipes-aeson",
          "signature": "Lens' (Producer ByteString m r) (Producer a m (Either (DecodingError, Producer ByteString m r) r))",
          "type": "function"
        },
        "index": {
          "description": "Like decoded except it will decode and decode any FromJSON and ToJSON instance not just Array or Object",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decoded",
          "normalized": "Lens'(Producer ByteString a b)(Producer c a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-aeson",
          "signature": "Lens'(Producer ByteString m r)(Producer a m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#v:decoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e, except it also tags each decoded entity with the length of\n JSON input that was consumed in order to obtain the value, not including the\n length of whitespace between each parsed JSON input.\n\u003c/p\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decodedL",
          "package": "pipes-aeson",
          "signature": "Lens' (Producer ByteString m r) (Producer (Int, a) m (Either (DecodingError, Producer ByteString m r) r))",
          "type": "function"
        },
        "index": {
          "description": "Like decoded except it also tags each decoded entity with the length of JSON input that was consumed in order to obtain the value not including the length of whitespace between each parsed JSON input",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "decodedL",
          "normalized": "Lens'(Producer ByteString a b)(Producer(Int,c)a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-aeson",
          "signature": "Lens'(Producer ByteString m r)(Producer(Int,a)m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#v:decodedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e, except it accepts any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance,\n not just \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Aeson.Unchecked",
          "name": "encode",
          "package": "pipes-aeson",
          "signature": "a -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-Aeson-Unchecked.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Like encode except it accepts any ToJSON instance not just Array or Object",
          "hierarchy": "Pipes Aeson Unchecked",
          "module": "Pipes.Aeson.Unchecked",
          "name": "encode",
          "normalized": "a-\u003eProducer' ByteString b()",
          "package": "pipes-aeson",
          "signature": "a-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson-Unchecked.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to encode and decode JSON values flowing downstream\n through Pipes streams.\n\u003c/p\u003e\u003cp\u003eThis module builds on top of the \u003ccode\u003eaeson\u003c/code\u003e, \u003ccode\u003epipes\u003c/code\u003e and \u003ccode\u003epipes-parse\u003c/code\u003e\n libraries, and assumes you know how to use them. Please read the examples\n in \u003ca\u003ePipes.Parse.Tutorial\u003c/a\u003e to understand how to use these functions.\n\u003c/p\u003e\u003cp\u003eIn this module, the following type synonym compatible with the \u003ccode\u003elens\u003c/code\u003e,\n \u003ccode\u003elens-family\u003c/code\u003e and \u003ccode\u003elens-family-core\u003c/code\u003e libraries is used but not exported:\n\u003c/p\u003e\u003cpre\u003e\n type Lens' s a = forall f . \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f =\u003e (a -\u003e f a) -\u003e (s -\u003e f s)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Pipes.Aeson",
          "name": "Aeson",
          "package": "pipes-aeson",
          "source": "src/Pipes-Aeson.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows you to encode and decode JSON values flowing downstream through Pipes streams This module builds on top of the aeson pipes and pipes-parse libraries and assumes you know how to use them Please read the examples in Pipes.Parse.Tutorial to understand how to use these functions In this module the following type synonym compatible with the lens lens-family and lens-family-core libraries is used but not exported type Lens forall Functor",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "Aeson",
          "package": "pipes-aeson",
          "partial": "Aeson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error while decoding a JSON value.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "DecodingError",
          "package": "pipes-aeson",
          "source": "src/Pipes-Aeson-Internal.html#DecodingError",
          "type": "data"
        },
        "index": {
          "description": "An error while decoding JSON value",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "DecodingError",
          "package": "pipes-aeson",
          "partial": "Decoding Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#t:DecodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eattoparsec\u003c/code\u003e error that happened while parsing the raw JSON string.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "AttoparsecError",
          "package": "pipes-aeson",
          "signature": "AttoparsecError ParsingError",
          "source": "src/Pipes-Aeson-Internal.html#DecodingError",
          "type": "function"
        },
        "index": {
          "description": "An attoparsec error that happened while parsing the raw JSON string",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "AttoparsecError",
          "package": "pipes-aeson",
          "partial": "Attoparsec Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:AttoparsecError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eaeson\u003c/code\u003e error that happened while trying to convert a\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, as reported by\n \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "FromJSONError",
          "package": "pipes-aeson",
          "signature": "FromJSONError String",
          "source": "src/Pipes-Aeson-Internal.html#DecodingError",
          "type": "function"
        },
        "index": {
          "description": "An aeson error that happened while trying to convert Value to an FromJSON instance as reported by Error",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "FromJSONError",
          "package": "pipes-aeson",
          "partial": "From JSONError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:FromJSONError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e JSON value from the underlying state.\n\u003c/p\u003e\u003cp\u003eReturns either the decoded entitiy, or a \u003ccode\u003e\u003ca\u003eDecodingError\u003c/a\u003e\u003c/code\u003e in case of error.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDo not\u003c/em\u003e use this function if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has leading empty\n chunks or whitespace, otherwise you may get unexpected parsing errors.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e restricts its output to them. If\n you prefer to ignore the standard and decode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then use\n \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003ePipes.Aeson.Unchecked\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "decode",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m (Either DecodingError a)",
          "source": "src/Pipes-Aeson.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decodes an Object or Array JSON value from the underlying state Returns either the decoded entitiy or DecodingError in case of error Do not use this function if the underlying Producer has leading empty chunks or whitespace otherwise you may get unexpected parsing errors Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this Parser restricts its output to them If you prefer to ignore the standard and decode any Value then use decode from the Pipes.Aeson.Unchecked module",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "decode",
          "package": "pipes-aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e, except it also returns the length of JSON input that was\n consumed in order to obtain the value, not including the length of whitespace\n before nor after the parsed JSON input.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "decodeL",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m (Either DecodingError (Int, a))",
          "source": "src/Pipes-Aeson.html#decodeL",
          "type": "function"
        },
        "index": {
          "description": "Like decode except it also returns the length of JSON input that was consumed in order to obtain the value not including the length of whitespace before nor after the parsed JSON input",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "decodeL",
          "normalized": "Parser ByteString a(Either DecodingError(Int,b))",
          "package": "pipes-aeson",
          "signature": "Parser ByteString m(Either DecodingError(Int,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decodeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eImproper lens\u003c/em\u003e that turns a stream of raw JSON input into a stream of\n \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e and back.\n\u003c/p\u003e\u003cp\u003eBy \u003cem\u003eimproper lens\u003c/em\u003e we mean that in practice you can't expect the\n \u003cem\u003eMonad Morphism Laws\u003c/em\u003e to be true when using \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r) /= \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r\n \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= k)  /= \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= \u003ccode\u003e\u003ca\u003ezoom\u003c/a\u003e\u003c/code\u003e . f\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this function restricts its stream values to them. If\n you prefer to ignore the standard and encode or decode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then\n use \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003ePipes.Aeson.Unchecked\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "decoded",
          "package": "pipes-aeson",
          "signature": "(Value -\u003e Either Object Array)-\u003e Lens' (Producer ByteString m r) (Producer a m (Either (DecodingError, Producer ByteString m r) r))",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that turns stream of raw JSON input into stream of FromJSON and back By improper lens we mean that in practice you can expect the Monad Morphism Laws to be true when using decoded with zoom zoom decoded return return zoom decoded zoom zoom Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this function restricts its stream values to them If you prefer to ignore the standard and encode or decode any Value then use decoded from the Pipes.Aeson.Unchecked module",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "decoded",
          "normalized": "(Value-\u003eEither Object Array)-\u003eLens'(Producer ByteString a b)(Producer c a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-aeson",
          "signature": "(Value-\u003eEither Object Array)-\u003eLens'(Producer ByteString m r)(Producer a m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecoded\u003c/a\u003e\u003c/code\u003e, except it also tags each decoded entity with the length of\n JSON input that was consumed in order to obtain the value, not including the\n length of whitespace between each parsed JSON input.\n\u003c/p\u003e",
          "module": "Pipes.Aeson",
          "name": "decodedL",
          "package": "pipes-aeson",
          "signature": "(Value -\u003e Either Object Array)-\u003e Lens' (Producer ByteString m r) (Producer (Int, a) m (Either (DecodingError, Producer ByteString m r) r))",
          "type": "function"
        },
        "index": {
          "description": "Like decoded except it also tags each decoded entity with the length of JSON input that was consumed in order to obtain the value not including the length of whitespace between each parsed JSON input",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "decodedL",
          "normalized": "(Value-\u003eEither Object Array)-\u003eLens'(Producer ByteString a b)(Producer(Int,c)a(Either(DecodingError,Producer ByteString a b)b))",
          "package": "pipes-aeson",
          "signature": "(Value-\u003eEither Object Array)-\u003eLens'(Producer ByteString m r)(Producer(Int,a)m(Either(DecodingError,Producer ByteString m r)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:decodedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e as JSON and send it downstream,\n possibly in more than one \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunk.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The JSON RFC-4627 standard only allows arrays or objects as top-level\n entities, which is why this function restricts its input to them. If you\n prefer to ignore the standard and encode any \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e\n from the \u003ca\u003ePipes.Aeson.Unchecked\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHint:\u003c/em\u003e You can easily turn this \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that encodes\n \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e values as JSON as they flow downstream using:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m) =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e m r\n\u003c/pre\u003e",
          "module": "Pipes.Aeson",
          "name": "encode",
          "package": "pipes-aeson",
          "signature": "Either Object Array -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-Aeson.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode an Array or Object as JSON and send it downstream possibly in more than one ByteString chunk Note The JSON RFC-4627 standard only allows arrays or objects as top-level entities which is why this function restricts its input to them If you prefer to ignore the standard and encode any Value then use encode from the Pipes.Aeson.Unchecked module Hint You can easily turn this Producer into Pipe that encodes Array or Object values as JSON as they flow downstream using for cat encode Monad Pipe Either Object Array ByteString",
          "hierarchy": "Pipes Aeson",
          "module": "Pipes.Aeson",
          "name": "encode",
          "normalized": "Either Object Array-\u003eProducer' ByteString a()",
          "package": "pipes-aeson",
          "signature": "Either Object Array-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-aeson/docs/Pipes-Aeson.html#v:encode"
      }
    }
  ]
]