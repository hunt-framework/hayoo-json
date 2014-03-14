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
        "word": "crypto-pubkey"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.DH",
          "name": "DH",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-DH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "DH",
          "package": "crypto-pubkey",
          "partial": "DH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent Diffie Hellman parameters namely P (prime), and G (generator).\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "Params",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent Diffie Hellman parameters namely prime and generator",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "Params",
          "package": "crypto-pubkey",
          "partial": "Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent Diffie Hellman private number X.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "PrivateNumber",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent Diffie Hellman private number",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "PrivateNumber",
          "package": "crypto-pubkey",
          "partial": "Private Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#t:PrivateNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent Diffie Hellman public number Y.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "PublicNumber",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent Diffie Hellman public number",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "PublicNumber",
          "package": "crypto-pubkey",
          "partial": "Public Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#t:PublicNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent Diffie Hellman shared secret.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "SharedKey",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent Diffie Hellman shared secret",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "SharedKey",
          "package": "crypto-pubkey",
          "partial": "Shared Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#t:SharedKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Crypto.PubKey.DH\",\"Crypto.PubKey.DSA\"]",
          "name": "Params",
          "package": "crypto-pubkey",
          "signature": "Params",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:Params\",\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:Params\"]"
        },
        "index": {
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "Params",
          "package": "crypto-pubkey",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate the public number from the parameters and the private key\n this number is usually called Y in DH text.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "calculatePublic",
          "package": "crypto-pubkey",
          "signature": "Params -\u003e PrivateNumber -\u003e PublicNumber",
          "source": "src/Crypto-PubKey-DH.html#calculatePublic",
          "type": "function"
        },
        "index": {
          "description": "calculate the public number from the parameters and the private key this number is usually called in DH text",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "calculatePublic",
          "normalized": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "package": "crypto-pubkey",
          "partial": "Public",
          "signature": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:calculatePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate params from a specific generator (2 or 5 are common values)\n we generate a safe prime (a prime number of the form 2p+1 where p is also prime)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "generateParams",
          "package": "crypto-pubkey",
          "signature": "g -\u003e Int -\u003e Integer -\u003e (Params, g)",
          "source": "src/Crypto-PubKey-DH.html#generateParams",
          "type": "function"
        },
        "index": {
          "description": "generate params from specific generator or are common values we generate safe prime prime number of the form where is also prime",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "generateParams",
          "normalized": "a-\u003eInt-\u003eInteger-\u003e(Params,a)",
          "package": "crypto-pubkey",
          "partial": "Params",
          "signature": "g-\u003eInt-\u003eInteger-\u003e(Params,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:generateParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a private number with no specific property\n this number is usually called X in DH text.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "generatePrivate",
          "package": "crypto-pubkey",
          "signature": "g -\u003e Params -\u003e (PrivateNumber, g)",
          "source": "src/Crypto-PubKey-DH.html#generatePrivate",
          "type": "function"
        },
        "index": {
          "description": "generate private number with no specific property this number is usually called in DH text",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "generatePrivate",
          "normalized": "a-\u003eParams-\u003e(PrivateNumber,a)",
          "package": "crypto-pubkey",
          "partial": "Private",
          "signature": "g-\u003eParams-\u003e(PrivateNumber,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:generatePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate the public number from the parameters and the private key\n this number is usually called Y in DH text.\n\u003c/p\u003e\u003cp\u003eDEPRECATED use calculatePublic\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "generatePublic",
          "package": "crypto-pubkey",
          "signature": "Params -\u003e PrivateNumber -\u003e PublicNumber",
          "source": "src/Crypto-PubKey-DH.html#generatePublic",
          "type": "function"
        },
        "index": {
          "description": "calculate the public number from the parameters and the private key this number is usually called in DH text DEPRECATED use calculatePublic",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "generatePublic",
          "normalized": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "package": "crypto-pubkey",
          "partial": "Public",
          "signature": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:generatePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a shared key using our private number and the other party public number\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DH",
          "name": "getShared",
          "package": "crypto-pubkey",
          "signature": "Params -\u003e PrivateNumber -\u003e PublicNumber -\u003e SharedKey",
          "source": "src/Crypto-PubKey-DH.html#getShared",
          "type": "function"
        },
        "index": {
          "description": "generate shared key using our private number and the other party public number",
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "getShared",
          "normalized": "Params-\u003ePrivateNumber-\u003ePublicNumber-\u003eSharedKey",
          "package": "crypto-pubkey",
          "partial": "Shared",
          "signature": "Params-\u003ePrivateNumber-\u003ePublicNumber-\u003eSharedKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:getShared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.DH",
          "name": "params_g",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "params_g",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:params_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.DH",
          "name": "params_p",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey DH",
          "module": "Crypto.PubKey.DH",
          "name": "params_p",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DH.html#v:params_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Digital Signature Algorithm (DSA)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "DSA",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-DSA.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the Digital Signature Algorithm DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "DSA",
          "package": "crypto-pubkey",
          "partial": "DSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent DSA parameters namely P, G, and Q.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "Params",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent DSA parameters namely and",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "Params",
          "package": "crypto-pubkey",
          "partial": "Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a DSA private key.\n\u003c/p\u003e\u003cp\u003eOnly x need to be secret.\n the DSA parameters are publicly shared with the other side.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent DSA private key Only need to be secret the DSA parameters are publicly shared with the other side",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "partial": "Private Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a DSA public key.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent DSA public key",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "partial": "Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a DSA signature namely R and S.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "Signature",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent DSA signature namely and",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "Signature",
          "package": "crypto-pubkey",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Crypto.PubKey.DSA\",\"Crypto.PubKey.RSA\"]",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "signature": "PrivateKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:PrivateKey\",\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:PrivateKey\"]"
        },
        "index": {
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "partial": "Private Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Crypto.PubKey.DSA\",\"Crypto.PubKey.RSA\"]",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "signature": "PublicKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:PublicKey\",\"http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:PublicKey\"]"
        },
        "index": {
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.DSA",
          "name": "Signature",
          "package": "crypto-pubkey",
          "signature": "Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "Signature",
          "package": "crypto-pubkey",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the public number from the parameters and the private key\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "calculatePublic",
          "package": "crypto-pubkey",
          "signature": "Params -\u003e PrivateNumber -\u003e PublicNumber",
          "source": "src/Crypto-PubKey-DSA.html#calculatePublic",
          "type": "function"
        },
        "index": {
          "description": "Calculate the public number from the parameters and the private key",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "calculatePublic",
          "normalized": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "package": "crypto-pubkey",
          "partial": "Public",
          "signature": "Params-\u003ePrivateNumber-\u003ePublicNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:calculatePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a private number with no specific property\n this number is usually called X in DSA text.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "generatePrivate",
          "package": "crypto-pubkey",
          "signature": "g -\u003e Params -\u003e (PrivateNumber, g)",
          "source": "src/Crypto-PubKey-DSA.html#generatePrivate",
          "type": "function"
        },
        "index": {
          "description": "generate private number with no specific property this number is usually called in DSA text",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "generatePrivate",
          "normalized": "a-\u003eParams-\u003e(PrivateNumber,a)",
          "package": "crypto-pubkey",
          "partial": "Private",
          "signature": "g-\u003eParams-\u003e(PrivateNumber,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:generatePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA g\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "params_g",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "params_g",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:params_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA p\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "params_p",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "params_p",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:params_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA q\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "params_q",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "params_q",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:params_q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA parameters\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "private_params",
          "package": "crypto-pubkey",
          "signature": "Params",
          "type": "function"
        },
        "index": {
          "description": "DSA parameters",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "private_params",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:private_params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA private X\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "private_x",
          "package": "crypto-pubkey",
          "signature": "PrivateNumber",
          "type": "function"
        },
        "index": {
          "description": "DSA private",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "private_x",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:private_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA parameters\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "public_params",
          "package": "crypto-pubkey",
          "signature": "Params",
          "type": "function"
        },
        "index": {
          "description": "DSA parameters",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "public_params",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:public_params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA public Y\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "public_y",
          "package": "crypto-pubkey",
          "signature": "PublicNumber",
          "type": "function"
        },
        "index": {
          "description": "DSA public",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "public_y",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:public_y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esign message using the private key.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "sign",
          "package": "crypto-pubkey",
          "signature": "g -\u003e PrivateKey -\u003e HashFunction -\u003e ByteString -\u003e (Signature, g)",
          "source": "src/Crypto-PubKey-DSA.html#sign",
          "type": "function"
        },
        "index": {
          "description": "sign message using the private key",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "sign",
          "normalized": "a-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003e(Signature,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003e(Signature,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esign message using the private key and an explicit k number.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "signWith",
          "package": "crypto-pubkey",
          "signature": "Integer-\u003e PrivateKey-\u003e HashFunction-\u003e ByteString-\u003e Maybe Signature",
          "type": "function"
        },
        "index": {
          "description": "sign message using the private key and an explicit number",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "signWith",
          "normalized": "Integer-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003eMaybe Signature",
          "package": "crypto-pubkey",
          "partial": "With",
          "signature": "Integer-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003eMaybe Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:signWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA r\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "sign_r",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "sign_r",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:sign_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA s\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "sign_s",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "DSA",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "sign_s",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:sign_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everify a bytestring using the public key.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.DSA",
          "name": "verify",
          "package": "crypto-pubkey",
          "signature": "HashFunction -\u003e PublicKey -\u003e Signature -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-PubKey-DSA.html#verify",
          "type": "function"
        },
        "index": {
          "description": "verify bytestring using the public key",
          "hierarchy": "Crypto PubKey DSA",
          "module": "Crypto.PubKey.DSA",
          "name": "verify",
          "normalized": "HashFunction-\u003ePublicKey-\u003eSignature-\u003eByteString-\u003eBool",
          "package": "crypto-pubkey",
          "signature": "HashFunction-\u003ePublicKey-\u003eSignature-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-DSA.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Signature operations may leak the private key. Signature verification\n should be safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "ECDSA",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-ECC-ECDSA.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING Signature operations may leak the private key Signature verification should be safe",
          "hierarchy": "Crypto PubKey ECC ECDSA",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "ECDSA",
          "package": "crypto-pubkey",
          "partial": "ECDSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-ECDSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign message using the private key.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "sign",
          "package": "crypto-pubkey",
          "signature": "g -\u003e PrivateKey -\u003e HashFunction -\u003e ByteString -\u003e (Signature, g)",
          "source": "src/Crypto-PubKey-ECC-ECDSA.html#sign",
          "type": "function"
        },
        "index": {
          "description": "Sign message using the private key WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC ECDSA",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "sign",
          "normalized": "a-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003e(Signature,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003e(Signature,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-ECDSA.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign message using the private key and an explicit k number.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "signWith",
          "package": "crypto-pubkey",
          "signature": "Integer-\u003e PrivateKey-\u003e HashFunction-\u003e ByteString-\u003e Maybe Signature",
          "type": "function"
        },
        "index": {
          "description": "Sign message using the private key and an explicit number WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC ECDSA",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "signWith",
          "normalized": "Integer-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003eMaybe Signature",
          "package": "crypto-pubkey",
          "partial": "With",
          "signature": "Integer-\u003ePrivateKey-\u003eHashFunction-\u003eByteString-\u003eMaybe Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-ECDSA.html#v:signWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a bytestring using the public key.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "verify",
          "package": "crypto-pubkey",
          "signature": "HashFunction -\u003e PublicKey -\u003e Signature -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-PubKey-ECC-ECDSA.html#verify",
          "type": "function"
        },
        "index": {
          "description": "Verify bytestring using the public key",
          "hierarchy": "Crypto PubKey ECC ECDSA",
          "module": "Crypto.PubKey.ECC.ECDSA",
          "name": "verify",
          "normalized": "HashFunction-\u003ePublicKey-\u003eSignature-\u003eByteString-\u003eBool",
          "package": "crypto-pubkey",
          "signature": "HashFunction-\u003ePublicKey-\u003eSignature-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-ECDSA.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignature generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "Generate",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-ECC-Generate.html",
          "type": "module"
        },
        "index": {
          "description": "Signature generation",
          "hierarchy": "Crypto PubKey ECC Generate",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "Generate",
          "package": "crypto-pubkey",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a pair of (private, public) key.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "generate",
          "package": "crypto-pubkey",
          "signature": "g-\u003e Curve-\u003e ((PublicKey, PrivateKey), g)",
          "type": "function"
        },
        "index": {
          "description": "Generate pair of private public key WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Generate",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "generate",
          "normalized": "a-\u003eCurve-\u003e((PublicKey,PrivateKey),a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003eCurve-\u003e((PublicKey,PrivateKey),g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Generate.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Q given d.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "generateQ",
          "package": "crypto-pubkey",
          "signature": "Curve -\u003e Integer -\u003e Point",
          "source": "src/Crypto-PubKey-ECC-Generate.html#generateQ",
          "type": "function"
        },
        "index": {
          "description": "Generate given WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Generate",
          "module": "Crypto.PubKey.ECC.Generate",
          "name": "generateQ",
          "normalized": "Curve-\u003eInteger-\u003ePoint",
          "package": "crypto-pubkey",
          "signature": "Curve-\u003eInteger-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Generate.html#v:generateQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElliptic Curve Arithmetic.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e These functions are vulnerable to timing attacks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "Prim",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-ECC-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "Elliptic Curve Arithmetic WARNING These functions are vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Prim",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "Prim",
          "package": "crypto-pubkey",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElliptic Curve point addition.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointAdd",
          "package": "crypto-pubkey",
          "signature": "Curve -\u003e Point -\u003e Point -\u003e Point",
          "source": "src/Crypto-PubKey-ECC-Prim.html#pointAdd",
          "type": "function"
        },
        "index": {
          "description": "Elliptic Curve point addition WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Prim",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointAdd",
          "normalized": "Curve-\u003ePoint-\u003ePoint-\u003ePoint",
          "package": "crypto-pubkey",
          "partial": "Add",
          "signature": "Curve-\u003ePoint-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Prim.html#v:pointAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElliptic Curve point doubling.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointDouble",
          "package": "crypto-pubkey",
          "signature": "Curve -\u003e Point -\u003e Point",
          "source": "src/Crypto-PubKey-ECC-Prim.html#pointDouble",
          "type": "function"
        },
        "index": {
          "description": "Elliptic Curve point doubling WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Prim",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointDouble",
          "normalized": "Curve-\u003ePoint-\u003ePoint",
          "package": "crypto-pubkey",
          "partial": "Double",
          "signature": "Curve-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Prim.html#v:pointDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElliptic curve point multiplication (double and add algorithm).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Vulnerable to timing attacks.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointMul",
          "package": "crypto-pubkey",
          "signature": "Curve -\u003e Integer -\u003e Point -\u003e Point",
          "source": "src/Crypto-PubKey-ECC-Prim.html#pointMul",
          "type": "function"
        },
        "index": {
          "description": "Elliptic curve point multiplication double and add algorithm WARNING Vulnerable to timing attacks",
          "hierarchy": "Crypto PubKey ECC Prim",
          "module": "Crypto.PubKey.ECC.Prim",
          "name": "pointMul",
          "normalized": "Curve-\u003eInteger-\u003ePoint-\u003ePoint",
          "package": "crypto-pubkey",
          "partial": "Mul",
          "signature": "Curve-\u003eInteger-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-ECC-Prim.html#v:pointMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard digests wrapped in ASN1 structure\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-HashDescr.html",
          "type": "module"
        },
        "index": {
          "description": "Standard digests wrapped in ASN1 structure",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "partial": "Hash Descr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a hash function and a way to wrap the digest into\n an DER encoded ASN1 marshalled structure.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-HashDescr.html#HashDescr",
          "type": "data"
        },
        "index": {
          "description": "Describe hash function and way to wrap the digest into an DER encoded ASN1 marshalled structure",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "partial": "Hash Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#t:HashDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA standard hash function returning a digest object\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashFunction",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-HashDescr.html#HashFunction",
          "type": "type"
        },
        "index": {
          "description": "standard hash function returning digest object",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashFunction",
          "package": "crypto-pubkey",
          "partial": "Hash Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#t:HashFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#HashDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "HashDescr",
          "package": "crypto-pubkey",
          "partial": "Hash Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:HashDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvertion to an ASN1 wrapped digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "digestToASN1",
          "package": "crypto-pubkey",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-PubKey-HashDescr.html#HashDescr",
          "type": "function"
        },
        "index": {
          "description": "convertion to an ASN1 wrapped digest bytestring",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "digestToASN1",
          "normalized": "ByteString-\u003eByteString",
          "package": "crypto-pubkey",
          "partial": "To ASN",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:digestToASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the MD2 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrMD2",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrMD2",
          "type": "function"
        },
        "index": {
          "description": "Describe the MD2 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrMD2",
          "package": "crypto-pubkey",
          "partial": "Descr MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrMD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the MD5 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrMD5",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrMD5",
          "type": "function"
        },
        "index": {
          "description": "Describe the MD5 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrMD5",
          "package": "crypto-pubkey",
          "partial": "Descr MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the RIPEMD160 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrRIPEMD160",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrRIPEMD160",
          "type": "function"
        },
        "index": {
          "description": "Describe the RIPEMD160 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrRIPEMD160",
          "package": "crypto-pubkey",
          "partial": "Descr RIPEMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrRIPEMD160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the SHA1 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA1",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrSHA1",
          "type": "function"
        },
        "index": {
          "description": "Describe the SHA1 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA1",
          "package": "crypto-pubkey",
          "partial": "Descr SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the SHA224 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA224",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrSHA224",
          "type": "function"
        },
        "index": {
          "description": "Describe the SHA224 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA224",
          "package": "crypto-pubkey",
          "partial": "Descr SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrSHA224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the SHA256 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA256",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrSHA256",
          "type": "function"
        },
        "index": {
          "description": "Describe the SHA256 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA256",
          "package": "crypto-pubkey",
          "partial": "Descr SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the SHA384 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA384",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrSHA384",
          "type": "function"
        },
        "index": {
          "description": "Describe the SHA384 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA384",
          "package": "crypto-pubkey",
          "partial": "Descr SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrSHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the SHA512 hashing algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA512",
          "package": "crypto-pubkey",
          "signature": "HashDescr",
          "source": "src/Crypto-PubKey-HashDescr.html#hashDescrSHA512",
          "type": "function"
        },
        "index": {
          "description": "Describe the SHA512 hashing algorithm",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashDescrSHA512",
          "package": "crypto-pubkey",
          "partial": "Descr SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashDescrSHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash function\n\u003c/p\u003e",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashFunction",
          "package": "crypto-pubkey",
          "signature": "HashFunction",
          "source": "src/Crypto-PubKey-HashDescr.html#HashDescr",
          "type": "function"
        },
        "index": {
          "description": "hash function",
          "hierarchy": "Crypto PubKey HashDescr",
          "module": "Crypto.PubKey.HashDescr",
          "name": "hashFunction",
          "package": "crypto-pubkey",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-HashDescr.html#v:hashFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "MaskGenFunction",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-MaskGenFunction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey MaskGenFunction",
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "MaskGenFunction",
          "package": "crypto-pubkey",
          "partial": "Mask Gen Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-MaskGenFunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a mask generation algorithm\n\u003c/p\u003e",
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "MaskGenAlgorithm",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-MaskGenFunction.html#MaskGenAlgorithm",
          "type": "type"
        },
        "index": {
          "description": "Represent mask generation algorithm",
          "hierarchy": "Crypto PubKey MaskGenFunction",
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "MaskGenAlgorithm",
          "package": "crypto-pubkey",
          "partial": "Mask Gen Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-MaskGenFunction.html#t:MaskGenAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMask generation algorithm MGF1\n\u003c/p\u003e",
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "mgf1",
          "package": "crypto-pubkey",
          "signature": "MaskGenAlgorithm",
          "source": "src/Crypto-PubKey-MaskGenFunction.html#mgf1",
          "type": "function"
        },
        "index": {
          "description": "Mask generation algorithm MGF1",
          "hierarchy": "Crypto PubKey MaskGenFunction",
          "module": "Crypto.PubKey.MaskGenFunction",
          "name": "mgf1",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-MaskGenFunction.html#v:mgf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRSA OAEP mode\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Optimal_asymmetric_encryption_padding\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEP",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-OAEP.html",
          "type": "module"
        },
        "index": {
          "description": "RSA OAEP mode http en.wikipedia.org wiki Optimal asymmetric encryption padding",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEP",
          "package": "crypto-pubkey",
          "partial": "OAEP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for OAEP encryption/decryption\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEPParams",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#OAEPParams",
          "type": "data"
        },
        "index": {
          "description": "Parameters for OAEP encryption decryption",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEPParams",
          "package": "crypto-pubkey",
          "partial": "OAEPParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#t:OAEPParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEPParams",
          "package": "crypto-pubkey",
          "signature": "OAEPParams",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#OAEPParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "OAEPParams",
          "package": "crypto-pubkey",
          "partial": "OAEPParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:OAEPParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt a ciphertext using OAEP\n\u003c/p\u003e\u003cp\u003eWhen the signature is not in a context where an attacker could gain\n information from the timing of the operation, the blinder can be set to None.\n\u003c/p\u003e\u003cp\u003eIf unsure always set a blinder or use decryptSafer\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "decrypt",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003e OAEPParams-\u003e PrivateKey-\u003e ByteString-\u003e Either Error ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decrypt ciphertext using OAEP When the signature is not in context where an attacker could gain information from the timing of the operation the blinder can be set to None If unsure always set blinder or use decryptSafer",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "decrypt",
          "normalized": "Maybe Blinder-\u003eOAEPParams-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003eOAEPParams-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt a ciphertext using OAEP and by automatically generating a blinder.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "decryptSafer",
          "package": "crypto-pubkey",
          "signature": "g-\u003e OAEPParams-\u003e PrivateKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Decrypt ciphertext using OAEP and by automatically generating blinder",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "decryptSafer",
          "normalized": "a-\u003eOAEPParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "partial": "Safer",
          "signature": "g-\u003eOAEPParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:decryptSafer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Params with a specified hash function\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "defaultOAEPParams",
          "package": "crypto-pubkey",
          "signature": "HashFunction -\u003e OAEPParams",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#defaultOAEPParams",
          "type": "function"
        },
        "index": {
          "description": "Default Params with specified hash function",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "defaultOAEPParams",
          "normalized": "HashFunction-\u003eOAEPParams",
          "package": "crypto-pubkey",
          "partial": "OAEPParams",
          "signature": "HashFunction-\u003eOAEPParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:defaultOAEPParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a message using OAEP\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "encrypt",
          "package": "crypto-pubkey",
          "signature": "g-\u003e OAEPParams-\u003e PublicKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Encrypt message using OAEP",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "encrypt",
          "normalized": "a-\u003eOAEPParams-\u003ePublicKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003eOAEPParams-\u003ePublicKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a message using OAEP with a predefined seed.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "encryptWithSeed",
          "package": "crypto-pubkey",
          "signature": "ByteString-\u003e OAEPParams-\u003e PublicKey-\u003e ByteString-\u003e Either Error ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypt message using OAEP with predefined seed",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "encryptWithSeed",
          "normalized": "ByteString-\u003eOAEPParams-\u003ePublicKey-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "partial": "With Seed",
          "signature": "ByteString-\u003eOAEPParams-\u003ePublicKey-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:encryptWithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function to use.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepHash",
          "package": "crypto-pubkey",
          "signature": "HashFunction",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#OAEPParams",
          "type": "function"
        },
        "index": {
          "description": "Hash function to use",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepHash",
          "package": "crypto-pubkey",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:oaepHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional label prepended to message.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepLabel",
          "package": "crypto-pubkey",
          "signature": "Maybe ByteString",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#OAEPParams",
          "type": "function"
        },
        "index": {
          "description": "Optional label prepended to message",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepLabel",
          "package": "crypto-pubkey",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:oaepLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMask Gen algorithm to use.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepMaskGenAlg",
          "package": "crypto-pubkey",
          "signature": "MaskGenAlgorithm",
          "source": "src/Crypto-PubKey-RSA-OAEP.html#OAEPParams",
          "type": "function"
        },
        "index": {
          "description": "Mask Gen algorithm to use",
          "hierarchy": "Crypto PubKey RSA OAEP",
          "module": "Crypto.PubKey.RSA.OAEP",
          "name": "oaepMaskGenAlg",
          "package": "crypto-pubkey",
          "partial": "Mask Gen Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-OAEP.html#v:oaepMaskGenAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "PKCS15",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "PKCS15",
          "package": "crypto-pubkey",
          "partial": "PKCS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt message using the private key.\n\u003c/p\u003e\u003cp\u003eWhen the decryption is not in a context where an attacker could gain\n information from the timing of the operation, the blinder can be set to None.\n\u003c/p\u003e\u003cp\u003eIf unsure always set a blinder or use decryptSafer\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "decrypt",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003e PrivateKey-\u003e ByteString-\u003e Either Error ByteString",
          "type": "function"
        },
        "index": {
          "description": "decrypt message using the private key When the decryption is not in context where an attacker could gain information from the timing of the operation the blinder can be set to None If unsure always set blinder or use decryptSafer",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "decrypt",
          "normalized": "Maybe Blinder-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt message using the private key and by automatically generating a blinder.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "decryptSafer",
          "package": "crypto-pubkey",
          "signature": "g-\u003e PrivateKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "decrypt message using the private key and by automatically generating blinder",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "decryptSafer",
          "normalized": "a-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "partial": "Safer",
          "signature": "g-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:decryptSafer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt a bytestring using the public key and a CPRG random generator.\n\u003c/p\u003e\u003cp\u003ethe message need to be smaller than the key size - 11\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "encrypt",
          "package": "crypto-pubkey",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (Either Error ByteString, g)",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "encrypt bytestring using the public key and CPRG random generator the message need to be smaller than the key size",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "encrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis produce a standard PKCS1.5 padding for encryption\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "pad",
          "package": "crypto-pubkey",
          "signature": "g -\u003e Int -\u003e ByteString -\u003e Either Error (ByteString, g)",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html#pad",
          "type": "function"
        },
        "index": {
          "description": "This produce standard PKCS1.5 padding for encryption",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "pad",
          "normalized": "a-\u003eInt-\u003eByteString-\u003eEither Error(ByteString,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003eInt-\u003eByteString-\u003eEither Error(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a standard PKCS1.5 padding for signature\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "padSignature",
          "package": "crypto-pubkey",
          "signature": "Int -\u003e ByteString -\u003e Either Error ByteString",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html#padSignature",
          "type": "function"
        },
        "index": {
          "description": "Produce standard PKCS1.5 padding for signature",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "padSignature",
          "normalized": "Int-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "partial": "Signature",
          "signature": "Int-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:padSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esign message using private key, a hash and its ASN1 description\n\u003c/p\u003e\u003cp\u003eWhen the signature is not in a context where an attacker could gain\n information from the timing of the operation, the blinder can be set to None.\n\u003c/p\u003e\u003cp\u003eIf unsure always set a blinder or use signSafer\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "sign",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003e HashDescr-\u003e PrivateKey-\u003e ByteString-\u003e Either Error ByteString",
          "type": "function"
        },
        "index": {
          "description": "sign message using private key hash and its ASN1 description When the signature is not in context where an attacker could gain information from the timing of the operation the blinder can be set to None If unsure always set blinder or use signSafer",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "sign",
          "normalized": "Maybe Blinder-\u003eHashDescr-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003eHashDescr-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esign message using the private key and by automatically generating a blinder.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "signSafer",
          "package": "crypto-pubkey",
          "signature": "g-\u003e HashDescr-\u003e PrivateKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "sign message using the private key and by automatically generating blinder",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "signSafer",
          "normalized": "a-\u003eHashDescr-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "partial": "Safer",
          "signature": "g-\u003eHashDescr-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:signSafer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to remove a standard PKCS1.5 encryption padding.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "unpad",
          "package": "crypto-pubkey",
          "signature": "ByteString -\u003e Either Error ByteString",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html#unpad",
          "type": "function"
        },
        "index": {
          "description": "Try to remove standard PKCS1.5 encryption padding",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "unpad",
          "normalized": "ByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "signature": "ByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:unpad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everify message with the signed message\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "verify",
          "package": "crypto-pubkey",
          "signature": "HashDescr -\u003e PublicKey -\u003e ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-PubKey-RSA-PKCS15.html#verify",
          "type": "function"
        },
        "index": {
          "description": "verify message with the signed message",
          "hierarchy": "Crypto PubKey RSA PKCS15",
          "module": "Crypto.PubKey.RSA.PKCS15",
          "name": "verify",
          "normalized": "HashDescr-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "crypto-pubkey",
          "signature": "HashDescr-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PKCS15.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSS",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-PSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSS",
          "package": "crypto-pubkey",
          "partial": "PSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for PSS signature/verification.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSSParams",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "data"
        },
        "index": {
          "description": "Parameters for PSS signature verification",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSSParams",
          "package": "crypto-pubkey",
          "partial": "PSSParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#t:PSSParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSSParams",
          "package": "crypto-pubkey",
          "signature": "PSSParams",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "PSSParams",
          "package": "crypto-pubkey",
          "partial": "PSSParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:PSSParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Params with a specified hash function\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "defaultPSSParams",
          "package": "crypto-pubkey",
          "signature": "HashFunction -\u003e PSSParams",
          "source": "src/Crypto-PubKey-RSA-PSS.html#defaultPSSParams",
          "type": "function"
        },
        "index": {
          "description": "Default Params with specified hash function",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "defaultPSSParams",
          "normalized": "HashFunction-\u003ePSSParams",
          "package": "crypto-pubkey",
          "partial": "PSSParams",
          "signature": "HashFunction-\u003ePSSParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:defaultPSSParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Params using SHA1 algorithm.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "defaultPSSParamsSHA1",
          "package": "crypto-pubkey",
          "signature": "PSSParams",
          "source": "src/Crypto-PubKey-RSA-PSS.html#defaultPSSParamsSHA1",
          "type": "function"
        },
        "index": {
          "description": "Default Params using SHA1 algorithm",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "defaultPSSParamsSHA1",
          "package": "crypto-pubkey",
          "partial": "PSSParams SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:defaultPSSParamsSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function to use\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssHash",
          "package": "crypto-pubkey",
          "signature": "HashFunction",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "function"
        },
        "index": {
          "description": "Hash function to use",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssHash",
          "package": "crypto-pubkey",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:pssHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMask Gen algorithm to use\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssMaskGenAlg",
          "package": "crypto-pubkey",
          "signature": "MaskGenAlgorithm",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "function"
        },
        "index": {
          "description": "Mask Gen algorithm to use",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssMaskGenAlg",
          "package": "crypto-pubkey",
          "partial": "Mask Gen Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:pssMaskGenAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of salt. need to be \u003c= to hLen.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssSaltLength",
          "package": "crypto-pubkey",
          "signature": "Int",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "function"
        },
        "index": {
          "description": "Length of salt need to be to hLen",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssSaltLength",
          "package": "crypto-pubkey",
          "partial": "Salt Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:pssSaltLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrailer field, usually 0xbc\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssTrailerField",
          "package": "crypto-pubkey",
          "signature": "Word8",
          "source": "src/Crypto-PubKey-RSA-PSS.html#PSSParams",
          "type": "function"
        },
        "index": {
          "description": "Trailer field usually xbc",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "pssTrailerField",
          "package": "crypto-pubkey",
          "partial": "Trailer Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:pssTrailerField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign using the PSS Parameters\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "sign",
          "package": "crypto-pubkey",
          "signature": "g-\u003e Maybe Blinder-\u003e PSSParams-\u003e PrivateKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Sign using the PSS Parameters",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "sign",
          "normalized": "a-\u003eMaybe Blinder-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003eMaybe Blinder-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign using the PSS Parameters and an automatically generated blinder.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "signSafer",
          "package": "crypto-pubkey",
          "signature": "g-\u003e PSSParams-\u003e PrivateKey-\u003e ByteString-\u003e (Either Error ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Sign using the PSS Parameters and an automatically generated blinder",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "signSafer",
          "normalized": "a-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,a)",
          "package": "crypto-pubkey",
          "partial": "Safer",
          "signature": "g-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003e(Either Error ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:signSafer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign using the PSS parameters and the salt explicitely passed as parameters.\n\u003c/p\u003e\u003cp\u003ethe function ignore SaltLength from the PSS Parameters\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "signWithSalt",
          "package": "crypto-pubkey",
          "signature": "ByteString-\u003e Maybe Blinder-\u003e PSSParams-\u003e PrivateKey-\u003e ByteString-\u003e Either Error ByteString",
          "type": "function"
        },
        "index": {
          "description": "Sign using the PSS parameters and the salt explicitely passed as parameters the function ignore SaltLength from the PSS Parameters",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "signWithSalt",
          "normalized": "ByteString-\u003eMaybe Blinder-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "package": "crypto-pubkey",
          "partial": "With Salt",
          "signature": "ByteString-\u003eMaybe Blinder-\u003ePSSParams-\u003ePrivateKey-\u003eByteString-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:signWithSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a signature using the PSS Parameters\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "verify",
          "package": "crypto-pubkey",
          "signature": "PSSParams-\u003e PublicKey-\u003e ByteString-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify signature using the PSS Parameters",
          "hierarchy": "Crypto PubKey RSA PSS",
          "module": "Crypto.PubKey.RSA.PSS",
          "name": "verify",
          "normalized": "PSSParams-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "crypto-pubkey",
          "signature": "PSSParams-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-PSS.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "Prim",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-Prim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA Prim",
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "Prim",
          "package": "crypto-pubkey",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the RSA decrypt primitive.\n if the p and q numbers are available, then dpFast is used\n otherwise, we use dpSlow which only need d and n.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "dp",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder -\u003e PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-PubKey-RSA-Prim.html#dp",
          "type": "function"
        },
        "index": {
          "description": "Compute the RSA decrypt primitive if the and numbers are available then dpFast is used otherwise we use dpSlow which only need and",
          "hierarchy": "Crypto PubKey RSA Prim",
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "dp",
          "normalized": "Maybe Blinder-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "package": "crypto-pubkey",
          "signature": "Maybe Blinder-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-Prim.html#v:dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the RSA encrypt primitive\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "ep",
          "package": "crypto-pubkey",
          "signature": "PublicKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-PubKey-RSA-Prim.html#ep",
          "type": "function"
        },
        "index": {
          "description": "Compute the RSA encrypt primitive",
          "hierarchy": "Crypto PubKey RSA Prim",
          "module": "Crypto.PubKey.RSA.Prim",
          "name": "ep",
          "normalized": "PublicKey-\u003eByteString-\u003eByteString",
          "package": "crypto-pubkey",
          "signature": "PublicKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA-Prim.html#v:ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA",
          "name": "RSA",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "RSA",
          "package": "crypto-pubkey",
          "partial": "RSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlinder which is used to obfuscate the timing\n of the decryption primitive (used by decryption and signing).\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "Blinder",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-Types.html#Blinder",
          "type": "data"
        },
        "index": {
          "description": "Blinder which is used to obfuscate the timing of the decryption primitive used by decryption and signing",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "Blinder",
          "package": "crypto-pubkey",
          "partial": "Blinder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#t:Blinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror possible during encryption, decryption or signing.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "Error",
          "package": "crypto-pubkey",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "data"
        },
        "index": {
          "description": "error possible during encryption decryption or signing",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "Error",
          "package": "crypto-pubkey",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA private key.\n\u003c/p\u003e\u003cp\u003eOnly the pub, d fields are mandatory to fill.\n\u003c/p\u003e\u003cp\u003ep, q, dP, dQ, qinv are by-product during RSA generation,\n but are useful to record here to speed up massively\n the decrypt and sign operation.\n\u003c/p\u003e\u003cp\u003eimplementations can leave optional fields to 0.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA private key Only the pub fields are mandatory to fill dP dQ qinv are by-product during RSA generation but are useful to record here to speed up massively the decrypt and sign operation implementations can leave optional fields to",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "PrivateKey",
          "package": "crypto-pubkey",
          "partial": "Private Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA public key\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA public key",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "PublicKey",
          "package": "crypto-pubkey",
          "partial": "Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.RSA",
          "name": "Blinder",
          "package": "crypto-pubkey",
          "signature": "Blinder !Integer !Integer",
          "source": "src/Crypto-PubKey-RSA-Types.html#Blinder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "Blinder",
          "package": "crypto-pubkey",
          "partial": "Blinder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:Blinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome parameters lead to breaking assumptions.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "InvalidParameters",
          "package": "crypto-pubkey",
          "signature": "InvalidParameters",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "some parameters lead to breaking assumptions",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "InvalidParameters",
          "package": "crypto-pubkey",
          "partial": "Invalid Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:InvalidParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message decrypted doesn't have a PKCS15 structure (0 2 .. 0 msg)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageNotRecognized",
          "package": "crypto-pubkey",
          "signature": "MessageNotRecognized",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "the message decrypted doesn have PKCS15 structure msg",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageNotRecognized",
          "package": "crypto-pubkey",
          "partial": "Message Not Recognized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:MessageNotRecognized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message to decrypt is not of the correct size (need to be == private_size)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageSizeIncorrect",
          "package": "crypto-pubkey",
          "signature": "MessageSizeIncorrect",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "the message to decrypt is not of the correct size need to be private size",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageSizeIncorrect",
          "package": "crypto-pubkey",
          "partial": "Message Size Incorrect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:MessageSizeIncorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message to encrypt is too long\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageTooLong",
          "package": "crypto-pubkey",
          "signature": "MessageTooLong",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "the message to encrypt is too long",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "MessageTooLong",
          "package": "crypto-pubkey",
          "partial": "Message Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:MessageTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message's digest is too long\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "SignatureTooLong",
          "package": "crypto-pubkey",
          "signature": "SignatureTooLong",
          "source": "src/Crypto-PubKey-RSA-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "the message digest is too long",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "SignatureTooLong",
          "package": "crypto-pubkey",
          "partial": "Signature Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:SignatureTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a pair of (private, public) key of size in bytes.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "generate",
          "package": "crypto-pubkey",
          "signature": "g-\u003e Int-\u003e Integer-\u003e ((PublicKey, PrivateKey), g)",
          "type": "function"
        },
        "index": {
          "description": "generate pair of private public key of size in bytes",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "generate",
          "normalized": "a-\u003eInt-\u003eInteger-\u003e((PublicKey,PrivateKey),a)",
          "package": "crypto-pubkey",
          "signature": "g-\u003eInt-\u003eInteger-\u003e((PublicKey,PrivateKey),g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a blinder to use with decryption and signing operation\n\u003c/p\u003e\u003cp\u003ethe unique parameter apart from the random number generator is the\n public key value N.\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "generateBlinder",
          "package": "crypto-pubkey",
          "signature": "g-\u003e Integer-\u003e (Blinder, g)",
          "type": "function"
        },
        "index": {
          "description": "Generate blinder to use with decryption and signing operation the unique parameter apart from the random number generator is the public key value",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "generateBlinder",
          "normalized": "a-\u003eInteger-\u003e(Blinder,a)",
          "package": "crypto-pubkey",
          "partial": "Blinder",
          "signature": "g-\u003eInteger-\u003e(Blinder,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:generateBlinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a key pair given p and q.\n\u003c/p\u003e\u003cp\u003ep and q need to be distinct prime numbers.\n\u003c/p\u003e\u003cp\u003ee need to be coprime to phi=(p-1)*(q-1). If that's not the\n case, the function will not return a key pair.\n A small hamming weight results in better performance.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e e=0x10001 is a popular choice\n\u003c/li\u003e\u003cli\u003e e=3 is popular as well, but proven to not be as secure for some cases.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "generateWith",
          "package": "crypto-pubkey",
          "signature": "(Integer, Integer)-\u003e Int-\u003e Integer-\u003e Maybe (PublicKey, PrivateKey)",
          "type": "function"
        },
        "index": {
          "description": "Generate key pair given and and need to be distinct prime numbers need to be coprime to phi p-1 q-1 If that not the case the function will not return key pair small hamming weight results in better performance x10001 is popular choice is popular as well but proven to not be as secure for some cases",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "generateWith",
          "normalized": "(Integer,Integer)-\u003eInt-\u003eInteger-\u003eMaybe(PublicKey,PrivateKey)",
          "package": "crypto-pubkey",
          "partial": "With",
          "signature": "(Integer,Integer)-\u003eInt-\u003eInteger-\u003eMaybe(PublicKey,PrivateKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:generateWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprivate exponant d\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_d",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "private exponant",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_d",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ed mod (p-1)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_dP",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "mod p-1",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_dP",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_dP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ed mod (q-1)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_dQ",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "mod q-1",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_dQ",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_dQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ep prime number\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_p",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "prime number",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_p",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epublic part of a private key (size, n and e)\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_pub",
          "package": "crypto-pubkey",
          "signature": "PublicKey",
          "type": "function"
        },
        "index": {
          "description": "public part of private key size and",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_pub",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_pub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eq prime number\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_q",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "prime number",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_q",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eq^(-1) mod p\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "private_qinv",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "mod",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "private_qinv",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:private_qinv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epublic exponant e\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "public_e",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "public exponant",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "public_e",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:public_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epublic p*q\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "public_n",
          "package": "crypto-pubkey",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "public",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "public_n",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:public_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of key in bytes\n\u003c/p\u003e",
          "module": "Crypto.PubKey.RSA",
          "name": "public_size",
          "package": "crypto-pubkey",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "size of key in bytes",
          "hierarchy": "Crypto PubKey RSA",
          "module": "Crypto.PubKey.RSA",
          "name": "public_size",
          "package": "crypto-pubkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey/docs/Crypto-PubKey-RSA.html#v:public_size"
      }
    }
  ]
]