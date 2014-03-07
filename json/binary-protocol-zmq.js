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
        "word": "binary-protocol-zmq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad to ease implementing a binary network protocol over ZeroMQ\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "ZMQ",
          "package": "binary-protocol-zmq",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html",
          "type": "module"
        },
        "index": {
          "description": "Monad to ease implementing binary network protocol over ZeroMQ",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "ZMQ",
          "package": "binary-protocol-zmq",
          "partial": "ZMQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction type definition. \u003ccode\u003ea\u003c/code\u003e is the type of the reader ZeroMQ socket,\n   \u003ccode\u003eb\u003c/code\u003e is the type of the writer ZeroMQ socket, and \u003ccode\u003ec\u003c/code\u003e is the return type of\n   the action.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "BinaryProtocol",
          "package": "binary-protocol-zmq",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#BinaryProtocol",
          "type": "data"
        },
        "index": {
          "description": "Action type definition is the type of the reader ZeroMQ socket is the type of the writer ZeroMQ socket and is the return type of the action",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "BinaryProtocol",
          "package": "binary-protocol-zmq",
          "partial": "Binary Protocol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#t:BinaryProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush connections\n\u003c/p\u003e\u003cp\u003eNote: this is a no-op, provided for API compatibility with the\n   \u003ccode\u003eControl.Monad.BinaryProtocol\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "flush",
          "package": "binary-protocol-zmq",
          "signature": "BinaryProtocol a b ()",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Flush connections Note this is no-op provided for API compatibility with the Control.Monad.BinaryProtocol package",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "flush",
          "normalized": "BinaryProtocol a b()",
          "package": "binary-protocol-zmq",
          "signature": "BinaryProtocol a b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a value of type \u003ccode\u003ec\u003c/code\u003e from the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance\n   of the \u003ccode\u003eBinary\u003c/code\u003e class. This is a wrapper around \u003ccode\u003ereceive'\u003c/code\u003e, not passing\n   any flags.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "receive",
          "package": "binary-protocol-zmq",
          "signature": "BinaryProtocol a b c",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Read in value of type from the connection must be an instance of the Binary class This is wrapper around receive not passing any flags",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "receive",
          "package": "binary-protocol-zmq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a value of type \u003ccode\u003ec\u003c/code\u003e from the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance\n   of the \u003ccode\u003eBinary\u003c/code\u003e class. A list of \u003ccode\u003eFlag\u003c/code\u003es can be given.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "receive'",
          "package": "binary-protocol-zmq",
          "signature": "[Flag] -\u003e BinaryProtocol a b c",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#receive%27",
          "type": "function"
        },
        "index": {
          "description": "Read in value of type from the connection must be an instance of the Binary class list of Flag can be given",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "receive'",
          "normalized": "[Flag]-\u003eBinaryProtocol a b c",
          "package": "binary-protocol-zmq",
          "signature": "[Flag]-\u003eBinaryProtocol a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:receive-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003eBinaryProtocol\u003c/code\u003e action and run it on the given ZeroMQ sockets for\n   respectively reading and writing. The two given handles are allowed to be\n   the same if the same handle is used for reading and writing.\n\u003c/p\u003e\u003cp\u003eSince ZeroMQ sockets are not thread-safe (unlike a Context object), make\n   sure you use any socket you create in the OS thread it was created in\n   only. Use \u003ccode\u003eforkOS\u003c/code\u003e where necessary.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "runProtocol",
          "package": "binary-protocol-zmq",
          "signature": "BinaryProtocol a b c -\u003e Socket a -\u003e Socket b -\u003e IO c",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#runProtocol",
          "type": "function"
        },
        "index": {
          "description": "Take BinaryProtocol action and run it on the given ZeroMQ sockets for respectively reading and writing The two given handles are allowed to be the same if the same handle is used for reading and writing Since ZeroMQ sockets are not thread-safe unlike Context object make sure you use any socket you create in the OS thread it was created in only Use forkOS where necessary",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "runProtocol",
          "normalized": "BinaryProtocol a b c-\u003eSocket a-\u003eSocket b-\u003eIO c",
          "package": "binary-protocol-zmq",
          "partial": "Protocol",
          "signature": "BinaryProtocol a b c-\u003eSocket a-\u003eSocket b-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:runProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value of type \u003ccode\u003ec\u003c/code\u003e down the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance of\n   the \u003ccode\u003eBinary\u003c/code\u003e class. This is a wrapper aroung \u003ccode\u003esend'\u003c/code\u003e, not passing any\n   flags.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "send",
          "package": "binary-protocol-zmq",
          "signature": "c -\u003e BinaryProtocol a b ()",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send value of type down the connection must be an instance of the Binary class This is wrapper aroung send not passing any flags",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "send",
          "normalized": "a-\u003eBinaryProtocol b c()",
          "package": "binary-protocol-zmq",
          "signature": "c-\u003eBinaryProtocol a b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value of type \u003ccode\u003ec\u003c/code\u003e down the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance of\n   the \u003ccode\u003eBinary\u003c/code\u003e class. A list of \u003ccode\u003eFlag\u003c/code\u003es can be given.\n\u003c/p\u003e",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "send'",
          "package": "binary-protocol-zmq",
          "signature": "[Flag] -\u003e c -\u003e BinaryProtocol a b ()",
          "source": "src/Control-Monad-BinaryProtocol-ZMQ.html#send%27",
          "type": "function"
        },
        "index": {
          "description": "Send value of type down the connection must be an instance of the Binary class list of Flag can be given",
          "hierarchy": "Control Monad BinaryProtocol ZMQ",
          "module": "Control.Monad.BinaryProtocol.ZMQ",
          "name": "send'",
          "normalized": "[Flag]-\u003ea-\u003eBinaryProtocol b c()",
          "package": "binary-protocol-zmq",
          "signature": "[Flag]-\u003ec-\u003eBinaryProtocol a b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:send-39-"
      }
    }
  ]
]