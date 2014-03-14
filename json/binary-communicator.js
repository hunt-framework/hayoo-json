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
        "word": "binary-communicator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary Communicator\n\u003c/p\u003e\u003cp\u003eThis module provides the datatype BinaryCom, which enables you\n to easily send and receive data to and from a binary source.\n The transmitted data can be an instance of the \u003ccode\u003eBinary\u003c/code\u003e class,\n or you can provide your own Put and Get actions to serialize\n and parse the binary stream.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BinaryCom",
          "name": "BinaryCom",
          "package": "binary-communicator",
          "source": "src/Data-BinaryCom.html",
          "type": "module"
        },
        "index": {
          "description": "Binary Communicator This module provides the datatype BinaryCom which enables you to easily send and receive data to and from binary source The transmitted data can be an instance of the Binary class or you can provide your own Put and Get actions to serialize and parse the binary stream",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "BinaryCom",
          "package": "binary-communicator",
          "partial": "Binary Com",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "BinaryCom",
          "package": "binary-communicator",
          "source": "src/Data-BinaryCom.html#BinaryCom",
          "type": "data"
        },
        "index": {
          "description": "BinaryCom type",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "BinaryCom",
          "package": "binary-communicator",
          "partial": "Binary Com",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#t:BinaryCom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA if-then-else, but with the condition as last argument\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "(+|)",
          "package": "binary-communicator",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Data-BinaryCom.html#%2B%7C",
          "type": "function"
        },
        "index": {
          "description": "if-then-else but with the condition as last argument",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "(+|) +|",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "binary-communicator",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:-43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e opened for both reading and writing.\n Be careful not to use the handle afterwards\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "binaryCom",
          "package": "binary-communicator",
          "signature": "Handle -\u003e m BinaryCom",
          "source": "src/Data-BinaryCom.html#binaryCom",
          "type": "function"
        },
        "index": {
          "description": "Creates BinaryCom from Handle opened for both reading and writing Be careful not to use the handle afterwards",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "binaryCom",
          "normalized": "Handle-\u003ea BinaryCom",
          "package": "binary-communicator",
          "partial": "Com",
          "signature": "Handle-\u003em BinaryCom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:binaryCom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e from two \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es: one for reading, one for writing\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "binaryCom2H",
          "package": "binary-communicator",
          "signature": "Handle-\u003e Handle-\u003e m BinaryCom",
          "type": "function"
        },
        "index": {
          "description": "Creates BinaryCom from two Handle one for reading one for writing",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "binaryCom2H",
          "normalized": "Handle-\u003eHandle-\u003ea BinaryCom",
          "package": "binary-communicator",
          "partial": "Com",
          "signature": "Handle-\u003eHandle-\u003em BinaryCom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:binaryCom2H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (for reading) and a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e (for writing)\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "binaryComBS",
          "package": "binary-communicator",
          "signature": "ByteString-\u003e Handle-\u003e m BinaryCom",
          "type": "function"
        },
        "index": {
          "description": "Creates BinaryCom from lazy ByteString for reading and Handle for writing",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "binaryComBS",
          "normalized": "ByteString-\u003eHandle-\u003ea BinaryCom",
          "package": "binary-communicator",
          "partial": "Com BS",
          "signature": "ByteString-\u003eHandle-\u003em BinaryCom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:binaryComBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a continuation, passing it a binary com with auto-flush deactivated.\n   Flushes when the continuation is finished.\n   It permits not to flush at each call to \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "flushAfter",
          "package": "binary-communicator",
          "signature": "BinaryCom -\u003e (BinaryCom -\u003e m ()) -\u003e m ()",
          "source": "src/Data-BinaryCom.html#flushAfter",
          "type": "function"
        },
        "index": {
          "description": "Runs continuation passing it binary com with auto-flush deactivated Flushes when the continuation is finished It permits not to flush at each call to send",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "flushAfter",
          "normalized": "BinaryCom-\u003e(BinaryCom-\u003ea())-\u003ea()",
          "package": "binary-communicator",
          "partial": "After",
          "signature": "BinaryCom-\u003e(BinaryCom-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:flushAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives a serializable value through a \u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "receive",
          "package": "binary-communicator",
          "signature": "BinaryCom -\u003e m a",
          "source": "src/Data-BinaryCom.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receives serializable value through BinaryCom",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "receive",
          "normalized": "BinaryCom-\u003ea b",
          "package": "binary-communicator",
          "signature": "BinaryCom-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives a value. Runs a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad to parse it\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "receiveGet",
          "package": "binary-communicator",
          "signature": "BinaryCom -\u003e Get a -\u003e m a",
          "source": "src/Data-BinaryCom.html#receiveGet",
          "type": "function"
        },
        "index": {
          "description": "Receives value Runs Get monad to parse it",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "receiveGet",
          "normalized": "BinaryCom-\u003eGet a-\u003eb a",
          "package": "binary-communicator",
          "partial": "Get",
          "signature": "BinaryCom-\u003eGet a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:receiveGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a serializable value through a \u003ccode\u003e\u003ca\u003eBinaryCom\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "send",
          "package": "binary-communicator",
          "signature": "BinaryCom -\u003e a -\u003e m ()",
          "source": "src/Data-BinaryCom.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends serializable value through BinaryCom",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "send",
          "normalized": "BinaryCom-\u003ea-\u003eb()",
          "package": "binary-communicator",
          "signature": "BinaryCom-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad and sends its result\n\u003c/p\u003e",
          "module": "Data.BinaryCom",
          "name": "sendPut",
          "package": "binary-communicator",
          "signature": "BinaryCom -\u003e Put -\u003e m ()",
          "source": "src/Data-BinaryCom.html#sendPut",
          "type": "function"
        },
        "index": {
          "description": "Runs Put monad and sends its result",
          "hierarchy": "Data BinaryCom",
          "module": "Data.BinaryCom",
          "name": "sendPut",
          "normalized": "BinaryCom-\u003ePut-\u003ea()",
          "package": "binary-communicator",
          "partial": "Put",
          "signature": "BinaryCom-\u003ePut-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-communicator/docs/Data-BinaryCom.html#v:sendPut"
      }
    }
  ]
]