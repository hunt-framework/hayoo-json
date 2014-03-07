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
        "word": "crypto-random-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.API",
          "name": "API",
          "package": "crypto-random-api",
          "source": "src/Crypto-Random-API.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "API",
          "package": "crypto-random-api",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of Cryptographic Secure Random generator.\n\u003c/p\u003e\u003cp\u003eThe main difference with the generic haskell RNG is that\n it return bytes instead of integer.\n\u003c/p\u003e\u003cp\u003eIt is quite similar to the CryptoRandomGen class in crypto-api\n except that error are not returned to the user. Instead\n the user is suppose to handle reseeding by using the NeedReseed\n and SupplyEntropy methods. For other type of errors, the user\n is expected to generate bytes with the parameters bounds explicity\n defined here.\n\u003c/p\u003e\u003cp\u003eThe CPRG need to be able to generate up to 2^20 bytes in one call,\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "CPRG",
          "package": "crypto-random-api",
          "source": "src/Crypto-Random-API.html#CPRG",
          "type": "class"
        },
        "index": {
          "description": "class of Cryptographic Secure Random generator The main difference with the generic haskell RNG is that it return bytes instead of integer It is quite similar to the CryptoRandomGen class in crypto-api except that error are not returned to the user Instead the user is suppose to handle reseeding by using the NeedReseed and SupplyEntropy methods For other type of errors the user is expected to generate bytes with the parameters bounds explicity defined here The CPRG need to be able to generate up to bytes in one call",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "CPRG",
          "package": "crypto-random-api",
          "partial": "CPRG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:CPRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the reseed policy requested by the CPRG\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "ReseedPolicy",
          "package": "crypto-random-api",
          "source": "src/Crypto-Random-API.html#ReseedPolicy",
          "type": "data"
        },
        "index": {
          "description": "This is the reseed policy requested by the CPRG",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "ReseedPolicy",
          "package": "crypto-random-api",
          "partial": "Reseed Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:ReseedPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a simple generator that pull bytes from the system entropy\n directly. Its randomness and security properties are absolutely\n depends on the underlaying system implementation.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "SystemRandom",
          "package": "crypto-random-api",
          "source": "src/Crypto-Random-API.html#SystemRandom",
          "type": "data"
        },
        "index": {
          "description": "This is simple generator that pull bytes from the system entropy directly Its randomness and security properties are absolutely depends on the underlaying system implementation",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "SystemRandom",
          "package": "crypto-random-api",
          "partial": "System Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#t:SystemRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethere is no need to reseed as either\n the RG doesn't supports it, it's done automatically\n or pratically the reseeding period exceed a Word64 type.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "NeverReseed",
          "package": "crypto-random-api",
          "signature": "NeverReseed",
          "source": "src/Crypto-Random-API.html#ReseedPolicy",
          "type": "function"
        },
        "index": {
          "description": "there is no need to reseed as either the RG doesn supports it it done automatically or pratically the reseeding period exceed Word64 type",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "NeverReseed",
          "package": "crypto-random-api",
          "partial": "Never Reseed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:NeverReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe RG need to be reseed in the number\n of bytes joined to the type. it should be done before\n the number reached 0, otherwise an user of the RG\n might request too many bytes and get repeated random bytes.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "ReseedInBytes",
          "package": "crypto-random-api",
          "signature": "ReseedInBytes Word64",
          "source": "src/Crypto-Random-API.html#ReseedPolicy",
          "type": "function"
        },
        "index": {
          "description": "the RG need to be reseed in the number of bytes joined to the type it should be done before the number reached otherwise an user of the RG might request too many bytes and get repeated random bytes",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "ReseedInBytes",
          "package": "crypto-random-api",
          "partial": "Reseed In Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:ReseedInBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bytes using the CPRG and the number specified.\n\u003c/p\u003e\u003cp\u003eFor user of the API, it's recommended to use genRandomBytes\n instead of this method directly. the CPRG need to be able\n to supply at minimum 2^20 bytes at a time.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgGenBytes",
          "package": "crypto-random-api",
          "signature": "Int -\u003e g -\u003e (ByteString, g)",
          "source": "src/Crypto-Random-API.html#cprgGenBytes",
          "type": "method"
        },
        "index": {
          "description": "Generate bytes using the CPRG and the number specified For user of the API it recommended to use genRandomBytes instead of this method directly the CPRG need to be able to supply at minimum bytes at time",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgGenBytes",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random-api",
          "partial": "Gen Bytes",
          "signature": "Int-\u003eg-\u003e(ByteString,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgGenBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a way to query the CPRG to calculate when new entropy\n is required to be supplied so the CPRG doesn't repeat output, and\n break assumptions. This returns the number of bytes before\n which supply entropy should have been called.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgNeedReseed",
          "package": "crypto-random-api",
          "signature": "g -\u003e ReseedPolicy",
          "source": "src/Crypto-Random-API.html#cprgNeedReseed",
          "type": "method"
        },
        "index": {
          "description": "Provide way to query the CPRG to calculate when new entropy is required to be supplied so the CPRG doesn repeat output and break assumptions This returns the number of bytes before which supply entropy should have been called",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgNeedReseed",
          "normalized": "a-\u003eReseedPolicy",
          "package": "crypto-random-api",
          "partial": "Need Reseed",
          "signature": "g-\u003eReseedPolicy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgNeedReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply entropy to the CPRG, that can be used now or later\n to reseed the CPRG. This should be used in conjunction to\n NeedReseed to know when to supply entropy.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "cprgSupplyEntropy",
          "package": "crypto-random-api",
          "signature": "ByteString -\u003e g -\u003e g",
          "source": "src/Crypto-Random-API.html#cprgSupplyEntropy",
          "type": "method"
        },
        "index": {
          "description": "Supply entropy to the CPRG that can be used now or later to reseed the CPRG This should be used in conjunction to NeedReseed to know when to supply entropy",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "cprgSupplyEntropy",
          "normalized": "ByteString-\u003ea-\u003ea",
          "package": "crypto-random-api",
          "partial": "Supply Entropy",
          "signature": "ByteString-\u003eg-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:cprgSupplyEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eIf the number of bytes requested is really high,\n it's preferable to use \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e for better memory efficiency.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes",
          "package": "crypto-random-api",
          "signature": "Int-\u003e g-\u003e (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Generate bytes using the cprg in parameter If the number of bytes requested is really high it preferable to use genRandomBytes for better memory efficiency",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes",
          "normalized": "Int-\u003ea-\u003e(ByteString,a)",
          "package": "crypto-random-api",
          "partial": "Random Bytes",
          "signature": "Int-\u003eg-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:genRandomBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bytes using the cprg in parameter.\n\u003c/p\u003e\u003cp\u003eThis is not tail recursive and an excessive len (\u003e= 2^29) parameter would\n result in stack overflow.\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes'",
          "package": "crypto-random-api",
          "signature": "Int-\u003e g-\u003e ([ByteString], g)",
          "type": "function"
        },
        "index": {
          "description": "Generate bytes using the cprg in parameter This is not tail recursive and an excessive len parameter would result in stack overflow",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "genRandomBytes'",
          "normalized": "Int-\u003ea-\u003e([ByteString],a)",
          "package": "crypto-random-api",
          "partial": "Random Bytes'",
          "signature": "Int-\u003eg-\u003e([ByteString],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:genRandomBytes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn system entropy using the entropy package \u003ccode\u003egetEntropy\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "getSystemEntropy",
          "package": "crypto-random-api",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Crypto-Random-API.html#getSystemEntropy",
          "type": "function"
        },
        "index": {
          "description": "Return system entropy using the entropy package getEntropy",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "getSystemEntropy",
          "normalized": "Int-\u003eIO ByteString",
          "package": "crypto-random-api",
          "partial": "System Entropy",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:getSystemEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a random number generator based on the standard system entropy source\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "getSystemRandomGen",
          "package": "crypto-random-api",
          "signature": "IO SystemRandom",
          "source": "src/Crypto-Random-API.html#getSystemRandomGen",
          "type": "function"
        },
        "index": {
          "description": "Get random number generator based on the standard system entropy source",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "getSystemRandomGen",
          "package": "crypto-random-api",
          "partial": "System Random Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:getSystemRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is equivalent to using Control.Arrow \u003ccode\u003efirst\u003c/code\u003e with \u003ccode\u003e\u003ca\u003egenRandomBytes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003enamely it generate \u003ccode\u003elen bytes and map the bytes to the function \u003c/code\u003ef\n\u003c/p\u003e",
          "module": "Crypto.Random.API",
          "name": "withRandomBytes",
          "package": "crypto-random-api",
          "signature": "g -\u003e Int -\u003e (ByteString -\u003e a) -\u003e (a, g)",
          "source": "src/Crypto-Random-API.html#withRandomBytes",
          "type": "function"
        },
        "index": {
          "description": "this is equivalent to using Control.Arrow first with genRandomBytes namely it generate len bytes and map the bytes to the function",
          "hierarchy": "Crypto Random API",
          "module": "Crypto.Random.API",
          "name": "withRandomBytes",
          "normalized": "a-\u003eInt-\u003e(ByteString-\u003eb)-\u003e(b,a)",
          "package": "crypto-random-api",
          "partial": "Random Bytes",
          "signature": "g-\u003eInt-\u003e(ByteString-\u003ea)-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-random-api/docs/Crypto-Random-API.html#v:withRandomBytes"
      }
    }
  ]
]