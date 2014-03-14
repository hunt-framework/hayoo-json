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
        "word": "RSA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "Exceptions",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Exceptions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "Exceptions",
          "package": "RSA",
          "partial": "Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "HashInfo",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html#HashInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "HashInfo",
          "package": "RSA",
          "partial": "Hash Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#t:HashInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 'mask generation function'. The input is a bytestring, and the output\n is a hash of the given length. Unless you know what you're doing, you \n should probably use a MGF1 formulation created with generate_MGF1.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "MGF",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#MGF",
          "type": "type"
        },
        "index": {
          "description": "mask generation function The input is bytestring and the output is hash of the given length Unless you know what you re doing you should probably use MGF1 formulation created with generate MGF1",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "MGF",
          "package": "RSA",
          "partial": "MGF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#t:MGF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA private key.\n\u003c/p\u003e\u003cp\u003eOnly the pub, d fields are mandatory to fill.\n\u003c/p\u003e\u003cp\u003ep, q, dP, dQ, qinv are by-product during RSA generation,\n but are useful to record here to speed up massively\n the decrypt and sign operation.\n\u003c/p\u003e\u003cp\u003eimplementations can leave optional fields to 0.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "PrivateKey",
          "package": "RSA",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA private key Only the pub fields are mandatory to fill dP dQ qinv are by-product during RSA generation but are useful to record here to speed up massively the decrypt and sign operation implementations can leave optional fields to",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "PrivateKey",
          "package": "RSA",
          "partial": "Private Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA public key\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "PublicKey",
          "package": "RSA",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA public key",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "PublicKey",
          "package": "RSA",
          "partial": "Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAError",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAError",
          "package": "RSA",
          "partial": "RSAError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#t:RSAError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "HashInfo",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#HashInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:HashInfo\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:HashInfo\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "HashInfo",
          "package": "RSA",
          "partial": "Hash Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:HashInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSACipherRepOutOfRange",
          "package": "RSA",
          "signature": "RSACipherRepOutOfRange",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSACipherRepOutOfRange\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSACipherRepOutOfRange\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSACipherRepOutOfRange",
          "package": "RSA",
          "partial": "RSACipher Rep Out Of Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSACipherRepOutOfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSADecryptionError",
          "package": "RSA",
          "signature": "RSADecryptionError",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSADecryptionError\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSADecryptionError\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSADecryptionError",
          "package": "RSA",
          "partial": "RSADecryption Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSADecryptionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAError",
          "package": "RSA",
          "signature": "RSAError String",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAError\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAError\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAError",
          "package": "RSA",
          "partial": "RSAError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAGenError",
          "package": "RSA",
          "signature": "RSAGenError GenError",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAGenError\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAGenError\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAGenError",
          "package": "RSA",
          "partial": "RSAGen Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAGenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAIncorrectMsgSize",
          "package": "RSA",
          "signature": "RSAIncorrectMsgSize",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIncorrectMsgSize\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAIncorrectMsgSize\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAIncorrectMsgSize",
          "package": "RSA",
          "partial": "RSAIncorrect Msg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIncorrectMsgSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAIncorrectSigSize",
          "package": "RSA",
          "signature": "RSAIncorrectSigSize",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIncorrectSigSize\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAIncorrectSigSize\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAIncorrectSigSize",
          "package": "RSA",
          "partial": "RSAIncorrect Sig Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIncorrectSigSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAIntegerTooLargeToPack",
          "package": "RSA",
          "signature": "RSAIntegerTooLargeToPack",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIntegerTooLargeToPack\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAIntegerTooLargeToPack\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAIntegerTooLargeToPack",
          "package": "RSA",
          "partial": "RSAInteger Too Large To Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAIntegerTooLargeToPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAKeySizeTooSmall",
          "package": "RSA",
          "signature": "RSAKeySizeTooSmall",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAKeySizeTooSmall\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAKeySizeTooSmall\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAKeySizeTooSmall",
          "package": "RSA",
          "partial": "RSAKey Size Too Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAKeySizeTooSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAMaskTooLong",
          "package": "RSA",
          "signature": "RSAMaskTooLong",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMaskTooLong\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAMaskTooLong\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAMaskTooLong",
          "package": "RSA",
          "partial": "RSAMask Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMaskTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAMessageRepOutOfRange",
          "package": "RSA",
          "signature": "RSAMessageRepOutOfRange",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageRepOutOfRange\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAMessageRepOutOfRange\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAMessageRepOutOfRange",
          "package": "RSA",
          "partial": "RSAMessage Rep Out Of Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageRepOutOfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAMessageTooLong",
          "package": "RSA",
          "signature": "RSAMessageTooLong",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageTooLong\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAMessageTooLong\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAMessageTooLong",
          "package": "RSA",
          "partial": "RSAMessage Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "RSAMessageTooShort",
          "package": "RSA",
          "signature": "RSAMessageTooShort",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageTooShort\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:RSAMessageTooShort\"]"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "RSAMessageTooShort",
          "package": "RSA",
          "partial": "RSAMessage Too Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:RSAMessageTooShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ASN.1 DER encoding of the hash function\n identifier.\n\u003c/p\u003e",
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "algorithmIdent",
          "package": "RSA",
          "signature": "ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#HashInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:algorithmIdent\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:algorithmIdent\"]"
        },
        "index": {
          "description": "The ASN.1 DER encoding of the hash function identifier",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "algorithmIdent",
          "package": "RSA",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:algorithmIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "chunkify",
          "package": "RSA",
          "signature": "ByteString -\u003e Int64 -\u003e [ByteString]",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#chunkify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "chunkify",
          "normalized": "ByteString-\u003eInt-\u003e[ByteString]",
          "package": "RSA",
          "signature": "ByteString-\u003eInt-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:chunkify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message given the public key and reasonable\n options. This is equivalent to calling encryptOAEP with SHA-256 as the\n hash function, MGF1(SHA-256) as the mask generation function, and no label.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decrypt",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message given the public key and reasonable options This is equivalent to calling encryptOAEP with SHA-256 as the hash function MGF1 SHA-256 as the mask generation function and no label",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decrypt",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message using OAEP encoding. This is the\n encouraged encoding for doing RSA encryption.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decryptOAEP",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString)-\u003e MGF-\u003e ByteString-\u003e PrivateKey-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message using OAEP encoding This is the encouraged encoding for doing RSA encryption",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decryptOAEP",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "partial": "OAEP",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:decryptOAEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message using PKCS1 v1.5 encoding. This\n encoding is deprecated, and should only be used when interacting with\n legacy software that cannot be modified.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decryptPKCS",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#decryptPKCS",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message using PKCS1 v1.5 encoding This encoding is deprecated and should only be used when interacting with legacy software that cannot be modified",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "decryptPKCS",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "partial": "PKCS",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:decryptPKCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message given the public key and reasonable\n options. This is equivalent to calling encryptOAEP with SHA-256 as the\n hash function, MGF1(SHA-256) as the mask generation function, and no label.\n NOTE: This hash choice means that your key size must be 1024 bits or larger.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encrypt",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message given the public key and reasonable options This is equivalent to calling encryptOAEP with SHA-256 as the hash function MGF1 SHA-256 as the mask generation function and no label NOTE This hash choice means that your key size must be bits or larger",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message using OAEP encoding. This is the\n encouraged encoding for doing RSA encryption. Note that your key size\n must be greater than (2 * hash length + 2) * 8. (For example, the\n \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e convenience function uses a 256 bit / 32 byte hash function.\n Thus, its key must be greater than (2 * 32 + 2) * 8 = 528 bits long,\n and we suggest 1024 as a lower bound.)\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encryptOAEP",
          "package": "RSA",
          "signature": "g-\u003e (ByteString -\u003e ByteString)-\u003e MGF-\u003e ByteString-\u003e PublicKey-\u003e ByteString-\u003e (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message using OAEP encoding This is the encouraged encoding for doing RSA encryption Note that your key size must be greater than hash length For example the encrypt convenience function uses bit byte hash function Thus its key must be greater than bits long and we suggest as lower bound",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encryptOAEP",
          "normalized": "a-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
          "package": "RSA",
          "partial": "OAEP",
          "signature": "g-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:encryptOAEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message using PKCS1 v1.5 encoding. This\n encoding is deprecated, and should only be used when interacting with\n legacy software that cannot be modified.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encryptPKCS",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#encryptPKCS",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message using PKCS1 v1.5 encoding This encoding is deprecated and should only be used when interacting with legacy software that cannot be modified",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "encryptPKCS",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
          "package": "RSA",
          "partial": "PKCS",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:encryptPKCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly generate a key pair of the given modules length (in bits) to use\n in any of the following functions. Use of a good random number generator is\n of considerable importance when using this function. The input\n CryptoRandomGen should never be used again for any other purpose; either\n use the output'd generator or throw it all away.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generateKeyPair",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e (PublicKey, PrivateKey, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#generateKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Randomly generate key pair of the given modules length in bits to use in any of the following functions Use of good random number generator is of considerable importance when using this function The input CryptoRandomGen should never be used again for any other purpose either use the output generator or throw it all away",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generateKeyPair",
          "normalized": "a-\u003eInt-\u003e(PublicKey,PrivateKey,a)",
          "package": "RSA",
          "partial": "Key Pair",
          "signature": "g-\u003eInt-\u003e(PublicKey,PrivateKey,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:generateKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a mask generation function for the rsaes_oaep_*. As \n suggested by the name, the generated function is an instance of the MGF1\n function. The arguments are the underlying hash function to use and the \n size of a hash in bytes.\n\u003c/p\u003e\u003cp\u003eThe bytestring passed to the generated function cannot be longer than\n 2^32 * hLen, where hLen is the passed length of the hash. \n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generateMGF1",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString) -\u003e MGF",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#generateMGF1",
          "type": "function"
        },
        "index": {
          "description": "Generate mask generation function for the rsaes oaep As suggested by the name the generated function is an instance of the MGF1 function The arguments are the underlying hash function to use and the size of hash in bytes The bytestring passed to the generated function cannot be longer than hLen where hLen is the passed length of the hash",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generateMGF1",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF",
          "package": "RSA",
          "partial": "MGF",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:generateMGF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generatePQ",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e (Integer, Integer, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#generatePQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "generatePQ",
          "normalized": "a-\u003eInt-\u003e(Integer,Integer,a)",
          "package": "RSA",
          "partial": "PQ",
          "signature": "g-\u003eInt-\u003e(Integer,Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:generatePQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash function\n\u003c/p\u003e",
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "hashFunction",
          "package": "RSA",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#HashInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashFunction\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashFunction\"]"
        },
        "index": {
          "description": "The hash function",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashFunction",
          "normalized": "ByteString-\u003eByteString",
          "package": "RSA",
          "partial": "Function",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashMD5",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#hashMD5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashMD5",
          "package": "RSA",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA1",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#hashSHA1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA1",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA256",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#hashSHA256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA256",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA384",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#hashSHA384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA384",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashSHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA512",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#hashSHA512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "hashSHA512",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:hashSHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "i2osp",
          "package": "RSA",
          "signature": "a -\u003e Int -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#i2osp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "i2osp",
          "normalized": "a-\u003eInt-\u003eByteString",
          "package": "RSA",
          "signature": "a-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:i2osp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a large random prime of a given length in bytes.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "largeRandomPrime",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e (Integer, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#largeRandomPrime",
          "type": "function"
        },
        "index": {
          "description": "Generate large random prime of given length in bytes",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "largeRandomPrime",
          "normalized": "a-\u003eInt-\u003e(Integer,a)",
          "package": "RSA",
          "partial": "Random Prime",
          "signature": "g-\u003eInt-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:largeRandomPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a^b mod c using a moderately good algorithm.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "modular_exponentiation",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#modular_exponentiation",
          "type": "function"
        },
        "index": {
          "description": "Computes mod using moderately good algorithm",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "modular_exponentiation",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:modular_exponentiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the modular inverse (d = e^-1 mod phi) via the extended euclidean\n algorithm.\n\u003c/p\u003e",
          "module": "[\"Codec.Crypto.RSA.Exceptions\",\"Codec.Crypto.RSA.Pure\"]",
          "name": "modular_inverse",
          "package": "RSA",
          "signature": "Integer-\u003e Integer-\u003e Integer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:modular_inverse\",\"http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:modular_inverse\"]"
        },
        "index": {
          "description": "Compute the modular inverse mod phi via the extended euclidean algorithm",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "modular_inverse",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:modular_inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "os2ip",
          "package": "RSA",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#os2ip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "os2ip",
          "normalized": "ByteString-\u003eInteger",
          "package": "RSA",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:os2ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random ByteString of the given length\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "randomBS",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#randomBS",
          "type": "function"
        },
        "index": {
          "description": "Generate random ByteString of the given length",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "randomBS",
          "normalized": "a-\u003eInt-\u003e(ByteString,a)",
          "package": "RSA",
          "partial": "BS",
          "signature": "g-\u003eInt-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:randomBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a random bytestring of non-zero bytes of the given length.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "randomNZBS",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#randomNZBS",
          "type": "function"
        },
        "index": {
          "description": "Create random bytestring of non-zero bytes of the given length",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "randomNZBS",
          "normalized": "a-\u003eInt-\u003e(ByteString,a)",
          "package": "RSA",
          "partial": "NZBS",
          "signature": "g-\u003eInt-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:randomNZBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_dp",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsa_dp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_dp",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsa_dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_ep",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsa_ep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_ep",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsa_ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_sp1",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsa_sp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_sp1",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsa_sp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_vp1",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsa_vp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsa_vp1",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsa_vp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized implementation of RSAES-OAEP-DECRYPT. Again, \u003ccode\u003e\u003ca\u003edecrypt\u003c/a\u003e\u003c/code\u003e\n initializes this with a pretty good set of defaults if you don't understand\n what all of the arguments involve.\n\u003c/p\u003e\u003cp\u003eThe ciphertext message passed to this function must be k bytes long, where\n k is the size of the modulus in bytes. If it is not, this function will\n generate an error, represented by the Left constructor.\n\u003c/p\u003e\u003cp\u003eFuther, k (the length of the ciphertext in bytes) must be greater than or\n equal to (2 * hLen + 2), where hLen is the length of the output of the \n hash function in bytes. If this equation does not hold, a (different)\n error will be generated.\n\u003c/p\u003e\u003cp\u003eFinally, there are any number of internal situations that may generate\n an error indicating that decryption failed.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_oaep_decrypt",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString)-\u003e MGF-\u003e PrivateKey-\u003e ByteString-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "The generalized implementation of RSAES-OAEP-DECRYPT Again decrypt initializes this with pretty good set of defaults if you don understand what all of the arguments involve The ciphertext message passed to this function must be bytes long where is the size of the modulus in bytes If it is not this function will generate an error represented by the Left constructor Futher the length of the ciphertext in bytes must be greater than or equal to hLen where hLen is the length of the output of the hash function in bytes If this equation does not hold different error will be generated Finally there are any number of internal situations that may generate an error indicating that decryption failed",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_oaep_decrypt",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF-\u003ePrivateKey-\u003eByteString-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF-\u003ePrivateKey-\u003eByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsaes_oaep_decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized implementation of RSAES-OAEP-ENCRYPT. Using the default\n instantiontion of this, provided by the \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e function, is a pretty\n good plan if this makes no sense to you, as it is instantiated with\n reasonable defaults.\n\u003c/p\u003e\u003cp\u003eThe message to be encrypted may not be longer then (k - 2*hLen - 2),\n where k is the length of the RSA modulus in bytes and hLen is the length\n of a hash in bytes. Passing in a larger message will generate an error,\n represented by the Left constructor. Note that this means that OAEP\n encryption cannot be used with keys smaller than 512 bits.\n\u003c/p\u003e\u003cp\u003eI have not put in a check for the length of the label, because I don't\n expect you to use more than 2^32 bytes. So don't make me regret that, eh?\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_oaep_encrypt",
          "package": "RSA",
          "signature": "g-\u003e (ByteString -\u003e ByteString)-\u003e MGF-\u003e PublicKey-\u003e ByteString-\u003e ByteString-\u003e (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "The generalized implementation of RSAES-OAEP-ENCRYPT Using the default instantiontion of this provided by the encrypt function is pretty good plan if this makes no sense to you as it is instantiated with reasonable defaults The message to be encrypted may not be longer then hLen where is the length of the RSA modulus in bytes and hLen is the length of hash in bytes Passing in larger message will generate an error represented by the Left constructor Note that this means that OAEP encryption cannot be used with keys smaller than bits have not put in check for the length of the label because don expect you to use more than bytes So don make me regret that eh",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_oaep_encrypt",
          "normalized": "a-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003e(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsaes_oaep_encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements RSAES-PKCS1-v1.5-Decrypt, for completeness and possible backward\n compatibility. Please see the notes for rsaes_pkcs_v1_5_encrypt regarding\n use of this function in new applications without backwards compatibility\n requirements.\n\u003c/p\u003e\u003cp\u003eThe ciphertext message passed to this function must be of length k, where\n k is the length of the key modulus in bytes.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_pkcs1_v1_5_decrypt",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsaes_pkcs1_v1_5_decrypt",
          "type": "function"
        },
        "index": {
          "description": "Implements RSAES-PKCS1-v1.5-Decrypt for completeness and possible backward compatibility Please see the notes for rsaes pkcs v1 encrypt regarding use of this function in new applications without backwards compatibility requirements The ciphertext message passed to this function must be of length where is the length of the key modulus in bytes",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_pkcs1_v1_5_decrypt",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsaes_pkcs1_v1_5_decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements RSAES-PKCS1-v1.5-Encrypt, for completeness and backward\n compatibility. Also because I've already written everything else, so why not?\n\u003c/p\u003e\u003cp\u003eThis encryption / padding mechanism has several known attacks, which are\n described in the literature. So unless you absolutely need to use this\n for some historical reason, you should avoid it.\n\u003c/p\u003e\u003cp\u003eThe message to be encrypted must be less then or equal to (k - 11) bytes\n long, where k is the length of the key modulus in bytes.\n\u003c/p\u003e\u003cp\u003eBecause this function uses an unknown amount of randomly-generated data,\n it takes an instance of RandomGen rather than taking a random number as\n input, and returns the resultant generator as output. You should take care\n that you (a) do not reuse the input generator, thus losing important\n randomness, and (b) choose a decent instance of RandomGen for passing to\n this function.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_pkcs1_v1_5_encrypt",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#rsaes_pkcs1_v1_5_encrypt",
          "type": "function"
        },
        "index": {
          "description": "Implements RSAES-PKCS1-v1.5-Encrypt for completeness and backward compatibility Also because ve already written everything else so why not This encryption padding mechanism has several known attacks which are described in the literature So unless you absolutely need to use this for some historical reason you should avoid it The message to be encrypted must be less then or equal to bytes long where is the length of the key modulus in bytes Because this function uses an unknown amount of randomly-generated data it takes an instance of RandomGen rather than taking random number as input and returns the resultant generator as output You should take care that you do not reuse the input generator thus losing important randomness and choose decent instance of RandomGen for passing to this function",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsaes_pkcs1_v1_5_encrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsaes_pkcs1_v1_5_encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a signature for the given message using the given private key,\n using the RSASSA-PKCS1-v1.5-Sign algorithm. Note that in researching the\n requirements for this project, several independent sources suggested not\n using the same key across sign\u003cem\u003evalidate and encrypt\u003c/em\u003edecrypt contexts. You've\n been warned.\n\u003c/p\u003e\u003cp\u003eThe output of this function is the signature only, not the message and\n the signature.\n\u003c/p\u003e\u003cp\u003eSIZE CONSTRAINT: The size of the public key (in bytes) must be greater\n than or equal to the length of the hash identifier plus the length of\n a hash plus 1. Thus, for example, you cannot use a 256 bit RSA key with\n MD5: 32 (the size of a 256-bit RSA key in bytes) is less than 18 (the\n size of MD5's identier) + 16 (the size of an MD5 hash in bytes) + 1,\n or 35.\n\u003c/p\u003e\u003cp\u003eThus,\n   * for MD5, SHA1, and SHA256, use 512+ bit keys\n   * for SHA384 and SHA512, use 1024+ bit keys\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsassa_pkcs1_v1_5_sign",
          "package": "RSA",
          "signature": "HashInfo-\u003e PrivateKey-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Generate signature for the given message using the given private key using the RSASSA-PKCS1-v1.5-Sign algorithm Note that in researching the requirements for this project several independent sources suggested not using the same key across sign validate and encrypt decrypt contexts You ve been warned The output of this function is the signature only not the message and the signature SIZE CONSTRAINT The size of the public key in bytes must be greater than or equal to the length of the hash identifier plus the length of hash plus Thus for example you cannot use bit RSA key with MD5 the size of bit RSA key in bytes is less than the size of MD5 identier the size of an MD5 hash in bytes or Thus for MD5 SHA1 and SHA256 use bit keys for SHA384 and SHA512 use bit keys",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsassa_pkcs1_v1_5_sign",
          "normalized": "HashInfo-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "signature": "HashInfo-\u003ePrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsassa_pkcs1_v1_5_sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a signature for the given message using the given public key. The\n signature must be exactly k bytes long, where k is the size of the RSA\n modulus IN BYTES.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsassa_pkcs1_v1_5_verify",
          "package": "RSA",
          "signature": "HashInfo-\u003e PublicKey-\u003e ByteString-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Validate signature for the given message using the given public key The signature must be exactly bytes long where is the size of the RSA modulus IN BYTES",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "rsassa_pkcs1_v1_5_verify",
          "normalized": "HashInfo-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "RSA",
          "signature": "HashInfo-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:rsassa_pkcs1_v1_5_verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a signature for the given ByteString, using the SHA256 algorithm\n in the computation. This is currently defined as rsassa_pkcs1_v1_5_sign\n hashSHA256. If you want to use a different function, simply use the PKCS\n function, below; it will accept arbitrarily-length messages.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "sign",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Crypto-RSA-Exceptions.html#sign",
          "type": "function"
        },
        "index": {
          "description": "Compute signature for the given ByteString using the SHA256 algorithm in the computation This is currently defined as rsassa pkcs1 v1 sign hashSHA256 If you want to use different function simply use the PKCS function below it will accept arbitrarily-length messages",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "sign",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a signature for the given ByteString, using the SHA25 algorithm in\n the computation. Again, if you'd like to use a different algorithm, use the\n rsassa_pkcs1_v1_5_verify function.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "verify",
          "package": "RSA",
          "signature": "PublicKey-\u003e ByteString-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify signature for the given ByteString using the SHA25 algorithm in the computation Again if you like to use different algorithm use the rsassa pkcs1 v1 verify function",
          "hierarchy": "Codec Crypto RSA Exceptions",
          "module": "Codec.Crypto.RSA.Exceptions",
          "name": "verify",
          "normalized": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "RSA",
          "signature": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Exceptions.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "Pure",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "Pure",
          "package": "RSA",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "HashInfo",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html#HashInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "HashInfo",
          "package": "RSA",
          "partial": "Hash Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#t:HashInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 'mask generation function'. The input is a bytestring, and the output\n is a hash of the given length. Unless you know what you're doing, you \n should probably use a MGF1 formulation created with generate_MGF1.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "MGF",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html#MGF",
          "type": "type"
        },
        "index": {
          "description": "mask generation function The input is bytestring and the output is hash of the given length Unless you know what you re doing you should probably use MGF1 formulation created with generate MGF1",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "MGF",
          "package": "RSA",
          "partial": "MGF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#t:MGF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA private key.\n\u003c/p\u003e\u003cp\u003eOnly the pub, d fields are mandatory to fill.\n\u003c/p\u003e\u003cp\u003ep, q, dP, dQ, qinv are by-product during RSA generation,\n but are useful to record here to speed up massively\n the decrypt and sign operation.\n\u003c/p\u003e\u003cp\u003eimplementations can leave optional fields to 0.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "PrivateKey",
          "package": "RSA",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA private key Only the pub fields are mandatory to fill dP dQ qinv are by-product during RSA generation but are useful to record here to speed up massively the decrypt and sign operation implementations can leave optional fields to",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "PrivateKey",
          "package": "RSA",
          "partial": "Private Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a RSA public key\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "PublicKey",
          "package": "RSA",
          "type": "data"
        },
        "index": {
          "description": "Represent RSA public key",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "PublicKey",
          "package": "RSA",
          "partial": "Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "RSAError",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA-Pure.html#RSAError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "RSAError",
          "package": "RSA",
          "partial": "RSAError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#t:RSAError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "chunkify",
          "package": "RSA",
          "signature": "ByteString -\u003e Int64 -\u003e [ByteString]",
          "source": "src/Codec-Crypto-RSA-Pure.html#chunkify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "chunkify",
          "normalized": "ByteString-\u003eInt-\u003e[ByteString]",
          "package": "RSA",
          "signature": "ByteString-\u003eInt-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:chunkify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message given the public key and reasonable\n options. This is equivalent to calling encryptOAEP with SHA-256 as the\n hash function, MGF1(SHA-256) as the mask generation function, and no label.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decrypt",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e Either RSAError ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message given the public key and reasonable options This is equivalent to calling encryptOAEP with SHA-256 as the hash function MGF1 SHA-256 as the mask generation function and no label",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decrypt",
          "normalized": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message using OAEP encoding. This is the\n encouraged encoding for doing RSA encryption.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decryptOAEP",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString)-\u003e MGF-\u003e ByteString-\u003e PrivateKey-\u003e ByteString-\u003e Either RSAError ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message using OAEP encoding This is the encouraged encoding for doing RSA encryption",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decryptOAEP",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "partial": "OAEP",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:decryptOAEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt an arbitrarily-sized message using PKCS1 v1.5 encoding. This\n encoding is deprecated, and should only be used when interacting with\n legacy software that cannot be modified.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decryptPKCS",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e Either RSAError ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#decryptPKCS",
          "type": "function"
        },
        "index": {
          "description": "Decrypt an arbitrarily-sized message using PKCS1 v1.5 encoding This encoding is deprecated and should only be used when interacting with legacy software that cannot be modified",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "decryptPKCS",
          "normalized": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "partial": "PKCS",
          "signature": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:decryptPKCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message given the public key and reasonable\n options. This is equivalent to calling encryptOAEP with SHA-256 as the\n hash function, MGF1(SHA-256) as the mask generation function, and no label.\n NOTE: This hash choice means that your key size must be 1024 bits or larger.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encrypt",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e Either RSAError (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message given the public key and reasonable options This is equivalent to calling encryptOAEP with SHA-256 as the hash function MGF1 SHA-256 as the mask generation function and no label NOTE This hash choice means that your key size must be bits or larger",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message using OAEP encoding. This is the\n encouraged encoding for doing RSA encryption. Note that your key size\n must be greater than (2 * hash length + 2) * 8. (For example, the\n \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e convenience function uses a 256 bit / 32 byte hash function.\n Thus, its key must be greater than (2 * 32 + 2) * 8 = 528 bits long,\n and we suggest 1024 as a lower bound.)\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encryptOAEP",
          "package": "RSA",
          "signature": "g-\u003e (ByteString -\u003e ByteString)-\u003e MGF-\u003e ByteString-\u003e PublicKey-\u003e ByteString-\u003e Either RSAError (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message using OAEP encoding This is the encouraged encoding for doing RSA encryption Note that your key size must be greater than hash length For example the encrypt convenience function uses bit byte hash function Thus its key must be greater than bits long and we suggest as lower bound",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encryptOAEP",
          "normalized": "a-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "partial": "OAEP",
          "signature": "g-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003eByteString-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:encryptOAEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt an arbitrarily-sized message using PKCS1 v1.5 encoding. This\n encoding is deprecated, and should only be used when interacting with\n legacy software that cannot be modified.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encryptPKCS",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e Either RSAError (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#encryptPKCS",
          "type": "function"
        },
        "index": {
          "description": "Encrypt an arbitrarily-sized message using PKCS1 v1.5 encoding This encoding is deprecated and should only be used when interacting with legacy software that cannot be modified",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "encryptPKCS",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "partial": "PKCS",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:encryptPKCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly generate a key pair of the given modules length (in bits) to use\n in any of the following functions. Use of a good random number generator is\n of considerable importance when using this function. The input\n CryptoRandomGen should never be used again for any other purpose; either\n use the output'd generator or throw it all away.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generateKeyPair",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e Either RSAError (PublicKey, PrivateKey, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#generateKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Randomly generate key pair of the given modules length in bits to use in any of the following functions Use of good random number generator is of considerable importance when using this function The input CryptoRandomGen should never be used again for any other purpose either use the output generator or throw it all away",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generateKeyPair",
          "normalized": "a-\u003eInt-\u003eEither RSAError(PublicKey,PrivateKey,a)",
          "package": "RSA",
          "partial": "Key Pair",
          "signature": "g-\u003eInt-\u003eEither RSAError(PublicKey,PrivateKey,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:generateKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a mask generation function for the rsaes_oaep_*. As \n suggested by the name, the generated function is an instance of the MGF1\n function. The arguments are the underlying hash function to use and the \n size of a hash in bytes.\n\u003c/p\u003e\u003cp\u003eThe bytestring passed to the generated function cannot be longer than\n 2^32 * hLen, where hLen is the passed length of the hash. \n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generateMGF1",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString) -\u003e MGF",
          "source": "src/Codec-Crypto-RSA-Pure.html#generateMGF1",
          "type": "function"
        },
        "index": {
          "description": "Generate mask generation function for the rsaes oaep As suggested by the name the generated function is an instance of the MGF1 function The arguments are the underlying hash function to use and the size of hash in bytes The bytestring passed to the generated function cannot be longer than hLen where hLen is the passed length of the hash",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generateMGF1",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF",
          "package": "RSA",
          "partial": "MGF",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:generateMGF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generatePQ",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e Either RSAError (Integer, Integer, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#generatePQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "generatePQ",
          "normalized": "a-\u003eInt-\u003eEither RSAError(Integer,Integer,a)",
          "package": "RSA",
          "partial": "PQ",
          "signature": "g-\u003eInt-\u003eEither RSAError(Integer,Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:generatePQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashMD5",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#hashMD5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashMD5",
          "package": "RSA",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA1",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#hashSHA1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA1",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA256",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#hashSHA256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA256",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA384",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#hashSHA384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA384",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashSHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA512",
          "package": "RSA",
          "signature": "HashInfo",
          "source": "src/Codec-Crypto-RSA-Pure.html#hashSHA512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "hashSHA512",
          "package": "RSA",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:hashSHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "i2osp",
          "package": "RSA",
          "signature": "a -\u003e Int -\u003e Either RSAError ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#i2osp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "i2osp",
          "normalized": "a-\u003eInt-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "a-\u003eInt-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:i2osp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a large random prime of a given length in bytes.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "largeRandomPrime",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e Either RSAError (Integer, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#largeRandomPrime",
          "type": "function"
        },
        "index": {
          "description": "Generate large random prime of given length in bytes",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "largeRandomPrime",
          "normalized": "a-\u003eInt-\u003eEither RSAError(Integer,a)",
          "package": "RSA",
          "partial": "Random Prime",
          "signature": "g-\u003eInt-\u003eEither RSAError(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:largeRandomPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a^b mod c using a moderately good algorithm.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "modular_exponentiation",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#modular_exponentiation",
          "type": "function"
        },
        "index": {
          "description": "Computes mod using moderately good algorithm",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "modular_exponentiation",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:modular_exponentiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "os2ip",
          "package": "RSA",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#os2ip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "os2ip",
          "normalized": "ByteString-\u003eInteger",
          "package": "RSA",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:os2ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random ByteString of the given length\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "randomBS",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e Either RSAError (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#randomBS",
          "type": "function"
        },
        "index": {
          "description": "Generate random ByteString of the given length",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "randomBS",
          "normalized": "a-\u003eInt-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "partial": "BS",
          "signature": "g-\u003eInt-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:randomBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a random bytestring of non-zero bytes of the given length.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "randomNZBS",
          "package": "RSA",
          "signature": "g -\u003e Int -\u003e Either RSAError (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#randomNZBS",
          "type": "function"
        },
        "index": {
          "description": "Create random bytestring of non-zero bytes of the given length",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "randomNZBS",
          "normalized": "a-\u003eInt-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "partial": "NZBS",
          "signature": "g-\u003eInt-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:randomNZBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_dp",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Either RSAError Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsa_dp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_dp",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsa_dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_ep",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Either RSAError Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsa_ep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_ep",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsa_ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_sp1",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Either RSAError Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsa_sp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_sp1",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsa_sp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_vp1",
          "package": "RSA",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Either RSAError Integer",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsa_vp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsa_vp1",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "package": "RSA",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eEither RSAError Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsa_vp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized implementation of RSAES-OAEP-DECRYPT. Again, \u003ccode\u003e\u003ca\u003edecrypt\u003c/a\u003e\u003c/code\u003e\n initializes this with a pretty good set of defaults if you don't understand\n what all of the arguments involve.\n\u003c/p\u003e\u003cp\u003eThe ciphertext message passed to this function must be k bytes long, where\n k is the size of the modulus in bytes. If it is not, this function will\n generate an error, represented by the Left constructor.\n\u003c/p\u003e\u003cp\u003eFuther, k (the length of the ciphertext in bytes) must be greater than or\n equal to (2 * hLen + 2), where hLen is the length of the output of the \n hash function in bytes. If this equation does not hold, a (different)\n error will be generated.\n\u003c/p\u003e\u003cp\u003eFinally, there are any number of internal situations that may generate\n an error indicating that decryption failed.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_oaep_decrypt",
          "package": "RSA",
          "signature": "(ByteString -\u003e ByteString)-\u003e MGF-\u003e PrivateKey-\u003e ByteString-\u003e ByteString-\u003e Either RSAError ByteString",
          "type": "function"
        },
        "index": {
          "description": "The generalized implementation of RSAES-OAEP-DECRYPT Again decrypt initializes this with pretty good set of defaults if you don understand what all of the arguments involve The ciphertext message passed to this function must be bytes long where is the size of the modulus in bytes If it is not this function will generate an error represented by the Left constructor Futher the length of the ciphertext in bytes must be greater than or equal to hLen where hLen is the length of the output of the hash function in bytes If this equation does not hold different error will be generated Finally there are any number of internal situations that may generate an error indicating that decryption failed",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_oaep_decrypt",
          "normalized": "(ByteString-\u003eByteString)-\u003eMGF-\u003ePrivateKey-\u003eByteString-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "(ByteString-\u003eByteString)-\u003eMGF-\u003ePrivateKey-\u003eByteString-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsaes_oaep_decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized implementation of RSAES-OAEP-ENCRYPT. Using the default\n instantiontion of this, provided by the \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e function, is a pretty\n good plan if this makes no sense to you, as it is instantiated with\n reasonable defaults.\n\u003c/p\u003e\u003cp\u003eThe message to be encrypted may not be longer then (k - 2*hLen - 2),\n where k is the length of the RSA modulus in bytes and hLen is the length\n of a hash in bytes. Passing in a larger message will generate an error,\n represented by the Left constructor. Note that this means that OAEP\n encryption cannot be used with keys smaller than 512 bits.\n\u003c/p\u003e\u003cp\u003eI have not put in a check for the length of the label, because I don't\n expect you to use more than 2^32 bytes. So don't make me regret that, eh?\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_oaep_encrypt",
          "package": "RSA",
          "signature": "g-\u003e (ByteString -\u003e ByteString)-\u003e MGF-\u003e PublicKey-\u003e ByteString-\u003e ByteString-\u003e Either RSAError (ByteString, g)",
          "type": "function"
        },
        "index": {
          "description": "The generalized implementation of RSAES-OAEP-ENCRYPT Using the default instantiontion of this provided by the encrypt function is pretty good plan if this makes no sense to you as it is instantiated with reasonable defaults The message to be encrypted may not be longer then hLen where is the length of the RSA modulus in bytes and hLen is the length of hash in bytes Passing in larger message will generate an error represented by the Left constructor Note that this means that OAEP encryption cannot be used with keys smaller than bits have not put in check for the length of the label because don expect you to use more than bytes So don make me regret that eh",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_oaep_encrypt",
          "normalized": "a-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003e(ByteString-\u003eByteString)-\u003eMGF-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsaes_oaep_encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements RSAES-PKCS1-v1.5-Decrypt, for completeness and possible backward\n compatibility. Please see the notes for rsaes_pkcs_v1_5_encrypt regarding\n use of this function in new applications without backwards compatibility\n requirements.\n\u003c/p\u003e\u003cp\u003eThe ciphertext message passed to this function must be of length k, where\n k is the length of the key modulus in bytes.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_pkcs1_v1_5_decrypt",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e Either RSAError ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsaes_pkcs1_v1_5_decrypt",
          "type": "function"
        },
        "index": {
          "description": "Implements RSAES-PKCS1-v1.5-Decrypt for completeness and possible backward compatibility Please see the notes for rsaes pkcs v1 encrypt regarding use of this function in new applications without backwards compatibility requirements The ciphertext message passed to this function must be of length where is the length of the key modulus in bytes",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_pkcs1_v1_5_decrypt",
          "normalized": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsaes_pkcs1_v1_5_decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements RSAES-PKCS1-v1.5-Encrypt, for completeness and backward\n compatibility. Also because I've already written everything else, so why not?\n\u003c/p\u003e\u003cp\u003eThis encryption / padding mechanism has several known attacks, which are\n described in the literature. So unless you absolutely need to use this\n for some historical reason, you should avoid it.\n\u003c/p\u003e\u003cp\u003eThe message to be encrypted must be less then or equal to (k - 11) bytes\n long, where k is the length of the key modulus in bytes.\n\u003c/p\u003e\u003cp\u003eBecause this function uses an unknown amount of randomly-generated data,\n it takes an instance of RandomGen rather than taking a random number as\n input, and returns the resultant generator as output. You should take care\n that you (a) do not reuse the input generator, thus losing important\n randomness, and (b) choose a decent instance of RandomGen for passing to\n this function.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_pkcs1_v1_5_encrypt",
          "package": "RSA",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e Either RSAError (ByteString, g)",
          "source": "src/Codec-Crypto-RSA-Pure.html#rsaes_pkcs1_v1_5_encrypt",
          "type": "function"
        },
        "index": {
          "description": "Implements RSAES-PKCS1-v1.5-Encrypt for completeness and backward compatibility Also because ve already written everything else so why not This encryption padding mechanism has several known attacks which are described in the literature So unless you absolutely need to use this for some historical reason you should avoid it The message to be encrypted must be less then or equal to bytes long where is the length of the key modulus in bytes Because this function uses an unknown amount of randomly-generated data it takes an instance of RandomGen rather than taking random number as input and returns the resultant generator as output You should take care that you do not reuse the input generator thus losing important randomness and choose decent instance of RandomGen for passing to this function",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsaes_pkcs1_v1_5_encrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,a)",
          "package": "RSA",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003eEither RSAError(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsaes_pkcs1_v1_5_encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a signature for the given message using the given private key,\n using the RSASSA-PKCS1-v1.5-Sign algorithm. Note that in researching the\n requirements for this project, several independent sources suggested not\n using the same key across sign\u003cem\u003evalidate and encrypt\u003c/em\u003edecrypt contexts. You've\n been warned.\n\u003c/p\u003e\u003cp\u003eThe output of this function is the signature only, not the message and\n the signature.\n\u003c/p\u003e\u003cp\u003eSIZE CONSTRAINT: The size of the public key (in bytes) must be greater\n than or equal to the length of the hash identifier plus the length of\n a hash plus 1. Thus, for example, you cannot use a 256 bit RSA key with\n MD5: 32 (the size of a 256-bit RSA key in bytes) is less than 18 (the\n size of MD5's identier) + 16 (the size of an MD5 hash in bytes) + 1,\n or 35.\n\u003c/p\u003e\u003cp\u003eThus,\n   * for MD5, SHA1, and SHA256, use 512+ bit keys\n   * for SHA384 and SHA512, use 1024+ bit keys\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsassa_pkcs1_v1_5_sign",
          "package": "RSA",
          "signature": "HashInfo-\u003e PrivateKey-\u003e ByteString-\u003e Either RSAError ByteString",
          "type": "function"
        },
        "index": {
          "description": "Generate signature for the given message using the given private key using the RSASSA-PKCS1-v1.5-Sign algorithm Note that in researching the requirements for this project several independent sources suggested not using the same key across sign validate and encrypt decrypt contexts You ve been warned The output of this function is the signature only not the message and the signature SIZE CONSTRAINT The size of the public key in bytes must be greater than or equal to the length of the hash identifier plus the length of hash plus Thus for example you cannot use bit RSA key with MD5 the size of bit RSA key in bytes is less than the size of MD5 identier the size of an MD5 hash in bytes or Thus for MD5 SHA1 and SHA256 use bit keys for SHA384 and SHA512 use bit keys",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsassa_pkcs1_v1_5_sign",
          "normalized": "HashInfo-\u003ePrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "HashInfo-\u003ePrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsassa_pkcs1_v1_5_sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a signature for the given message using the given public key. The\n signature must be exactly k bytes long, where k is the size of the RSA\n modulus IN BYTES.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsassa_pkcs1_v1_5_verify",
          "package": "RSA",
          "signature": "HashInfo-\u003e PublicKey-\u003e ByteString-\u003e ByteString-\u003e Either RSAError Bool",
          "type": "function"
        },
        "index": {
          "description": "Validate signature for the given message using the given public key The signature must be exactly bytes long where is the size of the RSA modulus IN BYTES",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "rsassa_pkcs1_v1_5_verify",
          "normalized": "HashInfo-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError Bool",
          "package": "RSA",
          "signature": "HashInfo-\u003ePublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:rsassa_pkcs1_v1_5_verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a signature for the given ByteString, using the SHA256 algorithm\n in the computation. This is currently defined as rsassa_pkcs1_v1_5_sign\n hashSHA256. If you want to use a different function, simply use the PKCS\n function, below; it will accept arbitrarily-length messages.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "sign",
          "package": "RSA",
          "signature": "PrivateKey -\u003e ByteString -\u003e Either RSAError ByteString",
          "source": "src/Codec-Crypto-RSA-Pure.html#sign",
          "type": "function"
        },
        "index": {
          "description": "Compute signature for the given ByteString using the SHA256 algorithm in the computation This is currently defined as rsassa pkcs1 v1 sign hashSHA256 If you want to use different function simply use the PKCS function below it will accept arbitrarily-length messages",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "sign",
          "normalized": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "package": "RSA",
          "signature": "PrivateKey-\u003eByteString-\u003eEither RSAError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a signature for the given ByteString, using the SHA25 algorithm in\n the computation. Again, if you'd like to use a different algorithm, use the\n rsassa_pkcs1_v1_5_verify function.\n\u003c/p\u003e",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "verify",
          "package": "RSA",
          "signature": "PublicKey-\u003e ByteString-\u003e ByteString-\u003e Either RSAError Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify signature for the given ByteString using the SHA25 algorithm in the computation Again if you like to use different algorithm use the rsassa pkcs1 v1 verify function",
          "hierarchy": "Codec Crypto RSA Pure",
          "module": "Codec.Crypto.RSA.Pure",
          "name": "verify",
          "normalized": "PublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError Bool",
          "package": "RSA",
          "signature": "PublicKey-\u003eByteString-\u003eByteString-\u003eEither RSAError Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA-Pure.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Crypto.RSA",
          "name": "RSA",
          "package": "RSA",
          "source": "src/Codec-Crypto-RSA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Crypto RSA",
          "module": "Codec.Crypto.RSA",
          "name": "RSA",
          "package": "RSA",
          "partial": "RSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RSA/docs/Codec-Crypto-RSA.html#"
      }
    }
  ]
]