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
        "word": "commsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.BitWindow",
          "name": "BitWindow",
          "package": "commsec",
          "source": "src/Network-CommSec-BitWindow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network CommSec BitWindow",
          "module": "Network.CommSec.BitWindow",
          "name": "BitWindow",
          "package": "commsec",
          "partial": "Bit Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-BitWindow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bit Window is just an unpacked tuple of base and mask\n\u003c/p\u003e",
          "module": "Network.CommSec.BitWindow",
          "name": "BitWindow",
          "package": "commsec",
          "source": "src/Network-CommSec-BitWindow.html#BitWindow",
          "type": "type"
        },
        "index": {
          "description": "Bit Window is just an unpacked tuple of base and mask",
          "hierarchy": "Network CommSec BitWindow",
          "module": "Network.CommSec.BitWindow",
          "name": "BitWindow",
          "package": "commsec",
          "partial": "Bit Window",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-BitWindow.html#t:BitWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.BitWindow",
          "name": "updateBitWindow",
          "package": "commsec",
          "signature": "BitWindow -\u003e Word64 -\u003e Either CommSecError BitWindow",
          "source": "src/Network-CommSec-BitWindow.html#updateBitWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec BitWindow",
          "module": "Network.CommSec.BitWindow",
          "name": "updateBitWindow",
          "normalized": "BitWindow-\u003eWord-\u003eEither CommSecError BitWindow",
          "package": "commsec",
          "partial": "Bit Window",
          "signature": "BitWindow-\u003eWord-\u003eEither CommSecError BitWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-BitWindow.html#v:updateBitWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.BitWindow",
          "name": "zeroWindow",
          "package": "commsec",
          "signature": "BitWindow",
          "source": "src/Network-CommSec-BitWindow.html#zeroWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec BitWindow",
          "module": "Network.CommSec.BitWindow",
          "name": "zeroWindow",
          "package": "commsec",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-BitWindow.html#v:zeroWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommSec is a package that provides communication security for\n use with Haskell sockets.  Using an ephemeral shared\n secret you can build contexts for sending or receiving data between one\n or more peers.\n\u003c/p\u003e\u003cp\u003eDo not reuse the shared secret!  Key agreement mechanisms that leverage\n PKI might be added later.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.CommSec.Package",
          "name": "Package",
          "package": "commsec",
          "source": "src/Network-CommSec-Package.html",
          "type": "module"
        },
        "index": {
          "description": "CommSec is package that provides communication security for use with Haskell sockets Using an ephemeral shared secret you can build contexts for sending or receiving data between one or more peers Do not reuse the shared secret Key agreement mechanisms that leverage PKI might be added later",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "Package",
          "package": "commsec",
          "partial": "Package",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be returned by the decoding/receicing operations.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "CommSecError",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be returned by the decoding receicing operations",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "CommSecError",
          "package": "commsec",
          "partial": "Comm Sec Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#t:CommSecError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context useful for receiving data.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "InContext",
          "package": "commsec",
          "source": "src/Network-CommSec-Package.html#InContext",
          "type": "data"
        },
        "index": {
          "description": "context useful for receiving data",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "InContext",
          "package": "commsec",
          "partial": "In Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#t:InContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context useful for sending data.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "OutContext",
          "package": "commsec",
          "source": "src/Network-CommSec-Package.html#OutContext",
          "type": "data"
        },
        "index": {
          "description": "context useful for sending data",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "OutContext",
          "package": "commsec",
          "partial": "Out Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#t:OutContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicy for misordered packets.  Notice StrictOrdering does not mean\n every sequence numbered packet will be received, only that the sequence\n number will always increase.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "SequenceMode",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html#SequenceMode",
          "type": "data"
        },
        "index": {
          "description": "Policy for misordered packets Notice StrictOrdering does not mean every sequence numbered packet will be received only that the sequence number will always increase",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "SequenceMode",
          "package": "commsec",
          "partial": "Sequence Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#t:SequenceMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\"]",
          "name": "AllowOutOfOrder",
          "package": "commsec",
          "signature": "AllowOutOfOrder",
          "source": "src/Network-CommSec-Types.html#SequenceMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:AllowOutOfOrder\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:AllowOutOfOrder\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "AllowOutOfOrder",
          "package": "commsec",
          "partial": "Allow Out Of Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:AllowOutOfOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\",\"Network.CommSec\"]",
          "name": "BadPadding",
          "package": "commsec",
          "signature": "BadPadding",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:BadPadding\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:BadPadding\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:BadPadding\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "BadPadding",
          "package": "commsec",
          "partial": "Bad Padding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:BadPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\",\"Network.CommSec\"]",
          "name": "BuildKeyFailure",
          "package": "commsec",
          "signature": "BuildKeyFailure",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:BuildKeyFailure\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:BuildKeyFailure\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:BuildKeyFailure\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "BuildKeyFailure",
          "package": "commsec",
          "partial": "Build Key Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:BuildKeyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\",\"Network.CommSec\"]",
          "name": "DuplicateSeq",
          "package": "commsec",
          "signature": "DuplicateSeq",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:DuplicateSeq\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:DuplicateSeq\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:DuplicateSeq\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "DuplicateSeq",
          "package": "commsec",
          "partial": "Duplicate Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:DuplicateSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\",\"Network.CommSec\"]",
          "name": "InvalidICV",
          "package": "commsec",
          "signature": "InvalidICV",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:InvalidICV\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:InvalidICV\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:InvalidICV\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "InvalidICV",
          "package": "commsec",
          "partial": "Invalid ICV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:InvalidICV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\",\"Network.CommSec\"]",
          "name": "OldContext",
          "package": "commsec",
          "signature": "OldContext",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:OldContext\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:OldContext\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:OldContext\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "OldContext",
          "package": "commsec",
          "partial": "Old Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:OldContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\"]",
          "name": "Sequential",
          "package": "commsec",
          "signature": "Sequential",
          "source": "src/Network-CommSec-Types.html#SequenceMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:Sequential\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:Sequential\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "Sequential",
          "package": "commsec",
          "partial": "Sequential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:Sequential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.CommSec.Package\",\"Network.CommSec.Types\"]",
          "name": "StrictOrdering",
          "package": "commsec",
          "signature": "StrictOrdering",
          "source": "src/Network-CommSec-Types.html#SequenceMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:StrictOrdering\",\"http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#v:StrictOrdering\"]"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "StrictOrdering",
          "package": "commsec",
          "partial": "Strict Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:StrictOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a package length, returns the number of bytes in the\n underlying message.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "decBytes",
          "package": "commsec",
          "signature": "Int -\u003e Int",
          "source": "src/Network-CommSec-Package.html#decBytes",
          "type": "function"
        },
        "index": {
          "description": "Given package length returns the number of bytes in the underlying message",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "decBytes",
          "normalized": "Int-\u003eInt",
          "package": "commsec",
          "partial": "Bytes",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:decBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an \u003ccode\u003e\u003ca\u003eInContext\u003c/a\u003e\u003c/code\u003e to decrypt a message, verifying the ICV and sequence\n number.  Unlike sending, receiving is more likely to result in an\n exceptional condition and thus it returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eMessage format: [ctr, ct, tag].\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "decode",
          "package": "commsec",
          "signature": "InContext -\u003e ByteString -\u003e Either CommSecError (ByteString, InContext)",
          "source": "src/Network-CommSec-Package.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Use an InContext to decrypt message verifying the ICV and sequence number Unlike sending receiving is more likely to result in an exceptional condition and thus it returns an Either value Message format ctr ct tag",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "decode",
          "normalized": "InContext-\u003eByteString-\u003eEither CommSecError(ByteString,InContext)",
          "package": "commsec",
          "signature": "InContext-\u003eByteString-\u003eEither CommSecError(ByteString,InContext)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecodePtr inCtx pkg msg pkgLen\u003c/code\u003e decrypts and verifies a package at\n location \u003ccode\u003epkg\u003c/code\u003e of size \u003ccode\u003epkgLen\u003c/code\u003e.  The resulting message is placed at\n location \u003ccode\u003emsg\u003c/code\u003e and its size is returned along with a new context (or\n error).\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "decodePtr",
          "package": "commsec",
          "signature": "InContext -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Int -\u003e IO (Either CommSecError (Int, InContext))",
          "source": "src/Network-CommSec-Package.html#decodePtr",
          "type": "function"
        },
        "index": {
          "description": "decodePtr inCtx pkg msg pkgLen decrypts and verifies package at location pkg of size pkgLen The resulting message is placed at location msg and its size is returned along with new context or error",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "decodePtr",
          "normalized": "InContext-\u003ePtr Word-\u003ePtr Word-\u003eInt-\u003eIO(Either CommSecError(Int,InContext))",
          "package": "commsec",
          "partial": "Ptr",
          "signature": "InContext-\u003ePtr Word-\u003ePtr Word-\u003eInt-\u003eIO(Either CommSecError(Int,InContext))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:decodePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a message length, returns the number of bytes an encoded message\n will consume.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "encBytes",
          "package": "commsec",
          "signature": "Int -\u003e Int",
          "source": "src/Network-CommSec-Package.html#encBytes",
          "type": "function"
        },
        "index": {
          "description": "Given message length returns the number of bytes an encoded message will consume",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "encBytes",
          "normalized": "Int-\u003eInt",
          "package": "commsec",
          "partial": "Bytes",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:encBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an \u003ccode\u003e\u003ca\u003eOutContext\u003c/a\u003e\u003c/code\u003e to protect a message for transport.\n Message format: [ctr, ct, tag].\n\u003c/p\u003e\u003cp\u003eThis routine can throw an exception of \u003ccode\u003e\u003ca\u003eOldContext\u003c/a\u003e\u003c/code\u003e if the context being\n used has expired.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "encode",
          "package": "commsec",
          "signature": "OutContext -\u003e ByteString -\u003e (ByteString, OutContext)",
          "source": "src/Network-CommSec-Package.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Use an OutContext to protect message for transport Message format ctr ct tag This routine can throw an exception of OldContext if the context being used has expired",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "encode",
          "normalized": "OutContext-\u003eByteString-\u003e(ByteString,OutContext)",
          "package": "commsec",
          "signature": "OutContext-\u003eByteString-\u003e(ByteString,OutContext)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eencodePtr outCtx msg result msgLen\u003c/code\u003e will encode \u003ccode\u003emsgLen\u003c/code\u003e bytes at\n location \u003ccode\u003emsg\u003c/code\u003e, placing the result at location \u003ccode\u003eresult\u003c/code\u003e.  The buffer\n pointed to by \u003ccode\u003eresult\u003c/code\u003e must be at least \u003ccode\u003eencBytes msgLen\u003c/code\u003e bytes large,\n the actual package will be exactly \u003ccode\u003eencBytes msgLen\u003c/code\u003e in size.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "encodePtr",
          "package": "commsec",
          "signature": "OutContext -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Int -\u003e IO OutContext",
          "source": "src/Network-CommSec-Package.html#encodePtr",
          "type": "function"
        },
        "index": {
          "description": "encodePtr outCtx msg result msgLen will encode msgLen bytes at location msg placing the result at location result The buffer pointed to by result must be at least encBytes msgLen bytes large the actual package will be exactly encBytes msgLen in size",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "encodePtr",
          "normalized": "OutContext-\u003ePtr Word-\u003ePtr Word-\u003eInt-\u003eIO OutContext",
          "package": "commsec",
          "partial": "Ptr",
          "signature": "OutContext-\u003ePtr Word-\u003ePtr Word-\u003eInt-\u003eIO OutContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:encodePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an in context from a counter, salt, and AES key.\n The in context will be \u003ccode\u003e\u003ca\u003eStrictOrdering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "inContext",
          "package": "commsec",
          "signature": "Word64 -\u003e Word32 -\u003e AESKey128 -\u003e InContext",
          "source": "src/Network-CommSec-Package.html#inContext",
          "type": "function"
        },
        "index": {
          "description": "Construct an in context from counter salt and AES key The in context will be StrictOrdering",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "inContext",
          "normalized": "Word-\u003eWord-\u003eAESKey-\u003eInContext",
          "package": "commsec",
          "partial": "Context",
          "signature": "Word-\u003eWord-\u003eAESKey-\u003eInContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:inContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven at least 20 bytes of entropy, produce an in context that can\n communicate with an identically initialized out context.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "newInContext",
          "package": "commsec",
          "signature": "ByteString -\u003e SequenceMode -\u003e InContext",
          "source": "src/Network-CommSec-Package.html#newInContext",
          "type": "function"
        },
        "index": {
          "description": "Given at least bytes of entropy produce an in context that can communicate with an identically initialized out context",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "newInContext",
          "normalized": "ByteString-\u003eSequenceMode-\u003eInContext",
          "package": "commsec",
          "partial": "In Context",
          "signature": "ByteString-\u003eSequenceMode-\u003eInContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:newInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven at least 24 bytes of entropy, produce an out context that can\n communicate with an identically initialized in context.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "newOutContext",
          "package": "commsec",
          "signature": "ByteString -\u003e OutContext",
          "source": "src/Network-CommSec-Package.html#newOutContext",
          "type": "function"
        },
        "index": {
          "description": "Given at least bytes of entropy produce an out context that can communicate with an identically initialized in context",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "newOutContext",
          "normalized": "ByteString-\u003eOutContext",
          "package": "commsec",
          "partial": "Out Context",
          "signature": "ByteString-\u003eOutContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:newOutContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an out context from a counter, salt, and AES key.\n\u003c/p\u003e",
          "module": "Network.CommSec.Package",
          "name": "outContext",
          "package": "commsec",
          "signature": "Word64 -\u003e Word32 -\u003e AESKey128 -\u003e OutContext",
          "source": "src/Network-CommSec-Package.html#outContext",
          "type": "function"
        },
        "index": {
          "description": "Construct an out context from counter salt and AES key",
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "outContext",
          "normalized": "Word-\u003eWord-\u003eAESKey-\u003eOutContext",
          "package": "commsec",
          "partial": "Context",
          "signature": "Word-\u003eWord-\u003eAESKey-\u003eOutContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:outContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.Package",
          "name": "peekBE",
          "package": "commsec",
          "signature": "Ptr Word8 -\u003e IO Word64",
          "source": "src/Network-CommSec-Package.html#peekBE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "peekBE",
          "normalized": "Ptr Word-\u003eIO Word",
          "package": "commsec",
          "partial": "BE",
          "signature": "Ptr Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:peekBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.Package",
          "name": "peekBE32",
          "package": "commsec",
          "signature": "Ptr Word8 -\u003e IO Word32",
          "source": "src/Network-CommSec-Package.html#peekBE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "peekBE32",
          "normalized": "Ptr Word-\u003eIO Word",
          "package": "commsec",
          "partial": "BE",
          "signature": "Ptr Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:peekBE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.Package",
          "name": "pokeBE",
          "package": "commsec",
          "signature": "Ptr Word8 -\u003e Word64 -\u003e IO ()",
          "source": "src/Network-CommSec-Package.html#pokeBE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "pokeBE",
          "normalized": "Ptr Word-\u003eWord-\u003eIO()",
          "package": "commsec",
          "partial": "BE",
          "signature": "Ptr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:pokeBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.Package",
          "name": "pokeBE32",
          "package": "commsec",
          "signature": "Ptr Word8 -\u003e Word32 -\u003e IO ()",
          "source": "src/Network-CommSec-Package.html#pokeBE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec Package",
          "module": "Network.CommSec.Package",
          "name": "pokeBE32",
          "normalized": "Ptr Word-\u003eWord-\u003eIO()",
          "package": "commsec",
          "partial": "BE",
          "signature": "Ptr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Package.html#v:pokeBE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec.Types",
          "name": "Types",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network CommSec Types",
          "module": "Network.CommSec.Types",
          "name": "Types",
          "package": "commsec",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be returned by the decoding/receicing operations.\n\u003c/p\u003e",
          "module": "Network.CommSec.Types",
          "name": "CommSecError",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be returned by the decoding receicing operations",
          "hierarchy": "Network CommSec Types",
          "module": "Network.CommSec.Types",
          "name": "CommSecError",
          "package": "commsec",
          "partial": "Comm Sec Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#t:CommSecError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicy for misordered packets.  Notice StrictOrdering does not mean\n every sequence numbered packet will be received, only that the sequence\n number will always increase.\n\u003c/p\u003e",
          "module": "Network.CommSec.Types",
          "name": "SequenceMode",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html#SequenceMode",
          "type": "data"
        },
        "index": {
          "description": "Policy for misordered packets Notice StrictOrdering does not mean every sequence numbered packet will be received only that the sequence number will always increase",
          "hierarchy": "Network CommSec Types",
          "module": "Network.CommSec.Types",
          "name": "SequenceMode",
          "package": "commsec",
          "partial": "Sequence Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec-Types.html#t:SequenceMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "CommSec",
          "package": "commsec",
          "source": "src/Network-CommSec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "CommSec",
          "package": "commsec",
          "partial": "Comm Sec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be returned by the decoding/receicing operations.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "CommSecError",
          "package": "commsec",
          "source": "src/Network-CommSec-Types.html#CommSecError",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be returned by the decoding receicing operations",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "CommSecError",
          "package": "commsec",
          "partial": "Comm Sec Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#t:CommSecError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connection is a secure bidirectional communication channel.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "Connection",
          "package": "commsec",
          "source": "src/Network-CommSec.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "connection is secure bidirectional communication channel",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "Connection",
          "package": "commsec",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "Conn",
          "package": "commsec",
          "signature": "Conn",
          "source": "src/Network-CommSec.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "Conn",
          "package": "commsec",
          "partial": "Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:Conn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands the provided 128 (or more) bit secret into two\n keys to create a connection.\n\u003c/p\u003e\u003cp\u003eex: accept ent 3134\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "accept",
          "package": "commsec",
          "signature": "ByteString -\u003e PortNumber -\u003e IO Connection",
          "source": "src/Network-CommSec.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Expands the provided or more bit secret into two keys to create connection ex accept ent",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "accept",
          "normalized": "ByteString-\u003ePortNumber-\u003eIO Connection",
          "package": "commsec",
          "signature": "ByteString-\u003ePortNumber-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a connection\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "close",
          "package": "commsec",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-CommSec.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close connection",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "commsec",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands the provided 128 (or more) bit secret into two\n keys to create a connection.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "connect",
          "package": "commsec",
          "signature": "ByteString -\u003e HostName -\u003e PortNumber -\u003e IO Connection",
          "source": "src/Network-CommSec.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Expands the provided or more bit secret into two keys to create connection",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "connect",
          "normalized": "ByteString-\u003eHostName-\u003ePortNumber-\u003eIO Connection",
          "package": "commsec",
          "signature": "ByteString-\u003eHostName-\u003ePortNumber-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "expandSecret",
          "package": "commsec",
          "signature": "ByteString -\u003e Int -\u003e ByteString",
          "source": "src/Network-CommSec.html#expandSecret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "expandSecret",
          "normalized": "ByteString-\u003eInt-\u003eByteString",
          "package": "commsec",
          "partial": "Secret",
          "signature": "ByteString-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:expandSecret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "inCtx",
          "package": "commsec",
          "signature": "MVar InContext",
          "source": "src/Network-CommSec.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "inCtx",
          "package": "commsec",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:inCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "outCtx",
          "package": "commsec",
          "signature": "MVar OutContext",
          "source": "src/Network-CommSec.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "outCtx",
          "package": "commsec",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:outCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "recv",
          "package": "commsec",
          "signature": "Connection -\u003e IO ByteString",
          "source": "src/Network-CommSec.html#recv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "recv",
          "normalized": "Connection-\u003eIO ByteString",
          "package": "commsec",
          "signature": "Connection-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocks till it receives a valid message, placing the resulting plaintext\n in the provided buffer.  If the incoming message is larger that the\n provided buffer then the message is truncated.  This process also incurs\n an additional copy.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "recvPtr",
          "package": "commsec",
          "signature": "Connection -\u003e Ptr Word8 -\u003e Int -\u003e IO Int",
          "source": "src/Network-CommSec.html#recvPtr",
          "type": "function"
        },
        "index": {
          "description": "Blocks till it receives valid message placing the resulting plaintext in the provided buffer If the incoming message is larger that the provided buffer then the message is truncated This process also incurs an additional copy",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "recvPtr",
          "normalized": "Connection-\u003ePtr Word-\u003eInt-\u003eIO Int",
          "package": "commsec",
          "partial": "Ptr",
          "signature": "Connection-\u003ePtr Word-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:recvPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a datagram, first encrypting it, using the given secure\n connection.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "send",
          "package": "commsec",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Network-CommSec.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send datagram first encrypting it using the given secure connection",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "send",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "commsec",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message over the connection.\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "sendPtr",
          "package": "commsec",
          "signature": "Connection -\u003e Ptr Word8 -\u003e Int -\u003e IO ()",
          "source": "src/Network-CommSec.html#sendPtr",
          "type": "function"
        },
        "index": {
          "description": "Sends message over the connection",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "sendPtr",
          "normalized": "Connection-\u003ePtr Word-\u003eInt-\u003eIO()",
          "package": "commsec",
          "partial": "Ptr",
          "signature": "Connection-\u003ePtr Word-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:sendPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CommSec",
          "name": "socket",
          "package": "commsec",
          "signature": "Socket",
          "source": "src/Network-CommSec.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "socket",
          "package": "commsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaddress of remote\n\u003c/p\u003e",
          "module": "Network.CommSec",
          "name": "socketAddr",
          "package": "commsec",
          "signature": "SockAddr",
          "source": "src/Network-CommSec.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "address of remote",
          "hierarchy": "Network CommSec",
          "module": "Network.CommSec",
          "name": "socketAddr",
          "package": "commsec",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commsec/docs/Network-CommSec.html#v:socketAddr"
      }
    }
  ]
]