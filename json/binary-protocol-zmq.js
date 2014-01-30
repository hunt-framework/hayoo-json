[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad to ease implementing a binary network protocol over ZeroMQ\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html",
        "fct-type": "module",
        "title": "ZMQ"
      },
      "index": {
        "description": "Monad to ease implementing binary network protocol over ZeroMQ",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "ZMQ",
        "normalized": "",
        "package": "binary-protocol-zmq",
        "partial": "ZMQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#t:BinaryProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eAction type definition. \u003ccode\u003ea\u003c/code\u003e is the type of the reader ZeroMQ socket,\n   \u003ccode\u003eb\u003c/code\u003e is the type of the writer ZeroMQ socket, and \u003ccode\u003ec\u003c/code\u003e is the return type of\n   the action.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#BinaryProtocol",
        "fct-type": "data",
        "title": "BinaryProtocol"
      },
      "index": {
        "description": "Action type definition is the type of the reader ZeroMQ socket is the type of the writer ZeroMQ socket and is the return type of the action",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "BinaryProtocol",
        "normalized": "",
        "package": "binary-protocol-zmq",
        "partial": "Binary Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush connections\n\u003c/p\u003e\u003cp\u003eNote: this is a no-op, provided for API compatibility with the\n   \u003ccode\u003eControl.Monad.BinaryProtocol\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "BinaryProtocol a b ()",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Flush connections Note this is no-op provided for API compatibility with the Control.Monad.BinaryProtocol package",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "flush",
        "normalized": "BinaryProtocol a b()",
        "package": "binary-protocol-zmq",
        "partial": "",
        "signature": "BinaryProtocol a b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a value of type \u003ccode\u003ec\u003c/code\u003e from the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance\n   of the \u003ccode\u003eBinary\u003c/code\u003e class. This is a wrapper around \u003ccode\u003ereceive'\u003c/code\u003e, not passing\n   any flags.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "BinaryProtocol a b c",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Read in value of type from the connection must be an instance of the Binary class This is wrapper around receive not passing any flags",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "receive",
        "normalized": "",
        "package": "binary-protocol-zmq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:receive-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a value of type \u003ccode\u003ec\u003c/code\u003e from the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance\n   of the \u003ccode\u003eBinary\u003c/code\u003e class. A list of \u003ccode\u003eFlag\u003c/code\u003es can be given.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "[Flag] -\u003e BinaryProtocol a b c",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#receive%27",
        "fct-type": "function",
        "title": "receive'"
      },
      "index": {
        "description": "Read in value of type from the connection must be an instance of the Binary class list of Flag can be given",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "receive'",
        "normalized": "[Flag]-\u003eBinaryProtocol a b c",
        "package": "binary-protocol-zmq",
        "partial": "",
        "signature": "[Flag]-\u003eBinaryProtocol a b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:runProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003eBinaryProtocol\u003c/code\u003e action and run it on the given ZeroMQ sockets for\n   respectively reading and writing. The two given handles are allowed to be\n   the same if the same handle is used for reading and writing.\n\u003c/p\u003e\u003cp\u003eSince ZeroMQ sockets are not thread-safe (unlike a Context object), make\n   sure you use any socket you create in the OS thread it was created in\n   only. Use \u003ccode\u003eforkOS\u003c/code\u003e where necessary.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "BinaryProtocol a b c -\u003e Socket a -\u003e Socket b -\u003e IO c",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#runProtocol",
        "fct-type": "function",
        "title": "runProtocol"
      },
      "index": {
        "description": "Take BinaryProtocol action and run it on the given ZeroMQ sockets for respectively reading and writing The two given handles are allowed to be the same if the same handle is used for reading and writing Since ZeroMQ sockets are not thread-safe unlike Context object make sure you use any socket you create in the OS thread it was created in only Use forkOS where necessary",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "runProtocol",
        "normalized": "BinaryProtocol a b c-\u003eSocket a-\u003eSocket b-\u003eIO c",
        "package": "binary-protocol-zmq",
        "partial": "Protocol",
        "signature": "BinaryProtocol a b c-\u003eSocket a-\u003eSocket b-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a value of type \u003ccode\u003ec\u003c/code\u003e down the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance of\n   the \u003ccode\u003eBinary\u003c/code\u003e class. This is a wrapper aroung \u003ccode\u003esend'\u003c/code\u003e, not passing any\n   flags.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "c -\u003e BinaryProtocol a b ()",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send value of type down the connection must be an instance of the Binary class This is wrapper aroung send not passing any flags",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "send",
        "normalized": "a-\u003eBinaryProtocol b c()",
        "package": "binary-protocol-zmq",
        "partial": "",
        "signature": "c-\u003eBinaryProtocol a b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol-zmq/docs/Control-Monad-BinaryProtocol-ZMQ.html#v:send-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSend a value of type \u003ccode\u003ec\u003c/code\u003e down the connection; \u003ccode\u003ec\u003c/code\u003e must be an instance of\n   the \u003ccode\u003eBinary\u003c/code\u003e class. A list of \u003ccode\u003eFlag\u003c/code\u003es can be given.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol.ZMQ",
        "fct-package": "binary-protocol-zmq",
        "fct-signature": "[Flag] -\u003e c -\u003e BinaryProtocol a b ()",
        "fct-source": "src/Control-Monad-BinaryProtocol-ZMQ.html#send%27",
        "fct-type": "function",
        "title": "send'"
      },
      "index": {
        "description": "Send value of type down the connection must be an instance of the Binary class list of Flag can be given",
        "hierarchy": "Control Monad BinaryProtocol ZMQ",
        "module": "Control.Monad.BinaryProtocol.ZMQ",
        "name": "send'",
        "normalized": "[Flag]-\u003ea-\u003eBinaryProtocol b c()",
        "package": "binary-protocol-zmq",
        "partial": "",
        "signature": "[Flag]-\u003ec-\u003eBinaryProtocol a b()"
      }
    }
  }
]