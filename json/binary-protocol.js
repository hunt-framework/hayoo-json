[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad to ease writing a binary network protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-BinaryProtocol.html",
        "fct-type": "module",
        "title": "BinaryProtocol"
      },
      "index": {
        "description": "Monad to ease writing binary network protocol",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "BinaryProtocol",
        "normalized": "",
        "package": "binary-protocol",
        "partial": "Binary Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#t:BinaryProtocol",
      "description": {
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-BinaryProtocol.html#BinaryProtocol",
        "fct-type": "type",
        "title": "BinaryProtocol"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "BinaryProtocol",
        "normalized": "",
        "package": "binary-protocol",
        "partial": "Binary Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush buffered send data down the connection.\n\u003c/p\u003e\u003cp\u003eNote: You need to make sure to call this between sending requests\n and receiving responses in order to ensure that the request has\n actually been sent down the connection; otherwise you might get\n stuck waiting for a response that will not come.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "BinaryProtocol ()",
        "fct-source": "src/Control-Monad-BinaryProtocol.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Flush buffered send data down the connection Note You need to make sure to call this between sending requests and receiving responses in order to ensure that the request has actually been sent down the connection otherwise you might get stuck waiting for response that will not come",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "flush",
        "normalized": "BinaryProtocol()",
        "package": "binary-protocol",
        "partial": "",
        "signature": "BinaryProtocol()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a value of type \u003ccode\u003ea\u003c/code\u003e from the connection; \u003ccode\u003ea\u003c/code\u003e must be an\n   instance of the \u003ccode\u003eBinary\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "BinaryProtocol a",
        "fct-source": "src/Control-Monad-BinaryProtocol.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Read in value of type from the connection must be an instance of the Binary class",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "receive",
        "normalized": "",
        "package": "binary-protocol",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:runProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eTake a BinaryProtocol monad and run it on the given handles for\n   respectively reading and writing.  (The two given handles are\n   allowed to be the same if the same handle is used for reading and\n   writing.)\n\u003c/p\u003e\u003cp\u003eNote: We run L.hGetContents on the read handle, so don't expect to\n be able to use it after you have called this function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "BinaryProtocol a -\u003e Handle -\u003e Handle -\u003e IO a",
        "fct-source": "src/Control-Monad-BinaryProtocol.html#runProtocol",
        "fct-type": "function",
        "title": "runProtocol"
      },
      "index": {
        "description": "Take BinaryProtocol monad and run it on the given handles for respectively reading and writing The two given handles are allowed to be the same if the same handle is used for reading and writing Note We run L.hGetContents on the read handle so don expect to be able to use it after you have called this function",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "runProtocol",
        "normalized": "BinaryProtocol a-\u003eHandle-\u003eHandle-\u003eIO a",
        "package": "binary-protocol",
        "partial": "Protocol",
        "signature": "BinaryProtocol a-\u003eHandle-\u003eHandle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-protocol/docs/Control-Monad-BinaryProtocol.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a value of type \u003ccode\u003ea\u003c/code\u003e down the connection; \u003ccode\u003ea\u003c/code\u003e must be an\n   instance of the \u003ccode\u003eBinary\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.BinaryProtocol",
        "fct-package": "binary-protocol",
        "fct-signature": "a -\u003e BinaryProtocol ()",
        "fct-source": "src/Control-Monad-BinaryProtocol.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send value of type down the connection must be an instance of the Binary class",
        "hierarchy": "Control Monad BinaryProtocol",
        "module": "Control.Monad.BinaryProtocol",
        "name": "send",
        "normalized": "a-\u003eBinaryProtocol()",
        "package": "binary-protocol",
        "partial": "",
        "signature": "a-\u003eBinaryProtocol()"
      }
    }
  }
]