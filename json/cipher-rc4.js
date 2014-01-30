[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple implementation of the RC4 stream cipher.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRC4\n\u003c/p\u003e\u003cp\u003eInitial FFI implementation by Peter White \u003ca\u003epeter@janrain.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eReorganized and simplified to have an opaque context.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Cipher-RC4.html",
        "fct-type": "module",
        "title": "RC4"
      },
      "index": {
        "description": "Simple implementation of the RC4 stream cipher http en.wikipedia.org wiki RC4 Initial FFI implementation by Peter White peter@janrain.com Reorganized and simplified to have an opaque context",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "RC4",
        "normalized": "",
        "package": "cipher-rc4",
        "partial": "RC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eThe encryption context for RC4\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "newtype",
        "fct-source": "src/Crypto-Cipher-RC4.html#Ctx",
        "fct-type": "newtype",
        "title": "Ctx"
      },
      "index": {
        "description": "The encryption context for RC4",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "Ctx",
        "normalized": "",
        "package": "cipher-rc4",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#t:RC4",
      "description": {
        "fct-descr": "\u003cp\u003eRC4 Stream cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Cipher-RC4.html#RC4",
        "fct-type": "data",
        "title": "RC4"
      },
      "index": {
        "description": "RC4 Stream cipher",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "RC4",
        "normalized": "",
        "package": "cipher-rc4",
        "partial": "RC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:Ctx",
      "description": {
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "Ctx ByteString",
        "fct-source": "src/Crypto-Cipher-RC4.html#Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "Ctx",
        "normalized": "",
        "package": "cipher-rc4",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eRC4 xor combination of the rc4 stream with an input\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "Ctx-\u003e ByteString-\u003e (Ctx, ByteString)",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "RC4 xor combination of the rc4 stream with an input",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "combine",
        "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
        "package": "cipher-rc4",
        "partial": "",
        "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use combine instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "Ctx -\u003e ByteString -\u003e (Ctx, ByteString)",
        "fct-source": "src/Crypto-Cipher-RC4.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Deprecated use combine instead",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "decrypt",
        "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
        "package": "cipher-rc4",
        "partial": "",
        "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use combine instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "Ctx -\u003e ByteString -\u003e (Ctx, ByteString)",
        "fct-source": "src/Crypto-Cipher-RC4.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Deprecated use combine instead",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "encrypt",
        "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
        "package": "cipher-rc4",
        "partial": "",
        "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:generate",
      "description": {
        "fct-descr": "\u003cp\u003egenerate the next len bytes of the rc4 stream without combining\n it to anything.\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "Ctx -\u003e Int -\u003e (Ctx, ByteString)",
        "fct-source": "src/Crypto-Cipher-RC4.html#generate",
        "fct-type": "function",
        "title": "generate"
      },
      "index": {
        "description": "generate the next len bytes of the rc4 stream without combining it to anything",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "generate",
        "normalized": "Ctx-\u003eInt-\u003e(Ctx,ByteString)",
        "package": "cipher-rc4",
        "partial": "",
        "signature": "Ctx-\u003eInt-\u003e(Ctx,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:initCtx",
      "description": {
        "fct-descr": "\u003cp\u003eRC4 context initialization.\n\u003c/p\u003e\u003cp\u003eseed the context with an initial key. the key size need to be\n adequate otherwise security takes a hit.\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher.RC4",
        "fct-package": "cipher-rc4",
        "fct-signature": "ByteString-\u003e Ctx",
        "fct-type": "function",
        "title": "initCtx"
      },
      "index": {
        "description": "RC4 context initialization seed the context with an initial key the key size need to be adequate otherwise security takes hit",
        "hierarchy": "Crypto Cipher RC4",
        "module": "Crypto.Cipher.RC4",
        "name": "initCtx",
        "normalized": "ByteString-\u003eCtx",
        "package": "cipher-rc4",
        "partial": "Ctx",
        "signature": "ByteString-\u003eCtx"
      }
    }
  }
]