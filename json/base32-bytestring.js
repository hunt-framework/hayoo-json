[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient encoding and decoding of base32hex encoded bytestring\n   according to RFC 4648. \u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module recommended to be imported as \u003ccode\u003eimport\n   Data.ByteString.Base32.Hex as Base32Hex\u003c/code\u003e to avoid name clashes\n   with \u003ccode\u003eData.ByteString.Base32\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Base32.Hex",
        "fct-package": "base32-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Base32-Hex.html",
        "fct-type": "module",
        "title": "Hex"
      },
      "index": {
        "description": "Efficient encoding and decoding of base32hex encoded bytestring according to RFC http tools.ietf.org html rfc4648 This module recommended to be imported as import Data.ByteString.Base32.Hex as Base32Hex to avoid name clashes with Data.ByteString.Base32",
        "hierarchy": "Data ByteString Base32 Hex",
        "module": "Data.ByteString.Base32.Hex",
        "name": "Hex",
        "normalized": "",
        "package": "base32-bytestring",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#t:Base32Hex",
      "description": {
        "fct-descr": "\u003cp\u003eBase32Hex encoded bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32.Hex",
        "fct-package": "base32-bytestring",
        "fct-signature": "type",
        "fct-source": "src/Data-ByteString-Base32-Hex.html#Base32Hex",
        "fct-type": "type",
        "title": "Base32Hex"
      },
      "index": {
        "description": "Base32Hex encoded bytestring",
        "hierarchy": "Data ByteString Base32 Hex",
        "module": "Data.ByteString.Base32.Hex",
        "name": "Base32Hex",
        "normalized": "",
        "package": "base32-bytestring",
        "partial": "Base Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a base32hex encoded bytestring. This functions is\n case-insensitive and do not requires correct padding.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32.Hex",
        "fct-package": "base32-bytestring",
        "fct-signature": "Base32Hex -\u003e Either String BS.ByteString",
        "fct-source": "src/Data-ByteString-Base32-Hex.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode base32hex encoded bytestring This functions is case-insensitive and do not requires correct padding",
        "hierarchy": "Data ByteString Base32 Hex",
        "module": "Data.ByteString.Base32.Hex",
        "name": "decode",
        "normalized": "Base Hex-\u003eEither String BS.ByteString",
        "package": "base32-bytestring",
        "partial": "",
        "signature": "Base Hex-\u003eEither String BS.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:decodeLenient",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but with additional leniency: decodeLenient\n will skip non-alphabet characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32.Hex",
        "fct-package": "base32-bytestring",
        "fct-signature": "Base32Hex -\u003e Either String BS.ByteString",
        "fct-source": "src/Data-ByteString-Base32-Hex.html#decodeLenient",
        "fct-type": "function",
        "title": "decodeLenient"
      },
      "index": {
        "description": "The same as decode but with additional leniency decodeLenient will skip non-alphabet characters",
        "hierarchy": "Data ByteString Base32 Hex",
        "module": "Data.ByteString.Base32.Hex",
        "name": "decodeLenient",
        "normalized": "Base Hex-\u003eEither String BS.ByteString",
        "package": "base32-bytestring",
        "partial": "Lenient",
        "signature": "Base Hex-\u003eEither String BS.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32-Hex.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an arbitrary bytestring into (upper case) base32hex form.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32.Hex",
        "fct-package": "base32-bytestring",
        "fct-signature": "BS.ByteString -\u003e Base32Hex",
        "fct-source": "src/Data-ByteString-Base32-Hex.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode an arbitrary bytestring into upper case base32hex form",
        "hierarchy": "Data ByteString Base32 Hex",
        "module": "Data.ByteString.Base32.Hex",
        "name": "encode",
        "normalized": "BS.ByteString-\u003eBase Hex",
        "package": "base32-bytestring",
        "partial": "",
        "signature": "BS.ByteString-\u003eBase Hex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient encoding and decoding of base32 encoded bytestring\n   according to RFC 4648. \u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module recommended to be imported as\n   \u003ccode\u003eimport Data.ByteString.Base32 as Base32\u003c/code\u003e to avoid name clashes\n   with \u003ccode\u003eData.Binary\u003c/code\u003e or \u003ccode\u003eData.ByteString.Base64\u003c/code\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Base32",
        "fct-package": "base32-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Base32.html",
        "fct-type": "module",
        "title": "Base32"
      },
      "index": {
        "description": "Efficient encoding and decoding of base32 encoded bytestring according to RFC http tools.ietf.org html rfc4648 This module recommended to be imported as import Data.ByteString.Base32 as Base32 to avoid name clashes with Data.Binary or Data.ByteString.Base64 modules",
        "hierarchy": "Data ByteString Base32",
        "module": "Data.ByteString.Base32",
        "name": "Base32",
        "normalized": "",
        "package": "base32-bytestring",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#t:Base32",
      "description": {
        "fct-descr": "\u003cp\u003eBase32 encoded bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32",
        "fct-package": "base32-bytestring",
        "fct-signature": "type",
        "fct-source": "src/Data-ByteString-Base32.html#Base32",
        "fct-type": "type",
        "title": "Base32"
      },
      "index": {
        "description": "Base32 encoded bytestring",
        "hierarchy": "Data ByteString Base32",
        "module": "Data.ByteString.Base32",
        "name": "Base32",
        "normalized": "",
        "package": "base32-bytestring",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a base32 encoded bytestring. This functions is\n case-insensitive and do not require correct padding.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32",
        "fct-package": "base32-bytestring",
        "fct-signature": "Base32 -\u003e Either String BS.ByteString",
        "fct-source": "src/Data-ByteString-Base32.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode base32 encoded bytestring This functions is case-insensitive and do not require correct padding",
        "hierarchy": "Data ByteString Base32",
        "module": "Data.ByteString.Base32",
        "name": "decode",
        "normalized": "Base-\u003eEither String BS.ByteString",
        "package": "base32-bytestring",
        "partial": "",
        "signature": "Base-\u003eEither String BS.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:decodeLenient",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but with additional leniency: decodeLenient\n will skip non-alphabet characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32",
        "fct-package": "base32-bytestring",
        "fct-signature": "Base32 -\u003e Either String BS.ByteString",
        "fct-source": "src/Data-ByteString-Base32.html#decodeLenient",
        "fct-type": "function",
        "title": "decodeLenient"
      },
      "index": {
        "description": "The same as decode but with additional leniency decodeLenient will skip non-alphabet characters",
        "hierarchy": "Data ByteString Base32",
        "module": "Data.ByteString.Base32",
        "name": "decodeLenient",
        "normalized": "Base-\u003eEither String BS.ByteString",
        "package": "base32-bytestring",
        "partial": "Lenient",
        "signature": "Base-\u003eEither String BS.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base32-bytestring/docs/Data-ByteString-Base32.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an arbitrary bytestring into (upper case) base32 form.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Base32",
        "fct-package": "base32-bytestring",
        "fct-signature": "BS.ByteString -\u003e Base32",
        "fct-source": "src/Data-ByteString-Base32.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode an arbitrary bytestring into upper case base32 form",
        "hierarchy": "Data ByteString Base32",
        "module": "Data.ByteString.Base32",
        "name": "encode",
        "normalized": "BS.ByteString-\u003eBase",
        "package": "base32-bytestring",
        "partial": "",
        "signature": "BS.ByteString-\u003eBase"
      }
    }
  }
]