[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt is suggested you use the 'crypto-api' class-based interface to access the MD5 algorithm.\n Either rely on type inference or provide an explicit type:\n\u003c/p\u003e\u003cpre\u003e\n   hashFileStrict = liftM hash' B.readFile\n   hashFileLazyBS = liftM hash B.readFile\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-Pure-MD5.html",
        "fct-type": "module",
        "title": "MD5"
      },
      "index": {
        "description": "It is suggested you use the crypto-api class-based interface to access the MD5 algorithm Either rely on type inference or provide an explicit type hashFileStrict liftM hash B.readFile hashFileLazyBS liftM hash B.readFile",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "MD5",
        "normalized": "",
        "package": "pureMD5",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eThe Hash class is intended as the generic interface\n targeted by maintainers of Haskell digest implementations.\n Using this generic interface, higher level functions\n such as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehash'\u003c/a\u003e\u003c/code\u003e provide a useful API\n for comsumers of hash implementations.\n\u003c/p\u003e\u003cp\u003eAny instantiated implementation must handle unaligned data\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Hash"
      },
      "index": {
        "description": "The Hash class is intended as the generic interface targeted by maintainers of Haskell digest implementations Using this generic interface higher level functions such as hash and hash provide useful API for comsumers of hash implementations Any instantiated implementation must handle unaligned data",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "Hash",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:MD5Context",
      "description": {
        "fct-descr": "\u003cp\u003eThe type for final results.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-Pure-MD5.html#MD5Context",
        "fct-type": "data",
        "title": "MD5Context"
      },
      "index": {
        "description": "The type for final results",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "MD5Context",
        "normalized": "",
        "package": "pureMD5",
        "partial": "MD Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#t:MD5Digest",
      "description": {
        "fct-descr": "\u003cp\u003eAfter finalizing a context, using md5Finalize, a new type\n is returned to prevent 're-finalizing' the structure.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-Pure-MD5.html#MD5Digest",
        "fct-type": "data",
        "title": "MD5Digest"
      },
      "index": {
        "description": "After finalizing context using md5Finalize new type is returned to prevent re-finalizing the structure",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "MD5Digest",
        "normalized": "",
        "package": "pureMD5",
        "partial": "MD Digest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:blockLength",
      "description": {
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "blockLength",
        "fct-type": "method",
        "title": "blockLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "blockLength",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:finalize",
      "description": {
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "finalize",
        "fct-type": "method",
        "title": "finalize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "finalize",
        "normalized": "",
        "package": "pureMD5",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:initialCtx",
      "description": {
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "initialCtx",
        "fct-type": "method",
        "title": "initialCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "initialCtx",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses a lazy ByteString and returns the md5 digest.\n   This is probably what you want.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "ByteString -\u003e MD5Digest",
        "fct-source": "src/Data-Digest-Pure-MD5.html#md5",
        "fct-type": "function",
        "title": "md5"
      },
      "index": {
        "description": "Processes lazy ByteString and returns the md5 digest This is probably what you want",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "md5",
        "normalized": "ByteString-\u003eMD Digest",
        "package": "pureMD5",
        "partial": "",
        "signature": "ByteString-\u003eMD Digest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5Finalize",
      "description": {
        "fct-descr": "\u003cp\u003eCloses an MD5 context, thus producing the digest.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "MD5Context -\u003e ByteString -\u003e MD5Digest",
        "fct-source": "src/Data-Digest-Pure-MD5.html#md5Finalize",
        "fct-type": "function",
        "title": "md5Finalize"
      },
      "index": {
        "description": "Closes an MD5 context thus producing the digest",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "md5Finalize",
        "normalized": "MD Context-\u003eByteString-\u003eMD Digest",
        "package": "pureMD5",
        "partial": "Finalize",
        "signature": "MD Context-\u003eByteString-\u003eMD Digest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5InitialContext",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial context to use when calling md5Update for the first time\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "MD5Context",
        "fct-source": "src/Data-Digest-Pure-MD5.html#md5InitialContext",
        "fct-type": "function",
        "title": "md5InitialContext"
      },
      "index": {
        "description": "The initial context to use when calling md5Update for the first time",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "md5InitialContext",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Initial Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:md5Update",
      "description": {
        "fct-descr": "\u003cp\u003eAlters the MD5Context with a partial digest of the data.\n\u003c/p\u003e\u003cp\u003eThe input bytestring MUST be a multiple of the blockSize\n or bad things can happen (incorrect digest results)!\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "MD5Context -\u003e ByteString -\u003e MD5Context",
        "fct-source": "src/Data-Digest-Pure-MD5.html#md5Update",
        "fct-type": "function",
        "title": "md5Update"
      },
      "index": {
        "description": "Alters the MD5Context with partial digest of the data The input bytestring MUST be multiple of the blockSize or bad things can happen incorrect digest results",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "md5Update",
        "normalized": "MD Context-\u003eByteString-\u003eMD Context",
        "package": "pureMD5",
        "partial": "Update",
        "signature": "MD Context-\u003eByteString-\u003eMD Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:outputLength",
      "description": {
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "outputLength",
        "fct-type": "method",
        "title": "outputLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "outputLength",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pureMD5/docs/Data-Digest-Pure-MD5.html#v:updateCtx",
      "description": {
        "fct-module": "Data.Digest.Pure.MD5",
        "fct-package": "pureMD5",
        "fct-signature": "updateCtx",
        "fct-type": "method",
        "title": "updateCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest Pure MD5",
        "module": "Data.Digest.Pure.MD5",
        "name": "updateCtx",
        "normalized": "",
        "package": "pureMD5",
        "partial": "Ctx",
        "signature": ""
      }
    }
  }
]