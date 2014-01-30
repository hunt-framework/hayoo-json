[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is an alternative version of \u003ca\u003eControl.Monad.Par\u003c/a\u003e in\n   which the \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e type provides \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations, by means of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e.\n   The price paid is that only \u003ccode\u003e\u003ca\u003erunParIO\u003c/a\u003e\u003c/code\u003e is available, not the pure \u003ccode\u003erunPar\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module uses the same default scheduler as \u003ca\u003eControl.Monad.Par\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.IO",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module is an alternative version of Control.Monad.Par in which the Par type provides IO operations by means of liftIO The price paid is that only runParIO is available not the pure runPar This module uses the same default scheduler as Control.Monad.Par",
        "hierarchy": "Control Monad Par IO",
        "module": "Control.Monad.Par.IO",
        "name": "IO",
        "normalized": "",
        "package": "monad-par",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-IO.html#t:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.IO",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVar",
        "fct-type": "data",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par IO",
        "module": "Control.Monad.Par.IO",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-IO.html#t:ParIO",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around an underlying Par type which allows IO.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.IO",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-IO.html#ParIO",
        "fct-type": "data",
        "title": "ParIO"
      },
      "index": {
        "description": "wrapper around an underlying Par type which allows IO",
        "hierarchy": "Control Monad Par IO",
        "module": "Control.Monad.Par.IO",
        "name": "ParIO",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-IO.html#v:runParIO",
      "description": {
        "fct-descr": "\u003cp\u003eA run method which allows actual IO to occur on top of the Par\n   monad.  Of course this means that all the normal problems of\n   parallel IO computations are present, including nondeterminsm.\n\u003c/p\u003e\u003cp\u003eA simple example program:\n\u003c/p\u003e\u003cpre\u003e  runParIO (liftIO $ putStrLn \"hi\" :: ParIO ())\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Par.IO",
        "fct-package": "monad-par",
        "fct-signature": "ParIO a -\u003e IO a",
        "fct-source": "src/Control-Monad-Par-IO.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "run method which allows actual IO to occur on top of the Par monad Of course this means that all the normal problems of parallel IO computations are present including nondeterminsm simple example program runParIO liftIO putStrLn hi ParIO",
        "hierarchy": "Control Monad Par IO",
        "module": "Control.Monad.Par.IO",
        "name": "runParIO",
        "normalized": "ParIO a-\u003eIO a",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": "ParIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA scheduler for the Par monad based on directly performing IO\n actions when Par methods are called (i.e. without using a lazy\n trace data structure).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html",
        "fct-type": "module",
        "title": "Direct"
      },
      "index": {
        "description": "scheduler for the Par monad based on directly performing IO actions when Par methods are called i.e without using lazy trace data structure",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Direct",
        "normalized": "",
        "package": "monad-par",
        "partial": "Direct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#t:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVar",
        "fct-type": "newtype",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#t:IVarContents",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVarContents",
        "fct-type": "data",
        "title": "IVarContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "IVarContents",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#t:Par",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Par",
        "fct-type": "data",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#t:Sched",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "data",
        "title": "Sched"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Sched",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sched",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:Blocked",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Blocked [a -\u003e IO ()]",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVarContents",
        "fct-type": "function",
        "title": "Blocked"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Blocked",
        "normalized": "Blocked[a-\u003eIO()]",
        "package": "monad-par",
        "partial": "Blocked",
        "signature": "Blocked[a-\u003eIO()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:Empty",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Empty",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVarContents",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Empty",
        "normalized": "",
        "package": "monad-par",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:Full",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Full a",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVarContents",
        "fct-type": "function",
        "title": "Full"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Full",
        "normalized": "",
        "package": "monad-par",
        "partial": "Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "IVar (IORef (IVarContents a))",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#IVar",
        "fct-type": "function",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:Sched",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Sched",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "Sched"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "Sched",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sched",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:activeSessions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "HotVar (Set SessionID)",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "activeSessions"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "activeSessions",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sessions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:fork",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par () -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "fork",
        "normalized": "Par()-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "Par()-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eread the value in a \u003ccode\u003eIVar\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e can only return when the\n value has been written by a prior or parallel \u003ccode\u003eput\u003c/code\u003e to the same\n \u003ccode\u003eIVar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e Par a",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "read the value in IVar The get can only return when the value has been written by prior or parallel put to the same IVar",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "get",
        "normalized": "IVar a-\u003ePar a",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:idle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "HotVar [MVar Bool]",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "idle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "idle",
        "normalized": "HotVar[MVar Bool]",
        "package": "monad-par",
        "partial": "",
        "signature": "HotVar[MVar Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:isMain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Bool",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "isMain"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "isMain",
        "normalized": "",
        "package": "monad-par",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "creates new IVar",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "new",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:newFull",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#newFull",
        "fct-type": "function",
        "title": "newFull"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "newFull",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:newFull_",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#newFull_",
        "fct-type": "function",
        "title": "newFull_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "newFull_",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:no",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "!Int",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "no"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "no",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:put",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "put",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eput_\u003c/code\u003e is a version of \u003ccode\u003eput\u003c/code\u003e that is head-strict rather than fully-strict.\n   In this scheduler, puts immediately execute woken work in the current thread.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "put is version of put that is head-strict rather than fully-strict In this scheduler puts immediately execute woken work in the current thread",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "put_",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:rng",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "HotVar GenIO",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "rng"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "rng",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:runPar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "runPar",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:runParIO",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e IO a",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "runParIO",
        "normalized": "Par a-\u003eIO a",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": "Par a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:scheds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "[Sched]",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "scheds"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "scheds",
        "normalized": "[Sched]",
        "package": "monad-par",
        "partial": "",
        "signature": "[Sched]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:sessionCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "HotVar SessionID",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "sessionCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "sessionCounter",
        "normalized": "",
        "package": "monad-par",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:sessions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "HotVar [Session]",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "sessions"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "sessions",
        "normalized": "HotVar[Session]",
        "package": "monad-par",
        "partial": "",
        "signature": "HotVar[Session]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:spawn",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "spawn",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:spawn1_",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "(a -\u003e Par b) -\u003e a -\u003e Par (IVar b)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#spawn1_",
        "fct-type": "function",
        "title": "spawn1_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "spawn1_",
        "normalized": "(a-\u003ePar b)-\u003ea-\u003ePar(IVar b)",
        "package": "monad-par",
        "partial": "",
        "signature": "(a-\u003ePar b)-\u003ea-\u003ePar(IVar b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:spawnP",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#spawnP",
        "fct-type": "function",
        "title": "spawnP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "spawnP",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:spawn_",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Direct.html#spawn_",
        "fct-type": "function",
        "title": "spawn_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "spawn_",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Direct.html#v:workpool",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.Direct",
        "fct-package": "monad-par",
        "fct-signature": "WSDeque (Par ())",
        "fct-source": "src/Control-Monad-Par-Scheds-DirectInternal.html#Sched",
        "fct-type": "function",
        "title": "workpool"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Direct",
        "module": "Control.Monad.Par.Scheds.Direct",
        "name": "workpool",
        "normalized": "WSDeque(Par())",
        "package": "monad-par",
        "partial": "",
        "signature": "WSDeque(Par())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis scheduler uses sparks (par/pseq) directly, but only supplies\n   the \u003ccode\u003eMonad.Par.Class.ParFuture\u003c/code\u003e interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html",
        "fct-type": "module",
        "title": "Sparks"
      },
      "index": {
        "description": "This scheduler uses sparks par pseq directly but only supplies the Monad.Par.Class.ParFuture interface",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "Sparks",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sparks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#t:Future",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#Future",
        "fct-type": "data",
        "title": "Future"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "Future",
        "normalized": "",
        "package": "monad-par",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#t:Par",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#Par",
        "fct-type": "data",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:Done",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Done a",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#Par",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "Done",
        "normalized": "",
        "package": "monad-par",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:Future",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Future a",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#Future",
        "fct-type": "function",
        "title": "Future"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "Future",
        "normalized": "",
        "package": "monad-par",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:get",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Future a -\u003e Par a",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "get",
        "normalized": "Future a-\u003ePar a",
        "package": "monad-par",
        "partial": "",
        "signature": "Future a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:runPar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "runPar",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:spawn",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (Future a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "spawn",
        "normalized": "Par a-\u003ePar(Future a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(Future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:spawnP",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (Future a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#spawnP",
        "fct-type": "function",
        "title": "spawnP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "spawnP",
        "normalized": "a-\u003ePar(Future a)",
        "package": "monad-par",
        "partial": "",
        "signature": "a-\u003ePar(Future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Sparks.html#v:spawn_",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Sparks",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (Future a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Sparks.html#spawn_",
        "fct-type": "function",
        "title": "spawn_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Sparks",
        "module": "Control.Monad.Par.Scheds.Sparks",
        "name": "spawn_",
        "normalized": "Par a-\u003ePar(Future a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(Future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the scheduler described in the paper \u003ca\u003eA Monad for\n     Deterministic Parallelism\u003c/a\u003e.  It is based on a lazy \u003ccode\u003eTrace\u003c/code\u003e data\n     structure that separates the scheduler from the \u003ccode\u003ePar\u003c/code\u003e monad\n     method implementations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "This is the scheduler described in the paper Monad for Deterministic Parallelism It is based on lazy Trace data structure that separates the scheduler from the Par monad method implementations",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "monad-par",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#t:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVar",
        "fct-type": "data",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#t:Par",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Par",
        "fct-type": "data",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:fork",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par () -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "fork",
        "normalized": "Par()-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "Par()-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eread the value in a \u003ccode\u003eIVar\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e can only return when the\n value has been written by a prior or parallel \u003ccode\u003eput\u003c/code\u003e to the same\n \u003ccode\u003eIVar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e Par a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "read the value in IVar The get can only return when the value has been written by prior or parallel put to the same IVar",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "get",
        "normalized": "IVar a-\u003ePar a",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "creates new IVar",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "new",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:newFull",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull",
        "fct-type": "function",
        "title": "newFull"
      },
      "index": {
        "description": "creates new IVar that contains value",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "newFull",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:newFull_",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull_",
        "fct-type": "function",
        "title": "newFull_"
      },
      "index": {
        "description": "creates new IVar that contains value head-strict only",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "newFull_",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "put",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "like put but only head-strict rather than fully-strict",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "put_",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:runPar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "runPar",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:runParIO",
      "description": {
        "fct-descr": "\u003cp\u003eA version that avoids an internal \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e for calling\n   contexts that are already in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e IO a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "version that avoids an internal unsafePerformIO for calling contexts that are already in the IO monad",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "runParIO",
        "normalized": "Par a-\u003eIO a",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": "Par a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:spawn",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "spawn",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:spawnP",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawnP",
        "fct-type": "function",
        "title": "spawnP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "spawnP",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-Trace.html#v:spawn_",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.Trace",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawn_",
        "fct-type": "function",
        "title": "spawn_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds Trace",
        "module": "Control.Monad.Par.Scheds.Trace",
        "name": "spawn_",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the internals of the \u003ccode\u003ePar\u003c/code\u003e monad so that you\n can build your own scheduler or other extensions.  Do not use this\n module for purposes other than extending the \u003ccode\u003ePar\u003c/code\u003e monad with new\n functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html",
        "fct-type": "module",
        "title": "TraceInternal"
      },
      "index": {
        "description": "This module exposes the internals of the Par monad so that you can build your own scheduler or other extensions Do not use this module for purposes other than extending the Par monad with new functionality",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "TraceInternal",
        "normalized": "",
        "package": "monad-par",
        "partial": "Trace Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#t:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVar",
        "fct-type": "newtype",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#t:IVarContents",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVarContents",
        "fct-type": "data",
        "title": "IVarContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "IVarContents",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#t:Par",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Par",
        "fct-type": "newtype",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#t:Sched",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "data",
        "title": "Sched"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Sched",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sched",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#t:Trace",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "data",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Trace",
        "normalized": "",
        "package": "monad-par",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Blocked",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Blocked [a -\u003e Trace]",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVarContents",
        "fct-type": "function",
        "title": "Blocked"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Blocked",
        "normalized": "Blocked[a-\u003eTrace]",
        "package": "monad-par",
        "partial": "Blocked",
        "signature": "Blocked[a-\u003eTrace]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Done",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Done",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Done",
        "normalized": "",
        "package": "monad-par",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Empty",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Empty",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVarContents",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Empty",
        "normalized": "",
        "package": "monad-par",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Fork",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Fork Trace Trace",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "Fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Fork",
        "normalized": "",
        "package": "monad-par",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Full",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Full a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVarContents",
        "fct-type": "function",
        "title": "Full"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Full",
        "normalized": "",
        "package": "monad-par",
        "partial": "Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Get",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "forall a . Get (IVar a) (a -\u003e Trace)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Get",
        "normalized": "a b Get(IVar b)(b-\u003eTrace)",
        "package": "monad-par",
        "partial": "Get",
        "signature": "forall a Get(IVar a)(a-\u003eTrace)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:IVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IVar (IORef (IVarContents a))",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVar",
        "fct-type": "function",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:LiftIO",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "forall a . LiftIO (IO a) (a -\u003e Trace)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "LiftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "LiftIO",
        "normalized": "a b LiftIO(IO b)(b-\u003eTrace)",
        "package": "monad-par",
        "partial": "Lift IO",
        "signature": "forall a LiftIO(IO a)(a-\u003eTrace)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:New",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "forall a . New (IVarContents a) (IVar a -\u003e Trace)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "New"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "New",
        "normalized": "a b New(IVarContents b)(IVar b-\u003eTrace)",
        "package": "monad-par",
        "partial": "New",
        "signature": "forall a New(IVarContents a)(IVar a-\u003eTrace)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Par",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Par",
        "fct-type": "function",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Put",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "forall a . Put (IVar a) a Trace",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Put",
        "normalized": "",
        "package": "monad-par",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Sched",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Sched",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "function",
        "title": "Sched"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Sched",
        "normalized": "",
        "package": "monad-par",
        "partial": "Sched",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:Yield",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Yield Trace",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Trace",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "Yield",
        "normalized": "",
        "package": "monad-par",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eread the value in a \u003ccode\u003eIVar\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e can only return when the\n value has been written by a prior or parallel \u003ccode\u003eput\u003c/code\u003e to the same\n \u003ccode\u003eIVar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e Par a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "read the value in IVar The get can only return when the value has been written by prior or parallel put to the same IVar",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "get",
        "normalized": "IVar a-\u003ePar a",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:idle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IORef [MVar Bool]",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "function",
        "title": "idle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "idle",
        "normalized": "IORef[MVar Bool]",
        "package": "monad-par",
        "partial": "",
        "signature": "IORef[MVar Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "creates new IVar",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "new",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:newFull",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull",
        "fct-type": "function",
        "title": "newFull"
      },
      "index": {
        "description": "creates new IVar that contains value",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "newFull",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:newFull_",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull_",
        "fct-type": "function",
        "title": "newFull_"
      },
      "index": {
        "description": "creates new IVar that contains value head-strict only",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "newFull_",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:no",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "!Int",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "function",
        "title": "no"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "no",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:pollIVar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#pollIVar",
        "fct-type": "function",
        "title": "pollIVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "pollIVar",
        "normalized": "IVar a-\u003eIO(Maybe a)",
        "package": "monad-par",
        "partial": "IVar",
        "signature": "IVar a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "put",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "like put but only head-strict rather than fully-strict",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "put_",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:runCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "(a -\u003e Trace) -\u003e Trace",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Par",
        "fct-type": "function",
        "title": "runCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "runCont",
        "normalized": "(a-\u003eTrace)-\u003eTrace",
        "package": "monad-par",
        "partial": "Cont",
        "signature": "(a-\u003eTrace)-\u003eTrace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:runPar",
      "description": {
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "runPar",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:runParAsync",
      "description": {
        "fct-descr": "\u003cp\u003eAn asynchronous version in which the main thread of control in a\n Par computation can return while forked computations still run in\n the background.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runParAsync",
        "fct-type": "function",
        "title": "runParAsync"
      },
      "index": {
        "description": "An asynchronous version in which the main thread of control in Par computation can return while forked computations still run in the background",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "runParAsync",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par Async",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:runParIO",
      "description": {
        "fct-descr": "\u003cp\u003eA version that avoids an internal \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e for calling\n   contexts that are already in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e IO a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "version that avoids an internal unsafePerformIO for calling contexts that are already in the IO monad",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "runParIO",
        "normalized": "Par a-\u003eIO a",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": "Par a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:sched",
      "description": {
        "fct-descr": "\u003cp\u003eThe main scheduler loop.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Bool -\u003e Sched -\u003e Trace -\u003e IO ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#sched",
        "fct-type": "function",
        "title": "sched"
      },
      "index": {
        "description": "The main scheduler loop",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "sched",
        "normalized": "Bool-\u003eSched-\u003eTrace-\u003eIO()",
        "package": "monad-par",
        "partial": "",
        "signature": "Bool-\u003eSched-\u003eTrace-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:scheds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "[Sched]",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "function",
        "title": "scheds"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "scheds",
        "normalized": "[Sched]",
        "package": "monad-par",
        "partial": "",
        "signature": "[Sched]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:workpool",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "IORef [Trace]",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Sched",
        "fct-type": "function",
        "title": "workpool"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "workpool",
        "normalized": "IORef[Trace]",
        "package": "monad-par",
        "partial": "",
        "signature": "IORef[Trace]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par-Scheds-TraceInternal.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eAllows other parallel computations to progress.  (should not be\n necessary in most cases).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Scheds.TraceInternal",
        "fct-package": "monad-par",
        "fct-signature": "Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Allows other parallel computations to progress should not be necessary in most cases",
        "hierarchy": "Control Monad Par Scheds TraceInternal",
        "module": "Control.Monad.Par.Scheds.TraceInternal",
        "name": "yield",
        "normalized": "Par()",
        "package": "monad-par",
        "partial": "",
        "signature": "Par()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003emonad-par\u003c/code\u003e package provides a family of \u003ccode\u003ePar\u003c/code\u003e monads, for\n  speeding up pure computations using parallel processors.  (for a similar\n  programming model for use with \u003ccode\u003eIO\u003c/code\u003e, see \u003ca\u003eControl.Monad.Par.IO\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eThe result of a given \u003ccode\u003ePar\u003c/code\u003e computation is always the same - i.e. it\n  is deterministic, but the computation may be performed more quickly\n  if there are processors available to share the work.\n\u003c/p\u003e\u003cp\u003eFor example, the following program fragment computes the values of\n  \u003ccode\u003e(f x)\u003c/code\u003e and \u003ccode\u003e(g x)\u003c/code\u003e in parallel, and returns a pair of their results:\n\u003c/p\u003e\u003cpre\u003e  runPar $ do\n      fx \u003c- spawn (return (f x))  -- start evaluating (f x)\n      gx \u003c- spawn (return (g x))  -- start evaluating (g x)\n      a \u003c- get fx       -- wait for fx\n      b \u003c- get gx       -- wait for gx\n      return (a,b)      -- return results\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ePar\u003c/code\u003e can be used for specifying pure parallel computations in\n  which the order of the computation is not known beforehand.\n  The programmer specifies how information flows from one\n  part of the computation to another, but not the order in which\n  computations will be evaluated at runtime.  Information flow is\n  described using \u003ca\u003evariables\u003c/a\u003e called \u003ccode\u003eIVar\u003c/code\u003es, which support \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e operations.  For example, suppose you have a problem that\n  can be expressed as a network with four nodes, where \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e\n  require the value of \u003ccode\u003ea\u003c/code\u003e, and \u003ccode\u003ed\u003c/code\u003e requires the value of \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e                       a\n                      / \\               \n                     b   c             \n                      \\ /  \n                       d\n\u003c/pre\u003e\u003cp\u003eThen you could express this in the \u003ccode\u003ePar\u003c/code\u003e monad like this:\n\u003c/p\u003e\u003cpre\u003e   runPar $ do\n       [a,b,c,d] \u003c- sequence [new,new,new,new]\n       fork $ do x \u003c- get a; put b (x+1)\n       fork $ do x \u003c- get a; put c (x+2)\n       fork $ do x \u003c- get b; y \u003c- get c; put d (x+y)\n       fork $ do put a (3 :: Int)\n       get d\n\u003c/pre\u003e\u003cp\u003eThe result of the above computation is always 9.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e operation\n  waits until its input is available; multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same\n  \u003ccode\u003eIVar\u003c/code\u003e are not allowed, and result in a runtime error.  Values\n  stored in \u003ccode\u003eIVar\u003c/code\u003es are usually fully evaluated (although there are\n  ways provided to pass lazy values if necessary).\n\u003c/p\u003e\u003cp\u003eIn the above example, \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e will be evaluated in parallel.\n  In practice the work involved at each node is too small here to see\n  the benefits of parallelism though: typically each node should\n  involve much more work.  The granularity is completely under your\n  control - too small and the overhead of the \u003ccode\u003ePar\u003c/code\u003e monad will\n  outweigh any parallelism benefits, whereas if the nodes are too\n  large then there might not be enough parallelism to use all the\n  available processors.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003eControl.Parallel\u003c/code\u003e, in \u003ccode\u003eControl.Monad.Par\u003c/code\u003e parallelism is\n  not combined with laziness, so sharing and granulairty are\n  completely under the control of the programmer.  New units of\n  parallel work are only created by \u003ccode\u003efork\u003c/code\u003e and a few other\n  combinators.\n\u003c/p\u003e\u003cp\u003eThe default implementation is based on a work-stealing scheduler\n  that divides the work as evenly as possible between the available\n  processors at runtime.  Other schedulers are available that are\n  based on different policies and have different performance\n  characteristics.  To use one of these other schedulers, just import\n  its module instead of \u003ca\u003eControl.Monad.Par\u003c/a\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eControl.Monad.Par.Scheds.Trace\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eControl.Monad.Par.Scheds.Sparks\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor more information on the programming model, please see these sources:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The wiki/tutorial (\u003ca\u003ehttp://www.haskell.org/haskellwiki/Par_Monad:_A_Parallelism_Tutorial\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e The original paper (\u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/papers/haskell2011_monad-par.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e Tutorial slides (\u003ca\u003ehttp://community.haskell.org/~simonmar/slides/CUFP.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e Other slides: (\u003ca\u003ehttp://www.cs.ox.ac.uk/ralf.hinze/WG2.8/28/slides/simon.pdf\u003c/a\u003e,\n                      \u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/talks/2011_HaskellSymposium_ParMonad.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par.html",
        "fct-type": "module",
        "title": "Par"
      },
      "index": {
        "description": "The monad-par package provides family of Par monads for speeding up pure computations using parallel processors for similar programming model for use with IO see Control.Monad.Par.IO The result of given Par computation is always the same i.e it is deterministic but the computation may be performed more quickly if there are processors available to share the work For example the following program fragment computes the values of and in parallel and returns pair of their results runPar do fx spawn return start evaluating gx spawn return start evaluating get fx wait for fx get gx wait for gx return return results Par can be used for specifying pure parallel computations in which the order of the computation is not known beforehand The programmer specifies how information flows from one part of the computation to another but not the order in which computations will be evaluated at runtime Information flow is described using variables called IVar which support put and get operations For example suppose you have problem that can be expressed as network with four nodes where and require the value of and requires the value of and Then you could express this in the Par monad like this runPar do sequence new new new new fork do get put fork do get put fork do get get put fork do put Int get The result of the above computation is always The get operation waits until its input is available multiple put to the same IVar are not allowed and result in runtime error Values stored in IVar are usually fully evaluated although there are ways provided to pass lazy values if necessary In the above example and will be evaluated in parallel In practice the work involved at each node is too small here to see the benefits of parallelism though typically each node should involve much more work The granularity is completely under your control too small and the overhead of the Par monad will outweigh any parallelism benefits whereas if the nodes are too large then there might not be enough parallelism to use all the available processors Unlike Control.Parallel in Control.Monad.Par parallelism is not combined with laziness so sharing and granulairty are completely under the control of the programmer New units of parallel work are only created by fork and few other combinators The default implementation is based on work-stealing scheduler that divides the work as evenly as possible between the available processors at runtime Other schedulers are available that are based on different policies and have different performance characteristics To use one of these other schedulers just import its module instead of Control.Monad.Par Control.Monad.Par.Scheds.Trace Control.Monad.Par.Scheds.Sparks For more information on the programming model please see these sources The wiki tutorial http www.haskell.org haskellwiki Par Monad Parallelism Tutorial The original paper http www.cs.indiana.edu rrnewton papers haskell2011 monad-par.pdf Tutorial slides http community.haskell.org simonmar slides CUFP.pdf Other slides http www.cs.ox.ac.uk ralf.hinze WG2.8 slides simon.pdf http www.cs.indiana.edu rrnewton talks HaskellSymposium ParMonad.pdf",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#t:IVar",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#IVar",
        "fct-type": "data",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "IVar",
        "normalized": "",
        "package": "monad-par",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#t:NFData",
      "description": {
        "fct-descr": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "class of types that can be fully evaluated",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "NFData",
        "normalized": "",
        "package": "monad-par",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#t:Par",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#Par",
        "fct-type": "data",
        "title": "Par"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "Par",
        "normalized": "",
        "package": "monad-par",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:fork",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par () -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "fork",
        "normalized": "Par()-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "Par()-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eread the value in a \u003ccode\u003eIVar\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e can only return when the\n value has been written by a prior or parallel \u003ccode\u003eput\u003c/code\u003e to the same\n \u003ccode\u003eIVar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e Par a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "read the value in IVar The get can only return when the value has been written by prior or parallel put to the same IVar",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "get",
        "normalized": "IVar a-\u003ePar a",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "creates new IVar",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "new",
        "normalized": "",
        "package": "monad-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:newFull",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull",
        "fct-type": "function",
        "title": "newFull"
      },
      "index": {
        "description": "creates new IVar that contains value",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "newFull",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:newFull_",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#newFull_",
        "fct-type": "function",
        "title": "newFull_"
      },
      "index": {
        "description": "creates new IVar that contains value head-strict only",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "newFull_",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "Full",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "put",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "IVar a -\u003e a -\u003e Par ()",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "like put but only head-strict rather than fully-strict",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "put_",
        "normalized": "IVar a-\u003ea-\u003ePar()",
        "package": "monad-par",
        "partial": "",
        "signature": "IVar a-\u003ea-\u003ePar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:runPar",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "runPar",
        "normalized": "Par a-\u003ea",
        "package": "monad-par",
        "partial": "Par",
        "signature": "Par a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:runParIO",
      "description": {
        "fct-descr": "\u003cp\u003eA version that avoids an internal \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e for calling\n   contexts that are already in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e IO a",
        "fct-source": "src/Control-Monad-Par-Scheds-TraceInternal.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "version that avoids an internal unsafePerformIO for calling contexts that are already in the IO monad",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "runParIO",
        "normalized": "Par a-\u003eIO a",
        "package": "monad-par",
        "partial": "Par IO",
        "signature": "Par a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:spawn",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "spawn",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:spawnP",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawnP",
        "fct-type": "function",
        "title": "spawnP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "spawnP",
        "normalized": "a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "a-\u003ePar(IVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-par/docs/Control-Monad-Par.html#v:spawn_",
      "description": {
        "fct-module": "Control.Monad.Par",
        "fct-package": "monad-par",
        "fct-signature": "Par a -\u003e Par (IVar a)",
        "fct-source": "src/Control-Monad-Par-Scheds-Trace.html#spawn_",
        "fct-type": "function",
        "title": "spawn_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Par",
        "module": "Control.Monad.Par",
        "name": "spawn_",
        "normalized": "Par a-\u003ePar(IVar a)",
        "package": "monad-par",
        "partial": "",
        "signature": "Par a-\u003ePar(IVar a)"
      }
    }
  }
]