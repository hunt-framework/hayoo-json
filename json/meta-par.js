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
        "word": "meta-par"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA very simple layer of abstraction for frequently modified shared\n   variables.  This additional indirection is only present for\n   benchmarking \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e operations vs. \u003ccode\u003eMVar\u003c/code\u003e or \u003ccode\u003eTVar\u003c/code\u003e implementations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "IORef",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html",
          "type": "module"
        },
        "index": {
          "description": "very simple layer of abstraction for frequently modified shared variables This additional indirection is only present for benchmarking IORef operations vs MVar or TVar implementations",
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "IORef",
          "package": "meta-par",
          "partial": "IORef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "HotVar",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#HotVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "HotVar",
          "package": "meta-par",
          "partial": "Hot Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#t:HotVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "modifyHotVar",
          "package": "meta-par",
          "signature": "HotVar a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#modifyHotVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "modifyHotVar",
          "normalized": "HotVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "meta-par",
          "partial": "Hot Var",
          "signature": "HotVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:modifyHotVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "modifyHotVar_",
          "package": "meta-par",
          "signature": "HotVar a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#modifyHotVar_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "modifyHotVar_",
          "normalized": "HotVar a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "meta-par",
          "partial": "Hot Var",
          "signature": "HotVar a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:modifyHotVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "newHotVar",
          "package": "meta-par",
          "signature": "a -\u003e IO (HotVar a)",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#newHotVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "newHotVar",
          "normalized": "a-\u003eIO(HotVar a)",
          "package": "meta-par",
          "partial": "Hot Var",
          "signature": "a-\u003eIO(HotVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:newHotVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "readHotVar",
          "package": "meta-par",
          "signature": "HotVar a -\u003e IO a",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#readHotVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "readHotVar",
          "normalized": "HotVar a-\u003eIO a",
          "package": "meta-par",
          "partial": "Hot Var",
          "signature": "HotVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:readHotVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "readHotVarRaw",
          "package": "meta-par",
          "signature": "HotVar a -\u003e IO a",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#readHotVarRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "readHotVarRaw",
          "normalized": "HotVar a-\u003eIO a",
          "package": "meta-par",
          "partial": "Hot Var Raw",
          "signature": "HotVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:readHotVarRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "writeHotVar",
          "package": "meta-par",
          "signature": "HotVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#writeHotVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "writeHotVar",
          "normalized": "HotVar a-\u003ea-\u003eIO()",
          "package": "meta-par",
          "partial": "Hot Var",
          "signature": "HotVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:writeHotVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "writeHotVarRaw",
          "package": "meta-par",
          "signature": "HotVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-HotVar-IORef.html#writeHotVarRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta HotVar IORef",
          "module": "Control.Monad.Par.Meta.HotVar.IORef",
          "name": "writeHotVarRaw",
          "normalized": "HotVar a-\u003ea-\u003eIO()",
          "package": "meta-par",
          "partial": "Hot Var Raw",
          "signature": "HotVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-HotVar-IORef.html#v:writeHotVarRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements exponential backoff so as to prevent\n   spamming of steal actions.  This is always a good idea, and\n   especially so in the distributed case where steal attempts send\n   actual messages.\n\u003c/p\u003e\u003cp\u003eNormally backoff functionality is baked into the scheduler loop.\n   One nice aspect of the Meta scheduler design is that backoff can\n   become \u003ca\u003ejust another resource\u003c/a\u003e.  Most schedulers (compositions)\n   should include this at tho bottom of their stack.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "Backoff",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Resources-Backoff.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements exponential backoff so as to prevent spamming of steal actions This is always good idea and especially so in the distributed case where steal attempts send actual messages Normally backoff functionality is baked into the scheduler loop One nice aspect of the Meta scheduler design is that backoff can become just another resource Most schedulers compositions should include this at tho bottom of their stack",
          "hierarchy": "Control Monad Par Meta Resources Backoff",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "Backoff",
          "package": "meta-par",
          "partial": "Backoff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Backoff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "defaultStartup",
          "package": "meta-par",
          "signature": "Startup",
          "source": "src/Control-Monad-Par-Meta-Resources-Backoff.html#defaultStartup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Backoff",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "defaultStartup",
          "package": "meta-par",
          "partial": "Startup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Backoff.html#v:defaultStartup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "mkResource",
          "package": "meta-par",
          "signature": "Word64 -\u003e Word64 -\u003e Resource",
          "source": "src/Control-Monad-Par-Meta-Resources-Backoff.html#mkResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Backoff",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "mkResource",
          "normalized": "Word-\u003eWord-\u003eResource",
          "package": "meta-par",
          "partial": "Resource",
          "signature": "Word-\u003eWord-\u003eResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Backoff.html#v:mkResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo construct a WorkSearch we need to know the minimum and\n maximum amount of time (nanoseconds) to sleep.  The exponential\n backoff policy is always the same: it starts at 1ns and doubles.\n\u003c/p\u003e\u003cp\u003eThe thing that changes over time is whether sleeping actually\n *occurs*.  For example, `mkWorkSearch 1000 100000` will not sleep\n for the first ten invocations (until 1024), and then will sleep an\n amount that doubles each time until it surpasses the maximum, at\n which point each sleep will be for the maximum: 100ms.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "mkWorkSearch",
          "package": "meta-par",
          "signature": "Word64 -\u003e Word64 -\u003e WorkSearch",
          "source": "src/Control-Monad-Par-Meta-Resources-Backoff.html#mkWorkSearch",
          "type": "function"
        },
        "index": {
          "description": "To construct WorkSearch we need to know the minimum and maximum amount of time nanoseconds to sleep The exponential backoff policy is always the same it starts at ns and doubles The thing that changes over time is whether sleeping actually occurs For example mkWorkSearch will not sleep for the first ten invocations until and then will sleep an amount that doubles each time until it surpasses the maximum at which point each sleep will be for the maximum ms",
          "hierarchy": "Control Monad Par Meta Resources Backoff",
          "module": "Control.Monad.Par.Meta.Resources.Backoff",
          "name": "mkWorkSearch",
          "normalized": "Word-\u003eWord-\u003eWorkSearch",
          "package": "meta-par",
          "partial": "Work Search",
          "signature": "Word-\u003eWord-\u003eWorkSearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Backoff.html#v:mkWorkSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "Debugging",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "Debugging",
          "package": "meta-par",
          "partial": "Debugging",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbg",
          "package": "meta-par",
          "signature": "Bool",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#dbg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbg",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:dbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edbgCharMsg\u003c/a\u003e\u003c/code\u003e is for printing a small tag like \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e (with no line\n   termination) which produces a different kind of visual output.\n dbgCharMsg :: Int -\u003e String -\u003e String -\u003e IO ()\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgCharMsg",
          "package": "meta-par",
          "signature": "Int -\u003e ByteString -\u003e ByteString -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#dbgCharMsg",
          "type": "function"
        },
        "index": {
          "description": "dbgCharMsg is for printing small tag like with no line termination which produces different kind of visual output dbgCharMsg Int String String IO",
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgCharMsg",
          "normalized": "Int-\u003eByteString-\u003eByteString-\u003eIO()",
          "package": "meta-par",
          "partial": "Char Msg",
          "signature": "Int-\u003eByteString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:dbgCharMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgDelay",
          "package": "meta-par",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#dbgDelay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgDelay",
          "normalized": "ByteString-\u003eIO()",
          "package": "meta-par",
          "partial": "Delay",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:dbgDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edbgTaggedMsg is our routine for logging debugging output:\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgTaggedMsg",
          "package": "meta-par",
          "signature": "Int -\u003e ByteString -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#dbgTaggedMsg",
          "type": "function"
        },
        "index": {
          "description": "dbgTaggedMsg is our routine for logging debugging output",
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "dbgTaggedMsg",
          "normalized": "Int-\u003eByteString-\u003eIO()",
          "package": "meta-par",
          "partial": "Tagged Msg",
          "signature": "Int-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:dbgTaggedMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "meaningless_alloc",
          "package": "meta-par",
          "signature": "IO ()",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#meaningless_alloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "meaningless_alloc",
          "normalized": "IO()",
          "package": "meta-par",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:meaningless_alloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "taggedmsg_global_mode",
          "package": "meta-par",
          "signature": "IORef ByteString",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#taggedmsg_global_mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "taggedmsg_global_mode",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:taggedmsg_global_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "verbosity",
          "package": "meta-par",
          "signature": "Int",
          "source": "src/Control-Monad-Par-Meta-Resources-Debugging.html#verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Resources Debugging",
          "module": "Control.Monad.Par.Meta.Resources.Debugging",
          "name": "verbosity",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-Debugging.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a Meta-Par \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e for SMP parallelism,\n suitable as a base for combined execution resources (e.g.,\n \u003ccode\u003eControl.Monad.Par.Meta.AccSMP\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "SMP",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Resources-SMP.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Meta-Par Resource for SMP parallelism suitable as base for combined execution resources e.g Control.Monad.Par.Meta.AccSMP",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "SMP",
          "package": "meta-par",
          "partial": "SMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStartup\u003c/a\u003e\u003c/code\u003e for spawning threads on all capabilities, or from a\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e-able list of capability numbers in the environment variable\n \u003ccode\u003eSMP_CAPS\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "defaultStartup",
          "package": "meta-par",
          "signature": "Startup",
          "source": "src/Control-Monad-Par-Meta-Resources-SMP.html#defaultStartup",
          "type": "function"
        },
        "index": {
          "description": "Startup for spawning threads on all capabilities or from read able list of capability numbers in the environment variable SMP CAPS",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "defaultStartup",
          "package": "meta-par",
          "partial": "Startup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:defaultStartup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e for all capabilities.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "defaultWorkSearch",
          "package": "meta-par",
          "signature": "Int -\u003e WorkSearch",
          "source": "src/Control-Monad-Par-Meta-Resources-SMP.html#defaultWorkSearch",
          "type": "function"
        },
        "index": {
          "description": "WorkSearch for all capabilities",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "defaultWorkSearch",
          "normalized": "Int-\u003eWorkSearch",
          "package": "meta-par",
          "partial": "Work Search",
          "signature": "Int-\u003eWorkSearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:defaultWorkSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an SMP resource for all capabilities. \n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "mkResource",
          "package": "meta-par",
          "signature": "Int-\u003e Resource",
          "type": "function"
        },
        "index": {
          "description": "Create an SMP resource for all capabilities",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "mkResource",
          "normalized": "Int-\u003eResource",
          "package": "meta-par",
          "partial": "Resource",
          "signature": "Int-\u003eResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:mkResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an SMP resource for a configurable list of capabilities.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "mkResourceOn",
          "package": "meta-par",
          "signature": "[Int]-\u003e Int-\u003e Resource",
          "type": "function"
        },
        "index": {
          "description": "Create an SMP resource for configurable list of capabilities",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "mkResourceOn",
          "normalized": "[Int]-\u003eInt-\u003eResource",
          "package": "meta-par",
          "partial": "Resource On",
          "signature": "[Int]-\u003eInt-\u003eResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:mkResourceOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStartup\u003c/a\u003e\u003c/code\u003e for spawning threads only on a particular set of\n capabilities.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "startupForCaps",
          "package": "meta-par",
          "signature": "[Int] -\u003e Startup",
          "source": "src/Control-Monad-Par-Meta-Resources-SMP.html#startupForCaps",
          "type": "function"
        },
        "index": {
          "description": "Startup for spawning threads only on particular set of capabilities",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "startupForCaps",
          "normalized": "[Int]-\u003eStartup",
          "package": "meta-par",
          "partial": "For Caps",
          "signature": "[Int]-\u003eStartup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:startupForCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of capabilities and a number of steals to attempt per\n capability, return a \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "wsForCaps",
          "package": "meta-par",
          "signature": "[Int] -\u003e Int -\u003e WorkSearch",
          "source": "src/Control-Monad-Par-Meta-Resources-SMP.html#wsForCaps",
          "type": "function"
        },
        "index": {
          "description": "Given set of capabilities and number of steals to attempt per capability return WorkSearch",
          "hierarchy": "Control Monad Par Meta Resources SMP",
          "module": "Control.Monad.Par.Meta.Resources.SMP",
          "name": "wsForCaps",
          "normalized": "[Int]-\u003eInt-\u003eWorkSearch",
          "package": "meta-par",
          "partial": "For Caps",
          "signature": "[Int]-\u003eInt-\u003eWorkSearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SMP.html#v:wsForCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple single-threaded \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e that is a useful\n accompaniment for testing non-CPU resources such as GPU or\n distributed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "SingleThreaded",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Resources-SingleThreaded.html",
          "type": "module"
        },
        "index": {
          "description": "simple single-threaded Resource that is useful accompaniment for testing non-CPU resources such as GPU or distributed",
          "hierarchy": "Control Monad Par Meta Resources SingleThreaded",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "SingleThreaded",
          "package": "meta-par",
          "partial": "Single Threaded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SingleThreaded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a single Meta-Par worker.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "defaultStartup",
          "package": "meta-par",
          "signature": "Startup",
          "source": "src/Control-Monad-Par-Meta-Resources-SingleThreaded.html#defaultStartup",
          "type": "function"
        },
        "index": {
          "description": "Spawn single Meta-Par worker",
          "hierarchy": "Control Monad Par Meta Resources SingleThreaded",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "defaultStartup",
          "package": "meta-par",
          "partial": "Startup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SingleThreaded.html#v:defaultStartup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-threaded resource by itself is not aware of any other\n sources of work, so its \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "defaultWorkSearch",
          "package": "meta-par",
          "signature": "WorkSearch",
          "source": "src/Control-Monad-Par-Meta-Resources-SingleThreaded.html#defaultWorkSearch",
          "type": "function"
        },
        "index": {
          "description": "single-threaded resource by itself is not aware of any other sources of work so its WorkSearch always returns Nothing",
          "hierarchy": "Control Monad Par Meta Resources SingleThreaded",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "defaultWorkSearch",
          "package": "meta-par",
          "partial": "Work Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SingleThreaded.html#v:defaultWorkSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a single-threaded resource.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "mkResource",
          "package": "meta-par",
          "signature": "Resource",
          "source": "src/Control-Monad-Par-Meta-Resources-SingleThreaded.html#mkResource",
          "type": "function"
        },
        "index": {
          "description": "Create single-threaded resource",
          "hierarchy": "Control Monad Par Meta Resources SingleThreaded",
          "module": "Control.Monad.Par.Meta.Resources.SingleThreaded",
          "name": "mkResource",
          "package": "meta-par",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Resources-SingleThreaded.html#v:mkResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "SMP",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-SMP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "SMP",
          "package": "meta-par",
          "partial": "SMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e is a \u003cem\u003ewrite-once\u003c/em\u003e, \u003cem\u003eread-many\u003c/em\u003e structure for\n communication between \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e threads.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "IVar",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#IVar",
          "type": "data"
        },
        "index": {
          "description": "An IVar is write-once read-many structure for communication between Par threads",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "IVar",
          "package": "meta-par",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Meta-Par monad specialized for SMP parallelism.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "Par",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-SMP.html#Par",
          "type": "data"
        },
        "index": {
          "description": "The Meta-Par monad specialized for SMP parallelism",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "Par",
          "package": "meta-par",
          "partial": "Par",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParFuture\u003c/code\u003e captures the class of Par monads which support\n   futures.  This level of functionality subsumes \u003ccode\u003epar\u003c/code\u003e/\u003ccode\u003epseq\u003c/code\u003e and is\n   similar to the \u003ca\u003eControl.Parallel.Strategies.Eval\u003c/a\u003e monad.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003espawn_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n   However, for monads that are also a member of \u003ccode\u003e\u003ca\u003eParIVar\u003c/a\u003e\u003c/code\u003e it is\n   typical to simply define \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "ParFuture",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParFuture captures the class of Par monads which support futures This level of functionality subsumes par pseq and is similar to the Control.Parallel.Strategies.Eval monad minimal implementation consists of spawn and get However for monads that are also member of ParIVar it is typical to simply define spawn in terms of fork new and put",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "ParFuture",
          "package": "meta-par",
          "partial": "Par Future",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#t:ParFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParIVar\u003c/code\u003e builds on futures by adding full \u003cem\u003eanyone-writes, anyone-reads\u003c/em\u003e IVars.\n   These are more expressive but may not be supported by all distributed schedulers.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "ParIVar",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParIVar builds on futures by adding full anyone-writes anyone-reads IVars These are more expressive but may not be supported by all distributed schedulers minimal implementation consists of fork put and new",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "ParIVar",
          "package": "meta-par",
          "partial": "Par IVar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#t:ParIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a computation to happen in parallel.  The forked\n computation may exchange values with other computations using\n \u003ccode\u003eIVar\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "fork",
          "package": "meta-par",
          "signature": "m () -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Forks computation to happen in parallel The forked computation may exchange values with other computations using IVar",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "fork",
          "normalized": "a()-\u003ea()",
          "package": "meta-par",
          "signature": "m()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "get",
          "package": "meta-par",
          "signature": "future a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "get",
          "normalized": "a b-\u003ec b",
          "package": "meta-par",
          "signature": "future a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "new",
          "package": "meta-par",
          "signature": "m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "new",
          "package": "meta-par",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "newFull",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "newFull",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:newFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "newFull_",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value head-strict only",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "newFull_",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:newFull_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "put",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "put",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.  \n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "put_",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "like put but only head-strict rather than fully-strict",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "put_",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "runPar",
          "package": "meta-par",
          "signature": "Par a -\u003e a",
          "source": "src/Control-Monad-Par-Meta-SMP.html#runPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "runPar",
          "normalized": "Par a-\u003ea",
          "package": "meta-par",
          "partial": "Par",
          "signature": "Par a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:runPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "runParIO",
          "package": "meta-par",
          "signature": "Par a -\u003e IO a",
          "source": "src/Control-Monad-Par-Meta-SMP.html#runParIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "runParIO",
          "normalized": "Par a-\u003eIO a",
          "package": "meta-par",
          "partial": "Par IO",
          "signature": "Par a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:runParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a potentially-parallel computation, and return a \u003cem\u003efuture\u003c/em\u003e\n (or \u003cem\u003epromise\u003c/em\u003e) that can be used to query the result of the forked\n computataion.  \n\u003c/p\u003e\u003cpre\u003e  spawn p = do\n    r \u003c- new\n    fork (p \u003e\u003e= put r)\n    return r\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawn",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Create potentially-parallel computation and return future or promise that can be used to query the result of the forked computataion spawn do new fork put return",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawn",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a pure (rather than monadic) computation.  Fully-strict.\n\u003c/p\u003e\u003cpre\u003e  spawnP = spawn . return\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawnP",
          "package": "meta-par",
          "signature": "a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Spawn pure rather than monadic computation Fully-strict spawnP spawn return",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawnP",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "signature": "a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:spawnP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but the result is only head-strict, not fully-strict.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawn_",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Like spawn but the result is only head-strict not fully-strict",
          "hierarchy": "Control Monad Par Meta SMP",
          "module": "Control.Monad.Par.Meta.SMP",
          "name": "spawn_",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-SMP.html#v:spawn_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "Serial",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Serial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "Serial",
          "package": "meta-par",
          "partial": "Serial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Meta-Par monad specialized for single-threaded execution.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "Par",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta-Serial.html#Par",
          "type": "data"
        },
        "index": {
          "description": "The Meta-Par monad specialized for single-threaded execution",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "Par",
          "package": "meta-par",
          "partial": "Par",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParFuture\u003c/code\u003e captures the class of Par monads which support\n   futures.  This level of functionality subsumes \u003ccode\u003epar\u003c/code\u003e/\u003ccode\u003epseq\u003c/code\u003e and is\n   similar to the \u003ca\u003eControl.Parallel.Strategies.Eval\u003c/a\u003e monad.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003espawn_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n   However, for monads that are also a member of \u003ccode\u003e\u003ca\u003eParIVar\u003c/a\u003e\u003c/code\u003e it is\n   typical to simply define \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "ParFuture",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParFuture captures the class of Par monads which support futures This level of functionality subsumes par pseq and is similar to the Control.Parallel.Strategies.Eval monad minimal implementation consists of spawn and get However for monads that are also member of ParIVar it is typical to simply define spawn in terms of fork new and put",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "ParFuture",
          "package": "meta-par",
          "partial": "Par Future",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#t:ParFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParIVar\u003c/code\u003e builds on futures by adding full \u003cem\u003eanyone-writes, anyone-reads\u003c/em\u003e IVars.\n   These are more expressive but may not be supported by all distributed schedulers.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "ParIVar",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParIVar builds on futures by adding full anyone-writes anyone-reads IVars These are more expressive but may not be supported by all distributed schedulers minimal implementation consists of fork put and new",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "ParIVar",
          "package": "meta-par",
          "partial": "Par IVar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#t:ParIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a computation to happen in parallel.  The forked\n computation may exchange values with other computations using\n \u003ccode\u003eIVar\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "fork",
          "package": "meta-par",
          "signature": "m () -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Forks computation to happen in parallel The forked computation may exchange values with other computations using IVar",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "fork",
          "normalized": "a()-\u003ea()",
          "package": "meta-par",
          "signature": "m()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "get",
          "package": "meta-par",
          "signature": "future a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "get",
          "normalized": "a b-\u003ec b",
          "package": "meta-par",
          "signature": "future a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "new",
          "package": "meta-par",
          "signature": "m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "new",
          "package": "meta-par",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "newFull",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "newFull",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:newFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "newFull_",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value head-strict only",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "newFull_",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:newFull_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "put",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "put",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.  \n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "put_",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "like put but only head-strict rather than fully-strict",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "put_",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "runPar",
          "package": "meta-par",
          "signature": "Par a -\u003e a",
          "source": "src/Control-Monad-Par-Meta-Serial.html#runPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "runPar",
          "normalized": "Par a-\u003ea",
          "package": "meta-par",
          "partial": "Par",
          "signature": "Par a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:runPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "runParIO",
          "package": "meta-par",
          "signature": "Par a -\u003e IO a",
          "source": "src/Control-Monad-Par-Meta-Serial.html#runParIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "runParIO",
          "normalized": "Par a-\u003eIO a",
          "package": "meta-par",
          "partial": "Par IO",
          "signature": "Par a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:runParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a potentially-parallel computation, and return a \u003cem\u003efuture\u003c/em\u003e\n (or \u003cem\u003epromise\u003c/em\u003e) that can be used to query the result of the forked\n computataion.  \n\u003c/p\u003e\u003cpre\u003e  spawn p = do\n    r \u003c- new\n    fork (p \u003e\u003e= put r)\n    return r\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawn",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Create potentially-parallel computation and return future or promise that can be used to query the result of the forked computataion spawn do new fork put return",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawn",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a pure (rather than monadic) computation.  Fully-strict.\n\u003c/p\u003e\u003cpre\u003e  spawnP = spawn . return\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawnP",
          "package": "meta-par",
          "signature": "a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Spawn pure rather than monadic computation Fully-strict spawnP spawn return",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawnP",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "signature": "a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:spawnP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but the result is only head-strict, not fully-strict.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawn_",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Like spawn but the result is only head-strict not fully-strict",
          "hierarchy": "Control Monad Par Meta Serial",
          "module": "Control.Monad.Par.Meta.Serial",
          "name": "spawn_",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta-Serial.html#v:spawn_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "Meta",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Meta",
          "package": "meta-par",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGlobalState\u003c/a\u003e\u003c/code\u003e structure tracks the state of all Meta-Par\n workers in a program in a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e indexed by capability\n number.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "GlobalState",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#GlobalState",
          "type": "type"
        },
        "index": {
          "description": "GlobalState structure tracks the state of all Meta-Par workers in program in Vector indexed by capability number",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "GlobalState",
          "package": "meta-par",
          "partial": "Global State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:GlobalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e is a \u003cem\u003ewrite-once\u003c/em\u003e, \u003cem\u003eread-many\u003c/em\u003e structure for\n communication between \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e threads.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "IVar",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#IVar",
          "type": "data"
        },
        "index": {
          "description": "An IVar is write-once read-many structure for communication between Par threads",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "IVar",
          "package": "meta-par",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Meta-Par monad with its full suite of instances. Note that\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance, while essential for building new\n \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003es, is unsafe in client code when combined with\n \u003ccode\u003e\u003ca\u003erunMetaPar\u003c/a\u003e\u003c/code\u003e. This type should therefore be exposed to client code\n as a \u003ccode\u003enewtype\u003c/code\u003e that omits the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "Par",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#Par",
          "type": "data"
        },
        "index": {
          "description": "The Meta-Par monad with its full suite of instances Note that the MonadIO instance while essential for building new Resource is unsafe in client code when combined with runMetaPar This type should therefore be exposed to client code as newtype that omits the MonadIO instance",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Par",
          "package": "meta-par",
          "partial": "Par",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParFuture\u003c/code\u003e captures the class of Par monads which support\n   futures.  This level of functionality subsumes \u003ccode\u003epar\u003c/code\u003e/\u003ccode\u003epseq\u003c/code\u003e and is\n   similar to the \u003ca\u003eControl.Parallel.Strategies.Eval\u003c/a\u003e monad.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003espawn_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n   However, for monads that are also a member of \u003ccode\u003e\u003ca\u003eParIVar\u003c/a\u003e\u003c/code\u003e it is\n   typical to simply define \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "ParFuture",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParFuture captures the class of Par monads which support futures This level of functionality subsumes par pseq and is similar to the Control.Parallel.Strategies.Eval monad minimal implementation consists of spawn and get However for monads that are also member of ParIVar it is typical to simply define spawn in terms of fork new and put",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "ParFuture",
          "package": "meta-par",
          "partial": "Par Future",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:ParFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eParIVar\u003c/code\u003e builds on futures by adding full \u003cem\u003eanyone-writes, anyone-reads\u003c/em\u003e IVars.\n   These are more expressive but may not be supported by all distributed schedulers.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "ParIVar",
          "package": "meta-par",
          "type": "class"
        },
        "index": {
          "description": "ParIVar builds on futures by adding full anyone-writes anyone-reads IVars These are more expressive but may not be supported by all distributed schedulers minimal implementation consists of fork put and new",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "ParIVar",
          "package": "meta-par",
          "partial": "Par IVar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:ParIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e provides an abstraction of heterogeneous execution\n resources, and may be combined using \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n operations. Composition of resources is left-biased; for example,\n if \u003ccode\u003eresource1\u003c/code\u003e always returns work from its \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e, the\n composed resource \u003ccode\u003eresource1 \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e resource2\u003c/code\u003e will never\n request work from \u003ccode\u003eresource2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "Resource",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "Resource provides an abstraction of heterogeneous execution resources and may be combined using Monoid operations Composition of resources is left-biased for example if resource1 always returns work from its WorkSearch the composed resource resource1 mappend resource2 will never request work from resource2",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Resource",
          "package": "meta-par",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "Sched",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Sched",
          "package": "meta-par",
          "partial": "Sched",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:Sched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStartup\u003c/a\u003e\u003c/code\u003e component of a \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e is a callback that\n implements initialization behavior. For example, the SMP \u003ccode\u003e\u003ca\u003eStartup\u003c/a\u003e\u003c/code\u003e\n calls \u003ccode\u003e\u003ca\u003espawnWorkerOnCPU\u003c/a\u003e\u003c/code\u003e a number of times. The arguments to\n \u003ccode\u003e\u003ca\u003eStartup\u003c/a\u003e\u003c/code\u003e are the combined \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e of the current scheduler and\n a thread-safe reference to the \u003ccode\u003e\u003ca\u003eGlobalState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "Startup",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#Startup",
          "type": "newtype"
        },
        "index": {
          "description": "The Startup component of Resource is callback that implements initialization behavior For example the SMP Startup calls spawnWorkerOnCPU number of times The arguments to Startup are the combined Resource of the current scheduler and thread-safe reference to the GlobalState",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Startup",
          "package": "meta-par",
          "partial": "Startup",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:Startup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e component of a \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e is a callback that\n responds to requests for work from Meta-Par workers. The arguments\n to \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e are the \u003ccode\u003e\u003ca\u003eSched\u003c/a\u003e\u003c/code\u003e for the current thread and a\n thread-safe reference to the \u003ccode\u003e\u003ca\u003eGlobalState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "WorkSearch",
          "package": "meta-par",
          "source": "src/Control-Monad-Par-Meta.html#WorkSearch",
          "type": "newtype"
        },
        "index": {
          "description": "The WorkSearch component of Resource is callback that responds to requests for work from Meta-Par workers The arguments to WorkSearch are the Sched for the current thread and thread-safe reference to the GlobalState",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "WorkSearch",
          "package": "meta-par",
          "partial": "Work Search",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#t:WorkSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "Resource",
          "package": "meta-par",
          "signature": "Resource",
          "source": "src/Control-Monad-Par-Meta.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Resource",
          "package": "meta-par",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "Sched",
          "package": "meta-par",
          "signature": "Sched",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "Sched",
          "package": "meta-par",
          "partial": "Sched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:Sched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "St",
          "package": "meta-par",
          "signature": "St",
          "source": "src/Control-Monad-Par-Meta.html#Startup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "St",
          "package": "meta-par",
          "partial": "St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:St"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "WS",
          "package": "meta-par",
          "signature": "WS",
          "source": "src/Control-Monad-Par-Meta.html#WorkSearch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "WS",
          "package": "meta-par",
          "partial": "WS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:WS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTracks the number of consecutive times this worker has\n invoked a \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e and received \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. This is used\n to implement backoff in\n \u003ccode\u003e\u003ca\u003eBackoff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "consecutiveFailures",
          "package": "meta-par",
          "signature": "IORef Int",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "Tracks the number of consecutive times this worker has invoked WorkSearch and received Nothing This is used to implement backoff in Backoff",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "consecutiveFailures",
          "package": "meta-par",
          "partial": "Failures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:consecutiveFailures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a computation to happen in parallel.  The forked\n computation may exchange values with other computations using\n \u003ccode\u003eIVar\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "fork",
          "package": "meta-par",
          "signature": "m () -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Forks computation to happen in parallel The forked computation may exchange values with other computations using IVar",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "fork",
          "normalized": "a()-\u003ea()",
          "package": "meta-par",
          "signature": "m()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a variant of \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e that allows exceptions from child\n threads to propagate up to the parent thread.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "forkWithExceptions",
          "package": "meta-par",
          "signature": "(IO () -\u003e IO ThreadId)-\u003e String-\u003e IO () -\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Produces variant of forkOn that allows exceptions from child threads to propagate up to the parent thread",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "forkWithExceptions",
          "normalized": "(IO()-\u003eIO ThreadId)-\u003eString-\u003eIO()-\u003eIO ThreadId",
          "package": "meta-par",
          "partial": "With Exceptions",
          "signature": "(IO()-\u003eIO ThreadId)-\u003eString-\u003eIO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:forkWithExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "get",
          "package": "meta-par",
          "signature": "future a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "get",
          "normalized": "a b-\u003ec b",
          "package": "meta-par",
          "signature": "future a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA per-thread source of unique identifiers for\n \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003es. Multiply this value by \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e and add\n \u003ccode\u003e\u003ca\u003eno\u003c/a\u003e\u003c/code\u003e for uniqueness.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "ivarUID",
          "package": "meta-par",
          "signature": "HotVar Int",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "per-thread source of unique identifiers for IVar Multiply this value by getNumCapabilities and add no for uniqueness",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "ivarUID",
          "package": "meta-par",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:ivarUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA counter of how many extra workers are working on this\n capability. This situation arises during nested calls to\n \u003ccode\u003e\u003ca\u003erunMetaPar\u003c/a\u003e\u003c/code\u003e, and the worker loop kills workers as necessary\n to keep this value at \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "mortals",
          "package": "meta-par",
          "signature": "HotVar Int",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "counter of how many extra workers are working on this capability This situation arises during nested calls to runMetaPar and the worker loop kills workers as necessary to keep this value at",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "mortals",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:mortals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "new",
          "package": "meta-par",
          "signature": "m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "new",
          "package": "meta-par",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "newFull",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "newFull",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:newFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "newFull_",
          "package": "meta-par",
          "signature": "a -\u003e m (ivar a)",
          "type": "method"
        },
        "index": {
          "description": "creates new IVar that contains value head-strict only",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "newFull_",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "partial": "Full",
          "signature": "a-\u003em(ivar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:newFull_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapability number\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "no",
          "package": "meta-par",
          "signature": "Int",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "Capability number",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "no",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:no"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "put",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "put",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.  \n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "put_",
          "package": "meta-par",
          "signature": "ivar a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "like put but only head-strict rather than fully-strict",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "put_",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "meta-par",
          "signature": "ivar a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenIO\u003c/a\u003e\u003c/code\u003e for random work stealing.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "rng",
          "package": "meta-par",
          "signature": "HotVar GenIO",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "GenIO for random work stealing",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "rng",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:rng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation, and return its result as a pure\n value. If the choice of \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e introduces non-determinism, use\n \u003ccode\u003e\u003ca\u003erunMetaParIO\u003c/a\u003e\u003c/code\u003e instead, as non-deterministic computations are not\n referentially-transparent.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "runMetaPar",
          "package": "meta-par",
          "signature": "Resource -\u003e Par a -\u003e a",
          "source": "src/Control-Monad-Par-Meta.html#runMetaPar",
          "type": "function"
        },
        "index": {
          "description": "Run Par computation and return its result as pure value If the choice of Resource introduces non-determinism use runMetaParIO instead as non-deterministic computations are not referentially-transparent",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "runMetaPar",
          "normalized": "Resource-\u003ePar a-\u003ea",
          "package": "meta-par",
          "partial": "Meta Par",
          "signature": "Resource-\u003ePar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:runMetaPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, allowing\n non-deterministic Meta-Par variants to be safely executed.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "runMetaParIO",
          "package": "meta-par",
          "signature": "Resource -\u003e Par a -\u003e IO a",
          "source": "src/Control-Monad-Par-Meta.html#runMetaParIO",
          "type": "function"
        },
        "index": {
          "description": "Run Par computation in the IO monad allowing non-deterministic Meta-Par variants to be safely executed",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "runMetaParIO",
          "normalized": "Resource-\u003ePar a-\u003eIO a",
          "package": "meta-par",
          "partial": "Meta Par IO",
          "signature": "Resource-\u003ePar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:runMetaParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "runSt",
          "package": "meta-par",
          "signature": "WorkSearch -\u003e HotVar GlobalState -\u003e IO ()",
          "source": "src/Control-Monad-Par-Meta.html#Startup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "runSt",
          "normalized": "WorkSearch-\u003eHotVar GlobalState-\u003eIO()",
          "package": "meta-par",
          "partial": "St",
          "signature": "WorkSearch-\u003eHotVar GlobalState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:runSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "runWS",
          "package": "meta-par",
          "signature": "Sched -\u003e HotVar GlobalState -\u003e IO (Maybe (Par ()))",
          "source": "src/Control-Monad-Par-Meta.html#WorkSearch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "runWS",
          "normalized": "Sched-\u003eHotVar GlobalState-\u003eIO(Maybe(Par()))",
          "package": "meta-par",
          "partial": "WS",
          "signature": "Sched-\u003eHotVar GlobalState-\u003eIO(Maybe(Par()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:runWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWorkSearch\u003c/a\u003e\u003c/code\u003e of this worker's associated \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "schedWs",
          "package": "meta-par",
          "signature": "WorkSearch",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "The WorkSearch of this worker associated Resource",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "schedWs",
          "package": "meta-par",
          "partial": "Ws",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:schedWs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a potentially-parallel computation, and return a \u003cem\u003efuture\u003c/em\u003e\n (or \u003cem\u003epromise\u003c/em\u003e) that can be used to query the result of the forked\n computataion.  \n\u003c/p\u003e\u003cpre\u003e  spawn p = do\n    r \u003c- new\n    fork (p \u003e\u003e= put r)\n    return r\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "spawn",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Create potentially-parallel computation and return future or promise that can be used to query the result of the forked computataion spawn do new fork put return",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "spawn",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a pure (rather than monadic) computation.  Fully-strict.\n\u003c/p\u003e\u003cpre\u003e  spawnP = spawn . return\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "spawnP",
          "package": "meta-par",
          "signature": "a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Spawn pure rather than monadic computation Fully-strict spawnP spawn return",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "spawnP",
          "normalized": "a-\u003eb(c a)",
          "package": "meta-par",
          "signature": "a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:spawnP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a Meta-Par worker that will stay on a given capability.\n\u003c/p\u003e\u003cp\u003eNote: this does not check whether workers already exist on the\n capability, and should be called appropriately. In particular, it\n is the caller's responsibility to manage things like the \u003ccode\u003emortal\u003c/code\u003e\n count of the given capability.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "spawnWorkerOnCPU",
          "package": "meta-par",
          "signature": "WorkSearch-\u003e Int-\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Spawn Meta-Par worker that will stay on given capability Note this does not check whether workers already exist on the capability and should be called appropriately In particular it is the caller responsibility to manage things like the mortal count of the given capability",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "spawnWorkerOnCPU",
          "normalized": "WorkSearch-\u003eInt-\u003eIO ThreadId",
          "package": "meta-par",
          "partial": "Worker On CPU",
          "signature": "WorkSearch-\u003eInt-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:spawnWorkerOnCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but the result is only head-strict, not fully-strict.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "spawn_",
          "package": "meta-par",
          "signature": "m a -\u003e m (future a)",
          "type": "method"
        },
        "index": {
          "description": "Like spawn but the result is only head-strict not fully-strict",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "spawn_",
          "normalized": "a b-\u003ea(c b)",
          "package": "meta-par",
          "signature": "m a-\u003em(future a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:spawn_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "startup",
          "package": "meta-par",
          "signature": "Startup",
          "source": "src/Control-Monad-Par-Meta.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "startup",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:startup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es of all worker threads on this capability\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "tids",
          "package": "meta-par",
          "signature": "HotVar (Set ThreadId)",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "The ThreadId of all worker threads on this capability",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "tids",
          "package": "meta-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:tids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Meta",
          "name": "workSearch",
          "package": "meta-par",
          "signature": "WorkSearch",
          "source": "src/Control-Monad-Par-Meta.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "workSearch",
          "package": "meta-par",
          "partial": "Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:workSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe local \u003ccode\u003e\u003ca\u003eWSDeque\u003c/a\u003e\u003c/code\u003e for this worker. The worker may push\n and pop from the left of its own \u003ccode\u003e\u003ca\u003eworkpool\u003c/a\u003e\u003c/code\u003e, but workers on\n other threads may only steal from the right.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Meta",
          "name": "workpool",
          "package": "meta-par",
          "signature": "WSDeque (Par ())",
          "source": "src/Control-Monad-Par-Meta.html#Sched",
          "type": "function"
        },
        "index": {
          "description": "The local WSDeque for this worker The worker may push and pop from the left of its own workpool but workers on other threads may only steal from the right",
          "hierarchy": "Control Monad Par Meta",
          "module": "Control.Monad.Par.Meta",
          "name": "workpool",
          "normalized": "WSDeque(Par())",
          "package": "meta-par",
          "signature": "WSDeque(Par())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meta-par/docs/Control-Monad-Par-Meta.html#v:workpool"
      }
    }
  ]
]