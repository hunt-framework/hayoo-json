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
        "word": "binary-protocol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad to ease writing a binary network protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.BinaryProtocol",
          "name": "BinaryProtocol",
          "package": "binary-protocol",
          "source": "src/Control-Monad-BinaryProtocol.html",
          "type": "module"
        },
        "index": {
          "description": "Monad to ease writing binary network protocol",
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "BinaryProtocol",
          "package": "binary-protocol",
          "partial": "Binary Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.BinaryProtocol",
          "name": "BinaryProtocol",
          "package": "binary-protocol",
          "source": "src/Control-Monad-BinaryProtocol.html#BinaryProtocol",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "BinaryProtocol",
          "package": "binary-protocol",
          "partial": "Binary Protocol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#t:BinaryProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush buffered send data down the connection.\n\u003c/p\u003e\u003cp\u003eNote: You need to make sure to call this between sending requests\n and receiving responses in order to ensure that the request has\n actually been sent down the connection; otherwise you might get\n stuck waiting for a response that will not come.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol",
          "name": "flush",
          "package": "binary-protocol",
          "signature": "BinaryProtocol ()",
          "source": "src/Control-Monad-BinaryProtocol.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Flush buffered send data down the connection Note You need to make sure to call this between sending requests and receiving responses in order to ensure that the request has actually been sent down the connection otherwise you might get stuck waiting for response that will not come",
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "flush",
          "normalized": "BinaryProtocol()",
          "package": "binary-protocol",
          "signature": "BinaryProtocol()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a value of type \u003ccode\u003ea\u003c/code\u003e from the connection; \u003ccode\u003ea\u003c/code\u003e must be an\n   instance of the \u003ccode\u003eBinary\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol",
          "name": "receive",
          "package": "binary-protocol",
          "signature": "BinaryProtocol a",
          "source": "src/Control-Monad-BinaryProtocol.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Read in value of type from the connection must be an instance of the Binary class",
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "receive",
          "package": "binary-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a BinaryProtocol monad and run it on the given handles for\n   respectively reading and writing.  (The two given handles are\n   allowed to be the same if the same handle is used for reading and\n   writing.)\n\u003c/p\u003e\u003cp\u003eNote: We run L.hGetContents on the read handle, so don't expect to\n be able to use it after you have called this function.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol",
          "name": "runProtocol",
          "package": "binary-protocol",
          "signature": "BinaryProtocol a -\u003e Handle -\u003e Handle -\u003e IO a",
          "source": "src/Control-Monad-BinaryProtocol.html#runProtocol",
          "type": "function"
        },
        "index": {
          "description": "Take BinaryProtocol monad and run it on the given handles for respectively reading and writing The two given handles are allowed to be the same if the same handle is used for reading and writing Note We run L.hGetContents on the read handle so don expect to be able to use it after you have called this function",
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "runProtocol",
          "normalized": "BinaryProtocol a-\u003eHandle-\u003eHandle-\u003eIO a",
          "package": "binary-protocol",
          "partial": "Protocol",
          "signature": "BinaryProtocol a-\u003eHandle-\u003eHandle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:runProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value of type \u003ccode\u003ea\u003c/code\u003e down the connection; \u003ccode\u003ea\u003c/code\u003e must be an\n   instance of the \u003ccode\u003eBinary\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol",
          "name": "send",
          "package": "binary-protocol",
          "signature": "a -\u003e BinaryProtocol ()",
          "source": "src/Control-Monad-BinaryProtocol.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send value of type down the connection must be an instance of the Binary class",
          "hierarchy": "Control Monad BinaryProtocol",
          "module": "Control.Monad.BinaryProtocol",
          "name": "send",
          "normalized": "a-\u003eBinaryProtocol()",
          "package": "binary-protocol",
          "signature": "a-\u003eBinaryProtocol()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:send"
      }
    }
  ]
]