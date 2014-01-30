[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#",
      "description": {
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Random-API.html",
        "fct-type": "module",
        "title": "API"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "API",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "API",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:CPRG",
      "description": {
        "fct-descr": "\u003cp\u003eA class of Cryptographic Secure Random generator.\n\u003c/p\u003e\u003cp\u003eThe main difference with the generic haskell RNG is that\n it return bytes instead of integer.\n\u003c/p\u003e\u003cp\u003eIt is quite similar to the CryptoRandomGen class in crypto-api\n except that error are not returned to the user. Instead\n the user is suppose to handle reseeding by using the NeedReseed\n and SupplyEntropy methods. For other type of errors, the user\n is expected to generate bytes with the parameters bounds explicity\n defined here.\n\u003c/p\u003e\u003cp\u003eThe CPRG need to be able to generate up to 2^20 bytes in one call,\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Random-API.html#CPRG",
        "fct-type": "class",
        "title": "CPRG"
      },
      "index": {
        "description": "class of Cryptographic Secure Random generator The main difference with the generic haskell RNG is that it return bytes instead of integer It is quite similar to the CryptoRandomGen class in crypto-api except that error are not returned to the user Instead the user is suppose to handle reseeding by using the NeedReseed and SupplyEntropy methods For other type of errors the user is expected to generate bytes with the parameters bounds explicity defined here The CPRG need to be able to generate up to bytes in one call",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "CPRG",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "CPRG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:ReseedPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the reseed policy requested by the CPRG\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random-API.html#ReseedPolicy",
        "fct-type": "data",
        "title": "ReseedPolicy"
      },
      "index": {
        "description": "This is the reseed policy requested by the CPRG",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "ReseedPolicy",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "Reseed Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:SystemRandom",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a simple generator that pull bytes from the system entropy\n directly. Its randomness and security properties are absolutely\n depends on the underlaying system implementation.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Random-API.html#SystemRandom",
        "fct-type": "data",
        "title": "SystemRandom"
      },
      "index": {
        "description": "This is simple generator that pull bytes from the system entropy directly Its randomness and security properties are absolutely depends on the underlaying system implementation",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "SystemRandom",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "System Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:NeverReseed",
      "description": {
        "fct-descr": "\u003cp\u003ethere is no need to reseed as either\n the RG doesn't supports it, it's done automatically\n or pratically the reseeding period exceed a Word64 type.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "NeverReseed",
        "fct-source": "src/Crypto-Random-API.html#ReseedPolicy",
        "fct-type": "function",
        "title": "NeverReseed"
      },
      "index": {
        "description": "there is no need to reseed as either the RG doesn supports it it done automatically or pratically the reseeding period exceed Word64 type",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "NeverReseed",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "Never Reseed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:ReseedInBytes",
      "description": {
        "fct-descr": "\u003cp\u003ethe RG need to be reseed in the number\n of bytes joined to the type. it should be done before\n the number reached 0, otherwise an user of the RG\n might request too many bytes and get repeated random bytes.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "ReseedInBytes Word64",
        "fct-source": "src/Crypto-Random-API.html#ReseedPolicy",
        "fct-type": "function",
        "title": "ReseedInBytes"
      },
      "index": {
        "description": "the RG need to be reseed in the number of bytes joined to the type it should be done before the number reached otherwise an user of the RG might request too many bytes and get repeated random bytes",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "ReseedInBytes",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "Reseed In Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgGenBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate bytes using the CPRG and the number specified.\n\u003c/p\u003e\u003cp\u003eFor user of the API, it's recommended to use genRandomBytes\n instead of this method directly. the CPRG need to be able\n to supply at minimum 2^20 bytes at a time.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "Int -\u003e g -\u003e (ByteString, g)",
        "fct-source": "src/Crypto-Random-API.html#cprgGenBytes",
        "fct-type": "method",
        "title": "cprgGenBytes"
      },
      "index": {
        "description": "Generate bytes using the CPRG and the number specified For user of the API it recommended to use genRandomBytes instead of this method directly the CPRG need to be able to supply at minimum bytes at time",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgGenBytes",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random-api",
        "partial": "Gen Bytes",
        "signature": "Int-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgNeedReseed",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a way to query the CPRG to calculate when new entropy\n is required to be supplied so the CPRG doesn't repeat output, and\n break assumptions. This returns the number of bytes before\n which supply entropy should have been called.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "g -\u003e ReseedPolicy",
        "fct-source": "src/Crypto-Random-API.html#cprgNeedReseed",
        "fct-type": "method",
        "title": "cprgNeedReseed"
      },
      "index": {
        "description": "Provide way to query the CPRG to calculate when new entropy is required to be supplied so the CPRG doesn repeat output and break assumptions This returns the number of bytes before which supply entropy should have been called",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgNeedReseed",
        "normalized": "a-\u003eReseedPolicy",
        "package": "crypto-random-api",
        "partial": "Need Reseed",
        "signature": "g-\u003eReseedPolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgSupplyEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eSupply entropy to the CPRG, that can be used now or later\n to reseed the CPRG. This should be used in conjunction to\n NeedReseed to know when to supply entropy.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "ByteString -\u003e g -\u003e g",
        "fct-source": "src/Crypto-Random-API.html#cprgSupplyEntropy",
        "fct-type": "method",
        "title": "cprgSupplyEntropy"
      },
      "index": {
        "description": "Supply entropy to the CPRG that can be used now or later to reseed the CPRG This should be used in conjunction to NeedReseed to know when to supply entropy",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "cprgSupplyEntropy",
        "normalized": "ByteString-\u003ea-\u003ea",
        "package": "crypto-random-api",
        "partial": "Supply Entropy",
        "signature": "ByteString-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:genRandomBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eIf the number of bytes requested is really high,\n it's preferable to use \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e for better memory efficiency.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "Int-\u003e g-\u003e (ByteString, g)",
        "fct-type": "function",
        "title": "genRandomBytes"
      },
      "index": {
        "description": "Generate bytes using the cprg in parameter If the number of bytes requested is really high it preferable to use genRandomBytes for better memory efficiency",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "genRandomBytes",
        "normalized": "Int-\u003ea-\u003e(ByteString,a)",
        "package": "crypto-random-api",
        "partial": "Random Bytes",
        "signature": "Int-\u003eg-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:genRandomBytes-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eThis is not tail recursive and an excessive len (\u003e= 2^29) parameter would\n result in stack overflow.\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
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
        "package": "crypto-random-api",
        "partial": "Random Bytes'",
        "signature": "Int-\u003eg-\u003e([ByteString],g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:getSystemEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eReturn system entropy using the entropy package \u003ccode\u003egetEntropy\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "Int -\u003e IO ByteString",
        "fct-source": "src/Crypto-Random-API.html#getSystemEntropy",
        "fct-type": "function",
        "title": "getSystemEntropy"
      },
      "index": {
        "description": "Return system entropy using the entropy package getEntropy",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "getSystemEntropy",
        "normalized": "Int-\u003eIO ByteString",
        "package": "crypto-random-api",
        "partial": "System Entropy",
        "signature": "Int-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:getSystemRandomGen",
      "description": {
        "fct-descr": "\u003cp\u003eGet a random number generator based on the standard system entropy source\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "IO SystemRandom",
        "fct-source": "src/Crypto-Random-API.html#getSystemRandomGen",
        "fct-type": "function",
        "title": "getSystemRandomGen"
      },
      "index": {
        "description": "Get random number generator based on the standard system entropy source",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "getSystemRandomGen",
        "normalized": "",
        "package": "crypto-random-api",
        "partial": "System Random Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:withRandomBytes",
      "description": {
        "fct-descr": "\u003cp\u003ethis is equivalent to using Control.Arrow \u003ccode\u003efirst\u003c/code\u003e with \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003enamely it generate \u003ccode\u003elen bytes and map the bytes to the function \u003c/code\u003ef\n\u003c/p\u003e",
        "fct-module": "Crypto.Random.API",
        "fct-package": "crypto-random-api",
        "fct-signature": "g -\u003e Int -\u003e (ByteString -\u003e a) -\u003e (a, g)",
        "fct-source": "src/Crypto-Random-API.html#withRandomBytes",
        "fct-type": "function",
        "title": "withRandomBytes"
      },
      "index": {
        "description": "this is equivalent to using Control.Arrow first with genRandomBytes namely it generate len bytes and map the bytes to the function",
        "hierarchy": "Crypto Random API",
        "module": "Crypto.Random.API",
        "name": "withRandomBytes",
        "normalized": "a-\u003eInt-\u003e(ByteString-\u003eb)-\u003e(b,a)",
        "package": "crypto-random-api",
        "partial": "Random Bytes",
        "signature": "g-\u003eInt-\u003e(ByteString-\u003ea)-\u003e(a,g)"
      }
    }
  }
]