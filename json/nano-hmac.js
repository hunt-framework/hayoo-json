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
        "word": "nano-hmac"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreated     : 2008-02-03\n\u003c/p\u003e\u003cp\u003eBindings to OpenSSL HMAC.\n\u003c/p\u003e\u003cp\u003eSample Usage:\n\u003c/p\u003e\u003cpre\u003e d \u003c- hmac md5 myKey myMessage\n putStrLn d\n\n \"e9139d1e6ee064ef8cf514fc7dc83e86\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "HMAC",
          "package": "nano-hmac",
          "source": "src/Data-Digest-OpenSSL-HMAC.html",
          "type": "module"
        },
        "index": {
          "description": "Created Bindings to OpenSSL HMAC Sample Usage hmac md5 myKey myMessage putStrLn e9139d1e6ee064ef8cf514fc7dc83e86",
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "HMAC",
          "package": "nano-hmac",
          "partial": "HMAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "CryptoHashFunction",
          "package": "nano-hmac",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#CryptoHashFunction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "CryptoHashFunction",
          "package": "nano-hmac",
          "partial": "Crypto Hash Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#t:CryptoHashFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an HMAC\n\u003c/p\u003e\u003cp\u003eThis implementation is safe and will copy the ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "hmac",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction-\u003e ByteString-\u003e ByteString-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Generate an HMAC This implementation is safe and will copy the ByteStrings",
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "hmac",
          "normalized": "CryptoHashFunction-\u003eByteString-\u003eByteString-\u003eIO String",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction-\u003eByteString-\u003eByteString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:hmac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "md5",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#md5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "md5",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:md5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha1",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha1",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha224",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha224",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha256",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha256",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha384",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha384",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha512",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction",
          "source": "src/Data-Digest-OpenSSL-HMAC.html#sha512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "sha512",
          "package": "nano-hmac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:sha512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an HMAC\n\u003c/p\u003e\u003cp\u003eThis implementation is will not copy the ByteStrings and uses unsafePerformIO\n\u003c/p\u003e",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "unsafeHMAC",
          "package": "nano-hmac",
          "signature": "CryptoHashFunction-\u003e ByteString-\u003e ByteString-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Generate an HMAC This implementation is will not copy the ByteStrings and uses unsafePerformIO",
          "hierarchy": "Data Digest OpenSSL HMAC",
          "module": "Data.Digest.OpenSSL.HMAC",
          "name": "unsafeHMAC",
          "normalized": "CryptoHashFunction-\u003eByteString-\u003eByteString-\u003eString",
          "package": "nano-hmac",
          "partial": "HMAC",
          "signature": "CryptoHashFunction-\u003eByteString-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-hmac/docs/Data-Digest-OpenSSL-HMAC.html#v:unsafeHMAC"
      }
    }
  ]
]