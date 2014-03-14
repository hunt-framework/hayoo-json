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
        "word": "cipher-rc4"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple implementation of the RC4 stream cipher.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRC4\n\u003c/p\u003e\u003cp\u003eInitial FFI implementation by Peter White \u003ca\u003epeter@janrain.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eReorganized and simplified to have an opaque context.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "RC4",
          "package": "cipher-rc4",
          "source": "src/Crypto-Cipher-RC4.html",
          "type": "module"
        },
        "index": {
          "description": "Simple implementation of the RC4 stream cipher http en.wikipedia.org wiki RC4 Initial FFI implementation by Peter White peter@janrain.com Reorganized and simplified to have an opaque context",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "RC4",
          "package": "cipher-rc4",
          "partial": "RC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe encryption context for RC4\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "Ctx",
          "package": "cipher-rc4",
          "source": "src/Crypto-Cipher-RC4.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "The encryption context for RC4",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "Ctx",
          "package": "cipher-rc4",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 Stream cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "RC4",
          "package": "cipher-rc4",
          "source": "src/Crypto-Cipher-RC4.html#RC4",
          "type": "data"
        },
        "index": {
          "description": "RC4 Stream cipher",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "RC4",
          "package": "cipher-rc4",
          "partial": "RC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#t:RC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.RC4",
          "name": "Ctx",
          "package": "cipher-rc4",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Cipher-RC4.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "Ctx",
          "package": "cipher-rc4",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 xor combination of the rc4 stream with an input\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "combine",
          "package": "cipher-rc4",
          "signature": "Ctx-\u003e ByteString-\u003e (Ctx, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "RC4 xor combination of the rc4 stream with an input",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "combine",
          "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "package": "cipher-rc4",
          "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use combine instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "decrypt",
          "package": "cipher-rc4",
          "signature": "Ctx -\u003e ByteString -\u003e (Ctx, ByteString)",
          "source": "src/Crypto-Cipher-RC4.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use combine instead",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "decrypt",
          "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "package": "cipher-rc4",
          "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use combine instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "encrypt",
          "package": "cipher-rc4",
          "signature": "Ctx -\u003e ByteString -\u003e (Ctx, ByteString)",
          "source": "src/Crypto-Cipher-RC4.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use combine instead",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "encrypt",
          "normalized": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "package": "cipher-rc4",
          "signature": "Ctx-\u003eByteString-\u003e(Ctx,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate the next len bytes of the rc4 stream without combining\n it to anything.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "generate",
          "package": "cipher-rc4",
          "signature": "Ctx -\u003e Int -\u003e (Ctx, ByteString)",
          "source": "src/Crypto-Cipher-RC4.html#generate",
          "type": "function"
        },
        "index": {
          "description": "generate the next len bytes of the rc4 stream without combining it to anything",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "generate",
          "normalized": "Ctx-\u003eInt-\u003e(Ctx,ByteString)",
          "package": "cipher-rc4",
          "signature": "Ctx-\u003eInt-\u003e(Ctx,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 context initialization.\n\u003c/p\u003e\u003cp\u003eseed the context with an initial key. the key size need to be\n adequate otherwise security takes a hit.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC4",
          "name": "initCtx",
          "package": "cipher-rc4",
          "signature": "ByteString-\u003e Ctx",
          "type": "function"
        },
        "index": {
          "description": "RC4 context initialization seed the context with an initial key the key size need to be adequate otherwise security takes hit",
          "hierarchy": "Crypto Cipher RC4",
          "module": "Crypto.Cipher.RC4",
          "name": "initCtx",
          "normalized": "ByteString-\u003eCtx",
          "package": "cipher-rc4",
          "partial": "Ctx",
          "signature": "ByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc4/docs/Crypto-Cipher-RC4.html#v:initCtx"
      }
    }
  ]
]