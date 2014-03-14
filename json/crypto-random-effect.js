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
        "word": "crypto-random-effect"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn effect that can generate random bytes.\n\u003c/p\u003e\u003cp\u003eIt is essentially a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad with a given \u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Random.Effect",
          "name": "Effect",
          "package": "crypto-random-effect",
          "source": "src/Crypto-Random-Effect.html",
          "type": "module"
        },
        "index": {
          "description": "An effect that can generate random bytes It is essentially State monad with given CPRG",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "Effect",
          "package": "crypto-random-effect",
          "partial": "Effect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "CPRG",
          "package": "crypto-random-effect",
          "type": "class"
        },
        "index": {
          "description": "Cryptographic Pseudo Random Generator",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "CPRG",
          "package": "crypto-random-effect",
          "partial": "CPRG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:CPRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePool of Entropy. contains a self mutating pool of entropy,\n that is always guarantee to contains data.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "EntropyPool",
          "package": "crypto-random-effect",
          "type": "data"
        },
        "index": {
          "description": "Pool of Entropy contains self mutating pool of entropy that is always guarantee to contains data",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "EntropyPool",
          "package": "crypto-random-effect",
          "partial": "Entropy Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:EntropyPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType marker to ensure that there is only one RNG.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "RNG",
          "package": "crypto-random-effect",
          "source": "src/Crypto-Random-Effect.html#RNG",
          "type": "data"
        },
        "index": {
          "description": "Type marker to ensure that there is only one RNG",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "RNG",
          "package": "crypto-random-effect",
          "partial": "RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:RNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSystem entropy generator.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't use the entropy reseed level, as the only bytes\n generated are comping from the entropy pool already.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't create reproducible output, and might be difficult to\n use for testing and debugging purpose, but otherwise for real world use case\n should be fine.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "SystemRNG",
          "package": "crypto-random-effect",
          "type": "data"
        },
        "index": {
          "description": "System entropy generator This generator doesn use the entropy reseed level as the only bytes generated are comping from the entropy pool already This generator doesn create reproducible output and might be difficult to use for testing and debugging purpose but otherwise for real world use case should be fine",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "SystemRNG",
          "package": "crypto-random-effect",
          "partial": "System RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#t:SystemRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.Effect",
          "name": "createEntropyPool",
          "package": "crypto-random-effect",
          "signature": "Eff r EntropyPool",
          "source": "src/Crypto-Random-Effect.html#createEntropyPool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "createEntropyPool",
          "package": "crypto-random-effect",
          "partial": "Entropy Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:createEntropyPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "grabEntropy",
          "package": "crypto-random-effect",
          "signature": "Int -\u003e Eff r SecureMem",
          "source": "src/Crypto-Random-Effect.html#grabEntropy",
          "type": "function"
        },
        "index": {
          "description": "Grab chunk of entropy from the entropy pool",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "grabEntropy",
          "normalized": "Int-\u003eEff a SecureMem",
          "package": "crypto-random-effect",
          "partial": "Entropy",
          "signature": "Int-\u003eEff r SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:grabEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a number of bytes using the CPRG.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "randomBytes",
          "package": "crypto-random-effect",
          "signature": "Int -\u003e Eff r ByteString",
          "source": "src/Crypto-Random-Effect.html#randomBytes",
          "type": "function"
        },
        "index": {
          "description": "Generate number of bytes using the CPRG",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "randomBytes",
          "normalized": "Int-\u003eEff a ByteString",
          "package": "crypto-random-effect",
          "partial": "Bytes",
          "signature": "Int-\u003eEff r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:randomBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erandomBytes\u003c/a\u003e\u003c/code\u003e except that the random data is mixed with pure\n entropy, so the result is not reproducible after use, but it provides\n more guarantee, theorically speaking, in term of the randomness\n generated.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "randomBytesWithEntropy",
          "package": "crypto-random-effect",
          "signature": "Int -\u003e Eff r ByteString",
          "source": "src/Crypto-Random-Effect.html#randomBytesWithEntropy",
          "type": "function"
        },
        "index": {
          "description": "Similar to randomBytes except that the random data is mixed with pure entropy so the result is not reproducible after use but it provides more guarantee theorically speaking in term of the randomness generated",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "randomBytesWithEntropy",
          "normalized": "Int-\u003eEff a ByteString",
          "package": "crypto-random-effect",
          "partial": "Bytes With Entropy",
          "signature": "Int-\u003eEff r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:randomBytesWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a CPRG into a new independent CPRG.\n\u003c/p\u003e\u003cp\u003eAs entropy is mixed to generate safely a new generator, 2 calls with the\n same CPRG will not produce the same output.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "rngFork",
          "package": "crypto-random-effect",
          "signature": "Eff r gen",
          "source": "src/Crypto-Random-Effect.html#rngFork",
          "type": "function"
        },
        "index": {
          "description": "Fork CPRG into new independent CPRG As entropy is mixed to generate safely new generator calls with the same CPRG will not produce the same output",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "rngFork",
          "package": "crypto-random-effect",
          "partial": "Fork",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:rngFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the effect without specifying the \u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is only useful when the type of the \u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e is bound by an explicit\n type annotation (see \u003ccode\u003e\u003ca\u003erunSystemRNG\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003erunRNG\u003c/a\u003e\u003c/code\u003e with bound type)\n or any function within the effect binds it.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "runRNG",
          "package": "crypto-random-effect",
          "signature": "Eff (State gen :\u003e (Reader EntropyPool :\u003e r)) a -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#runRNG",
          "type": "function"
        },
        "index": {
          "description": "Run the effect without specifying the CPRG This is only useful when the type of the CPRG is bound by an explicit type annotation see runSystemRNG which is runRNG with bound type or any function within the effect binds it",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "runRNG",
          "normalized": "Eff(State a(Reader EntropyPool b))c-\u003eEff b c",
          "package": "crypto-random-effect",
          "partial": "RNG",
          "signature": "Eff(State gen(Reader EntropyPool r))a-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:runRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the effect with a given \u003ccode\u003e\u003ca\u003eEntropyPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "runRNGWithPool",
          "package": "crypto-random-effect",
          "signature": "EntropyPool -\u003e Eff (State gen :\u003e (Reader EntropyPool :\u003e r)) a -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#runRNGWithPool",
          "type": "function"
        },
        "index": {
          "description": "Run the effect with given EntropyPool",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "runRNGWithPool",
          "normalized": "EntropyPool-\u003eEff(State a(Reader EntropyPool b))c-\u003eEff b c",
          "package": "crypto-random-effect",
          "partial": "RNGWith Pool",
          "signature": "EntropyPool-\u003eEff(State gen(Reader EntropyPool r))a-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:runRNGWithPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the effect using \u003ccode\u003e\u003ca\u003eSystemRNG\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "runSystemRNG",
          "package": "crypto-random-effect",
          "signature": "Eff (State SystemRNG :\u003e (Reader EntropyPool :\u003e r)) a -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#runSystemRNG",
          "type": "function"
        },
        "index": {
          "description": "Run the effect using SystemRNG",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "runSystemRNG",
          "normalized": "Eff(State SystemRNG(Reader EntropyPool a))b-\u003eEff a b",
          "package": "crypto-random-effect",
          "partial": "System RNG",
          "signature": "Eff(State SystemRNG(Reader EntropyPool r))a-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:runSystemRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e\u003cp\u003eBeware: uses unsafePerformIO under the hood.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "unsafeGrabEntropy",
          "package": "crypto-random-effect",
          "signature": "Int -\u003e Eff r SecureMem",
          "source": "src/Crypto-Random-Effect.html#unsafeGrabEntropy",
          "type": "function"
        },
        "index": {
          "description": "Grab chunk of entropy from the entropy pool Beware uses unsafePerformIO under the hood",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "unsafeGrabEntropy",
          "normalized": "Int-\u003eEff a SecureMem",
          "package": "crypto-random-effect",
          "partial": "Grab Entropy",
          "signature": "Int-\u003eEff r SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:unsafeGrabEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an effect that uses the \u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "withRNG",
          "package": "crypto-random-effect",
          "signature": "(gen -\u003e Eff r (a, gen)) -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#withRNG",
          "type": "function"
        },
        "index": {
          "description": "Wrap an effect that uses the CPRG directly",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "withRNG",
          "normalized": "(a-\u003eEff b(c,a))-\u003eEff b c",
          "package": "crypto-random-effect",
          "partial": "RNG",
          "signature": "(gen-\u003eEff r(a,gen))-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an IO action that uses the \u003ccode\u003e\u003ca\u003eCPRG\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Crypto.Random.Effect",
          "name": "withRNGIO",
          "package": "crypto-random-effect",
          "signature": "(gen -\u003e IO (a, gen)) -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#withRNGIO",
          "type": "function"
        },
        "index": {
          "description": "Wrap an IO action that uses the CPRG directly",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "withRNGIO",
          "normalized": "(a-\u003eIO(b,a))-\u003eEff c b",
          "package": "crypto-random-effect",
          "partial": "RNGIO",
          "signature": "(gen-\u003eIO(a,gen))-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRNGIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a number of random bytes with a pure function.\n\u003c/p\u003e\u003cp\u003eNote, that this is simply\n\u003c/p\u003e\u003cpre\u003e randomBytes cnt \u003e\u003e= return . f\n\u003c/pre\u003e",
          "module": "Crypto.Random.Effect",
          "name": "withRandomBytes",
          "package": "crypto-random-effect",
          "signature": "Int -\u003e (ByteString -\u003e a) -\u003e Eff r a",
          "source": "src/Crypto-Random-Effect.html#withRandomBytes",
          "type": "function"
        },
        "index": {
          "description": "Consume number of random bytes with pure function Note that this is simply randomBytes cnt return",
          "hierarchy": "Crypto Random Effect",
          "module": "Crypto.Random.Effect",
          "name": "withRandomBytes",
          "normalized": "Int-\u003e(ByteString-\u003ea)-\u003eEff b a",
          "package": "crypto-random-effect",
          "partial": "Random Bytes",
          "signature": "Int-\u003e(ByteString-\u003ea)-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-effect/docs/Crypto-Random-Effect.html#v:withRandomBytes"
      }
    }
  ]
]