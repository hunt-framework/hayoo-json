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
        "word": "hspread"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnbounded closeable channels.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "Closeable",
          "package": "hspread",
          "source": "src/Control-Concurrent-Chan-Closeable.html",
          "type": "module"
        },
        "index": {
          "description": "Unbounded closeable channels",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "Closeable",
          "package": "hspread",
          "partial": "Closeable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "Chan",
          "package": "hspread",
          "source": "src/Control-Concurrent-Chan-Closeable.html#Chan",
          "type": "data"
        },
        "index": {
          "description": "Chan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "Chan",
          "package": "hspread",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e for ReadOnly \n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "R",
          "package": "hspread",
          "source": "src/Control-Concurrent-Chan-Closeable.html#R",
          "type": "data"
        },
        "index": {
          "description": "for ReadOnly",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "R",
          "package": "hspread",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eW\u003c/a\u003e\u003c/code\u003e for WriteOnly\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "W",
          "package": "hspread",
          "source": "src/Control-Concurrent-Chan-Closeable.html#W",
          "type": "data"
        },
        "index": {
          "description": "for WriteOnly",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "W",
          "package": "hspread",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#t:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, data can be no more written to it.\n Returns True if the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e was already closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "closeChan",
          "package": "hspread",
          "signature": "Chan W a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Closeable.html#closeChan",
          "type": "function"
        },
        "index": {
          "description": "Close the Chan data can be no more written to it Returns True if the Chan was already closed",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "closeChan",
          "normalized": "Chan W a-\u003eIO Bool",
          "package": "hspread",
          "partial": "Chan",
          "signature": "Chan W a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:closeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e: data that will be written (W)\n or is yet to be read (R) on the argument, will also be available on the returned channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "forkChan",
          "package": "hspread",
          "signature": "Chan t a -\u003e IO (Chan R a)",
          "source": "src/Control-Concurrent-Chan-Closeable.html#forkChan",
          "type": "function"
        },
        "index": {
          "description": "Forks Chan data that will be written or is yet to be read on the argument will also be available on the returned channel",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "forkChan",
          "normalized": "Chan a b-\u003eIO(Chan R b)",
          "package": "hspread",
          "partial": "Chan",
          "signature": "Chan t a-\u003eIO(Chan R a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:forkChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a lazy list representing the contents of the supplied\n \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, much like \u003ccode\u003eSystem.IO.hGetContents\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "getChanContents",
          "package": "hspread",
          "signature": "Chan R a -\u003e IO [a]",
          "source": "src/Control-Concurrent-Chan-Closeable.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Return lazy list representing the contents of the supplied Chan much like System.IO.hGetContents",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "getChanContents",
          "normalized": "Chan R a-\u003eIO[a]",
          "package": "hspread",
          "partial": "Chan Contents",
          "signature": "Chan R a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking check.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "isClosedChan",
          "package": "hspread",
          "signature": "Chan t a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Closeable.html#isClosedChan",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking check",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "isClosedChan",
          "normalized": "Chan a b-\u003eIO Bool",
          "package": "hspread",
          "partial": "Closed Chan",
          "signature": "Chan t a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:isClosedChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is empty, i.e. readChan won't block.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "isEmptyChan",
          "package": "hspread",
          "signature": "Chan R a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Closeable.html#isEmptyChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied Chan is empty i.e readChan won block",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "isEmptyChan",
          "normalized": "Chan R a-\u003eIO Bool",
          "package": "hspread",
          "partial": "Empty Chan",
          "signature": "Chan R a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:isEmptyChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a pair of \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, data written on the W end can be read from the R end.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "newChan",
          "package": "hspread",
          "signature": "IO (Chan R a, Chan W a)",
          "source": "src/Control-Concurrent-Chan-Closeable.html#newChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns pair of Chan data written on the end can be read from the end",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "newChan",
          "normalized": "IO(Chan R a,Chan W a)",
          "package": "hspread",
          "partial": "Chan",
          "signature": "IO(Chan R a,Chan W a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n |Nothing if the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "readChan",
          "package": "hspread",
          "signature": "Chan R a -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-Chan-Closeable.html#readChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the Chan Nothing if the Chan is closed",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "readChan",
          "normalized": "Chan R a-\u003eIO(Maybe a)",
          "package": "hspread",
          "partial": "Chan",
          "signature": "Chan R a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "unGetChan",
          "package": "hspread",
          "signature": "Chan R a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Closeable.html#unGetChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "unGetChan",
          "normalized": "Chan R a-\u003ea-\u003eIO()",
          "package": "hspread",
          "partial": "Get Chan",
          "signature": "Chan R a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:unGetChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n Returns True if successful, False if the channel is closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "writeChan",
          "package": "hspread",
          "signature": "Chan W a -\u003e a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Closeable.html#writeChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to Chan Returns True if successful False if the channel is closed",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "writeChan",
          "normalized": "Chan W a-\u003ea-\u003eIO Bool",
          "package": "hspread",
          "partial": "Chan",
          "signature": "Chan W a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an entire list of items to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n Returning the remainder if the channel has been closed meanwhile.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "writeList2Chan",
          "package": "hspread",
          "signature": "Chan W a -\u003e [a] -\u003e IO (Maybe [a])",
          "source": "src/Control-Concurrent-Chan-Closeable.html#writeList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Write an entire list of items to Chan Returning the remainder if the channel has been closed meanwhile",
          "hierarchy": "Control Concurrent Chan Closeable",
          "module": "Control.Concurrent.Chan.Closeable",
          "name": "writeList2Chan",
          "normalized": "Chan W a-\u003e[a]-\u003eIO(Maybe[a])",
          "package": "hspread",
          "partial": "List Chan",
          "signature": "Chan W a-\u003e[a]-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Control-Concurrent-Chan-Closeable.html#v:writeList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Client",
          "package": "hspread",
          "source": "src/Spread-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Client",
          "package": "hspread",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action should return True if the authentication succeded.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "AuthMethod",
          "package": "hspread",
          "source": "src/Spread-Client-Connection.html#AuthMethod",
          "type": "type"
        },
        "index": {
          "description": "The action should return True if the authentication succeded",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "AuthMethod",
          "package": "hspread",
          "partial": "Auth Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:AuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of an authentication method.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "AuthName",
          "package": "hspread",
          "source": "src/Spread-Client-Connection.html#AuthName",
          "type": "data"
        },
        "index": {
          "description": "Name of an authentication method",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "AuthName",
          "package": "hspread",
          "partial": "Auth Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:AuthName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat caused a membership message.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "Cause",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "data"
        },
        "index": {
          "description": "What caused membership message",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Cause",
          "package": "hspread",
          "partial": "Cause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Cause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration passed to \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "Conf",
          "package": "hspread",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "data"
        },
        "index": {
          "description": "Configuration passed to connect",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Conf",
          "package": "hspread",
          "partial": "Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type representing a connection with a spread server.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "Connection",
          "package": "hspread",
          "source": "src/Spread-Client-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Abstract type representing connection with spread server",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Connection",
          "package": "hspread",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e is a collection of clients identified by a name.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "Group",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#Group",
          "type": "data"
        },
        "index": {
          "description": "Group is collection of clients identified by name",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Group",
          "package": "hspread",
          "partial": "Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier for a membership message.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "GroupId",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#GroupId",
          "type": "data"
        },
        "index": {
          "description": "Identifier for membership message",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "GroupId",
          "package": "hspread",
          "partial": "Group Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:GroupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages used to join or leave a group.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "GroupMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#GroupMsg",
          "type": "data"
        },
        "index": {
          "description": "Messages used to join or leave group",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "GroupMsg",
          "package": "hspread",
          "partial": "Group Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:GroupMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage received.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "InMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "data"
        },
        "index": {
          "description": "Message received",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "InMsg",
          "package": "hspread",
          "partial": "In Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:InMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "KillMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#KillMsg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "KillMsg",
          "package": "hspread",
          "partial": "Kill Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:KillMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage regarding changes in group membership.                             \n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "MembershipMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "data"
        },
        "index": {
          "description": "Message regarding changes in group membership",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "MembershipMsg",
          "package": "hspread",
          "partial": "Membership Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:MembershipMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion Type of messages that can be received from the server.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "Message",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#Message",
          "type": "data"
        },
        "index": {
          "description": "Union Type of messages that can be received from the server",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Message",
          "package": "hspread",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the orderings as specified by the Spread toolkit.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "OrderingType",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "data"
        },
        "index": {
          "description": "Represents the orderings as specified by the Spread toolkit",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "OrderingType",
          "package": "hspread",
          "partial": "Ordering Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:OrderingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage to be sent.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "OutMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "data"
        },
        "index": {
          "description": "Message to be sent",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "OutMsg",
          "package": "hspread",
          "partial": "Out Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:OutMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e identifies a connection.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "PrivateGroup",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#PrivateGroup",
          "type": "type"
        },
        "index": {
          "description": "PrivateGroup identifies connection",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "PrivateGroup",
          "package": "hspread",
          "partial": "Private Group",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:PrivateGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial part of a \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e name that is chosen by the client when connecting.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "PrivateName",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#PrivateName",
          "type": "data"
        },
        "index": {
          "description": "Initial part of PrivateGroup name that is chosen by the client when connecting",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "PrivateName",
          "package": "hspread",
          "partial": "Private Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:PrivateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "RejectedMsg",
          "package": "hspread",
          "source": "src/Spread-Client-Message.html#RejectedMsg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "RejectedMsg",
          "package": "hspread",
          "partial": "Rejected Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#t:RejectedMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Agreed",
          "package": "hspread",
          "signature": "Agreed",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Agreed",
          "package": "hspread",
          "partial": "Agreed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Agreed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Causal",
          "package": "hspread",
          "signature": "Causal",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Causal",
          "package": "hspread",
          "partial": "Causal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Causal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Conf",
          "package": "hspread",
          "signature": "Conf",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Conf",
          "package": "hspread",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Disconnect",
          "package": "hspread",
          "signature": "Disconnect",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Disconnect",
          "package": "hspread",
          "partial": "Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Fifo",
          "package": "hspread",
          "signature": "Fifo",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Fifo",
          "package": "hspread",
          "partial": "Fifo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Fifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Incoming",
          "package": "hspread",
          "signature": "Incoming",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Incoming",
          "package": "hspread",
          "partial": "Incoming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Incoming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Join",
          "package": "hspread",
          "signature": "Join",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Join",
          "package": "hspread",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Joining",
          "package": "hspread",
          "signature": "Joining",
          "source": "src/Spread-Client-Message.html#GroupMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Joining",
          "package": "hspread",
          "partial": "Joining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Joining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Kill",
          "package": "hspread",
          "signature": "Kill PrivateGroup",
          "source": "src/Spread-Client-Message.html#KillMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Kill",
          "package": "hspread",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Leave",
          "package": "hspread",
          "signature": "Leave",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Leave",
          "package": "hspread",
          "partial": "Leave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Leaving",
          "package": "hspread",
          "signature": "Leaving",
          "source": "src/Spread-Client-Message.html#GroupMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Leaving",
          "package": "hspread",
          "partial": "Leaving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Leaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Membership",
          "package": "hspread",
          "signature": "Membership !MembershipMsg",
          "source": "src/Spread-Client-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Membership",
          "package": "hspread",
          "partial": "Membership",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Membership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Network",
          "package": "hspread",
          "signature": "Network",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Network",
          "package": "hspread",
          "partial": "Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Outgoing",
          "package": "hspread",
          "signature": "Outgoing",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Outgoing",
          "package": "hspread",
          "partial": "Outgoing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Outgoing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Reg",
          "package": "hspread",
          "signature": "Reg",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Reg",
          "package": "hspread",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Regular",
          "package": "hspread",
          "signature": "Regular !InMsg",
          "source": "src/Spread-Client-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Regular",
          "package": "hspread",
          "partial": "Regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Rejected",
          "package": "hspread",
          "signature": "Rejected !RejectedMsg",
          "source": "src/Spread-Client-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Rejected",
          "package": "hspread",
          "partial": "Rejected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Rejected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Reliable",
          "package": "hspread",
          "signature": "Reliable",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Reliable",
          "package": "hspread",
          "partial": "Reliable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Reliable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Safe",
          "package": "hspread",
          "signature": "Safe",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Safe",
          "package": "hspread",
          "partial": "Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "SelfLeave",
          "package": "hspread",
          "signature": "SelfLeave",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "SelfLeave",
          "package": "hspread",
          "partial": "Self Leave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:SelfLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Transient",
          "package": "hspread",
          "signature": "Transient",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Transient",
          "package": "hspread",
          "partial": "Transient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Transient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "Unreliable",
          "package": "hspread",
          "signature": "Unreliable",
          "source": "src/Spread-Client-Message.html#OrderingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "Unreliable",
          "package": "hspread",
          "partial": "Unreliable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:Unreliable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "WasGroup",
          "package": "hspread",
          "signature": "WasGroup !GroupMsg",
          "source": "src/Spread-Client-Message.html#RejectedMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "WasGroup",
          "package": "hspread",
          "partial": "Was Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:WasGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "WasOut",
          "package": "hspread",
          "signature": "WasOut !OutMsg",
          "source": "src/Spread-Client-Message.html#RejectedMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "WasOut",
          "package": "hspread",
          "partial": "Was Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:WasOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer address, using 127.0.0.1 if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "address",
          "package": "hspread",
          "signature": "(Maybe HostName)",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "Server address using if Nothing",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "address",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication methods to use when connecting.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "authMethods",
          "package": "hspread",
          "signature": "[AuthMethod]",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "Authentication methods to use when connecting",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "authMethods",
          "normalized": "[AuthMethod]",
          "package": "hspread",
          "partial": "Methods",
          "signature": "[AuthMethod]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:authMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "authname",
          "package": "hspread",
          "signature": "AuthName -\u003e ByteString",
          "source": "src/Spread-Client-Connection.html#authname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "authname",
          "normalized": "AuthName-\u003eByteString",
          "package": "hspread",
          "signature": "AuthName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:authname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "cause",
          "package": "hspread",
          "signature": "Cause",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "cause",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:cause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "changingGroup",
          "package": "hspread",
          "signature": "Group",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "changingGroup",
          "package": "hspread",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:changingGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to the specified server, will use a \"NULL\" authentication method if the \u003ccode\u003e\u003ca\u003eauthMethods\u003c/a\u003e\u003c/code\u003e list is empty.\n A spread server will refuse the connection if another with the same PrivateName is still active.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "connect",
          "package": "hspread",
          "signature": "Conf -\u003e IO (Chan R Message, Connection)",
          "source": "src/Spread-Client-Connection.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connects to the specified server will use NULL authentication method if the authMethods list is empty spread server will refuse the connection if another with the same PrivateName is still active",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "connect",
          "normalized": "Conf-\u003eIO(Chan R Message,Connection)",
          "package": "hspread",
          "signature": "Conf-\u003eIO(Chan R Message,Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefaulConf = Conf Nothing Nothing (mkPrivateName (B.pack \"user\")) False True []\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "defaultConf",
          "package": "hspread",
          "signature": "Conf",
          "source": "src/Spread-Client-Connection.html#defaultConf",
          "type": "function"
        },
        "index": {
          "description": "defaulConf Conf Nothing Nothing mkPrivateName B.pack user False True",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "defaultConf",
          "package": "hspread",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:defaultConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt will become part of the \u003ccode\u003e\u003ca\u003ePrivateGroup\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "desiredName",
          "package": "hspread",
          "signature": "PrivateName",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "It will become part of the PrivateGroup of the Connection",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "desiredName",
          "package": "hspread",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:desiredName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a disconnection message to the server, which will close the connection.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "disconnect",
          "package": "hspread",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Spread-Client-Connection.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Sends disconnection message to the server which will close the connection",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "disconnect",
          "normalized": "Connection-\u003eIO()",
          "package": "hspread",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "disconnecting",
          "package": "hspread",
          "signature": "PrivateGroup",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "disconnecting",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:disconnecting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages received from now on will be available on the returned \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "getDupedChan",
          "package": "hspread",
          "signature": "Connection -\u003e IO (Chan R Message)",
          "source": "src/Spread-Client-Connection.html#getDupedChan",
          "type": "function"
        },
        "index": {
          "description": "Messages received from now on will be available on the returned Chan",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "getDupedChan",
          "normalized": "Connection-\u003eIO(Chan R Message)",
          "package": "hspread",
          "partial": "Duped Chan",
          "signature": "Connection-\u003eIO(Chan R Message)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:getDupedChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "groupId",
          "package": "hspread",
          "signature": "GroupId",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "groupId",
          "package": "hspread",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould it receive Membership messages?\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "groupMembership",
          "package": "hspread",
          "signature": "Bool",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "Should it receive Membership messages",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "groupMembership",
          "package": "hspread",
          "partial": "Membership",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupMembership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "groupName",
          "package": "hspread",
          "signature": "Group -\u003e ByteString",
          "source": "src/Spread-Client-Message.html#groupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "groupName",
          "normalized": "Group-\u003eByteString",
          "package": "hspread",
          "partial": "Name",
          "signature": "Group-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "grp",
          "package": "hspread",
          "signature": "Group",
          "source": "src/Spread-Client-Message.html#GroupMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "grp",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:grp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "inData",
          "package": "hspread",
          "signature": "ByteString",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inData",
          "package": "hspread",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the message has been sent with a different endian order.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "inEndianMismatch",
          "package": "hspread",
          "signature": "Bool",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "description": "True if the message has been sent with different endian order",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inEndianMismatch",
          "package": "hspread",
          "partial": "Endian Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inEndianMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "inGroups",
          "package": "hspread",
          "signature": "[Group]",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inGroups",
          "normalized": "[Group]",
          "package": "hspread",
          "partial": "Groups",
          "signature": "[Group]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "inMsgType",
          "package": "hspread",
          "signature": "Word16",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inMsgType",
          "package": "hspread",
          "partial": "Msg Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inMsgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "inOrdering",
          "package": "hspread",
          "signature": "OrderingType",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inOrdering",
          "package": "hspread",
          "partial": "Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "inSender",
          "package": "hspread",
          "signature": "PrivateGroup",
          "source": "src/Spread-Client-Message.html#InMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "inSender",
          "package": "hspread",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:inSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "index",
          "package": "hspread",
          "signature": "Int",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "index",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins a group, the server will send a \u003ccode\u003e\u003ca\u003eReg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "join",
          "package": "hspread",
          "signature": "Group -\u003e Connection -\u003e IO ()",
          "source": "src/Spread-Client-Connection.html#join",
          "type": "function"
        },
        "index": {
          "description": "Joins group the server will send Reg",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "join",
          "normalized": "Group-\u003eConnection-\u003eIO()",
          "package": "hspread",
          "signature": "Group-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "joining",
          "package": "hspread",
          "signature": "PrivateGroup",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "joining",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:joining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeaves a group, the server will send a \u003ccode\u003e\u003ca\u003eSelfLeave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "leave",
          "package": "hspread",
          "signature": "Group -\u003e Connection -\u003e IO ()",
          "source": "src/Spread-Client-Connection.html#leave",
          "type": "function"
        },
        "index": {
          "description": "Leaves group the server will send SelfLeave",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "leave",
          "normalized": "Group-\u003eConnection-\u003eIO()",
          "package": "hspread",
          "signature": "Group-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "leaving",
          "package": "hspread",
          "signature": "PrivateGroup",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "leaving",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:leaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "localSet",
          "package": "hspread",
          "signature": "[PrivateGroup]",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "localSet",
          "normalized": "[PrivateGroup]",
          "package": "hspread",
          "partial": "Set",
          "signature": "[PrivateGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:localSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "makeGroup",
          "package": "hspread",
          "signature": "String -\u003e Maybe Group",
          "source": "src/Spread-Client-Message.html#makeGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "makeGroup",
          "normalized": "String-\u003eMaybe Group",
          "package": "hspread",
          "partial": "Group",
          "signature": "String-\u003eMaybe Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:makeGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "members",
          "package": "hspread",
          "signature": "[PrivateGroup]",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "members",
          "normalized": "[PrivateGroup]",
          "package": "hspread",
          "signature": "[PrivateGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:members"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will be truncated to the maximum allowed size.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "mkAuthName",
          "package": "hspread",
          "signature": "ByteString -\u003e AuthName",
          "source": "src/Spread-Client-Connection.html#mkAuthName",
          "type": "function"
        },
        "index": {
          "description": "The ByteString will be truncated to the maximum allowed size",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "mkAuthName",
          "normalized": "ByteString-\u003eAuthName",
          "package": "hspread",
          "partial": "Auth Name",
          "signature": "ByteString-\u003eAuthName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkAuthName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "mkGroup",
          "package": "hspread",
          "signature": "ByteString -\u003e Maybe Group",
          "source": "src/Spread-Client-Message.html#mkGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "mkGroup",
          "normalized": "ByteString-\u003eMaybe Group",
          "package": "hspread",
          "partial": "Group",
          "signature": "ByteString-\u003eMaybe Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "mkPrivateGroup",
          "package": "hspread",
          "signature": "ByteString -\u003e Group",
          "source": "src/Spread-Client-Message.html#mkPrivateGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "mkPrivateGroup",
          "normalized": "ByteString-\u003eGroup",
          "package": "hspread",
          "partial": "Private Group",
          "signature": "ByteString-\u003eGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkPrivateGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "mkPrivateName",
          "package": "hspread",
          "signature": "ByteString -\u003e PrivateName",
          "source": "src/Spread-Client-Message.html#mkPrivateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "mkPrivateName",
          "normalized": "ByteString-\u003ePrivateName",
          "package": "hspread",
          "partial": "Private Name",
          "signature": "ByteString-\u003ePrivateName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:mkPrivateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "multicast_internal",
          "package": "hspread",
          "signature": "PrivateGroup -\u003e a -\u003e Handle -\u003e IO Bool",
          "source": "src/Spread-Client-Message.html#multicast_internal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "multicast_internal",
          "normalized": "PrivateGroup-\u003ea-\u003eHandle-\u003eIO Bool",
          "package": "hspread",
          "signature": "PrivateGroup-\u003ea-\u003eHandle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:multicast_internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "numMembers",
          "package": "hspread",
          "signature": "Int",
          "source": "src/Spread-Client-Message.html#MembershipMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "numMembers",
          "package": "hspread",
          "partial": "Members",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:numMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage body.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "outData",
          "package": "hspread",
          "signature": "ByteString",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "description": "Message body",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "outData",
          "package": "hspread",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True you won't get a copy of this message back from the server.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "outDiscard",
          "package": "hspread",
          "signature": "Bool",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "description": "If True you won get copy of this message back from the server",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "outDiscard",
          "package": "hspread",
          "partial": "Discard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outDiscard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecipients of the message\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "outGroups",
          "package": "hspread",
          "signature": "[Group]",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "description": "Recipients of the message",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "outGroups",
          "normalized": "[Group]",
          "package": "hspread",
          "partial": "Groups",
          "signature": "[Group]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo be used by the application to identify the kind of message.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "outMsgType",
          "package": "hspread",
          "signature": "Word16",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "description": "To be used by the application to identify the kind of message",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "outMsgType",
          "package": "hspread",
          "partial": "Msg Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outMsgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "outOrdering",
          "package": "hspread",
          "signature": "OrderingType",
          "source": "src/Spread-Client-Message.html#OutMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "outOrdering",
          "package": "hspread",
          "partial": "Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:outOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer port, uses the default spread port if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "port",
          "package": "hspread",
          "signature": "(Maybe PortNumber)",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "Server port uses the default spread port if Nothing",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "port",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this a priority connection?\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "priority",
          "package": "hspread",
          "signature": "Bool",
          "source": "src/Spread-Client-Connection.html#Conf",
          "type": "function"
        },
        "index": {
          "description": "Is this priority connection",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "priority",
          "package": "hspread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprivate name of this connection, useful for p2p messages.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "privateGroup",
          "package": "hspread",
          "signature": "Connection -\u003e PrivateGroup",
          "source": "src/Spread-Client-Connection.html#privateGroup",
          "type": "function"
        },
        "index": {
          "description": "private name of this connection useful for p2p messages",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "privateGroup",
          "normalized": "Connection-\u003ePrivateGroup",
          "package": "hspread",
          "partial": "Group",
          "signature": "Connection-\u003ePrivateGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:privateGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "privateName",
          "package": "hspread",
          "signature": "PrivateName -\u003e ByteString",
          "source": "src/Spread-Client-Message.html#privateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "privateName",
          "normalized": "PrivateName-\u003eByteString",
          "package": "hspread",
          "partial": "Name",
          "signature": "PrivateName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:privateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "putPadded",
          "package": "hspread",
          "signature": "Int -\u003e ByteString -\u003e PutM ()",
          "source": "src/Spread-Client-Message.html#putPadded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "putPadded",
          "normalized": "Int-\u003eByteString-\u003ePutM()",
          "package": "hspread",
          "partial": "Padded",
          "signature": "Int-\u003eByteString-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:putPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "receive_internal",
          "package": "hspread",
          "signature": "Handle -\u003e PrivateGroup -\u003e IO Message",
          "source": "src/Spread-Client-Message.html#receive_internal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "receive_internal",
          "normalized": "Handle-\u003ePrivateGroup-\u003eIO Message",
          "package": "hspread",
          "signature": "Handle-\u003ePrivateGroup-\u003eIO Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:receive_internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a regular message.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "send",
          "package": "hspread",
          "signature": "OutMsg -\u003e Connection -\u003e IO ()",
          "source": "src/Spread-Client-Connection.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send regular message",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "send",
          "normalized": "OutMsg-\u003eConnection-\u003eIO()",
          "package": "hspread",
          "signature": "OutMsg-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Spread.Client",
          "name": "sets",
          "package": "hspread",
          "signature": "[[PrivateGroup]]",
          "source": "src/Spread-Client-Message.html#Cause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "sets",
          "normalized": "[[PrivateGroup]]",
          "package": "hspread",
          "signature": "[[PrivateGroup]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart fetching messages from the network, returns True if it was stopped.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "startReceive",
          "package": "hspread",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Spread-Client-Connection.html#startReceive",
          "type": "function"
        },
        "index": {
          "description": "Start fetching messages from the network returns True if it was stopped",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "startReceive",
          "normalized": "Connection-\u003eIO Bool",
          "package": "hspread",
          "partial": "Receive",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:startReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop fetching messages from the network (at most one more message can be read)\n , returns True if it was started.\n\u003c/p\u003e",
          "module": "Spread.Client",
          "name": "stopReceive",
          "package": "hspread",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Spread-Client-Connection.html#stopReceive",
          "type": "function"
        },
        "index": {
          "description": "Stop fetching messages from the network at most one more message can be read returns True if it was started",
          "hierarchy": "Spread Client",
          "module": "Spread.Client",
          "name": "stopReceive",
          "normalized": "Connection-\u003eIO Bool",
          "package": "hspread",
          "partial": "Receive",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspread/docs/Spread-Client.html#v:stopReceive"
      }
    }
  ]
]