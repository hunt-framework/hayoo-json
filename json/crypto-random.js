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
        "word": "crypto-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeprecated interface for compatibility of crypto-random-api user\n with crypto-random\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Random.API",
          "name": "API",
          "package": "crypto-random",
          "source": "src/Crypto-Random-API.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated interface for compatibility of crypto-random-api user with crypto-random",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "API",
          "package": "crypto-random",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "CPRG",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Generator.html#CPRG",
          "type": "class"
        },
        "index": {
          "description": "Cryptographic Pseudo Random Generator",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "CPRG",
          "package": "crypto-random",
          "partial": "CPRG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#t:CPRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new CPRG using an object of the CryptoGenerator class\n and with an explicit reference to an EntropyPool.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgCreate",
          "package": "crypto-random",
          "signature": "EntropyPool -\u003e gen",
          "source": "src/Crypto-Random-Generator.html#cprgCreate",
          "type": "method"
        },
        "index": {
          "description": "Create new CPRG using an object of the CryptoGenerator class and with an explicit reference to an EntropyPool",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgCreate",
          "normalized": "EntropyPool-\u003ea",
          "package": "crypto-random",
          "partial": "Create",
          "signature": "EntropyPool-\u003egen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a CPRG into a new independent CPRG.\n\u003c/p\u003e\u003cp\u003eAs entropy is mixed to generate safely a new generator,\n 2 calls with the same CPRG will not produce the same output.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgFork",
          "package": "crypto-random",
          "signature": "gen -\u003e (gen, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgFork",
          "type": "method"
        },
        "index": {
          "description": "Fork CPRG into new independent CPRG As entropy is mixed to generate safely new generator calls with the same CPRG will not produce the same output",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgFork",
          "normalized": "a-\u003e(a,a)",
          "package": "crypto-random",
          "partial": "Fork",
          "signature": "gen-\u003e(gen,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bytes using the CPRG and the number specified.\n\u003c/p\u003e\u003cp\u003eFor user of the API, it's recommended to use genRandomBytes\n instead of this method directly. the CPRG need to be able\n to supply at minimum 2^20 bytes at a time.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgGenBytes",
          "package": "crypto-random",
          "signature": "Int -\u003e g -\u003e (ByteString, g)",
          "source": "src/Crypto-Random-API.html#cprgGenBytes",
          "type": "function"
        },
        "index": {
          "description": "Generate bytes using the CPRG and the number specified For user of the API it recommended to use genRandomBytes instead of this method directly the CPRG need to be able to supply at minimum bytes at time",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgGenBytes",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Gen Bytes",
          "signature": "Int-\u003eg-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a number of bytes using the CPRG.\n\u003c/p\u003e\u003cp\u003eGiven one CPRG, the generated bytes will always be the same.\n\u003c/p\u003e\u003cp\u003eHowever the returned CPRG might have been reseeded with entropy bits,\n so 2 calls with the same CPRG will not necessarily result in the same next CPRG.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgGenerate",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e (ByteString, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgGenerate",
          "type": "method"
        },
        "index": {
          "description": "Generate number of bytes using the CPRG Given one CPRG the generated bytes will always be the same However the returned CPRG might have been reseeded with entropy bits so calls with the same CPRG will not necessarily result in the same next CPRG",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgGenerate",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Generate",
          "signature": "Int-\u003egen-\u003e(ByteString,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to cprgGenerate except that the random data is mixed with pure entropy,\n so the result is not reproducible after use, but it provides more guarantee,\n theorically speaking, in term of the randomness generated.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgGenerateWithEntropy",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e (ByteString, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgGenerateWithEntropy",
          "type": "method"
        },
        "index": {
          "description": "Similar to cprgGenerate except that the random data is mixed with pure entropy so the result is not reproducible after use but it provides more guarantee theorically speaking in term of the randomness generated",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgGenerateWithEntropy",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Generate With Entropy",
          "signature": "Int-\u003egen-\u003e(ByteString,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenerateWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the ability to set a threshold of byte generated that after\n being exceeded will result in a reseed with some stateful entropy\n after a call to \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf this threshold is exceeded during the set operation, the\n rng should be reseeded here.\n\u003c/p\u003e\u003cp\u003eIf this value is set to 0, no reseeding will be done and the\n output will be completely predicable. This is not a recommended\n level except for debugging and testing purpose.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgSetReseedThreshold",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e gen",
          "source": "src/Crypto-Random-Generator.html#cprgSetReseedThreshold",
          "type": "method"
        },
        "index": {
          "description": "Give the ability to set threshold of byte generated that after being exceeded will result in reseed with some stateful entropy after call to cprgGenerate If this threshold is exceeded during the set operation the rng should be reseeded here If this value is set to no reseeding will be done and the output will be completely predicable This is not recommended level except for debugging and testing purpose",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgSetReseedThreshold",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "crypto-random",
          "partial": "Set Reseed Threshold",
          "signature": "Int-\u003egen-\u003egen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgSetReseedThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use cprgGenerate from Crypto.Random instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eIf the number of bytes requested is really high,\n it's preferable to use \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e for better memory efficiency.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes",
          "package": "crypto-random",
          "signature": "Int-\u003e g-\u003e (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use cprgGenerate from Crypto.Random instead Generate bytes using the cprg in parameter If the number of bytes requested is really high it preferable to use genRandomBytes for better memory efficiency",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Random Bytes",
          "signature": "Int-\u003eg-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:genRandomBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eThis is not tail recursive and an excessive len (\u003e= 2^29) parameter would\n result in stack overflow.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes'",
          "package": "crypto-random",
          "signature": "Int-\u003e g-\u003e ([ByteString], g)",
          "type": "function"
        },
        "index": {
          "description": "Generate bytes using the cprg in parameter This is not tail recursive and an excessive len parameter would result in stack overflow",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes'",
          "normalized": "Int-\u003ea-\u003e([ByteString],a)",
          "package": "crypto-random",
          "partial": "Random Bytes'",
          "signature": "Int-\u003eg-\u003e([ByteString],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:genRandomBytes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate \u003ccode\u003elen random bytes and mapped the bytes to the function \u003c/code\u003ef.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to use Control.Arrow \u003ccode\u003efirst\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Crypto.Random.API\",\"Crypto.Random\"]",
          "name": "withRandomBytes",
          "package": "crypto-random",
          "signature": "g -\u003e Int -\u003e (ByteString -\u003e a) -\u003e (a, g)",
          "source": "src/Crypto-Random.html#withRandomBytes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:withRandomBytes\",\"http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:withRandomBytes\"]"
        },
        "index": {
          "description": "generate len random bytes and mapped the bytes to the function This is equivalent to use Control.Arrow first with cprgGenerate",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "withRandomBytes",
          "normalized": "a-\u003eInt-\u003e(ByteString-\u003eb)-\u003e(b,a)",
          "package": "crypto-random",
          "partial": "Random Bytes",
          "signature": "g-\u003eInt-\u003e(ByteString-\u003ea)-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:withRandomBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide way to test usual simple statisticals test for randomness\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Random.Test",
          "name": "Test",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Test.html",
          "type": "module"
        },
        "index": {
          "description": "Provide way to test usual simple statisticals test for randomness",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "Test",
          "package": "crypto-random",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomness various result relative to random bytes\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "RandomTestResult",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "data"
        },
        "index": {
          "description": "Randomness various result relative to random bytes",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "RandomTestResult",
          "package": "crypto-random",
          "partial": "Random Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#t:RandomTestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable random test State\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "RandomTestState",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Test.html#RandomTestState",
          "type": "data"
        },
        "index": {
          "description": "Mutable random test State",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "RandomTestState",
          "package": "crypto-random",
          "partial": "Random Test State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#t:RandomTestState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.Test",
          "name": "RandomTestResult",
          "package": "crypto-random",
          "signature": "RandomTestResult",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "RandomTestResult",
          "package": "crypto-random",
          "partial": "Random Test Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:RandomTestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend random data to the test state\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "randomTestAppend",
          "package": "crypto-random",
          "signature": "RandomTestState -\u003e ByteString -\u003e IO ()",
          "source": "src/Crypto-Random-Test.html#randomTestAppend",
          "type": "function"
        },
        "index": {
          "description": "Append random data to the test state",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "randomTestAppend",
          "normalized": "RandomTestState-\u003eByteString-\u003eIO()",
          "package": "crypto-random",
          "partial": "Test Append",
          "signature": "RandomTestState-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize random test state into some result\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "randomTestFinalize",
          "package": "crypto-random",
          "signature": "RandomTestState -\u003e IO RandomTestResult",
          "source": "src/Crypto-Random-Test.html#randomTestFinalize",
          "type": "function"
        },
        "index": {
          "description": "Finalize random test state into some result",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "randomTestFinalize",
          "normalized": "RandomTestState-\u003eIO RandomTestResult",
          "package": "crypto-random",
          "partial": "Test Finalize",
          "signature": "RandomTestState-\u003eIO RandomTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize new state to run tests\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "randomTestInitialize",
          "package": "crypto-random",
          "signature": "IO RandomTestState",
          "source": "src/Crypto-Random-Test.html#randomTestInitialize",
          "type": "function"
        },
        "index": {
          "description": "Initialize new state to run tests",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "randomTestInitialize",
          "package": "crypto-random",
          "partial": "Test Initialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestInitialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChi Square\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_chi_square",
          "package": "crypto-random",
          "signature": "Double",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Chi Square",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_chi_square",
          "package": "crypto-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_chi_square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheorical Compression percent\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_compressionPercent",
          "package": "crypto-random",
          "signature": "Double",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Theorical Compression percent",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_compressionPercent",
          "package": "crypto-random",
          "partial": "Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_compressionPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntropy per byte\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_entropy",
          "package": "crypto-random",
          "signature": "Double",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Entropy per byte",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_entropy",
          "package": "crypto-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic Mean\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_mean",
          "package": "crypto-random",
          "signature": "Double",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic Mean",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_mean",
          "package": "crypto-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of every bucket\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_probs",
          "package": "crypto-random",
          "signature": "[Double]",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Probability of every bucket",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_probs",
          "normalized": "[Double]",
          "package": "crypto-random",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_probs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of characters\n\u003c/p\u003e",
          "module": "Crypto.Random.Test",
          "name": "res_totalChars",
          "package": "crypto-random",
          "signature": "Word64",
          "source": "src/Crypto-Random-Test.html#RandomTestResult",
          "type": "function"
        },
        "index": {
          "description": "Total number of characters",
          "hierarchy": "Crypto Random Test",
          "module": "Crypto.Random.Test",
          "name": "res_totalChars",
          "package": "crypto-random",
          "partial": "Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_totalChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a safe abstraction for cryptographic pseudo\n random generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Random",
          "name": "Random",
          "package": "crypto-random",
          "source": "src/Crypto-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Provide safe abstraction for cryptographic pseudo random generator",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "Random",
          "package": "crypto-random",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "CPRG",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Generator.html#CPRG",
          "type": "class"
        },
        "index": {
          "description": "Cryptographic Pseudo Random Generator",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "CPRG",
          "package": "crypto-random",
          "partial": "CPRG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:CPRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePool of Entropy. contains a self mutating pool of entropy,\n that is always guarantee to contains data.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "EntropyPool",
          "package": "crypto-random",
          "source": "src/Crypto-Random-Entropy.html#EntropyPool",
          "type": "data"
        },
        "index": {
          "description": "Pool of Entropy contains self mutating pool of entropy that is always guarantee to contains data",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "EntropyPool",
          "package": "crypto-random",
          "partial": "Entropy Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:EntropyPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSystem entropy generator.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't use the entropy reseed level, as the only bytes\n generated are comping from the entropy pool already.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't create reproducible output, and might be difficult to\n use for testing and debugging purpose, but otherwise for real world use case\n should be fine.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "SystemRNG",
          "package": "crypto-random",
          "source": "src/Crypto-Random.html#SystemRNG",
          "type": "data"
        },
        "index": {
          "description": "System entropy generator This generator doesn use the entropy reseed level as the only bytes generated are comping from the entropy pool already This generator doesn create reproducible output and might be difficult to use for testing and debugging purpose but otherwise for real world use case should be fine",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "SystemRNG",
          "package": "crypto-random",
          "partial": "System RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:SystemRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new CPRG using an object of the CryptoGenerator class\n and with an explicit reference to an EntropyPool.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "cprgCreate",
          "package": "crypto-random",
          "signature": "EntropyPool -\u003e gen",
          "source": "src/Crypto-Random-Generator.html#cprgCreate",
          "type": "method"
        },
        "index": {
          "description": "Create new CPRG using an object of the CryptoGenerator class and with an explicit reference to an EntropyPool",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "cprgCreate",
          "normalized": "EntropyPool-\u003ea",
          "package": "crypto-random",
          "partial": "Create",
          "signature": "EntropyPool-\u003egen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a CPRG into a new independent CPRG.\n\u003c/p\u003e\u003cp\u003eAs entropy is mixed to generate safely a new generator,\n 2 calls with the same CPRG will not produce the same output.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "cprgFork",
          "package": "crypto-random",
          "signature": "gen -\u003e (gen, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgFork",
          "type": "method"
        },
        "index": {
          "description": "Fork CPRG into new independent CPRG As entropy is mixed to generate safely new generator calls with the same CPRG will not produce the same output",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "cprgFork",
          "normalized": "a-\u003e(a,a)",
          "package": "crypto-random",
          "partial": "Fork",
          "signature": "gen-\u003e(gen,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a number of bytes using the CPRG.\n\u003c/p\u003e\u003cp\u003eGiven one CPRG, the generated bytes will always be the same.\n\u003c/p\u003e\u003cp\u003eHowever the returned CPRG might have been reseeded with entropy bits,\n so 2 calls with the same CPRG will not necessarily result in the same next CPRG.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "cprgGenerate",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e (ByteString, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgGenerate",
          "type": "method"
        },
        "index": {
          "description": "Generate number of bytes using the CPRG Given one CPRG the generated bytes will always be the same However the returned CPRG might have been reseeded with entropy bits so calls with the same CPRG will not necessarily result in the same next CPRG",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "cprgGenerate",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Generate",
          "signature": "Int-\u003egen-\u003e(ByteString,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to cprgGenerate except that the random data is mixed with pure entropy,\n so the result is not reproducible after use, but it provides more guarantee,\n theorically speaking, in term of the randomness generated.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "cprgGenerateWithEntropy",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e (ByteString, gen)",
          "source": "src/Crypto-Random-Generator.html#cprgGenerateWithEntropy",
          "type": "method"
        },
        "index": {
          "description": "Similar to cprgGenerate except that the random data is mixed with pure entropy so the result is not reproducible after use but it provides more guarantee theorically speaking in term of the randomness generated",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "cprgGenerateWithEntropy",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random",
          "partial": "Generate With Entropy",
          "signature": "Int-\u003egen-\u003e(ByteString,gen)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgGenerateWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the ability to set a threshold of byte generated that after\n being exceeded will result in a reseed with some stateful entropy\n after a call to \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf this threshold is exceeded during the set operation, the\n rng should be reseeded here.\n\u003c/p\u003e\u003cp\u003eIf this value is set to 0, no reseeding will be done and the\n output will be completely predicable. This is not a recommended\n level except for debugging and testing purpose.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "cprgSetReseedThreshold",
          "package": "crypto-random",
          "signature": "Int -\u003e gen -\u003e gen",
          "source": "src/Crypto-Random-Generator.html#cprgSetReseedThreshold",
          "type": "method"
        },
        "index": {
          "description": "Give the ability to set threshold of byte generated that after being exceeded will result in reseed with some stateful entropy after call to cprgGenerate If this threshold is exceeded during the set operation the rng should be reseeded here If this value is set to no reseeding will be done and the output will be completely predicable This is not recommended level except for debugging and testing purpose",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "cprgSetReseedThreshold",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "crypto-random",
          "partial": "Set Reseed Threshold",
          "signature": "Int-\u003egen-\u003egen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgSetReseedThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new entropy pool with a default size.\n\u003c/p\u003e\u003cp\u003eWhile you can create as many entropy pool as you want, the pool can be shared between multiples RNGs.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "createEntropyPool",
          "package": "crypto-random",
          "signature": "IO EntropyPool",
          "source": "src/Crypto-Random-Entropy.html#createEntropyPool",
          "type": "function"
        },
        "index": {
          "description": "Create new entropy pool with default size While you can create as many entropy pool as you want the pool can be shared between multiples RNGs",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "createEntropyPool",
          "package": "crypto-random",
          "partial": "Entropy Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:createEntropyPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a dummy entropy pool that is deterministic, and\n dependant on the input bytestring only.\n\u003c/p\u003e\u003cp\u003eThis is stricly reserved for testing purpose when a deterministic seed need\n to be generated with deterministic RNGs.\n\u003c/p\u003e\u003cp\u003eDo not use in production code.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "createTestEntropyPool",
          "package": "crypto-random",
          "signature": "ByteString -\u003e EntropyPool",
          "source": "src/Crypto-Random-Entropy.html#createTestEntropyPool",
          "type": "function"
        },
        "index": {
          "description": "Create dummy entropy pool that is deterministic and dependant on the input bytestring only This is stricly reserved for testing purpose when deterministic seed need to be generated with deterministic RNGs Do not use in production code",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "createTestEntropyPool",
          "normalized": "ByteString-\u003eEntropyPool",
          "package": "crypto-random",
          "partial": "Test Entropy Pool",
          "signature": "ByteString-\u003eEntropyPool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:createTestEntropyPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e\u003cp\u003eGreat care need to be taken here when using the output,\n as this use unsafePerformIO to actually get entropy.\n\u003c/p\u003e\u003cp\u003eUse grabEntropyIO if unsure.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "grabEntropy",
          "package": "crypto-random",
          "signature": "Int -\u003e EntropyPool -\u003e SecureMem",
          "source": "src/Crypto-Random-Entropy.html#grabEntropy",
          "type": "function"
        },
        "index": {
          "description": "Grab chunk of entropy from the entropy pool Great care need to be taken here when using the output as this use unsafePerformIO to actually get entropy Use grabEntropyIO if unsure",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "grabEntropy",
          "normalized": "Int-\u003eEntropyPool-\u003eSecureMem",
          "package": "crypto-random",
          "partial": "Entropy",
          "signature": "Int-\u003eEntropyPool-\u003eSecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:grabEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e",
          "module": "Crypto.Random",
          "name": "grabEntropyIO",
          "package": "crypto-random",
          "signature": "Int -\u003e EntropyPool -\u003e IO SecureMem",
          "source": "src/Crypto-Random-Entropy.html#grabEntropyIO",
          "type": "function"
        },
        "index": {
          "description": "Grab chunk of entropy from the entropy pool",
          "hierarchy": "Crypto Random",
          "module": "Crypto.Random",
          "name": "grabEntropyIO",
          "normalized": "Int-\u003eEntropyPool-\u003eIO SecureMem",
          "package": "crypto-random",
          "partial": "Entropy IO",
          "signature": "Int-\u003eEntropyPool-\u003eIO SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:grabEntropyIO"
      }
    }
  ]
]