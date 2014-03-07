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
        "word": "ivar-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003es is a type of multicast channel built on top of \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003es.\n It supports multiple readers. The channel is represented as a linked\n list. The \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003e data type represents the head of a channel.\n\u003c/p\u003e\u003cp\u003eWriting to an \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003e head has write-once semantics similar to \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003es:\n only the first of several attempts to write to the head will succeed,\n returning a new \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003e head for writing more values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "IChan",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple-IChan.html",
          "type": "module"
        },
        "index": {
          "description": "An IChan is type of multicast channel built on top of IVar It supports multiple readers The channel is represented as linked list The IChan data type represents the head of channel Writing to an IChan head has write-once semantics similar to IVar only the first of several attempts to write to the head will succeed returning new IChan head for writing more values",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "IChan",
          "package": "ivar-simple",
          "partial": "IChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA channel head\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "IChan",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple-IChan.html#IChan",
          "type": "data"
        },
        "index": {
          "description": "channel head",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "IChan",
          "package": "ivar-simple",
          "partial": "IChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#t:IChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new channel.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "new",
          "package": "ivar-simple",
          "signature": "IO (IChan a)",
          "source": "src/Data-IVar-Simple-IChan.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new channel",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "new",
          "package": "ivar-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the contents of a channel as a list, starting at the channel\n head.\n\u003c/p\u003e\u003cp\u003eThis is a pure computation. Forcing elements of the list may, however,\n block.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "read",
          "package": "ivar-simple",
          "signature": "IChan a -\u003e [a]",
          "source": "src/Data-IVar-Simple-IChan.html#read",
          "type": "function"
        },
        "index": {
          "description": "Returns the contents of channel as list starting at the channel head This is pure computation Forcing elements of the list may however block",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "read",
          "normalized": "IChan a-\u003e[a]",
          "package": "ivar-simple",
          "signature": "IChan a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to write a single value to the channel.\n\u003c/p\u003e\u003cp\u003eIf a value has already been written, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise,\n returns a new channel head for writing further values.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "tryWrite",
          "package": "ivar-simple",
          "signature": "IChan a -\u003e a -\u003e IO (Maybe (IChan a))",
          "source": "src/Data-IVar-Simple-IChan.html#tryWrite",
          "type": "function"
        },
        "index": {
          "description": "Attempts to write single value to the channel If value has already been written returns Nothing Otherwise returns new channel head for writing further values",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "tryWrite",
          "normalized": "IChan a-\u003ea-\u003eIO(Maybe(IChan a))",
          "package": "ivar-simple",
          "partial": "Write",
          "signature": "IChan a-\u003ea-\u003eIO(Maybe(IChan a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#v:tryWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single value to the channel.\n\u003c/p\u003e\u003cp\u003eRaises a \u003ccode\u003eBlockedIndefinitelyOnIVar\u003c/code\u003e exception if a value has already\n been written to the channel. Otherwise, returns a new channel head for\n writing further values.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.IChan",
          "name": "write",
          "package": "ivar-simple",
          "signature": "IChan a -\u003e a -\u003e IO (IChan a)",
          "source": "src/Data-IVar-Simple-IChan.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write single value to the channel Raises BlockedIndefinitelyOnIVar exception if value has already been written to the channel Otherwise returns new channel head for writing further values",
          "hierarchy": "Data IVar Simple IChan",
          "module": "Data.IVar.Simple.IChan",
          "name": "write",
          "normalized": "IChan a-\u003ea-\u003eIO(IChan a)",
          "package": "ivar-simple",
          "signature": "IChan a-\u003ea-\u003eIO(IChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-IChan.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMIChan\u003c/a\u003e\u003c/code\u003e is a multicast channel built on top of an \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eIChan\u003c/a\u003e\u003c/code\u003e, this channel supports multiple readers. It is\n comparable to a \u003ccode\u003eControl.Concurrent.Chan.Chan\u003c/code\u003e for the writing end:\n Each write will append an element to the channel. No writes will fail.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "MIChan",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple-MIChan.html",
          "type": "module"
        },
        "index": {
          "description": "An MIChan is multicast channel built on top of an IChan Like IChan this channel supports multiple readers It is comparable to Control.Concurrent.Chan.Chan for the writing end Each write will append an element to the channel No writes will fail",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "MIChan",
          "package": "ivar-simple",
          "partial": "MIChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multicast channel.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "MIChan",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple-MIChan.html#MIChan",
          "type": "data"
        },
        "index": {
          "description": "multicast channel",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "MIChan",
          "package": "ivar-simple",
          "partial": "MIChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#t:MIChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new multicast channel.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "new",
          "package": "ivar-simple",
          "signature": "IO (MIChan a)",
          "source": "src/Data-IVar-Simple-MIChan.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new multicast channel",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "new",
          "package": "ivar-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of values that the channel represents.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "read",
          "package": "ivar-simple",
          "signature": "MIChan a -\u003e IO [a]",
          "source": "src/Data-IVar-Simple-MIChan.html#read",
          "type": "function"
        },
        "index": {
          "description": "Return the list of values that the channel represents",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "read",
          "normalized": "MIChan a-\u003eIO[a]",
          "package": "ivar-simple",
          "signature": "MIChan a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value across the channel.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "write",
          "package": "ivar-simple",
          "signature": "MIChan a -\u003e a -\u003e IO ()",
          "source": "src/Data-IVar-Simple-MIChan.html#write",
          "type": "function"
        },
        "index": {
          "description": "Send value across the channel",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "write",
          "normalized": "MIChan a-\u003ea-\u003eIO()",
          "package": "ivar-simple",
          "signature": "MIChan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend several values across the channel, atomically.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple.MIChan",
          "name": "writeList",
          "package": "ivar-simple",
          "signature": "MIChan a -\u003e [a] -\u003e IO ()",
          "source": "src/Data-IVar-Simple-MIChan.html#writeList",
          "type": "function"
        },
        "index": {
          "description": "Send several values across the channel atomically",
          "hierarchy": "Data IVar Simple MIChan",
          "module": "Data.IVar.Simple.MIChan",
          "name": "writeList",
          "normalized": "MIChan a-\u003e[a]-\u003eIO()",
          "package": "ivar-simple",
          "partial": "List",
          "signature": "MIChan a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple-MIChan.html#v:writeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003es are write-once variables.\n\u003c/p\u003e\u003cp\u003eSimilarily to \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003es can be either empty or filled. Once filled,\n they keep their value indefinitely - they are immutable.\n\u003c/p\u003e\u003cp\u003eReading from an empty \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e will block until the \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e is filled. Because\n the value read will never change, this is a pure computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IVar.Simple",
          "name": "Simple",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "IVar are write-once variables Similarily to MVar IVar can be either empty or filled Once filled they keep their value indefinitely they are immutable Reading from an empty IVar will block until the IVar is filled Because the value read will never change this is pure computation",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "Simple",
          "package": "ivar-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe thread has attempted to write to a full \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "BlockedIndefinitelyOnIVar",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple.html#BlockedIndefinitelyOnIVar",
          "type": "data"
        },
        "index": {
          "description": "The thread has attempted to write to full IVar",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "BlockedIndefinitelyOnIVar",
          "package": "ivar-simple",
          "partial": "Blocked Indefinitely On IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#t:BlockedIndefinitelyOnIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA write-once (\u003cem\u003eimmutable\u003c/em\u003e) Variable\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "IVar",
          "package": "ivar-simple",
          "source": "src/Data-IVar-Simple.html#IVar",
          "type": "data"
        },
        "index": {
          "description": "write-once immutable Variable",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "IVar",
          "package": "ivar-simple",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "new",
          "package": "ivar-simple",
          "signature": "IO (IVar a)",
          "source": "src/Data-IVar-Simple.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new empty IVar",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "new",
          "package": "ivar-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new filled \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is slightly cheaper than creating a new \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e and then writing to it.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "newFull",
          "package": "ivar-simple",
          "signature": "a -\u003e IO (IVar a)",
          "source": "src/Data-IVar-Simple.html#newFull",
          "type": "function"
        },
        "index": {
          "description": "Create new filled IVar This is slightly cheaper than creating new IVar and then writing to it",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "newFull",
          "normalized": "a-\u003eIO(IVar a)",
          "package": "ivar-simple",
          "partial": "Full",
          "signature": "a-\u003eIO(IVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:newFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of an \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe evaluation will block until a value is written to the \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e if it\n has no value yet.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "read",
          "package": "ivar-simple",
          "signature": "IVar a -\u003e a",
          "source": "src/Data-IVar-Simple.html#read",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of an IVar The evaluation will block until value is written to the IVar if it has no value yet",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "read",
          "normalized": "IVar a-\u003ea",
          "package": "ivar-simple",
          "signature": "IVar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read an \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it has no value yet.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "tryRead",
          "package": "ivar-simple",
          "signature": "IVar a -\u003e IO (Maybe a)",
          "source": "src/Data-IVar-Simple.html#tryRead",
          "type": "function"
        },
        "index": {
          "description": "Try to read an IVar Returns Nothing if it has no value yet",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "tryRead",
          "normalized": "IVar a-\u003eIO(Maybe a)",
          "package": "ivar-simple",
          "partial": "Read",
          "signature": "IVar a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:tryRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to an \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if successful, and\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "tryWrite",
          "package": "ivar-simple",
          "signature": "IVar a -\u003e a -\u003e IO Bool",
          "source": "src/Data-IVar-Simple.html#tryWrite",
          "type": "function"
        },
        "index": {
          "description": "Writes value to an IVar Returns True if successful and False otherwise",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "tryWrite",
          "normalized": "IVar a-\u003ea-\u003eIO Bool",
          "package": "ivar-simple",
          "partial": "Write",
          "signature": "IVar a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:tryWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to an \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e. Raises a \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnIVar\u003c/a\u003e\u003c/code\u003e\n exception if the variable already has a value.\n\u003c/p\u003e",
          "module": "Data.IVar.Simple",
          "name": "write",
          "package": "ivar-simple",
          "signature": "IVar a -\u003e a -\u003e IO ()",
          "source": "src/Data-IVar-Simple.html#write",
          "type": "function"
        },
        "index": {
          "description": "Writes value to an IVar Raises BlockedIndefinitelyOnIVar exception if the variable already has value",
          "hierarchy": "Data IVar Simple",
          "module": "Data.IVar.Simple",
          "name": "write",
          "normalized": "IVar a-\u003ea-\u003eIO()",
          "package": "ivar-simple",
          "signature": "IVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ivar-simple/docs/Data-IVar-Simple.html#v:write"
      }
    }
  ]
]