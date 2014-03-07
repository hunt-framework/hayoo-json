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
        "word": "AES"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive (in IO) AES operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Crypto.AES.IO",
          "name": "IO",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive in IO AES operations",
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "IO",
          "package": "AES",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.IO",
          "name": "AESCtx",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#AESCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "AESCtx",
          "package": "AES",
          "partial": "AESCtx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:AESCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.IO",
          "name": "Direction",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "Direction",
          "package": "AES",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.IO",
          "name": "Mode",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "Mode",
          "package": "AES",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "CBC",
          "package": "AES",
          "signature": "CBC",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CBC\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CBC\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CBC\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "CBC",
          "package": "AES",
          "partial": "CBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "CFB",
          "package": "AES",
          "signature": "CFB",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CFB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CFB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CFB\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "CFB",
          "package": "AES",
          "partial": "CFB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CFB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "CTR",
          "package": "AES",
          "signature": "CTR",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CTR\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CTR\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CTR\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "CTR",
          "package": "AES",
          "partial": "CTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "Decrypt",
          "package": "AES",
          "signature": "Decrypt",
          "source": "src/Codec-Crypto-AES-IO.html#Direction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Decrypt\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:Decrypt\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:Decrypt\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "Decrypt",
          "package": "AES",
          "partial": "Decrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "ECB",
          "package": "AES",
          "signature": "ECB",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:ECB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:ECB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:ECB\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "ECB",
          "package": "AES",
          "partial": "ECB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:ECB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "Encrypt",
          "package": "AES",
          "signature": "Encrypt",
          "source": "src/Codec-Crypto-AES-IO.html#Direction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Encrypt\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:Encrypt\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:Encrypt\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "Encrypt",
          "package": "AES",
          "partial": "Encrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.AES.IO\",\"Codec.Crypto.AES.Monad\",\"Codec.Crypto.AES\"]",
          "name": "OFB",
          "package": "AES",
          "signature": "OFB",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:OFB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:OFB\",\"http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:OFB\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "OFB",
          "package": "AES",
          "partial": "OFB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:OFB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally encrypt/decrypt bytestrings\n\u003c/p\u003e\u003cp\u003ecrypt is definitely not thread-safe. Don't even think about\n it.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.IO",
          "name": "crypt",
          "package": "AES",
          "signature": "AESCtx -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Codec-Crypto-AES-IO.html#crypt",
          "type": "function"
        },
        "index": {
          "description": "Incrementally encrypt decrypt bytestrings crypt is definitely not thread-safe Don even think about it",
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "crypt",
          "normalized": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "package": "AES",
          "signature": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:crypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an encryption/decryption context for incremental\n encryption/decryption\n\u003c/p\u003e\u003cp\u003eYou may create an ECB context this way, in which case you may pass\n undefined for the IV\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.IO",
          "name": "newCtx",
          "package": "AES",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e IO AESCtx",
          "type": "function"
        },
        "index": {
          "description": "Create an encryption decryption context for incremental encryption decryption You may create an ECB context this way in which case you may pass undefined for the IV",
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "newCtx",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eIO AESCtx",
          "package": "AES",
          "partial": "Ctx",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eIO AESCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:newCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a context for ECB, which doesn't need an IV\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.IO",
          "name": "newECBCtx",
          "package": "AES",
          "signature": "ByteString-\u003e Direction-\u003e IO AESCtx",
          "type": "function"
        },
        "index": {
          "description": "Create context for ECB which doesn need an IV",
          "hierarchy": "Codec Crypto AES IO",
          "module": "Codec.Crypto.AES.IO",
          "name": "newECBCtx",
          "normalized": "ByteString-\u003eDirection-\u003eIO AESCtx",
          "package": "AES",
          "partial": "ECBCtx",
          "signature": "ByteString-\u003eDirection-\u003eIO AESCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:newECBCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn occasionally pure, monadic interface to AES\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Monad",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "An occasionally pure monadic interface to AES",
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Monad",
          "package": "AES",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.Monad",
          "name": "AES",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Monad.html#AES",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "AES",
          "package": "AES",
          "partial": "AES",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:AES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.Monad",
          "name": "AEST",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Monad.html#AEST",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "AEST",
          "package": "AES",
          "partial": "AEST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:AEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of things that can be crypted\n\u003c/p\u003e\u003cp\u003eThe crypt function returns incremental results as well as\n appending them to the result bytestring.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Cryptable",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Monad.html#Cryptable",
          "type": "class"
        },
        "index": {
          "description": "class of things that can be crypted The crypt function returns incremental results as well as appending them to the result bytestring",
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Cryptable",
          "package": "AES",
          "partial": "Cryptable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Cryptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.Monad",
          "name": "Direction",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Direction",
          "package": "AES",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Mode",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "Mode",
          "package": "AES",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.Monad",
          "name": "crypt",
          "package": "AES",
          "signature": "a -\u003e AES s a",
          "source": "src/Codec-Crypto-AES-Monad.html#crypt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "crypt",
          "normalized": "a-\u003eAES b a",
          "package": "AES",
          "signature": "a-\u003eAES s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:crypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an AES computation\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Monad",
          "name": "runAES",
          "package": "AES",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e (forall s.  AES s a)-\u003e (a, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Run an AES computation",
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "runAES",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003e(a b AES c d)-\u003e(d,ByteString)",
          "package": "AES",
          "partial": "AES",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003e(forall s. AES s a)-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:runAES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an AES computation\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Monad",
          "name": "runAEST",
          "package": "AES",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e AEST m a-\u003e m (a, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Run an AES computation",
          "hierarchy": "Codec Crypto AES Monad",
          "module": "Codec.Crypto.AES.Monad",
          "name": "runAEST",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eAEST a b-\u003ea(b,ByteString)",
          "package": "AES",
          "partial": "AEST",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eAEST m a-\u003em(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:runAEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a cryptographically secure PRNG based on\n AES, reading the seed from \u003cem\u003edev\u003c/em\u003erandom\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Crypto.AES.Random",
          "name": "Random",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Random.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides cryptographically secure PRNG based on AES reading the seed from dev random",
          "hierarchy": "Codec Crypto AES Random",
          "module": "Codec.Crypto.AES.Random",
          "name": "Random",
          "package": "AES",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random number generator that gets its input from prandBytes,\n ensuring purity by storing those bytes for later if you don't\n discard the generator.\n\u003c/p\u003e\u003cp\u003eUsing split on this generator isn't supported, but could be.\n\u003c/p\u003e\u003cp\u003ePlease note that if an asynchronous exception is caught while a\n random number is being generated, the generator will be wrecked\n forevermore.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Random",
          "name": "AESGen",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-Random.html#AESGen",
          "type": "data"
        },
        "index": {
          "description": "random number generator that gets its input from prandBytes ensuring purity by storing those bytes for later if you don discard the generator Using split on this generator isn supported but could be Please note that if an asynchronous exception is caught while random number is being generated the generator will be wrecked forevermore",
          "hierarchy": "Codec Crypto AES Random",
          "module": "Codec.Crypto.AES.Random",
          "name": "AESGen",
          "package": "AES",
          "partial": "AESGen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#t:AESGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES.Random",
          "name": "newAESGen",
          "package": "AES",
          "signature": "IO AESGen",
          "source": "src/Codec-Crypto-AES-Random.html#newAESGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto AES Random",
          "module": "Codec.Crypto.AES.Random",
          "name": "newAESGen",
          "package": "AES",
          "partial": "AESGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:newAESGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCryptographic pseudorandomness from an AES cipher. This function\n is currently inefficient for non-multiple-of-16 sized bytestrings.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Random",
          "name": "prandBytes",
          "package": "AES",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Codec-Crypto-AES-Random.html#prandBytes",
          "type": "function"
        },
        "index": {
          "description": "Cryptographic pseudorandomness from an AES cipher This function is currently inefficient for non-multiple-of-16 sized bytestrings",
          "hierarchy": "Codec Crypto AES Random",
          "module": "Codec.Crypto.AES.Random",
          "name": "prandBytes",
          "normalized": "Int-\u003eIO ByteString",
          "package": "AES",
          "partial": "Bytes",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:prandBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomness from a system source of nonsense such as \u003cem\u003edev\u003c/em\u003erandom\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES.Random",
          "name": "randBytes",
          "package": "AES",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Codec-Crypto-AES-Random.html#randBytes",
          "type": "function"
        },
        "index": {
          "description": "Randomness from system source of nonsense such as dev random",
          "hierarchy": "Codec Crypto AES Random",
          "module": "Codec.Crypto.AES.Random",
          "name": "randBytes",
          "normalized": "Int-\u003eIO ByteString",
          "package": "AES",
          "partial": "Bytes",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:randBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure interface to AES\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Crypto.AES",
          "name": "AES",
          "package": "AES",
          "source": "src/Codec-Crypto-AES.html",
          "type": "module"
        },
        "index": {
          "description": "pure interface to AES",
          "hierarchy": "Codec Crypto AES",
          "module": "Codec.Crypto.AES",
          "name": "AES",
          "package": "AES",
          "partial": "AES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.AES",
          "name": "Direction",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto AES",
          "module": "Codec.Crypto.AES",
          "name": "Direction",
          "package": "AES",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES",
          "name": "Mode",
          "package": "AES",
          "source": "src/Codec-Crypto-AES-IO.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
          "hierarchy": "Codec Crypto AES",
          "module": "Codec.Crypto.AES",
          "name": "Mode",
          "package": "AES",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncryption/decryption for lazy bytestrings\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES",
          "name": "crypt",
          "package": "AES",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encryption decryption for lazy bytestrings",
          "hierarchy": "Codec Crypto AES",
          "module": "Codec.Crypto.AES",
          "name": "crypt",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
          "package": "AES",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:crypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncryption/decryption for strict bytestrings\n\u003c/p\u003e",
          "module": "Codec.Crypto.AES",
          "name": "crypt'",
          "package": "AES",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encryption decryption for strict bytestrings",
          "hierarchy": "Codec Crypto AES",
          "module": "Codec.Crypto.AES",
          "name": "crypt'",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
          "package": "AES",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:crypt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJust like MonadIO, but codifying \u003cem\u003eunsafe\u003c/em\u003e IO execution. Exists for safety.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.UnsafeIO",
          "name": "UnsafeIO",
          "package": "AES",
          "source": "src/Control-Monad-UnsafeIO.html",
          "type": "module"
        },
        "index": {
          "description": "Just like MonadIO but codifying unsafe IO execution Exists for safety",
          "hierarchy": "Control Monad UnsafeIO",
          "module": "Control.Monad.UnsafeIO",
          "name": "UnsafeIO",
          "package": "AES",
          "partial": "Unsafe IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.UnsafeIO",
          "name": "MonadUnsafeIO",
          "package": "AES",
          "source": "src/Control-Monad-UnsafeIO.html#MonadUnsafeIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad UnsafeIO",
          "module": "Control.Monad.UnsafeIO",
          "name": "MonadUnsafeIO",
          "package": "AES",
          "partial": "Monad Unsafe IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#t:MonadUnsafeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.UnsafeIO",
          "name": "liftUnsafeIO",
          "package": "AES",
          "signature": "IO a -\u003e m a",
          "source": "src/Control-Monad-UnsafeIO.html#liftUnsafeIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad UnsafeIO",
          "module": "Control.Monad.UnsafeIO",
          "name": "liftUnsafeIO",
          "normalized": "IO a-\u003eb a",
          "package": "AES",
          "partial": "Unsafe IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#v:liftUnsafeIO"
      }
    }
  ]
]