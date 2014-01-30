[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpful functions to deal with stream-like connections\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "module",
        "fct-source": "src/Network-Connection.html",
        "fct-type": "module",
        "title": "Connection"
      },
      "index": {
        "description": "Helpful functions to deal with stream-like connections",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "network-connection",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#t:BaseConnection",
      "description": {
        "fct-descr": "\u003cp\u003eA BaseConnection abstracts a stream like connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection.html#BaseConnection",
        "fct-type": "data",
        "title": "BaseConnection"
      },
      "index": {
        "description": "BaseConnection abstracts stream like connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "BaseConnection",
        "normalized": "",
        "package": "network-connection",
        "partial": "Base Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA Connection uses the functions from a BaseConnection and wraps them a\n   number of commonly needed behaviours.\n\u003c/p\u003e\u003cp\u003eFirstly, a write queue is introduced so that writes can be non-blocking.\n\u003c/p\u003e\u003cp\u003eSecondly, the Connection can manage a number of threads. Almost always\n   there will be a writer thread which is taking items from the write queue\n   and writing them to the BaseConnection. In addition, there can be zero or\n   more other threads managed by the Connection. If a thread which is managed\n   dies, by throwing an exception or otherwise, it will close the connection\n   and all other managed threads will be killed.\n\u003c/p\u003e\u003cp\u003eThere is also the concept of pushing data back into the Connection. This\n   is useful in a chain of reader functions where, for efficiency reasons,\n   you would want to read large blocks at a time, but the data is\n   self-deliminating so you would otherwise end up in a situation where you\n   had read too much. See the pushBack function for details.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection uses the functions from BaseConnection and wraps them number of commonly needed behaviours Firstly write queue is introduced so that writes can be non-blocking Secondly the Connection can manage number of threads Almost always there will be writer thread which is taking items from the write queue and writing them to the BaseConnection In addition there can be zero or more other threads managed by the Connection If thread which is managed dies by throwing an exception or otherwise it will close the connection and all other managed threads will be killed There is also the concept of pushing data back into the Connection This is useful in chain of reader functions where for efficiency reasons you would want to read large blocks at time but the data is self-deliminating so you would otherwise end up in situation where you had read too much See the pushBack function for details",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "network-connection",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:BaseConnection",
      "description": {
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "BaseConnection",
        "fct-source": "src/Network-Connection.html#BaseConnection",
        "fct-type": "function",
        "title": "BaseConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "BaseConnection",
        "normalized": "",
        "package": "network-connection",
        "partial": "Base Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:baseClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose a connection\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Connection.html#BaseConnection",
        "fct-type": "function",
        "title": "baseClose"
      },
      "index": {
        "description": "Close connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "baseClose",
        "normalized": "IO()",
        "package": "network-connection",
        "partial": "Close",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:baseConnectionFromSocket",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a BaseConnection for the given socket.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Socket -\u003e BaseConnection",
        "fct-source": "src/Network-Connection.html#baseConnectionFromSocket",
        "fct-type": "function",
        "title": "baseConnectionFromSocket"
      },
      "index": {
        "description": "Return BaseConnection for the given socket",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "baseConnectionFromSocket",
        "normalized": "Socket-\u003eBaseConnection",
        "package": "network-connection",
        "partial": "Connection From Socket",
        "signature": "Socket-\u003eBaseConnection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:baseRead",
      "description": {
        "fct-descr": "\u003cp\u003eRead, at most, the given number of bytes from the connection and return\n   a ByteString of the data. EOF is signaled by an exception and a zero\n   length string is never a valid return value\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Int -\u003e IO ByteString",
        "fct-source": "src/Network-Connection.html#BaseConnection",
        "fct-type": "function",
        "title": "baseRead"
      },
      "index": {
        "description": "Read at most the given number of bytes from the connection and return ByteString of the data EOF is signaled by an exception and zero length string is never valid return value",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "baseRead",
        "normalized": "Int-\u003eIO ByteString",
        "package": "network-connection",
        "partial": "Read",
        "signature": "Int-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:baseWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the given ByteString to the connection. The write may write less\n   than the requested number of bytes (but must always write at least one\n   byte)\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "ByteString -\u003e IO Int",
        "fct-source": "src/Network-Connection.html#BaseConnection",
        "fct-type": "function",
        "title": "baseWrite"
      },
      "index": {
        "description": "Write the given ByteString to the connection The write may write less than the requested number of bytes but must always write at least one byte",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "baseWrite",
        "normalized": "ByteString-\u003eIO Int",
        "package": "network-connection",
        "partial": "Write",
        "signature": "ByteString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a connection\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Connection.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "network-connection",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:forkInConnection",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given action, as if by forkIO, and manage the thread. If the given\n   action completes or throws an exception, the connection will be closed and\n   all other managed threads will be killed\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "forkInConnection"
      },
      "index": {
        "description": "Run the given action as if by forkIO and manage the thread If the given action completes or throws an exception the connection will be closed and all other managed threads will be killed",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "forkInConnection",
        "normalized": "Connection-\u003eIO()-\u003eIO()",
        "package": "network-connection",
        "partial": "In Connection",
        "signature": "Connection-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:forkWriterThread",
      "description": {
        "fct-descr": "\u003cp\u003eIf you created the Connection in the STM monad using newSTM, you need to\n   call this on it in order to create the thread which processes the outgoing\n   queue.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection-\u003e IO ()",
        "fct-type": "function",
        "title": "forkWriterThread"
      },
      "index": {
        "description": "If you created the Connection in the STM monad using newSTM you need to call this on it in order to create the thread which processes the outgoing queue",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "forkWriterThread",
        "normalized": "Connection-\u003eIO()",
        "package": "network-connection",
        "partial": "Writer Thread",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Connection from a BaseConnection object\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "IO ()-\u003e BaseConnection-\u003e IO Connection",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new Connection from BaseConnection object",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "new",
        "normalized": "IO()-\u003eBaseConnection-\u003eIO Connection",
        "package": "network-connection",
        "partial": "",
        "signature": "IO()-\u003eBaseConnection-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:newSTM",
      "description": {
        "fct-descr": "\u003cp\u003eThis creates most of a Connection, purely in the STM monad. The Connection\n   returned from this must be passed to forkWriterThread, otherwise nothing\n   will ever get written.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "IO ()-\u003e BaseConnection-\u003e STM Connection",
        "fct-type": "function",
        "title": "newSTM"
      },
      "index": {
        "description": "This creates most of Connection purely in the STM monad The Connection returned from this must be passed to forkWriterThread otherwise nothing will ever get written",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "newSTM",
        "normalized": "IO()-\u003eBaseConnection-\u003eSTM Connection",
        "package": "network-connection",
        "partial": "STM",
        "signature": "IO()-\u003eBaseConnection-\u003eSTM Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:pushBack",
      "description": {
        "fct-descr": "\u003cp\u003eUnread some amount of data. It will be returned in the next call to read.\n\u003c/p\u003e\u003cp\u003eThe function pushes data to the front of the queue. Thus you need to push\n   all the data base in one go, or the order of future reads will be wrong.\n\u003c/p\u003e\u003cp\u003eThis might seem like an error, but consider the case of two actions:\n   the first reads 20 bytes and pushs back the last 10 of them. The second\n   reads 5 bytes and pushs back the last 4. If we appended to the push back\n   queue the second action would put those 4 bytes after the remaining 5 from\n   the first action.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection -\u003e ByteString -\u003e STM ()",
        "fct-source": "src/Network-Connection.html#pushBack",
        "fct-type": "function",
        "title": "pushBack"
      },
      "index": {
        "description": "Unread some amount of data It will be returned in the next call to read The function pushes data to the front of the queue Thus you need to push all the data base in one go or the order of future reads will be wrong This might seem like an error but consider the case of two actions the first reads bytes and pushs back the last of them The second reads bytes and pushs back the last If we appended to the push back queue the second action would put those bytes after the remaining from the first action",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "pushBack",
        "normalized": "Connection-\u003eByteString-\u003eSTM()",
        "package": "network-connection",
        "partial": "Back",
        "signature": "Connection-\u003eByteString-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRead some number of bytes from a connection. The size is only a hint,\n   the returned data may be shorter. A zero length read is EOF\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Network-Connection.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Read some number of bytes from connection The size is only hint the returned data may be shorter zero length read is EOF",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "read",
        "normalized": "Connection-\u003eInt-\u003eIO ByteString",
        "package": "network-connection",
        "partial": "",
        "signature": "Connection-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:reada",
      "description": {
        "fct-descr": "\u003cp\u003eRead exactly a give number of bytes\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Network-Connection.html#reada",
        "fct-type": "function",
        "title": "reada"
      },
      "index": {
        "description": "Read exactly give number of bytes",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "reada",
        "normalized": "Connection-\u003eInt-\u003eIO ByteString",
        "package": "network-connection",
        "partial": "",
        "signature": "Connection-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue a ByteString to a connection. This does not block.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Connection -\u003e ByteString -\u003e STM ()",
        "fct-source": "src/Network-Connection.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Enqueue ByteString to connection This does not block",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "write",
        "normalized": "Connection-\u003eByteString-\u003eSTM()",
        "package": "network-connection",
        "partial": "",
        "signature": "Connection-\u003eByteString-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-connection/docs/Network-Connection.html#v:writeAtLowWater",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until the write queue has less than the given number of bytes in it\n   then enqueue a new ByteString.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "network-connection",
        "fct-signature": "Int-\u003e Connection-\u003e ByteString-\u003e STM ()",
        "fct-type": "function",
        "title": "writeAtLowWater"
      },
      "index": {
        "description": "Block until the write queue has less than the given number of bytes in it then enqueue new ByteString",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "writeAtLowWater",
        "normalized": "Int-\u003eConnection-\u003eByteString-\u003eSTM()",
        "package": "network-connection",
        "partial": "At Low Water",
        "signature": "Int-\u003eConnection-\u003eByteString-\u003eSTM()"
      }
    }
  }
]