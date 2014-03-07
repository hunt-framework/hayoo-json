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
        "word": "cipher-aes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.AES",
          "name": "AES",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AES",
          "package": "cipher-aes",
          "partial": "AES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES Context (pre-processed key)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "AES",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html#AES",
          "type": "data"
        },
        "index": {
          "description": "AES Context pre-processed key",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AES",
          "package": "cipher-aes",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#t:AES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 128 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "AES128",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html#AES128",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AES128",
          "package": "cipher-aes",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#t:AES128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 192 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "AES192",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html#AES192",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AES192",
          "package": "cipher-aes",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#t:AES192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 256 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "AES256",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html#AES256",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AES256",
          "package": "cipher-aes",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#t:AES256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAESGCM State\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "AESGCM",
          "package": "cipher-aes",
          "source": "src/Crypto-Cipher-AES.html#AESGCM",
          "type": "data"
        },
        "index": {
          "description": "AESGCM State",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "AESGCM",
          "package": "cipher-aes",
          "partial": "AESGCM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#t:AESGCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using Cipher block chaining (CBC)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "decryptCBC",
          "package": "cipher-aes",
          "signature": "AES -\u003e iv -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-AES.html#decryptCBC",
          "type": "function"
        },
        "index": {
          "description": "decrypt using Cipher block chaining CBC",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "decryptCBC",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "CBC",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:decryptCBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using Counter mode (CTR).\n\u003c/p\u003e\u003cp\u003ein CTR mode encryption and decryption is the same operation.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "decryptCTR",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "decrypt using Counter mode CTR in CTR mode encryption and decryption is the same operation",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "decryptCTR",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "CTR",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:decryptCTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using Electronic Code Book (ECB)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "decryptECB",
          "package": "cipher-aes",
          "signature": "AES -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-AES.html#decryptECB",
          "type": "function"
        },
        "index": {
          "description": "decrypt using Electronic Code Book ECB",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "decryptECB",
          "normalized": "AES-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "ECB",
          "signature": "AES-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:decryptECB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using Galois Counter Mode (GCM)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "decryptGCM",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e ByteString-\u003e ByteString-\u003e (ByteString, AuthTag)",
          "type": "function"
        },
        "index": {
          "description": "decrypt using Galois Counter Mode GCM",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "decryptGCM",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString-\u003e(ByteString,AuthTag)",
          "package": "cipher-aes",
          "partial": "GCM",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString-\u003e(ByteString,AuthTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:decryptGCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using XTS\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "decryptXTS",
          "package": "cipher-aes",
          "signature": "(AES, AES)-\u003e iv-\u003e Word32-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "decrypt using XTS",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "decryptXTS",
          "normalized": "(AES,AES)-\u003ea-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "XTS",
          "signature": "(AES,AES)-\u003eiv-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:decryptXTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using Cipher Block Chaining (CBC)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "encryptCBC",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "encrypt using Cipher Block Chaining CBC",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "encryptCBC",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "CBC",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:encryptCBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using Counter mode (CTR)\n\u003c/p\u003e\u003cp\u003ein CTR mode encryption and decryption is the same operation.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "encryptCTR",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "encrypt using Counter mode CTR in CTR mode encryption and decryption is the same operation",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "encryptCTR",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "CTR",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:encryptCTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using Electronic Code Book (ECB)\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "encryptECB",
          "package": "cipher-aes",
          "signature": "AES -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-AES.html#encryptECB",
          "type": "function"
        },
        "index": {
          "description": "encrypt using Electronic Code Book ECB",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "encryptECB",
          "normalized": "AES-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "ECB",
          "signature": "AES-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:encryptECB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using Galois counter mode (GCM)\n return the encrypted bytestring and the tag associated\n\u003c/p\u003e\u003cp\u003enote: encrypted data is identical to CTR mode in GCM, however\n a tag is also computed.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "encryptGCM",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e ByteString-\u003e ByteString-\u003e (ByteString, AuthTag)",
          "type": "function"
        },
        "index": {
          "description": "encrypt using Galois counter mode GCM return the encrypted bytestring and the tag associated note encrypted data is identical to CTR mode in GCM however tag is also computed",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "encryptGCM",
          "normalized": "AES-\u003ea-\u003eByteString-\u003eByteString-\u003e(ByteString,AuthTag)",
          "package": "cipher-aes",
          "partial": "GCM",
          "signature": "AES-\u003eiv-\u003eByteString-\u003eByteString-\u003e(ByteString,AuthTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:encryptGCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using XTS\n\u003c/p\u003e\u003cp\u003ethe first key is the normal block encryption key\n the second key is used for the initial block tweak\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "encryptXTS",
          "package": "cipher-aes",
          "signature": "(AES, AES)-\u003e iv-\u003e Word32-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "encrypt using XTS the first key is the normal block encryption key the second key is used for the initial block tweak",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "encryptXTS",
          "normalized": "(AES,AES)-\u003ea-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "cipher-aes",
          "partial": "XTS",
          "signature": "(AES,AES)-\u003eiv-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:encryptXTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a counter mode pad. this is generally xor-ed to an input\n to make the standard counter mode block operations.\n\u003c/p\u003e\u003cp\u003eif the length requested is not a multiple of the block cipher size,\n more data will be returned, so that the returned bytestring is\n a multiple of the block cipher size.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "genCTR",
          "package": "cipher-aes",
          "signature": "AES-\u003e iv-\u003e Int-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "generate counter mode pad this is generally xor-ed to an input to make the standard counter mode block operations if the length requested is not multiple of the block cipher size more data will be returned so that the returned bytestring is multiple of the block cipher size",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "genCTR",
          "normalized": "AES-\u003ea-\u003eInt-\u003eByteString",
          "package": "cipher-aes",
          "partial": "CTR",
          "signature": "AES-\u003eiv-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:genCTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new context with a key\n\u003c/p\u003e\u003cp\u003eKey need to be of length 16, 24 or 32 bytes. any other values will cause undefined behavior\n\u003c/p\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "initAES",
          "package": "cipher-aes",
          "signature": "b -\u003e AES",
          "source": "src/Crypto-Cipher-AES.html#initAES",
          "type": "function"
        },
        "index": {
          "description": "Initialize new context with key Key need to be of length or bytes any other values will cause undefined behavior",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "initAES",
          "normalized": "a-\u003eAES",
          "package": "cipher-aes",
          "partial": "AES",
          "signature": "b-\u003eAES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:initAES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use initAES\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.AES",
          "name": "initKey",
          "package": "cipher-aes",
          "signature": "b -\u003e AES",
          "source": "src/Crypto-Cipher-AES.html#initKey",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use initAES",
          "hierarchy": "Crypto Cipher AES",
          "module": "Crypto.Cipher.AES",
          "name": "initKey",
          "normalized": "a-\u003eAES",
          "package": "cipher-aes",
          "partial": "Key",
          "signature": "b-\u003eAES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-aes/docs/Crypto-Cipher-AES.html#v:initKey"
      }
    }
  ]
]