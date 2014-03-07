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
        "word": "binary-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "BinaryState",
          "package": "binary-state",
          "source": "src/Data-BinaryState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "BinaryState",
          "package": "binary-state",
          "partial": "Binary State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "BinaryState",
          "package": "binary-state",
          "source": "src/Data-BinaryState.html#BinaryState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "BinaryState",
          "package": "binary-state",
          "partial": "Binary State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#t:BinaryState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "GetState",
          "package": "binary-state",
          "source": "src/Data-BinaryState.html#GetState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "GetState",
          "package": "binary-state",
          "partial": "Get State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#t:GetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "PutState",
          "package": "binary-state",
          "source": "src/Data-BinaryState.html#PutState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "PutState",
          "package": "binary-state",
          "partial": "Put State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#t:PutState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "bytesRead",
          "package": "binary-state",
          "signature": "GetState s Int64",
          "source": "src/Data-BinaryState.html#bytesRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "bytesRead",
          "package": "binary-state",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "decodeFile",
          "package": "binary-state",
          "signature": "FilePath -\u003e s -\u003e IO a",
          "source": "src/Data-BinaryState.html#decodeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "decodeFile",
          "normalized": "FilePath-\u003ea-\u003eIO b",
          "package": "binary-state",
          "partial": "File",
          "signature": "FilePath-\u003es-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:decodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "decodeFile'",
          "package": "binary-state",
          "signature": "FilePath -\u003e s -\u003e IO (a, s)",
          "source": "src/Data-BinaryState.html#decodeFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "decodeFile'",
          "normalized": "FilePath-\u003ea-\u003eIO(b,a)",
          "package": "binary-state",
          "partial": "File'",
          "signature": "FilePath-\u003es-\u003eIO(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:decodeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "decodeS",
          "package": "binary-state",
          "signature": "s -\u003e ByteString -\u003e a",
          "source": "src/Data-BinaryState.html#decodeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "decodeS",
          "normalized": "a-\u003eByteString-\u003eb",
          "package": "binary-state",
          "signature": "s-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:decodeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "decodeWith",
          "package": "binary-state",
          "signature": "GetState s a -\u003e s -\u003e ByteString -\u003e a",
          "source": "src/Data-BinaryState.html#decodeWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "decodeWith",
          "normalized": "GetState a b-\u003ea-\u003eByteString-\u003eb",
          "package": "binary-state",
          "partial": "With",
          "signature": "GetState s a-\u003es-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:decodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "encodeFile",
          "package": "binary-state",
          "signature": "FilePath -\u003e s -\u003e a -\u003e IO ()",
          "source": "src/Data-BinaryState.html#encodeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "encodeFile",
          "normalized": "FilePath-\u003ea-\u003eb-\u003eIO()",
          "package": "binary-state",
          "partial": "File",
          "signature": "FilePath-\u003es-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:encodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "encodeS",
          "package": "binary-state",
          "signature": "s -\u003e a -\u003e ByteString",
          "source": "src/Data-BinaryState.html#encodeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "encodeS",
          "normalized": "a-\u003eb-\u003eByteString",
          "package": "binary-state",
          "signature": "s-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:encodeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "encodeWith",
          "package": "binary-state",
          "signature": "(a -\u003e PutState s ()) -\u003e s -\u003e a -\u003e ByteString",
          "source": "src/Data-BinaryState.html#encodeWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "encodeWith",
          "normalized": "(a-\u003ePutState b())-\u003eb-\u003ea-\u003eByteString",
          "package": "binary-state",
          "partial": "With",
          "signature": "(a-\u003ePutState s())-\u003es-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:encodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "get",
          "package": "binary-state",
          "signature": "GetState s a",
          "source": "src/Data-BinaryState.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "get",
          "package": "binary-state",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "getByte",
          "package": "binary-state",
          "signature": "GetState s Word8",
          "source": "src/Data-BinaryState.html#getByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "getByte",
          "package": "binary-state",
          "partial": "Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:getByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "getOffset",
          "package": "binary-state",
          "signature": "PutState Integer Integer",
          "source": "src/Data-BinaryState.html#getOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "getOffset",
          "package": "binary-state",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:getOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "getZ",
          "package": "binary-state",
          "signature": "GetState s a",
          "source": "src/Data-BinaryState.html#getZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "getZ",
          "package": "binary-state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:getZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "isEmpty",
          "package": "binary-state",
          "signature": "GetState s Bool",
          "source": "src/Data-BinaryState.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "isEmpty",
          "package": "binary-state",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "liftOffset",
          "package": "binary-state",
          "signature": "Integer -\u003e (a -\u003e Put) -\u003e a -\u003e PutState Integer ()",
          "source": "src/Data-BinaryState.html#liftOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "liftOffset",
          "normalized": "Integer-\u003e(a-\u003ePut)-\u003ea-\u003ePutState Integer()",
          "package": "binary-state",
          "partial": "Offset",
          "signature": "Integer-\u003e(a-\u003ePut)-\u003ea-\u003ePutState Integer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:liftOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "put",
          "package": "binary-state",
          "signature": "a -\u003e PutState s ()",
          "source": "src/Data-BinaryState.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "put",
          "normalized": "a-\u003ePutState b()",
          "package": "binary-state",
          "signature": "a-\u003ePutState s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "putByte",
          "package": "binary-state",
          "signature": "Word8 -\u003e PutState Integer ()",
          "source": "src/Data-BinaryState.html#putByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "putByte",
          "normalized": "Word-\u003ePutState Integer()",
          "package": "binary-state",
          "partial": "Byte",
          "signature": "Word-\u003ePutState Integer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:putByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "putZ",
          "package": "binary-state",
          "signature": "a -\u003e PutState s ()",
          "source": "src/Data-BinaryState.html#putZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "putZ",
          "normalized": "a-\u003ePutState b()",
          "package": "binary-state",
          "signature": "a-\u003ePutState s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:putZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BinaryState",
          "name": "skip",
          "package": "binary-state",
          "signature": "Int -\u003e GetState s ()",
          "source": "src/Data-BinaryState.html#skip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BinaryState",
          "module": "Data.BinaryState",
          "name": "skip",
          "normalized": "Int-\u003eGetState a()",
          "package": "binary-state",
          "signature": "Int-\u003eGetState s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-state/docs/Data-BinaryState.html#v:skip"
      }
    }
  ]
]