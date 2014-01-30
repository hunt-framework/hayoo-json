[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeprecated interface for compatibility of crypto-random-api user\n with crypto-random\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random-API.html",
        "fct-type": "module",
        "title": "API"
      },
      "index": {
        "description": "Deprecated interface for compatibility of crypto-random-api user with crypto-random",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "API",
        "normalized": "",
        "package": "crypto-random",
        "partial": "API",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#t:CPRG",
      "description": {
        "fct-descr": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Random-Generator.html#CPRG",
        "fct-type": "class",
        "title": "CPRG"
      },
      "index": {
        "description": "Cryptographic Pseudo Random Generator",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "CPRG",
        "normalized": "",
        "package": "crypto-random",
        "partial": "CPRG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new CPRG using an object of the CryptoGenerator class\n and with an explicit reference to an EntropyPool.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "EntropyPool -\u003e gen",
        "fct-source": "src/Crypto-Random-Generator.html#cprgCreate",
        "fct-type": "method",
        "title": "cprgCreate"
      },
      "index": {
        "description": "Create new CPRG using an object of the CryptoGenerator class and with an explicit reference to an EntropyPool",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgCreate",
        "normalized": "EntropyPool-\u003ea",
        "package": "crypto-random",
        "partial": "Create",
        "signature": "EntropyPool-\u003egen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgFork",
      "description": {
        "fct-descr": "\u003cp\u003eFork a CPRG into a new independent CPRG.\n\u003c/p\u003e\u003cp\u003eAs entropy is mixed to generate safely a new generator,\n 2 calls with the same CPRG will not produce the same output.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "gen -\u003e (gen, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgFork",
        "fct-type": "method",
        "title": "cprgFork"
      },
      "index": {
        "description": "Fork CPRG into new independent CPRG As entropy is mixed to generate safely new generator calls with the same CPRG will not produce the same output",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgFork",
        "normalized": "a-\u003e(a,a)",
        "package": "crypto-random",
        "partial": "Fork",
        "signature": "gen-\u003e(gen,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate bytes using the CPRG and the number specified.\n\u003c/p\u003e\u003cp\u003eFor user of the API, it's recommended to use genRandomBytes\n instead of this method directly. the CPRG need to be able\n to supply at minimum 2^20 bytes at a time.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e g -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Random-API.html#cprgGenBytes",
        "fct-type": "function",
        "title": "cprgGenBytes"
      },
      "index": {
        "description": "Generate bytes using the CPRG and the number specified For user of the API it recommended to use genRandomBytes instead of this method directly the CPRG need to be able to supply at minimum bytes at time",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgGenBytes",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Gen Bytes",
        "signature": "Int-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenerate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a number of bytes using the CPRG.\n\u003c/p\u003e\u003cp\u003eGiven one CPRG, the generated bytes will always be the same.\n\u003c/p\u003e\u003cp\u003eHowever the returned CPRG might have been reseeded with entropy bits,\n so 2 calls with the same CPRG will not necessarily result in the same next CPRG.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e (ByteString, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgGenerate",
        "fct-type": "method",
        "title": "cprgGenerate"
      },
      "index": {
        "description": "Generate number of bytes using the CPRG Given one CPRG the generated bytes will always be the same However the returned CPRG might have been reseeded with entropy bits so calls with the same CPRG will not necessarily result in the same next CPRG",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgGenerate",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Generate",
        "signature": "Int-\u003egen-\u003e(ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgGenerateWithEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to cprgGenerate except that the random data is mixed with pure entropy,\n so the result is not reproducible after use, but it provides more guarantee,\n theorically speaking, in term of the randomness generated.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e (ByteString, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgGenerateWithEntropy",
        "fct-type": "method",
        "title": "cprgGenerateWithEntropy"
      },
      "index": {
        "description": "Similar to cprgGenerate except that the random data is mixed with pure entropy so the result is not reproducible after use but it provides more guarantee theorically speaking in term of the randomness generated",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgGenerateWithEntropy",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Generate With Entropy",
        "signature": "Int-\u003egen-\u003e(ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:cprgSetReseedThreshold",
      "description": {
        "fct-descr": "\u003cp\u003eGive the ability to set a threshold of byte generated that after\n being exceeded will result in a reseed with some stateful entropy\n after a call to \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf this threshold is exceeded during the set operation, the\n rng should be reseeded here.\n\u003c/p\u003e\u003cp\u003eIf this value is set to 0, no reseeding will be done and the\n output will be completely predicable. This is not a recommended\n level except for debugging and testing purpose.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e gen",
        "fct-source": "src/Crypto-Random-Generator.html#cprgSetReseedThreshold",
        "fct-type": "method",
        "title": "cprgSetReseedThreshold"
      },
      "index": {
        "description": "Give the ability to set threshold of byte generated that after being exceeded will result in reseed with some stateful entropy after call to cprgGenerate If this threshold is exceeded during the set operation the rng should be reseeded here If this value is set to no reseeding will be done and the output will be completely predicable This is not recommended level except for debugging and testing purpose",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgSetReseedThreshold",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "crypto-random",
        "partial": "Set Reseed Threshold",
        "signature": "Int-\u003egen-\u003egen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:genRandomBytes",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use cprgGenerate from Crypto.Random instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eIf the number of bytes requested is really high,\n it's preferable to use \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e for better memory efficiency.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int-\u003e g-\u003e (ByteString, g)",
        "fct-type": "function",
        "title": "genRandomBytes"
      },
      "index": {
        "description": "Deprecated use cprgGenerate from Crypto.Random instead Generate bytes using the cprg in parameter If the number of bytes requested is really high it preferable to use genRandomBytes for better memory efficiency",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "genRandomBytes",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Random Bytes",
        "signature": "Int-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:genRandomBytes-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eThis is not tail recursive and an excessive len (\u003e= 2^29) parameter would\n result in stack overflow.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "Int-\u003e g-\u003e ([ByteString], g)",
        "fct-type": "function",
        "title": "genRandomBytes'"
      },
      "index": {
        "description": "Generate bytes using the cprg in parameter This is not tail recursive and an excessive len parameter would result in stack overflow",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "genRandomBytes'",
        "normalized": "Int-\u003ea-\u003e([ByteString],a)",
        "package": "crypto-random",
        "partial": "Random Bytes'",
        "signature": "Int-\u003eg-\u003e([ByteString],g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-API.html#v:withRandomBytes",
      "description": {
        "fct-descr": "\u003cp\u003egenerate \u003ccode\u003elen random bytes and mapped the bytes to the function \u003c/code\u003ef.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to use Control.Arrow \u003ccode\u003efirst\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random",
        "fct-signature": "g -\u003e Int -\u003e (ByteString -\u003e a) -\u003e (a, g)",
        "fct-source": "src/Crypto-Random.html#withRandomBytes",
        "fct-type": "function",
        "title": "withRandomBytes"
      },
      "index": {
        "description": "generate len random bytes and mapped the bytes to the function This is equivalent to use Control.Arrow first with cprgGenerate",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "withRandomBytes",
        "normalized": "a-\u003eInt-\u003e(ByteString-\u003eb)-\u003e(b,a)",
        "package": "crypto-random",
        "partial": "Random Bytes",
        "signature": "g-\u003eInt-\u003e(ByteString-\u003ea)-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide way to test usual simple statisticals test for randomness\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "Provide way to test usual simple statisticals test for randomness",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "Test",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#t:RandomTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eRandomness various result relative to random bytes\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "data",
        "title": "RandomTestResult"
      },
      "index": {
        "description": "Randomness various result relative to random bytes",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "RandomTestResult",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Random Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#t:RandomTestState",
      "description": {
        "fct-descr": "\u003cp\u003eMutable random test State\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestState",
        "fct-type": "data",
        "title": "RandomTestState"
      },
      "index": {
        "description": "Mutable random test State",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "RandomTestState",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Random Test State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:RandomTestResult",
      "description": {
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "RandomTestResult",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "RandomTestResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "RandomTestResult",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Random Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestAppend",
      "description": {
        "fct-descr": "\u003cp\u003eAppend random data to the test state\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "RandomTestState -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Crypto-Random-Test.html#randomTestAppend",
        "fct-type": "function",
        "title": "randomTestAppend"
      },
      "index": {
        "description": "Append random data to the test state",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "randomTestAppend",
        "normalized": "RandomTestState-\u003eByteString-\u003eIO()",
        "package": "crypto-random",
        "partial": "Test Append",
        "signature": "RandomTestState-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eFinalize random test state into some result\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "RandomTestState -\u003e IO RandomTestResult",
        "fct-source": "src/Crypto-Random-Test.html#randomTestFinalize",
        "fct-type": "function",
        "title": "randomTestFinalize"
      },
      "index": {
        "description": "Finalize random test state into some result",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "randomTestFinalize",
        "normalized": "RandomTestState-\u003eIO RandomTestResult",
        "package": "crypto-random",
        "partial": "Test Finalize",
        "signature": "RandomTestState-\u003eIO RandomTestResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:randomTestInitialize",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize new state to run tests\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "IO RandomTestState",
        "fct-source": "src/Crypto-Random-Test.html#randomTestInitialize",
        "fct-type": "function",
        "title": "randomTestInitialize"
      },
      "index": {
        "description": "Initialize new state to run tests",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "randomTestInitialize",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Test Initialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_chi_square",
      "description": {
        "fct-descr": "\u003cp\u003eChi Square\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "Double",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_chi_square"
      },
      "index": {
        "description": "Chi Square",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_chi_square",
        "normalized": "",
        "package": "crypto-random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_compressionPercent",
      "description": {
        "fct-descr": "\u003cp\u003eTheorical Compression percent\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "Double",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_compressionPercent"
      },
      "index": {
        "description": "Theorical Compression percent",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_compressionPercent",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Percent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_entropy",
      "description": {
        "fct-descr": "\u003cp\u003eEntropy per byte\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "Double",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_entropy"
      },
      "index": {
        "description": "Entropy per byte",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_entropy",
        "normalized": "",
        "package": "crypto-random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_mean",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic Mean\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "Double",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_mean"
      },
      "index": {
        "description": "Arithmetic Mean",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_mean",
        "normalized": "",
        "package": "crypto-random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_probs",
      "description": {
        "fct-descr": "\u003cp\u003eProbability of every bucket\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "[Double]",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_probs"
      },
      "index": {
        "description": "Probability of every bucket",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_probs",
        "normalized": "[Double]",
        "package": "crypto-random",
        "partial": "",
        "signature": "[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random-Test.html#v:res_totalChars",
      "description": {
        "fct-descr": "\u003cp\u003eTotal number of characters\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.Test",
        "fct-package": "crypto-random",
        "fct-signature": "Word64",
        "fct-source": "src/Crypto-Random-Test.html#RandomTestResult",
        "fct-type": "function",
        "title": "res_totalChars"
      },
      "index": {
        "description": "Total number of characters",
        "hierarchy": "Crypto Random Test",
        "module": "Crypto.Random.Test",
        "name": "res_totalChars",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Chars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a safe abstraction for cryptographic pseudo\n random generator.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Provide safe abstraction for cryptographic pseudo random generator",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "Random",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:CPRG",
      "description": {
        "fct-descr": "\u003cp\u003eCryptographic Pseudo Random Generator\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Random-Generator.html#CPRG",
        "fct-type": "class",
        "title": "CPRG"
      },
      "index": {
        "description": "Cryptographic Pseudo Random Generator",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "CPRG",
        "normalized": "",
        "package": "crypto-random",
        "partial": "CPRG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:EntropyPool",
      "description": {
        "fct-descr": "\u003cp\u003ePool of Entropy. contains a self mutating pool of entropy,\n that is always guarantee to contains data.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random-Entropy.html#EntropyPool",
        "fct-type": "data",
        "title": "EntropyPool"
      },
      "index": {
        "description": "Pool of Entropy contains self mutating pool of entropy that is always guarantee to contains data",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "EntropyPool",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Entropy Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#t:SystemRNG",
      "description": {
        "fct-descr": "\u003cp\u003eSystem entropy generator.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't use the entropy reseed level, as the only bytes\n generated are comping from the entropy pool already.\n\u003c/p\u003e\u003cp\u003eThis generator doesn't create reproducible output, and might be difficult to\n use for testing and debugging purpose, but otherwise for real world use case\n should be fine.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random.html#SystemRNG",
        "fct-type": "data",
        "title": "SystemRNG"
      },
      "index": {
        "description": "System entropy generator This generator doesn use the entropy reseed level as the only bytes generated are comping from the entropy pool already This generator doesn create reproducible output and might be difficult to use for testing and debugging purpose but otherwise for real world use case should be fine",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "SystemRNG",
        "normalized": "",
        "package": "crypto-random",
        "partial": "System RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new CPRG using an object of the CryptoGenerator class\n and with an explicit reference to an EntropyPool.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "EntropyPool -\u003e gen",
        "fct-source": "src/Crypto-Random-Generator.html#cprgCreate",
        "fct-type": "method",
        "title": "cprgCreate"
      },
      "index": {
        "description": "Create new CPRG using an object of the CryptoGenerator class and with an explicit reference to an EntropyPool",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "cprgCreate",
        "normalized": "EntropyPool-\u003ea",
        "package": "crypto-random",
        "partial": "Create",
        "signature": "EntropyPool-\u003egen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgFork",
      "description": {
        "fct-descr": "\u003cp\u003eFork a CPRG into a new independent CPRG.\n\u003c/p\u003e\u003cp\u003eAs entropy is mixed to generate safely a new generator,\n 2 calls with the same CPRG will not produce the same output.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "gen -\u003e (gen, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgFork",
        "fct-type": "method",
        "title": "cprgFork"
      },
      "index": {
        "description": "Fork CPRG into new independent CPRG As entropy is mixed to generate safely new generator calls with the same CPRG will not produce the same output",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "cprgFork",
        "normalized": "a-\u003e(a,a)",
        "package": "crypto-random",
        "partial": "Fork",
        "signature": "gen-\u003e(gen,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgGenerate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a number of bytes using the CPRG.\n\u003c/p\u003e\u003cp\u003eGiven one CPRG, the generated bytes will always be the same.\n\u003c/p\u003e\u003cp\u003eHowever the returned CPRG might have been reseeded with entropy bits,\n so 2 calls with the same CPRG will not necessarily result in the same next CPRG.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e (ByteString, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgGenerate",
        "fct-type": "method",
        "title": "cprgGenerate"
      },
      "index": {
        "description": "Generate number of bytes using the CPRG Given one CPRG the generated bytes will always be the same However the returned CPRG might have been reseeded with entropy bits so calls with the same CPRG will not necessarily result in the same next CPRG",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "cprgGenerate",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Generate",
        "signature": "Int-\u003egen-\u003e(ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgGenerateWithEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to cprgGenerate except that the random data is mixed with pure entropy,\n so the result is not reproducible after use, but it provides more guarantee,\n theorically speaking, in term of the randomness generated.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e (ByteString, gen)",
        "fct-source": "src/Crypto-Random-Generator.html#cprgGenerateWithEntropy",
        "fct-type": "method",
        "title": "cprgGenerateWithEntropy"
      },
      "index": {
        "description": "Similar to cprgGenerate except that the random data is mixed with pure entropy so the result is not reproducible after use but it provides more guarantee theorically speaking in term of the randomness generated",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "cprgGenerateWithEntropy",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random",
        "partial": "Generate With Entropy",
        "signature": "Int-\u003egen-\u003e(ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:cprgSetReseedThreshold",
      "description": {
        "fct-descr": "\u003cp\u003eGive the ability to set a threshold of byte generated that after\n being exceeded will result in a reseed with some stateful entropy\n after a call to \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf this threshold is exceeded during the set operation, the\n rng should be reseeded here.\n\u003c/p\u003e\u003cp\u003eIf this value is set to 0, no reseeding will be done and the\n output will be completely predicable. This is not a recommended\n level except for debugging and testing purpose.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e gen -\u003e gen",
        "fct-source": "src/Crypto-Random-Generator.html#cprgSetReseedThreshold",
        "fct-type": "method",
        "title": "cprgSetReseedThreshold"
      },
      "index": {
        "description": "Give the ability to set threshold of byte generated that after being exceeded will result in reseed with some stateful entropy after call to cprgGenerate If this threshold is exceeded during the set operation the rng should be reseeded here If this value is set to no reseeding will be done and the output will be completely predicable This is not recommended level except for debugging and testing purpose",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "cprgSetReseedThreshold",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "crypto-random",
        "partial": "Set Reseed Threshold",
        "signature": "Int-\u003egen-\u003egen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:createEntropyPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new entropy pool with a default size.\n\u003c/p\u003e\u003cp\u003eWhile you can create as many entropy pool as you want, the pool can be shared between multiples RNGs.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "IO EntropyPool",
        "fct-source": "src/Crypto-Random-Entropy.html#createEntropyPool",
        "fct-type": "function",
        "title": "createEntropyPool"
      },
      "index": {
        "description": "Create new entropy pool with default size While you can create as many entropy pool as you want the pool can be shared between multiples RNGs",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "createEntropyPool",
        "normalized": "",
        "package": "crypto-random",
        "partial": "Entropy Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:createTestEntropyPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a dummy entropy pool that is deterministic, and\n dependant on the input bytestring only.\n\u003c/p\u003e\u003cp\u003eThis is stricly reserved for testing purpose when a deterministic seed need\n to be generated with deterministic RNGs.\n\u003c/p\u003e\u003cp\u003eDo not use in production code.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "ByteString -\u003e EntropyPool",
        "fct-source": "src/Crypto-Random-Entropy.html#createTestEntropyPool",
        "fct-type": "function",
        "title": "createTestEntropyPool"
      },
      "index": {
        "description": "Create dummy entropy pool that is deterministic and dependant on the input bytestring only This is stricly reserved for testing purpose when deterministic seed need to be generated with deterministic RNGs Do not use in production code",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "createTestEntropyPool",
        "normalized": "ByteString-\u003eEntropyPool",
        "package": "crypto-random",
        "partial": "Test Entropy Pool",
        "signature": "ByteString-\u003eEntropyPool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:grabEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e\u003cp\u003eGreat care need to be taken here when using the output,\n as this use unsafePerformIO to actually get entropy.\n\u003c/p\u003e\u003cp\u003eUse grabEntropyIO if unsure.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e EntropyPool -\u003e SecureMem",
        "fct-source": "src/Crypto-Random-Entropy.html#grabEntropy",
        "fct-type": "function",
        "title": "grabEntropy"
      },
      "index": {
        "description": "Grab chunk of entropy from the entropy pool Great care need to be taken here when using the output as this use unsafePerformIO to actually get entropy Use grabEntropyIO if unsure",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "grabEntropy",
        "normalized": "Int-\u003eEntropyPool-\u003eSecureMem",
        "package": "crypto-random",
        "partial": "Entropy",
        "signature": "Int-\u003eEntropyPool-\u003eSecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:grabEntropyIO",
      "description": {
        "fct-descr": "\u003cp\u003eGrab a chunk of entropy from the entropy pool.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "Int -\u003e EntropyPool -\u003e IO SecureMem",
        "fct-source": "src/Crypto-Random-Entropy.html#grabEntropyIO",
        "fct-type": "function",
        "title": "grabEntropyIO"
      },
      "index": {
        "description": "Grab chunk of entropy from the entropy pool",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "grabEntropyIO",
        "normalized": "Int-\u003eEntropyPool-\u003eIO SecureMem",
        "package": "crypto-random",
        "partial": "Entropy IO",
        "signature": "Int-\u003eEntropyPool-\u003eIO SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random/docs/Crypto-Random.html#v:withRandomBytes",
      "description": {
        "fct-descr": "\u003cp\u003egenerate \u003ccode\u003elen random bytes and mapped the bytes to the function \u003c/code\u003ef.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to use Control.Arrow \u003ccode\u003efirst\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecprgGenerate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Random",
        "fct-package": "crypto-random",
        "fct-signature": "g -\u003e Int -\u003e (ByteString -\u003e a) -\u003e (a, g)",
        "fct-source": "src/Crypto-Random.html#withRandomBytes",
        "fct-type": "function",
        "title": "withRandomBytes"
      },
      "index": {
        "description": "generate len random bytes and mapped the bytes to the function This is equivalent to use Control.Arrow first with cprgGenerate",
        "hierarchy": "Crypto Random",
        "module": "Crypto.Random",
        "name": "withRandomBytes",
        "normalized": "a-\u003eInt-\u003e(ByteString-\u003eb)-\u003e(b,a)",
        "package": "crypto-random",
        "partial": "Random Bytes",
        "signature": "g-\u003eInt-\u003e(ByteString-\u003ea)-\u003e(a,g)"
      }
    }
  }
]