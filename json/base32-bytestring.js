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
        "word": "base32-bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient encoding and decoding of base32hex encoded bytestring\n   according to RFC 4648. \u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module recommended to be imported as \u003ccode\u003eimport\n   Data.ByteString.Base32.Hex as Base32Hex\u003c/code\u003e to avoid name clashes\n   with \u003ccode\u003eData.ByteString.Base32\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base32.Hex",
          "name": "Hex",
          "package": "base32-bytestring",
          "source": "src/Data-ByteString-Base32-Hex.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient encoding and decoding of base32hex encoded bytestring according to RFC http tools.ietf.org html rfc4648 This module recommended to be imported as import Data.ByteString.Base32.Hex as Base32Hex to avoid name clashes with Data.ByteString.Base32",
          "hierarchy": "Data ByteString Base32 Hex",
          "module": "Data.ByteString.Base32.Hex",
          "name": "Hex",
          "package": "base32-bytestring",
          "partial": "Hex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase32Hex encoded bytestring.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32.Hex",
          "name": "Base32Hex",
          "package": "base32-bytestring",
          "source": "src/Data-ByteString-Base32-Hex.html#Base32Hex",
          "type": "type"
        },
        "index": {
          "description": "Base32Hex encoded bytestring",
          "hierarchy": "Data ByteString Base32 Hex",
          "module": "Data.ByteString.Base32.Hex",
          "name": "Base32Hex",
          "package": "base32-bytestring",
          "partial": "Base Hex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#t:Base32Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base32hex encoded bytestring. This functions is\n case-insensitive and do not requires correct padding.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32.Hex",
          "name": "decode",
          "package": "base32-bytestring",
          "signature": "Base32Hex -\u003e Either String BS.ByteString",
          "source": "src/Data-ByteString-Base32-Hex.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base32hex encoded bytestring This functions is case-insensitive and do not requires correct padding",
          "hierarchy": "Data ByteString Base32 Hex",
          "module": "Data.ByteString.Base32.Hex",
          "name": "decode",
          "normalized": "Base Hex-\u003eEither String BS.ByteString",
          "package": "base32-bytestring",
          "signature": "Base Hex-\u003eEither String BS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but with additional leniency: decodeLenient\n will skip non-alphabet characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32.Hex",
          "name": "decodeLenient",
          "package": "base32-bytestring",
          "signature": "Base32Hex -\u003e Either String BS.ByteString",
          "source": "src/Data-ByteString-Base32-Hex.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "The same as decode but with additional leniency decodeLenient will skip non-alphabet characters",
          "hierarchy": "Data ByteString Base32 Hex",
          "module": "Data.ByteString.Base32.Hex",
          "name": "decodeLenient",
          "normalized": "Base Hex-\u003eEither String BS.ByteString",
          "package": "base32-bytestring",
          "partial": "Lenient",
          "signature": "Base Hex-\u003eEither String BS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an arbitrary bytestring into (upper case) base32hex form.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32.Hex",
          "name": "encode",
          "package": "base32-bytestring",
          "signature": "BS.ByteString -\u003e Base32Hex",
          "source": "src/Data-ByteString-Base32-Hex.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode an arbitrary bytestring into upper case base32hex form",
          "hierarchy": "Data ByteString Base32 Hex",
          "module": "Data.ByteString.Base32.Hex",
          "name": "encode",
          "normalized": "BS.ByteString-\u003eBase Hex",
          "package": "base32-bytestring",
          "signature": "BS.ByteString-\u003eBase Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient encoding and decoding of base32 encoded bytestring\n   according to RFC 4648. \u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module recommended to be imported as\n   \u003ccode\u003eimport Data.ByteString.Base32 as Base32\u003c/code\u003e to avoid name clashes\n   with \u003ccode\u003eData.Binary\u003c/code\u003e or \u003ccode\u003eData.ByteString.Base64\u003c/code\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base32",
          "name": "Base32",
          "package": "base32-bytestring",
          "source": "src/Data-ByteString-Base32.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient encoding and decoding of base32 encoded bytestring according to RFC http tools.ietf.org html rfc4648 This module recommended to be imported as import Data.ByteString.Base32 as Base32 to avoid name clashes with Data.Binary or Data.ByteString.Base64 modules",
          "hierarchy": "Data ByteString Base32",
          "module": "Data.ByteString.Base32",
          "name": "Base32",
          "package": "base32-bytestring",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase32 encoded bytestring.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32",
          "name": "Base32",
          "package": "base32-bytestring",
          "source": "src/Data-ByteString-Base32.html#Base32",
          "type": "type"
        },
        "index": {
          "description": "Base32 encoded bytestring",
          "hierarchy": "Data ByteString Base32",
          "module": "Data.ByteString.Base32",
          "name": "Base32",
          "package": "base32-bytestring",
          "partial": "Base",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#t:Base32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base32 encoded bytestring. This functions is\n case-insensitive and do not require correct padding.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32",
          "name": "decode",
          "package": "base32-bytestring",
          "signature": "Base32 -\u003e Either String BS.ByteString",
          "source": "src/Data-ByteString-Base32.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode base32 encoded bytestring This functions is case-insensitive and do not require correct padding",
          "hierarchy": "Data ByteString Base32",
          "module": "Data.ByteString.Base32",
          "name": "decode",
          "normalized": "Base-\u003eEither String BS.ByteString",
          "package": "base32-bytestring",
          "signature": "Base-\u003eEither String BS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but with additional leniency: decodeLenient\n will skip non-alphabet characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32",
          "name": "decodeLenient",
          "package": "base32-bytestring",
          "signature": "Base32 -\u003e Either String BS.ByteString",
          "source": "src/Data-ByteString-Base32.html#decodeLenient",
          "type": "function"
        },
        "index": {
          "description": "The same as decode but with additional leniency decodeLenient will skip non-alphabet characters",
          "hierarchy": "Data ByteString Base32",
          "module": "Data.ByteString.Base32",
          "name": "decodeLenient",
          "normalized": "Base-\u003eEither String BS.ByteString",
          "package": "base32-bytestring",
          "partial": "Lenient",
          "signature": "Base-\u003eEither String BS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:decodeLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an arbitrary bytestring into (upper case) base32 form.\n\u003c/p\u003e",
          "module": "Data.ByteString.Base32",
          "name": "encode",
          "package": "base32-bytestring",
          "signature": "BS.ByteString -\u003e Base32",
          "source": "src/Data-ByteString-Base32.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode an arbitrary bytestring into upper case base32 form",
          "hierarchy": "Data ByteString Base32",
          "module": "Data.ByteString.Base32",
          "name": "encode",
          "normalized": "BS.ByteString-\u003eBase",
          "package": "base32-bytestring",
          "signature": "BS.ByteString-\u003eBase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:encode"
      }
    }
  ]
]