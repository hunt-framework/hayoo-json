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
        "word": "SHA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure implementations of the SHA suite of hash functions. The implementation\n is basically an unoptimized translation of FIPS 180-2 into Haskell. If you're\n looking for performance, you probably won't find it here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA",
          "package": "SHA",
          "source": "src/Data-Digest-Pure-SHA.html",
          "type": "module"
        },
        "index": {
          "description": "Pure implementations of the SHA suite of hash functions The implementation is basically an unoptimized translation of FIPS into Haskell If you re looking for performance you probably won find it here",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA",
          "package": "SHA",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract datatype for digests.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "Digest",
          "package": "SHA",
          "source": "src/Data-Digest-Pure-SHA.html#Digest",
          "type": "data"
        },
        "index": {
          "description": "An abstract datatype for digests",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "Digest",
          "package": "SHA",
          "partial": "Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA1State",
          "package": "SHA",
          "source": "src/Data-Digest-Pure-SHA.html#SHA1State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA1State",
          "package": "SHA",
          "partial": "SHA State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#t:SHA1State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA256State",
          "package": "SHA",
          "source": "src/Data-Digest-Pure-SHA.html#SHA256State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA256State",
          "package": "SHA",
          "partial": "SHA State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#t:SHA256State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA512State",
          "package": "SHA",
          "source": "src/Data-Digest-Pure-SHA.html#SHA512State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "SHA512State",
          "package": "SHA",
          "partial": "SHA State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#t:SHA512State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a digest to a ByteString.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "bytestringDigest",
          "package": "SHA",
          "signature": "Digest t -\u003e ByteString",
          "source": "src/Data-Digest-Pure-SHA.html#bytestringDigest",
          "type": "function"
        },
        "index": {
          "description": "Convert digest to ByteString",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "bytestringDigest",
          "normalized": "Digest a-\u003eByteString",
          "package": "SHA",
          "partial": "Digest",
          "signature": "Digest t-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:bytestringDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha1Incremental",
          "package": "SHA",
          "signature": "Decoder SHA1State -\u003e Int -\u003e Digest SHA1State",
          "source": "src/Data-Digest-Pure-SHA.html#completeSha1Incremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha1Incremental",
          "normalized": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha Incremental",
          "signature": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:completeSha1Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha224Incremental",
          "package": "SHA",
          "signature": "Decoder SHA256State -\u003e Int -\u003e Digest SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#completeSha224Incremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha224Incremental",
          "normalized": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha Incremental",
          "signature": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:completeSha224Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha256Incremental",
          "package": "SHA",
          "signature": "Decoder SHA256State -\u003e Int -\u003e Digest SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#completeSha256Incremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha256Incremental",
          "normalized": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha Incremental",
          "signature": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:completeSha256Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha384Incremental",
          "package": "SHA",
          "signature": "Decoder SHA512State -\u003e Int -\u003e Digest SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#completeSha384Incremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha384Incremental",
          "normalized": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha Incremental",
          "signature": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:completeSha384Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha512Incremental",
          "package": "SHA",
          "signature": "Decoder SHA512State -\u003e Int -\u003e Digest SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#completeSha512Incremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "completeSha512Incremental",
          "normalized": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha Incremental",
          "signature": "Decoder SHA State-\u003eInt-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:completeSha512Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-1.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha1",
          "package": "SHA",
          "signature": "ByteString-\u003e ByteString-\u003e Digest SHA1State",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-1",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha1",
          "normalized": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha",
          "signature": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:hmacSha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-224.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha224",
          "package": "SHA",
          "signature": "ByteString-\u003e ByteString-\u003e Digest SHA256State",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-224",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha224",
          "normalized": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha",
          "signature": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:hmacSha224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-256.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha256",
          "package": "SHA",
          "signature": "ByteString-\u003e ByteString-\u003e Digest SHA256State",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-256",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha256",
          "normalized": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha",
          "signature": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:hmacSha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-384.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha384",
          "package": "SHA",
          "signature": "ByteString-\u003e ByteString-\u003e Digest SHA512State",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-384",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha384",
          "normalized": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha",
          "signature": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:hmacSha384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-512.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha512",
          "package": "SHA",
          "signature": "ByteString-\u003e ByteString-\u003e Digest SHA512State",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-512",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "hmacSha512",
          "normalized": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "package": "SHA",
          "partial": "Sha",
          "signature": "ByteString-\u003eByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:hmacSha512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a digest to an Integer.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "integerDigest",
          "package": "SHA",
          "signature": "Digest t -\u003e Integer",
          "source": "src/Data-Digest-Pure-SHA.html#integerDigest",
          "type": "function"
        },
        "index": {
          "description": "Convert digest to an Integer",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "integerDigest",
          "normalized": "Digest a-\u003eInteger",
          "package": "SHA",
          "partial": "Digest",
          "signature": "Digest t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:integerDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the SHA-1 hash of the given ByteString. The output is guaranteed\n to be exactly 160 bits, or 20 bytes, long. This is a good default for\n programs that need a good, but not necessarily hyper-secure, hash function.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha1",
          "package": "SHA",
          "signature": "ByteString -\u003e Digest SHA1State",
          "source": "src/Data-Digest-Pure-SHA.html#sha1",
          "type": "function"
        },
        "index": {
          "description": "Compute the SHA-1 hash of the given ByteString The output is guaranteed to be exactly bits or bytes long This is good default for programs that need good but not necessarily hyper-secure hash function",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha1",
          "normalized": "ByteString-\u003eDigest SHA State",
          "package": "SHA",
          "signature": "ByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esha1\u003c/a\u003e\u003c/code\u003e but use an incremental interface. When the decoder has\n been completely fed, \u003ccode\u003e\u003ca\u003ecompleteSha1Incremental\u003c/a\u003e\u003c/code\u003e must be used so it can\n finish successfully.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha1Incremental",
          "package": "SHA",
          "signature": "Decoder SHA1State",
          "source": "src/Data-Digest-Pure-SHA.html#sha1Incremental",
          "type": "function"
        },
        "index": {
          "description": "Similar to sha1 but use an incremental interface When the decoder has been completely fed completeSha1Incremental must be used so it can finish successfully",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha1Incremental",
          "package": "SHA",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha1Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the SHA-224 hash of the given ByteString. Note that SHA-224 and\n SHA-384 differ only slightly from SHA-256 and SHA-512, and use truncated\n versions of the resulting hashes. So using 224/384 may not, in fact, save\n you very much ...\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha224",
          "package": "SHA",
          "signature": "ByteString -\u003e Digest SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#sha224",
          "type": "function"
        },
        "index": {
          "description": "Compute the SHA-224 hash of the given ByteString Note that SHA-224 and SHA-384 differ only slightly from SHA-256 and SHA-512 and use truncated versions of the resulting hashes So using may not in fact save you very much",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha224",
          "normalized": "ByteString-\u003eDigest SHA State",
          "package": "SHA",
          "signature": "ByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esha224\u003c/a\u003e\u003c/code\u003e but use an incremental interface. When the decoder has\n been completely fed, \u003ccode\u003e\u003ca\u003ecompleteSha224Incremental\u003c/a\u003e\u003c/code\u003e must be used so it can\n finish successfully.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha224Incremental",
          "package": "SHA",
          "signature": "Decoder SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#sha224Incremental",
          "type": "function"
        },
        "index": {
          "description": "Similar to sha224 but use an incremental interface When the decoder has been completely fed completeSha224Incremental must be used so it can finish successfully",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha224Incremental",
          "package": "SHA",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha224Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the SHA-256 hash of the given ByteString. The output is guaranteed\n to be exactly 256 bits, or 32 bytes, long. If your security requirements\n are pretty serious, this is a good choice. For truly significant security\n concerns, however, you might try one of the bigger options.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha256",
          "package": "SHA",
          "signature": "ByteString -\u003e Digest SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#sha256",
          "type": "function"
        },
        "index": {
          "description": "Compute the SHA-256 hash of the given ByteString The output is guaranteed to be exactly bits or bytes long If your security requirements are pretty serious this is good choice For truly significant security concerns however you might try one of the bigger options",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha256",
          "normalized": "ByteString-\u003eDigest SHA State",
          "package": "SHA",
          "signature": "ByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esha256\u003c/a\u003e\u003c/code\u003e but use an incremental interface. When the decoder has\n been completely fed, \u003ccode\u003e\u003ca\u003ecompleteSha256Incremental\u003c/a\u003e\u003c/code\u003e must be used so it can\n finish successfully.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha256Incremental",
          "package": "SHA",
          "signature": "Decoder SHA256State",
          "source": "src/Data-Digest-Pure-SHA.html#sha256Incremental",
          "type": "function"
        },
        "index": {
          "description": "Similar to sha256 but use an incremental interface When the decoder has been completely fed completeSha256Incremental must be used so it can finish successfully",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha256Incremental",
          "package": "SHA",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha256Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the SHA-384 hash of the given ByteString. Yup, you guessed it,\n the output will be exactly 384 bits, or 48 bytes, long.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha384",
          "package": "SHA",
          "signature": "ByteString -\u003e Digest SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#sha384",
          "type": "function"
        },
        "index": {
          "description": "Compute the SHA-384 hash of the given ByteString Yup you guessed it the output will be exactly bits or bytes long",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha384",
          "normalized": "ByteString-\u003eDigest SHA State",
          "package": "SHA",
          "signature": "ByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esha384\u003c/a\u003e\u003c/code\u003e but use an incremental interface. When the decoder has\n been completely fed, \u003ccode\u003e\u003ca\u003ecompleteSha384Incremental\u003c/a\u003e\u003c/code\u003e must be used so it can\n finish successfully.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha384Incremental",
          "package": "SHA",
          "signature": "Decoder SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#sha384Incremental",
          "type": "function"
        },
        "index": {
          "description": "Similar to sha384 but use an incremental interface When the decoder has been completely fed completeSha384Incremental must be used so it can finish successfully",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha384Incremental",
          "package": "SHA",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha384Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor those for whom only the biggest hashes will do, this computes the\n SHA-512 hash of the given ByteString. The output will be 64 bytes, or\n 512 bits, long.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha512",
          "package": "SHA",
          "signature": "ByteString -\u003e Digest SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#sha512",
          "type": "function"
        },
        "index": {
          "description": "For those for whom only the biggest hashes will do this computes the SHA-512 hash of the given ByteString The output will be bytes or bits long",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha512",
          "normalized": "ByteString-\u003eDigest SHA State",
          "package": "SHA",
          "signature": "ByteString-\u003eDigest SHA State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esha512\u003c/a\u003e\u003c/code\u003e but use an incremental interface. When the decoder has\n been completely fed, \u003ccode\u003e\u003ca\u003ecompleteSha512Incremental\u003c/a\u003e\u003c/code\u003e must be used so it can\n finish successfully.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha512Incremental",
          "package": "SHA",
          "signature": "Decoder SHA512State",
          "source": "src/Data-Digest-Pure-SHA.html#sha512Incremental",
          "type": "function"
        },
        "index": {
          "description": "Similar to sha512 but use an incremental interface When the decoder has been completely fed completeSha512Incremental must be used so it can finish successfully",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "sha512Incremental",
          "package": "SHA",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:sha512Incremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a digest to a string.\n The digest is rendered as fixed with hexadecimal number.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.SHA",
          "name": "showDigest",
          "package": "SHA",
          "signature": "Digest t -\u003e String",
          "source": "src/Data-Digest-Pure-SHA.html#showDigest",
          "type": "function"
        },
        "index": {
          "description": "Convert digest to string The digest is rendered as fixed with hexadecimal number",
          "hierarchy": "Data Digest Pure SHA",
          "module": "Data.Digest.Pure.SHA",
          "name": "showDigest",
          "normalized": "Digest a-\u003eString",
          "package": "SHA",
          "partial": "Digest",
          "signature": "Digest t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SHA/docs/Data-Digest-Pure-SHA.html#v:showDigest"
      }
    }
  ]
]