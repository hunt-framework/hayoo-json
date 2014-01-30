[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TArray\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TArray",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-AdvSTM-TArray.html",
        "fct-type": "module",
        "title": "TArray"
      },
      "index": {
        "description": "Corresponds to Control.Concurrent.STM.TArray",
        "hierarchy": "Control Concurrent AdvSTM TArray",
        "module": "Control.Concurrent.AdvSTM.TArray",
        "name": "TArray",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TArray.html#t:TArray",
      "description": {
        "fct-descr": "\u003cp\u003eTArray is a transactional array, supporting the usual \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e\n interface for mutable arrays.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TArray",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-AdvSTM-TArray.html#TArray",
        "fct-type": "data",
        "title": "TArray"
      },
      "index": {
        "description": "TArray is transactional array supporting the usual MArray interface for mutable arrays",
        "hierarchy": "Control Concurrent AdvSTM TArray",
        "module": "Control.Concurrent.AdvSTM.TArray",
        "name": "TArray",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html",
        "fct-type": "module",
        "title": "TChan"
      },
      "index": {
        "description": "Corresponds to Control.Concurrent.STM.TChan",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "TChan",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#t:TChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#TChan",
        "fct-type": "data",
        "title": "TChan"
      },
      "index": {
        "description": "TChan is an abstract type representing an unbounded FIFO channel",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "TChan",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:dupTChan",
      "description": {
        "fct-descr": "\u003cp\u003eDuplicate a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e: the duplicate channel begins empty, but data written to\n either channel from then on will be available from both.  Hence this creates\n a kind of broadcast channel, where data written by anyone is seen by\n everyone else.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TChan a -\u003e m (TChan a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#dupTChan",
        "fct-type": "function",
        "title": "dupTChan"
      },
      "index": {
        "description": "Duplicate TChan the duplicate channel begins empty but data written to either channel from then on will be available from both Hence this creates kind of broadcast channel where data written by anyone is seen by everyone else",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "dupTChan",
        "normalized": "TChan a-\u003eb(TChan a)",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": "TChan a-\u003em(TChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:isEmptyTChan",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TChan a -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#isEmptyTChan",
        "fct-type": "function",
        "title": "isEmptyTChan"
      },
      "index": {
        "description": "Returns True if the supplied TChan is empty",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "isEmptyTChan",
        "normalized": "TChan a-\u003eb Bool",
        "package": "stm-io-hooks",
        "partial": "Empty TChan",
        "signature": "TChan a-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:newTChan",
      "description": {
        "fct-descr": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m (TChan a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#newTChan",
        "fct-type": "function",
        "title": "newTChan"
      },
      "index": {
        "description": "Build and returns new instance of TChan",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "newTChan",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:newTChanIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTChan\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO (TChan a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#newTChanIO",
        "fct-type": "function",
        "title": "newTChanIO"
      },
      "index": {
        "description": "IO version of newTChan This is useful for creating top-level TChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "newTChanIO",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TChan IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:readTChan",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TChan a -\u003e m a",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#readTChan",
        "fct-type": "function",
        "title": "readTChan"
      },
      "index": {
        "description": "Read the next value from the TChan",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "readTChan",
        "normalized": "TChan a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": "TChan a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:unGetTChan",
      "description": {
        "fct-descr": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TChan a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#unGetTChan",
        "fct-type": "function",
        "title": "unGetTChan"
      },
      "index": {
        "description": "Put data item back onto channel where it will be the next item read",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "unGetTChan",
        "normalized": "TChan a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "Get TChan",
        "signature": "TChan a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TChan.html#v:writeTChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TChan",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TChan a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-AdvSTM-TChan.html#writeTChan",
        "fct-type": "function",
        "title": "writeTChan"
      },
      "index": {
        "description": "Write value to TChan",
        "hierarchy": "Control Concurrent AdvSTM TChan",
        "module": "Control.Concurrent.AdvSTM.TChan",
        "name": "writeTChan",
        "normalized": "TChan a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TChan",
        "signature": "TChan a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTMVar: Transactional MVars, for use in the AdvAdvSTM monad\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ca\u003eControl.Concurrent.STM.TMVar\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html",
        "fct-type": "module",
        "title": "TMVar"
      },
      "index": {
        "description": "TMVar Transactional MVars for use in the AdvAdvSTM monad Corresponds to Control.Concurrent.STM.TMVar",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "TMVar",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#t:TMVar",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#TMVar",
        "fct-type": "data",
        "title": "TMVar"
      },
      "index": {
        "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "TMVar",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:isEmptyTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a given \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e\u003cp\u003eNotice that the boolean value returned  is just a snapshot of\n the state of the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e. By the time you get to react on its result,\n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e may have been filled (or emptied) - so be extremely\n careful when using this operation.   Use \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e instead if possible.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#isEmptyTMVar",
        "fct-type": "function",
        "title": "isEmptyTMVar"
      },
      "index": {
        "description": "Check whether given TMVar is empty Notice that the boolean value returned is just snapshot of the state of the TMVar By the time you get to react on its result the TMVar may have been filled or emptied so be extremely careful when using this operation Use tryTakeTMVar instead if possible",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "isEmptyTMVar",
        "normalized": "TMVar a-\u003eb Bool",
        "package": "stm-io-hooks",
        "partial": "Empty TMVar",
        "signature": "TMVar a-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newEmptyTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which is initially empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m (TMVar a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#newEmptyTMVar",
        "fct-type": "function",
        "title": "newEmptyTMVar"
      },
      "index": {
        "description": "Create TMVar which is initially empty",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "newEmptyTMVar",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Empty TMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newEmptyTMVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewEmptyTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO (TMVar a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#newEmptyTMVarIO",
        "fct-type": "function",
        "title": "newEmptyTMVarIO"
      },
      "index": {
        "description": "IO version of newEmptyTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "newEmptyTMVarIO",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Empty TMVar IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which contains the supplied value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e m (TMVar a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#newTMVar",
        "fct-type": "function",
        "title": "newTMVar"
      },
      "index": {
        "description": "Create TMVar which contains the supplied value",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "newTMVar",
        "normalized": "a-\u003eb(TMVar a)",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": "a-\u003em(TMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:newTMVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003eatomically\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e IO (TMVar a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#newTMVarIO",
        "fct-type": "function",
        "title": "newTMVarIO"
      },
      "index": {
        "description": "IO version of newTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "newTMVarIO",
        "normalized": "a-\u003eIO(TMVar a)",
        "package": "stm-io-hooks",
        "partial": "TMVar IO",
        "signature": "a-\u003eIO(TMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:putTMVar",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently full,\n \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#putTMVar",
        "fct-type": "function",
        "title": "putTMVar"
      },
      "index": {
        "description": "Put value into TMVar If the TMVar is currently full putTMVar will retry",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "putTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": "TMVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:readTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a combination of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e; ie. it takes the value\n  from the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, puts it back, and also returns it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e m a",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#readTMVar",
        "fct-type": "function",
        "title": "readTMVar"
      },
      "index": {
        "description": "This is combination of takeTMVar and putTMVar ie it takes the value from the TMVar puts it back and also returns it",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "readTMVar",
        "normalized": "TMVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": "TMVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:swapTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the contents of a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e for a new value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#swapTMVar",
        "fct-type": "function",
        "title": "swapTMVar"
      },
      "index": {
        "description": "Swap the contents of TMVar for new value",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "swapTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": "TMVar a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:takeTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the contents of the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently\n empty, the transaction will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  After a \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e, \n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e m a",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#takeTMVar",
        "fct-type": "function",
        "title": "takeTMVar"
      },
      "index": {
        "description": "Return the contents of the TMVar If the TMVar is currently empty the transaction will retry After takeTMVar the TMVar is left empty",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "takeTMVar",
        "normalized": "TMVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TMVar",
        "signature": "TMVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:tryPutTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryPutTMVar\u003c/a\u003e\u003c/code\u003e\n function attempts to put the value \u003ccode\u003ea\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, returning\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was successful, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e a -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#tryPutTMVar",
        "fct-type": "function",
        "title": "tryPutTMVar"
      },
      "index": {
        "description": "version of putTMVar that does not retry The tryPutTMVar function attempts to put the value into the TMVar returning True if it was successful or False otherwise",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "tryPutTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb Bool",
        "package": "stm-io-hooks",
        "partial": "Put TMVar",
        "signature": "TMVar a-\u003ea-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TMVar.html#v:tryTakeTMVar",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was empty, or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e if\n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was full with contents \u003ccode\u003ea\u003c/code\u003e.  After \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TMVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TMVar a -\u003e m (Maybe a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TMVar.html#tryTakeTMVar",
        "fct-type": "function",
        "title": "tryTakeTMVar"
      },
      "index": {
        "description": "version of takeTMVar that does not retry The tryTakeTMVar function returns Nothing if the TMVar was empty or Just if the TMVar was full with contents After tryTakeTMVar the TMVar is left empty",
        "hierarchy": "Control Concurrent AdvSTM TMVar",
        "module": "Control.Concurrent.AdvSTM.TMVar",
        "name": "tryTakeTMVar",
        "normalized": "TMVar a-\u003eb(Maybe a)",
        "package": "stm-io-hooks",
        "partial": "Take TMVar",
        "signature": "TMVar a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#",
      "description": {
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-AdvSTM-TVar.html",
        "fct-type": "module",
        "title": "TVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "TVar",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#t:TVar",
      "description": {
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#TVar",
        "fct-type": "data",
        "title": "TVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "TVar",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:newTVar",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e m (TVar a)",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
        "fct-type": "function",
        "title": "newTVar"
      },
      "index": {
        "description": "See newTVar",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "newTVar",
        "normalized": "a-\u003eb(TVar a)",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "a-\u003em(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:newTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e IO (TVar a)",
        "fct-source": "src/Control-Concurrent-AdvSTM-TVar.html#newTVarIO",
        "fct-type": "function",
        "title": "newTVarIO"
      },
      "index": {
        "description": "See newTVarIO",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "newTVarIO",
        "normalized": "a-\u003eIO(TVar a)",
        "package": "stm-io-hooks",
        "partial": "TVar IO",
        "signature": "a-\u003eIO(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:readTVar",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
        "fct-type": "function",
        "title": "readTVar"
      },
      "index": {
        "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "readTVar",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:readTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
        "fct-type": "function",
        "title": "readTVarAsync"
      },
      "index": {
        "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "readTVarAsync",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:writeTVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
        "fct-type": "function",
        "title": "writeTVar"
      },
      "index": {
        "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM-TVar.html#v:writeTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM.TVar",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
        "fct-type": "function",
        "title": "writeTVarAsync"
      },
      "index": {
        "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
        "hierarchy": "Control Concurrent AdvSTM TVar",
        "module": "Control.Concurrent.AdvSTM.TVar",
        "name": "writeTVarAsync",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtends Control.Concurrent.STM with IO hooks\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-AdvSTM.html",
        "fct-type": "module",
        "title": "AdvSTM"
      },
      "index": {
        "description": "Extends Control.Concurrent.STM with IO hooks",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "AdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#t:AdvSTM",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for the STM monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-AdvSTM-Def.html#AdvSTM",
        "fct-type": "data",
        "title": "AdvSTM"
      },
      "index": {
        "description": "Drop-in replacement for the STM monad",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "AdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#t:MonadAdvSTM",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for extended-STM monads. For a concrete instantiation see\n \u003ccode\u003eAdvSTM\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#MonadAdvSTM",
        "fct-type": "class",
        "title": "MonadAdvSTM"
      },
      "index": {
        "description": "type class for extended-STM monads For concrete instantiation see AdvSTM",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "MonadAdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Monad Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealways\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m Bool -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#always",
        "fct-type": "method",
        "title": "always"
      },
      "index": {
        "description": "See always",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "always",
        "normalized": "a Bool-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": "m Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:alwaysSucceeds",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealwaysSucceeds\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#alwaysSucceeds",
        "fct-type": "method",
        "title": "alwaysSucceeds"
      },
      "index": {
        "description": "See alwaysSucceeds",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "alwaysSucceeds",
        "normalized": "a b-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "Succeeds",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:atomically",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "AdvSTM a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-AdvSTM.html#atomically",
        "fct-type": "function",
        "title": "atomically"
      },
      "index": {
        "description": "See atomically",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "atomically",
        "normalized": "AdvSTM a-\u003eIO a",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": "AdvSTM a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:catchSTM",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#catchSTM",
        "fct-type": "method",
        "title": "catchSTM"
      },
      "index": {
        "description": "See catchSTM",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "catchSTM",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "STM",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#check",
        "fct-type": "method",
        "title": "check"
      },
      "index": {
        "description": "See check",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "check",
        "normalized": "Bool-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:debugAdvSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUses unsafeIOToSTM to output the Thread Id and a message and delays \n for a given number of time.\n \u003cem\u003eWARNING:\u003c/em\u003e Can lead to deadlocks! \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "String -\u003e Int -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-AdvSTM.html#debugAdvSTM",
        "fct-type": "function",
        "title": "debugAdvSTM"
      },
      "index": {
        "description": "Uses unsafeIOToSTM to output the Thread Id and message and delays for given number of time WARNING Can lead to deadlocks",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "debugAdvSTM",
        "normalized": "String-\u003eInt-\u003eAdvSTM()",
        "package": "stm-io-hooks",
        "partial": "Adv STM",
        "signature": "String-\u003eInt-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:debugMode",
      "description": {
        "fct-descr": "\u003cp\u003eSwitches the debug mode on or off.\n \u003cem\u003eWARNING:\u003c/em\u003e Can lead to deadlocks! \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "Bool -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-AdvSTM.html#debugMode",
        "fct-type": "function",
        "title": "debugMode"
      },
      "index": {
        "description": "Switches the debug mode on or off WARNING Can lead to deadlocks",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "debugMode",
        "normalized": "Bool-\u003eAdvSTM()",
        "package": "stm-io-hooks",
        "partial": "Mode",
        "signature": "Bool-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:handleSTM",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#handleSTM",
        "fct-type": "function",
        "title": "handleSTM"
      },
      "index": {
        "description": "version of catchSTM with the arguments swapped around",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "handleSTM",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "stm-io-hooks",
        "partial": "STM",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:liftAdv",
      "description": {
        "fct-descr": "\u003cp\u003eLifts STM actions to \u003ccode\u003e\u003ca\u003eMonadAdvSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "STM a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#liftAdv",
        "fct-type": "method",
        "title": "liftAdv"
      },
      "index": {
        "description": "Lifts STM actions to MonadAdvSTM",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "liftAdv",
        "normalized": "STM a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "Adv",
        "signature": "STM a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:newTVar",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e m (TVar a)",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
        "fct-type": "method",
        "title": "newTVar"
      },
      "index": {
        "description": "See newTVar",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "newTVar",
        "normalized": "a-\u003eb(TVar a)",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "a-\u003em(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:onCommit",
      "description": {
        "fct-descr": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eonCommitWith\u003c/a\u003e\u003c/code\u003e without closure action:\n 'onCommit = onCommitWith id'\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO () -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#onCommit",
        "fct-type": "method",
        "title": "onCommit"
      },
      "index": {
        "description": "Works like onCommitWith without closure action onCommit onCommitWith id",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "onCommit",
        "normalized": "IO()-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "Commit",
        "signature": "IO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:onCommitWith",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a closure IO action and a commit IO action. \n The commit IO action will be executed \u003cem\u003eiff\u003c/em\u003e the transaction commits. \n Commit actions are sequenced (within the same transaction), i.e.,\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith id (putStr \" world\")\n\u003c/pre\u003e\u003cp\u003ewill print \"hello world\". \n\u003c/p\u003e\u003cp\u003eThe closure action is useful for encapsulating the commit actions,\n e.g., within a database transaction.\n The last call of onCommitWith in the transaction \n is applied to the sequence of commit actions, i.e.:\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith (\\s -\u003e do { putStrLn \"start\"; s; putStrLn \"\\nend\"})  (putStr \" world\")\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e When a TVar was modified in a transaction and the transaction tries to commit,\n this update remains invisible to other threads until the corresponding \n onCommit action is dispatched. \n\u003c/li\u003e\u003cli\u003e If the onCommit action throws an exception, the original value of \n the TVars  will be restored.\n\u003c/li\u003e\u003cli\u003e Accessing a modified TVar within the onCommit action will cause a\n Deadlock exception to be thrown. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs a general rule, \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e should \n only be used for \"real\" (i.e. without atomic blocks) IO actions and is certainly\n not the right place to fiddle with TVars. For example, if you wanted to\n write a TVar value to a file on commit, you could write:\n\u003c/p\u003e\u003cpre\u003e tvar \u003c- newTVarIO \"bla\"\n atomically $ do \n    x \u003c- readTVar tvar \n    onCommit (writeFile \"myfile\" x)\n\u003c/pre\u003e\u003cp\u003eNote: If you \u003cem\u003ereally\u003c/em\u003e need to access the \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e within an onCommit action\n (e.g. to recover from an IO exception), you can use \u003ccode\u003e\u003ca\u003ewriteTVarAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "onCommitWith",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#onCommitWith",
        "fct-type": "method",
        "title": "onCommitWith"
      },
      "index": {
        "description": "Takes closure IO action and commit IO action The commit IO action will be executed iff the transaction commits Commit actions are sequenced within the same transaction i.e onCommitWith id putStr hello onCommitWith id putStr world will print hello world The closure action is useful for encapsulating the commit actions e.g within database transaction The last call of onCommitWith in the transaction is applied to the sequence of commit actions i.e onCommitWith id putStr hello onCommitWith do putStrLn start putStrLn nend putStr world When TVar was modified in transaction and the transaction tries to commit this update remains invisible to other threads until the corresponding onCommit action is dispatched If the onCommit action throws an exception the original value of the TVars will be restored Accessing modified TVar within the onCommit action will cause Deadlock exception to be thrown As general rule onCommit should only be used for real i.e without atomic blocks IO actions and is certainly not the right place to fiddle with TVars For example if you wanted to write TVar value to file on commit you could write tvar newTVarIO bla atomically do readTVar tvar onCommit writeFile myfile Note If you really need to access the TVar within an onCommit action e.g to recover from an IO exception you can use writeTVarAsync",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "onCommitWith",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Commit With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#orElse",
        "fct-type": "method",
        "title": "orElse"
      },
      "index": {
        "description": "See orElse",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "orElse",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "Else",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:readTVar",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
        "fct-type": "method",
        "title": "readTVar"
      },
      "index": {
        "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "readTVar",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:readTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
        "fct-type": "method",
        "title": "readTVarAsync"
      },
      "index": {
        "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "readTVarAsync",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#retry",
        "fct-type": "method",
        "title": "retry"
      },
      "index": {
        "description": "See retry",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "retry",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:unsafeIOToSTM",
      "description": {
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#unsafeIOToSTM",
        "fct-type": "method",
        "title": "unsafeIOToSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "unsafeIOToSTM",
        "normalized": "IO a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "IOTo STM",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:unsafeRetryWith",
      "description": {
        "fct-descr": "\u003cp\u003eRetries the transaction and uses \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e to fork off a \n thread that runs the given IO action. Since a transaction might be rerun\n several times by the runtime system, it is your responsibility to \n ensure that the IO-action is idempotent and releases all acquired locks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO () -\u003e m b",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#unsafeRetryWith",
        "fct-type": "method",
        "title": "unsafeRetryWith"
      },
      "index": {
        "description": "Retries the transaction and uses unsafeIOToSTM to fork off thread that runs the given IO action Since transaction might be rerun several times by the runtime system it is your responsibility to ensure that the IO-action is idempotent and releases all acquired locks",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "unsafeRetryWith",
        "normalized": "IO()-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "Retry With",
        "signature": "IO()-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:writeTVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
        "fct-type": "method",
        "title": "writeTVar"
      },
      "index": {
        "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Concurrent-AdvSTM.html#v:writeTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
        "fct-type": "method",
        "title": "writeTVarAsync"
      },
      "index": {
        "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
        "hierarchy": "Control Concurrent AdvSTM",
        "module": "Control.Concurrent.AdvSTM",
        "name": "writeTVarAsync",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides the type class MonadAdvSTM and the AdvSTM monad.\n Parts of this implementation were taken from the HaskellWiki Page of\n MonadAdvSTM (see package description).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-AdvSTM.html",
        "fct-type": "module",
        "title": "AdvSTM"
      },
      "index": {
        "description": "Provides the type class MonadAdvSTM and the AdvSTM monad Parts of this implementation were taken from the HaskellWiki Page of MonadAdvSTM see package description",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "AdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#t:AdvSTM",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for the STM monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-AdvSTM-Def.html#AdvSTM",
        "fct-type": "data",
        "title": "AdvSTM"
      },
      "index": {
        "description": "Drop-in replacement for the STM monad",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "AdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#t:MonadAdvSTM",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for extended-STM monads. For a concrete instantiation see\n \u003ccode\u003eAdvSTM\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#MonadAdvSTM",
        "fct-type": "class",
        "title": "MonadAdvSTM"
      },
      "index": {
        "description": "type class for extended-STM monads For concrete instantiation see AdvSTM",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "MonadAdvSTM",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Monad Adv STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealways\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m Bool -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#always",
        "fct-type": "method",
        "title": "always"
      },
      "index": {
        "description": "See always",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "always",
        "normalized": "a Bool-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": "m Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:alwaysSucceeds",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ealwaysSucceeds\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#alwaysSucceeds",
        "fct-type": "method",
        "title": "alwaysSucceeds"
      },
      "index": {
        "description": "See alwaysSucceeds",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "alwaysSucceeds",
        "normalized": "a b-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "Succeeds",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:catchSTM",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecatchSTM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#catchSTM",
        "fct-type": "method",
        "title": "catchSTM"
      },
      "index": {
        "description": "See catchSTM",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "catchSTM",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "STM",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#check",
        "fct-type": "method",
        "title": "check"
      },
      "index": {
        "description": "See check",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "check",
        "normalized": "Bool-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:liftAdv",
      "description": {
        "fct-descr": "\u003cp\u003eLifts STM actions to \u003ccode\u003e\u003ca\u003eMonadAdvSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "STM a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#liftAdv",
        "fct-type": "method",
        "title": "liftAdv"
      },
      "index": {
        "description": "Lifts STM actions to MonadAdvSTM",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "liftAdv",
        "normalized": "STM a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "Adv",
        "signature": "STM a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:newTVar",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "a -\u003e m (TVar a)",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#newTVar",
        "fct-type": "method",
        "title": "newTVar"
      },
      "index": {
        "description": "See newTVar",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "newTVar",
        "normalized": "a-\u003eb(TVar a)",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "a-\u003em(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:onCommit",
      "description": {
        "fct-descr": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eonCommitWith\u003c/a\u003e\u003c/code\u003e without closure action:\n 'onCommit = onCommitWith id'\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO () -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#onCommit",
        "fct-type": "method",
        "title": "onCommit"
      },
      "index": {
        "description": "Works like onCommitWith without closure action onCommit onCommitWith id",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "onCommit",
        "normalized": "IO()-\u003ea()",
        "package": "stm-io-hooks",
        "partial": "Commit",
        "signature": "IO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:onCommitWith",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a closure IO action and a commit IO action. \n The commit IO action will be executed \u003cem\u003eiff\u003c/em\u003e the transaction commits. \n Commit actions are sequenced (within the same transaction), i.e.,\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith id (putStr \" world\")\n\u003c/pre\u003e\u003cp\u003ewill print \"hello world\". \n\u003c/p\u003e\u003cp\u003eThe closure action is useful for encapsulating the commit actions,\n e.g., within a database transaction.\n The last call of onCommitWith in the transaction \n is applied to the sequence of commit actions, i.e.:\n\u003c/p\u003e\u003cpre\u003e onCommitWith id (putStr \"hello\")\n onCommitWith (\\s -\u003e do { putStrLn \"start\"; s; putStrLn \"\\nend\"})  (putStr \" world\")\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e When a TVar was modified in a transaction and the transaction tries to commit,\n this update remains invisible to other threads until the corresponding \n onCommit action is dispatched. \n\u003c/li\u003e\u003cli\u003e If the onCommit action throws an exception, the original value of \n the TVars  will be restored.\n\u003c/li\u003e\u003cli\u003e Accessing a modified TVar within the onCommit action will cause a\n Deadlock exception to be thrown. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs a general rule, \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e should \n only be used for \"real\" (i.e. without atomic blocks) IO actions and is certainly\n not the right place to fiddle with TVars. For example, if you wanted to\n write a TVar value to a file on commit, you could write:\n\u003c/p\u003e\u003cpre\u003e tvar \u003c- newTVarIO \"bla\"\n atomically $ do \n    x \u003c- readTVar tvar \n    onCommit (writeFile \"myfile\" x)\n\u003c/pre\u003e\u003cp\u003eNote: If you \u003cem\u003ereally\u003c/em\u003e need to access the \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e within an onCommit action\n (e.g. to recover from an IO exception), you can use \u003ccode\u003e\u003ca\u003ewriteTVarAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "onCommitWith",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#onCommitWith",
        "fct-type": "method",
        "title": "onCommitWith"
      },
      "index": {
        "description": "Takes closure IO action and commit IO action The commit IO action will be executed iff the transaction commits Commit actions are sequenced within the same transaction i.e onCommitWith id putStr hello onCommitWith id putStr world will print hello world The closure action is useful for encapsulating the commit actions e.g within database transaction The last call of onCommitWith in the transaction is applied to the sequence of commit actions i.e onCommitWith id putStr hello onCommitWith do putStrLn start putStrLn nend putStr world When TVar was modified in transaction and the transaction tries to commit this update remains invisible to other threads until the corresponding onCommit action is dispatched If the onCommit action throws an exception the original value of the TVars will be restored Accessing modified TVar within the onCommit action will cause Deadlock exception to be thrown As general rule onCommit should only be used for real i.e without atomic blocks IO actions and is certainly not the right place to fiddle with TVars For example if you wanted to write TVar value to file on commit you could write tvar newTVarIO bla atomically do readTVar tvar onCommit writeFile myfile Note If you really need to access the TVar within an onCommit action e.g to recover from an IO exception you can use writeTVarAsync",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "onCommitWith",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "Commit With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#orElse",
        "fct-type": "method",
        "title": "orElse"
      },
      "index": {
        "description": "See orElse",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "orElse",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "Else",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:readTVar",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value from a TVar. Blocks until the IO onCommit aidction(s) of \n the corresponding transaction are complete.is not the last function\n See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for a more detailed description of this behaviour.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVar",
        "fct-type": "method",
        "title": "readTVar"
      },
      "index": {
        "description": "Reads value from TVar Blocks until the IO onCommit aidction of the corresponding transaction are complete.is not the last function See onCommit for more detailed description of this behaviour",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "readTVar",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:readTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eReads a value directly from the TVar. Does not block when the\n onCommit actions aren't done yet. NOTE: Only use this function when\n you know what you're doing.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#readTVarAsync",
        "fct-type": "method",
        "title": "readTVarAsync"
      },
      "index": {
        "description": "Reads value directly from the TVar Does not block when the onCommit actions aren done yet NOTE Only use this function when you know what you re doing",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "readTVarAsync",
        "normalized": "TVar a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#retry",
        "fct-type": "method",
        "title": "retry"
      },
      "index": {
        "description": "See retry",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "retry",
        "normalized": "",
        "package": "stm-io-hooks",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:unsafeIOToSTM",
      "description": {
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#unsafeIOToSTM",
        "fct-type": "method",
        "title": "unsafeIOToSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "unsafeIOToSTM",
        "normalized": "IO a-\u003eb a",
        "package": "stm-io-hooks",
        "partial": "IOTo STM",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:unsafeRetryWith",
      "description": {
        "fct-descr": "\u003cp\u003eRetries the transaction and uses \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e to fork off a \n thread that runs the given IO action. Since a transaction might be rerun\n several times by the runtime system, it is your responsibility to \n ensure that the IO-action is idempotent and releases all acquired locks.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "IO () -\u003e m b",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#unsafeRetryWith",
        "fct-type": "method",
        "title": "unsafeRetryWith"
      },
      "index": {
        "description": "Retries the transaction and uses unsafeIOToSTM to fork off thread that runs the given IO action Since transaction might be rerun several times by the runtime system it is your responsibility to ensure that the IO-action is idempotent and releases all acquired locks",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "unsafeRetryWith",
        "normalized": "IO()-\u003ea b",
        "package": "stm-io-hooks",
        "partial": "Retry With",
        "signature": "IO()-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:writeTVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value to a TVar. Blocks until the onCommit IO-action(s) are\n complete. See \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVar",
        "fct-type": "method",
        "title": "writeTVar"
      },
      "index": {
        "description": "Writes value to TVar Blocks until the onCommit IO-action are complete See onCommit for details",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-io-hooks/docs/Control-Monad-AdvSTM.html#v:writeTVarAsync",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value directly to the TVar. Does not block when \n onCommit actions aren't done yet. This function comes in handy for\n error recovery of exceptions that occur in onCommit.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.AdvSTM",
        "fct-package": "stm-io-hooks",
        "fct-signature": "TVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-AdvSTM-Class.html#writeTVarAsync",
        "fct-type": "method",
        "title": "writeTVarAsync"
      },
      "index": {
        "description": "Writes value directly to the TVar Does not block when onCommit actions aren done yet This function comes in handy for error recovery of exceptions that occur in onCommit",
        "hierarchy": "Control Monad AdvSTM",
        "module": "Control.Monad.AdvSTM",
        "name": "writeTVarAsync",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "stm-io-hooks",
        "partial": "TVar Async",
        "signature": "TVar a-\u003ea-\u003em()"
      }
    }
  }
]