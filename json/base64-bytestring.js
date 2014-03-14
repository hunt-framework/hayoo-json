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
        "word": "base64-bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base64-encoded\n lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "Lazy",
          "package": "base64-bytestring",
          "source": "src/Data-ByteString-Base64-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base64-encoded lazy bytestrings",
          "hierarchy": "Data ByteString Base64 Lazy",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "Lazy",
          "package": "base64-bytestring",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function strictly follows\n the specification in RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "decode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e Either String ByteString",
          "source": "src/Data-ByteString-Base64-Lazy.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function strictly follows the specification in RFC http www.apps.ietf.org rfc rfc4648.html",
          "hierarchy": "Data ByteString Base64 Lazy",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String ByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-Lazy.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function is lenient in\n following the specification from RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e, and will not generate\n parse errors no matter how poor its input.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "decodeLenient",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-Lazy.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function is lenient in following the specification from RFC http www.apps.ietf.org rfc rfc4648.html and will not generate parse errors no matter how poor its input",
          "hierarchy": "Data ByteString Base64 Lazy",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "decodeLenient",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "partial": "Lenient",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-Lazy.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base64 form.  The result will always be a\n multiple of 4 bytes in length.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "encode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-Lazy.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base64 form The result will always be multiple of bytes in length",
          "hierarchy": "Data ByteString Base64 Lazy",
          "module": "Data.ByteString.Base64.Lazy",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-Lazy.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base64-encoded\n lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "Lazy",
          "package": "base64-bytestring",
          "source": "src/Data-ByteString-Base64-URL-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base64-encoded lazy bytestrings",
          "hierarchy": "Data ByteString Base64 URL Lazy",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "Lazy",
          "package": "base64-bytestring",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function strictly follows\n the specification in RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "decode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e Either String ByteString",
          "source": "src/Data-ByteString-Base64-URL-Lazy.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function strictly follows the specification in RFC http www.apps.ietf.org rfc rfc4648.html",
          "hierarchy": "Data ByteString Base64 URL Lazy",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String ByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL-Lazy.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function is lenient in\n following the specification from RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e, and will not generate\n parse errors no matter how poor its input.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "decodeLenient",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-URL-Lazy.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function is lenient in following the specification from RFC http www.apps.ietf.org rfc rfc4648.html and will not generate parse errors no matter how poor its input",
          "hierarchy": "Data ByteString Base64 URL Lazy",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "decodeLenient",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "partial": "Lenient",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL-Lazy.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base64 form.  The result will always be a\n multiple of 4 bytes in length.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "encode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-URL-Lazy.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base64 form The result will always be multiple of bytes in length",
          "hierarchy": "Data ByteString Base64 URL Lazy",
          "module": "Data.ByteString.Base64.URL.Lazy",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL-Lazy.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base64url-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base64.URL",
          "name": "URL",
          "package": "base64-bytestring",
          "source": "src/Data-ByteString-Base64-URL.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base64url-encoded strings",
          "hierarchy": "Data ByteString Base64 URL",
          "module": "Data.ByteString.Base64.URL",
          "name": "URL",
          "package": "base64-bytestring",
          "partial": "URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64url-encoded string.  This function strictly follows\n the specification in RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL",
          "name": "decode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e Either String ByteString",
          "source": "src/Data-ByteString-Base64-URL.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base64url-encoded string This function strictly follows the specification in RFC http www.apps.ietf.org rfc rfc4648.html",
          "hierarchy": "Data ByteString Base64 URL",
          "module": "Data.ByteString.Base64.URL",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String ByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64url-encoded string.  This function is lenient in\n following the specification from RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e, and will not generate\n parse errors no matter how poor its input.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL",
          "name": "decodeLenient",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-URL.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "Decode base64url-encoded string This function is lenient in following the specification from RFC http www.apps.ietf.org rfc rfc4648.html and will not generate parse errors no matter how poor its input",
          "hierarchy": "Data ByteString Base64 URL",
          "module": "Data.ByteString.Base64.URL",
          "name": "decodeLenient",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "partial": "Lenient",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base64url form.  The result will always be a\n multiple of 4 bytes in length.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64.URL",
          "name": "encode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64-URL.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base64url form The result will always be multiple of bytes in length",
          "hierarchy": "Data ByteString Base64 URL",
          "module": "Data.ByteString.Base64.URL",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently intersperse a terminator string into another at\n regular intervals, and terminate the input with it.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e joinWith \"|\" 2 \"----\" = \"--|--|\"\n\u003c/pre\u003e\u003cpre\u003e joinWith \"\\r\\n\" 3 \"foobarbaz\" = \"foo\\r\\nbar\\r\\nbaz\\r\\n\"\n joinWith \"x\" 3 \"fo\" = \"fox\"\n\u003c/pre\u003e",
          "module": "[\"Data.ByteString.Base64.URL\",\"Data.ByteString.Base64\"]",
          "name": "joinWith",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003e Int-\u003e ByteString-\u003e ByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#v:joinWith\",\"http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64.html#v:joinWith\"]"
        },
        "index": {
          "description": "Efficiently intersperse terminator string into another at regular intervals and terminate the input with it Examples joinWith joinWith foobarbaz foo nbar nbaz joinWith fo fox",
          "hierarchy": "Data ByteString Base64 URL",
          "module": "Data.ByteString.Base64.URL",
          "name": "joinWith",
          "normalized": "ByteString-\u003eInt-\u003eByteString-\u003eByteString",
          "package": "base64-bytestring",
          "partial": "With",
          "signature": "ByteString-\u003eInt-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64-URL.html#v:joinWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base64-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base64",
          "name": "Base64",
          "package": "base64-bytestring",
          "source": "src/Data-ByteString-Base64.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base64-encoded strings",
          "hierarchy": "Data ByteString Base64",
          "module": "Data.ByteString.Base64",
          "name": "Base64",
          "package": "base64-bytestring",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function strictly follows\n the specification in RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64",
          "name": "decode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e Either String ByteString",
          "source": "src/Data-ByteString-Base64.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function strictly follows the specification in RFC http www.apps.ietf.org rfc rfc4648.html",
          "hierarchy": "Data ByteString Base64",
          "module": "Data.ByteString.Base64",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String ByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base64-encoded string.  This function is lenient in\n following the specification from RFC 4648,\n \u003ca\u003ehttp://www.apps.ietf.org/rfc/rfc4648.html\u003c/a\u003e, and will not generate\n parse errors no matter how poor its input.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64",
          "name": "decodeLenient",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "Decode base64-encoded string This function is lenient in following the specification from RFC http www.apps.ietf.org rfc rfc4648.html and will not generate parse errors no matter how poor its input",
          "hierarchy": "Data ByteString Base64",
          "module": "Data.ByteString.Base64",
          "name": "decodeLenient",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "partial": "Lenient",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base64 form.  The result will always be a\n multiple of 4 bytes in length.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base64",
          "name": "encode",
          "package": "base64-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base64.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base64 form The result will always be multiple of bytes in length",
          "hierarchy": "Data ByteString Base64",
          "module": "Data.ByteString.Base64",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base64-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base64-bytestring/docs/Data-ByteString-Base64.html#v:encode"
      }
    }
  ]
]