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
        "word": "Paillier"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "Paillier",
          "package": "Paillier",
          "source": "src/Crypto-Paillier.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "Paillier",
          "package": "Paillier",
          "partial": "Paillier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "CipherText",
          "package": "Paillier",
          "source": "src/Crypto-Paillier.html#CipherText",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "CipherText",
          "package": "Paillier",
          "partial": "Cipher Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#t:CipherText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "PlainText",
          "package": "Paillier",
          "source": "src/Crypto-Paillier.html#PlainText",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "PlainText",
          "package": "Paillier",
          "partial": "Plain Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#t:PlainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "PrvKey",
          "package": "Paillier",
          "source": "src/Crypto-Paillier.html#PrvKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "PrvKey",
          "package": "Paillier",
          "partial": "Prv Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#t:PrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "PubKey",
          "package": "Paillier",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "PubKey",
          "package": "Paillier",
          "partial": "Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#t:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "PrvKey",
          "package": "Paillier",
          "signature": "PrvKey",
          "source": "src/Crypto-Paillier.html#PrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "PrvKey",
          "package": "Paillier",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:PrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "PubKey",
          "package": "Paillier",
          "signature": "PubKey",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "PubKey",
          "package": "Paillier",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeterministic version of encryption\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "_encrypt",
          "package": "Paillier",
          "signature": "PubKey -\u003e PlainText -\u003e Integer -\u003e CipherText",
          "source": "src/Crypto-Paillier.html#_encrypt",
          "type": "function"
        },
        "index": {
          "description": "deterministic version of encryption",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "_encrypt",
          "normalized": "PubKey-\u003ePlainText-\u003eInteger-\u003eCipherText",
          "package": "Paillier",
          "signature": "PubKey-\u003ePlainText-\u003eInteger-\u003eCipherText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:_encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee.g., 2048\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "bits",
          "package": "Paillier",
          "signature": "Int",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "e.g",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "bits",
          "package": "Paillier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHomomorphic multiplication of plaintexts\n An encrypted plaintext raised to the power of another plaintext will decrypt to the product of the two plaintexts.\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "cipherExp",
          "package": "Paillier",
          "signature": "PubKey -\u003e CipherText -\u003e PlainText -\u003e CipherText",
          "source": "src/Crypto-Paillier.html#cipherExp",
          "type": "function"
        },
        "index": {
          "description": "Homomorphic multiplication of plaintexts An encrypted plaintext raised to the power of another plaintext will decrypt to the product of the two plaintexts",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "cipherExp",
          "normalized": "PubKey-\u003eCipherText-\u003ePlainText-\u003eCipherText",
          "package": "Paillier",
          "partial": "Exp",
          "signature": "PubKey-\u003eCipherText-\u003ePlainText-\u003eCipherText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:cipherExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eciphetext muliplication is known as homomorphic addition of plaintexts\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "cipherMul",
          "package": "Paillier",
          "signature": "PubKey -\u003e CipherText -\u003e CipherText -\u003e CipherText",
          "source": "src/Crypto-Paillier.html#cipherMul",
          "type": "function"
        },
        "index": {
          "description": "ciphetext muliplication is known as homomorphic addition of plaintexts",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "cipherMul",
          "normalized": "PubKey-\u003eCipherText-\u003eCipherText-\u003eCipherText",
          "package": "Paillier",
          "partial": "Mul",
          "signature": "PubKey-\u003eCipherText-\u003eCipherText-\u003eCipherText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:cipherMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "decrypt",
          "package": "Paillier",
          "signature": "PrvKey -\u003e PubKey -\u003e CipherText -\u003e PlainText",
          "source": "src/Crypto-Paillier.html#decrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "decrypt",
          "normalized": "PrvKey-\u003ePubKey-\u003eCipherText-\u003ePlainText",
          "package": "Paillier",
          "signature": "PrvKey-\u003ePubKey-\u003eCipherText-\u003ePlainText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "encrypt",
          "package": "Paillier",
          "signature": "PubKey -\u003e PlainText -\u003e IO CipherText",
          "source": "src/Crypto-Paillier.html#encrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "encrypt",
          "normalized": "PubKey-\u003ePlainText-\u003eIO CipherText",
          "package": "Paillier",
          "signature": "PubKey-\u003ePlainText-\u003eIO CipherText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "genKey",
          "package": "Paillier",
          "signature": "Int -\u003e IO (PubKey, PrvKey)",
          "source": "src/Crypto-Paillier.html#genKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "genKey",
          "normalized": "Int-\u003eIO(PubKey,PrvKey)",
          "package": "Paillier",
          "partial": "Key",
          "signature": "Int-\u003eIO(PubKey,PrvKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:genKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "generateR",
          "package": "Paillier",
          "signature": "SystemRNG -\u003e PubKey -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Paillier.html#generateR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "generateR",
          "normalized": "SystemRNG-\u003ePubKey-\u003eInteger-\u003eInteger",
          "package": "Paillier",
          "signature": "SystemRNG-\u003ePubKey-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:generateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerator = n+1\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "generator",
          "package": "Paillier",
          "signature": "Integer",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "generator",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "generator",
          "package": "Paillier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elambda(n) = lcm(p-1, q-1)\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "lambda",
          "package": "Paillier",
          "signature": "Integer",
          "source": "src/Crypto-Paillier.html#PrvKey",
          "type": "function"
        },
        "index": {
          "description": "lambda lcm p-1 q-1",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "lambda",
          "package": "Paillier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003en = pq\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "nModulo",
          "package": "Paillier",
          "signature": "Integer",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "pq",
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "nModulo",
          "package": "Paillier",
          "partial": "Modulo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:nModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003en^2\n\u003c/p\u003e",
          "module": "Crypto.Paillier",
          "name": "nSquare",
          "package": "Paillier",
          "signature": "Integer",
          "source": "src/Crypto-Paillier.html#PubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "nSquare",
          "package": "Paillier",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:nSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Paillier",
          "name": "x",
          "package": "Paillier",
          "signature": "Integer",
          "source": "src/Crypto-Paillier.html#PrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Paillier",
          "module": "Crypto.Paillier",
          "name": "x",
          "package": "Paillier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Paillier/docs/Crypto-Paillier.html#v:x"
      }
    }
  ]
]