[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module mirrors \u003ccode\u003e\u003ca\u003eClasses\u003c/a\u003e\u003c/code\u003e except that errors are thrown as\n exceptions instead of having returning types of \u003ccode\u003eEither error result\u003c/code\u003e\n or \u003ccode\u003eMaybe result\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNB This module is experimental and might go away or be re-arranged.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Classes-Exceptions.html",
        "fct-type": "module",
        "title": "Exceptions"
      },
      "index": {
        "description": "The module mirrors Classes except that errors are thrown as exceptions instead of having returning types of Either error result or Maybe result NB This module is experimental and might go away or be re-arranged",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "Exceptions",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:AsymCipher",
      "description": {
        "fct-descr": "\u003cp\u003eAsymetric ciphers (common ones being RSA or EC based)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#AsymCipher",
        "fct-type": "class",
        "title": "AsymCipher"
      },
      "index": {
        "description": "Asymetric ciphers common ones being RSA or EC based",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "AsymCipher",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Asym Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:BlockCipher",
      "description": {
        "fct-descr": "\u003cp\u003eThe BlockCipher class is intended as the generic interface\n targeted by maintainers of Haskell cipher implementations.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: blockSize, encryptBlock, decryptBlock,\n buildKey, and keyLength.\n\u003c/p\u003e\u003cp\u003eInstances must handle unaligned data\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#BlockCipher",
        "fct-type": "class",
        "title": "BlockCipher"
      },
      "index": {
        "description": "The BlockCipher class is intended as the generic interface targeted by maintainers of Haskell cipher implementations Minimum complete definition blockSize encryptBlock decryptBlock buildKey and keyLength Instances must handle unaligned data",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "BlockCipher",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:CipherError",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Classes-Exceptions.html#CipherError",
        "fct-type": "data",
        "title": "CipherError"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "CipherError",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Cipher Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:CryptoRandomGen",
      "description": {
        "fct-descr": "\u003cp\u003eA class of random bit generators that allows for the possibility\n of failure, reseeding, providing entropy at the same time as\n requesting bytes\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenBytes\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedInfo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedPeriod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Random.html#CryptoRandomGen",
        "fct-type": "class",
        "title": "CryptoRandomGen"
      },
      "index": {
        "description": "class of random bit generators that allows for the possibility of failure reseeding providing entropy at the same time as requesting bytes Minimum complete definition newGen genSeedLength genBytes reseed reseedInfo reseedPeriod",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "CryptoRandomGen",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Crypto Random Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:GenError",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator failures should always return the appropriate GenError.\n Note \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e in an instance of exception but wether or not an\n exception is thrown depends on if the selected generator (read:\n if you don't want execptions from code that uses \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e then\n pass in a generator that never has an error for the used functions)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "data",
        "title": "GenError"
      },
      "index": {
        "description": "Generator failures should always return the appropriate GenError Note GenError in an instance of exception but wether or not an exception is thrown depends on if the selected generator read if you don want execptions from code that uses throw then pass in generator that never has an error for the used functions",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "GenError",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003eoutputLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eblockLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einitialCtx\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdateCtx\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efinalize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#Hash",
        "fct-type": "class",
        "title": "Hash"
      },
      "index": {
        "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data Minimum complete definition outputLength blockLength initialCtx updateCtx and finalize",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "Hash",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:ReseedInfo",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "data",
        "title": "ReseedInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ReseedInfo",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Reseed Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:Signing",
      "description": {
        "fct-descr": "\u003cp\u003eA class for signing operations which inherently can not be as generic\n as asymetric ciphers (ex: DSA).\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#Signing",
        "fct-type": "class",
        "title": "Signing"
      },
      "index": {
        "description": "class for signing operations which inherently can not be as generic as asymetric ciphers ex DSA",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "Signing",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Signing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:GenError",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "GenError GenError",
        "fct-source": "src/Crypto-Classes-Exceptions.html#CipherError",
        "fct-type": "function",
        "title": "GenError"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "GenError",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:GenErrorOther",
      "description": {
        "fct-descr": "\u003cp\u003eMisc\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "GenErrorOther String",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "GenErrorOther"
      },
      "index": {
        "description": "Misc",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "GenErrorOther",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen Error Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator needs reseeded in X bytes\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "InXBytes !Word64",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "InXBytes"
      },
      "index": {
        "description": "Generator needs reseeded in bytes",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "InXBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "In XBytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXCalls",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator needs reseeded in X calls\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "InXCalls !Word64",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "InXCalls"
      },
      "index": {
        "description": "Generator needs reseeded in calls",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "InXCalls",
        "normalized": "",
        "package": "crypto-api",
        "partial": "In XCalls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:KeyGenFailure",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "KeyGenFailure",
        "fct-source": "src/Crypto-Classes-Exceptions.html#CipherError",
        "fct-type": "function",
        "title": "KeyGenFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "KeyGenFailure",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key Gen Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedReseed",
      "description": {
        "fct-descr": "\u003cp\u003eSome generators cease operation\n after too high a count without a\n reseed (ex: NIST SP 800-90)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "NeedReseed",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NeedReseed"
      },
      "index": {
        "description": "Some generators cease operation after too high count without reseed ex NIST SP",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "NeedReseed",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Need Reseed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedsInfiniteSeed",
      "description": {
        "fct-descr": "\u003cp\u003eThis generator can not be\n instantiated or reseeded with a\n finite seed (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "NeedsInfiniteSeed",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NeedsInfiniteSeed"
      },
      "index": {
        "description": "This generator can not be instantiated or reseeded with finite seed ex SystemRandom",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "NeedsInfiniteSeed",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Needs Infinite Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:Never",
      "description": {
        "fct-descr": "\u003cp\u003eThis generator never reseeds (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "Never",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "Never"
      },
      "index": {
        "description": "This generator never reseeds ex SystemRandom",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "Never",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Never",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotEnoughEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eFor instantiating new generators\n (or reseeding)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "NotEnoughEntropy",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NotEnoughEntropy"
      },
      "index": {
        "description": "For instantiating new generators or reseeding",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "NotEnoughEntropy",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Not Enough Entropy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotSoon",
      "description": {
        "fct-descr": "\u003cp\u003eThe bound is over 2^64 bytes or calls\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "NotSoon",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "NotSoon"
      },
      "index": {
        "description": "The bound is over bytes or calls",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "NotSoon",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Not Soon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RangeInvalid",
      "description": {
        "fct-descr": "\u003cp\u003eWhen using \u003ccode\u003egenInteger g (l,h)\u003c/code\u003e\n and \u003ccode\u003elogBase 2 (h - l) \u003e (maxBound\n :: Int)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "RangeInvalid",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "RangeInvalid"
      },
      "index": {
        "description": "When using genInteger and logBase maxBound Int",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "RangeInvalid",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Range Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RequestedTooManyBytes",
      "description": {
        "fct-descr": "\u003cp\u003eRequested more bytes than a\n single pass can generate (The\n maximum request is generator\n dependent)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "RequestedTooManyBytes",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "RequestedTooManyBytes"
      },
      "index": {
        "description": "Requested more bytes than single pass can generate The maximum request is generator dependent",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "RequestedTooManyBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Requested Too Many Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "blockLength",
        "fct-source": "src/Crypto-Classes.html#blockLength",
        "fct-type": "method",
        "title": "blockLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "blockLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockSize",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "blockSize",
        "fct-source": "src/Crypto-Classes.html#blockSize",
        "fct-type": "method",
        "title": "blockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "blockSize",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockSizeBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes in a block cipher block\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged k ByteLength",
        "fct-source": "src/Crypto-Classes.html#blockSizeBytes",
        "fct-type": "function",
        "title": "blockSizeBytes"
      },
      "index": {
        "description": "The number of bytes in block cipher block",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "blockSizeBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Size Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKey",
      "description": {
        "fct-descr": "\u003cp\u003eKey construction from raw material (typically including key expansion)\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eCipherError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e k",
        "fct-source": "src/Crypto-Classes-Exceptions.html#buildKey",
        "fct-type": "function",
        "title": "buildKey"
      },
      "index": {
        "description": "Key construction from raw material typically including key expansion This is wrapper that can throw CipherError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "buildKey",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Key",
        "signature": "ByteString-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyGen",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetric key generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e (k, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#buildKeyGen",
        "fct-type": "function",
        "title": "buildKeyGen"
      },
      "index": {
        "description": "Symmetric key generation This is wrapper that can throw GenError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "buildKeyGen",
        "normalized": "a-\u003e(b,a)",
        "package": "crypto-api",
        "partial": "Key Gen",
        "signature": "g-\u003e(k,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a symmetric key using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "IO k",
        "fct-source": "src/Crypto-Classes.html#buildKeyIO",
        "fct-type": "function",
        "title": "buildKeyIO"
      },
      "index": {
        "description": "Build symmetric key using the system entropy see Random",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "buildKeyIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyPair",
      "description": {
        "fct-descr": "\u003cp\u003eAsymetric key generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e BitLength -\u003e ((p, v), g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#buildKeyPair",
        "fct-type": "function",
        "title": "buildKeyPair"
      },
      "index": {
        "description": "Asymetric key generation This is wrapper that can throw GenError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "buildKeyPair",
        "normalized": "a-\u003eBitLength-\u003e((b,c),a)",
        "package": "crypto-api",
        "partial": "Key Pair",
        "signature": "g-\u003eBitLength-\u003e((p,v),g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyPairIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a pair of asymmetric keys using the system random generator.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "BitLength -\u003e IO (Either GenError (p, v))",
        "fct-source": "src/Crypto-Classes.html#buildKeyPairIO",
        "fct-type": "function",
        "title": "buildKeyPairIO"
      },
      "index": {
        "description": "Build pair of asymmetric keys using the system random generator",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "buildKeyPairIO",
        "normalized": "BitLength-\u003eIO(Either GenError(a,b))",
        "package": "crypto-api",
        "partial": "Key Pair IO",
        "signature": "BitLength-\u003eIO(Either GenError(p,v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cbc",
      "description": {
        "fct-descr": "\u003cp\u003eCipherblock Chaining (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cbc",
        "fct-type": "method",
        "title": "cbc"
      },
      "index": {
        "description": "Cipherblock Chaining encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "cbc",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cbcLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining encryption for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cbcLazy",
        "fct-type": "method",
        "title": "cbcLazy"
      },
      "index": {
        "description": "Cipher block chaining encryption for lazy bytestrings",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "cbcLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cfb",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feedback (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cfb",
        "fct-type": "method",
        "title": "cfb"
      },
      "index": {
        "description": "Ciphertext feedback encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "cfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feed-back encryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cfbLazy",
        "fct-type": "method",
        "title": "cfbLazy"
      },
      "index": {
        "description": "Ciphertext feed-back encryption mode for lazy bytestrings with blockSize",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "cfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ctr",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ctr",
        "fct-type": "method",
        "title": "ctr"
      },
      "index": {
        "description": "Counter encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ctr",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ctrLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ctrLazy",
        "fct-type": "method",
        "title": "ctrLazy"
      },
      "index": {
        "description": "Counter encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ctrLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:decryptAsym",
      "description": {
        "fct-descr": "\u003cp\u003eAsymmetric decryption\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a GenError on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e v -\u003e ByteString -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#decryptAsym",
        "fct-type": "function",
        "title": "decryptAsym"
      },
      "index": {
        "description": "Asymmetric decryption This is wrapper that can throw GenError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "decryptAsym",
        "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,a)",
        "package": "crypto-api",
        "partial": "Asym",
        "signature": "g-\u003ev-\u003eByteString-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:decryptBlock",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "decryptBlock",
        "fct-source": "src/Crypto-Classes.html#decryptBlock",
        "fct-type": "method",
        "title": "decryptBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "decryptBlock",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ecb",
      "description": {
        "fct-descr": "\u003cp\u003eElectronic Cookbook (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#ecb",
        "fct-type": "method",
        "title": "ecb"
      },
      "index": {
        "description": "Electronic Cookbook encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ecb",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ecbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCook book mode - not really a mode at all.  If you don't know what you're doing, don't use this mode^H^H^H^H library.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#ecbLazy",
        "fct-type": "method",
        "title": "ecbLazy"
      },
      "index": {
        "description": "Cook book mode not really mode at all If you don know what you re doing don use this mode library",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ecbLazy",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:encryptAsym",
      "description": {
        "fct-descr": "\u003cp\u003eAsymmetric encryption\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e p -\u003e ByteString -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#encryptAsym",
        "fct-type": "function",
        "title": "encryptAsym"
      },
      "index": {
        "description": "Asymmetric encryption This is wrapper that can throw GenError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "encryptAsym",
        "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,a)",
        "package": "crypto-api",
        "partial": "Asym",
        "signature": "g-\u003ep-\u003eByteString-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:encryptBlock",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "encryptBlock",
        "fct-source": "src/Crypto-Classes.html#encryptBlock",
        "fct-type": "method",
        "title": "encryptBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "encryptBlock",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:finalize",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "finalize",
        "fct-source": "src/Crypto-Classes.html#finalize",
        "fct-type": "method",
        "title": "finalize"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "finalize",
        "normalized": "",
        "package": "crypto-api",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genBytes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egenBytes len g\u003c/code\u003e generates a random ByteString of length\n \u003ccode\u003elen\u003c/code\u003e and new generator.  The \u003ccode\u003eMonadCryptoRandom\u003c/code\u003e package\n has routines useful for converting the ByteString to\n commonly needed values (but \u003ccode\u003ecereal\u003c/code\u003e or other\n deserialization libraries would also work).\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e g -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#genBytes",
        "fct-type": "function",
        "title": "genBytes"
      },
      "index": {
        "description": "genBytes len generates random ByteString of length len and new generator The MonadCryptoRandom package has routines useful for converting the ByteString to commonly needed values but cereal or other deserialization libraries would also work This is wrapper that can throw GenError types as exceptions",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "genBytes",
        "normalized": "ByteLength-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-api",
        "partial": "Bytes",
        "signature": "ByteLength-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genBytesWithEntropy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egenBytesWithEntropy g i entropy\u003c/code\u003e generates \u003ccode\u003ei\u003c/code\u003e random bytes and use\n the additional input \u003ccode\u003eentropy\u003c/code\u003e in the generation of the requested data\n to increase the confidence our generated data is a secure random stream.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e ByteString -\u003e g -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#genBytesWithEntropy",
        "fct-type": "function",
        "title": "genBytesWithEntropy"
      },
      "index": {
        "description": "genBytesWithEntropy entropy generates random bytes and use the additional input entropy in the generation of the requested data to increase the confidence our generated data is secure random stream This is wrapper that can throw GenError types as exceptions",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "genBytesWithEntropy",
        "normalized": "ByteLength-\u003eByteString-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-api",
        "partial": "Bytes With Entropy",
        "signature": "ByteLength-\u003eByteString-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genSeedLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of input entropy necessary to instantiate or reseed\n a generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged g ByteLength",
        "fct-source": "src/Crypto-Random.html#genSeedLength",
        "fct-type": "method",
        "title": "genSeedLength"
      },
      "index": {
        "description": "Length of input entropy necessary to instantiate or reseed generator",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "genSeedLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Seed Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:getIV",
      "description": {
        "fct-descr": "\u003cp\u003eRandom \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e (IV k, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#getIV",
        "fct-type": "function",
        "title": "getIV"
      },
      "index": {
        "description": "Random IV generation This is wrapper that can throw GenError on exception",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "getIV",
        "normalized": "a-\u003e(IV b,a)",
        "package": "crypto-api",
        "partial": "IV",
        "signature": "g-\u003e(IV k,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:getIVIO",
      "description": {
        "fct-descr": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "IO (IV k)",
        "fct-source": "src/Crypto-Classes.html#getIVIO",
        "fct-type": "function",
        "title": "getIVIO"
      },
      "index": {
        "description": "Obtain an IV using the system entropy see Random",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "getIVIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IVIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eHash a lazy ByteString, creating a digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hash",
        "fct-type": "method",
        "title": "hash"
      },
      "index": {
        "description": "Hash lazy ByteString creating digest",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "hash",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hash-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHash a strict ByteString, creating a digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hash%27",
        "fct-type": "method",
        "title": "hash'"
      },
      "index": {
        "description": "Hash strict ByteString creating digest",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "hash'",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a lazy hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hashFunc",
        "fct-type": "function",
        "title": "hashFunc"
      },
      "index": {
        "description": "Obtain lazy hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "hashFunc",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Func",
        "signature": "d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a strict hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hashFunc%27",
        "fct-type": "function",
        "title": "hashFunc'"
      },
      "index": {
        "description": "Obtain strict hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "hashFunc'",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Func'",
        "signature": "d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:incIV",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e by one.  This is way faster than decoding,\n increasing, encoding\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "IV k -\u003e IV k",
        "fct-source": "src/Crypto-Classes.html#incIV",
        "fct-type": "function",
        "title": "incIV"
      },
      "index": {
        "description": "Increase an IV by one This is way faster than decoding increasing encoding",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "incIV",
        "normalized": "IV a-\u003eIV a",
        "package": "crypto-api",
        "partial": "IV",
        "signature": "IV k-\u003eIV k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:initialCtx",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "initialCtx",
        "fct-source": "src/Crypto-Classes.html#initialCtx",
        "fct-type": "method",
        "title": "initialCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "initialCtx",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:keyLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "keyLength",
        "fct-source": "src/Crypto-Classes.html#keyLength",
        "fct-type": "method",
        "title": "keyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "keyLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:keyLengthBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes in a block cipher key (assuming it is an even\n multiple of 8 bits)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged k ByteLength",
        "fct-source": "src/Crypto-Classes.html#keyLengthBytes",
        "fct-type": "function",
        "title": "keyLengthBytes"
      },
      "index": {
        "description": "The number of bytes in block cipher key assuming it is an even multiple of bits",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "keyLengthBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:newGen",
      "description": {
        "fct-descr": "\u003cp\u003eInstantiate a new random bit generator.  The provided\n bytestring should be of length \u003e= genSeedLength.  If the\n bytestring is shorter then the call may fail (suggested\n error: \u003ccode\u003eNotEnoughEntropy\u003c/code\u003e).  If the bytestring is of\n sufficent length the call should always succeed.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e g",
        "fct-source": "src/Crypto-Classes-Exceptions.html#newGen",
        "fct-type": "function",
        "title": "newGen"
      },
      "index": {
        "description": "Instantiate new random bit generator The provided bytestring should be of length genSeedLength If the bytestring is shorter then the call may fail suggested error NotEnoughEntropy If the bytestring is of sufficent length the call should always succeed This is wrapper that can throw GenError types as exceptions",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "newGen",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Gen",
        "signature": "ByteString-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:newGenIO",
      "description": {
        "fct-descr": "\u003cp\u003eBy default this uses \u003ca\u003eSystem.Crypto.Random\u003c/a\u003e to obtain\n entropy for \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "IO g",
        "fct-source": "src/Crypto-Random.html#newGenIO",
        "fct-type": "method",
        "title": "newGenIO"
      },
      "index": {
        "description": "By default this uses System.Crypto.Random to obtain entropy for newGen",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "newGenIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ofb",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ofb",
        "fct-type": "method",
        "title": "ofb"
      },
      "index": {
        "description": "Output feedback encryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ofb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ofbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ofbLazy",
        "fct-type": "method",
        "title": "ofbLazy"
      },
      "index": {
        "description": "Output feedback mode for lazy bytestrings",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "ofbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:outputLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "outputLength",
        "fct-source": "src/Crypto-Classes.html#outputLength",
        "fct-type": "method",
        "title": "outputLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "outputLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:privateKeyLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "v -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#privateKeyLength",
        "fct-type": "method",
        "title": "privateKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "privateKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "v-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:publicKeyLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#publicKeyLength",
        "fct-type": "method",
        "title": "publicKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "publicKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "p-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseed",
      "description": {
        "fct-descr": "\u003cp\u003eIf the generator has produced too many random bytes on its existing\n seed it will throw a \u003ccode\u003eNeedReseed\u003c/code\u003e exception.  In that case, reseed the\n generator using this function and a new high-entropy seed of length \u003e=\n \u003ccode\u003egenSeedLength\u003c/code\u003e.  Using bytestrings that are too short can result in an\n exception (\u003ccode\u003eNotEnoughEntropy\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e g -\u003e g",
        "fct-source": "src/Crypto-Classes-Exceptions.html#reseed",
        "fct-type": "function",
        "title": "reseed"
      },
      "index": {
        "description": "If the generator has produced too many random bytes on its existing seed it will throw NeedReseed exception In that case reseed the generator using this function and new high-entropy seed of length genSeedLength Using bytestrings that are too short can result in an exception NotEnoughEntropy",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "reseed",
        "normalized": "ByteString-\u003ea-\u003ea",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseedInfo",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates how soon a reseed is needed\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e ReseedInfo",
        "fct-source": "src/Crypto-Random.html#reseedInfo",
        "fct-type": "method",
        "title": "reseedInfo"
      },
      "index": {
        "description": "Indicates how soon reseed is needed",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "reseedInfo",
        "normalized": "a-\u003eReseedInfo",
        "package": "crypto-api",
        "partial": "Info",
        "signature": "g-\u003eReseedInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseedPeriod",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates the period between reseeds (constant for most generators).\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e ReseedInfo",
        "fct-source": "src/Crypto-Random.html#reseedPeriod",
        "fct-type": "method",
        "title": "reseedPeriod"
      },
      "index": {
        "description": "Indicates the period between reseeds constant for most generators",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "reseedPeriod",
        "normalized": "a-\u003eReseedInfo",
        "package": "crypto-api",
        "partial": "Period",
        "signature": "g-\u003eReseedInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:signingKeyLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "v -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#signingKeyLength",
        "fct-type": "method",
        "title": "signingKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "signingKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "v-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:siv",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) mode for strict bytestrings.  First argument is\n the optional list of bytestrings to be authenticated but not\n encrypted.  As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#siv",
        "fct-type": "method",
        "title": "siv"
      },
      "index": {
        "description": "SIV Synthetic IV mode for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "siv",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:sivLazy",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) mode for lazy bytestrings. The third argument is\n the optional list of bytestrings to be authenticated but not\n encrypted As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#sivLazy",
        "fct-type": "method",
        "title": "sivLazy"
      },
      "index": {
        "description": "SIV Synthetic IV mode for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "sivLazy",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:splitGen",
      "description": {
        "fct-descr": "\u003cp\u003eWhile the safety and wisdom of a splitting function depends on the\n properties of the generator being split, several arguments from\n informed people indicate such a function is safe for NIST SP 800-90\n generators.  (see libraries@haskell.org discussion around Sept, Oct\n 2010).  You can find implementations of such generators in the \u003ccode\u003eDRBG\u003c/code\u003e\n package.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper for \u003ccode\u003e\u003ca\u003esplitGen\u003c/a\u003e\u003c/code\u003e which throws errors as\n exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e (g, g)",
        "fct-source": "src/Crypto-Classes-Exceptions.html#splitGen",
        "fct-type": "function",
        "title": "splitGen"
      },
      "index": {
        "description": "While the safety and wisdom of splitting function depends on the properties of the generator being split several arguments from informed people indicate such function is safe for NIST SP generators see libraries@haskell.org discussion around Sept Oct You can find implementations of such generators in the DRBG package This is wrapper for splitGen which throws errors as exceptions",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "splitGen",
        "normalized": "a-\u003e(a,a)",
        "package": "crypto-api",
        "partial": "Gen",
        "signature": "g-\u003e(g,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCbc",
      "description": {
        "fct-descr": "\u003cp\u003eCipherblock Chaining (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCbc",
        "fct-type": "method",
        "title": "unCbc"
      },
      "index": {
        "description": "Cipherblock Chaining decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCbc",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cbc",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCbcLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining decryption for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCbcLazy",
        "fct-type": "method",
        "title": "unCbcLazy"
      },
      "index": {
        "description": "Cipher block chaining decryption for lazy bytestrings",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCbcLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cbc Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCfb",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feedback (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCfb",
        "fct-type": "method",
        "title": "unCfb"
      },
      "index": {
        "description": "Ciphertext feedback decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cfb",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feed-back decryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCfbLazy",
        "fct-type": "method",
        "title": "unCfbLazy"
      },
      "index": {
        "description": "Ciphertext feed-back decryption mode for lazy bytestrings with blockSize",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cfb Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCtr",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCtr",
        "fct-type": "method",
        "title": "unCtr"
      },
      "index": {
        "description": "Counter decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCtr",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ctr",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCtrLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCtrLazy",
        "fct-type": "method",
        "title": "unCtrLazy"
      },
      "index": {
        "description": "Counter decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unCtrLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ctr Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unEcb",
      "description": {
        "fct-descr": "\u003cp\u003eElectronic Cookbook (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#unEcb",
        "fct-type": "method",
        "title": "unEcb"
      },
      "index": {
        "description": "Electronic Cookbook decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unEcb",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Ecb",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unEcbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eECB decrypt, complementary to \u003ccode\u003e\u003ca\u003eecb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#unEcbLazy",
        "fct-type": "method",
        "title": "unEcbLazy"
      },
      "index": {
        "description": "ECB decrypt complementary to ecb",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unEcbLazy",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Ecb Lazy",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unOfb",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unOfb",
        "fct-type": "method",
        "title": "unOfb"
      },
      "index": {
        "description": "Output feedback decryption",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unOfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ofb",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unOfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unOfbLazy",
        "fct-type": "method",
        "title": "unOfbLazy"
      },
      "index": {
        "description": "Output feedback mode for lazy bytestrings",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unOfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ofb Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unSiv",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) for strict bytestrings First argument is the\n optional list of bytestrings to be authenticated but not encrypted\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#unSiv",
        "fct-type": "method",
        "title": "unSiv"
      },
      "index": {
        "description": "SIV Synthetic IV for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unSiv",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Siv",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unSivLazy",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) for lazy bytestrings.  The third argument is the\n optional list of bytestrings to be authenticated but not encrypted.\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#unSivLazy",
        "fct-type": "method",
        "title": "unSivLazy"
      },
      "index": {
        "description": "SIV Synthetic IV for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "unSivLazy",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Siv Lazy",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:updateCtx",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "updateCtx",
        "fct-source": "src/Crypto-Classes.html#updateCtx",
        "fct-type": "method",
        "title": "updateCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "updateCtx",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:verify",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Crypto-Classes.html#verify",
        "fct-type": "method",
        "title": "verify"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "verify",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eBool",
        "package": "crypto-api",
        "partial": "",
        "signature": "p-\u003eByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:verifyingKeyLength",
      "description": {
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#verifyingKeyLength",
        "fct-type": "method",
        "title": "verifyingKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "verifyingKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "p-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:zeroIV",
      "description": {
        "fct-descr": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e made only of zeroes\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes.Exceptions",
        "fct-package": "crypto-api",
        "fct-signature": "IV k",
        "fct-source": "src/Crypto-Classes.html#zeroIV",
        "fct-type": "function",
        "title": "zeroIV"
      },
      "index": {
        "description": "Obtain an IV made only of zeroes",
        "hierarchy": "Crypto Classes Exceptions",
        "module": "Crypto.Classes.Exceptions",
        "name": "zeroIV",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the heart of the crypto-api package.  By making (or having) \nan instance of Hash, AsymCipher, BlockCipher or StreamCipher you provide (or obtain)\naccess to any infrastructure built on these primitives include block cipher modes\nof operation, hashing, hmac, signing, etc.  These classes allow users to build\nroutines that are agnostic to the algorithm used so changing algorithms is as simple\nas changing a type signature.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Classes.html",
        "fct-type": "module",
        "title": "Classes"
      },
      "index": {
        "description": "This is the heart of the crypto-api package By making or having an instance of Hash AsymCipher BlockCipher or StreamCipher you provide or obtain access to any infrastructure built on these primitives include block cipher modes of operation hashing hmac signing etc These classes allow users to build routines that are agnostic to the algorithm used so changing algorithms is as simple as changing type signature",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "Classes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Classes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:AsymCipher",
      "description": {
        "fct-descr": "\u003cp\u003eAsymetric ciphers (common ones being RSA or EC based)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#AsymCipher",
        "fct-type": "class",
        "title": "AsymCipher"
      },
      "index": {
        "description": "Asymetric ciphers common ones being RSA or EC based",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "AsymCipher",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Asym Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:BlockCipher",
      "description": {
        "fct-descr": "\u003cp\u003eThe BlockCipher class is intended as the generic interface\n targeted by maintainers of Haskell cipher implementations.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: blockSize, encryptBlock, decryptBlock,\n buildKey, and keyLength.\n\u003c/p\u003e\u003cp\u003eInstances must handle unaligned data\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#BlockCipher",
        "fct-type": "class",
        "title": "BlockCipher"
      },
      "index": {
        "description": "The BlockCipher class is intended as the generic interface targeted by maintainers of Haskell cipher implementations Minimum complete definition blockSize encryptBlock decryptBlock buildKey and keyLength Instances must handle unaligned data",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "BlockCipher",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003eoutputLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eblockLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einitialCtx\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdateCtx\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efinalize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#Hash",
        "fct-type": "class",
        "title": "Hash"
      },
      "index": {
        "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data Minimum complete definition outputLength blockLength initialCtx updateCtx and finalize",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "Hash",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:Signing",
      "description": {
        "fct-descr": "\u003cp\u003eA class for signing operations which inherently can not be as generic\n as asymetric ciphers (ex: DSA).\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#Signing",
        "fct-type": "class",
        "title": "Signing"
      },
      "index": {
        "description": "class for signing operations which inherently can not be as generic as asymetric ciphers ex DSA",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "Signing",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Signing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:StreamCipher",
      "description": {
        "fct-descr": "\u003cp\u003eA stream cipher class.  Instance are expected to work on messages as small as one byte\n The length of the resulting cipher text should be equal\n to the length of the input message.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Classes.html#StreamCipher",
        "fct-type": "class",
        "title": "StreamCipher"
      },
      "index": {
        "description": "stream cipher class Instance are expected to work on messages as small as one byte The length of the resulting cipher text should be equal to the length of the input message",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "StreamCipher",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Stream Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "blockLength",
        "fct-source": "src/Crypto-Classes.html#blockLength",
        "fct-type": "method",
        "title": "blockLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "blockLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockSize",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "blockSize",
        "fct-source": "src/Crypto-Classes.html#blockSize",
        "fct-type": "method",
        "title": "blockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "blockSize",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockSizeBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes in a block cipher block\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged k ByteLength",
        "fct-source": "src/Crypto-Classes.html#blockSizeBytes",
        "fct-type": "function",
        "title": "blockSizeBytes"
      },
      "index": {
        "description": "The number of bytes in block cipher block",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "blockSizeBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Size Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKey",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "buildKey",
        "fct-source": "src/Crypto-Classes.html#buildKey",
        "fct-type": "method",
        "title": "buildKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKey",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyGen",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a symmetric key using a given \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e Either GenError (k, g)",
        "fct-source": "src/Crypto-Classes.html#buildKeyGen",
        "fct-type": "function",
        "title": "buildKeyGen"
      },
      "index": {
        "description": "Build symmetric key using given CryptoRandomGen",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKeyGen",
        "normalized": "a-\u003eEither GenError(b,a)",
        "package": "crypto-api",
        "partial": "Key Gen",
        "signature": "g-\u003eEither GenError(k,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a symmetric key using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "IO k",
        "fct-source": "src/Crypto-Classes.html#buildKeyIO",
        "fct-type": "function",
        "title": "buildKeyIO"
      },
      "index": {
        "description": "Build symmetric key using the system entropy see Random",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKeyIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPair",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "buildKeyPair",
        "fct-source": "src/Crypto-Classes.html#buildKeyPair",
        "fct-type": "method",
        "title": "buildKeyPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKeyPair",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPairGen",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ebuildKeyPair\u003c/a\u003e\u003c/code\u003e for ease of use with state monads.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "BitLength -\u003e g -\u003e Either GenError ((p, v), g)",
        "fct-source": "src/Crypto-Classes.html#buildKeyPairGen",
        "fct-type": "function",
        "title": "buildKeyPairGen"
      },
      "index": {
        "description": "Flipped buildKeyPair for ease of use with state monads",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKeyPairGen",
        "normalized": "BitLength-\u003ea-\u003eEither GenError((b,c),a)",
        "package": "crypto-api",
        "partial": "Key Pair Gen",
        "signature": "BitLength-\u003eg-\u003eEither GenError((p,v),g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPairIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a pair of asymmetric keys using the system random generator.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "BitLength -\u003e IO (Either GenError (p, v))",
        "fct-source": "src/Crypto-Classes.html#buildKeyPairIO",
        "fct-type": "function",
        "title": "buildKeyPairIO"
      },
      "index": {
        "description": "Build pair of asymmetric keys using the system random generator",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildKeyPairIO",
        "normalized": "BitLength-\u003eIO(Either GenError(a,b))",
        "package": "crypto-api",
        "partial": "Key Pair IO",
        "signature": "BitLength-\u003eIO(Either GenError(p,v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningKeyPairGen",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ebuildSigningPair\u003c/a\u003e\u003c/code\u003e for ease of use with state monads.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "BitLength -\u003e g -\u003e Either GenError ((p, v), g)",
        "fct-source": "src/Crypto-Classes.html#buildSigningKeyPairGen",
        "fct-type": "function",
        "title": "buildSigningKeyPairGen"
      },
      "index": {
        "description": "Flipped buildSigningPair for ease of use with state monads",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildSigningKeyPairGen",
        "normalized": "BitLength-\u003ea-\u003eEither GenError((b,c),a)",
        "package": "crypto-api",
        "partial": "Signing Key Pair Gen",
        "signature": "BitLength-\u003eg-\u003eEither GenError((p,v),g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningKeyPairIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a signing key using the system random generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "BitLength -\u003e IO (Either GenError (p, v))",
        "fct-source": "src/Crypto-Classes.html#buildSigningKeyPairIO",
        "fct-type": "function",
        "title": "buildSigningKeyPairIO"
      },
      "index": {
        "description": "Build signing key using the system random generator",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildSigningKeyPairIO",
        "normalized": "BitLength-\u003eIO(Either GenError(a,b))",
        "package": "crypto-api",
        "partial": "Signing Key Pair IO",
        "signature": "BitLength-\u003eIO(Either GenError(p,v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningPair",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e BitLength -\u003e Either GenError ((p, v), g)",
        "fct-source": "src/Crypto-Classes.html#buildSigningPair",
        "fct-type": "method",
        "title": "buildSigningPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildSigningPair",
        "normalized": "a-\u003eBitLength-\u003eEither GenError((b,c),a)",
        "package": "crypto-api",
        "partial": "Signing Pair",
        "signature": "g-\u003eBitLength-\u003eEither GenError((p,v),g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKey",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e Maybe k",
        "fct-source": "src/Crypto-Classes.html#buildStreamKey",
        "fct-type": "method",
        "title": "buildStreamKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildStreamKey",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "crypto-api",
        "partial": "Stream Key",
        "signature": "ByteString-\u003eMaybe k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKeyGen",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a stream key using the provided random generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e Either GenError (k, g)",
        "fct-source": "src/Crypto-Classes.html#buildStreamKeyGen",
        "fct-type": "function",
        "title": "buildStreamKeyGen"
      },
      "index": {
        "description": "Build stream key using the provided random generator",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildStreamKeyGen",
        "normalized": "a-\u003eEither GenError(b,a)",
        "package": "crypto-api",
        "partial": "Stream Key Gen",
        "signature": "g-\u003eEither GenError(k,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKeyIO",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a stream key using the system random generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "IO k",
        "fct-source": "src/Crypto-Classes.html#buildStreamKeyIO",
        "fct-type": "function",
        "title": "buildStreamKeyIO"
      },
      "index": {
        "description": "Build stream key using the system random generator",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "buildStreamKeyIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Stream Key IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cbc",
      "description": {
        "fct-descr": "\u003cp\u003eCipherblock Chaining (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cbc",
        "fct-type": "method",
        "title": "cbc"
      },
      "index": {
        "description": "Cipherblock Chaining encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "cbc",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cbcLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining encryption for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cbcLazy",
        "fct-type": "method",
        "title": "cbcLazy"
      },
      "index": {
        "description": "Cipher block chaining encryption for lazy bytestrings",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "cbcLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cfb",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feedback (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cfb",
        "fct-type": "method",
        "title": "cfb"
      },
      "index": {
        "description": "Ciphertext feedback encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "cfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feed-back encryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#cfbLazy",
        "fct-type": "method",
        "title": "cfbLazy"
      },
      "index": {
        "description": "Ciphertext feed-back encryption mode for lazy bytestrings with blockSize",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "cfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:chunkFor",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e [ByteString]",
        "fct-source": "src/Crypto-Classes.html#chunkFor",
        "fct-type": "function",
        "title": "chunkFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "chunkFor",
        "normalized": "a-\u003eByteString-\u003e[ByteString]",
        "package": "crypto-api",
        "partial": "For",
        "signature": "k-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:chunkFor-39-",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e [ByteString]",
        "fct-source": "src/Crypto-Classes.html#chunkFor%27",
        "fct-type": "function",
        "title": "chunkFor'"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "chunkFor'",
        "normalized": "a-\u003eByteString-\u003e[ByteString]",
        "package": "crypto-api",
        "partial": "For'",
        "signature": "k-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ctr",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ctr",
        "fct-type": "method",
        "title": "ctr"
      },
      "index": {
        "description": "Counter encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ctr",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ctrLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ctrLazy",
        "fct-type": "method",
        "title": "ctrLazy"
      },
      "index": {
        "description": "Counter encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ctrLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptAsym",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "decryptAsym",
        "fct-source": "src/Crypto-Classes.html#decryptAsym",
        "fct-type": "method",
        "title": "decryptAsym"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "decryptAsym",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Asym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptBlock",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "decryptBlock",
        "fct-source": "src/Crypto-Classes.html#decryptBlock",
        "fct-type": "method",
        "title": "decryptBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "decryptBlock",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptStream",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e iv -\u003e ByteString -\u003e (ByteString, iv)",
        "fct-source": "src/Crypto-Classes.html#decryptStream",
        "fct-type": "method",
        "title": "decryptStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "decryptStream",
        "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
        "package": "crypto-api",
        "partial": "Stream",
        "signature": "k-\u003eiv-\u003eByteString-\u003e(ByteString,iv)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ecb",
      "description": {
        "fct-descr": "\u003cp\u003eElectronic Cookbook (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#ecb",
        "fct-type": "method",
        "title": "ecb"
      },
      "index": {
        "description": "Electronic Cookbook encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ecb",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ecbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCook book mode - not really a mode at all.  If you don't know what you're doing, don't use this mode^H^H^H^H library.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#ecbLazy",
        "fct-type": "method",
        "title": "ecbLazy"
      },
      "index": {
        "description": "Cook book mode not really mode at all If you don know what you re doing don use this mode library",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ecbLazy",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value using binary serialization to a strict ByteString.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "a -\u003e ByteString",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode value using binary serialization to strict ByteString",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptAsym",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "encryptAsym",
        "fct-source": "src/Crypto-Classes.html#encryptAsym",
        "fct-type": "method",
        "title": "encryptAsym"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "encryptAsym",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Asym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptBlock",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "encryptBlock",
        "fct-source": "src/Crypto-Classes.html#encryptBlock",
        "fct-type": "method",
        "title": "encryptBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "encryptBlock",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptStream",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e iv -\u003e ByteString -\u003e (ByteString, iv)",
        "fct-source": "src/Crypto-Classes.html#encryptStream",
        "fct-type": "method",
        "title": "encryptStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "encryptStream",
        "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
        "package": "crypto-api",
        "partial": "Stream",
        "signature": "k-\u003eiv-\u003eByteString-\u003e(ByteString,iv)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:finalize",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "finalize",
        "fct-source": "src/Crypto-Classes.html#finalize",
        "fct-type": "method",
        "title": "finalize"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "finalize",
        "normalized": "",
        "package": "crypto-api",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:getIV",
      "description": {
        "fct-descr": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e using the provided CryptoRandomGenerator.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e Either GenError (IV k, g)",
        "fct-source": "src/Crypto-Classes.html#getIV",
        "fct-type": "function",
        "title": "getIV"
      },
      "index": {
        "description": "Obtain an IV using the provided CryptoRandomGenerator",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "getIV",
        "normalized": "a-\u003eEither GenError(IV b,a)",
        "package": "crypto-api",
        "partial": "IV",
        "signature": "g-\u003eEither GenError(IV k,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:getIVIO",
      "description": {
        "fct-descr": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "IO (IV k)",
        "fct-source": "src/Crypto-Classes.html#getIVIO",
        "fct-type": "function",
        "title": "getIVIO"
      },
      "index": {
        "description": "Obtain an IV using the system entropy see Random",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "getIVIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IVIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eHash a lazy ByteString, creating a digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hash",
        "fct-type": "method",
        "title": "hash"
      },
      "index": {
        "description": "Hash lazy ByteString creating digest",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "hash",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hash-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHash a strict ByteString, creating a digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hash%27",
        "fct-type": "method",
        "title": "hash'"
      },
      "index": {
        "description": "Hash strict ByteString creating digest",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "hash'",
        "normalized": "ByteString-\u003ea",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hashFunc",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a lazy hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hashFunc",
        "fct-type": "function",
        "title": "hashFunc"
      },
      "index": {
        "description": "Obtain lazy hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "hashFunc",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Func",
        "signature": "d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hashFunc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a strict hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-Classes.html#hashFunc%27",
        "fct-type": "function",
        "title": "hashFunc'"
      },
      "index": {
        "description": "Obtain strict hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "hashFunc'",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "crypto-api",
        "partial": "Func'",
        "signature": "d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:incIV",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e by one.  This is way faster than decoding,\n increasing, encoding\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "IV k -\u003e IV k",
        "fct-source": "src/Crypto-Classes.html#incIV",
        "fct-type": "function",
        "title": "incIV"
      },
      "index": {
        "description": "Increase an IV by one This is way faster than decoding increasing encoding",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "incIV",
        "normalized": "IV a-\u003eIV a",
        "package": "crypto-api",
        "partial": "IV",
        "signature": "IV k-\u003eIV k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:initialCtx",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "initialCtx",
        "fct-source": "src/Crypto-Classes.html#initialCtx",
        "fct-type": "method",
        "title": "initialCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "initialCtx",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:keyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "keyLength",
        "fct-source": "src/Crypto-Classes.html#keyLength",
        "fct-type": "method",
        "title": "keyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "keyLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:keyLengthBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes in a block cipher key (assuming it is an even\n multiple of 8 bits)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged k ByteLength",
        "fct-source": "src/Crypto-Classes.html#keyLengthBytes",
        "fct-type": "function",
        "title": "keyLengthBytes"
      },
      "index": {
        "description": "The number of bytes in block cipher key assuming it is an even multiple of bits",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "keyLengthBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ofb",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback (encryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ofb",
        "fct-type": "method",
        "title": "ofb"
      },
      "index": {
        "description": "Output feedback encryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ofb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ofbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#ofbLazy",
        "fct-type": "method",
        "title": "ofbLazy"
      },
      "index": {
        "description": "Output feedback mode for lazy bytestrings",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "ofbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:outputLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "outputLength",
        "fct-source": "src/Crypto-Classes.html#outputLength",
        "fct-type": "method",
        "title": "outputLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "outputLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:privateKeyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "v -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#privateKeyLength",
        "fct-type": "method",
        "title": "privateKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "privateKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "v-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:publicKeyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#publicKeyLength",
        "fct-type": "method",
        "title": "publicKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "publicKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "p-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:sign",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e v -\u003e ByteString -\u003e Either GenError (ByteString, g)",
        "fct-source": "src/Crypto-Classes.html#sign",
        "fct-type": "method",
        "title": "sign"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "sign",
        "normalized": "a-\u003eb-\u003eByteString-\u003eEither GenError(ByteString,a)",
        "package": "crypto-api",
        "partial": "",
        "signature": "g-\u003ev-\u003eByteString-\u003eEither GenError(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:signingKeyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "v -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#signingKeyLength",
        "fct-type": "method",
        "title": "signingKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "signingKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "v-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:siv",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) mode for strict bytestrings.  First argument is\n the optional list of bytestrings to be authenticated but not\n encrypted.  As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#siv",
        "fct-type": "method",
        "title": "siv"
      },
      "index": {
        "description": "SIV Synthetic IV mode for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "siv",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:sivLazy",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) mode for lazy bytestrings. The third argument is\n the optional list of bytestrings to be authenticated but not\n encrypted As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#sivLazy",
        "fct-type": "method",
        "title": "sivLazy"
      },
      "index": {
        "description": "SIV Synthetic IV mode for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "sivLazy",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Lazy",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:streamKeyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged k BitLength",
        "fct-source": "src/Crypto-Classes.html#streamKeyLength",
        "fct-type": "method",
        "title": "streamKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "streamKeyLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCbc",
      "description": {
        "fct-descr": "\u003cp\u003eCipherblock Chaining (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCbc",
        "fct-type": "method",
        "title": "unCbc"
      },
      "index": {
        "description": "Cipherblock Chaining decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCbc",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cbc",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCbcLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining decryption for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCbcLazy",
        "fct-type": "method",
        "title": "unCbcLazy"
      },
      "index": {
        "description": "Cipher block chaining decryption for lazy bytestrings",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCbcLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cbc Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCfb",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feedback (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCfb",
        "fct-type": "method",
        "title": "unCfb"
      },
      "index": {
        "description": "Ciphertext feedback decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cfb",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCiphertext feed-back decryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCfbLazy",
        "fct-type": "method",
        "title": "unCfbLazy"
      },
      "index": {
        "description": "Ciphertext feed-back decryption mode for lazy bytestrings with blockSize",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Cfb Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCtr",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCtr",
        "fct-type": "method",
        "title": "unCtr"
      },
      "index": {
        "description": "Counter decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCtr",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ctr",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCtrLazy",
      "description": {
        "fct-descr": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unCtrLazy",
        "fct-type": "method",
        "title": "unCtrLazy"
      },
      "index": {
        "description": "Counter decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unCtrLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ctr Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unEcb",
      "description": {
        "fct-descr": "\u003cp\u003eElectronic Cookbook (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#unEcb",
        "fct-type": "method",
        "title": "unEcb"
      },
      "index": {
        "description": "Electronic Cookbook decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unEcb",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Ecb",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unEcbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eECB decrypt, complementary to \u003ccode\u003e\u003ca\u003eecb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Classes.html#unEcbLazy",
        "fct-type": "method",
        "title": "unEcbLazy"
      },
      "index": {
        "description": "ECB decrypt complementary to ecb",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unEcbLazy",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Ecb Lazy",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unOfb",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback (decryption)\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unOfb",
        "fct-type": "method",
        "title": "unOfb"
      },
      "index": {
        "description": "Output feedback decryption",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unOfb",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ofb",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unOfbLazy",
      "description": {
        "fct-descr": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
        "fct-source": "src/Crypto-Classes.html#unOfbLazy",
        "fct-type": "method",
        "title": "unOfbLazy"
      },
      "index": {
        "description": "Output feedback mode for lazy bytestrings",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unOfbLazy",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
        "package": "crypto-api",
        "partial": "Ofb Lazy",
        "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unSiv",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) for strict bytestrings First argument is the\n optional list of bytestrings to be authenticated but not encrypted\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#unSiv",
        "fct-type": "method",
        "title": "unSiv"
      },
      "index": {
        "description": "SIV Synthetic IV for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unSiv",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Siv",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unSivLazy",
      "description": {
        "fct-descr": "\u003cp\u003eSIV (Synthetic IV) for lazy bytestrings.  The third argument is the\n optional list of bytestrings to be authenticated but not encrypted.\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Classes.html#unSivLazy",
        "fct-type": "method",
        "title": "unSivLazy"
      },
      "index": {
        "description": "SIV Synthetic IV for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "unSivLazy",
        "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "Siv Lazy",
        "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:updateCtx",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "updateCtx",
        "fct-source": "src/Crypto-Classes.html#updateCtx",
        "fct-type": "method",
        "title": "updateCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "updateCtx",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:verify",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Crypto-Classes.html#verify",
        "fct-type": "method",
        "title": "verify"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "verify",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eBool",
        "package": "crypto-api",
        "partial": "",
        "signature": "p-\u003eByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:verifyingKeyLength",
      "description": {
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "p -\u003e BitLength",
        "fct-source": "src/Crypto-Classes.html#verifyingKeyLength",
        "fct-type": "method",
        "title": "verifyingKeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "verifyingKeyLength",
        "normalized": "a-\u003eBitLength",
        "package": "crypto-api",
        "partial": "Key Length",
        "signature": "p-\u003eBitLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:zeroIV",
      "description": {
        "fct-descr": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e made only of zeroes\n\u003c/p\u003e",
        "fct-module": "Crypto.Classes",
        "fct-package": "crypto-api",
        "fct-signature": "IV k",
        "fct-source": "src/Crypto-Classes.html#zeroIV",
        "fct-type": "function",
        "title": "zeroIV"
      },
      "index": {
        "description": "Obtain an IV made only of zeroes",
        "hierarchy": "Crypto Classes",
        "module": "Crypto.Classes",
        "name": "zeroIV",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#",
      "description": {
        "fct-module": "Crypto.HMAC",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-HMAC.html",
        "fct-type": "module",
        "title": "HMAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto HMAC",
        "module": "Crypto.HMAC",
        "name": "HMAC",
        "normalized": "",
        "package": "crypto-api",
        "partial": "HMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#t:MacKey",
      "description": {
        "fct-descr": "\u003cp\u003eA key carrying phantom types \u003ccode\u003ec\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e, forcing the key data to only be used\n by particular hash algorithms.\n\u003c/p\u003e",
        "fct-module": "Crypto.HMAC",
        "fct-package": "crypto-api",
        "fct-signature": "newtype",
        "fct-source": "src/Crypto-HMAC.html#MacKey",
        "fct-type": "newtype",
        "title": "MacKey"
      },
      "index": {
        "description": "key carrying phantom types and forcing the key data to only be used by particular hash algorithms",
        "hierarchy": "Crypto HMAC",
        "module": "Crypto.HMAC",
        "name": "MacKey",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Mac Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:MacKey",
      "description": {
        "fct-module": "Crypto.HMAC",
        "fct-package": "crypto-api",
        "fct-signature": "MacKey ByteString",
        "fct-source": "src/Crypto-HMAC.html#MacKey",
        "fct-type": "function",
        "title": "MacKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto HMAC",
        "module": "Crypto.HMAC",
        "name": "MacKey",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Mac Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:hmac",
      "description": {
        "fct-descr": "\u003cp\u003eMessage authentication code calculation for lazy bytestrings.\n \u003ccode\u003ehmac k msg\u003c/code\u003e will compute an authentication code for \u003ccode\u003emsg\u003c/code\u003e using key \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.HMAC",
        "fct-package": "crypto-api",
        "fct-signature": "MacKey c d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-HMAC.html#hmac",
        "fct-type": "function",
        "title": "hmac"
      },
      "index": {
        "description": "Message authentication code calculation for lazy bytestrings hmac msg will compute an authentication code for msg using key",
        "hierarchy": "Crypto HMAC",
        "module": "Crypto.HMAC",
        "name": "hmac",
        "normalized": "MacKey a b-\u003eByteString-\u003eb",
        "package": "crypto-api",
        "partial": "",
        "signature": "MacKey c d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:hmac-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehmac k msg\u003c/code\u003e will compute an authentication code for \u003ccode\u003emsg\u003c/code\u003e using key \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.HMAC",
        "fct-package": "crypto-api",
        "fct-signature": "MacKey c d -\u003e ByteString -\u003e d",
        "fct-source": "src/Crypto-HMAC.html#hmac%27",
        "fct-type": "function",
        "title": "hmac'"
      },
      "index": {
        "description": "hmac msg will compute an authentication code for msg using key",
        "hierarchy": "Crypto HMAC",
        "module": "Crypto.HMAC",
        "name": "hmac'",
        "normalized": "MacKey a b-\u003eByteString-\u003eb",
        "package": "crypto-api",
        "partial": "",
        "signature": "MacKey c d-\u003eByteString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthors: Thomas DuBuisson\n\u003c/p\u003e\u003cp\u003eGeneric mode implementations useable by any correct BlockCipher\n instance Be aware there are no tests for CFB mode yet.  See\n \u003ccode\u003e\u003ca\u003eCrypto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Modes.html",
        "fct-type": "module",
        "title": "Modes"
      },
      "index": {
        "description": "Authors Thomas DuBuisson Generic mode implementations useable by any correct BlockCipher instance Be aware there are no tests for CFB mode yet See Crypto",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "Modes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMac",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the cmac for lazy bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cMac",
        "fct-type": "function",
        "title": "cMac"
      },
      "index": {
        "description": "Obtain the cmac for lazy bytestrings",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cMac",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMac-39-",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the cmac for strict bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cMac%27",
        "fct-type": "function",
        "title": "cMac'"
      },
      "index": {
        "description": "Obtain the cmac for strict bytestrings",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cMac'",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac'",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMacStar",
      "description": {
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e [ByteString] -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cMacStar",
        "fct-type": "function",
        "title": "cMacStar"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cMacStar",
        "normalized": "a-\u003e[ByteString]-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac Star",
        "signature": "k-\u003e[ByteString]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMacStar-39-",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the CMAC* on strict bytestrings\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e [ByteString] -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cMacStar%27",
        "fct-type": "function",
        "title": "cMacStar'"
      },
      "index": {
        "description": "Obtain the CMAC on strict bytestrings",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cMacStar'",
        "normalized": "a-\u003e[ByteString]-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac Star'",
        "signature": "k-\u003e[ByteString]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cbcMac",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining message authentication\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cbcMac",
        "fct-type": "function",
        "title": "cbcMac"
      },
      "index": {
        "description": "Cipher block chaining message authentication",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cbcMac",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cbcMac-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCipher block chaining message authentication\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Modes.html#cbcMac%27",
        "fct-type": "function",
        "title": "cbcMac'"
      },
      "index": {
        "description": "Cipher block chaining message authentication",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "cbcMac'",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Mac'",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:dblIV",
      "description": {
        "fct-descr": "\u003cp\u003ePerform doubling as defined by the CMAC and SIV papers\n\u003c/p\u003e",
        "fct-module": "Crypto.Modes",
        "fct-package": "crypto-api",
        "fct-signature": "IV k -\u003e IV k",
        "fct-source": "src/Crypto-Modes.html#dblIV",
        "fct-type": "function",
        "title": "dblIV"
      },
      "index": {
        "description": "Perform doubling as defined by the CMAC and SIV papers",
        "hierarchy": "Crypto Modes",
        "module": "Crypto.Modes",
        "name": "dblIV",
        "normalized": "IV a-\u003eIV a",
        "package": "crypto-api",
        "partial": "IV",
        "signature": "IV k-\u003eIV k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePKCS5 (RFC 1423) and IPSec ESP (RFC 4303)\npadding methods are implemented both as trivial functions operating on\nbytestrings and as \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e routines usable from the \u003ca\u003eData.Serialize\u003c/a\u003e\nmodule.  These methods do not work for algorithms or pad sizes in\nexcess of 255 bytes (2040 bits, so extremely large as far as cipher\nneeds are concerned).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Padding.html",
        "fct-type": "module",
        "title": "Padding"
      },
      "index": {
        "description": "PKCS5 RFC and IPSec ESP RFC padding methods are implemented both as trivial functions operating on bytestrings and as Put routines usable from the Data.Serialize module These methods do not work for algorithms or pad sizes in excess of bytes bits so extremely large as far as cipher needs are concerned",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "Padding",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Padding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003ePKCS5 (aka RFC1423) padding method using the BlockCipher instance\n to determine the pad size.\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Padding.html#padBlockSize",
        "fct-type": "function",
        "title": "padBlockSize"
      },
      "index": {
        "description": "PKCS5 aka RFC1423 padding method using the BlockCipher instance to determine the pad size",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "padBlockSize",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "Block Size",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padESP",
      "description": {
        "fct-descr": "\u003cp\u003ePad a bytestring to the IPSEC esp specification\n\u003c/p\u003e\u003cpre\u003e padESP m payload\n\u003c/pre\u003e\u003cp\u003eis equivilent to:\n\u003c/p\u003e\u003cpre\u003e\n               (msg)       (padding)       (length field)\n     B.concat [payload, B.pack [1,2,3,4..], B.pack [padLen]]\n\u003c/pre\u003e\u003cp\u003eWhere:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the msg is any payload, including TFC.\n\u003c/li\u003e\u003cli\u003e the padding is \u003c= 255\n\u003c/li\u003e\u003cli\u003e the length field is one byte.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNotice the result bytesting length remainder \u003ccode\u003er\u003c/code\u003e equals zero.  The lack\n  of a \"next header\" field means this function is not directly useable for\n  an IPSec implementation (copy/paste the 4 line function and add in a\n  \"next header\" field if you are making IPSec ESP).\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Padding.html#padESP",
        "fct-type": "function",
        "title": "padESP"
      },
      "index": {
        "description": "Pad bytestring to the IPSEC esp specification padESP payload is equivilent to msg padding length field B.concat payload B.pack B.pack padLen Where the msg is any payload including TFC the padding is the length field is one byte Notice the result bytesting length remainder equals zero The lack of next header field means this function is not directly useable for an IPSec implementation copy paste the line function and add in next header field if you are making IPSec ESP",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "padESP",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "ESP",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padESPBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eLike padESP but use the BlockCipher instance to determine padding size\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Padding.html#padESPBlockSize",
        "fct-type": "function",
        "title": "padESPBlockSize"
      },
      "index": {
        "description": "Like padESP but use the BlockCipher instance to determine padding size",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "padESPBlockSize",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "ESPBlock Size",
        "signature": "k-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padPKCS5",
      "description": {
        "fct-descr": "\u003cp\u003ePKCS5 (aka RFC1423) padding method.\n This method will not work properly for pad modulos \u003e 256\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Padding.html#padPKCS5",
        "fct-type": "function",
        "title": "padPKCS5"
      },
      "index": {
        "description": "PKCS5 aka RFC1423 padding method This method will not work properly for pad modulos",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "padPKCS5",
        "normalized": "ByteLength-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "PKCS",
        "signature": "ByteLength-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPadESP",
      "description": {
        "fct-descr": "\u003cp\u003ePad a bytestring to the IPSEC ESP specification using \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n This can reduce copying if you are already using \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "Int -\u003e ByteString -\u003e Put",
        "fct-source": "src/Crypto-Padding.html#putPadESP",
        "fct-type": "function",
        "title": "putPadESP"
      },
      "index": {
        "description": "Pad bytestring to the IPSEC ESP specification using Put This can reduce copying if you are already using Put",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "putPadESP",
        "normalized": "Int-\u003eByteString-\u003ePut",
        "package": "crypto-api",
        "partial": "Pad ESP",
        "signature": "Int-\u003eByteString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPadESPBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eLike putPadESP but using the BlockCipher instance to determine padding size\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "k -\u003e ByteString -\u003e Put",
        "fct-source": "src/Crypto-Padding.html#putPadESPBlockSize",
        "fct-type": "function",
        "title": "putPadESPBlockSize"
      },
      "index": {
        "description": "Like putPadESP but using the BlockCipher instance to determine padding size",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "putPadESPBlockSize",
        "normalized": "a-\u003eByteString-\u003ePut",
        "package": "crypto-api",
        "partial": "Pad ESPBlock Size",
        "signature": "k-\u003eByteString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPaddedPKCS5",
      "description": {
        "fct-descr": "\u003cp\u003eEx:\n\u003c/p\u003e\u003cpre\u003e\n     putPaddedPKCS5 m bs\n\u003c/pre\u003e\u003cp\u003eWill pad out \u003ccode\u003ebs\u003c/code\u003e to a byte multiple\n of \u003ccode\u003em\u003c/code\u003e and put both the bytestring and it's padding via \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e\n (this saves on copying if you are already using Cereal).\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e ByteString -\u003e Put",
        "fct-source": "src/Crypto-Padding.html#putPaddedPKCS5",
        "fct-type": "function",
        "title": "putPaddedPKCS5"
      },
      "index": {
        "description": "Ex putPaddedPKCS5 bs Will pad out bs to byte multiple of and put both the bytestring and it padding via Put this saves on copying if you are already using Cereal",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "putPaddedPKCS5",
        "normalized": "ByteLength-\u003eByteString-\u003ePut",
        "package": "crypto-api",
        "partial": "Padded PKCS",
        "signature": "ByteLength-\u003eByteString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadESP",
      "description": {
        "fct-descr": "\u003cp\u003eunpad and return the padded message (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned if the padding is invalid)\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Padding.html#unpadESP",
        "fct-type": "function",
        "title": "unpadESP"
      },
      "index": {
        "description": "unpad and return the padded message Nothing is returned if the padding is invalid",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "unpadESP",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "ESP",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadPKCS5",
      "description": {
        "fct-descr": "\u003cp\u003eunpad a strict bytestring without checking the pad bytes and\n length any more than necessary.\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Padding.html#unpadPKCS5",
        "fct-type": "function",
        "title": "unpadPKCS5"
      },
      "index": {
        "description": "unpad strict bytestring without checking the pad bytes and length any more than necessary",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "unpadPKCS5",
        "normalized": "ByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "PKCS",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadPKCS5safe",
      "description": {
        "fct-descr": "\u003cp\u003eunpad a strict bytestring padded in the typical PKCS5 manner.\n This routine verifies all pad bytes and pad length match correctly.\n\u003c/p\u003e",
        "fct-module": "Crypto.Padding",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Crypto-Padding.html#unpadPKCS5safe",
        "fct-type": "function",
        "title": "unpadPKCS5safe"
      },
      "index": {
        "description": "unpad strict bytestring padded in the typical PKCS5 manner This routine verifies all pad bytes and pad length match correctly",
        "hierarchy": "Crypto Padding",
        "module": "Crypto.Padding",
        "name": "unpadPKCS5safe",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "crypto-api",
        "partial": "PKCS",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for instantiating cryptographicly strong\ndeterminitic random bit generators (DRBGs, aka PRNGs) For the simple\nuse case of using the system random number generator\n(\u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e) to seed the DRBG:\n\u003c/p\u003e\u003cpre\u003e   g \u003c- newGenIO\n\u003c/pre\u003e\u003cp\u003eUsers needing to provide their own entropy can call \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e directly\n\u003c/p\u003e\u003cpre\u003e    entropy \u003c- getEntropy nrBytes\n    let generator = newGen entropy\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "This module is for instantiating cryptographicly strong determinitic random bit generators DRBGs aka PRNGs For the simple use case of using the system random number generator Random to seed the DRBG newGenIO Users needing to provide their own entropy can call newGen directly entropy getEntropy nrBytes let generator newGen entropy",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "Random",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:CryptoRandomGen",
      "description": {
        "fct-descr": "\u003cp\u003eA class of random bit generators that allows for the possibility\n of failure, reseeding, providing entropy at the same time as\n requesting bytes\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenBytes\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedInfo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedPeriod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Random.html#CryptoRandomGen",
        "fct-type": "class",
        "title": "CryptoRandomGen"
      },
      "index": {
        "description": "class of random bit generators that allows for the possibility of failure reseeding providing entropy at the same time as requesting bytes Minimum complete definition newGen genSeedLength genBytes reseed reseedInfo reseedPeriod",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "CryptoRandomGen",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Crypto Random Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:GenError",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator failures should always return the appropriate GenError.\n Note \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e in an instance of exception but wether or not an\n exception is thrown depends on if the selected generator (read:\n if you don't want execptions from code that uses \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e then\n pass in a generator that never has an error for the used functions)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "data",
        "title": "GenError"
      },
      "index": {
        "description": "Generator failures should always return the appropriate GenError Note GenError in an instance of exception but wether or not an exception is thrown depends on if the selected generator read if you don want execptions from code that uses throw then pass in generator that never has an error for the used functions",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "GenError",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:ReseedInfo",
      "description": {
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "data",
        "title": "ReseedInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "ReseedInfo",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Reseed Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:SystemRandom",
      "description": {
        "fct-descr": "\u003cp\u003eNot that it is technically correct as an instance of\n \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e, but simply because it's a reasonable engineering\n choice here is a CryptoRandomGen which streams the system\n randoms. Take note:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It uses the default definition of \u003ccode\u003egenByteWithEntropy\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e will always fail!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e will always fail!\n\u003c/li\u003e\u003cli\u003e the handle to the system random is never closed\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#SystemRandom",
        "fct-type": "data",
        "title": "SystemRandom"
      },
      "index": {
        "description": "Not that it is technically correct as an instance of CryptoRandomGen but simply because it reasonable engineering choice here is CryptoRandomGen which streams the system randoms Take note It uses the default definition of genByteWithEntropy newGen will always fail reseed will always fail the handle to the system random is never closed",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "SystemRandom",
        "normalized": "",
        "package": "crypto-api",
        "partial": "System Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:GenErrorOther",
      "description": {
        "fct-descr": "\u003cp\u003eMisc\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "GenErrorOther String",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "GenErrorOther"
      },
      "index": {
        "description": "Misc",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "GenErrorOther",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen Error Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:InXBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator needs reseeded in X bytes\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "InXBytes !Word64",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "InXBytes"
      },
      "index": {
        "description": "Generator needs reseeded in bytes",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "InXBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "In XBytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:InXCalls",
      "description": {
        "fct-descr": "\u003cp\u003eGenerator needs reseeded in X calls\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "InXCalls !Word64",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "InXCalls"
      },
      "index": {
        "description": "Generator needs reseeded in calls",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "InXCalls",
        "normalized": "",
        "package": "crypto-api",
        "partial": "In XCalls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NeedReseed",
      "description": {
        "fct-descr": "\u003cp\u003eSome generators cease operation\n after too high a count without a\n reseed (ex: NIST SP 800-90)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "NeedReseed",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NeedReseed"
      },
      "index": {
        "description": "Some generators cease operation after too high count without reseed ex NIST SP",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "NeedReseed",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Need Reseed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NeedsInfiniteSeed",
      "description": {
        "fct-descr": "\u003cp\u003eThis generator can not be\n instantiated or reseeded with a\n finite seed (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "NeedsInfiniteSeed",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NeedsInfiniteSeed"
      },
      "index": {
        "description": "This generator can not be instantiated or reseeded with finite seed ex SystemRandom",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "NeedsInfiniteSeed",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Needs Infinite Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:Never",
      "description": {
        "fct-descr": "\u003cp\u003eThis generator never reseeds (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "Never",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "Never"
      },
      "index": {
        "description": "This generator never reseeds ex SystemRandom",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "Never",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Never",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NotEnoughEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eFor instantiating new generators\n (or reseeding)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "NotEnoughEntropy",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "NotEnoughEntropy"
      },
      "index": {
        "description": "For instantiating new generators or reseeding",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "NotEnoughEntropy",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Not Enough Entropy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NotSoon",
      "description": {
        "fct-descr": "\u003cp\u003eThe bound is over 2^64 bytes or calls\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "NotSoon",
        "fct-source": "src/Crypto-Random.html#ReseedInfo",
        "fct-type": "function",
        "title": "NotSoon"
      },
      "index": {
        "description": "The bound is over bytes or calls",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "NotSoon",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Not Soon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:RangeInvalid",
      "description": {
        "fct-descr": "\u003cp\u003eWhen using \u003ccode\u003egenInteger g (l,h)\u003c/code\u003e\n and \u003ccode\u003elogBase 2 (h - l) \u003e (maxBound\n :: Int)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "RangeInvalid",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "RangeInvalid"
      },
      "index": {
        "description": "When using genInteger and logBase maxBound Int",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "RangeInvalid",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Range Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:RequestedTooManyBytes",
      "description": {
        "fct-descr": "\u003cp\u003eRequested more bytes than a\n single pass can generate (The\n maximum request is generator\n dependent)\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "RequestedTooManyBytes",
        "fct-source": "src/Crypto-Random.html#GenError",
        "fct-type": "function",
        "title": "RequestedTooManyBytes"
      },
      "index": {
        "description": "Requested more bytes than single pass can generate The maximum request is generator dependent",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "RequestedTooManyBytes",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Requested Too Many Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genBytes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egenBytes len g\u003c/code\u003e generates a random ByteString of length\n \u003ccode\u003elen\u003c/code\u003e and new generator.  The \u003ca\u003eMonadCryptoRandom\u003c/a\u003e package\n has routines useful for converting the ByteString to\n commonly needed values (but \u003ca\u003ecereal\u003c/a\u003e or other\n deserialization libraries would also work).\n\u003c/p\u003e\u003cp\u003eThis routine can fail if the generator has gone too long\n without a reseed (usually this is in the ball-park of 2^48\n requests).  Suggested error in this cases is \u003ccode\u003e\u003ca\u003eNeedReseed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e g -\u003e Either GenError (ByteString, g)",
        "fct-source": "src/Crypto-Random.html#genBytes",
        "fct-type": "method",
        "title": "genBytes"
      },
      "index": {
        "description": "genBytes len generates random ByteString of length len and new generator The MonadCryptoRandom package has routines useful for converting the ByteString to commonly needed values but cereal or other deserialization libraries would also work This routine can fail if the generator has gone too long without reseed usually this is in the ball-park of requests Suggested error in this cases is NeedReseed",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "genBytes",
        "normalized": "ByteLength-\u003ea-\u003eEither GenError(ByteString,a)",
        "package": "crypto-api",
        "partial": "Bytes",
        "signature": "ByteLength-\u003eg-\u003eEither GenError(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genBytesWithEntropy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egenBytesWithEntropy g i entropy\u003c/code\u003e generates \u003ccode\u003ei\u003c/code\u003e random\n bytes and use the additional input \u003ccode\u003eentropy\u003c/code\u003e in the\n generation of the requested data to increase the confidence\n our generated data is a secure random stream.\n\u003c/p\u003e\u003cp\u003eSome generators use \u003ccode\u003eentropy\u003c/code\u003e to perturb the state of the\n generator, meaning:\n\u003c/p\u003e\u003cpre\u003e\n     (_,g2') \u003c- genBytesWithEntropy len g1 ent\n     (_,g2 ) \u003c- genBytes len g1\n     g2 /= g2'\n\u003c/pre\u003e\u003cp\u003eBut this is not required.\n\u003c/p\u003e\u003cp\u003eDefault:\n\u003c/p\u003e\u003cpre\u003e\n     genBytesWithEntropy g bytes entropy = xor entropy (genBytes g bytes)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "ByteLength -\u003e ByteString -\u003e g -\u003e Either GenError (ByteString, g)",
        "fct-source": "src/Crypto-Random.html#genBytesWithEntropy",
        "fct-type": "method",
        "title": "genBytesWithEntropy"
      },
      "index": {
        "description": "genBytesWithEntropy entropy generates random bytes and use the additional input entropy in the generation of the requested data to increase the confidence our generated data is secure random stream Some generators use entropy to perturb the state of the generator meaning g2 genBytesWithEntropy len g1 ent g2 genBytes len g1 g2 g2 But this is not required Default genBytesWithEntropy bytes entropy xor entropy genBytes bytes",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "genBytesWithEntropy",
        "normalized": "ByteLength-\u003eByteString-\u003ea-\u003eEither GenError(ByteString,a)",
        "package": "crypto-api",
        "partial": "Bytes With Entropy",
        "signature": "ByteLength-\u003eByteString-\u003eg-\u003eEither GenError(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genSeedLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of input entropy necessary to instantiate or reseed\n a generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged g ByteLength",
        "fct-source": "src/Crypto-Random.html#genSeedLength",
        "fct-type": "method",
        "title": "genSeedLength"
      },
      "index": {
        "description": "Length of input entropy necessary to instantiate or reseed generator",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "genSeedLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Seed Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:newGen",
      "description": {
        "fct-descr": "\u003cp\u003eInstantiate a new random bit generator.  The provided\n bytestring should be of length \u003e= genSeedLength.  If the\n bytestring is shorter then the call may fail (suggested\n error: \u003ccode\u003e\u003ca\u003eNotEnoughEntropy\u003c/a\u003e\u003c/code\u003e).  If the bytestring is of\n sufficent length the call should always succeed.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e Either GenError g",
        "fct-source": "src/Crypto-Random.html#newGen",
        "fct-type": "method",
        "title": "newGen"
      },
      "index": {
        "description": "Instantiate new random bit generator The provided bytestring should be of length genSeedLength If the bytestring is shorter then the call may fail suggested error NotEnoughEntropy If the bytestring is of sufficent length the call should always succeed",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "newGen",
        "normalized": "ByteString-\u003eEither GenError a",
        "package": "crypto-api",
        "partial": "Gen",
        "signature": "ByteString-\u003eEither GenError g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:newGenIO",
      "description": {
        "fct-descr": "\u003cp\u003eBy default this uses \u003ca\u003eSystem.Crypto.Random\u003c/a\u003e to obtain\n entropy for \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "IO g",
        "fct-source": "src/Crypto-Random.html#newGenIO",
        "fct-type": "method",
        "title": "newGenIO"
      },
      "index": {
        "description": "By default this uses System.Crypto.Random to obtain entropy for newGen",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "newGenIO",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Gen IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseed",
      "description": {
        "fct-descr": "\u003cp\u003eIf the generator has produced too many random bytes on its\n existing seed it will return \u003ccode\u003e\u003ca\u003eNeedReseed\u003c/a\u003e\u003c/code\u003e.  In that case,\n reseed the generator using this function and a new\n high-entropy seed of length \u003e= \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e.  Using\n bytestrings that are too short can result in an error\n (\u003ccode\u003e\u003ca\u003eNotEnoughEntropy\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e g -\u003e Either GenError g",
        "fct-source": "src/Crypto-Random.html#reseed",
        "fct-type": "method",
        "title": "reseed"
      },
      "index": {
        "description": "If the generator has produced too many random bytes on its existing seed it will return NeedReseed In that case reseed the generator using this function and new high-entropy seed of length genSeedLength Using bytestrings that are too short can result in an error NotEnoughEntropy",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "reseed",
        "normalized": "ByteString-\u003ea-\u003eEither GenError a",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003eg-\u003eEither GenError g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseedInfo",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates how soon a reseed is needed\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e ReseedInfo",
        "fct-source": "src/Crypto-Random.html#reseedInfo",
        "fct-type": "method",
        "title": "reseedInfo"
      },
      "index": {
        "description": "Indicates how soon reseed is needed",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "reseedInfo",
        "normalized": "a-\u003eReseedInfo",
        "package": "crypto-api",
        "partial": "Info",
        "signature": "g-\u003eReseedInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseedPeriod",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates the period between reseeds (constant for most generators).\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e ReseedInfo",
        "fct-source": "src/Crypto-Random.html#reseedPeriod",
        "fct-type": "method",
        "title": "reseedPeriod"
      },
      "index": {
        "description": "Indicates the period between reseeds constant for most generators",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "reseedPeriod",
        "normalized": "a-\u003eReseedInfo",
        "package": "crypto-api",
        "partial": "Period",
        "signature": "g-\u003eReseedInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:splitGen",
      "description": {
        "fct-descr": "\u003cp\u003eWhile the safety and wisdom of a splitting function depends on the\n properties of the generator being split, several arguments from\n informed people indicate such a function is safe for NIST SP 800-90\n generators.  (see libraries@haskell.org discussion around Sept, Oct\n 2010).  You can find implementations of such generators in the \u003ccode\u003eDRBG\u003c/code\u003e\n package.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "g -\u003e Either GenError (g, g)",
        "fct-source": "src/Crypto-Random.html#splitGen",
        "fct-type": "function",
        "title": "splitGen"
      },
      "index": {
        "description": "While the safety and wisdom of splitting function depends on the properties of the generator being split several arguments from informed people indicate such function is safe for NIST SP generators see libraries@haskell.org discussion around Sept Oct You can find implementations of such generators in the DRBG package",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "splitGen",
        "normalized": "a-\u003eEither GenError(a,a)",
        "package": "crypto-api",
        "partial": "Gen",
        "signature": "g-\u003eEither GenError(g,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:throwLeft",
      "description": {
        "fct-descr": "\u003cp\u003eUseful utility to extract the result of a generator operation\n and translate error results to exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-api",
        "fct-signature": "Either e a -\u003e a",
        "fct-source": "src/Crypto-Util.html#throwLeft",
        "fct-type": "function",
        "title": "throwLeft"
      },
      "index": {
        "description": "Useful utility to extract the result of generator operation and translate error results to exceptions",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "throwLeft",
        "normalized": "Either a b-\u003eb",
        "package": "crypto-api",
        "partial": "Left",
        "signature": "Either e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType aliases used throughout the crypto-api modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Type aliases used throughout the crypto-api modules",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "Types",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:BitLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe length of a field (usually a ByteString) in bits\n\u003c/p\u003e",
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "type",
        "fct-source": "src/Crypto-Types.html#BitLength",
        "fct-type": "type",
        "title": "BitLength"
      },
      "index": {
        "description": "The length of field usually ByteString in bits",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "BitLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Bit Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:BlockCipherError",
      "description": {
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Types.html#BlockCipherError",
        "fct-type": "data",
        "title": "BlockCipherError"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "BlockCipherError",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Block Cipher Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:ByteLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe length fo a field in bytes.\n\u003c/p\u003e",
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "type",
        "fct-source": "src/Crypto-Types.html#ByteLength",
        "fct-type": "type",
        "title": "ByteLength"
      },
      "index": {
        "description": "The length fo field in bytes",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "ByteLength",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Byte Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:IV",
      "description": {
        "fct-descr": "\u003cp\u003eInitilization Vectors for BlockCipher implementations (IV k) are\n used for various modes and guarrenteed to be blockSize bits long.\n The common ways to obtain an IV are to generate one (\u003ccode\u003egetIV\u003c/code\u003e or\n \u003ccode\u003egetIVIO\u003c/code\u003e) or to use one provided with the ciphertext (using the\n \u003ccode\u003eSerialize\u003c/code\u003e instance of IV).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ezeroIV\u003c/code\u003e also exists and is of particular use for starting \u003ccode\u003ectr\u003c/code\u003e\n mode with a fresh key.\n\u003c/p\u003e",
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Types.html#IV",
        "fct-type": "data",
        "title": "IV"
      },
      "index": {
        "description": "Initilization Vectors for BlockCipher implementations IV are used for various modes and guarrenteed to be blockSize bits long The common ways to obtain an IV are to generate one getIV or getIVIO or to use one provided with the ciphertext using the Serialize instance of IV zeroIV also exists and is of particular use for starting ctr mode with fresh key",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "IV",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:AuthenticationFailed",
      "description": {
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "AuthenticationFailed String",
        "fct-source": "src/Crypto-Types.html#BlockCipherError",
        "fct-type": "function",
        "title": "AuthenticationFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "AuthenticationFailed",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Authentication Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:IV",
      "description": {
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "IV",
        "fct-source": "src/Crypto-Types.html#IV",
        "fct-type": "function",
        "title": "IV"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "IV",
        "normalized": "",
        "package": "crypto-api",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:InputTooLong",
      "description": {
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "InputTooLong String",
        "fct-source": "src/Crypto-Types.html#BlockCipherError",
        "fct-type": "function",
        "title": "InputTooLong"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "InputTooLong",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Input Too Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:Other",
      "description": {
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "Other String",
        "fct-source": "src/Crypto-Types.html#BlockCipherError",
        "fct-type": "function",
        "title": "Other"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "Other",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:initializationVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Crypto.Types",
        "fct-package": "crypto-api",
        "fct-signature": "!ByteString",
        "fct-source": "src/Crypto-Types.html#IV",
        "fct-type": "function",
        "title": "initializationVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Types",
        "module": "Crypto.Types",
        "name": "initializationVector",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small selection of utilities that might be of use to others working with bytestring/number combinations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "small selection of utilities that might be of use to others working with bytestring number combinations",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "Util",
        "normalized": "",
        "package": "crypto-api",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:.::.",
      "description": {
        "fct-descr": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e operator\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged a b -\u003e a -\u003e b",
        "fct-source": "src/Crypto-Util.html#.%3A%3A.",
        "fct-type": "function",
        "title": "(.::.)"
      },
      "index": {
        "description": "Infix for operator",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "(.::.) .::.",
        "normalized": "Tagged a b-\u003ea-\u003eb",
        "package": "crypto-api",
        "partial": "",
        "signature": "Tagged a b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:bs2i",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to convert bytestrings to integers\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e Integer",
        "fct-source": "src/Crypto-Util.html#bs2i",
        "fct-type": "function",
        "title": "bs2i"
      },
      "index": {
        "description": "Helper function to convert bytestrings to integers",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "bs2i",
        "normalized": "ByteString-\u003eInteger",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:c_constTimeEq",
      "description": {
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Ptr CChar -\u003e Ptr CChar -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Crypto-Util.html#c_constTimeEq",
        "fct-type": "function",
        "title": "c_constTimeEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "c_constTimeEq",
        "normalized": "Ptr CChar-\u003ePtr CChar-\u003eCInt-\u003eIO CInt",
        "package": "crypto-api",
        "partial": "Time Eq",
        "signature": "Ptr CChar-\u003ePtr CChar-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:collect",
      "description": {
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Int -\u003e [ByteString] -\u003e [ByteString]",
        "fct-source": "src/Crypto-Util.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "collect",
        "normalized": "Int-\u003e[ByteString]-\u003e[ByteString]",
        "package": "crypto-api",
        "partial": "",
        "signature": "Int-\u003e[ByteString]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:constTimeEq",
      "description": {
        "fct-descr": "\u003cp\u003eChecks two bytestrings for equality without breaches for\n timing attacks.\n\u003c/p\u003e\u003cp\u003eSemantically, \u003ccode\u003econstTimeEq = (==)\u003c/code\u003e.  However, \u003ccode\u003ex == y\u003c/code\u003e takes less\n time when the first byte is different than when the first byte\n is equal.  This side channel allows an attacker to mount a\n timing attack.  On the other hand, \u003ccode\u003econstTimeEq\u003c/code\u003e always takes the\n same time regardless of the bytestrings' contents, unless they are\n of difference size.\n\u003c/p\u003e\u003cp\u003eYou should always use \u003ccode\u003econstTimeEq\u003c/code\u003e when comparing secrets,\n otherwise you may leave a significant security hole\n (cf. \u003ca\u003ehttp://codahale.com/a-lesson-in-timing-attacks/\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Crypto-Util.html#constTimeEq",
        "fct-type": "function",
        "title": "constTimeEq"
      },
      "index": {
        "description": "Checks two bytestrings for equality without breaches for timing attacks Semantically constTimeEq However takes less time when the first byte is different than when the first byte is equal This side channel allows an attacker to mount timing attack On the other hand constTimeEq always takes the same time regardless of the bytestrings contents unless they are of difference size You should always use constTimeEq when comparing secrets otherwise you may leave significant security hole cf http codahale.com a-lesson-in-timing-attacks",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "constTimeEq",
        "normalized": "ByteString-\u003eByteString-\u003eBool",
        "package": "crypto-api",
        "partial": "Time Eq",
        "signature": "ByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:for",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a tagged value for a particular instantiated type.\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Tagged a b -\u003e a -\u003e b",
        "fct-source": "src/Crypto-Util.html#for",
        "fct-type": "function",
        "title": "for"
      },
      "index": {
        "description": "Obtain tagged value for particular instantiated type",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "for",
        "normalized": "Tagged a b-\u003ea-\u003eb",
        "package": "crypto-api",
        "partial": "",
        "signature": "Tagged a b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:i2bs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ei2bs bitLen i\u003c/code\u003e converts \u003ccode\u003ei\u003c/code\u003e to a \u003ccode\u003eByteString\u003c/code\u003e of \u003ccode\u003ebitLen\u003c/code\u003e bits (must be a multiple of 8).\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Int -\u003e Integer -\u003e ByteString",
        "fct-source": "src/Crypto-Util.html#i2bs",
        "fct-type": "function",
        "title": "i2bs"
      },
      "index": {
        "description": "i2bs bitLen converts to ByteString of bitLen bits must be multiple of",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "i2bs",
        "normalized": "Int-\u003eInteger-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "Int-\u003eInteger-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:i2bs_unsized",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ei2bs_unsized i\u003c/code\u003e converts \u003ccode\u003ei\u003c/code\u003e to a \u003ccode\u003eByteString\u003c/code\u003e of sufficient bytes to express the integer.\n The integer must be non-negative and a zero will be encoded in one byte.\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Integer -\u003e ByteString",
        "fct-source": "src/Crypto-Util.html#i2bs_unsized",
        "fct-type": "function",
        "title": "i2bs_unsized"
      },
      "index": {
        "description": "i2bs unsized converts to ByteString of sufficient bytes to express the integer The integer must be non-negative and zero will be encoded in one byte",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "i2bs_unsized",
        "normalized": "Integer-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "Integer-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:incBS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eincBS bs\u003c/code\u003e inefficiently computes the value \u003ccode\u003ei2bs (8 * B.length bs) (bs2i bs + 1)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Util.html#incBS",
        "fct-type": "function",
        "title": "incBS"
      },
      "index": {
        "description": "incBS bs inefficiently computes the value i2bs B.length bs bs2i bs",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "incBS",
        "normalized": "ByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "BS",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:throwLeft",
      "description": {
        "fct-descr": "\u003cp\u003eUseful utility to extract the result of a generator operation\n and translate error results to exceptions.\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "Either e a -\u003e a",
        "fct-source": "src/Crypto-Util.html#throwLeft",
        "fct-type": "function",
        "title": "throwLeft"
      },
      "index": {
        "description": "Useful utility to extract the result of generator operation and translate error results to exceptions",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "throwLeft",
        "normalized": "Either a b-\u003eb",
        "package": "crypto-api",
        "partial": "Left",
        "signature": "Either e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:zwp",
      "description": {
        "fct-descr": "\u003cp\u003ezipWith xor + Pack\n\u003c/p\u003e\u003cp\u003eThis is written intentionally to take advantage\n of the bytestring libraries \u003ccode\u003ezipWith'\u003c/code\u003e rewrite rule but at the\n extra cost of the resulting lazy bytestring being more fragmented\n than either of the two inputs.\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Util.html#zwp",
        "fct-type": "function",
        "title": "zwp"
      },
      "index": {
        "description": "zipWith xor Pack This is written intentionally to take advantage of the bytestring libraries zipWith rewrite rule but at the extra cost of the resulting lazy bytestring being more fragmented than either of the two inputs",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "zwp",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:zwp-39-",
      "description": {
        "fct-descr": "\u003cp\u003ezipWith xor + Pack\n As a result of rewrite rules, this should automatically be\n optimized (at compile time). to use the bytestring libraries\n \u003ccode\u003ezipWith'\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Crypto.Util",
        "fct-package": "crypto-api",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Util.html#zwp%27",
        "fct-type": "function",
        "title": "zwp'"
      },
      "index": {
        "description": "zipWith xor Pack As result of rewrite rules this should automatically be optimized at compile time to use the bytestring libraries zipWith function",
        "hierarchy": "Crypto Util",
        "module": "Crypto.Util",
        "name": "zwp'",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "crypto-api",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  }
]