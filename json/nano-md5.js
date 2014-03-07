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
        "word": "nano-md5"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "MD5",
          "package": "nano-md5",
          "source": "src/Data-Digest-OpenSSL-MD5.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL MD5",
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "MD5",
          "package": "nano-md5",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nano-md5/docs/Data-Digest-OpenSSL-MD5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "c_md5",
          "package": "nano-md5",
          "signature": "Ptr CChar -\u003e CULong -\u003e Ptr CChar -\u003e IO (Ptr Word8)",
          "source": "src/Data-Digest-OpenSSL-MD5.html#c_md5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL MD5",
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "c_md5",
          "normalized": "Ptr CChar-\u003eCULong-\u003ePtr CChar-\u003eIO(Ptr Word)",
          "package": "nano-md5",
          "signature": "Ptr CChar-\u003eCULong-\u003ePtr CChar-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-md5/docs/Data-Digest-OpenSSL-MD5.html#v:c_md5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "md5_digest_length",
          "package": "nano-md5",
          "signature": "Int",
          "source": "src/Data-Digest-OpenSSL-MD5.html#md5_digest_length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest OpenSSL MD5",
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "md5_digest_length",
          "package": "nano-md5",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-md5/docs/Data-Digest-OpenSSL-MD5.html#v:md5_digest_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast md5 using OpenSSL. The md5 hash should be referentially transparent..\n The ByteString is guaranteed not to be copied.\n\u003c/p\u003e\u003cp\u003eThe result string should be identical to the output of MD5(1).\n That is:\n\u003c/p\u003e\u003cpre\u003e $ md5 /usr/share/dict/words \n MD5 (/usr/share/dict/words) = e5c152147e93b81424c13772330e74b3\n\u003c/pre\u003e\u003cp\u003eWhile this md5sum binding will return:\n\u003c/p\u003e",
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "md5sum",
          "package": "nano-md5",
          "signature": "ByteString -\u003e String",
          "source": "src/Data-Digest-OpenSSL-MD5.html#md5sum",
          "type": "function"
        },
        "index": {
          "description": "Fast md5 using OpenSSL The md5 hash should be referentially transparent The ByteString is guaranteed not to be copied The result string should be identical to the output of MD5 That is md5 usr share dict words MD5 usr share dict words e5c152147e93b81424c13772330e74b3 While this md5sum binding will return",
          "hierarchy": "Data Digest OpenSSL MD5",
          "module": "Data.Digest.OpenSSL.MD5",
          "name": "md5sum",
          "normalized": "ByteString-\u003eString",
          "package": "nano-md5",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nano-md5/docs/Data-Digest-OpenSSL-MD5.html#v:md5sum"
      }
    }
  ]
]