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
        "word": "data-ivar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn IVar is an write-once variable (the name comes from \"immutable\n variable\").  In addition to encapsulating this common idiom,\n it also provides a way to block on multiple variables simultaneously,\n resuming when the first of them is written.\n\u003c/p\u003e\u003cp\u003eThis module is careful not to create memory leaks, and prefers to\n maintain good long-term memory performance than to be super-fast.\n It should be reasonably fast though.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported qualified, as in:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.IVar as IVar\n\u003c/pre\u003e\u003cp\u003eExample:  \n\u003c/p\u003e\u003cpre\u003e import qualified Data.IVar as IVar\n import Control.Concurrent\n \n main = do\n    iv \u003c- IVar.new\n    iv' \u003c- IVar.new\n    forkIO $ threadDelay 10000000 \u003e\u003e IVar.write iv' \"my spoon is too big\"\n    let merger = IVar.read iv `mplus` IVar.read iv'\n    print =\u003c\u003c IVar.nonblocking merger   -- most likely \"Nothing\"\n    print =\u003c\u003c IVar.blocking merger      -- waits a while, then prints\n    IVar.write iv' \"i am a banana\"      -- throws error \"IVar written twice\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.IVar",
          "name": "IVar",
          "package": "data-ivar",
          "source": "src/Data-IVar.html",
          "type": "module"
        },
        "index": {
          "description": "An IVar is an write-once variable the name comes from immutable variable In addition to encapsulating this common idiom it also provides way to block on multiple variables simultaneously resuming when the first of them is written This module is careful not to create memory leaks and prefers to maintain good long-term memory performance than to be super-fast It should be reasonably fast though This module is designed to be imported qualified as in import qualified Data.IVar as IVar Example import qualified Data.IVar as IVar import Control.Concurrent main do iv IVar.new iv IVar.new forkIO threadDelay IVar.write iv my spoon is too big let merger IVar.read iv mplus IVar.read iv print IVar.nonblocking merger most likely Nothing print IVar.blocking merger waits while then prints IVar.write iv am banana throws error IVar written twice",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "IVar",
          "package": "data-ivar",
          "partial": "IVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA write-once variable.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "IVar",
          "package": "data-ivar",
          "source": "src/Data-IVar.html#IVar",
          "type": "data"
        },
        "index": {
          "description": "write-once variable",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "IVar",
          "package": "data-ivar",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReader is a functor (also monad) for reading IVars.  This\n provides composability when blocking on the first of a set\n of IVars, as you can block on several IVars of different\n types.\n\u003c/p\u003e\u003cp\u003eThe MonadPlus and Monoid instances for Reader are equivalent.\n It tries the left action ; if it blocks, then it tries the\n right action ; if \u003cem\u003eit\u003c/em\u003e blocks, then the whole action blocks\n until one of the two is available.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "Reader",
          "package": "data-ivar",
          "source": "src/Data-IVar.html#Reader",
          "type": "data"
        },
        "index": {
          "description": "Reader is functor also monad for reading IVars This provides composability when blocking on the first of set of IVars as you can block on several IVars of different types The MonadPlus and Monoid instances for Reader are equivalent It tries the left action if it blocks then it tries the right action if it blocks then the whole action blocks until one of the two is available",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "Reader",
          "package": "data-ivar",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock on a reader.  Returns the value as soon as it is\n available.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "blocking",
          "package": "data-ivar",
          "signature": "Reader a -\u003e IO a",
          "source": "src/Data-IVar.html#blocking",
          "type": "function"
        },
        "index": {
          "description": "Block on reader Returns the value as soon as it is available",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "blocking",
          "normalized": "Reader a-\u003eIO a",
          "package": "data-ivar",
          "signature": "Reader a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:blocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination nonblocking and blocking read.  \u003ccode\u003ecombo r\u003c/code\u003e \n Returns \u003ccode\u003eLeft x\u003c/code\u003e if the value is available now, otherwise \n returns \u003ccode\u003eRight (blocking r)\u003c/code\u003e.  This is more efficient than\n using nonblocking and blocking in sequence (it only evaluates\n the Reader once).\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "combo",
          "package": "data-ivar",
          "signature": "Reader a -\u003e IO (Either a (IO a))",
          "source": "src/Data-IVar.html#combo",
          "type": "function"
        },
        "index": {
          "description": "Combination nonblocking and blocking read combo Returns Left if the value is available now otherwise returns Right blocking This is more efficient than using nonblocking and blocking in sequence it only evaluates the Reader once",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "combo",
          "normalized": "Reader a-\u003eIO(Either a(IO a))",
          "package": "data-ivar",
          "signature": "Reader a-\u003eIO(Either a(IO a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:combo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new empty IVar.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "new",
          "package": "data-ivar",
          "signature": "IO (IVar a)",
          "source": "src/Data-IVar.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new empty IVar",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "new",
          "package": "data-ivar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a reader nonblocking.  Returns \u003ccode\u003eJust x\u003c/code\u003e if a value \u003ccode\u003ex\u003c/code\u003e is\n available, \u003ccode\u003eNothing\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "nonblocking",
          "package": "data-ivar",
          "signature": "Reader a -\u003e IO (Maybe a)",
          "source": "src/Data-IVar.html#nonblocking",
          "type": "function"
        },
        "index": {
          "description": "Run reader nonblocking Returns Just if value is available Nothing otherwise",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "nonblocking",
          "normalized": "Reader a-\u003eIO(Maybe a)",
          "package": "data-ivar",
          "signature": "Reader a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:nonblocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an IVar into the \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e functor. Pass this to\n \u003ccode\u003e\u003ca\u003eblocking\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enonblocking\u003c/a\u003e\u003c/code\u003e to extract the value.\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "read",
          "package": "data-ivar",
          "signature": "IVar a -\u003e Reader a",
          "source": "src/Data-IVar.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read an IVar into the Reader functor Pass this to blocking or nonblocking to extract the value",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "read",
          "normalized": "IVar a-\u003eReader a",
          "package": "data-ivar",
          "signature": "IVar a-\u003eReader a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an IVar.  If the IVar already has a value, \n throws an error \"Attempt to write to an IVar twice\".\n\u003c/p\u003e",
          "module": "Data.IVar",
          "name": "write",
          "package": "data-ivar",
          "signature": "IVar a -\u003e a -\u003e IO ()",
          "source": "src/Data-IVar.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write value to an IVar If the IVar already has value throws an error Attempt to write to an IVar twice",
          "hierarchy": "Data IVar",
          "module": "Data.IVar",
          "name": "write",
          "normalized": "IVar a-\u003ea-\u003eIO()",
          "package": "data-ivar",
          "signature": "IVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ivar/docs/Data-IVar.html#v:write"
      }
    }
  ]
]