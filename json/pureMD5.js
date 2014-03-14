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
        "word": "pureMD5"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt is suggested you use the 'crypto-api' class-based interface to access the MD5 algorithm.\n Either rely on type inference or provide an explicit type:\n\u003c/p\u003e\u003cpre\u003e\n   hashFileStrict = liftM hash' B.readFile\n   hashFileLazyBS = liftM hash B.readFile\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5",
          "package": "pureMD5",
          "source": "src/Data-Digest-Pure-MD5.html",
          "type": "module"
        },
        "index": {
          "description": "It is suggested you use the crypto-api class-based interface to access the MD5 algorithm Either rely on type inference or provide an explicit type hashFileStrict liftM hash B.readFile hashFileLazyBS liftM hash B.readFile",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5",
          "package": "pureMD5",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "Hash",
          "package": "pureMD5",
          "type": "class"
        },
        "index": {
          "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "Hash",
          "package": "pureMD5",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for final results.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5Context",
          "package": "pureMD5",
          "source": "src/Data-Digest-Pure-MD5.html#MD5Context",
          "type": "data"
        },
        "index": {
          "description": "The type for final results",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5Context",
          "package": "pureMD5",
          "partial": "MD Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:MD5Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter finalizing a context, using md5Finalize, a new type\n is returned to prevent 're-finalizing' the structure.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5Digest",
          "package": "pureMD5",
          "source": "src/Data-Digest-Pure-MD5.html#MD5Digest",
          "type": "data"
        },
        "index": {
          "description": "After finalizing context using md5Finalize new type is returned to prevent re-finalizing the structure",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "MD5Digest",
          "package": "pureMD5",
          "partial": "MD Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:MD5Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.MD5",
          "name": "blockLength",
          "package": "pureMD5",
          "signature": "blockLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "blockLength",
          "package": "pureMD5",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:blockLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.MD5",
          "name": "finalize",
          "package": "pureMD5",
          "signature": "finalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "finalize",
          "package": "pureMD5",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.MD5",
          "name": "initialCtx",
          "package": "pureMD5",
          "signature": "initialCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "initialCtx",
          "package": "pureMD5",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:initialCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses a lazy ByteString and returns the md5 digest.\n   This is probably what you want.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5",
          "package": "pureMD5",
          "signature": "ByteString -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-MD5.html#md5",
          "type": "function"
        },
        "index": {
          "description": "Processes lazy ByteString and returns the md5 digest This is probably what you want",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5",
          "normalized": "ByteString-\u003eMD Digest",
          "package": "pureMD5",
          "signature": "ByteString-\u003eMD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses an MD5 context, thus producing the digest.\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5Finalize",
          "package": "pureMD5",
          "signature": "MD5Context -\u003e ByteString -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-MD5.html#md5Finalize",
          "type": "function"
        },
        "index": {
          "description": "Closes an MD5 context thus producing the digest",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5Finalize",
          "normalized": "MD Context-\u003eByteString-\u003eMD Digest",
          "package": "pureMD5",
          "partial": "Finalize",
          "signature": "MD Context-\u003eByteString-\u003eMD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5Finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial context to use when calling md5Update for the first time\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5InitialContext",
          "package": "pureMD5",
          "signature": "MD5Context",
          "source": "src/Data-Digest-Pure-MD5.html#md5InitialContext",
          "type": "function"
        },
        "index": {
          "description": "The initial context to use when calling md5Update for the first time",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5InitialContext",
          "package": "pureMD5",
          "partial": "Initial Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5InitialContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlters the MD5Context with a partial digest of the data.\n\u003c/p\u003e\u003cp\u003eThe input bytestring MUST be a multiple of the blockSize\n or bad things can happen (incorrect digest results)!\n\u003c/p\u003e",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5Update",
          "package": "pureMD5",
          "signature": "MD5Context -\u003e ByteString -\u003e MD5Context",
          "source": "src/Data-Digest-Pure-MD5.html#md5Update",
          "type": "function"
        },
        "index": {
          "description": "Alters the MD5Context with partial digest of the data The input bytestring MUST be multiple of the blockSize or bad things can happen incorrect digest results",
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "md5Update",
          "normalized": "MD Context-\u003eByteString-\u003eMD Context",
          "package": "pureMD5",
          "partial": "Update",
          "signature": "MD Context-\u003eByteString-\u003eMD Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.MD5",
          "name": "outputLength",
          "package": "pureMD5",
          "signature": "outputLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "outputLength",
          "package": "pureMD5",
          "partial": "Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:outputLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Pure.MD5",
          "name": "updateCtx",
          "package": "pureMD5",
          "signature": "updateCtx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Pure MD5",
          "module": "Data.Digest.Pure.MD5",
          "name": "updateCtx",
          "package": "pureMD5",
          "partial": "Ctx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:updateCtx"
      }
    }
  ]
]