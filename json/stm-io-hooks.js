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
        "word": "stm-io-hooks"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TArray\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.AdvSTM.TArray",
          "name": "TArray",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TArray.html",
          "type": "module"
        },
        "index": {
          "description": "Corresponds to Control.Concurrent.STM.TArray",
          "hierarchy": "Control Concurrent AdvSTM TArray",
          "module": "Control.Concurrent.AdvSTM.TArray",
          "name": "TArray",
          "package": "stm-io-hooks",
          "partial": "TArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTArray is a transactional array, supporting the usual \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e\n interface for mutable arrays.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TArray",
          "name": "TArray",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TArray.html#TArray",
          "type": "data"
        },
        "index": {
          "description": "TArray is transactional array supporting the usual MArray interface for mutable arrays",
          "hierarchy": "Control Concurrent AdvSTM TArray",
          "module": "Control.Concurrent.AdvSTM.TArray",
          "name": "TArray",
          "package": "stm-io-hooks",
          "partial": "TArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TArray.html#t:TArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "TChan",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html",
          "type": "module"
        },
        "index": {
          "description": "Corresponds to Control.Concurrent.STM.TChan",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "TChan",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "TChan",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#TChan",
          "type": "data"
        },
        "index": {
          "description": "TChan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "TChan",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#t:TChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e: the duplicate channel begins empty, but data written to\n either channel from then on will be available from both.  Hence this creates\n a kind of broadcast channel, where data written by anyone is seen by\n everyone else.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "dupTChan",
          "package": "stm-io-hooks",
          "signature": "TChan a -\u003e m (TChan a)",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#dupTChan",
          "type": "function"
        },
        "index": {
          "description": "Duplicate TChan the duplicate channel begins empty but data written to either channel from then on will be available from both Hence this creates kind of broadcast channel where data written by anyone is seen by everyone else",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "dupTChan",
          "normalized": "TChan a-\u003eb(TChan a)",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "signature": "TChan a-\u003em(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:dupTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "isEmptyTChan",
          "package": "stm-io-hooks",
          "signature": "TChan a -\u003e m Bool",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#isEmptyTChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TChan is empty",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "isEmptyTChan",
          "normalized": "TChan a-\u003eb Bool",
          "package": "stm-io-hooks",
          "partial": "Empty TChan",
          "signature": "TChan a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:isEmptyTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "newTChan",
          "package": "stm-io-hooks",
          "signature": "m (TChan a)",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#newTChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TChan",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "newTChan",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:newTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTChan\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "newTChanIO",
          "package": "stm-io-hooks",
          "signature": "IO (TChan a)",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#newTChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTChan This is useful for creating top-level TChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "newTChanIO",
          "package": "stm-io-hooks",
          "partial": "TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:newTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "readTChan",
          "package": "stm-io-hooks",
          "signature": "TChan a -\u003e m a",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#readTChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TChan",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "readTChan",
          "normalized": "TChan a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "signature": "TChan a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:readTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "unGetTChan",
          "package": "stm-io-hooks",
          "signature": "TChan a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#unGetTChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "unGetTChan",
          "normalized": "TChan a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "Get TChan",
          "signature": "TChan a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:unGetTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "writeTChan",
          "package": "stm-io-hooks",
          "signature": "TChan a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-AdvSTM-TChan.html#writeTChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to TChan",
          "hierarchy": "Control Concurrent AdvSTM TChan",
          "module": "Control.Concurrent.AdvSTM.TChan",
          "name": "writeTChan",
          "normalized": "TChan a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TChan",
          "signature": "TChan a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:writeTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTMVar: Transactional MVars, for use in the AdvAdvSTM monad\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TMVar\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "TMVar",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html",
          "type": "module"
        },
        "index": {
          "description": "TMVar Transactional MVars for use in the AdvAdvSTM monad Corresponds to Control.Concurrent.STM.TMVar",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "TMVar",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "TMVar",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#TMVar",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "TMVar",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e\u003cp\u003eNotice that the boolean value returned  is just a snapshot of\n the state of the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e. By the time you get to react on its result,\n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e may have been filled (or emptied) - so be extremely\n careful when using this operation.   Use \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e instead if possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "isEmptyTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e m Bool",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#isEmptyTMVar",
          "type": "function"
        },
        "index": {
          "description": "Check whether given TMVar is empty Notice that the boolean value returned is just snapshot of the state of the TMVar By the time you get to react on its result the TMVar may have been filled or emptied so be extremely careful when using this operation Use tryTakeTMVar instead if possible",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "isEmptyTMVar",
          "normalized": "TMVar a-\u003eb Bool",
          "package": "stm-io-hooks",
          "partial": "Empty TMVar",
          "signature": "TMVar a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:isEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which is initially empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newEmptyTMVar",
          "package": "stm-io-hooks",
          "signature": "m (TMVar a)",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#newEmptyTMVar",
          "type": "function"
        },
        "index": {
          "description": "Create TMVar which is initially empty",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newEmptyTMVar",
          "package": "stm-io-hooks",
          "partial": "Empty TMVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewEmptyTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newEmptyTMVarIO",
          "package": "stm-io-hooks",
          "signature": "IO (TMVar a)",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#newEmptyTMVarIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newEmptyTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newEmptyTMVarIO",
          "package": "stm-io-hooks",
          "partial": "Empty TMVar IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newEmptyTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which contains the supplied value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newTMVar",
          "package": "stm-io-hooks",
          "signature": "a -\u003e m (TMVar a)",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#newTMVar",
          "type": "function"
        },
        "index": {
          "description": "Create TMVar which contains the supplied value",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newTMVar",
          "normalized": "a-\u003eb(TMVar a)",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "signature": "a-\u003em(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newTMVarIO",
          "package": "stm-io-hooks",
          "signature": "a -\u003e IO (TMVar a)",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#newTMVarIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "newTMVarIO",
          "normalized": "a-\u003eIO(TMVar a)",
          "package": "stm-io-hooks",
          "partial": "TMVar IO",
          "signature": "a-\u003eIO(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently full,\n \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "putTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#putTMVar",
          "type": "function"
        },
        "index": {
          "description": "Put value into TMVar If the TMVar is currently full putTMVar will retry",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "putTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:putTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a combination of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e; ie. it takes the value\n  from the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, puts it back, and also returns it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "readTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e m a",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#readTMVar",
          "type": "function"
        },
        "index": {
          "description": "This is combination of takeTMVar and putTMVar ie it takes the value from the TMVar puts it back and also returns it",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "readTMVar",
          "normalized": "TMVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "signature": "TMVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:readTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the contents of a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e for a new value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "swapTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#swapTMVar",
          "type": "function"
        },
        "index": {
          "description": "Swap the contents of TMVar for new value",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "swapTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:swapTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently\n empty, the transaction will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  After a \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e, \n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "takeTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e m a",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#takeTMVar",
          "type": "function"
        },
        "index": {
          "description": "Return the contents of the TMVar If the TMVar is currently empty the transaction will retry After takeTMVar the TMVar is left empty",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "takeTMVar",
          "normalized": "TMVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TMVar",
          "signature": "TMVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:takeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryPutTMVar\u003c/a\u003e\u003c/code\u003e\n function attempts to put the value \u003ccode\u003ea\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, returning\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was successful, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "tryPutTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e a -\u003e m Bool",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#tryPutTMVar",
          "type": "function"
        },
        "index": {
          "description": "version of putTMVar that does not retry The tryPutTMVar function attempts to put the value into the TMVar returning True if it was successful or False otherwise",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "tryPutTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb Bool",
          "package": "stm-io-hooks",
          "partial": "Put TMVar",
          "signature": "TMVar a-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:tryPutTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was empty, or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e if\n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was full with contents \u003ccode\u003ea\u003c/code\u003e.  After \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "tryTakeTMVar",
          "package": "stm-io-hooks",
          "signature": "TMVar a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-AdvSTM-TMVar.html#tryTakeTMVar",
          "type": "function"
        },
        "index": {
          "description": "version of takeTMVar that does not retry The tryTakeTMVar function returns Nothing if the TMVar was empty or Just if the TMVar was full with contents After tryTakeTMVar the TMVar is left empty",
          "hierarchy": "Control Concurrent AdvSTM TMVar",
          "module": "Control.Concurrent.AdvSTM.TMVar",
          "name": "tryTakeTMVar",
          "normalized": "TMVar a-\u003eb(Maybe a)",
          "package": "stm-io-hooks",
          "partial": "Take TMVar",
          "signature": "TMVar a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:tryTakeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "TVar",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM-TVar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "TVar",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "TVar",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM-Class.html#TVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "TVar",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "newTVar",
          "package": "stm-io-hooks",
          "signature": "a -\u003e m (TVar a)",
          "source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
          "type": "function"
        },
        "index": {
          "description": "See newTVar",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "newTVar",
          "normalized": "a-\u003eb(TVar a)",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "a-\u003em(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "newTVarIO",
          "package": "stm-io-hooks",
          "signature": "a -\u003e IO (TVar a)",
          "source": "src/Control-Concurrent-AdvSTM-TVar.html#newTVarIO",
          "type": "function"
        },
        "index": {
          "description": "See newTVarIO",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "newTVarIO",
          "normalized": "a-\u003eIO(TVar a)",
          "package": "stm-io-hooks",
          "partial": "TVar IO",
          "signature": "a-\u003eIO(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:newTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "readTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
          "type": "function"
        },
        "index": {
          "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "readTVar",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "readTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
          "type": "function"
        },
        "index": {
          "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "readTVarAsync",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:readTVarAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "writeTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
          "type": "function"
        },
        "index": {
          "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "writeTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
          "type": "function"
        },
        "index": {
          "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
          "hierarchy": "Control Concurrent AdvSTM TVar",
          "module": "Control.Concurrent.AdvSTM.TVar",
          "name": "writeTVarAsync",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:writeTVarAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtends Control.Concurrent.STM with IO hooks\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Concurrent-AdvSTM.html",
          "type": "module"
        },
        "index": {
          "description": "Extends Control.Concurrent.STM with IO hooks",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "partial": "Adv STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop-in replacement for the STM monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM-Def.html#AdvSTM",
          "type": "data"
        },
        "index": {
          "description": "Drop-in replacement for the STM monad",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "partial": "Adv STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#t:AdvSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for extended-STM monads. For a concrete instantiation see\n \u003ccode\u003eAdvSTM\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "MonadAdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM-Class.html#MonadAdvSTM",
          "type": "class"
        },
        "index": {
          "description": "type class for extended-STM monads For concrete instantiation see AdvSTM",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "MonadAdvSTM",
          "package": "stm-io-hooks",
          "partial": "Monad Adv STM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#t:MonadAdvSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealways\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "always",
          "package": "stm-io-hooks",
          "signature": "m Bool -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#always",
          "type": "method"
        },
        "index": {
          "description": "See always",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "always",
          "normalized": "a Bool-\u003ea()",
          "package": "stm-io-hooks",
          "signature": "m Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealwaysSucceeds\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "alwaysSucceeds",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#alwaysSucceeds",
          "type": "method"
        },
        "index": {
          "description": "See alwaysSucceeds",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "alwaysSucceeds",
          "normalized": "a b-\u003ea()",
          "package": "stm-io-hooks",
          "partial": "Succeeds",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:alwaysSucceeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "atomically",
          "package": "stm-io-hooks",
          "signature": "AdvSTM a -\u003e IO a",
          "source": "src/Control-Concurrent-AdvSTM.html#atomically",
          "type": "function"
        },
        "index": {
          "description": "See atomically",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "atomically",
          "normalized": "AdvSTM a-\u003eIO a",
          "package": "stm-io-hooks",
          "signature": "AdvSTM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "catchSTM",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#catchSTM",
          "type": "method"
        },
        "index": {
          "description": "See catchSTM",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "catchSTM",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "STM",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:catchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "check",
          "package": "stm-io-hooks",
          "signature": "Bool -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#check",
          "type": "method"
        },
        "index": {
          "description": "See check",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "check",
          "normalized": "Bool-\u003ea()",
          "package": "stm-io-hooks",
          "signature": "Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses unsafeIOToSTM to output the Thread Id and a message and delays \n for a given number of time.\n \u003cem\u003eWARNING:\u003c/em\u003e Can lead to deadlocks! \n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "debugAdvSTM",
          "package": "stm-io-hooks",
          "signature": "String -\u003e Int -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-AdvSTM.html#debugAdvSTM",
          "type": "function"
        },
        "index": {
          "description": "Uses unsafeIOToSTM to output the Thread Id and message and delays for given number of time WARNING Can lead to deadlocks",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "debugAdvSTM",
          "normalized": "String-\u003eInt-\u003eAdvSTM()",
          "package": "stm-io-hooks",
          "partial": "Adv STM",
          "signature": "String-\u003eInt-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:debugAdvSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitches the debug mode on or off.\n \u003cem\u003eWARNING:\u003c/em\u003e Can lead to deadlocks! \n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "debugMode",
          "package": "stm-io-hooks",
          "signature": "Bool -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-AdvSTM.html#debugMode",
          "type": "function"
        },
        "index": {
          "description": "Switches the debug mode on or off WARNING Can lead to deadlocks",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "debugMode",
          "normalized": "Bool-\u003eAdvSTM()",
          "package": "stm-io-hooks",
          "partial": "Mode",
          "signature": "Bool-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:debugMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "handleSTM",
          "package": "stm-io-hooks",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#handleSTM",
          "type": "function"
        },
        "index": {
          "description": "version of catchSTM with the arguments swapped around",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "handleSTM",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "stm-io-hooks",
          "partial": "STM",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:handleSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts STM actions to \u003ccode\u003e\u003ca\u003eMonadAdvSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "liftAdv",
          "package": "stm-io-hooks",
          "signature": "STM a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#liftAdv",
          "type": "method"
        },
        "index": {
          "description": "Lifts STM actions to MonadAdvSTM",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "liftAdv",
          "normalized": "STM a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "Adv",
          "signature": "STM a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:liftAdv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "newTVar",
          "package": "stm-io-hooks",
          "signature": "a -\u003e m (TVar a)",
          "source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
          "type": "method"
        },
        "index": {
          "description": "See newTVar",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "newTVar",
          "normalized": "a-\u003eb(TVar a)",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "a-\u003em(TVar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eonCommitWith\u003c/a\u003e\u003c/code\u003e without closure action:\n 'onCommit = onCommitWith id'\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "onCommit",
          "package": "stm-io-hooks",
          "signature": "IO () -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#onCommit",
          "type": "method"
        },
        "index": {
          "description": "Works like onCommitWith without closure action onCommit onCommitWith id",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "onCommit",
          "normalized": "IO()-\u003ea()",
          "package": "stm-io-hooks",
          "partial": "Commit",
          "signature": "IO()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:onCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a closure IO action and a commit IO action. \n The commit IO action will be executed \u003cem\u003eiff\u003c/em\u003e the transaction commits. \n Commit actions are sequenced (within the same transaction), i.e.,\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith id (putStr \" world\")\n\u003c/pre\u003e\u003cp\u003ewill print \"hello world\". \n\u003c/p\u003e\u003cp\u003eThe closure action is useful for encapsulating the commit actions,\n e.g., within a database transaction.\n The last call of onCommitWith in the transaction \n is applied to the sequence of commit actions, i.e.:\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith (\\s -\u003e do { putStrLn \"start\"; s; putStrLn \"\\nend\"})  (putStr \" world\")\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e When a TVar was modified in a transaction and the transaction tries to commit,\n this update remains invisible to other threads until the corresponding \n onCommit action is dispatched. \n\u003c/li\u003e\u003cli\u003e If the onCommit action throws an exception, the original value of \n the TVars  will be restored.\n\u003c/li\u003e\u003cli\u003e Accessing a modified TVar within the onCommit action will cause a\n Deadlock exception to be thrown. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs a general rule, \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e should \n only be used for \"real\" (i.e. without atomic blocks) IO actions and is certainly\n not the right place to fiddle with TVars. For example, if you wanted to\n write a TVar value to a file on commit, you could write:\n\u003c/p\u003e\u003cpre\u003e tvar \u003c- newTVarIO \"bla\"\n atomically $ do \n    x \u003c- readTVar tvar \n    onCommit (writeFile \"myfile\" x)\n\u003c/pre\u003e\u003cp\u003eNote: If you \u003cem\u003ereally\u003c/em\u003e need to access the \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e within an onCommit action\n (e.g. to recover from an IO exception), you can use \u003ccode\u003e\u003ca\u003ewriteTVarAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "onCommitWith",
          "package": "stm-io-hooks",
          "signature": "onCommitWith",
          "source": "src/Control-Monad-AdvSTM-Class.html#onCommitWith",
          "type": "method"
        },
        "index": {
          "description": "Takes closure IO action and commit IO action The commit IO action will be executed iff the transaction commits Commit actions are sequenced within the same transaction i.e onCommitWith id putStr hello onCommitWith id putStr world will print hello world The closure action is useful for encapsulating the commit actions e.g within database transaction The last call of onCommitWith in the transaction is applied to the sequence of commit actions i.e onCommitWith id putStr hello onCommitWith do putStrLn start putStrLn nend putStr world When TVar was modified in transaction and the transaction tries to commit this update remains invisible to other threads until the corresponding onCommit action is dispatched If the onCommit action throws an exception the original value of the TVars will be restored Accessing modified TVar within the onCommit action will cause Deadlock exception to be thrown As general rule onCommit should only be used for real i.e without atomic blocks IO actions and is certainly not the right place to fiddle with TVars For example if you wanted to write TVar value to file on commit you could write tvar newTVarIO bla atomically do readTVar tvar onCommit writeFile myfile Note If you really need to access the TVar within an onCommit action e.g to recover from an IO exception you can use writeTVarAsync",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "onCommitWith",
          "package": "stm-io-hooks",
          "partial": "Commit With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:onCommitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "orElse",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#orElse",
          "type": "method"
        },
        "index": {
          "description": "See orElse",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "orElse",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "Else",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "readTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
          "type": "method"
        },
        "index": {
          "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "readTVar",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "readTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
          "type": "method"
        },
        "index": {
          "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "readTVarAsync",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:readTVarAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "retry",
          "package": "stm-io-hooks",
          "signature": "m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#retry",
          "type": "method"
        },
        "index": {
          "description": "See retry",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "retry",
          "package": "stm-io-hooks",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.AdvSTM",
          "name": "unsafeIOToSTM",
          "package": "stm-io-hooks",
          "signature": "IO a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#unsafeIOToSTM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "unsafeIOToSTM",
          "normalized": "IO a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "IOTo STM",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:unsafeIOToSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetries the transaction and uses \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e to fork off a \n thread that runs the given IO action. Since a transaction might be rerun\n several times by the runtime system, it is your responsibility to \n ensure that the IO-action is idempotent and releases all acquired locks.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "unsafeRetryWith",
          "package": "stm-io-hooks",
          "signature": "IO () -\u003e m b",
          "source": "src/Control-Monad-AdvSTM-Class.html#unsafeRetryWith",
          "type": "method"
        },
        "index": {
          "description": "Retries the transaction and uses unsafeIOToSTM to fork off thread that runs the given IO action Since transaction might be rerun several times by the runtime system it is your responsibility to ensure that the IO-action is idempotent and releases all acquired locks",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "unsafeRetryWith",
          "normalized": "IO()-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "Retry With",
          "signature": "IO()-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:unsafeRetryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "writeTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
          "type": "method"
        },
        "index": {
          "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
          "module": "Control.Concurrent.AdvSTM",
          "name": "writeTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
          "type": "method"
        },
        "index": {
          "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
          "hierarchy": "Control Concurrent AdvSTM",
          "module": "Control.Concurrent.AdvSTM",
          "name": "writeTVarAsync",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:writeTVarAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides the type class MonadAdvSTM and the AdvSTM monad.\n Parts of this implementation were taken from the HaskellWiki Page of\n MonadAdvSTM (see package description).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM.html",
          "type": "module"
        },
        "index": {
          "description": "Provides the type class MonadAdvSTM and the AdvSTM monad Parts of this implementation were taken from the HaskellWiki Page of MonadAdvSTM see package description",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "partial": "Adv STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop-in replacement for the STM monad\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM-Def.html#AdvSTM",
          "type": "data"
        },
        "index": {
          "description": "Drop-in replacement for the STM monad",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "AdvSTM",
          "package": "stm-io-hooks",
          "partial": "Adv STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#t:AdvSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for extended-STM monads. For a concrete instantiation see\n \u003ccode\u003eAdvSTM\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "MonadAdvSTM",
          "package": "stm-io-hooks",
          "source": "src/Control-Monad-AdvSTM-Class.html#MonadAdvSTM",
          "type": "class"
        },
        "index": {
          "description": "type class for extended-STM monads For concrete instantiation see AdvSTM",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "MonadAdvSTM",
          "package": "stm-io-hooks",
          "partial": "Monad Adv STM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#t:MonadAdvSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealways\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "always",
          "package": "stm-io-hooks",
          "signature": "m Bool -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#always",
          "type": "method"
        },
        "index": {
          "description": "See always",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "always",
          "normalized": "a Bool-\u003ea()",
          "package": "stm-io-hooks",
          "signature": "m Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealwaysSucceeds\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "alwaysSucceeds",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#alwaysSucceeds",
          "type": "method"
        },
        "index": {
          "description": "See alwaysSucceeds",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "alwaysSucceeds",
          "normalized": "a b-\u003ea()",
          "package": "stm-io-hooks",
          "partial": "Succeeds",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:alwaysSucceeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "catchSTM",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#catchSTM",
          "type": "method"
        },
        "index": {
          "description": "See catchSTM",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "catchSTM",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "STM",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:catchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "check",
          "package": "stm-io-hooks",
          "signature": "Bool -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#check",
          "type": "method"
        },
        "index": {
          "description": "See check",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "check",
          "normalized": "Bool-\u003ea()",
          "package": "stm-io-hooks",
          "signature": "Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts STM actions to \u003ccode\u003e\u003ca\u003eMonadAdvSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "liftAdv",
          "package": "stm-io-hooks",
          "signature": "STM a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#liftAdv",
          "type": "method"
        },
        "index": {
          "description": "Lifts STM actions to MonadAdvSTM",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "liftAdv",
          "normalized": "STM a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "Adv",
          "signature": "STM a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:liftAdv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "newTVar",
          "package": "stm-io-hooks",
          "signature": "a -\u003e m (TVar a)",
          "source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
          "type": "method"
        },
        "index": {
          "description": "See newTVar",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "newTVar",
          "normalized": "a-\u003eb(TVar a)",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "a-\u003em(TVar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eonCommitWith\u003c/a\u003e\u003c/code\u003e without closure action:\n 'onCommit = onCommitWith id'\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "onCommit",
          "package": "stm-io-hooks",
          "signature": "IO () -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#onCommit",
          "type": "method"
        },
        "index": {
          "description": "Works like onCommitWith without closure action onCommit onCommitWith id",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "onCommit",
          "normalized": "IO()-\u003ea()",
          "package": "stm-io-hooks",
          "partial": "Commit",
          "signature": "IO()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:onCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a closure IO action and a commit IO action. \n The commit IO action will be executed \u003cem\u003eiff\u003c/em\u003e the transaction commits. \n Commit actions are sequenced (within the same transaction), i.e.,\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith id (putStr \" world\")\n\u003c/pre\u003e\u003cp\u003ewill print \"hello world\". \n\u003c/p\u003e\u003cp\u003eThe closure action is useful for encapsulating the commit actions,\n e.g., within a database transaction.\n The last call of onCommitWith in the transaction \n is applied to the sequence of commit actions, i.e.:\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith (\\s -\u003e do { putStrLn \"start\"; s; putStrLn \"\\nend\"})  (putStr \" world\")\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e When a TVar was modified in a transaction and the transaction tries to commit,\n this update remains invisible to other threads until the corresponding \n onCommit action is dispatched. \n\u003c/li\u003e\u003cli\u003e If the onCommit action throws an exception, the original value of \n the TVars  will be restored.\n\u003c/li\u003e\u003cli\u003e Accessing a modified TVar within the onCommit action will cause a\n Deadlock exception to be thrown. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs a general rule, \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e should \n only be used for \"real\" (i.e. without atomic blocks) IO actions and is certainly\n not the right place to fiddle with TVars. For example, if you wanted to\n write a TVar value to a file on commit, you could write:\n\u003c/p\u003e\u003cpre\u003e tvar \u003c- newTVarIO \"bla\"\n atomically $ do \n    x \u003c- readTVar tvar \n    onCommit (writeFile \"myfile\" x)\n\u003c/pre\u003e\u003cp\u003eNote: If you \u003cem\u003ereally\u003c/em\u003e need to access the \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e within an onCommit action\n (e.g. to recover from an IO exception), you can use \u003ccode\u003e\u003ca\u003ewriteTVarAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "onCommitWith",
          "package": "stm-io-hooks",
          "signature": "onCommitWith",
          "source": "src/Control-Monad-AdvSTM-Class.html#onCommitWith",
          "type": "method"
        },
        "index": {
          "description": "Takes closure IO action and commit IO action The commit IO action will be executed iff the transaction commits Commit actions are sequenced within the same transaction i.e onCommitWith id putStr hello onCommitWith id putStr world will print hello world The closure action is useful for encapsulating the commit actions e.g within database transaction The last call of onCommitWith in the transaction is applied to the sequence of commit actions i.e onCommitWith id putStr hello onCommitWith do putStrLn start putStrLn nend putStr world When TVar was modified in transaction and the transaction tries to commit this update remains invisible to other threads until the corresponding onCommit action is dispatched If the onCommit action throws an exception the original value of the TVars will be restored Accessing modified TVar within the onCommit action will cause Deadlock exception to be thrown As general rule onCommit should only be used for real i.e without atomic blocks IO actions and is certainly not the right place to fiddle with TVars For example if you wanted to write TVar value to file on commit you could write tvar newTVarIO bla atomically do readTVar tvar onCommit writeFile myfile Note If you really need to access the TVar within an onCommit action e.g to recover from an IO exception you can use writeTVarAsync",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "onCommitWith",
          "package": "stm-io-hooks",
          "partial": "Commit With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:onCommitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "orElse",
          "package": "stm-io-hooks",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#orElse",
          "type": "method"
        },
        "index": {
          "description": "See orElse",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "orElse",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "Else",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "readTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
          "type": "method"
        },
        "index": {
          "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "readTVar",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "readTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
          "type": "method"
        },
        "index": {
          "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "readTVarAsync",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:readTVarAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "retry",
          "package": "stm-io-hooks",
          "signature": "m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#retry",
          "type": "method"
        },
        "index": {
          "description": "See retry",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "retry",
          "package": "stm-io-hooks",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.AdvSTM",
          "name": "unsafeIOToSTM",
          "package": "stm-io-hooks",
          "signature": "IO a -\u003e m a",
          "source": "src/Control-Monad-AdvSTM-Class.html#unsafeIOToSTM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "unsafeIOToSTM",
          "normalized": "IO a-\u003eb a",
          "package": "stm-io-hooks",
          "partial": "IOTo STM",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:unsafeIOToSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetries the transaction and uses \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e to fork off a \n thread that runs the given IO action. Since a transaction might be rerun\n several times by the runtime system, it is your responsibility to \n ensure that the IO-action is idempotent and releases all acquired locks.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "unsafeRetryWith",
          "package": "stm-io-hooks",
          "signature": "IO () -\u003e m b",
          "source": "src/Control-Monad-AdvSTM-Class.html#unsafeRetryWith",
          "type": "method"
        },
        "index": {
          "description": "Retries the transaction and uses unsafeIOToSTM to fork off thread that runs the given IO action Since transaction might be rerun several times by the runtime system it is your responsibility to ensure that the IO-action is idempotent and releases all acquired locks",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "unsafeRetryWith",
          "normalized": "IO()-\u003ea b",
          "package": "stm-io-hooks",
          "partial": "Retry With",
          "signature": "IO()-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:unsafeRetryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "writeTVar",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
          "type": "method"
        },
        "index": {
          "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
          "module": "Control.Monad.AdvSTM",
          "name": "writeTVarAsync",
          "package": "stm-io-hooks",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
          "type": "method"
        },
        "index": {
          "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
          "hierarchy": "Control Monad AdvSTM",
          "module": "Control.Monad.AdvSTM",
          "name": "writeTVarAsync",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-io-hooks",
          "partial": "TVar Async",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:writeTVarAsync"
      }
    }
  ]
]