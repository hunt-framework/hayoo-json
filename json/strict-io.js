[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references of strict values in the \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe type of references remains the same as in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n and is just re-exported here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "module",
        "fct-source": "src/Data-IORef-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Mutable references of strict values in the SIO monad The type of references remains the same as in the IO monad and is just re-exported here",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "strict-io",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#t:IORef",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IORef"
      },
      "index": {
        "description": "mutable variable in the IO monad",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "IORef",
        "normalized": "",
        "package": "strict-io",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:atomicModifyIORef",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically modifies the contents of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is useful for using \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e in a safe way in a multithreaded program.\n If you only have one \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, then using \u003ccode\u003e\u003ca\u003eatomicModifyIORef\u003c/a\u003e\u003c/code\u003e to access and modify\n it will prevent race conditions.\n\u003c/p\u003e\u003cp\u003eExtending the atomicity to multiple \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es is problematic, so it is recommended that\n if you need to do anything more complicated then using \u003ca\u003eControl.Concurrent.MVar.MVar\u003c/a\u003e\n instead is a good idea.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "IORef sa -\u003e (sa -\u003e (sa, sb)) -\u003e SIO sb",
        "fct-source": "src/Data-IORef-Strict.html#atomicModifyIORef",
        "fct-type": "function",
        "title": "atomicModifyIORef"
      },
      "index": {
        "description": "Atomically modifies the contents of an IORef This function is useful for using IORef in safe way in multithreaded program If you only have one IORef then using atomicModifyIORef to access and modify it will prevent race conditions Extending the atomicity to multiple IORef is problematic so it is recommended that if you need to do anything more complicated then using Control.Concurrent.MVar.MVar instead is good idea",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "atomicModifyIORef",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eSIO b",
        "package": "strict-io",
        "partial": "Modify IORef",
        "signature": "IORef sa-\u003e(sa-\u003e(sa,sb))-\u003eSIO sb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:mkWeakIORef",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eWeak\u003c/a\u003e\u003c/code\u003e pointer to an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "IORef a -\u003e SIO () -\u003e SIO (Weak (IORef a))",
        "fct-source": "src/Data-IORef-Strict.html#mkWeakIORef",
        "fct-type": "function",
        "title": "mkWeakIORef"
      },
      "index": {
        "description": "Make Weak pointer to an IORef",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "mkWeakIORef",
        "normalized": "IORef a-\u003eSIO()-\u003eSIO(Weak(IORef a))",
        "package": "strict-io",
        "partial": "Weak IORef",
        "signature": "IORef a-\u003eSIO()-\u003eSIO(Weak(IORef a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:modifyIORef",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "IORef sa -\u003e (sa -\u003e sa) -\u003e SIO ()",
        "fct-source": "src/Data-IORef-Strict.html#modifyIORef",
        "fct-type": "function",
        "title": "modifyIORef"
      },
      "index": {
        "description": "Mutate the contents of an IORef",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "modifyIORef",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eSIO()",
        "package": "strict-io",
        "partial": "IORef",
        "signature": "IORef sa-\u003e(sa-\u003esa)-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:newIORef",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, but force the value before storing it.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "sa -\u003e SIO (IORef sa)",
        "fct-source": "src/Data-IORef-Strict.html#newIORef",
        "fct-type": "function",
        "title": "newIORef"
      },
      "index": {
        "description": "Build new IORef but force the value before storing it",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "newIORef",
        "normalized": "a-\u003eSIO(IORef a)",
        "package": "strict-io",
        "partial": "IORef",
        "signature": "sa-\u003eSIO(IORef sa)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:readIORef",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "IORef a -\u003e SIO a",
        "fct-source": "src/Data-IORef-Strict.html#readIORef",
        "fct-type": "function",
        "title": "readIORef"
      },
      "index": {
        "description": "Read the value of an IORef",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "readIORef",
        "normalized": "IORef a-\u003eSIO a",
        "package": "strict-io",
        "partial": "IORef",
        "signature": "IORef a-\u003eSIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:writeIORef",
      "description": {
        "fct-descr": "\u003cp\u003eDeeply force a value and write it into an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Strict",
        "fct-package": "strict-io",
        "fct-signature": "IORef sa -\u003e sa -\u003e SIO ()",
        "fct-source": "src/Data-IORef-Strict.html#writeIORef",
        "fct-type": "function",
        "title": "writeIORef"
      },
      "index": {
        "description": "Deeply force value and write it into an IORef",
        "hierarchy": "Data IORef Strict",
        "module": "Data.IORef.Strict",
        "name": "writeIORef",
        "normalized": "IORef a-\u003ea-\u003eSIO()",
        "package": "strict-io",
        "partial": "IORef",
        "signature": "IORef sa-\u003esa-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the internals of \u003ca\u003eSystem.IO.Strict\u003c/a\u003e so that other packages can extend the\n \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e monad. This module has to be used with great care: by lifting a lazy\n function or a function that let leaks its lazy arguments, one breaks the only purpose\n of the \u003ca\u003eSystem.IO.Strict\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Strict-Internals.html",
        "fct-type": "module",
        "title": "Internals"
      },
      "index": {
        "description": "This module exports the internals of System.IO.Strict so that other packages can extend the SIO monad This module has to be used with great care by lifting lazy function or function that let leaks its lazy arguments one breaks the only purpose of the System.IO.Strict module",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "Internals",
        "normalized": "",
        "package": "strict-io",
        "partial": "Internals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#t:SIO",
      "description": {
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "newtype",
        "fct-source": "src/System-IO-Strict-Internals.html#SIO",
        "fct-type": "newtype",
        "title": "SIO"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "SIO",
        "normalized": "",
        "package": "strict-io",
        "partial": "SIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:SIO",
      "description": {
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "SIO",
        "fct-source": "src/System-IO-Strict-Internals.html#SIO",
        "fct-type": "function",
        "title": "SIO"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "SIO",
        "normalized": "",
        "package": "strict-io",
        "partial": "SIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:rawRun",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "IO a",
        "fct-source": "src/System-IO-Strict-Internals.html#SIO",
        "fct-type": "function",
        "title": "rawRun"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "rawRun",
        "normalized": "",
        "package": "strict-io",
        "partial": "Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:return-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA stricter version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, that works for every monad.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "sa -\u003e m sa",
        "fct-source": "src/System-IO-Strict-Internals.html#return%27",
        "fct-type": "function",
        "title": "return'"
      },
      "index": {
        "description": "stricter version of return that works for every monad",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "return'",
        "normalized": "a-\u003eb a",
        "package": "strict-io",
        "partial": "",
        "signature": "sa-\u003em sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e allows to return to the wider world of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "SIO sa -\u003e IO sa",
        "fct-source": "src/System-IO-Strict-Internals.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "run allows to return to the wider world of IO",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "run",
        "normalized": "SIO a-\u003eIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "SIO sa-\u003eIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap0",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation without arguments.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "IO a -\u003e SIO a",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap0",
        "fct-type": "function",
        "title": "wrap0"
      },
      "index": {
        "description": "Wraps strict IO computation without arguments",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap0",
        "normalized": "IO a-\u003eSIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "IO a-\u003eSIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap0-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a lazy \u003cem\u003eIO\u003c/em\u003e computation without arguments and forces its contents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "IO sa -\u003e SIO sa",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap0%27",
        "fct-type": "function",
        "title": "wrap0'"
      },
      "index": {
        "description": "Wraps lazy IO computation without arguments and forces its contents",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap0'",
        "normalized": "IO a-\u003eSIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "IO sa-\u003eSIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap1",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with a single argument.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e IO b) -\u003e a -\u003e SIO b",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap1",
        "fct-type": "function",
        "title": "wrap1"
      },
      "index": {
        "description": "Wraps strict IO computation with single argument",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap1",
        "normalized": "(a-\u003eIO b)-\u003ea-\u003eSIO b",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003ea-\u003eSIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a lazy \u003cem\u003eIO\u003c/em\u003e computation with a single argument and forces its contents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e IO sb) -\u003e a -\u003e SIO sb",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap1%27",
        "fct-type": "function",
        "title": "wrap1'"
      },
      "index": {
        "description": "Wraps lazy IO computation with single argument and forces its contents",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap1'",
        "normalized": "(a-\u003eIO b)-\u003ea-\u003eSIO b",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eIO sb)-\u003ea-\u003eSIO sb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap2",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e b -\u003e IO c) -\u003e a -\u003e b -\u003e SIO c",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap2",
        "fct-type": "function",
        "title": "wrap2"
      },
      "index": {
        "description": "Wraps strict IO computation with two arguments",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap2",
        "normalized": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap2-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments and forces its contents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e b -\u003e IO sc) -\u003e a -\u003e b -\u003e SIO sc",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap2%27",
        "fct-type": "function",
        "title": "wrap2'"
      },
      "index": {
        "description": "Wraps strict IO computation with two arguments and forces its contents",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap2'",
        "normalized": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eb-\u003eIO sc)-\u003ea-\u003eb-\u003eSIO sc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap3",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e IO d) -\u003e a -\u003e b -\u003e c -\u003e SIO d",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap3",
        "fct-type": "function",
        "title": "wrap3"
      },
      "index": {
        "description": "Wraps strict IO computation with two arguments",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap3",
        "normalized": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap3-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments and forces its contents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict.Internals",
        "fct-package": "strict-io",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e IO sd) -\u003e a -\u003e b -\u003e c -\u003e SIO sd",
        "fct-source": "src/System-IO-Strict-Internals.html#wrap3%27",
        "fct-type": "function",
        "title": "wrap3'"
      },
      "index": {
        "description": "Wraps strict IO computation with two arguments and forces its contents",
        "hierarchy": "System IO Strict Internals",
        "module": "System.IO.Strict.Internals",
        "name": "wrap3'",
        "normalized": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d",
        "package": "strict-io",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003eIO sd)-\u003ea-\u003eb-\u003ec-\u003eSIO sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module wraps the functions of the \u003ca\u003eSystem.IO\u003c/a\u003e module at a different type namely \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe purpose of this module is to export only strict \u003cem\u003eIO\u003c/em\u003e functions, by strict\n we mean strict in the result. The arguments of these functions may only by partially forced,\n but when the function returns, the arguments can no longer be forced by the function.\n When the type of the value to be forced is polymorphic, a \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e constraint is added\n since we (internally) use \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e to force the value. Then we rely on the behavior\n of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances to provide the fact that any lazy argument passed to a \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e function\n will not leak-out after the call.\n\u003c/p\u003e\u003cp\u003eThese functions do not necessarily use their arguments completely but they do not hold\n or return any value that could depend on these arguments. If the original functions \n from \u003ca\u003eSystem.IO\u003c/a\u003e module were already strict, then this module just provides them\n at another type.\n Some functions from the original module are famously lazy like the \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e like\n functions: in this module their results are deeply forced.\n\u003c/p\u003e\u003cp\u003eIn Haskell, monad operations (\u003ccode\u003ereturn\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e) have to be lazy. Therefore the \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e\n monad is not completely strict (i.e. pure values can still be lazy). So in this module we\n expose the \u003ccode\u003e\u003ca\u003ereturn'\u003c/a\u003e\u003c/code\u003e function that forces the given value before putting it into the monad.\n\u003c/p\u003e\u003cp\u003eSince this module uses the same names as \u003ca\u003eSystem.IO\u003c/a\u003e, it is designed to be imported \u003cem\u003equalified\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e\n    import System.IO.Strict (SIO)\n    import qualified System.IO.Strict as SIO\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "This module wraps the functions of the System.IO module at different type namely SIO The purpose of this module is to export only strict IO functions by strict we mean strict in the result The arguments of these functions may only by partially forced but when the function returns the arguments can no longer be forced by the function When the type of the value to be forced is polymorphic NFData constraint is added since we internally use rnf to force the value Then we rely on the behavior of NFData instances to provide the fact that any lazy argument passed to SIO function will not leak-out after the call These functions do not necessarily use their arguments completely but they do not hold or return any value that could depend on these arguments If the original functions from System.IO module were already strict then this module just provides them at another type Some functions from the original module are famously lazy like the getContents like functions in this module their results are deeply forced In Haskell monad operations return and have to be lazy Therefore the SIO monad is not completely strict i.e pure values can still be lazy So in this module we expose the return function that forces the given value before putting it into the monad Since this module uses the same names as System.IO it is designed to be imported qualified import System.IO.Strict SIO import qualified System.IO.Strict as SIO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "strict-io",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#t:SIO",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Strict-Internals.html#SIO",
        "fct-type": "data",
        "title": "SIO"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "SIO",
        "normalized": "",
        "package": "strict-io",
        "partial": "SIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:appendFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "appendFile",
        "normalized": "FilePath-\u003eString-\u003eSIO()",
        "package": "strict-io",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:fix",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "(sa -\u003e SIO sa) -\u003e SIO sa",
        "fct-source": "src/System-IO-Strict.html#fix",
        "fct-type": "function",
        "title": "fix"
      },
      "index": {
        "description": "Note that fix is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "fix",
        "normalized": "(a-\u003eSIO a)-\u003eSIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "(sa-\u003eSIO sa)-\u003eSIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getChar",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO Char",
        "fct-source": "src/System-IO-Strict.html#getChar",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "getChar",
        "normalized": "",
        "package": "strict-io",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO String",
        "fct-source": "src/System-IO-Strict.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Note that getContents is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "getContents",
        "normalized": "",
        "package": "strict-io",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getLine",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO String",
        "fct-source": "src/System-IO-Strict.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "getLine",
        "normalized": "",
        "package": "strict-io",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hClose",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hClose",
        "fct-type": "function",
        "title": "hClose"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hClose",
        "normalized": "Handle-\u003eSIO()",
        "package": "strict-io",
        "partial": "Close",
        "signature": "Handle-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hFileSize",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Integer",
        "fct-source": "src/System-IO-Strict.html#hFileSize",
        "fct-type": "function",
        "title": "hFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hFileSize",
        "normalized": "Handle-\u003eSIO Integer",
        "package": "strict-io",
        "partial": "File Size",
        "signature": "Handle-\u003eSIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hFlush",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hFlush",
        "fct-type": "function",
        "title": "hFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hFlush",
        "normalized": "Handle-\u003eSIO()",
        "package": "strict-io",
        "partial": "Flush",
        "signature": "Handle-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBuf",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
        "fct-source": "src/System-IO-Strict.html#hGetBuf",
        "fct-type": "function",
        "title": "hGetBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetBuf",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
        "package": "strict-io",
        "partial": "Get Buf",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBufNonBlocking",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
        "fct-source": "src/System-IO-Strict.html#hGetBufNonBlocking",
        "fct-type": "function",
        "title": "hGetBufNonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetBufNonBlocking",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
        "package": "strict-io",
        "partial": "Get Buf Non Blocking",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBuffering",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO BufferMode",
        "fct-source": "src/System-IO-Strict.html#hGetBuffering",
        "fct-type": "function",
        "title": "hGetBuffering"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetBuffering",
        "normalized": "Handle-\u003eSIO BufferMode",
        "package": "strict-io",
        "partial": "Get Buffering",
        "signature": "Handle-\u003eSIO BufferMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetChar",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Char",
        "fct-source": "src/System-IO-Strict.html#hGetChar",
        "fct-type": "function",
        "title": "hGetChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetChar",
        "normalized": "Handle-\u003eSIO Char",
        "package": "strict-io",
        "partial": "Get Char",
        "signature": "Handle-\u003eSIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO String",
        "fct-source": "src/System-IO-Strict.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Note that hGetContents is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetContents",
        "normalized": "Handle-\u003eSIO String",
        "package": "strict-io",
        "partial": "Get Contents",
        "signature": "Handle-\u003eSIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetEcho",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hGetEcho",
        "fct-type": "function",
        "title": "hGetEcho"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetEcho",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Get Echo",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetLine",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO String",
        "fct-source": "src/System-IO-Strict.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetLine",
        "normalized": "Handle-\u003eSIO String",
        "package": "strict-io",
        "partial": "Get Line",
        "signature": "Handle-\u003eSIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetPosn",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO HandlePosn",
        "fct-source": "src/System-IO-Strict.html#hGetPosn",
        "fct-type": "function",
        "title": "hGetPosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetPosn",
        "normalized": "Handle-\u003eSIO HandlePosn",
        "package": "strict-io",
        "partial": "Get Posn",
        "signature": "Handle-\u003eSIO HandlePosn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsClosed",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsClosed",
        "fct-type": "function",
        "title": "hIsClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsClosed",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Closed",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsEOF",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsEOF",
        "fct-type": "function",
        "title": "hIsEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsEOF",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is EOF",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsOpen",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsOpen",
        "fct-type": "function",
        "title": "hIsOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsOpen",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Open",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsReadable",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsReadable",
        "fct-type": "function",
        "title": "hIsReadable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsReadable",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Readable",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsSeekable",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsSeekable",
        "fct-type": "function",
        "title": "hIsSeekable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsSeekable",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Seekable",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsTerminalDevice",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsTerminalDevice",
        "fct-type": "function",
        "title": "hIsTerminalDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsTerminalDevice",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Terminal Device",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsWritable",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hIsWritable",
        "fct-type": "function",
        "title": "hIsWritable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hIsWritable",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Is Writable",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hLookAhead",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Char",
        "fct-source": "src/System-IO-Strict.html#hLookAhead",
        "fct-type": "function",
        "title": "hLookAhead"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hLookAhead",
        "normalized": "Handle-\u003eSIO Char",
        "package": "strict-io",
        "partial": "Look Ahead",
        "signature": "Handle-\u003eSIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPrint",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e a -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hPrint",
        "fct-type": "function",
        "title": "hPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPrint",
        "normalized": "Handle-\u003ea-\u003eSIO()",
        "package": "strict-io",
        "partial": "Print",
        "signature": "Handle-\u003ea-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutBuf",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hPutBuf",
        "fct-type": "function",
        "title": "hPutBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPutBuf",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO()",
        "package": "strict-io",
        "partial": "Put Buf",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutBufNonBlocking",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
        "fct-source": "src/System-IO-Strict.html#hPutBufNonBlocking",
        "fct-type": "function",
        "title": "hPutBufNonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPutBufNonBlocking",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
        "package": "strict-io",
        "partial": "Put Buf Non Blocking",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutChar",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Char -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hPutChar",
        "fct-type": "function",
        "title": "hPutChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPutChar",
        "normalized": "Handle-\u003eChar-\u003eSIO()",
        "package": "strict-io",
        "partial": "Put Char",
        "signature": "Handle-\u003eChar-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutStr",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPutStr",
        "normalized": "Handle-\u003eString-\u003eSIO()",
        "package": "strict-io",
        "partial": "Put Str",
        "signature": "Handle-\u003eString-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutStrLn",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003eSIO()",
        "package": "strict-io",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hReady",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hReady",
        "fct-type": "function",
        "title": "hReady"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hReady",
        "normalized": "Handle-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Ready",
        "signature": "Handle-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSeek",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSeek",
        "fct-type": "function",
        "title": "hSeek"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSeek",
        "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eSIO()",
        "package": "strict-io",
        "partial": "Seek",
        "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetBinaryMode",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Bool -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSetBinaryMode",
        "fct-type": "function",
        "title": "hSetBinaryMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSetBinaryMode",
        "normalized": "Handle-\u003eBool-\u003eSIO()",
        "package": "strict-io",
        "partial": "Set Binary Mode",
        "signature": "Handle-\u003eBool-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetBuffering",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e BufferMode -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSetBuffering",
        "fct-type": "function",
        "title": "hSetBuffering"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSetBuffering",
        "normalized": "Handle-\u003eBufferMode-\u003eSIO()",
        "package": "strict-io",
        "partial": "Set Buffering",
        "signature": "Handle-\u003eBufferMode-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetEcho",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Bool -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSetEcho",
        "fct-type": "function",
        "title": "hSetEcho"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSetEcho",
        "normalized": "Handle-\u003eBool-\u003eSIO()",
        "package": "strict-io",
        "partial": "Set Echo",
        "signature": "Handle-\u003eBool-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetFileSize",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Integer -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSetFileSize",
        "fct-type": "function",
        "title": "hSetFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSetFileSize",
        "normalized": "Handle-\u003eInteger-\u003eSIO()",
        "package": "strict-io",
        "partial": "Set File Size",
        "signature": "Handle-\u003eInteger-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetPosn",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "HandlePosn -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#hSetPosn",
        "fct-type": "function",
        "title": "hSetPosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hSetPosn",
        "normalized": "HandlePosn-\u003eSIO()",
        "package": "strict-io",
        "partial": "Set Posn",
        "signature": "HandlePosn-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hShow",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO String",
        "fct-source": "src/System-IO-Strict.html#hShow",
        "fct-type": "function",
        "title": "hShow"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hShow",
        "normalized": "Handle-\u003eSIO String",
        "package": "strict-io",
        "partial": "Show",
        "signature": "Handle-\u003eSIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hTell",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e SIO Integer",
        "fct-source": "src/System-IO-Strict.html#hTell",
        "fct-type": "function",
        "title": "hTell"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hTell",
        "normalized": "Handle-\u003eSIO Integer",
        "package": "strict-io",
        "partial": "Tell",
        "signature": "Handle-\u003eSIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hWaitForInput",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle -\u003e Int -\u003e SIO Bool",
        "fct-source": "src/System-IO-Strict.html#hWaitForInput",
        "fct-type": "function",
        "title": "hWaitForInput"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hWaitForInput",
        "normalized": "Handle-\u003eInt-\u003eSIO Bool",
        "package": "strict-io",
        "partial": "Wait For Input",
        "signature": "Handle-\u003eInt-\u003eSIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:interact",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "(String -\u003e String) -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "interact",
        "normalized": "(String-\u003eString)-\u003eSIO()",
        "package": "strict-io",
        "partial": "",
        "signature": "(String-\u003eString)-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:isEOF",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO Bool",
        "fct-source": "src/System-IO-Strict.html#isEOF",
        "fct-type": "function",
        "title": "isEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "isEOF",
        "normalized": "",
        "package": "strict-io",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openBinaryFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e IOMode -\u003e SIO Handle",
        "fct-source": "src/System-IO-Strict.html#openBinaryFile",
        "fct-type": "function",
        "title": "openBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "openBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003eSIO Handle",
        "package": "strict-io",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003eSIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openBinaryTempFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e String -\u003e SIO (FilePath, Handle)",
        "fct-source": "src/System-IO-Strict.html#openBinaryTempFile",
        "fct-type": "function",
        "title": "openBinaryTempFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "openBinaryTempFile",
        "normalized": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
        "package": "strict-io",
        "partial": "Binary Temp File",
        "signature": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e IOMode -\u003e SIO Handle",
        "fct-source": "src/System-IO-Strict.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003eSIO Handle",
        "package": "strict-io",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003eSIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openTempFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e String -\u003e SIO (FilePath, Handle)",
        "fct-source": "src/System-IO-Strict.html#openTempFile",
        "fct-type": "function",
        "title": "openTempFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "openTempFile",
        "normalized": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
        "package": "strict-io",
        "partial": "Temp File",
        "signature": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:print",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "a -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "print",
        "normalized": "a-\u003eSIO()",
        "package": "strict-io",
        "partial": "",
        "signature": "a-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putChar",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Char -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "putChar",
        "normalized": "Char-\u003eSIO()",
        "package": "strict-io",
        "partial": "Char",
        "signature": "Char-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putStr",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "putStr",
        "normalized": "String-\u003eSIO()",
        "package": "strict-io",
        "partial": "Str",
        "signature": "String-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putStrLn",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "putStrLn",
        "normalized": "String-\u003eSIO()",
        "package": "strict-io",
        "partial": "Str Ln",
        "signature": "String-\u003eSIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "String -\u003e SIO sa",
        "fct-source": "src/System-IO-Strict.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Note that read is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "read",
        "normalized": "String-\u003eSIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "String-\u003eSIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e SIO String",
        "fct-source": "src/System-IO-Strict.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Note that readFile is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "readFile",
        "normalized": "FilePath-\u003eSIO String",
        "package": "strict-io",
        "partial": "File",
        "signature": "FilePath-\u003eSIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:readLn",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO sa",
        "fct-source": "src/System-IO-Strict.html#readLn",
        "fct-type": "function",
        "title": "readLn"
      },
      "index": {
        "description": "Note that readLn is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "readLn",
        "normalized": "",
        "package": "strict-io",
        "partial": "Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:return-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA stricter version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, that works for every monad.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "sa -\u003e m sa",
        "fct-source": "src/System-IO-Strict-Internals.html#return%27",
        "fct-type": "function",
        "title": "return'"
      },
      "index": {
        "description": "stricter version of return that works for every monad",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "return'",
        "normalized": "a-\u003eb a",
        "package": "strict-io",
        "partial": "",
        "signature": "sa-\u003em sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e allows to return to the wider world of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "SIO sa -\u003e IO sa",
        "fct-source": "src/System-IO-Strict-Internals.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "run allows to return to the wider world of IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "run",
        "normalized": "SIO a-\u003eIO a",
        "package": "strict-io",
        "partial": "",
        "signature": "SIO sa-\u003eIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stderr",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle",
        "fct-source": "src/System-IO-Strict.html#stderr",
        "fct-type": "function",
        "title": "stderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "stderr",
        "normalized": "",
        "package": "strict-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stdin",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle",
        "fct-source": "src/System-IO-Strict.html#stdin",
        "fct-type": "function",
        "title": "stdin"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "stdin",
        "normalized": "",
        "package": "strict-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stdout",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "Handle",
        "fct-source": "src/System-IO-Strict.html#stdout",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "stdout",
        "normalized": "",
        "package": "strict-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:withBinaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e SIO sr) -\u003e SIO sr",
        "fct-source": "src/System-IO-Strict.html#withBinaryFile",
        "fct-type": "function",
        "title": "withBinaryFile"
      },
      "index": {
        "description": "Note that withBinaryFile is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "withBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO a)-\u003eSIO a",
        "package": "strict-io",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO sr)-\u003eSIO sr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:withFile",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e SIO sr) -\u003e SIO sr",
        "fct-source": "src/System-IO-Strict.html#withFile",
        "fct-type": "function",
        "title": "withFile"
      },
      "index": {
        "description": "Note that withFile is stricter than its counterpart in System.IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "withFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO a)-\u003eSIO a",
        "package": "strict-io",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO sr)-\u003eSIO sr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:writeFile",
      "description": {
        "fct-module": "System.IO.Strict",
        "fct-package": "strict-io",
        "fct-signature": "FilePath -\u003e String -\u003e SIO ()",
        "fct-source": "src/System-IO-Strict.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "writeFile",
        "normalized": "FilePath-\u003eString-\u003eSIO()",
        "package": "strict-io",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eSIO()"
      }
    }
  }
]