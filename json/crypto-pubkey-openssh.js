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
        "word": "crypto-pubkey-openssh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSsh",
          "package": "crypto-pubkey-openssh",
          "source": "src/Crypto-PubKey-OpenSsh.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSsh",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKey",
          "package": "crypto-pubkey-openssh",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPrivateKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKey",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Private Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#t:OpenSshPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKey",
          "package": "crypto-pubkey-openssh",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPublicKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKey",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#t:OpenSshPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKeyDsa",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPrivateKeyDsa PrivateKey PublicNumber",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPrivateKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKeyDsa",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Private Key Dsa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:OpenSshPrivateKeyDsa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKeyRsa",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPrivateKeyRsa PrivateKey",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPrivateKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPrivateKeyRsa",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Private Key Rsa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:OpenSshPrivateKeyRsa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKeyDsa",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPublicKeyDsa PublicKey ByteString",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPublicKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKeyDsa",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Public Key Dsa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:OpenSshPublicKeyDsa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKeyRsa",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPublicKeyRsa PublicKey ByteString",
          "source": "src/Crypto-PubKey-OpenSsh-Types.html#OpenSshPublicKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "OpenSshPublicKeyRsa",
          "package": "crypto-pubkey-openssh",
          "partial": "Open Ssh Public Key Rsa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:OpenSshPublicKeyRsa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "decodePrivate",
          "package": "crypto-pubkey-openssh",
          "signature": "ByteString -\u003e Either String OpenSshPrivateKey",
          "source": "src/Crypto-PubKey-OpenSsh-Decode.html#decodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "decodePrivate",
          "normalized": "ByteString-\u003eEither String OpenSshPrivateKey",
          "package": "crypto-pubkey-openssh",
          "partial": "Private",
          "signature": "ByteString-\u003eEither String OpenSshPrivateKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:decodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "decodePublic",
          "package": "crypto-pubkey-openssh",
          "signature": "ByteString -\u003e Either String OpenSshPublicKey",
          "source": "src/Crypto-PubKey-OpenSsh-Decode.html#decodePublic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "decodePublic",
          "normalized": "ByteString-\u003eEither String OpenSshPublicKey",
          "package": "crypto-pubkey-openssh",
          "partial": "Public",
          "signature": "ByteString-\u003eEither String OpenSshPublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:decodePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "encodePrivate",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPrivateKey -\u003e ByteString",
          "source": "src/Crypto-PubKey-OpenSsh-Encode.html#encodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "encodePrivate",
          "normalized": "OpenSshPrivateKey-\u003eByteString",
          "package": "crypto-pubkey-openssh",
          "partial": "Private",
          "signature": "OpenSshPrivateKey-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:encodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PubKey.OpenSsh",
          "name": "encodePublic",
          "package": "crypto-pubkey-openssh",
          "signature": "OpenSshPublicKey -\u003e ByteString",
          "source": "src/Crypto-PubKey-OpenSsh-Encode.html#encodePublic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PubKey OpenSsh",
          "module": "Crypto.PubKey.OpenSsh",
          "name": "encodePublic",
          "normalized": "OpenSshPublicKey-\u003eByteString",
          "package": "crypto-pubkey-openssh",
          "partial": "Public",
          "signature": "OpenSshPublicKey-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-pubkey-openssh/docs/Crypto-PubKey-OpenSsh.html#v:encodePublic"
      }
    }
  ]
]