[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Random effect.\n\u003c/p\u003e\u003cp\u003eAny ideas to let the user specify the random number generator (\u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e)\n instead of hardcoding \u003ccode\u003e\u003ca\u003eSystemRNG\u003c/a\u003e\u003c/code\u003e without complicating the api and\n reinventing state as \u003ccode\u003e\u003ca\u003eSetMember\u003c/a\u003e\u003c/code\u003e is very welcome.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random-Effect.html",
        "fct-type": "module",
        "title": "Effect"
      },
      "index": {
        "description": "Random effect Any ideas to let the user specify the random number generator CPRG instead of hardcoding SystemRNG without complicating the api and reinventing state as SetMember is very welcome",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "Effect",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "Effect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:CPRG",
      "description": {
        "fct-descr": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "CPRG"
      },
      "index": {
        "description": "Cryptographic Pseudo Random Generator",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "CPRG",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "CPRG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:EntropyPool",
      "description": {
        "fct-descr": "\u003cp\u003ePool of Entropy. contains a self mutating pool of entropy,\n that is always guarantee to contains data.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "EntropyPool"
      },
      "index": {
        "description": "Pool of Entropy contains self mutating pool of entropy that is always guarantee to contains data",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "EntropyPool",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "Entropy Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:RNG",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "type",
        "fct-source": "src/Crypto-Random-Effect.html#RNG",
        "fct-type": "type",
        "title": "RNG"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "RNG",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:SystemRNG",
      "description": {
        "fct-descr": "\u003cp\u003eSystem entropy generator.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't use the entropy reseed level, as the only bytes\n generated are comping from the entropy pool already.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't create reproducible output, and might be difficult to\n use for testing and debugging purpose, but otherwise for real world use case\n should be fine.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SystemRNG"
      },
      "index": {
        "description": "System entropy generator This generator doesn use the entropy reseed level as the only bytes generated are comping from the entropy pool already This generator doesn create reproducible output and might be difficult to use for testing and debugging purpose but otherwise for real world use case should be fine",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "SystemRNG",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "System RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:createEntropyPool",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Eff r EntropyPool",
        "fct-source": "src/Crypto-Random-Effect.html#createEntropyPool",
        "fct-type": "function",
        "title": "createEntropyPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "createEntropyPool",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "Entropy Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:grabEntropy",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Int -\u003e Eff r SecureMem",
        "fct-source": "src/Crypto-Random-Effect.html#grabEntropy",
        "fct-type": "function",
        "title": "grabEntropy"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "grabEntropy",
        "normalized": "Int-\u003eEff a SecureMem",
        "package": "crypto-random-effect",
        "partial": "Entropy",
        "signature": "Int-\u003eEff r SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:randomBytes",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Int -\u003e Eff r ByteString",
        "fct-source": "src/Crypto-Random-Effect.html#randomBytes",
        "fct-type": "function",
        "title": "randomBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "randomBytes",
        "normalized": "Int-\u003eEff a ByteString",
        "package": "crypto-random-effect",
        "partial": "Bytes",
        "signature": "Int-\u003eEff r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:randomBytesWithEntropy",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Int -\u003e Eff r ByteString",
        "fct-source": "src/Crypto-Random-Effect.html#randomBytesWithEntropy",
        "fct-type": "function",
        "title": "randomBytesWithEntropy"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "randomBytesWithEntropy",
        "normalized": "Int-\u003eEff a ByteString",
        "package": "crypto-random-effect",
        "partial": "Bytes With Entropy",
        "signature": "Int-\u003eEff r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:rngFork",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Eff r SystemRNG",
        "fct-source": "src/Crypto-Random-Effect.html#rngFork",
        "fct-type": "function",
        "title": "rngFork"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "rngFork",
        "normalized": "",
        "package": "crypto-random-effect",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:runRNG",
      "description": {
        "fct-descr": "\u003cp\u003eRun the effect.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Eff (RNG :\u003e (Reader EntropyPool :\u003e r)) a -\u003e Eff r a",
        "fct-source": "src/Crypto-Random-Effect.html#runRNG",
        "fct-type": "function",
        "title": "runRNG"
      },
      "index": {
        "description": "Run the effect",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "runRNG",
        "normalized": "Eff(RNG(Reader EntropyPool a))b-\u003eEff a b",
        "package": "crypto-random-effect",
        "partial": "RNG",
        "signature": "Eff(RNG(Reader EntropyPool r))a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:runRNGWithPool",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "EntropyPool -\u003e Eff (RNG :\u003e (Reader EntropyPool :\u003e r)) a -\u003e Eff r a",
        "fct-source": "src/Crypto-Random-Effect.html#runRNGWithPool",
        "fct-type": "function",
        "title": "runRNGWithPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "runRNGWithPool",
        "normalized": "EntropyPool-\u003eEff(RNG(Reader EntropyPool a))b-\u003eEff a b",
        "package": "crypto-random-effect",
        "partial": "RNGWith Pool",
        "signature": "EntropyPool-\u003eEff(RNG(Reader EntropyPool r))a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:unsafeGrabEntropy",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Int -\u003e Eff r SecureMem",
        "fct-source": "src/Crypto-Random-Effect.html#unsafeGrabEntropy",
        "fct-type": "function",
        "title": "unsafeGrabEntropy"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "unsafeGrabEntropy",
        "normalized": "Int-\u003eEff a SecureMem",
        "package": "crypto-random-effect",
        "partial": "Grab Entropy",
        "signature": "Int-\u003eEff r SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRNG",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "(SystemRNG -\u003e Eff r (a, SystemRNG)) -\u003e Eff r a",
        "fct-source": "src/Crypto-Random-Effect.html#withRNG",
        "fct-type": "function",
        "title": "withRNG"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "withRNG",
        "normalized": "(SystemRNG-\u003eEff a(b,SystemRNG))-\u003eEff a b",
        "package": "crypto-random-effect",
        "partial": "RNG",
        "signature": "(SystemRNG-\u003eEff r(a,SystemRNG))-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRNGIO",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "(SystemRNG -\u003e IO (a, SystemRNG)) -\u003e Eff r a",
        "fct-source": "src/Crypto-Random-Effect.html#withRNGIO",
        "fct-type": "function",
        "title": "withRNGIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "withRNGIO",
        "normalized": "(SystemRNG-\u003eIO(a,SystemRNG))-\u003eEff b a",
        "package": "crypto-random-effect",
        "partial": "RNGIO",
        "signature": "(SystemRNG-\u003eIO(a,SystemRNG))-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRandomBytes",
      "description": {
        "fct-module": "Crypto.Random.Effect",
        "fct-package": "crypto-random-effect",
        "fct-signature": "Int -\u003e (ByteString -\u003e Eff r a) -\u003e Eff r a",
        "fct-source": "src/Crypto-Random-Effect.html#withRandomBytes",
        "fct-type": "function",
        "title": "withRandomBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Effect",
        "module": "Crypto.Random.Effect",
        "name": "withRandomBytes",
        "normalized": "Int-\u003e(ByteString-\u003eEff a b)-\u003eEff a b",
        "package": "crypto-random-effect",
        "partial": "Random Bytes",
        "signature": "Int-\u003e(ByteString-\u003eEff r a)-\u003eEff r a"
      }
    }
  }
]