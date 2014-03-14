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
        "word": "crypto-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module mirrors \u003ccode\u003e\u003ca\u003eClasses\u003c/a\u003e\u003c/code\u003e except that errors are thrown as\n exceptions instead of having returning types of \u003ccode\u003eEither error result\u003c/code\u003e\n or \u003ccode\u003eMaybe result\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNB This module is experimental and might go away or be re-arranged.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "Exceptions",
          "package": "crypto-api",
          "source": "src/Crypto-Classes-Exceptions.html",
          "type": "module"
        },
        "index": {
          "description": "The module mirrors Classes except that errors are thrown as exceptions instead of having returning types of Either error result or Maybe result NB This module is experimental and might go away or be re-arranged",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "Exceptions",
          "package": "crypto-api",
          "partial": "Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsymetric ciphers (common ones being RSA or EC based)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "AsymCipher",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#AsymCipher",
          "type": "class"
        },
        "index": {
          "description": "Asymetric ciphers common ones being RSA or EC based",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "AsymCipher",
          "package": "crypto-api",
          "partial": "Asym Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:AsymCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe BlockCipher class is intended as the generic interface\n targeted by maintainers of Haskell cipher implementations.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: blockSize, encryptBlock, decryptBlock,\n buildKey, and keyLength.\n\u003c/p\u003e\u003cp\u003eInstances must handle unaligned data\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "BlockCipher",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#BlockCipher",
          "type": "class"
        },
        "index": {
          "description": "The BlockCipher class is intended as the generic interface targeted by maintainers of Haskell cipher implementations Minimum complete definition blockSize encryptBlock decryptBlock buildKey and keyLength Instances must handle unaligned data",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "BlockCipher",
          "package": "crypto-api",
          "partial": "Block Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:BlockCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "CipherError",
          "package": "crypto-api",
          "source": "src/Crypto-Classes-Exceptions.html#CipherError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "CipherError",
          "package": "crypto-api",
          "partial": "Cipher Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:CipherError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of random bit generators that allows for the possibility\n of failure, reseeding, providing entropy at the same time as\n requesting bytes\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenBytes\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedInfo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedPeriod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "CryptoRandomGen",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#CryptoRandomGen",
          "type": "class"
        },
        "index": {
          "description": "class of random bit generators that allows for the possibility of failure reseeding providing entropy at the same time as requesting bytes Minimum complete definition newGen genSeedLength genBytes reseed reseedInfo reseedPeriod",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "CryptoRandomGen",
          "package": "crypto-api",
          "partial": "Crypto Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:CryptoRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator failures should always return the appropriate GenError.\n Note \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e in an instance of exception but wether or not an\n exception is thrown depends on if the selected generator (read:\n if you don't want execptions from code that uses \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e then\n pass in a generator that never has an error for the used functions)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "GenError",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#GenError",
          "type": "data"
        },
        "index": {
          "description": "Generator failures should always return the appropriate GenError Note GenError in an instance of exception but wether or not an exception is thrown depends on if the selected generator read if you don want execptions from code that uses throw then pass in generator that never has an error for the used functions",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "GenError",
          "package": "crypto-api",
          "partial": "Gen Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:GenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003eoutputLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eblockLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einitialCtx\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdateCtx\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efinalize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "Hash",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#Hash",
          "type": "class"
        },
        "index": {
          "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data Minimum complete definition outputLength blockLength initialCtx updateCtx and finalize",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "Hash",
          "package": "crypto-api",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "ReseedInfo",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ReseedInfo",
          "package": "crypto-api",
          "partial": "Reseed Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:ReseedInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for signing operations which inherently can not be as generic\n as asymetric ciphers (ex: DSA).\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "Signing",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#Signing",
          "type": "class"
        },
        "index": {
          "description": "class for signing operations which inherently can not be as generic as asymetric ciphers ex DSA",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "Signing",
          "package": "crypto-api",
          "partial": "Signing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#t:Signing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "GenError",
          "package": "crypto-api",
          "signature": "GenError GenError",
          "source": "src/Crypto-Classes-Exceptions.html#CipherError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "GenError",
          "package": "crypto-api",
          "partial": "Gen Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:GenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMisc\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "GenErrorOther",
          "package": "crypto-api",
          "signature": "GenErrorOther String",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:GenErrorOther\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:GenErrorOther\"]"
        },
        "index": {
          "description": "Misc",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "GenErrorOther",
          "package": "crypto-api",
          "partial": "Gen Error Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:GenErrorOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator needs reseeded in X bytes\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "InXBytes",
          "package": "crypto-api",
          "signature": "InXBytes !Word64",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXBytes\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:InXBytes\"]"
        },
        "index": {
          "description": "Generator needs reseeded in bytes",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "InXBytes",
          "package": "crypto-api",
          "partial": "In XBytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator needs reseeded in X calls\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "InXCalls",
          "package": "crypto-api",
          "signature": "InXCalls !Word64",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXCalls\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:InXCalls\"]"
        },
        "index": {
          "description": "Generator needs reseeded in calls",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "InXCalls",
          "package": "crypto-api",
          "partial": "In XCalls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:InXCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "KeyGenFailure",
          "package": "crypto-api",
          "signature": "KeyGenFailure",
          "source": "src/Crypto-Classes-Exceptions.html#CipherError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "KeyGenFailure",
          "package": "crypto-api",
          "partial": "Key Gen Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:KeyGenFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome generators cease operation\n after too high a count without a\n reseed (ex: NIST SP 800-90)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "NeedReseed",
          "package": "crypto-api",
          "signature": "NeedReseed",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedReseed\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NeedReseed\"]"
        },
        "index": {
          "description": "Some generators cease operation after too high count without reseed ex NIST SP",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "NeedReseed",
          "package": "crypto-api",
          "partial": "Need Reseed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generator can not be\n instantiated or reseeded with a\n finite seed (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "NeedsInfiniteSeed",
          "package": "crypto-api",
          "signature": "NeedsInfiniteSeed",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedsInfiniteSeed\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NeedsInfiniteSeed\"]"
        },
        "index": {
          "description": "This generator can not be instantiated or reseeded with finite seed ex SystemRandom",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "NeedsInfiniteSeed",
          "package": "crypto-api",
          "partial": "Needs Infinite Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NeedsInfiniteSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generator never reseeds (ex: \u003ccode\u003e\u003ca\u003eSystemRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "Never",
          "package": "crypto-api",
          "signature": "Never",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:Never\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:Never\"]"
        },
        "index": {
          "description": "This generator never reseeds ex SystemRandom",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "Never",
          "package": "crypto-api",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor instantiating new generators\n (or reseeding)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "NotEnoughEntropy",
          "package": "crypto-api",
          "signature": "NotEnoughEntropy",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotEnoughEntropy\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NotEnoughEntropy\"]"
        },
        "index": {
          "description": "For instantiating new generators or reseeding",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "NotEnoughEntropy",
          "package": "crypto-api",
          "partial": "Not Enough Entropy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotEnoughEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bound is over 2^64 bytes or calls\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "NotSoon",
          "package": "crypto-api",
          "signature": "NotSoon",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotSoon\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:NotSoon\"]"
        },
        "index": {
          "description": "The bound is over bytes or calls",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "NotSoon",
          "package": "crypto-api",
          "partial": "Not Soon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:NotSoon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen using \u003ccode\u003egenInteger g (l,h)\u003c/code\u003e\n and \u003ccode\u003elogBase 2 (h - l) \u003e (maxBound\n :: Int)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "RangeInvalid",
          "package": "crypto-api",
          "signature": "RangeInvalid",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RangeInvalid\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:RangeInvalid\"]"
        },
        "index": {
          "description": "When using genInteger and logBase maxBound Int",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "RangeInvalid",
          "package": "crypto-api",
          "partial": "Range Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RangeInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequested more bytes than a\n single pass can generate (The\n maximum request is generator\n dependent)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Random\"]",
          "name": "RequestedTooManyBytes",
          "package": "crypto-api",
          "signature": "RequestedTooManyBytes",
          "source": "src/Crypto-Random.html#GenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RequestedTooManyBytes\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:RequestedTooManyBytes\"]"
        },
        "index": {
          "description": "Requested more bytes than single pass can generate The maximum request is generator dependent",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "RequestedTooManyBytes",
          "package": "crypto-api",
          "partial": "Requested Too Many Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:RequestedTooManyBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "blockLength",
          "package": "crypto-api",
          "signature": "blockLength",
          "source": "src/Crypto-Classes.html#blockLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "blockLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "blockSize",
          "package": "crypto-api",
          "signature": "blockSize",
          "source": "src/Crypto-Classes.html#blockSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "blockSize",
          "package": "crypto-api",
          "partial": "Size",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of bytes in a block cipher block\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "blockSizeBytes",
          "package": "crypto-api",
          "signature": "Tagged k ByteLength",
          "source": "src/Crypto-Classes.html#blockSizeBytes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockSizeBytes\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockSizeBytes\"]"
        },
        "index": {
          "description": "The number of bytes in block cipher block",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "blockSizeBytes",
          "package": "crypto-api",
          "partial": "Size Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:blockSizeBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey construction from raw material (typically including key expansion)\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eCipherError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKey",
          "package": "crypto-api",
          "signature": "ByteString -\u003e k",
          "source": "src/Crypto-Classes-Exceptions.html#buildKey",
          "type": "function"
        },
        "index": {
          "description": "Key construction from raw material typically including key expansion This is wrapper that can throw CipherError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKey",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "partial": "Key",
          "signature": "ByteString-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric key generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyGen",
          "package": "crypto-api",
          "signature": "g -\u003e (k, g)",
          "source": "src/Crypto-Classes-Exceptions.html#buildKeyGen",
          "type": "function"
        },
        "index": {
          "description": "Symmetric key generation This is wrapper that can throw GenError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyGen",
          "normalized": "a-\u003e(b,a)",
          "package": "crypto-api",
          "partial": "Key Gen",
          "signature": "g-\u003e(k,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a symmetric key using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "buildKeyIO",
          "package": "crypto-api",
          "signature": "IO k",
          "source": "src/Crypto-Classes.html#buildKeyIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyIO\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyIO\"]"
        },
        "index": {
          "description": "Build symmetric key using the system entropy see Random",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyIO",
          "package": "crypto-api",
          "partial": "Key IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsymetric key generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyPair",
          "package": "crypto-api",
          "signature": "g -\u003e BitLength -\u003e ((p, v), g)",
          "source": "src/Crypto-Classes-Exceptions.html#buildKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Asymetric key generation This is wrapper that can throw GenError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyPair",
          "normalized": "a-\u003eBitLength-\u003e((b,c),a)",
          "package": "crypto-api",
          "partial": "Key Pair",
          "signature": "g-\u003eBitLength-\u003e((p,v),g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a pair of asymmetric keys using the system random generator.\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "buildKeyPairIO",
          "package": "crypto-api",
          "signature": "BitLength -\u003e IO (Either GenError (p, v))",
          "source": "src/Crypto-Classes.html#buildKeyPairIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyPairIO\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPairIO\"]"
        },
        "index": {
          "description": "Build pair of asymmetric keys using the system random generator",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "buildKeyPairIO",
          "normalized": "BitLength-\u003eIO(Either GenError(a,b))",
          "package": "crypto-api",
          "partial": "Key Pair IO",
          "signature": "BitLength-\u003eIO(Either GenError(p,v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:buildKeyPairIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipherblock Chaining (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "cbc",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cbc",
          "type": "method"
        },
        "index": {
          "description": "Cipherblock Chaining encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "cbc",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining encryption for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "cbcLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cbcLazy",
          "type": "method"
        },
        "index": {
          "description": "Cipher block chaining encryption for lazy bytestrings",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "cbcLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cbcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feedback (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "cfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cfb",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feedback encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "cfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feed-back encryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "cfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feed-back encryption mode for lazy bytestrings with blockSize",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "cfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:cfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ctr",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ctr",
          "type": "method"
        },
        "index": {
          "description": "Counter encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ctr",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ctrLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ctrLazy",
          "type": "method"
        },
        "index": {
          "description": "Counter encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ctrLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ctrLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsymmetric decryption\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a GenError on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "decryptAsym",
          "package": "crypto-api",
          "signature": "g -\u003e v -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Crypto-Classes-Exceptions.html#decryptAsym",
          "type": "function"
        },
        "index": {
          "description": "Asymmetric decryption This is wrapper that can throw GenError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "decryptAsym",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,a)",
          "package": "crypto-api",
          "partial": "Asym",
          "signature": "g-\u003ev-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:decryptAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "decryptBlock",
          "package": "crypto-api",
          "signature": "decryptBlock",
          "source": "src/Crypto-Classes.html#decryptBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "decryptBlock",
          "package": "crypto-api",
          "partial": "Block",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:decryptBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectronic Cookbook (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ecb",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#ecb",
          "type": "method"
        },
        "index": {
          "description": "Electronic Cookbook encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ecb",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ecb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCook book mode - not really a mode at all.  If you don't know what you're doing, don't use this mode^H^H^H^H library.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ecbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#ecbLazy",
          "type": "method"
        },
        "index": {
          "description": "Cook book mode not really mode at all If you don know what you re doing don use this mode library",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ecbLazy",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ecbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsymmetric encryption\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "encryptAsym",
          "package": "crypto-api",
          "signature": "g -\u003e p -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Crypto-Classes-Exceptions.html#encryptAsym",
          "type": "function"
        },
        "index": {
          "description": "Asymmetric encryption This is wrapper that can throw GenError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "encryptAsym",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,a)",
          "package": "crypto-api",
          "partial": "Asym",
          "signature": "g-\u003ep-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:encryptAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "encryptBlock",
          "package": "crypto-api",
          "signature": "encryptBlock",
          "source": "src/Crypto-Classes.html#encryptBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "encryptBlock",
          "package": "crypto-api",
          "partial": "Block",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:encryptBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "finalize",
          "package": "crypto-api",
          "signature": "finalize",
          "source": "src/Crypto-Classes.html#finalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "finalize",
          "package": "crypto-api",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egenBytes len g\u003c/code\u003e generates a random ByteString of length\n \u003ccode\u003elen\u003c/code\u003e and new generator.  The \u003ccode\u003eMonadCryptoRandom\u003c/code\u003e package\n has routines useful for converting the ByteString to\n commonly needed values (but \u003ccode\u003ecereal\u003c/code\u003e or other\n deserialization libraries would also work).\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "genBytes",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e g -\u003e (ByteString, g)",
          "source": "src/Crypto-Classes-Exceptions.html#genBytes",
          "type": "function"
        },
        "index": {
          "description": "genBytes len generates random ByteString of length len and new generator The MonadCryptoRandom package has routines useful for converting the ByteString to commonly needed values but cereal or other deserialization libraries would also work This is wrapper that can throw GenError types as exceptions",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "genBytes",
          "normalized": "ByteLength-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-api",
          "partial": "Bytes",
          "signature": "ByteLength-\u003eg-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egenBytesWithEntropy g i entropy\u003c/code\u003e generates \u003ccode\u003ei\u003c/code\u003e random bytes and use\n the additional input \u003ccode\u003eentropy\u003c/code\u003e in the generation of the requested data\n to increase the confidence our generated data is a secure random stream.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "genBytesWithEntropy",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e ByteString -\u003e g -\u003e (ByteString, g)",
          "source": "src/Crypto-Classes-Exceptions.html#genBytesWithEntropy",
          "type": "function"
        },
        "index": {
          "description": "genBytesWithEntropy entropy generates random bytes and use the additional input entropy in the generation of the requested data to increase the confidence our generated data is secure random stream This is wrapper that can throw GenError types as exceptions",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "genBytesWithEntropy",
          "normalized": "ByteLength-\u003eByteString-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-api",
          "partial": "Bytes With Entropy",
          "signature": "ByteLength-\u003eByteString-\u003eg-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genBytesWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of input entropy necessary to instantiate or reseed\n a generator\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "genSeedLength",
          "package": "crypto-api",
          "signature": "Tagged g ByteLength",
          "source": "src/Crypto-Random.html#genSeedLength",
          "type": "method"
        },
        "index": {
          "description": "Length of input entropy necessary to instantiate or reseed generator",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "genSeedLength",
          "package": "crypto-api",
          "partial": "Seed Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:genSeedLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e generation\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e on exception.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "getIV",
          "package": "crypto-api",
          "signature": "g -\u003e (IV k, g)",
          "source": "src/Crypto-Classes-Exceptions.html#getIV",
          "type": "function"
        },
        "index": {
          "description": "Random IV generation This is wrapper that can throw GenError on exception",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "getIV",
          "normalized": "a-\u003e(IV b,a)",
          "package": "crypto-api",
          "partial": "IV",
          "signature": "g-\u003e(IV k,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:getIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e using the system entropy (see \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "getIVIO",
          "package": "crypto-api",
          "signature": "IO (IV k)",
          "source": "src/Crypto-Classes.html#getIVIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:getIVIO\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:getIVIO\"]"
        },
        "index": {
          "description": "Obtain an IV using the system entropy see Random",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "getIVIO",
          "package": "crypto-api",
          "partial": "IVIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:getIVIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a lazy ByteString, creating a digest\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "hash",
          "package": "crypto-api",
          "signature": "ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hash",
          "type": "method"
        },
        "index": {
          "description": "Hash lazy ByteString creating digest",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "hash",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "signature": "ByteString-\u003ed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a strict ByteString, creating a digest\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "hash'",
          "package": "crypto-api",
          "signature": "ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hash%27",
          "type": "method"
        },
        "index": {
          "description": "Hash strict ByteString creating digest",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "hash'",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "signature": "ByteString-\u003ed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hash-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a lazy hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "hashFunc",
          "package": "crypto-api",
          "signature": "d -\u003e ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hashFunc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hashFunc\"]"
        },
        "index": {
          "description": "Obtain lazy hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "hashFunc",
          "normalized": "a-\u003eByteString-\u003ea",
          "package": "crypto-api",
          "partial": "Func",
          "signature": "d-\u003eByteString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a strict hash function whose result is the same type\n as the given digest, which is discarded.  If the type is already inferred then\n consider using the \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e function instead.\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "hashFunc'",
          "package": "crypto-api",
          "signature": "d -\u003e ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hashFunc%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc-39-\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hashFunc-39-\"]"
        },
        "index": {
          "description": "Obtain strict hash function whose result is the same type as the given digest which is discarded If the type is already inferred then consider using the hash function instead",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "hashFunc'",
          "normalized": "a-\u003eByteString-\u003ea",
          "package": "crypto-api",
          "partial": "Func'",
          "signature": "d-\u003eByteString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:hashFunc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e by one.  This is way faster than decoding,\n increasing, encoding\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "incIV",
          "package": "crypto-api",
          "signature": "IV k -\u003e IV k",
          "source": "src/Crypto-Classes.html#incIV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:incIV\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:incIV\"]"
        },
        "index": {
          "description": "Increase an IV by one This is way faster than decoding increasing encoding",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "incIV",
          "normalized": "IV a-\u003eIV a",
          "package": "crypto-api",
          "partial": "IV",
          "signature": "IV k-\u003eIV k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:incIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "initialCtx",
          "package": "crypto-api",
          "signature": "initialCtx",
          "source": "src/Crypto-Classes.html#initialCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "initialCtx",
          "package": "crypto-api",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:initialCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "keyLength",
          "package": "crypto-api",
          "signature": "keyLength",
          "source": "src/Crypto-Classes.html#keyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "keyLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:keyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of bytes in a block cipher key (assuming it is an even\n multiple of 8 bits)\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "keyLengthBytes",
          "package": "crypto-api",
          "signature": "Tagged k ByteLength",
          "source": "src/Crypto-Classes.html#keyLengthBytes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:keyLengthBytes\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:keyLengthBytes\"]"
        },
        "index": {
          "description": "The number of bytes in block cipher key assuming it is an even multiple of bits",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "keyLengthBytes",
          "package": "crypto-api",
          "partial": "Length Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:keyLengthBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiate a new random bit generator.  The provided\n bytestring should be of length \u003e= genSeedLength.  If the\n bytestring is shorter then the call may fail (suggested\n error: \u003ccode\u003eNotEnoughEntropy\u003c/code\u003e).  If the bytestring is of\n sufficent length the call should always succeed.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper that can throw \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e types as exceptions.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "newGen",
          "package": "crypto-api",
          "signature": "ByteString -\u003e g",
          "source": "src/Crypto-Classes-Exceptions.html#newGen",
          "type": "function"
        },
        "index": {
          "description": "Instantiate new random bit generator The provided bytestring should be of length genSeedLength If the bytestring is shorter then the call may fail suggested error NotEnoughEntropy If the bytestring is of sufficent length the call should always succeed This is wrapper that can throw GenError types as exceptions",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "newGen",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "partial": "Gen",
          "signature": "ByteString-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:newGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default this uses \u003ca\u003eSystem.Crypto.Random\u003c/a\u003e to obtain\n entropy for \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "newGenIO",
          "package": "crypto-api",
          "signature": "IO g",
          "source": "src/Crypto-Random.html#newGenIO",
          "type": "method"
        },
        "index": {
          "description": "By default this uses System.Crypto.Random to obtain entropy for newGen",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "newGenIO",
          "package": "crypto-api",
          "partial": "Gen IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:newGenIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ofb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ofb",
          "type": "method"
        },
        "index": {
          "description": "Output feedback encryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ofb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ofb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "ofbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ofbLazy",
          "type": "method"
        },
        "index": {
          "description": "Output feedback mode for lazy bytestrings",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "ofbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:ofbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "outputLength",
          "package": "crypto-api",
          "signature": "outputLength",
          "source": "src/Crypto-Classes.html#outputLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "outputLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:outputLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "privateKeyLength",
          "package": "crypto-api",
          "signature": "v -\u003e BitLength",
          "source": "src/Crypto-Classes.html#privateKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "privateKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "v-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:privateKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "publicKeyLength",
          "package": "crypto-api",
          "signature": "p -\u003e BitLength",
          "source": "src/Crypto-Classes.html#publicKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "publicKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "p-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:publicKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the generator has produced too many random bytes on its existing\n seed it will throw a \u003ccode\u003eNeedReseed\u003c/code\u003e exception.  In that case, reseed the\n generator using this function and a new high-entropy seed of length \u003e=\n \u003ccode\u003egenSeedLength\u003c/code\u003e.  Using bytestrings that are too short can result in an\n exception (\u003ccode\u003eNotEnoughEntropy\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseed",
          "package": "crypto-api",
          "signature": "ByteString -\u003e g -\u003e g",
          "source": "src/Crypto-Classes-Exceptions.html#reseed",
          "type": "function"
        },
        "index": {
          "description": "If the generator has produced too many random bytes on its existing seed it will throw NeedReseed exception In that case reseed the generator using this function and new high-entropy seed of length genSeedLength Using bytestrings that are too short can result in an exception NotEnoughEntropy",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseed",
          "normalized": "ByteString-\u003ea-\u003ea",
          "package": "crypto-api",
          "signature": "ByteString-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates how soon a reseed is needed\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseedInfo",
          "package": "crypto-api",
          "signature": "g -\u003e ReseedInfo",
          "source": "src/Crypto-Random.html#reseedInfo",
          "type": "method"
        },
        "index": {
          "description": "Indicates how soon reseed is needed",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseedInfo",
          "normalized": "a-\u003eReseedInfo",
          "package": "crypto-api",
          "partial": "Info",
          "signature": "g-\u003eReseedInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseedInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the period between reseeds (constant for most generators).\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseedPeriod",
          "package": "crypto-api",
          "signature": "g -\u003e ReseedInfo",
          "source": "src/Crypto-Random.html#reseedPeriod",
          "type": "method"
        },
        "index": {
          "description": "Indicates the period between reseeds constant for most generators",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "reseedPeriod",
          "normalized": "a-\u003eReseedInfo",
          "package": "crypto-api",
          "partial": "Period",
          "signature": "g-\u003eReseedInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:reseedPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "signingKeyLength",
          "package": "crypto-api",
          "signature": "v -\u003e BitLength",
          "source": "src/Crypto-Classes.html#signingKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "signingKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "v-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:signingKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) mode for strict bytestrings.  First argument is\n the optional list of bytestrings to be authenticated but not\n encrypted.  As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "siv",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#siv",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV mode for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "siv",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:siv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) mode for lazy bytestrings. The third argument is\n the optional list of bytestrings to be authenticated but not\n encrypted As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "sivLazy",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#sivLazy",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV mode for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "sivLazy",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:sivLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile the safety and wisdom of a splitting function depends on the\n properties of the generator being split, several arguments from\n informed people indicate such a function is safe for NIST SP 800-90\n generators.  (see libraries@haskell.org discussion around Sept, Oct\n 2010).  You can find implementations of such generators in the \u003ccode\u003eDRBG\u003c/code\u003e\n package.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper for \u003ccode\u003e\u003ca\u003esplitGen\u003c/a\u003e\u003c/code\u003e which throws errors as\n exceptions.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "splitGen",
          "package": "crypto-api",
          "signature": "g -\u003e (g, g)",
          "source": "src/Crypto-Classes-Exceptions.html#splitGen",
          "type": "function"
        },
        "index": {
          "description": "While the safety and wisdom of splitting function depends on the properties of the generator being split several arguments from informed people indicate such function is safe for NIST SP generators see libraries@haskell.org discussion around Sept Oct You can find implementations of such generators in the DRBG package This is wrapper for splitGen which throws errors as exceptions",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "splitGen",
          "normalized": "a-\u003e(a,a)",
          "package": "crypto-api",
          "partial": "Gen",
          "signature": "g-\u003e(g,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:splitGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipherblock Chaining (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCbc",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCbc",
          "type": "method"
        },
        "index": {
          "description": "Cipherblock Chaining decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCbc",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cbc",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining decryption for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCbcLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCbcLazy",
          "type": "method"
        },
        "index": {
          "description": "Cipher block chaining decryption for lazy bytestrings",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCbcLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cbc Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCbcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feedback (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCfb",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feedback decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cfb",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feed-back decryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feed-back decryption mode for lazy bytestrings with blockSize",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cfb Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCtr",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCtr",
          "type": "method"
        },
        "index": {
          "description": "Counter decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCtr",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ctr",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCtrLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCtrLazy",
          "type": "method"
        },
        "index": {
          "description": "Counter decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unCtrLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ctr Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unCtrLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectronic Cookbook (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unEcb",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#unEcb",
          "type": "method"
        },
        "index": {
          "description": "Electronic Cookbook decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unEcb",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Ecb",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unEcb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eECB decrypt, complementary to \u003ccode\u003e\u003ca\u003eecb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unEcbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#unEcbLazy",
          "type": "method"
        },
        "index": {
          "description": "ECB decrypt complementary to ecb",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unEcbLazy",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Ecb Lazy",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unEcbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unOfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unOfb",
          "type": "method"
        },
        "index": {
          "description": "Output feedback decryption",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unOfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ofb",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unOfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unOfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unOfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Output feedback mode for lazy bytestrings",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unOfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ofb Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unOfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) for strict bytestrings First argument is the\n optional list of bytestrings to be authenticated but not encrypted\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unSiv",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#unSiv",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unSiv",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Siv",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unSiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) for lazy bytestrings.  The third argument is the\n optional list of bytestrings to be authenticated but not encrypted.\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
          "module": "Crypto.Classes.Exceptions",
          "name": "unSivLazy",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#unSivLazy",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "unSivLazy",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Siv Lazy",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:unSivLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "updateCtx",
          "package": "crypto-api",
          "signature": "updateCtx",
          "source": "src/Crypto-Classes.html#updateCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "updateCtx",
          "package": "crypto-api",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:updateCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "verify",
          "package": "crypto-api",
          "signature": "p -\u003e ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-Classes.html#verify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "verify",
          "normalized": "a-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "crypto-api",
          "signature": "p-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes.Exceptions",
          "name": "verifyingKeyLength",
          "package": "crypto-api",
          "signature": "p -\u003e BitLength",
          "source": "src/Crypto-Classes.html#verifyingKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "verifyingKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "p-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:verifyingKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e made only of zeroes\n\u003c/p\u003e",
          "module": "[\"Crypto.Classes.Exceptions\",\"Crypto.Classes\"]",
          "name": "zeroIV",
          "package": "crypto-api",
          "signature": "IV k",
          "source": "src/Crypto-Classes.html#zeroIV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:zeroIV\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:zeroIV\"]"
        },
        "index": {
          "description": "Obtain an IV made only of zeroes",
          "hierarchy": "Crypto Classes Exceptions",
          "module": "Crypto.Classes.Exceptions",
          "name": "zeroIV",
          "package": "crypto-api",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes-Exceptions.html#v:zeroIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the heart of the crypto-api package.  By making (or having) \nan instance of Hash, AsymCipher, BlockCipher or StreamCipher you provide (or obtain)\naccess to any infrastructure built on these primitives include block cipher modes\nof operation, hashing, hmac, signing, etc.  These classes allow users to build\nroutines that are agnostic to the algorithm used so changing algorithms is as simple\nas changing a type signature.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Classes",
          "name": "Classes",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html",
          "type": "module"
        },
        "index": {
          "description": "This is the heart of the crypto-api package By making or having an instance of Hash AsymCipher BlockCipher or StreamCipher you provide or obtain access to any infrastructure built on these primitives include block cipher modes of operation hashing hmac signing etc These classes allow users to build routines that are agnostic to the algorithm used so changing algorithms is as simple as changing type signature",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "Classes",
          "package": "crypto-api",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsymetric ciphers (common ones being RSA or EC based)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "AsymCipher",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#AsymCipher",
          "type": "class"
        },
        "index": {
          "description": "Asymetric ciphers common ones being RSA or EC based",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "AsymCipher",
          "package": "crypto-api",
          "partial": "Asym Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:AsymCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe BlockCipher class is intended as the generic interface\n targeted by maintainers of Haskell cipher implementations.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: blockSize, encryptBlock, decryptBlock,\n buildKey, and keyLength.\n\u003c/p\u003e\u003cp\u003eInstances must handle unaligned data\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "BlockCipher",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#BlockCipher",
          "type": "class"
        },
        "index": {
          "description": "The BlockCipher class is intended as the generic interface targeted by maintainers of Haskell cipher implementations Minimum complete definition blockSize encryptBlock decryptBlock buildKey and keyLength Instances must handle unaligned data",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "BlockCipher",
          "package": "crypto-api",
          "partial": "Block Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:BlockCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003eoutputLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eblockLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einitialCtx\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdateCtx\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efinalize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "Hash",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#Hash",
          "type": "class"
        },
        "index": {
          "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data Minimum complete definition outputLength blockLength initialCtx updateCtx and finalize",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "Hash",
          "package": "crypto-api",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for signing operations which inherently can not be as generic\n as asymetric ciphers (ex: DSA).\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "Signing",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#Signing",
          "type": "class"
        },
        "index": {
          "description": "class for signing operations which inherently can not be as generic as asymetric ciphers ex DSA",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "Signing",
          "package": "crypto-api",
          "partial": "Signing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:Signing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream cipher class.  Instance are expected to work on messages as small as one byte\n The length of the resulting cipher text should be equal\n to the length of the input message.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "StreamCipher",
          "package": "crypto-api",
          "source": "src/Crypto-Classes.html#StreamCipher",
          "type": "class"
        },
        "index": {
          "description": "stream cipher class Instance are expected to work on messages as small as one byte The length of the resulting cipher text should be equal to the length of the input message",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "StreamCipher",
          "package": "crypto-api",
          "partial": "Stream Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#t:StreamCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "blockLength",
          "package": "crypto-api",
          "signature": "blockLength",
          "source": "src/Crypto-Classes.html#blockLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "blockLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "blockSize",
          "package": "crypto-api",
          "signature": "blockSize",
          "source": "src/Crypto-Classes.html#blockSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "blockSize",
          "package": "crypto-api",
          "partial": "Size",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "buildKey",
          "package": "crypto-api",
          "signature": "buildKey",
          "source": "src/Crypto-Classes.html#buildKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildKey",
          "package": "crypto-api",
          "partial": "Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a symmetric key using a given \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildKeyGen",
          "package": "crypto-api",
          "signature": "g -\u003e Either GenError (k, g)",
          "source": "src/Crypto-Classes.html#buildKeyGen",
          "type": "function"
        },
        "index": {
          "description": "Build symmetric key using given CryptoRandomGen",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildKeyGen",
          "normalized": "a-\u003eEither GenError(b,a)",
          "package": "crypto-api",
          "partial": "Key Gen",
          "signature": "g-\u003eEither GenError(k,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "buildKeyPair",
          "package": "crypto-api",
          "signature": "buildKeyPair",
          "source": "src/Crypto-Classes.html#buildKeyPair",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildKeyPair",
          "package": "crypto-api",
          "partial": "Key Pair",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ebuildKeyPair\u003c/a\u003e\u003c/code\u003e for ease of use with state monads.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildKeyPairGen",
          "package": "crypto-api",
          "signature": "BitLength -\u003e g -\u003e Either GenError ((p, v), g)",
          "source": "src/Crypto-Classes.html#buildKeyPairGen",
          "type": "function"
        },
        "index": {
          "description": "Flipped buildKeyPair for ease of use with state monads",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildKeyPairGen",
          "normalized": "BitLength-\u003ea-\u003eEither GenError((b,c),a)",
          "package": "crypto-api",
          "partial": "Key Pair Gen",
          "signature": "BitLength-\u003eg-\u003eEither GenError((p,v),g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildKeyPairGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ebuildSigningPair\u003c/a\u003e\u003c/code\u003e for ease of use with state monads.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildSigningKeyPairGen",
          "package": "crypto-api",
          "signature": "BitLength -\u003e g -\u003e Either GenError ((p, v), g)",
          "source": "src/Crypto-Classes.html#buildSigningKeyPairGen",
          "type": "function"
        },
        "index": {
          "description": "Flipped buildSigningPair for ease of use with state monads",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildSigningKeyPairGen",
          "normalized": "BitLength-\u003ea-\u003eEither GenError((b,c),a)",
          "package": "crypto-api",
          "partial": "Signing Key Pair Gen",
          "signature": "BitLength-\u003eg-\u003eEither GenError((p,v),g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningKeyPairGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a signing key using the system random generator\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildSigningKeyPairIO",
          "package": "crypto-api",
          "signature": "BitLength -\u003e IO (Either GenError (p, v))",
          "source": "src/Crypto-Classes.html#buildSigningKeyPairIO",
          "type": "function"
        },
        "index": {
          "description": "Build signing key using the system random generator",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildSigningKeyPairIO",
          "normalized": "BitLength-\u003eIO(Either GenError(a,b))",
          "package": "crypto-api",
          "partial": "Signing Key Pair IO",
          "signature": "BitLength-\u003eIO(Either GenError(p,v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningKeyPairIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "buildSigningPair",
          "package": "crypto-api",
          "signature": "g -\u003e BitLength -\u003e Either GenError ((p, v), g)",
          "source": "src/Crypto-Classes.html#buildSigningPair",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildSigningPair",
          "normalized": "a-\u003eBitLength-\u003eEither GenError((b,c),a)",
          "package": "crypto-api",
          "partial": "Signing Pair",
          "signature": "g-\u003eBitLength-\u003eEither GenError((p,v),g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildSigningPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "buildStreamKey",
          "package": "crypto-api",
          "signature": "ByteString -\u003e Maybe k",
          "source": "src/Crypto-Classes.html#buildStreamKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildStreamKey",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "crypto-api",
          "partial": "Stream Key",
          "signature": "ByteString-\u003eMaybe k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a stream key using the provided random generator\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildStreamKeyGen",
          "package": "crypto-api",
          "signature": "g -\u003e Either GenError (k, g)",
          "source": "src/Crypto-Classes.html#buildStreamKeyGen",
          "type": "function"
        },
        "index": {
          "description": "Build stream key using the provided random generator",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildStreamKeyGen",
          "normalized": "a-\u003eEither GenError(b,a)",
          "package": "crypto-api",
          "partial": "Stream Key Gen",
          "signature": "g-\u003eEither GenError(k,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKeyGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a stream key using the system random generator\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "buildStreamKeyIO",
          "package": "crypto-api",
          "signature": "IO k",
          "source": "src/Crypto-Classes.html#buildStreamKeyIO",
          "type": "function"
        },
        "index": {
          "description": "Build stream key using the system random generator",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "buildStreamKeyIO",
          "package": "crypto-api",
          "partial": "Stream Key IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:buildStreamKeyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipherblock Chaining (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "cbc",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cbc",
          "type": "method"
        },
        "index": {
          "description": "Cipherblock Chaining encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "cbc",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining encryption for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "cbcLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cbcLazy",
          "type": "method"
        },
        "index": {
          "description": "Cipher block chaining encryption for lazy bytestrings",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "cbcLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cbcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feedback (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "cfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cfb",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feedback encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "cfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feed-back encryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "cfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#cfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feed-back encryption mode for lazy bytestrings with blockSize",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "cfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:cfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "chunkFor",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Crypto-Classes.html#chunkFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "chunkFor",
          "normalized": "a-\u003eByteString-\u003e[ByteString]",
          "package": "crypto-api",
          "partial": "For",
          "signature": "k-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:chunkFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "chunkFor'",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Crypto-Classes.html#chunkFor%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "chunkFor'",
          "normalized": "a-\u003eByteString-\u003e[ByteString]",
          "package": "crypto-api",
          "partial": "For'",
          "signature": "k-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:chunkFor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ctr",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ctr",
          "type": "method"
        },
        "index": {
          "description": "Counter encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ctr",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ctrLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ctrLazy",
          "type": "method"
        },
        "index": {
          "description": "Counter encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ctrLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ctrLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "decryptAsym",
          "package": "crypto-api",
          "signature": "decryptAsym",
          "source": "src/Crypto-Classes.html#decryptAsym",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "decryptAsym",
          "package": "crypto-api",
          "partial": "Asym",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "decryptBlock",
          "package": "crypto-api",
          "signature": "decryptBlock",
          "source": "src/Crypto-Classes.html#decryptBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "decryptBlock",
          "package": "crypto-api",
          "partial": "Block",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "decryptStream",
          "package": "crypto-api",
          "signature": "k -\u003e iv -\u003e ByteString -\u003e (ByteString, iv)",
          "source": "src/Crypto-Classes.html#decryptStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "decryptStream",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
          "package": "crypto-api",
          "partial": "Stream",
          "signature": "k-\u003eiv-\u003eByteString-\u003e(ByteString,iv)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:decryptStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectronic Cookbook (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ecb",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#ecb",
          "type": "method"
        },
        "index": {
          "description": "Electronic Cookbook encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ecb",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ecb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCook book mode - not really a mode at all.  If you don't know what you're doing, don't use this mode^H^H^H^H library.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ecbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#ecbLazy",
          "type": "method"
        },
        "index": {
          "description": "Cook book mode not really mode at all If you don know what you re doing don use this mode library",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ecbLazy",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ecbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value using binary serialization to a strict ByteString.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "encode",
          "package": "crypto-api",
          "signature": "a -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encode value using binary serialization to strict ByteString",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "crypto-api",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "encryptAsym",
          "package": "crypto-api",
          "signature": "encryptAsym",
          "source": "src/Crypto-Classes.html#encryptAsym",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "encryptAsym",
          "package": "crypto-api",
          "partial": "Asym",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "encryptBlock",
          "package": "crypto-api",
          "signature": "encryptBlock",
          "source": "src/Crypto-Classes.html#encryptBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "encryptBlock",
          "package": "crypto-api",
          "partial": "Block",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "encryptStream",
          "package": "crypto-api",
          "signature": "k -\u003e iv -\u003e ByteString -\u003e (ByteString, iv)",
          "source": "src/Crypto-Classes.html#encryptStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "encryptStream",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
          "package": "crypto-api",
          "partial": "Stream",
          "signature": "k-\u003eiv-\u003eByteString-\u003e(ByteString,iv)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:encryptStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "finalize",
          "package": "crypto-api",
          "signature": "finalize",
          "source": "src/Crypto-Classes.html#finalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "finalize",
          "package": "crypto-api",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain an \u003ccode\u003e\u003ca\u003eIV\u003c/a\u003e\u003c/code\u003e using the provided CryptoRandomGenerator.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "getIV",
          "package": "crypto-api",
          "signature": "g -\u003e Either GenError (IV k, g)",
          "source": "src/Crypto-Classes.html#getIV",
          "type": "function"
        },
        "index": {
          "description": "Obtain an IV using the provided CryptoRandomGenerator",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "getIV",
          "normalized": "a-\u003eEither GenError(IV b,a)",
          "package": "crypto-api",
          "partial": "IV",
          "signature": "g-\u003eEither GenError(IV k,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:getIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a lazy ByteString, creating a digest\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "hash",
          "package": "crypto-api",
          "signature": "ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hash",
          "type": "method"
        },
        "index": {
          "description": "Hash lazy ByteString creating digest",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "hash",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "signature": "ByteString-\u003ed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a strict ByteString, creating a digest\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "hash'",
          "package": "crypto-api",
          "signature": "ByteString -\u003e d",
          "source": "src/Crypto-Classes.html#hash%27",
          "type": "method"
        },
        "index": {
          "description": "Hash strict ByteString creating digest",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "hash'",
          "normalized": "ByteString-\u003ea",
          "package": "crypto-api",
          "signature": "ByteString-\u003ed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:hash-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "initialCtx",
          "package": "crypto-api",
          "signature": "initialCtx",
          "source": "src/Crypto-Classes.html#initialCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "initialCtx",
          "package": "crypto-api",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:initialCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "keyLength",
          "package": "crypto-api",
          "signature": "keyLength",
          "source": "src/Crypto-Classes.html#keyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "keyLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:keyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback (encryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ofb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ofb",
          "type": "method"
        },
        "index": {
          "description": "Output feedback encryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ofb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ofb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "ofbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#ofbLazy",
          "type": "method"
        },
        "index": {
          "description": "Output feedback mode for lazy bytestrings",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "ofbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:ofbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "outputLength",
          "package": "crypto-api",
          "signature": "outputLength",
          "source": "src/Crypto-Classes.html#outputLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "outputLength",
          "package": "crypto-api",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:outputLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "privateKeyLength",
          "package": "crypto-api",
          "signature": "v -\u003e BitLength",
          "source": "src/Crypto-Classes.html#privateKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "privateKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "v-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:privateKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "publicKeyLength",
          "package": "crypto-api",
          "signature": "p -\u003e BitLength",
          "source": "src/Crypto-Classes.html#publicKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "publicKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "p-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:publicKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "sign",
          "package": "crypto-api",
          "signature": "g -\u003e v -\u003e ByteString -\u003e Either GenError (ByteString, g)",
          "source": "src/Crypto-Classes.html#sign",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "sign",
          "normalized": "a-\u003eb-\u003eByteString-\u003eEither GenError(ByteString,a)",
          "package": "crypto-api",
          "signature": "g-\u003ev-\u003eByteString-\u003eEither GenError(ByteString,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "signingKeyLength",
          "package": "crypto-api",
          "signature": "v -\u003e BitLength",
          "source": "src/Crypto-Classes.html#signingKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "signingKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "v-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:signingKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) mode for strict bytestrings.  First argument is\n the optional list of bytestrings to be authenticated but not\n encrypted.  As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "siv",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#siv",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV mode for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "siv",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:siv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) mode for lazy bytestrings. The third argument is\n the optional list of bytestrings to be authenticated but not\n encrypted As required by the specification this algorithm may\n return nothing when certain constraints aren't met.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "sivLazy",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#sivLazy",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV mode for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when certain constraints aren met",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "sivLazy",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Lazy",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:sivLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "streamKeyLength",
          "package": "crypto-api",
          "signature": "Tagged k BitLength",
          "source": "src/Crypto-Classes.html#streamKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "streamKeyLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:streamKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipherblock Chaining (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCbc",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCbc",
          "type": "method"
        },
        "index": {
          "description": "Cipherblock Chaining decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCbc",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cbc",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining decryption for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCbcLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCbcLazy",
          "type": "method"
        },
        "index": {
          "description": "Cipher block chaining decryption for lazy bytestrings",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCbcLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cbc Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCbcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feedback (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCfb",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feedback decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cfb",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCiphertext feed-back decryption mode for lazy bytestrings (with s\n == blockSize)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Ciphertext feed-back decryption mode for lazy bytestrings with blockSize",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Cfb Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCtr",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCtr",
          "type": "method"
        },
        "index": {
          "description": "Counter decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCtr",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ctr",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unCtrLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unCtrLazy",
          "type": "method"
        },
        "index": {
          "description": "Counter decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unCtrLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ctr Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unCtrLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectronic Cookbook (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unEcb",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#unEcb",
          "type": "method"
        },
        "index": {
          "description": "Electronic Cookbook decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unEcb",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Ecb",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unEcb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eECB decrypt, complementary to \u003ccode\u003e\u003ca\u003eecb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unEcbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Classes.html#unEcbLazy",
          "type": "method"
        },
        "index": {
          "description": "ECB decrypt complementary to ecb",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unEcbLazy",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Ecb Lazy",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unEcbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback (decryption)\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unOfb",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unOfb",
          "type": "method"
        },
        "index": {
          "description": "Output feedback decryption",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unOfb",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ofb",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unOfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput feedback mode for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unOfbLazy",
          "package": "crypto-api",
          "signature": "k -\u003e IV k -\u003e ByteString -\u003e (ByteString, IV k)",
          "source": "src/Crypto-Classes.html#unOfbLazy",
          "type": "method"
        },
        "index": {
          "description": "Output feedback mode for lazy bytestrings",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unOfbLazy",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003e(ByteString,IV a)",
          "package": "crypto-api",
          "partial": "Ofb Lazy",
          "signature": "k-\u003eIV k-\u003eByteString-\u003e(ByteString,IV k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unOfbLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) for strict bytestrings First argument is the\n optional list of bytestrings to be authenticated but not encrypted\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unSiv",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#unSiv",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV for strict bytestrings First argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unSiv",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Siv",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unSiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSIV (Synthetic IV) for lazy bytestrings.  The third argument is the\n optional list of bytestrings to be authenticated but not encrypted.\n As required by the specification this algorithm may return nothing\n when authentication fails.\n\u003c/p\u003e",
          "module": "Crypto.Classes",
          "name": "unSivLazy",
          "package": "crypto-api",
          "signature": "k -\u003e k -\u003e [ByteString] -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Classes.html#unSivLazy",
          "type": "method"
        },
        "index": {
          "description": "SIV Synthetic IV for lazy bytestrings The third argument is the optional list of bytestrings to be authenticated but not encrypted As required by the specification this algorithm may return nothing when authentication fails",
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "unSivLazy",
          "normalized": "a-\u003ea-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "Siv Lazy",
          "signature": "k-\u003ek-\u003e[ByteString]-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:unSivLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "updateCtx",
          "package": "crypto-api",
          "signature": "updateCtx",
          "source": "src/Crypto-Classes.html#updateCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "updateCtx",
          "package": "crypto-api",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:updateCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "verify",
          "package": "crypto-api",
          "signature": "p -\u003e ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-Classes.html#verify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "verify",
          "normalized": "a-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "crypto-api",
          "signature": "p-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Classes",
          "name": "verifyingKeyLength",
          "package": "crypto-api",
          "signature": "p -\u003e BitLength",
          "source": "src/Crypto-Classes.html#verifyingKeyLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Classes",
          "module": "Crypto.Classes",
          "name": "verifyingKeyLength",
          "normalized": "a-\u003eBitLength",
          "package": "crypto-api",
          "partial": "Key Length",
          "signature": "p-\u003eBitLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Classes.html#v:verifyingKeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.HMAC",
          "name": "HMAC",
          "package": "crypto-api",
          "source": "src/Crypto-HMAC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto HMAC",
          "module": "Crypto.HMAC",
          "name": "HMAC",
          "package": "crypto-api",
          "partial": "HMAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key carrying phantom types \u003ccode\u003ec\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e, forcing the key data to only be used\n by particular hash algorithms.\n\u003c/p\u003e",
          "module": "Crypto.HMAC",
          "name": "MacKey",
          "package": "crypto-api",
          "source": "src/Crypto-HMAC.html#MacKey",
          "type": "newtype"
        },
        "index": {
          "description": "key carrying phantom types and forcing the key data to only be used by particular hash algorithms",
          "hierarchy": "Crypto HMAC",
          "module": "Crypto.HMAC",
          "name": "MacKey",
          "package": "crypto-api",
          "partial": "Mac Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#t:MacKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.HMAC",
          "name": "MacKey",
          "package": "crypto-api",
          "signature": "MacKey ByteString",
          "source": "src/Crypto-HMAC.html#MacKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto HMAC",
          "module": "Crypto.HMAC",
          "name": "MacKey",
          "package": "crypto-api",
          "partial": "Mac Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:MacKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage authentication code calculation for lazy bytestrings.\n \u003ccode\u003ehmac k msg\u003c/code\u003e will compute an authentication code for \u003ccode\u003emsg\u003c/code\u003e using key \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.HMAC",
          "name": "hmac",
          "package": "crypto-api",
          "signature": "MacKey c d -\u003e ByteString -\u003e d",
          "source": "src/Crypto-HMAC.html#hmac",
          "type": "function"
        },
        "index": {
          "description": "Message authentication code calculation for lazy bytestrings hmac msg will compute an authentication code for msg using key",
          "hierarchy": "Crypto HMAC",
          "module": "Crypto.HMAC",
          "name": "hmac",
          "normalized": "MacKey a b-\u003eByteString-\u003eb",
          "package": "crypto-api",
          "signature": "MacKey c d-\u003eByteString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:hmac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehmac k msg\u003c/code\u003e will compute an authentication code for \u003ccode\u003emsg\u003c/code\u003e using key \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.HMAC",
          "name": "hmac'",
          "package": "crypto-api",
          "signature": "MacKey c d -\u003e ByteString -\u003e d",
          "source": "src/Crypto-HMAC.html#hmac%27",
          "type": "function"
        },
        "index": {
          "description": "hmac msg will compute an authentication code for msg using key",
          "hierarchy": "Crypto HMAC",
          "module": "Crypto.HMAC",
          "name": "hmac'",
          "normalized": "MacKey a b-\u003eByteString-\u003eb",
          "package": "crypto-api",
          "signature": "MacKey c d-\u003eByteString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-HMAC.html#v:hmac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthors: Thomas DuBuisson\n\u003c/p\u003e\u003cp\u003eGeneric mode implementations useable by any correct BlockCipher\n instance Be aware there are no tests for CFB mode yet.  See\n \u003ccode\u003e\u003ca\u003eCrypto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Modes",
          "name": "Modes",
          "package": "crypto-api",
          "source": "src/Crypto-Modes.html",
          "type": "module"
        },
        "index": {
          "description": "Authors Thomas DuBuisson Generic mode implementations useable by any correct BlockCipher instance Be aware there are no tests for CFB mode yet See Crypto",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "Modes",
          "package": "crypto-api",
          "partial": "Modes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the cmac for lazy bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "cMac",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cMac",
          "type": "function"
        },
        "index": {
          "description": "Obtain the cmac for lazy bytestrings",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cMac",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the cmac for strict bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "cMac'",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cMac%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain the cmac for strict bytestrings",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cMac'",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac'",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Modes",
          "name": "cMacStar",
          "package": "crypto-api",
          "signature": "k -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cMacStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cMacStar",
          "normalized": "a-\u003e[ByteString]-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac Star",
          "signature": "k-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMacStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the CMAC* on strict bytestrings\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "cMacStar'",
          "package": "crypto-api",
          "signature": "k -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cMacStar%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain the CMAC on strict bytestrings",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cMacStar'",
          "normalized": "a-\u003e[ByteString]-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac Star'",
          "signature": "k-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cMacStar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining message authentication\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "cbcMac",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cbcMac",
          "type": "function"
        },
        "index": {
          "description": "Cipher block chaining message authentication",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cbcMac",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cbcMac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher block chaining message authentication\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "cbcMac'",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Modes.html#cbcMac%27",
          "type": "function"
        },
        "index": {
          "description": "Cipher block chaining message authentication",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "cbcMac'",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Mac'",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:cbcMac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform doubling as defined by the CMAC and SIV papers\n\u003c/p\u003e",
          "module": "Crypto.Modes",
          "name": "dblIV",
          "package": "crypto-api",
          "signature": "IV k -\u003e IV k",
          "source": "src/Crypto-Modes.html#dblIV",
          "type": "function"
        },
        "index": {
          "description": "Perform doubling as defined by the CMAC and SIV papers",
          "hierarchy": "Crypto Modes",
          "module": "Crypto.Modes",
          "name": "dblIV",
          "normalized": "IV a-\u003eIV a",
          "package": "crypto-api",
          "partial": "IV",
          "signature": "IV k-\u003eIV k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Modes.html#v:dblIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePKCS5 (RFC 1423) and IPSec ESP (RFC 4303)\npadding methods are implemented both as trivial functions operating on\nbytestrings and as \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e routines usable from the \u003ca\u003eData.Serialize\u003c/a\u003e\nmodule.  These methods do not work for algorithms or pad sizes in\nexcess of 255 bytes (2040 bits, so extremely large as far as cipher\nneeds are concerned).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Padding",
          "name": "Padding",
          "package": "crypto-api",
          "source": "src/Crypto-Padding.html",
          "type": "module"
        },
        "index": {
          "description": "PKCS5 RFC and IPSec ESP RFC padding methods are implemented both as trivial functions operating on bytestrings and as Put routines usable from the Data.Serialize module These methods do not work for algorithms or pad sizes in excess of bytes bits so extremely large as far as cipher needs are concerned",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "Padding",
          "package": "crypto-api",
          "partial": "Padding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePKCS5 (aka RFC1423) padding method using the BlockCipher instance\n to determine the pad size.\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "padBlockSize",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Padding.html#padBlockSize",
          "type": "function"
        },
        "index": {
          "description": "PKCS5 aka RFC1423 padding method using the BlockCipher instance to determine the pad size",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "padBlockSize",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "Block Size",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad a bytestring to the IPSEC esp specification\n\u003c/p\u003e\u003cpre\u003e padESP m payload\n\u003c/pre\u003e\u003cp\u003eis equivilent to:\n\u003c/p\u003e\u003cpre\u003e\n               (msg)       (padding)       (length field)\n     B.concat [payload, B.pack [1,2,3,4..], B.pack [padLen]]\n\u003c/pre\u003e\u003cp\u003eWhere:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the msg is any payload, including TFC.\n\u003c/li\u003e\u003cli\u003e the padding is \u003c= 255\n\u003c/li\u003e\u003cli\u003e the length field is one byte.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNotice the result bytesting length remainder \u003ccode\u003er\u003c/code\u003e equals zero.  The lack\n  of a \"next header\" field means this function is not directly useable for\n  an IPSec implementation (copy/paste the 4 line function and add in a\n  \"next header\" field if you are making IPSec ESP).\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "padESP",
          "package": "crypto-api",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Padding.html#padESP",
          "type": "function"
        },
        "index": {
          "description": "Pad bytestring to the IPSEC esp specification padESP payload is equivilent to msg padding length field B.concat payload B.pack B.pack padLen Where the msg is any payload including TFC the padding is the length field is one byte Notice the result bytesting length remainder equals zero The lack of next header field means this function is not directly useable for an IPSec implementation copy paste the line function and add in next header field if you are making IPSec ESP",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "padESP",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "ESP",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padESP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike padESP but use the BlockCipher instance to determine padding size\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "padESPBlockSize",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Padding.html#padESPBlockSize",
          "type": "function"
        },
        "index": {
          "description": "Like padESP but use the BlockCipher instance to determine padding size",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "padESPBlockSize",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "ESPBlock Size",
          "signature": "k-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padESPBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePKCS5 (aka RFC1423) padding method.\n This method will not work properly for pad modulos \u003e 256\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "padPKCS5",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Padding.html#padPKCS5",
          "type": "function"
        },
        "index": {
          "description": "PKCS5 aka RFC1423 padding method This method will not work properly for pad modulos",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "padPKCS5",
          "normalized": "ByteLength-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "PKCS",
          "signature": "ByteLength-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:padPKCS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad a bytestring to the IPSEC ESP specification using \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n This can reduce copying if you are already using \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "putPadESP",
          "package": "crypto-api",
          "signature": "Int -\u003e ByteString -\u003e Put",
          "source": "src/Crypto-Padding.html#putPadESP",
          "type": "function"
        },
        "index": {
          "description": "Pad bytestring to the IPSEC ESP specification using Put This can reduce copying if you are already using Put",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "putPadESP",
          "normalized": "Int-\u003eByteString-\u003ePut",
          "package": "crypto-api",
          "partial": "Pad ESP",
          "signature": "Int-\u003eByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPadESP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike putPadESP but using the BlockCipher instance to determine padding size\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "putPadESPBlockSize",
          "package": "crypto-api",
          "signature": "k -\u003e ByteString -\u003e Put",
          "source": "src/Crypto-Padding.html#putPadESPBlockSize",
          "type": "function"
        },
        "index": {
          "description": "Like putPadESP but using the BlockCipher instance to determine padding size",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "putPadESPBlockSize",
          "normalized": "a-\u003eByteString-\u003ePut",
          "package": "crypto-api",
          "partial": "Pad ESPBlock Size",
          "signature": "k-\u003eByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPadESPBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEx:\n\u003c/p\u003e\u003cpre\u003e\n     putPaddedPKCS5 m bs\n\u003c/pre\u003e\u003cp\u003eWill pad out \u003ccode\u003ebs\u003c/code\u003e to a byte multiple\n of \u003ccode\u003em\u003c/code\u003e and put both the bytestring and it's padding via \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e\n (this saves on copying if you are already using Cereal).\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "putPaddedPKCS5",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e ByteString -\u003e Put",
          "source": "src/Crypto-Padding.html#putPaddedPKCS5",
          "type": "function"
        },
        "index": {
          "description": "Ex putPaddedPKCS5 bs Will pad out bs to byte multiple of and put both the bytestring and it padding via Put this saves on copying if you are already using Cereal",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "putPaddedPKCS5",
          "normalized": "ByteLength-\u003eByteString-\u003ePut",
          "package": "crypto-api",
          "partial": "Padded PKCS",
          "signature": "ByteLength-\u003eByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:putPaddedPKCS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunpad and return the padded message (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned if the padding is invalid)\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "unpadESP",
          "package": "crypto-api",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Padding.html#unpadESP",
          "type": "function"
        },
        "index": {
          "description": "unpad and return the padded message Nothing is returned if the padding is invalid",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "unpadESP",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "ESP",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadESP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunpad a strict bytestring without checking the pad bytes and\n length any more than necessary.\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "unpadPKCS5",
          "package": "crypto-api",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Padding.html#unpadPKCS5",
          "type": "function"
        },
        "index": {
          "description": "unpad strict bytestring without checking the pad bytes and length any more than necessary",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "unpadPKCS5",
          "normalized": "ByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "PKCS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadPKCS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunpad a strict bytestring padded in the typical PKCS5 manner.\n This routine verifies all pad bytes and pad length match correctly.\n\u003c/p\u003e",
          "module": "Crypto.Padding",
          "name": "unpadPKCS5safe",
          "package": "crypto-api",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-Padding.html#unpadPKCS5safe",
          "type": "function"
        },
        "index": {
          "description": "unpad strict bytestring padded in the typical PKCS5 manner This routine verifies all pad bytes and pad length match correctly",
          "hierarchy": "Crypto Padding",
          "module": "Crypto.Padding",
          "name": "unpadPKCS5safe",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "crypto-api",
          "partial": "PKCS",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Padding.html#v:unpadPKCS5safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for instantiating cryptographicly strong\ndeterminitic random bit generators (DRBGs, aka PRNGs) For the simple\nuse case of using the system random number generator\n(\u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e) to seed the DRBG:\n\u003c/p\u003e\u003cpre\u003e   g \u003c- newGenIO\n\u003c/pre\u003e\u003cp\u003eUsers needing to provide their own entropy can call \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e directly\n\u003c/p\u003e\u003cpre\u003e    entropy \u003c- getEntropy nrBytes\n    let generator = newGen entropy\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Crypto.Random",
          "name": "Random",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for instantiating cryptographicly strong determinitic random bit generators DRBGs aka PRNGs For the simple use case of using the system random number generator Random to seed the DRBG newGenIO Users needing to provide their own entropy can call newGen directly entropy getEntropy nrBytes let generator newGen entropy",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "Random",
          "package": "crypto-api",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of random bit generators that allows for the possibility\n of failure, reseeding, providing entropy at the same time as\n requesting bytes\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egenBytes\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedInfo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereseedPeriod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "CryptoRandomGen",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#CryptoRandomGen",
          "type": "class"
        },
        "index": {
          "description": "class of random bit generators that allows for the possibility of failure reseeding providing entropy at the same time as requesting bytes Minimum complete definition newGen genSeedLength genBytes reseed reseedInfo reseedPeriod",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "CryptoRandomGen",
          "package": "crypto-api",
          "partial": "Crypto Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:CryptoRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator failures should always return the appropriate GenError.\n Note \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e in an instance of exception but wether or not an\n exception is thrown depends on if the selected generator (read:\n if you don't want execptions from code that uses \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e then\n pass in a generator that never has an error for the used functions)\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "GenError",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#GenError",
          "type": "data"
        },
        "index": {
          "description": "Generator failures should always return the appropriate GenError Note GenError in an instance of exception but wether or not an exception is thrown depends on if the selected generator read if you don want execptions from code that uses throw then pass in generator that never has an error for the used functions",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "GenError",
          "package": "crypto-api",
          "partial": "Gen Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:GenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random",
          "name": "ReseedInfo",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#ReseedInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "ReseedInfo",
          "package": "crypto-api",
          "partial": "Reseed Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:ReseedInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot that it is technically correct as an instance of\n \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e, but simply because it's a reasonable engineering\n choice here is a CryptoRandomGen which streams the system\n randoms. Take note:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It uses the default definition of \u003ccode\u003egenByteWithEntropy\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e will always fail!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereseed\u003c/a\u003e\u003c/code\u003e will always fail!\n\u003c/li\u003e\u003cli\u003e the handle to the system random is never closed\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Crypto.Random",
          "name": "SystemRandom",
          "package": "crypto-api",
          "source": "src/Crypto-Random.html#SystemRandom",
          "type": "data"
        },
        "index": {
          "description": "Not that it is technically correct as an instance of CryptoRandomGen but simply because it reasonable engineering choice here is CryptoRandomGen which streams the system randoms Take note It uses the default definition of genByteWithEntropy newGen will always fail reseed will always fail the handle to the system random is never closed",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "SystemRandom",
          "package": "crypto-api",
          "partial": "System Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#t:SystemRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egenBytes len g\u003c/code\u003e generates a random ByteString of length\n \u003ccode\u003elen\u003c/code\u003e and new generator.  The \u003ca\u003eMonadCryptoRandom\u003c/a\u003e package\n has routines useful for converting the ByteString to\n commonly needed values (but \u003ca\u003ecereal\u003c/a\u003e or other\n deserialization libraries would also work).\n\u003c/p\u003e\u003cp\u003eThis routine can fail if the generator has gone too long\n without a reseed (usually this is in the ball-park of 2^48\n requests).  Suggested error in this cases is \u003ccode\u003e\u003ca\u003eNeedReseed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "genBytes",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e g -\u003e Either GenError (ByteString, g)",
          "source": "src/Crypto-Random.html#genBytes",
          "type": "method"
        },
        "index": {
          "description": "genBytes len generates random ByteString of length len and new generator The MonadCryptoRandom package has routines useful for converting the ByteString to commonly needed values but cereal or other deserialization libraries would also work This routine can fail if the generator has gone too long without reseed usually this is in the ball-park of requests Suggested error in this cases is NeedReseed",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "genBytes",
          "normalized": "ByteLength-\u003ea-\u003eEither GenError(ByteString,a)",
          "package": "crypto-api",
          "partial": "Bytes",
          "signature": "ByteLength-\u003eg-\u003eEither GenError(ByteString,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egenBytesWithEntropy g i entropy\u003c/code\u003e generates \u003ccode\u003ei\u003c/code\u003e random\n bytes and use the additional input \u003ccode\u003eentropy\u003c/code\u003e in the\n generation of the requested data to increase the confidence\n our generated data is a secure random stream.\n\u003c/p\u003e\u003cp\u003eSome generators use \u003ccode\u003eentropy\u003c/code\u003e to perturb the state of the\n generator, meaning:\n\u003c/p\u003e\u003cpre\u003e\n     (_,g2') \u003c- genBytesWithEntropy len g1 ent\n     (_,g2 ) \u003c- genBytes len g1\n     g2 /= g2'\n\u003c/pre\u003e\u003cp\u003eBut this is not required.\n\u003c/p\u003e\u003cp\u003eDefault:\n\u003c/p\u003e\u003cpre\u003e\n     genBytesWithEntropy g bytes entropy = xor entropy (genBytes g bytes)\n\u003c/pre\u003e",
          "module": "Crypto.Random",
          "name": "genBytesWithEntropy",
          "package": "crypto-api",
          "signature": "ByteLength -\u003e ByteString -\u003e g -\u003e Either GenError (ByteString, g)",
          "source": "src/Crypto-Random.html#genBytesWithEntropy",
          "type": "method"
        },
        "index": {
          "description": "genBytesWithEntropy entropy generates random bytes and use the additional input entropy in the generation of the requested data to increase the confidence our generated data is secure random stream Some generators use entropy to perturb the state of the generator meaning g2 genBytesWithEntropy len g1 ent g2 genBytes len g1 g2 g2 But this is not required Default genBytesWithEntropy bytes entropy xor entropy genBytes bytes",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "genBytesWithEntropy",
          "normalized": "ByteLength-\u003eByteString-\u003ea-\u003eEither GenError(ByteString,a)",
          "package": "crypto-api",
          "partial": "Bytes With Entropy",
          "signature": "ByteLength-\u003eByteString-\u003eg-\u003eEither GenError(ByteString,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genBytesWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of input entropy necessary to instantiate or reseed\n a generator\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "genSeedLength",
          "package": "crypto-api",
          "signature": "Tagged g ByteLength",
          "source": "src/Crypto-Random.html#genSeedLength",
          "type": "method"
        },
        "index": {
          "description": "Length of input entropy necessary to instantiate or reseed generator",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "genSeedLength",
          "package": "crypto-api",
          "partial": "Seed Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:genSeedLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiate a new random bit generator.  The provided\n bytestring should be of length \u003e= genSeedLength.  If the\n bytestring is shorter then the call may fail (suggested\n error: \u003ccode\u003e\u003ca\u003eNotEnoughEntropy\u003c/a\u003e\u003c/code\u003e).  If the bytestring is of\n sufficent length the call should always succeed.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "newGen",
          "package": "crypto-api",
          "signature": "ByteString -\u003e Either GenError g",
          "source": "src/Crypto-Random.html#newGen",
          "type": "method"
        },
        "index": {
          "description": "Instantiate new random bit generator The provided bytestring should be of length genSeedLength If the bytestring is shorter then the call may fail suggested error NotEnoughEntropy If the bytestring is of sufficent length the call should always succeed",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "newGen",
          "normalized": "ByteString-\u003eEither GenError a",
          "package": "crypto-api",
          "partial": "Gen",
          "signature": "ByteString-\u003eEither GenError g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:newGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default this uses \u003ca\u003eSystem.Crypto.Random\u003c/a\u003e to obtain\n entropy for \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "newGenIO",
          "package": "crypto-api",
          "signature": "IO g",
          "source": "src/Crypto-Random.html#newGenIO",
          "type": "method"
        },
        "index": {
          "description": "By default this uses System.Crypto.Random to obtain entropy for newGen",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "newGenIO",
          "package": "crypto-api",
          "partial": "Gen IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:newGenIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the generator has produced too many random bytes on its\n existing seed it will return \u003ccode\u003e\u003ca\u003eNeedReseed\u003c/a\u003e\u003c/code\u003e.  In that case,\n reseed the generator using this function and a new\n high-entropy seed of length \u003e= \u003ccode\u003e\u003ca\u003egenSeedLength\u003c/a\u003e\u003c/code\u003e.  Using\n bytestrings that are too short can result in an error\n (\u003ccode\u003e\u003ca\u003eNotEnoughEntropy\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "reseed",
          "package": "crypto-api",
          "signature": "ByteString -\u003e g -\u003e Either GenError g",
          "source": "src/Crypto-Random.html#reseed",
          "type": "method"
        },
        "index": {
          "description": "If the generator has produced too many random bytes on its existing seed it will return NeedReseed In that case reseed the generator using this function and new high-entropy seed of length genSeedLength Using bytestrings that are too short can result in an error NotEnoughEntropy",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "reseed",
          "normalized": "ByteString-\u003ea-\u003eEither GenError a",
          "package": "crypto-api",
          "signature": "ByteString-\u003eg-\u003eEither GenError g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates how soon a reseed is needed\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "reseedInfo",
          "package": "crypto-api",
          "signature": "g -\u003e ReseedInfo",
          "source": "src/Crypto-Random.html#reseedInfo",
          "type": "method"
        },
        "index": {
          "description": "Indicates how soon reseed is needed",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "reseedInfo",
          "normalized": "a-\u003eReseedInfo",
          "package": "crypto-api",
          "partial": "Info",
          "signature": "g-\u003eReseedInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseedInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the period between reseeds (constant for most generators).\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "reseedPeriod",
          "package": "crypto-api",
          "signature": "g -\u003e ReseedInfo",
          "source": "src/Crypto-Random.html#reseedPeriod",
          "type": "method"
        },
        "index": {
          "description": "Indicates the period between reseeds constant for most generators",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "reseedPeriod",
          "normalized": "a-\u003eReseedInfo",
          "package": "crypto-api",
          "partial": "Period",
          "signature": "g-\u003eReseedInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:reseedPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile the safety and wisdom of a splitting function depends on the\n properties of the generator being split, several arguments from\n informed people indicate such a function is safe for NIST SP 800-90\n generators.  (see libraries@haskell.org discussion around Sept, Oct\n 2010).  You can find implementations of such generators in the \u003ccode\u003eDRBG\u003c/code\u003e\n package.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "splitGen",
          "package": "crypto-api",
          "signature": "g -\u003e Either GenError (g, g)",
          "source": "src/Crypto-Random.html#splitGen",
          "type": "function"
        },
        "index": {
          "description": "While the safety and wisdom of splitting function depends on the properties of the generator being split several arguments from informed people indicate such function is safe for NIST SP generators see libraries@haskell.org discussion around Sept Oct You can find implementations of such generators in the DRBG package",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "splitGen",
          "normalized": "a-\u003eEither GenError(a,a)",
          "package": "crypto-api",
          "partial": "Gen",
          "signature": "g-\u003eEither GenError(g,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:splitGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful utility to extract the result of a generator operation\n and translate error results to exceptions.\n\u003c/p\u003e",
          "module": "[\"Crypto.Random\",\"Crypto.Util\"]",
          "name": "throwLeft",
          "package": "crypto-api",
          "signature": "Either e a -\u003e a",
          "source": "src/Crypto-Util.html#throwLeft",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:throwLeft\",\"http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:throwLeft\"]"
        },
        "index": {
          "description": "Useful utility to extract the result of generator operation and translate error results to exceptions",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "throwLeft",
          "normalized": "Either a b-\u003eb",
          "package": "crypto-api",
          "partial": "Left",
          "signature": "Either e a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Random.html#v:throwLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType aliases used throughout the crypto-api modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Types",
          "name": "Types",
          "package": "crypto-api",
          "source": "src/Crypto-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Type aliases used throughout the crypto-api modules",
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "Types",
          "package": "crypto-api",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of a field (usually a ByteString) in bits\n\u003c/p\u003e",
          "module": "Crypto.Types",
          "name": "BitLength",
          "package": "crypto-api",
          "source": "src/Crypto-Types.html#BitLength",
          "type": "type"
        },
        "index": {
          "description": "The length of field usually ByteString in bits",
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "BitLength",
          "package": "crypto-api",
          "partial": "Bit Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:BitLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "BlockCipherError",
          "package": "crypto-api",
          "source": "src/Crypto-Types.html#BlockCipherError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "BlockCipherError",
          "package": "crypto-api",
          "partial": "Block Cipher Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:BlockCipherError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length fo a field in bytes.\n\u003c/p\u003e",
          "module": "Crypto.Types",
          "name": "ByteLength",
          "package": "crypto-api",
          "source": "src/Crypto-Types.html#ByteLength",
          "type": "type"
        },
        "index": {
          "description": "The length fo field in bytes",
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "ByteLength",
          "package": "crypto-api",
          "partial": "Byte Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:ByteLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitilization Vectors for BlockCipher implementations (IV k) are\n used for various modes and guarrenteed to be blockSize bits long.\n The common ways to obtain an IV are to generate one (\u003ccode\u003egetIV\u003c/code\u003e or\n \u003ccode\u003egetIVIO\u003c/code\u003e) or to use one provided with the ciphertext (using the\n \u003ccode\u003eSerialize\u003c/code\u003e instance of IV).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ezeroIV\u003c/code\u003e also exists and is of particular use for starting \u003ccode\u003ectr\u003c/code\u003e\n mode with a fresh key.\n\u003c/p\u003e",
          "module": "Crypto.Types",
          "name": "IV",
          "package": "crypto-api",
          "source": "src/Crypto-Types.html#IV",
          "type": "data"
        },
        "index": {
          "description": "Initilization Vectors for BlockCipher implementations IV are used for various modes and guarrenteed to be blockSize bits long The common ways to obtain an IV are to generate one getIV or getIVIO or to use one provided with the ciphertext using the Serialize instance of IV zeroIV also exists and is of particular use for starting ctr mode with fresh key",
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "IV",
          "package": "crypto-api",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "AuthenticationFailed",
          "package": "crypto-api",
          "signature": "AuthenticationFailed String",
          "source": "src/Crypto-Types.html#BlockCipherError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "AuthenticationFailed",
          "package": "crypto-api",
          "partial": "Authentication Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:AuthenticationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "IV",
          "package": "crypto-api",
          "signature": "IV",
          "source": "src/Crypto-Types.html#IV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "IV",
          "package": "crypto-api",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "InputTooLong",
          "package": "crypto-api",
          "signature": "InputTooLong String",
          "source": "src/Crypto-Types.html#BlockCipherError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "InputTooLong",
          "package": "crypto-api",
          "partial": "Input Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:InputTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "Other",
          "package": "crypto-api",
          "signature": "Other String",
          "source": "src/Crypto-Types.html#BlockCipherError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "Other",
          "package": "crypto-api",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Types",
          "name": "initializationVector",
          "package": "crypto-api",
          "signature": "ByteString",
          "source": "src/Crypto-Types.html#IV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Types",
          "module": "Crypto.Types",
          "name": "initializationVector",
          "package": "crypto-api",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Types.html#v:initializationVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small selection of utilities that might be of use to others working with bytestring/number combinations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Util",
          "name": "Util",
          "package": "crypto-api",
          "source": "src/Crypto-Util.html",
          "type": "module"
        },
        "index": {
          "description": "small selection of utilities that might be of use to others working with bytestring number combinations",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "Util",
          "package": "crypto-api",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e operator\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "(.::.)",
          "package": "crypto-api",
          "signature": "Tagged a b -\u003e a -\u003e b",
          "source": "src/Crypto-Util.html#.%3A%3A.",
          "type": "function"
        },
        "index": {
          "description": "Infix for operator",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "(.::.) .::.",
          "normalized": "Tagged a b-\u003ea-\u003eb",
          "package": "crypto-api",
          "signature": "Tagged a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:.::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to convert bytestrings to integers\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "bs2i",
          "package": "crypto-api",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Crypto-Util.html#bs2i",
          "type": "function"
        },
        "index": {
          "description": "Helper function to convert bytestrings to integers",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "bs2i",
          "normalized": "ByteString-\u003eInteger",
          "package": "crypto-api",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:bs2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Util",
          "name": "c_constTimeEq",
          "package": "crypto-api",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e CInt -\u003e IO CInt",
          "source": "src/Crypto-Util.html#c_constTimeEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "c_constTimeEq",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eCInt-\u003eIO CInt",
          "package": "crypto-api",
          "partial": "Time Eq",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:c_constTimeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Util",
          "name": "collect",
          "package": "crypto-api",
          "signature": "Int -\u003e [ByteString] -\u003e [ByteString]",
          "source": "src/Crypto-Util.html#collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "collect",
          "normalized": "Int-\u003e[ByteString]-\u003e[ByteString]",
          "package": "crypto-api",
          "signature": "Int-\u003e[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks two bytestrings for equality without breaches for\n timing attacks.\n\u003c/p\u003e\u003cp\u003eSemantically, \u003ccode\u003econstTimeEq = (==)\u003c/code\u003e.  However, \u003ccode\u003ex == y\u003c/code\u003e takes less\n time when the first byte is different than when the first byte\n is equal.  This side channel allows an attacker to mount a\n timing attack.  On the other hand, \u003ccode\u003econstTimeEq\u003c/code\u003e always takes the\n same time regardless of the bytestrings' contents, unless they are\n of difference size.\n\u003c/p\u003e\u003cp\u003eYou should always use \u003ccode\u003econstTimeEq\u003c/code\u003e when comparing secrets,\n otherwise you may leave a significant security hole\n (cf. \u003ca\u003ehttp://codahale.com/a-lesson-in-timing-attacks/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "constTimeEq",
          "package": "crypto-api",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-Util.html#constTimeEq",
          "type": "function"
        },
        "index": {
          "description": "Checks two bytestrings for equality without breaches for timing attacks Semantically constTimeEq However takes less time when the first byte is different than when the first byte is equal This side channel allows an attacker to mount timing attack On the other hand constTimeEq always takes the same time regardless of the bytestrings contents unless they are of difference size You should always use constTimeEq when comparing secrets otherwise you may leave significant security hole cf http codahale.com a-lesson-in-timing-attacks",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "constTimeEq",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "crypto-api",
          "partial": "Time Eq",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:constTimeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a tagged value for a particular instantiated type.\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "for",
          "package": "crypto-api",
          "signature": "Tagged a b -\u003e a -\u003e b",
          "source": "src/Crypto-Util.html#for",
          "type": "function"
        },
        "index": {
          "description": "Obtain tagged value for particular instantiated type",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "for",
          "normalized": "Tagged a b-\u003ea-\u003eb",
          "package": "crypto-api",
          "signature": "Tagged a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ei2bs bitLen i\u003c/code\u003e converts \u003ccode\u003ei\u003c/code\u003e to a \u003ccode\u003eByteString\u003c/code\u003e of \u003ccode\u003ebitLen\u003c/code\u003e bits (must be a multiple of 8).\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "i2bs",
          "package": "crypto-api",
          "signature": "Int -\u003e Integer -\u003e ByteString",
          "source": "src/Crypto-Util.html#i2bs",
          "type": "function"
        },
        "index": {
          "description": "i2bs bitLen converts to ByteString of bitLen bits must be multiple of",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "i2bs",
          "normalized": "Int-\u003eInteger-\u003eByteString",
          "package": "crypto-api",
          "signature": "Int-\u003eInteger-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:i2bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ei2bs_unsized i\u003c/code\u003e converts \u003ccode\u003ei\u003c/code\u003e to a \u003ccode\u003eByteString\u003c/code\u003e of sufficient bytes to express the integer.\n The integer must be non-negative and a zero will be encoded in one byte.\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "i2bs_unsized",
          "package": "crypto-api",
          "signature": "Integer -\u003e ByteString",
          "source": "src/Crypto-Util.html#i2bs_unsized",
          "type": "function"
        },
        "index": {
          "description": "i2bs unsized converts to ByteString of sufficient bytes to express the integer The integer must be non-negative and zero will be encoded in one byte",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "i2bs_unsized",
          "normalized": "Integer-\u003eByteString",
          "package": "crypto-api",
          "signature": "Integer-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:i2bs_unsized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eincBS bs\u003c/code\u003e inefficiently computes the value \u003ccode\u003ei2bs (8 * B.length bs) (bs2i bs + 1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "incBS",
          "package": "crypto-api",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Util.html#incBS",
          "type": "function"
        },
        "index": {
          "description": "incBS bs inefficiently computes the value i2bs B.length bs bs2i bs",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "incBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "crypto-api",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:incBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezipWith xor + Pack\n\u003c/p\u003e\u003cp\u003eThis is written intentionally to take advantage\n of the bytestring libraries \u003ccode\u003ezipWith'\u003c/code\u003e rewrite rule but at the\n extra cost of the resulting lazy bytestring being more fragmented\n than either of the two inputs.\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "zwp",
          "package": "crypto-api",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Util.html#zwp",
          "type": "function"
        },
        "index": {
          "description": "zipWith xor Pack This is written intentionally to take advantage of the bytestring libraries zipWith rewrite rule but at the extra cost of the resulting lazy bytestring being more fragmented than either of the two inputs",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "zwp",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:zwp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezipWith xor + Pack\n As a result of rewrite rules, this should automatically be\n optimized (at compile time). to use the bytestring libraries\n \u003ccode\u003ezipWith'\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Crypto.Util",
          "name": "zwp'",
          "package": "crypto-api",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Util.html#zwp%27",
          "type": "function"
        },
        "index": {
          "description": "zipWith xor Pack As result of rewrite rules this should automatically be optimized at compile time to use the bytestring libraries zipWith function",
          "hierarchy": "Crypto Util",
          "module": "Crypto.Util",
          "name": "zwp'",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "crypto-api",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-api/docs/Crypto-Util.html#v:zwp-39-"
      }
    }
  ]
]