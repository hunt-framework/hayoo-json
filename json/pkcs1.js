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
        "word": "pkcs1"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements RSA encryption with PKCS1 padding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "PKCS1",
          "package": "pkcs1",
          "source": "src/Codec-Encryption-PKCS1.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements RSA encryption with PKCS1 padding",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PKCS1",
          "package": "pkcs1",
          "partial": "PKCS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKey",
          "package": "pkcs1",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKey",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKey",
          "package": "pkcs1",
          "partial": "Private Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis private key variant is considerably faster.\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeyComplex",
          "package": "pkcs1",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "data"
        },
        "index": {
          "description": "This private key variant is considerably faster",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeyComplex",
          "package": "pkcs1",
          "partial": "Private Key Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#t:PrivateKeyComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis private key variant takes longer to decrypt.\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeySimple",
          "package": "pkcs1",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeySimple",
          "type": "data"
        },
        "index": {
          "description": "This private key variant takes longer to decrypt",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeySimple",
          "package": "pkcs1",
          "partial": "Private Key Simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#t:PrivateKeySimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public key is contained in a certificate.\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "PublicKey",
          "package": "pkcs1",
          "source": "src/Codec-Encryption-PKCS1.html#PublicKey",
          "type": "data"
        },
        "index": {
          "description": "The public key is contained in certificate",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PublicKey",
          "package": "pkcs1",
          "partial": "Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKey",
          "package": "pkcs1",
          "signature": "PrivateKey (Either PrivateKeySimple PrivateKeyComplex)",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKey",
          "package": "pkcs1",
          "partial": "Private Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeyComplex",
          "package": "pkcs1",
          "signature": "PrivateKeyComplex",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeyComplex",
          "package": "pkcs1",
          "partial": "Private Key Complex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:PrivateKeyComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeySimple",
          "package": "pkcs1",
          "signature": "PrivateKeySimple",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeySimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PrivateKeySimple",
          "package": "pkcs1",
          "partial": "Private Key Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:PrivateKeySimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.PKCS1",
          "name": "PublicKey",
          "package": "pkcs1",
          "signature": "PublicKey",
          "source": "src/Codec-Encryption-PKCS1.html#PublicKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "PublicKey",
          "package": "pkcs1",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypts a ByteString using RSA with PKCS1 padding. If the ByteString\n   couldn't be decrypted, nothing is returned.\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "decrypt",
          "package": "pkcs1",
          "signature": "Int-\u003e PrivateKey-\u003e ByteString-\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decrypts ByteString using RSA with PKCS1 padding If the ByteString couldn be decrypted nothing is returned",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "decrypt",
          "normalized": "Int-\u003ePrivateKey-\u003eByteString-\u003eMaybe ByteString",
          "package": "pkcs1",
          "signature": "Int-\u003ePrivateKey-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypts a ByteString using RSA with PKCS1 padding\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "encrypt",
          "package": "pkcs1",
          "signature": "Int-\u003e PublicKey-\u003e g-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypts ByteString using RSA with PKCS1 padding",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "encrypt",
          "normalized": "Int-\u003ePublicKey-\u003ea-\u003eByteString-\u003eByteString",
          "package": "pkcs1",
          "signature": "Int-\u003ePublicKey-\u003eg-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a number into a block of bytes\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "i2osp",
          "package": "pkcs1",
          "signature": "Int -\u003e a -\u003e ByteString",
          "source": "src/Codec-Encryption-PKCS1.html#i2osp",
          "type": "function"
        },
        "index": {
          "description": "Converts number into block of bytes",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "i2osp",
          "normalized": "Int-\u003ea-\u003eByteString",
          "package": "pkcs1",
          "signature": "Int-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:i2osp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a block of bytes into a number\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "os2ip",
          "package": "pkcs1",
          "signature": "ByteString -\u003e a",
          "source": "src/Codec-Encryption-PKCS1.html#os2ip",
          "type": "function"
        },
        "index": {
          "description": "Converts block of bytes into number",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "os2ip",
          "normalized": "ByteString-\u003ea",
          "package": "pkcs1",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:os2ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrivate exponent\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateD",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeySimple",
          "type": "function"
        },
        "index": {
          "description": "Private exponent",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateD",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe private exponent\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateD'",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "description": "The private exponent",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateD'",
          "package": "pkcs1",
          "partial": "D'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateD-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe modulus\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateN",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeySimple",
          "type": "function"
        },
        "index": {
          "description": "The modulus",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateN",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe modulus\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateN'",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "description": "The modulus",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateN'",
          "package": "pkcs1",
          "partial": "N'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateN-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first prime number\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateP",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "description": "The first prime number",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateP",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe second prime number\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateQ",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "description": "The second prime number",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateQ",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo read a book about it for god sake\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateU",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PrivateKeyComplex",
          "type": "function"
        },
        "index": {
          "description": "Go read book about it for god sake",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "privateU",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:privateU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic exponent\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "publicE",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PublicKey",
          "type": "function"
        },
        "index": {
          "description": "Public exponent",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "publicE",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:publicE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe modulus\n\u003c/p\u003e",
          "module": "Codec.Encryption.PKCS1",
          "name": "publicN",
          "package": "pkcs1",
          "signature": "Integer",
          "source": "src/Codec-Encryption-PKCS1.html#PublicKey",
          "type": "function"
        },
        "index": {
          "description": "The modulus",
          "hierarchy": "Codec Encryption PKCS1",
          "module": "Codec.Encryption.PKCS1",
          "name": "publicN",
          "package": "pkcs1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pkcs1/docs/Codec-Encryption-PKCS1.html#v:publicN"
      }
    }
  ]
]