[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnbounded closeable channels.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html",
        "fct-type": "module",
        "title": "Closeable"
      },
      "index": {
        "description": "Unbounded closeable channels",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "Closeable",
        "normalized": "",
        "package": "hspread",
        "partial": "Closeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:Chan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#Chan",
        "fct-type": "data",
        "title": "Chan"
      },
      "index": {
        "description": "Chan is an abstract type representing an unbounded FIFO channel",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "Chan",
        "normalized": "",
        "package": "hspread",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e for ReadOnly \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "for ReadOnly",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "R",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:W",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eW\u003c/a\u003e\u003c/code\u003e for WriteOnly\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#W",
        "fct-type": "data",
        "title": "W"
      },
      "index": {
        "description": "for WriteOnly",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "W",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:closeChan",
      "description": {
        "fct-descr": "\u003cp\u003eClose the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, data can be no more written to it.\n Returns True if the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e was already closed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan W a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#closeChan",
        "fct-type": "function",
        "title": "closeChan"
      },
      "index": {
        "description": "Close the Chan data can be no more written to it Returns True if the Chan was already closed",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "closeChan",
        "normalized": "Chan W a-\u003eIO Bool",
        "package": "hspread",
        "partial": "Chan",
        "signature": "Chan W a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:forkChan",
      "description": {
        "fct-descr": "\u003cp\u003eForks a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e: data that will be written (W)\n or is yet to be read (R) on the argument, will also be available on the returned channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan t a -\u003e IO (Chan R a)",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#forkChan",
        "fct-type": "function",
        "title": "forkChan"
      },
      "index": {
        "description": "Forks Chan data that will be written or is yet to be read on the argument will also be available on the returned channel",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "forkChan",
        "normalized": "Chan a b-\u003eIO(Chan R b)",
        "package": "hspread",
        "partial": "Chan",
        "signature": "Chan t a-\u003eIO(Chan R a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:getChanContents",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a lazy list representing the contents of the supplied\n \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, much like \u003ccode\u003eSystem.IO.hGetContents\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan R a -\u003e IO [a]",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#getChanContents",
        "fct-type": "function",
        "title": "getChanContents"
      },
      "index": {
        "description": "Return lazy list representing the contents of the supplied Chan much like System.IO.hGetContents",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "getChanContents",
        "normalized": "Chan R a-\u003eIO[a]",
        "package": "hspread",
        "partial": "Chan Contents",
        "signature": "Chan R a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:isClosedChan",
      "description": {
        "fct-descr": "\u003cp\u003eNon-blocking check.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan t a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#isClosedChan",
        "fct-type": "function",
        "title": "isClosedChan"
      },
      "index": {
        "description": "Non-blocking check",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "isClosedChan",
        "normalized": "Chan a b-\u003eIO Bool",
        "package": "hspread",
        "partial": "Closed Chan",
        "signature": "Chan t a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:isEmptyChan",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is empty, i.e. readChan won't block.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan R a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#isEmptyChan",
        "fct-type": "function",
        "title": "isEmptyChan"
      },
      "index": {
        "description": "Returns True if the supplied Chan is empty i.e readChan won block",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "isEmptyChan",
        "normalized": "Chan R a-\u003eIO Bool",
        "package": "hspread",
        "partial": "Empty Chan",
        "signature": "Chan R a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:newChan",
      "description": {
        "fct-descr": "\u003cp\u003eBuild and returns a pair of \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, data written on the W end can be read from the R end.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "IO (Chan R a, Chan W a)",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#newChan",
        "fct-type": "function",
        "title": "newChan"
      },
      "index": {
        "description": "Build and returns pair of Chan data written on the end can be read from the end",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "newChan",
        "normalized": "IO(Chan R a,Chan W a)",
        "package": "hspread",
        "partial": "Chan",
        "signature": "IO(Chan R a,Chan W a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:readChan",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n |Nothing if the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is closed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan R a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#readChan",
        "fct-type": "function",
        "title": "readChan"
      },
      "index": {
        "description": "Read the next value from the Chan Nothing if the Chan is closed",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "readChan",
        "normalized": "Chan R a-\u003eIO(Maybe a)",
        "package": "hspread",
        "partial": "Chan",
        "signature": "Chan R a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:unGetChan",
      "description": {
        "fct-descr": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan R a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#unGetChan",
        "fct-type": "function",
        "title": "unGetChan"
      },
      "index": {
        "description": "Put data item back onto channel where it will be the next item read",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "unGetChan",
        "normalized": "Chan R a-\u003ea-\u003eIO()",
        "package": "hspread",
        "partial": "Get Chan",
        "signature": "Chan R a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:writeChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n Returns True if successful, False if the channel is closed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan W a -\u003e a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#writeChan",
        "fct-type": "function",
        "title": "writeChan"
      },
      "index": {
        "description": "Write value to Chan Returns True if successful False if the channel is closed",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "writeChan",
        "normalized": "Chan W a-\u003ea-\u003eIO Bool",
        "package": "hspread",
        "partial": "Chan",
        "signature": "Chan W a-\u003ea-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:writeList2Chan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an entire list of items to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n Returning the remainder if the channel has been closed meanwhile.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Closeable",
        "fct-package": "hspread",
        "fct-signature": "Chan W a -\u003e [a] -\u003e IO (Maybe [a])",
        "fct-source": "src/Control-Concurrent-Chan-Closeable.html#writeList2Chan",
        "fct-type": "function",
        "title": "writeList2Chan"
      },
      "index": {
        "description": "Write an entire list of items to Chan Returning the remainder if the channel has been closed meanwhile",
        "hierarchy": "Control Concurrent Chan Closeable",
        "module": "Control.Concurrent.Chan.Closeable",
        "name": "writeList2Chan",
        "normalized": "Chan W a-\u003e[a]-\u003eIO(Maybe[a])",
        "package": "hspread",
        "partial": "List Chan",
        "signature": "Chan W a-\u003e[a]-\u003eIO(Maybe[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "module",
        "fct-source": "src/Spread-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Client",
        "normalized": "",
        "package": "hspread",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:AuthMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe action should return True if the authentication succeded.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "type",
        "fct-source": "src/Spread-Client-Connection.html#AuthMethod",
        "fct-type": "type",
        "title": "AuthMethod"
      },
      "index": {
        "description": "The action should return True if the authentication succeded",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "AuthMethod",
        "normalized": "",
        "package": "hspread",
        "partial": "Auth Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:AuthName",
      "description": {
        "fct-descr": "\u003cp\u003eName of an authentication method.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Connection.html#AuthName",
        "fct-type": "data",
        "title": "AuthName"
      },
      "index": {
        "description": "Name of an authentication method",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "AuthName",
        "normalized": "",
        "package": "hspread",
        "partial": "Auth Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Cause",
      "description": {
        "fct-descr": "\u003cp\u003eWhat caused a membership message.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "data",
        "title": "Cause"
      },
      "index": {
        "description": "What caused membership message",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Cause",
        "normalized": "",
        "package": "hspread",
        "partial": "Cause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Conf",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration passed to \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "data",
        "title": "Conf"
      },
      "index": {
        "description": "Configuration passed to connect",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Conf",
        "normalized": "",
        "package": "hspread",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type representing a connection with a spread server.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Abstract type representing connection with spread server",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Connection",
        "normalized": "",
        "package": "hspread",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Group",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e is a collection of clients identified by a name.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#Group",
        "fct-type": "data",
        "title": "Group"
      },
      "index": {
        "description": "Group is collection of clients identified by name",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Group",
        "normalized": "",
        "package": "hspread",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:GroupId",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier for a membership message.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#GroupId",
        "fct-type": "data",
        "title": "GroupId"
      },
      "index": {
        "description": "Identifier for membership message",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "GroupId",
        "normalized": "",
        "package": "hspread",
        "partial": "Group Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:GroupMsg",
      "description": {
        "fct-descr": "\u003cp\u003eMessages used to join or leave a group.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#GroupMsg",
        "fct-type": "data",
        "title": "GroupMsg"
      },
      "index": {
        "description": "Messages used to join or leave group",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "GroupMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "Group Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:InMsg",
      "description": {
        "fct-descr": "\u003cp\u003eMessage received.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "data",
        "title": "InMsg"
      },
      "index": {
        "description": "Message received",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "InMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "In Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:KillMsg",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#KillMsg",
        "fct-type": "data",
        "title": "KillMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "KillMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "Kill Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:MembershipMsg",
      "description": {
        "fct-descr": "\u003cp\u003eMessage regarding changes in group membership.                             \n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "data",
        "title": "MembershipMsg"
      },
      "index": {
        "description": "Message regarding changes in group membership",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "MembershipMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "Membership Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eUnion Type of messages that can be received from the server.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "Union Type of messages that can be received from the server",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Message",
        "normalized": "",
        "package": "hspread",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:OrderingType",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the orderings as specified by the Spread toolkit.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "data",
        "title": "OrderingType"
      },
      "index": {
        "description": "Represents the orderings as specified by the Spread toolkit",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "OrderingType",
        "normalized": "",
        "package": "hspread",
        "partial": "Ordering Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:OutMsg",
      "description": {
        "fct-descr": "\u003cp\u003eMessage to be sent.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "data",
        "title": "OutMsg"
      },
      "index": {
        "description": "Message to be sent",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "OutMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "Out Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:PrivateGroup",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e identifies a connection.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "type",
        "fct-source": "src/Spread-Client-Message.html#PrivateGroup",
        "fct-type": "type",
        "title": "PrivateGroup"
      },
      "index": {
        "description": "PrivateGroup identifies connection",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "PrivateGroup",
        "normalized": "",
        "package": "hspread",
        "partial": "Private Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:PrivateName",
      "description": {
        "fct-descr": "\u003cp\u003eInitial part of a \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e name that is chosen by the client when connecting.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#PrivateName",
        "fct-type": "data",
        "title": "PrivateName"
      },
      "index": {
        "description": "Initial part of PrivateGroup name that is chosen by the client when connecting",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "PrivateName",
        "normalized": "",
        "package": "hspread",
        "partial": "Private Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:RejectedMsg",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "data",
        "fct-source": "src/Spread-Client-Message.html#RejectedMsg",
        "fct-type": "data",
        "title": "RejectedMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "RejectedMsg",
        "normalized": "",
        "package": "hspread",
        "partial": "Rejected Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Agreed",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Agreed",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Agreed"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Agreed",
        "normalized": "",
        "package": "hspread",
        "partial": "Agreed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Causal",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Causal",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Causal"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Causal",
        "normalized": "",
        "package": "hspread",
        "partial": "Causal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Conf",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Conf",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "Conf"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Conf",
        "normalized": "",
        "package": "hspread",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Disconnect",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Disconnect",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "Disconnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Disconnect",
        "normalized": "",
        "package": "hspread",
        "partial": "Disconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Fifo",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Fifo",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Fifo"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Fifo",
        "normalized": "",
        "package": "hspread",
        "partial": "Fifo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Incoming",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Incoming",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "Incoming"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Incoming",
        "normalized": "",
        "package": "hspread",
        "partial": "Incoming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Join",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Join",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "Join"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Join",
        "normalized": "",
        "package": "hspread",
        "partial": "Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Joining",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Joining",
        "fct-source": "src/Spread-Client-Message.html#GroupMsg",
        "fct-type": "function",
        "title": "Joining"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Joining",
        "normalized": "",
        "package": "hspread",
        "partial": "Joining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Kill",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Kill PrivateGroup",
        "fct-source": "src/Spread-Client-Message.html#KillMsg",
        "fct-type": "function",
        "title": "Kill"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Kill",
        "normalized": "",
        "package": "hspread",
        "partial": "Kill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Leave",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Leave",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "Leave"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Leave",
        "normalized": "",
        "package": "hspread",
        "partial": "Leave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Leaving",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Leaving",
        "fct-source": "src/Spread-Client-Message.html#GroupMsg",
        "fct-type": "function",
        "title": "Leaving"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Leaving",
        "normalized": "",
        "package": "hspread",
        "partial": "Leaving",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Membership",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Membership !MembershipMsg",
        "fct-source": "src/Spread-Client-Message.html#Message",
        "fct-type": "function",
        "title": "Membership"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Membership",
        "normalized": "",
        "package": "hspread",
        "partial": "Membership",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Network",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Network",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Network",
        "normalized": "",
        "package": "hspread",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Outgoing",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Outgoing",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "Outgoing"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Outgoing",
        "normalized": "",
        "package": "hspread",
        "partial": "Outgoing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Reg",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Reg",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "Reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Reg",
        "normalized": "",
        "package": "hspread",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Regular",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Regular !InMsg",
        "fct-source": "src/Spread-Client-Message.html#Message",
        "fct-type": "function",
        "title": "Regular"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Regular",
        "normalized": "",
        "package": "hspread",
        "partial": "Regular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Rejected",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Rejected !RejectedMsg",
        "fct-source": "src/Spread-Client-Message.html#Message",
        "fct-type": "function",
        "title": "Rejected"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Rejected",
        "normalized": "",
        "package": "hspread",
        "partial": "Rejected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Reliable",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Reliable",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Reliable"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Reliable",
        "normalized": "",
        "package": "hspread",
        "partial": "Reliable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Safe",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Safe",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Safe"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Safe",
        "normalized": "",
        "package": "hspread",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:SelfLeave",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "SelfLeave",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "SelfLeave"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "SelfLeave",
        "normalized": "",
        "package": "hspread",
        "partial": "Self Leave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Transient",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Transient",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "Transient"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Transient",
        "normalized": "",
        "package": "hspread",
        "partial": "Transient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Unreliable",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Unreliable",
        "fct-source": "src/Spread-Client-Message.html#OrderingType",
        "fct-type": "function",
        "title": "Unreliable"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "Unreliable",
        "normalized": "",
        "package": "hspread",
        "partial": "Unreliable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:WasGroup",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "WasGroup !GroupMsg",
        "fct-source": "src/Spread-Client-Message.html#RejectedMsg",
        "fct-type": "function",
        "title": "WasGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "WasGroup",
        "normalized": "",
        "package": "hspread",
        "partial": "Was Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:WasOut",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "WasOut !OutMsg",
        "fct-source": "src/Spread-Client-Message.html#RejectedMsg",
        "fct-type": "function",
        "title": "WasOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "WasOut",
        "normalized": "",
        "package": "hspread",
        "partial": "Was Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eServer address, using 127.0.0.1 if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!(Maybe HostName)",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "Server address using if Nothing",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "address",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:authMethods",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication methods to use when connecting.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![AuthMethod]",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "authMethods"
      },
      "index": {
        "description": "Authentication methods to use when connecting",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "authMethods",
        "normalized": "[AuthMethod]",
        "package": "hspread",
        "partial": "Methods",
        "signature": "[AuthMethod]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:authname",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "AuthName -\u003e ByteString",
        "fct-source": "src/Spread-Client-Connection.html#authname",
        "fct-type": "function",
        "title": "authname"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "authname",
        "normalized": "AuthName-\u003eByteString",
        "package": "hspread",
        "partial": "",
        "signature": "AuthName-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:cause",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Cause",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "cause"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "cause",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:changingGroup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Group",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "changingGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "changingGroup",
        "normalized": "",
        "package": "hspread",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to the specified server, will use a \"NULL\" authentication method if the \u003ccode\u003e\u003ca\u003eauthMethods\u003c/a\u003e\u003c/code\u003e list is empty.\n A spread server will refuse the connection if another with the same PrivateName is still active.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Conf -\u003e IO (Chan R Message, Connection)",
        "fct-source": "src/Spread-Client-Connection.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects to the specified server will use NULL authentication method if the authMethods list is empty spread server will refuse the connection if another with the same PrivateName is still active",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "connect",
        "normalized": "Conf-\u003eIO(Chan R Message,Connection)",
        "package": "hspread",
        "partial": "",
        "signature": "Conf-\u003eIO(Chan R Message,Connection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:defaultConf",
      "description": {
        "fct-descr": "\u003cp\u003edefaulConf = Conf Nothing Nothing (mkPrivateName (B.pack \"user\")) False True []\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Conf",
        "fct-source": "src/Spread-Client-Connection.html#defaultConf",
        "fct-type": "function",
        "title": "defaultConf"
      },
      "index": {
        "description": "defaulConf Conf Nothing Nothing mkPrivateName B.pack user False True",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "defaultConf",
        "normalized": "",
        "package": "hspread",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:desiredName",
      "description": {
        "fct-descr": "\u003cp\u003eIt will become part of the \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!PrivateName",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "desiredName"
      },
      "index": {
        "description": "It will become part of the PrivateGroup of the Connection",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "desiredName",
        "normalized": "",
        "package": "hspread",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eSends a disconnection message to the server, which will close the connection.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Spread-Client-Connection.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "Sends disconnection message to the server which will close the connection",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "disconnect",
        "normalized": "Connection-\u003eIO()",
        "package": "hspread",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:disconnecting",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!PrivateGroup",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "disconnecting"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "disconnecting",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:getDupedChan",
      "description": {
        "fct-descr": "\u003cp\u003eMessages received from now on will be available on the returned \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Connection -\u003e IO (Chan R Message)",
        "fct-source": "src/Spread-Client-Connection.html#getDupedChan",
        "fct-type": "function",
        "title": "getDupedChan"
      },
      "index": {
        "description": "Messages received from now on will be available on the returned Chan",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "getDupedChan",
        "normalized": "Connection-\u003eIO(Chan R Message)",
        "package": "hspread",
        "partial": "Duped Chan",
        "signature": "Connection-\u003eIO(Chan R Message)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!GroupId",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "groupId"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "groupId",
        "normalized": "",
        "package": "hspread",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupMembership",
      "description": {
        "fct-descr": "\u003cp\u003eShould it receive Membership messages?\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Bool",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "groupMembership"
      },
      "index": {
        "description": "Should it receive Membership messages",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "groupMembership",
        "normalized": "",
        "package": "hspread",
        "partial": "Membership",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupName",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Group -\u003e ByteString",
        "fct-source": "src/Spread-Client-Message.html#groupName",
        "fct-type": "function",
        "title": "groupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "groupName",
        "normalized": "Group-\u003eByteString",
        "package": "hspread",
        "partial": "Name",
        "signature": "Group-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:grp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Group",
        "fct-source": "src/Spread-Client-Message.html#GroupMsg",
        "fct-type": "function",
        "title": "grp"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "grp",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!ByteString",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inData"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inData",
        "normalized": "",
        "package": "hspread",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inEndianMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the message has been sent with a different endian order.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Bool",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inEndianMismatch"
      },
      "index": {
        "description": "True if the message has been sent with different endian order",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inEndianMismatch",
        "normalized": "",
        "package": "hspread",
        "partial": "Endian Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inGroups",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![Group]",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inGroups"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inGroups",
        "normalized": "[Group]",
        "package": "hspread",
        "partial": "Groups",
        "signature": "[Group]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inMsgType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Word16",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inMsgType"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inMsgType",
        "normalized": "",
        "package": "hspread",
        "partial": "Msg Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inOrdering",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!OrderingType",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inOrdering"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inOrdering",
        "normalized": "",
        "package": "hspread",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inSender",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!PrivateGroup",
        "fct-source": "src/Spread-Client-Message.html#InMsg",
        "fct-type": "function",
        "title": "inSender"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "inSender",
        "normalized": "",
        "package": "hspread",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:index",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Int",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "index",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eJoins a group, the server will send a \u003ccode\u003e\u003ca\u003eReg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Group -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Spread-Client-Connection.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Joins group the server will send Reg",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "join",
        "normalized": "Group-\u003eConnection-\u003eIO()",
        "package": "hspread",
        "partial": "",
        "signature": "Group-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:joining",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!PrivateGroup",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "joining"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "joining",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:leave",
      "description": {
        "fct-descr": "\u003cp\u003eLeaves a group, the server will send a \u003ccode\u003e\u003ca\u003eSelfLeave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Group -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Spread-Client-Connection.html#leave",
        "fct-type": "function",
        "title": "leave"
      },
      "index": {
        "description": "Leaves group the server will send SelfLeave",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "leave",
        "normalized": "Group-\u003eConnection-\u003eIO()",
        "package": "hspread",
        "partial": "",
        "signature": "Group-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:leaving",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!PrivateGroup",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "leaving"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "leaving",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:localSet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![PrivateGroup]",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "localSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "localSet",
        "normalized": "[PrivateGroup]",
        "package": "hspread",
        "partial": "Set",
        "signature": "[PrivateGroup]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:makeGroup",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "String -\u003e Maybe Group",
        "fct-source": "src/Spread-Client-Message.html#makeGroup",
        "fct-type": "function",
        "title": "makeGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "makeGroup",
        "normalized": "String-\u003eMaybe Group",
        "package": "hspread",
        "partial": "Group",
        "signature": "String-\u003eMaybe Group"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:members",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![PrivateGroup]",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "members"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "members",
        "normalized": "[PrivateGroup]",
        "package": "hspread",
        "partial": "",
        "signature": "[PrivateGroup]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkAuthName",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will be truncated to the maximum allowed size.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "ByteString -\u003e AuthName",
        "fct-source": "src/Spread-Client-Connection.html#mkAuthName",
        "fct-type": "function",
        "title": "mkAuthName"
      },
      "index": {
        "description": "The ByteString will be truncated to the maximum allowed size",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "mkAuthName",
        "normalized": "ByteString-\u003eAuthName",
        "package": "hspread",
        "partial": "Auth Name",
        "signature": "ByteString-\u003eAuthName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkGroup",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "ByteString -\u003e Maybe Group",
        "fct-source": "src/Spread-Client-Message.html#mkGroup",
        "fct-type": "function",
        "title": "mkGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "mkGroup",
        "normalized": "ByteString-\u003eMaybe Group",
        "package": "hspread",
        "partial": "Group",
        "signature": "ByteString-\u003eMaybe Group"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkPrivateGroup",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "ByteString -\u003e Group",
        "fct-source": "src/Spread-Client-Message.html#mkPrivateGroup",
        "fct-type": "function",
        "title": "mkPrivateGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "mkPrivateGroup",
        "normalized": "ByteString-\u003eGroup",
        "package": "hspread",
        "partial": "Private Group",
        "signature": "ByteString-\u003eGroup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkPrivateName",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "ByteString -\u003e PrivateName",
        "fct-source": "src/Spread-Client-Message.html#mkPrivateName",
        "fct-type": "function",
        "title": "mkPrivateName"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "mkPrivateName",
        "normalized": "ByteString-\u003ePrivateName",
        "package": "hspread",
        "partial": "Private Name",
        "signature": "ByteString-\u003ePrivateName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:multicast_internal",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "PrivateGroup -\u003e a -\u003e Handle -\u003e IO Bool",
        "fct-source": "src/Spread-Client-Message.html#multicast_internal",
        "fct-type": "function",
        "title": "multicast_internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "multicast_internal",
        "normalized": "PrivateGroup-\u003ea-\u003eHandle-\u003eIO Bool",
        "package": "hspread",
        "partial": "",
        "signature": "PrivateGroup-\u003ea-\u003eHandle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:numMembers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Int",
        "fct-source": "src/Spread-Client-Message.html#MembershipMsg",
        "fct-type": "function",
        "title": "numMembers"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "numMembers",
        "normalized": "",
        "package": "hspread",
        "partial": "Members",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outData",
      "description": {
        "fct-descr": "\u003cp\u003eMessage body.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!ByteString",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "outData"
      },
      "index": {
        "description": "Message body",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "outData",
        "normalized": "",
        "package": "hspread",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outDiscard",
      "description": {
        "fct-descr": "\u003cp\u003eIf True you won't get a copy of this message back from the server.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Bool",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "outDiscard"
      },
      "index": {
        "description": "If True you won get copy of this message back from the server",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "outDiscard",
        "normalized": "",
        "package": "hspread",
        "partial": "Discard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outGroups",
      "description": {
        "fct-descr": "\u003cp\u003eRecipients of the message\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![Group]",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "outGroups"
      },
      "index": {
        "description": "Recipients of the message",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "outGroups",
        "normalized": "[Group]",
        "package": "hspread",
        "partial": "Groups",
        "signature": "[Group]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outMsgType",
      "description": {
        "fct-descr": "\u003cp\u003eTo be used by the application to identify the kind of message.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Word16",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "outMsgType"
      },
      "index": {
        "description": "To be used by the application to identify the kind of message",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "outMsgType",
        "normalized": "",
        "package": "hspread",
        "partial": "Msg Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outOrdering",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!OrderingType",
        "fct-source": "src/Spread-Client-Message.html#OutMsg",
        "fct-type": "function",
        "title": "outOrdering"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "outOrdering",
        "normalized": "",
        "package": "hspread",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eServer port, uses the default spread port if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!(Maybe PortNumber)",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "Server port uses the default spread port if Nothing",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "port",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:priority",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a priority connection?\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "!Bool",
        "fct-source": "src/Spread-Client-Connection.html#Conf",
        "fct-type": "function",
        "title": "priority"
      },
      "index": {
        "description": "Is this priority connection",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "priority",
        "normalized": "",
        "package": "hspread",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:privateGroup",
      "description": {
        "fct-descr": "\u003cp\u003eprivate name of this connection, useful for p2p messages.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Connection -\u003e PrivateGroup",
        "fct-source": "src/Spread-Client-Connection.html#privateGroup",
        "fct-type": "function",
        "title": "privateGroup"
      },
      "index": {
        "description": "private name of this connection useful for p2p messages",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "privateGroup",
        "normalized": "Connection-\u003ePrivateGroup",
        "package": "hspread",
        "partial": "Group",
        "signature": "Connection-\u003ePrivateGroup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:privateName",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "PrivateName -\u003e ByteString",
        "fct-source": "src/Spread-Client-Message.html#privateName",
        "fct-type": "function",
        "title": "privateName"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "privateName",
        "normalized": "PrivateName-\u003eByteString",
        "package": "hspread",
        "partial": "Name",
        "signature": "PrivateName-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:putPadded",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Int -\u003e ByteString -\u003e PutM ()",
        "fct-source": "src/Spread-Client-Message.html#putPadded",
        "fct-type": "function",
        "title": "putPadded"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "putPadded",
        "normalized": "Int-\u003eByteString-\u003ePutM()",
        "package": "hspread",
        "partial": "Padded",
        "signature": "Int-\u003eByteString-\u003ePutM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:receive_internal",
      "description": {
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Handle -\u003e PrivateGroup -\u003e IO Message",
        "fct-source": "src/Spread-Client-Message.html#receive_internal",
        "fct-type": "function",
        "title": "receive_internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "receive_internal",
        "normalized": "Handle-\u003ePrivateGroup-\u003eIO Message",
        "package": "hspread",
        "partial": "",
        "signature": "Handle-\u003ePrivateGroup-\u003eIO Message"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a regular message.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "OutMsg -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Spread-Client-Connection.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send regular message",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "send",
        "normalized": "OutMsg-\u003eConnection-\u003eIO()",
        "package": "hspread",
        "partial": "",
        "signature": "OutMsg-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:sets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "![[PrivateGroup]]",
        "fct-source": "src/Spread-Client-Message.html#Cause",
        "fct-type": "function",
        "title": "sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "sets",
        "normalized": "[[PrivateGroup]]",
        "package": "hspread",
        "partial": "",
        "signature": "[[PrivateGroup]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:startReceive",
      "description": {
        "fct-descr": "\u003cp\u003eStart fetching messages from the network, returns True if it was stopped.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Spread-Client-Connection.html#startReceive",
        "fct-type": "function",
        "title": "startReceive"
      },
      "index": {
        "description": "Start fetching messages from the network returns True if it was stopped",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "startReceive",
        "normalized": "Connection-\u003eIO Bool",
        "package": "hspread",
        "partial": "Receive",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:stopReceive",
      "description": {
        "fct-descr": "\u003cp\u003eStop fetching messages from the network (at most one more message can be read)\n , returns True if it was started.\n\u003c/p\u003e",
        "fct-module": "Spread.Client",
        "fct-package": "hspread",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Spread-Client-Connection.html#stopReceive",
        "fct-type": "function",
        "title": "stopReceive"
      },
      "index": {
        "description": "Stop fetching messages from the network at most one more message can be read returns True if it was started",
        "hierarchy": "Spread Client",
        "module": "Spread.Client",
        "name": "stopReceive",
        "normalized": "Connection-\u003eIO Bool",
        "package": "hspread",
        "partial": "Receive",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  }
]