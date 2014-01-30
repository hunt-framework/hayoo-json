[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive (in IO) AES operations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "module",
        "fct-source": "src/Codec-Crypto-AES-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Primitive in IO AES operations",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "IO",
        "normalized": "",
        "package": "AES",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:AESCtx",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#AESCtx",
        "fct-type": "data",
        "title": "AESCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "AESCtx",
        "normalized": "",
        "package": "AES",
        "partial": "AESCtx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:Direction",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "Direction",
        "normalized": "",
        "package": "AES",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "Mode",
        "normalized": "",
        "package": "AES",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CBC",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "CBC",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CBC"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "CBC",
        "normalized": "",
        "package": "AES",
        "partial": "CBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CFB",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "CFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "CFB",
        "normalized": "",
        "package": "AES",
        "partial": "CFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:CTR",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "CTR",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "CTR",
        "normalized": "",
        "package": "AES",
        "partial": "CTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Decrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "Decrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Decrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "Decrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Decrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:ECB",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "ECB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "ECB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "ECB",
        "normalized": "",
        "package": "AES",
        "partial": "ECB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:Encrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "Encrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Encrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "Encrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Encrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:OFB",
      "description": {
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "OFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "OFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "OFB",
        "normalized": "",
        "package": "AES",
        "partial": "OFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:crypt",
      "description": {
        "fct-descr": "\u003cp\u003eIncrementally encrypt/decrypt bytestrings\n\u003c/p\u003e\u003cp\u003ecrypt is definitely not thread-safe. Don't even think about\n it.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "AESCtx -\u003e ByteString -\u003e IO ByteString",
        "fct-source": "src/Codec-Crypto-AES-IO.html#crypt",
        "fct-type": "function",
        "title": "crypt"
      },
      "index": {
        "description": "Incrementally encrypt decrypt bytestrings crypt is definitely not thread-safe Don even think about it",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "crypt",
        "normalized": "AESCtx-\u003eByteString-\u003eIO ByteString",
        "package": "AES",
        "partial": "",
        "signature": "AESCtx-\u003eByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:newCtx",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an encryption/decryption context for incremental\n encryption/decryption\n\u003c/p\u003e\u003cp\u003eYou may create an ECB context this way, in which case you may pass\n undefined for the IV\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e IO AESCtx",
        "fct-type": "function",
        "title": "newCtx"
      },
      "index": {
        "description": "Create an encryption decryption context for incremental encryption decryption You may create an ECB context this way in which case you may pass undefined for the IV",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "newCtx",
        "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eIO AESCtx",
        "package": "AES",
        "partial": "Ctx",
        "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eIO AESCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-IO.html#v:newECBCtx",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a context for ECB, which doesn't need an IV\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.IO",
        "fct-package": "AES",
        "fct-signature": "ByteString-\u003e Direction-\u003e IO AESCtx",
        "fct-type": "function",
        "title": "newECBCtx"
      },
      "index": {
        "description": "Create context for ECB which doesn need an IV",
        "hierarchy": "Codec Crypto AES IO",
        "module": "Codec.Crypto.AES.IO",
        "name": "newECBCtx",
        "normalized": "ByteString-\u003eDirection-\u003eIO AESCtx",
        "package": "AES",
        "partial": "ECBCtx",
        "signature": "ByteString-\u003eDirection-\u003eIO AESCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn occasionally pure, monadic interface to AES\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "module",
        "fct-source": "src/Codec-Crypto-AES-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "An occasionally pure monadic interface to AES",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "AES",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:AES",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "type",
        "fct-source": "src/Codec-Crypto-AES-Monad.html#AES",
        "fct-type": "type",
        "title": "AES"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "AES",
        "normalized": "",
        "package": "AES",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:AEST",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "type",
        "fct-source": "src/Codec-Crypto-AES-Monad.html#AEST",
        "fct-type": "type",
        "title": "AEST"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "AEST",
        "normalized": "",
        "package": "AES",
        "partial": "AEST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Cryptable",
      "description": {
        "fct-descr": "\u003cp\u003eA class of things that can be crypted\n\u003c/p\u003e\u003cp\u003eThe crypt function returns incremental results as well as\n appending them to the result bytestring.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "class",
        "fct-source": "src/Codec-Crypto-AES-Monad.html#Cryptable",
        "fct-type": "class",
        "title": "Cryptable"
      },
      "index": {
        "description": "class of things that can be crypted The crypt function returns incremental results as well as appending them to the result bytestring",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Cryptable",
        "normalized": "",
        "package": "AES",
        "partial": "Cryptable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Direction",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Direction",
        "normalized": "",
        "package": "AES",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Mode",
        "normalized": "",
        "package": "AES",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CBC",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "CBC",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CBC"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "CBC",
        "normalized": "",
        "package": "AES",
        "partial": "CBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CFB",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "CFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "CFB",
        "normalized": "",
        "package": "AES",
        "partial": "CFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:CTR",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "CTR",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "CTR",
        "normalized": "",
        "package": "AES",
        "partial": "CTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:Decrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "Decrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Decrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Decrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Decrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:ECB",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "ECB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "ECB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "ECB",
        "normalized": "",
        "package": "AES",
        "partial": "ECB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:Encrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "Encrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Encrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "Encrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Encrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:OFB",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "OFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "OFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "OFB",
        "normalized": "",
        "package": "AES",
        "partial": "OFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:crypt",
      "description": {
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "a -\u003e AES s a",
        "fct-source": "src/Codec-Crypto-AES-Monad.html#crypt",
        "fct-type": "method",
        "title": "crypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "crypt",
        "normalized": "a-\u003eAES b a",
        "package": "AES",
        "partial": "",
        "signature": "a-\u003eAES s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:runAES",
      "description": {
        "fct-descr": "\u003cp\u003eRun an AES computation\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e (forall s.  AES s a)-\u003e (a, ByteString)",
        "fct-type": "function",
        "title": "runAES"
      },
      "index": {
        "description": "Run an AES computation",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "runAES",
        "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003e(a b AES c d)-\u003e(d,ByteString)",
        "package": "AES",
        "partial": "AES",
        "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003e(forall s. AES s a)-\u003e(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Monad.html#v:runAEST",
      "description": {
        "fct-descr": "\u003cp\u003eRun an AES computation\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Monad",
        "fct-package": "AES",
        "fct-signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e AEST m a-\u003e m (a, ByteString)",
        "fct-type": "function",
        "title": "runAEST"
      },
      "index": {
        "description": "Run an AES computation",
        "hierarchy": "Codec Crypto AES Monad",
        "module": "Codec.Crypto.AES.Monad",
        "name": "runAEST",
        "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eAEST a b-\u003ea(b,ByteString)",
        "package": "AES",
        "partial": "AEST",
        "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eAEST m a-\u003em(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a cryptographically secure PRNG based on\n AES, reading the seed from \u003cem\u003edev\u003c/em\u003erandom\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Crypto.AES.Random",
        "fct-package": "AES",
        "fct-signature": "module",
        "fct-source": "src/Codec-Crypto-AES-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "This module provides cryptographically secure PRNG based on AES reading the seed from dev random",
        "hierarchy": "Codec Crypto AES Random",
        "module": "Codec.Crypto.AES.Random",
        "name": "Random",
        "normalized": "",
        "package": "AES",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#t:AESGen",
      "description": {
        "fct-descr": "\u003cp\u003eA random number generator that gets its input from prandBytes,\n ensuring purity by storing those bytes for later if you don't\n discard the generator.\n\u003c/p\u003e\u003cp\u003eUsing split on this generator isn't supported, but could be.\n\u003c/p\u003e\u003cp\u003ePlease note that if an asynchronous exception is caught while a\n random number is being generated, the generator will be wrecked\n forevermore.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Random",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-Random.html#AESGen",
        "fct-type": "data",
        "title": "AESGen"
      },
      "index": {
        "description": "random number generator that gets its input from prandBytes ensuring purity by storing those bytes for later if you don discard the generator Using split on this generator isn supported but could be Please note that if an asynchronous exception is caught while random number is being generated the generator will be wrecked forevermore",
        "hierarchy": "Codec Crypto AES Random",
        "module": "Codec.Crypto.AES.Random",
        "name": "AESGen",
        "normalized": "",
        "package": "AES",
        "partial": "AESGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:newAESGen",
      "description": {
        "fct-module": "Codec.Crypto.AES.Random",
        "fct-package": "AES",
        "fct-signature": "IO AESGen",
        "fct-source": "src/Codec-Crypto-AES-Random.html#newAESGen",
        "fct-type": "function",
        "title": "newAESGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES Random",
        "module": "Codec.Crypto.AES.Random",
        "name": "newAESGen",
        "normalized": "",
        "package": "AES",
        "partial": "AESGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:prandBytes",
      "description": {
        "fct-descr": "\u003cp\u003eCryptographic pseudorandomness from an AES cipher. This function\n is currently inefficient for non-multiple-of-16 sized bytestrings.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Random",
        "fct-package": "AES",
        "fct-signature": "Int -\u003e IO ByteString",
        "fct-source": "src/Codec-Crypto-AES-Random.html#prandBytes",
        "fct-type": "function",
        "title": "prandBytes"
      },
      "index": {
        "description": "Cryptographic pseudorandomness from an AES cipher This function is currently inefficient for non-multiple-of-16 sized bytestrings",
        "hierarchy": "Codec Crypto AES Random",
        "module": "Codec.Crypto.AES.Random",
        "name": "prandBytes",
        "normalized": "Int-\u003eIO ByteString",
        "package": "AES",
        "partial": "Bytes",
        "signature": "Int-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES-Random.html#v:randBytes",
      "description": {
        "fct-descr": "\u003cp\u003eRandomness from a system source of nonsense such as \u003cem\u003edev\u003c/em\u003erandom\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES.Random",
        "fct-package": "AES",
        "fct-signature": "Int -\u003e IO ByteString",
        "fct-source": "src/Codec-Crypto-AES-Random.html#randBytes",
        "fct-type": "function",
        "title": "randBytes"
      },
      "index": {
        "description": "Randomness from system source of nonsense such as dev random",
        "hierarchy": "Codec Crypto AES Random",
        "module": "Codec.Crypto.AES.Random",
        "name": "randBytes",
        "normalized": "Int-\u003eIO ByteString",
        "package": "AES",
        "partial": "Bytes",
        "signature": "Int-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure interface to AES\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "module",
        "fct-source": "src/Codec-Crypto-AES.html",
        "fct-type": "module",
        "title": "AES"
      },
      "index": {
        "description": "pure interface to AES",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "AES",
        "normalized": "",
        "package": "AES",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#t:Direction",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "Direction",
        "normalized": "",
        "package": "AES",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eModes ECB and CBC can only handle full 16-byte frames. This means\n the length of every strict bytestring passed in must be a multiple\n of 16; when using lazy bytestrings, its \u003cem\u003ecomponent\u003c/em\u003e strict\n bytestrings must all satisfy this.\n\u003c/p\u003e\u003cp\u003eOther modes can handle bytestrings of any length. However,\n encrypting a bytestring of length 5 and then one of length 4 is not\n the same operation as encrypting a single bytestring of length 9;\n they are internally padded to a multiple of 16 bytes.\n\u003c/p\u003e\u003cp\u003eFor OFB and CTR, Encrypt and Decrypt are the same operation. For\n CTR, the IV is the initial value of the counter.\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "data",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Modes ECB and CBC can only handle full byte frames This means the length of every strict bytestring passed in must be multiple of when using lazy bytestrings its component strict bytestrings must all satisfy this Other modes can handle bytestrings of any length However encrypting bytestring of length and then one of length is not the same operation as encrypting single bytestring of length they are internally padded to multiple of bytes For OFB and CTR Encrypt and Decrypt are the same operation For CTR the IV is the initial value of the counter",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "Mode",
        "normalized": "",
        "package": "AES",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CBC",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "CBC",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CBC"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "CBC",
        "normalized": "",
        "package": "AES",
        "partial": "CBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CFB",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "CFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "CFB",
        "normalized": "",
        "package": "AES",
        "partial": "CFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:CTR",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "CTR",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "CTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "CTR",
        "normalized": "",
        "package": "AES",
        "partial": "CTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:Decrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "Decrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Decrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "Decrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Decrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:ECB",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "ECB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "ECB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "ECB",
        "normalized": "",
        "package": "AES",
        "partial": "ECB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:Encrypt",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "Encrypt",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Direction",
        "fct-type": "function",
        "title": "Encrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "Encrypt",
        "normalized": "",
        "package": "AES",
        "partial": "Encrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:OFB",
      "description": {
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "OFB",
        "fct-source": "src/Codec-Crypto-AES-IO.html#Mode",
        "fct-type": "function",
        "title": "OFB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "OFB",
        "normalized": "",
        "package": "AES",
        "partial": "OFB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:crypt",
      "description": {
        "fct-descr": "\u003cp\u003eEncryption/decryption for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "crypt"
      },
      "index": {
        "description": "Encryption decryption for lazy bytestrings",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "crypt",
        "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
        "package": "AES",
        "partial": "",
        "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Codec-Crypto-AES.html#v:crypt-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEncryption/decryption for strict bytestrings\n\u003c/p\u003e",
        "fct-module": "Codec.Crypto.AES",
        "fct-package": "AES",
        "fct-signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e Direction-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "crypt'"
      },
      "index": {
        "description": "Encryption decryption for strict bytestrings",
        "hierarchy": "Codec Crypto AES",
        "module": "Codec.Crypto.AES",
        "name": "crypt'",
        "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString",
        "package": "AES",
        "partial": "",
        "signature": "Mode-\u003eByteString-\u003eByteString-\u003eDirection-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJust like MonadIO, but codifying \u003cem\u003eunsafe\u003c/em\u003e IO execution. Exists for safety.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.UnsafeIO",
        "fct-package": "AES",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-UnsafeIO.html",
        "fct-type": "module",
        "title": "UnsafeIO"
      },
      "index": {
        "description": "Just like MonadIO but codifying unsafe IO execution Exists for safety",
        "hierarchy": "Control Monad UnsafeIO",
        "module": "Control.Monad.UnsafeIO",
        "name": "UnsafeIO",
        "normalized": "",
        "package": "AES",
        "partial": "Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#t:MonadUnsafeIO",
      "description": {
        "fct-module": "Control.Monad.UnsafeIO",
        "fct-package": "AES",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-UnsafeIO.html#MonadUnsafeIO",
        "fct-type": "class",
        "title": "MonadUnsafeIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad UnsafeIO",
        "module": "Control.Monad.UnsafeIO",
        "name": "MonadUnsafeIO",
        "normalized": "",
        "package": "AES",
        "partial": "Monad Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AES/docs/Control-Monad-UnsafeIO.html#v:liftUnsafeIO",
      "description": {
        "fct-module": "Control.Monad.UnsafeIO",
        "fct-package": "AES",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-UnsafeIO.html#liftUnsafeIO",
        "fct-type": "method",
        "title": "liftUnsafeIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad UnsafeIO",
        "module": "Control.Monad.UnsafeIO",
        "name": "liftUnsafeIO",
        "normalized": "IO a-\u003eb a",
        "package": "AES",
        "partial": "Unsafe IO",
        "signature": "IO a-\u003em a"
      }
    }
  }
]