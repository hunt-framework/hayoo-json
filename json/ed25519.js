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
        "word": "ed25519"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides bindings to the ed25519 public-key signature\n system, including detached signatures. The underlying\n implementation uses the \u003ccode\u003eref10\u003c/code\u003e implementation of ed25519 from\n SUPERCOP, and should be relatively fast.\n\u003c/p\u003e\u003cp\u003eFor more information (including how to get a copy of the software)\n visit \u003ca\u003ehttp://ed25519.cr.yp.to\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "Ed25519",
          "package": "ed25519",
          "source": "src/Crypto-Sign-Ed25519.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides bindings to the ed25519 public-key signature system including detached signatures The underlying implementation uses the ref10 implementation of ed25519 from SUPERCOP and should be relatively fast For more information including how to get copy of the software visit http ed25519.cr.yp.to",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "Ed25519",
          "package": "ed25519",
          "partial": "Ed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePublicKey\u003c/a\u003e\u003c/code\u003e created by \u003ccode\u003e\u003ca\u003ecreateKeypair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "PublicKey",
          "package": "ed25519",
          "source": "src/Crypto-Sign-Ed25519.html#PublicKey",
          "type": "newtype"
        },
        "index": {
          "description": "PublicKey created by createKeypair",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "PublicKey",
          "package": "ed25519",
          "partial": "Public Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSecretKey\u003c/a\u003e\u003c/code\u003e created by \u003ccode\u003e\u003ca\u003ecreateKeypair\u003c/a\u003e\u003c/code\u003e. Be sure to keep this\n safe!\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "SecretKey",
          "package": "ed25519",
          "source": "src/Crypto-Sign-Ed25519.html#SecretKey",
          "type": "newtype"
        },
        "index": {
          "description": "SecretKey created by createKeypair Be sure to keep this safe",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "SecretKey",
          "package": "ed25519",
          "partial": "Secret Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#t:SecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e which is detached from the message it signed.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "Signature",
          "package": "ed25519",
          "source": "src/Crypto-Sign-Ed25519.html#Signature",
          "type": "newtype"
        },
        "index": {
          "description": "Signature which is detached from the message it signed",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "Signature",
          "package": "ed25519",
          "partial": "Signature",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "PublicKey",
          "package": "ed25519",
          "signature": "PublicKey",
          "source": "src/Crypto-Sign-Ed25519.html#PublicKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "PublicKey",
          "package": "ed25519",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "SecretKey",
          "package": "ed25519",
          "signature": "SecretKey",
          "source": "src/Crypto-Sign-Ed25519.html#SecretKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "SecretKey",
          "package": "ed25519",
          "partial": "Secret Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:SecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "Signature",
          "package": "ed25519",
          "signature": "Signature",
          "source": "src/Crypto-Sign-Ed25519.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "Signature",
          "package": "ed25519",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly generate a public and private key for doing\n authenticated signing and verification.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "createKeypair",
          "package": "ed25519",
          "signature": "IO (PublicKey, SecretKey)",
          "source": "src/Crypto-Sign-Ed25519.html#createKeypair",
          "type": "function"
        },
        "index": {
          "description": "Randomly generate public and private key for doing authenticated signing and verification",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "createKeypair",
          "normalized": "IO(PublicKey,SecretKey)",
          "package": "ed25519",
          "partial": "Keypair",
          "signature": "IO(PublicKey,SecretKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:createKeypair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a message with a particular \u003ccode\u003e\u003ca\u003eSecretKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "sign",
          "package": "ed25519",
          "signature": "SecretKey-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Sign message with particular SecretKey",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "sign",
          "normalized": "SecretKey-\u003eByteString-\u003eByteString",
          "package": "ed25519",
          "signature": "SecretKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a message with a particular \u003ccode\u003e\u003ca\u003eSecretKey\u003c/a\u003e\u003c/code\u003e, only returning the\n signature without the message.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "sign'",
          "package": "ed25519",
          "signature": "SecretKey-\u003e ByteString-\u003e Signature",
          "type": "function"
        },
        "index": {
          "description": "Sign message with particular SecretKey only returning the signature without the message",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "sign'",
          "normalized": "SecretKey-\u003eByteString-\u003eSignature",
          "package": "ed25519",
          "signature": "SecretKey-\u003eByteString-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:sign-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "unPublicKey",
          "package": "ed25519",
          "signature": "ByteString",
          "source": "src/Crypto-Sign-Ed25519.html#PublicKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "unPublicKey",
          "package": "ed25519",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:unPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "unSecretKey",
          "package": "ed25519",
          "signature": "ByteString",
          "source": "src/Crypto-Sign-Ed25519.html#SecretKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "unSecretKey",
          "package": "ed25519",
          "partial": "Secret Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:unSecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Sign.Ed25519",
          "name": "unSignature",
          "package": "ed25519",
          "signature": "ByteString",
          "source": "src/Crypto-Sign-Ed25519.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "unSignature",
          "package": "ed25519",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:unSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifies a signed message against a \u003ccode\u003e\u003ca\u003ePublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "verify",
          "package": "ed25519",
          "signature": "PublicKey-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verifies signed message against PublicKey",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "verify",
          "normalized": "PublicKey-\u003eByteString-\u003eBool",
          "package": "ed25519",
          "signature": "PublicKey-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a message with a detached \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e, for a given\n \u003ccode\u003e\u003ca\u003ePublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Sign.Ed25519",
          "name": "verify'",
          "package": "ed25519",
          "signature": "PublicKey-\u003e ByteString-\u003e Signature-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify message with detached Signature for given PublicKey",
          "hierarchy": "Crypto Sign Ed25519",
          "module": "Crypto.Sign.Ed25519",
          "name": "verify'",
          "normalized": "PublicKey-\u003eByteString-\u003eSignature-\u003eBool",
          "package": "ed25519",
          "signature": "PublicKey-\u003eByteString-\u003eSignature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ed25519/docs/Crypto-Sign-Ed25519.html#v:verify-39-"
      }
    }
  ]
]