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
        "word": "openssl-createkey"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.CreateKey",
          "name": "CreateKey",
          "package": "openssl-createkey",
          "source": "src/OpenSSL-CreateKey.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "OpenSSL CreateKey",
          "module": "OpenSSL.CreateKey",
          "name": "CreateKey",
          "package": "openssl-createkey",
          "partial": "Create Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/openssl-createkey/docs/OpenSSL-CreateKey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.CreateKey",
          "name": "createKey",
          "package": "openssl-createkey",
          "signature": "String-\u003e FilePath-\u003e Maybe SomeKeyPair-\u003e PemPasswordSupply-\u003e IO (X509, SomeKeyPair)",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL CreateKey",
          "module": "OpenSSL.CreateKey",
          "name": "createKey",
          "normalized": "String-\u003eFilePath-\u003eMaybe SomeKeyPair-\u003ePemPasswordSupply-\u003eIO(X,SomeKeyPair)",
          "package": "openssl-createkey",
          "partial": "Key",
          "signature": "String-\u003eFilePath-\u003eMaybe SomeKeyPair-\u003ePemPasswordSupply-\u003eIO(X,SomeKeyPair)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-createkey/docs/OpenSSL-CreateKey.html#v:createKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.CreateKey",
          "name": "promptPassword",
          "package": "openssl-createkey",
          "signature": "PemPasswordSupply",
          "source": "src/OpenSSL-CreateKey.html#promptPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL CreateKey",
          "module": "OpenSSL.CreateKey",
          "name": "promptPassword",
          "package": "openssl-createkey",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-createkey/docs/OpenSSL-CreateKey.html#v:promptPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.CreateKey",
          "name": "readCertificate",
          "package": "openssl-createkey",
          "signature": "FilePath -\u003e IO X509",
          "source": "src/OpenSSL-CreateKey.html#readCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL CreateKey",
          "module": "OpenSSL.CreateKey",
          "name": "readCertificate",
          "normalized": "FilePath-\u003eIO X",
          "package": "openssl-createkey",
          "partial": "Certificate",
          "signature": "FilePath-\u003eIO X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-createkey/docs/OpenSSL-CreateKey.html#v:readCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead Key\n\u003c/p\u003e",
          "module": "OpenSSL.CreateKey",
          "name": "readKeyPair",
          "package": "openssl-createkey",
          "signature": "FilePath -\u003e PemPasswordSupply -\u003e IO (X509, SomeKeyPair)",
          "source": "src/OpenSSL-CreateKey.html#readKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Read Key",
          "hierarchy": "OpenSSL CreateKey",
          "module": "OpenSSL.CreateKey",
          "name": "readKeyPair",
          "normalized": "FilePath-\u003ePemPasswordSupply-\u003eIO(X,SomeKeyPair)",
          "package": "openssl-createkey",
          "partial": "Key Pair",
          "signature": "FilePath-\u003ePemPasswordSupply-\u003eIO(X,SomeKeyPair)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-createkey/docs/OpenSSL-CreateKey.html#v:readKeyPair"
      }
    }
  ]
]