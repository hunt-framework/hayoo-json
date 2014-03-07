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
        "word": "cprng-aes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ethis CPRNG is an AES based counter system.\n\u003c/p\u003e\u003cp\u003ethe internal size of fields are: 16 bytes IV, 16 bytes counter, 32 bytes key\n\u003c/p\u003e\u003cp\u003eeach block are generated the following way:\n   aes (IV \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e counter) -\u003e 16 bytes output\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Random.AESCtr",
          "name": "AESCtr",
          "package": "cprng-aes",
          "source": "src/Crypto-Random-AESCtr.html",
          "type": "module"
        },
        "index": {
          "description": "this CPRNG is an AES based counter system the internal size of fields are bytes IV bytes counter bytes key each block are generated the following way aes IV xor counter bytes output",
          "hierarchy": "Crypto Random AESCtr",
          "module": "Crypto.Random.AESCtr",
          "name": "AESCtr",
          "package": "cprng-aes",
          "partial": "AESCtr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cprng-aes/docs/Crypto-Random-AESCtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES Counter mode Pseudo random generator.\n\u003c/p\u003e\u003cp\u003eProvide a very good Cryptographic pseudo random generator\n that create pseudo random output based an AES cipher\n used in counter mode, initialized from random key, random IV\n and random nonce.\n\u003c/p\u003e\u003cp\u003eThis CPRG uses 64 bytes of pure entropy to create its random state.\n\u003c/p\u003e\u003cp\u003eBy default, this generator will automatically reseed after generating\n 1 megabyte of data.\n\u003c/p\u003e",
          "module": "Crypto.Random.AESCtr",
          "name": "AESRNG",
          "package": "cprng-aes",
          "source": "src/Crypto-Random-AESCtr.html#AESRNG",
          "type": "data"
        },
        "index": {
          "description": "AES Counter mode Pseudo random generator Provide very good Cryptographic pseudo random generator that create pseudo random output based an AES cipher used in counter mode initialized from random key random IV and random nonce This CPRG uses bytes of pure entropy to create its random state By default this generator will automatically reseed after generating megabyte of data",
          "hierarchy": "Crypto Random AESCtr",
          "module": "Crypto.Random.AESCtr",
          "name": "AESRNG",
          "package": "cprng-aes",
          "partial": "AESRNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cprng-aes/docs/Crypto-Random-AESCtr.html#t:AESRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake an AES RNG from an EntropyPool.\n\u003c/p\u003e\u003cp\u003euse \u003ccode\u003e\u003ca\u003emakeSystem\u003c/a\u003e\u003c/code\u003e to not have to deal with the entropy pool.\n\u003c/p\u003e",
          "module": "Crypto.Random.AESCtr",
          "name": "make",
          "package": "cprng-aes",
          "signature": "EntropyPool -\u003e AESRNG",
          "source": "src/Crypto-Random-AESCtr.html#make",
          "type": "function"
        },
        "index": {
          "description": "make an AES RNG from an EntropyPool use makeSystem to not have to deal with the entropy pool",
          "hierarchy": "Crypto Random AESCtr",
          "module": "Crypto.Random.AESCtr",
          "name": "make",
          "normalized": "EntropyPool-\u003eAESRNG",
          "package": "cprng-aes",
          "signature": "EntropyPool-\u003eAESRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cprng-aes/docs/Crypto-Random-AESCtr.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new AES RNG using the system entropy.\n {-\u003ca name=\" DEPRECATED makeSystem \"use cprgCreate with an entropy pool\" \"/\u003e-}\n\u003c/p\u003e",
          "module": "Crypto.Random.AESCtr",
          "name": "makeSystem",
          "package": "cprng-aes",
          "signature": "IO AESRNG",
          "source": "src/Crypto-Random-AESCtr.html#makeSystem",
          "type": "function"
        },
        "index": {
          "description": "Initialize new AES RNG using the system entropy",
          "hierarchy": "Crypto Random AESCtr",
          "module": "Crypto.Random.AESCtr",
          "name": "makeSystem",
          "package": "cprng-aes",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cprng-aes/docs/Crypto-Random-AESCtr.html#v:makeSystem"
      }
    }
  ]
]