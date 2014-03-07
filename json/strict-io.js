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
        "word": "strict-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references of strict values in the \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe type of references remains the same as in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n and is just re-exported here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IORef.Strict",
          "name": "Strict",
          "package": "strict-io",
          "source": "src/Data-IORef-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable references of strict values in the SIO monad The type of references remains the same as in the IO monad and is just re-exported here",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "Strict",
          "package": "strict-io",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "IORef",
          "package": "strict-io",
          "type": "data"
        },
        "index": {
          "description": "mutable variable in the IO monad",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "IORef",
          "package": "strict-io",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically modifies the contents of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is useful for using \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e in a safe way in a multithreaded program.\n If you only have one \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, then using \u003ccode\u003e\u003ca\u003eatomicModifyIORef\u003c/a\u003e\u003c/code\u003e to access and modify\n it will prevent race conditions.\n\u003c/p\u003e\u003cp\u003eExtending the atomicity to multiple \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es is problematic, so it is recommended that\n if you need to do anything more complicated then using \u003ca\u003eControl.Concurrent.MVar.MVar\u003c/a\u003e\n instead is a good idea.\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "atomicModifyIORef",
          "package": "strict-io",
          "signature": "IORef sa -\u003e (sa -\u003e (sa, sb)) -\u003e SIO sb",
          "source": "src/Data-IORef-Strict.html#atomicModifyIORef",
          "type": "function"
        },
        "index": {
          "description": "Atomically modifies the contents of an IORef This function is useful for using IORef in safe way in multithreaded program If you only have one IORef then using atomicModifyIORef to access and modify it will prevent race conditions Extending the atomicity to multiple IORef is problematic so it is recommended that if you need to do anything more complicated then using Control.Concurrent.MVar.MVar instead is good idea",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "atomicModifyIORef",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eSIO b",
          "package": "strict-io",
          "partial": "Modify IORef",
          "signature": "IORef sa-\u003e(sa-\u003e(sa,sb))-\u003eSIO sb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:atomicModifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eWeak\u003c/a\u003e\u003c/code\u003e pointer to an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "mkWeakIORef",
          "package": "strict-io",
          "signature": "IORef a -\u003e SIO () -\u003e SIO (Weak (IORef a))",
          "source": "src/Data-IORef-Strict.html#mkWeakIORef",
          "type": "function"
        },
        "index": {
          "description": "Make Weak pointer to an IORef",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "mkWeakIORef",
          "normalized": "IORef a-\u003eSIO()-\u003eSIO(Weak(IORef a))",
          "package": "strict-io",
          "partial": "Weak IORef",
          "signature": "IORef a-\u003eSIO()-\u003eSIO(Weak(IORef a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:mkWeakIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "modifyIORef",
          "package": "strict-io",
          "signature": "IORef sa -\u003e (sa -\u003e sa) -\u003e SIO ()",
          "source": "src/Data-IORef-Strict.html#modifyIORef",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of an IORef",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "modifyIORef",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eSIO()",
          "package": "strict-io",
          "partial": "IORef",
          "signature": "IORef sa-\u003e(sa-\u003esa)-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:modifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, but force the value before storing it.\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "newIORef",
          "package": "strict-io",
          "signature": "sa -\u003e SIO (IORef sa)",
          "source": "src/Data-IORef-Strict.html#newIORef",
          "type": "function"
        },
        "index": {
          "description": "Build new IORef but force the value before storing it",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "newIORef",
          "normalized": "a-\u003eSIO(IORef a)",
          "package": "strict-io",
          "partial": "IORef",
          "signature": "sa-\u003eSIO(IORef sa)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:newIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "readIORef",
          "package": "strict-io",
          "signature": "IORef a -\u003e SIO a",
          "source": "src/Data-IORef-Strict.html#readIORef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an IORef",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "readIORef",
          "normalized": "IORef a-\u003eSIO a",
          "package": "strict-io",
          "partial": "IORef",
          "signature": "IORef a-\u003eSIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:readIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeeply force a value and write it into an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IORef.Strict",
          "name": "writeIORef",
          "package": "strict-io",
          "signature": "IORef sa -\u003e sa -\u003e SIO ()",
          "source": "src/Data-IORef-Strict.html#writeIORef",
          "type": "function"
        },
        "index": {
          "description": "Deeply force value and write it into an IORef",
          "hierarchy": "Data IORef Strict",
          "module": "Data.IORef.Strict",
          "name": "writeIORef",
          "normalized": "IORef a-\u003ea-\u003eSIO()",
          "package": "strict-io",
          "partial": "IORef",
          "signature": "IORef sa-\u003esa-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/Data-IORef-Strict.html#v:writeIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the internals of \u003ca\u003eSystem.IO.Strict\u003c/a\u003e so that other packages can extend the\n \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e monad. This module has to be used with great care: by lifting a lazy\n function or a function that let leaks its lazy arguments, one breaks the only purpose\n of the \u003ca\u003eSystem.IO.Strict\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "Internals",
          "package": "strict-io",
          "source": "src/System-IO-Strict-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the internals of System.IO.Strict so that other packages can extend the SIO monad This module has to be used with great care by lifting lazy function or function that let leaks its lazy arguments one breaks the only purpose of the System.IO.Strict module",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "Internals",
          "package": "strict-io",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict.Internals",
          "name": "SIO",
          "package": "strict-io",
          "source": "src/System-IO-Strict-Internals.html#SIO",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "SIO",
          "package": "strict-io",
          "partial": "SIO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#t:SIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict.Internals",
          "name": "SIO",
          "package": "strict-io",
          "signature": "SIO",
          "source": "src/System-IO-Strict-Internals.html#SIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "SIO",
          "package": "strict-io",
          "partial": "SIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:SIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict.Internals",
          "name": "rawRun",
          "package": "strict-io",
          "signature": "IO a",
          "source": "src/System-IO-Strict-Internals.html#SIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "rawRun",
          "package": "strict-io",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:rawRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stricter version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, that works for every monad.\n\u003c/p\u003e",
          "module": "[\"System.IO.Strict.Internals\",\"System.IO.Strict\"]",
          "name": "return'",
          "package": "strict-io",
          "signature": "sa -\u003e m sa",
          "source": "src/System-IO-Strict-Internals.html#return%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:return-39-\",\"http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:return-39-\"]"
        },
        "index": {
          "description": "stricter version of return that works for every monad",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "return'",
          "normalized": "a-\u003eb a",
          "package": "strict-io",
          "signature": "sa-\u003em sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:return-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e allows to return to the wider world of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"System.IO.Strict.Internals\",\"System.IO.Strict\"]",
          "name": "run",
          "package": "strict-io",
          "signature": "SIO sa -\u003e IO sa",
          "source": "src/System-IO-Strict-Internals.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:run\",\"http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:run\"]"
        },
        "index": {
          "description": "run allows to return to the wider world of IO",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "run",
          "normalized": "SIO a-\u003eIO a",
          "package": "strict-io",
          "signature": "SIO sa-\u003eIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation without arguments.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap0",
          "package": "strict-io",
          "signature": "IO a -\u003e SIO a",
          "source": "src/System-IO-Strict-Internals.html#wrap0",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation without arguments",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap0",
          "normalized": "IO a-\u003eSIO a",
          "package": "strict-io",
          "signature": "IO a-\u003eSIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a lazy \u003cem\u003eIO\u003c/em\u003e computation without arguments and forces its contents.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap0'",
          "package": "strict-io",
          "signature": "IO sa -\u003e SIO sa",
          "source": "src/System-IO-Strict-Internals.html#wrap0%27",
          "type": "function"
        },
        "index": {
          "description": "Wraps lazy IO computation without arguments and forces its contents",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap0'",
          "normalized": "IO a-\u003eSIO a",
          "package": "strict-io",
          "signature": "IO sa-\u003eSIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap0-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with a single argument.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap1",
          "package": "strict-io",
          "signature": "(a -\u003e IO b) -\u003e a -\u003e SIO b",
          "source": "src/System-IO-Strict-Internals.html#wrap1",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation with single argument",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap1",
          "normalized": "(a-\u003eIO b)-\u003ea-\u003eSIO b",
          "package": "strict-io",
          "signature": "(a-\u003eIO b)-\u003ea-\u003eSIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a lazy \u003cem\u003eIO\u003c/em\u003e computation with a single argument and forces its contents.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap1'",
          "package": "strict-io",
          "signature": "(a -\u003e IO sb) -\u003e a -\u003e SIO sb",
          "source": "src/System-IO-Strict-Internals.html#wrap1%27",
          "type": "function"
        },
        "index": {
          "description": "Wraps lazy IO computation with single argument and forces its contents",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap1'",
          "normalized": "(a-\u003eIO b)-\u003ea-\u003eSIO b",
          "package": "strict-io",
          "signature": "(a-\u003eIO sb)-\u003ea-\u003eSIO sb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap2",
          "package": "strict-io",
          "signature": "(a -\u003e b -\u003e IO c) -\u003e a -\u003e b -\u003e SIO c",
          "source": "src/System-IO-Strict-Internals.html#wrap2",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation with two arguments",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap2",
          "normalized": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c",
          "package": "strict-io",
          "signature": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments and forces its contents.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap2'",
          "package": "strict-io",
          "signature": "(a -\u003e b -\u003e IO sc) -\u003e a -\u003e b -\u003e SIO sc",
          "source": "src/System-IO-Strict-Internals.html#wrap2%27",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation with two arguments and forces its contents",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap2'",
          "normalized": "(a-\u003eb-\u003eIO c)-\u003ea-\u003eb-\u003eSIO c",
          "package": "strict-io",
          "signature": "(a-\u003eb-\u003eIO sc)-\u003ea-\u003eb-\u003eSIO sc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap3",
          "package": "strict-io",
          "signature": "(a -\u003e b -\u003e c -\u003e IO d) -\u003e a -\u003e b -\u003e c -\u003e SIO d",
          "source": "src/System-IO-Strict-Internals.html#wrap3",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation with two arguments",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap3",
          "normalized": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d",
          "package": "strict-io",
          "signature": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a strict \u003cem\u003eIO\u003c/em\u003e computation with two arguments and forces its contents.\n\u003c/p\u003e",
          "module": "System.IO.Strict.Internals",
          "name": "wrap3'",
          "package": "strict-io",
          "signature": "(a -\u003e b -\u003e c -\u003e IO sd) -\u003e a -\u003e b -\u003e c -\u003e SIO sd",
          "source": "src/System-IO-Strict-Internals.html#wrap3%27",
          "type": "function"
        },
        "index": {
          "description": "Wraps strict IO computation with two arguments and forces its contents",
          "hierarchy": "System IO Strict Internals",
          "module": "System.IO.Strict.Internals",
          "name": "wrap3'",
          "normalized": "(a-\u003eb-\u003ec-\u003eIO d)-\u003ea-\u003eb-\u003ec-\u003eSIO d",
          "package": "strict-io",
          "signature": "(a-\u003eb-\u003ec-\u003eIO sd)-\u003ea-\u003eb-\u003ec-\u003eSIO sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict-Internals.html#v:wrap3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module wraps the functions of the \u003ca\u003eSystem.IO\u003c/a\u003e module at a different type namely \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe purpose of this module is to export only strict \u003cem\u003eIO\u003c/em\u003e functions, by strict\n we mean strict in the result. The arguments of these functions may only by partially forced,\n but when the function returns, the arguments can no longer be forced by the function.\n When the type of the value to be forced is polymorphic, a \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e constraint is added\n since we (internally) use \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e to force the value. Then we rely on the behavior\n of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances to provide the fact that any lazy argument passed to a \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e function\n will not leak-out after the call.\n\u003c/p\u003e\u003cp\u003eThese functions do not necessarily use their arguments completely but they do not hold\n or return any value that could depend on these arguments. If the original functions \n from \u003ca\u003eSystem.IO\u003c/a\u003e module were already strict, then this module just provides them\n at another type.\n Some functions from the original module are famously lazy like the \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e like\n functions: in this module their results are deeply forced.\n\u003c/p\u003e\u003cp\u003eIn Haskell, monad operations (\u003ccode\u003ereturn\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e) have to be lazy. Therefore the \u003ccode\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/code\u003e\n monad is not completely strict (i.e. pure values can still be lazy). So in this module we\n expose the \u003ccode\u003e\u003ca\u003ereturn'\u003c/a\u003e\u003c/code\u003e function that forces the given value before putting it into the monad.\n\u003c/p\u003e\u003cp\u003eSince this module uses the same names as \u003ca\u003eSystem.IO\u003c/a\u003e, it is designed to be imported \u003cem\u003equalified\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e\n    import System.IO.Strict (SIO)\n    import qualified System.IO.Strict as SIO\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.IO.Strict",
          "name": "Strict",
          "package": "strict-io",
          "source": "src/System-IO-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "This module wraps the functions of the System.IO module at different type namely SIO The purpose of this module is to export only strict IO functions by strict we mean strict in the result The arguments of these functions may only by partially forced but when the function returns the arguments can no longer be forced by the function When the type of the value to be forced is polymorphic NFData constraint is added since we internally use rnf to force the value Then we rely on the behavior of NFData instances to provide the fact that any lazy argument passed to SIO function will not leak-out after the call These functions do not necessarily use their arguments completely but they do not hold or return any value that could depend on these arguments If the original functions from System.IO module were already strict then this module just provides them at another type Some functions from the original module are famously lazy like the getContents like functions in this module their results are deeply forced In Haskell monad operations return and have to be lazy Therefore the SIO monad is not completely strict i.e pure values can still be lazy So in this module we expose the return function that forces the given value before putting it into the monad Since this module uses the same names as System.IO it is designed to be imported qualified import System.IO.Strict SIO import qualified System.IO.Strict as SIO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "Strict",
          "package": "strict-io",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "SIO",
          "package": "strict-io",
          "source": "src/System-IO-Strict-Internals.html#SIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "SIO",
          "package": "strict-io",
          "partial": "SIO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#t:SIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "appendFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#appendFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eSIO()",
          "package": "strict-io",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "fix",
          "package": "strict-io",
          "signature": "(sa -\u003e SIO sa) -\u003e SIO sa",
          "source": "src/System-IO-Strict.html#fix",
          "type": "function"
        },
        "index": {
          "description": "Note that fix is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "fix",
          "normalized": "(a-\u003eSIO a)-\u003eSIO a",
          "package": "strict-io",
          "signature": "(sa-\u003eSIO sa)-\u003eSIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "getChar",
          "package": "strict-io",
          "signature": "SIO Char",
          "source": "src/System-IO-Strict.html#getChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "getChar",
          "package": "strict-io",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "getContents",
          "package": "strict-io",
          "signature": "SIO String",
          "source": "src/System-IO-Strict.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "Note that getContents is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "getContents",
          "package": "strict-io",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "getLine",
          "package": "strict-io",
          "signature": "SIO String",
          "source": "src/System-IO-Strict.html#getLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "getLine",
          "package": "strict-io",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hClose",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hClose",
          "normalized": "Handle-\u003eSIO()",
          "package": "strict-io",
          "partial": "Close",
          "signature": "Handle-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hFileSize",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Integer",
          "source": "src/System-IO-Strict.html#hFileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hFileSize",
          "normalized": "Handle-\u003eSIO Integer",
          "package": "strict-io",
          "partial": "File Size",
          "signature": "Handle-\u003eSIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hFlush",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hFlush",
          "normalized": "Handle-\u003eSIO()",
          "package": "strict-io",
          "partial": "Flush",
          "signature": "Handle-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetBuf",
          "package": "strict-io",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
          "source": "src/System-IO-Strict.html#hGetBuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetBuf",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "package": "strict-io",
          "partial": "Get Buf",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetBufNonBlocking",
          "package": "strict-io",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
          "source": "src/System-IO-Strict.html#hGetBufNonBlocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetBufNonBlocking",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "package": "strict-io",
          "partial": "Get Buf Non Blocking",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetBuffering",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO BufferMode",
          "source": "src/System-IO-Strict.html#hGetBuffering",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetBuffering",
          "normalized": "Handle-\u003eSIO BufferMode",
          "package": "strict-io",
          "partial": "Get Buffering",
          "signature": "Handle-\u003eSIO BufferMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetChar",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Char",
          "source": "src/System-IO-Strict.html#hGetChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetChar",
          "normalized": "Handle-\u003eSIO Char",
          "package": "strict-io",
          "partial": "Get Char",
          "signature": "Handle-\u003eSIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "hGetContents",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO String",
          "source": "src/System-IO-Strict.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Note that hGetContents is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetContents",
          "normalized": "Handle-\u003eSIO String",
          "package": "strict-io",
          "partial": "Get Contents",
          "signature": "Handle-\u003eSIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetEcho",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hGetEcho",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetEcho",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Get Echo",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetLine",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO String",
          "source": "src/System-IO-Strict.html#hGetLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetLine",
          "normalized": "Handle-\u003eSIO String",
          "package": "strict-io",
          "partial": "Get Line",
          "signature": "Handle-\u003eSIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hGetPosn",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO HandlePosn",
          "source": "src/System-IO-Strict.html#hGetPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hGetPosn",
          "normalized": "Handle-\u003eSIO HandlePosn",
          "package": "strict-io",
          "partial": "Get Posn",
          "signature": "Handle-\u003eSIO HandlePosn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hGetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsClosed",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsClosed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsClosed",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Closed",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsEOF",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsEOF",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is EOF",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsOpen",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsOpen",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Open",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsReadable",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsReadable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsReadable",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Readable",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsSeekable",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsSeekable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsSeekable",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Seekable",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsTerminalDevice",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsTerminalDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsTerminalDevice",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Terminal Device",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsTerminalDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hIsWritable",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hIsWritable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hIsWritable",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Is Writable",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hLookAhead",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Char",
          "source": "src/System-IO-Strict.html#hLookAhead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hLookAhead",
          "normalized": "Handle-\u003eSIO Char",
          "package": "strict-io",
          "partial": "Look Ahead",
          "signature": "Handle-\u003eSIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPrint",
          "package": "strict-io",
          "signature": "Handle -\u003e a -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPrint",
          "normalized": "Handle-\u003ea-\u003eSIO()",
          "package": "strict-io",
          "partial": "Print",
          "signature": "Handle-\u003ea-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPutBuf",
          "package": "strict-io",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hPutBuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPutBuf",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO()",
          "package": "strict-io",
          "partial": "Put Buf",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPutBufNonBlocking",
          "package": "strict-io",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e SIO Int",
          "source": "src/System-IO-Strict.html#hPutBufNonBlocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPutBufNonBlocking",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "package": "strict-io",
          "partial": "Put Buf Non Blocking",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eSIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPutChar",
          "package": "strict-io",
          "signature": "Handle -\u003e Char -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hPutChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPutChar",
          "normalized": "Handle-\u003eChar-\u003eSIO()",
          "package": "strict-io",
          "partial": "Put Char",
          "signature": "Handle-\u003eChar-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPutStr",
          "package": "strict-io",
          "signature": "Handle -\u003e String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hPutStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eSIO()",
          "package": "strict-io",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hPutStrLn",
          "package": "strict-io",
          "signature": "Handle -\u003e String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eSIO()",
          "package": "strict-io",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hReady",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hReady",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hReady",
          "normalized": "Handle-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Ready",
          "signature": "Handle-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSeek",
          "package": "strict-io",
          "signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSeek",
          "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eSIO()",
          "package": "strict-io",
          "partial": "Seek",
          "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSetBinaryMode",
          "package": "strict-io",
          "signature": "Handle -\u003e Bool -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSetBinaryMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSetBinaryMode",
          "normalized": "Handle-\u003eBool-\u003eSIO()",
          "package": "strict-io",
          "partial": "Set Binary Mode",
          "signature": "Handle-\u003eBool-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetBinaryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSetBuffering",
          "package": "strict-io",
          "signature": "Handle -\u003e BufferMode -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSetBuffering",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSetBuffering",
          "normalized": "Handle-\u003eBufferMode-\u003eSIO()",
          "package": "strict-io",
          "partial": "Set Buffering",
          "signature": "Handle-\u003eBufferMode-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSetEcho",
          "package": "strict-io",
          "signature": "Handle -\u003e Bool -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSetEcho",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSetEcho",
          "normalized": "Handle-\u003eBool-\u003eSIO()",
          "package": "strict-io",
          "partial": "Set Echo",
          "signature": "Handle-\u003eBool-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSetFileSize",
          "package": "strict-io",
          "signature": "Handle -\u003e Integer -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSetFileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSetFileSize",
          "normalized": "Handle-\u003eInteger-\u003eSIO()",
          "package": "strict-io",
          "partial": "Set File Size",
          "signature": "Handle-\u003eInteger-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hSetPosn",
          "package": "strict-io",
          "signature": "HandlePosn -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#hSetPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hSetPosn",
          "normalized": "HandlePosn-\u003eSIO()",
          "package": "strict-io",
          "partial": "Set Posn",
          "signature": "HandlePosn-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hSetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hShow",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO String",
          "source": "src/System-IO-Strict.html#hShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hShow",
          "normalized": "Handle-\u003eSIO String",
          "package": "strict-io",
          "partial": "Show",
          "signature": "Handle-\u003eSIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hTell",
          "package": "strict-io",
          "signature": "Handle -\u003e SIO Integer",
          "source": "src/System-IO-Strict.html#hTell",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hTell",
          "normalized": "Handle-\u003eSIO Integer",
          "package": "strict-io",
          "partial": "Tell",
          "signature": "Handle-\u003eSIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "hWaitForInput",
          "package": "strict-io",
          "signature": "Handle -\u003e Int -\u003e SIO Bool",
          "source": "src/System-IO-Strict.html#hWaitForInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "hWaitForInput",
          "normalized": "Handle-\u003eInt-\u003eSIO Bool",
          "package": "strict-io",
          "partial": "Wait For Input",
          "signature": "Handle-\u003eInt-\u003eSIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:hWaitForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "interact",
          "package": "strict-io",
          "signature": "(String -\u003e String) -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#interact",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eSIO()",
          "package": "strict-io",
          "signature": "(String-\u003eString)-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "isEOF",
          "package": "strict-io",
          "signature": "SIO Bool",
          "source": "src/System-IO-Strict.html#isEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "isEOF",
          "package": "strict-io",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "openBinaryFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e IOMode -\u003e SIO Handle",
          "source": "src/System-IO-Strict.html#openBinaryFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "openBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003eSIO Handle",
          "package": "strict-io",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003eSIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "openBinaryTempFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e String -\u003e SIO (FilePath, Handle)",
          "source": "src/System-IO-Strict.html#openBinaryTempFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "openBinaryTempFile",
          "normalized": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
          "package": "strict-io",
          "partial": "Binary Temp File",
          "signature": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openBinaryTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "openFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e IOMode -\u003e SIO Handle",
          "source": "src/System-IO-Strict.html#openFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eSIO Handle",
          "package": "strict-io",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eSIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "openTempFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e String -\u003e SIO (FilePath, Handle)",
          "source": "src/System-IO-Strict.html#openTempFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "openTempFile",
          "normalized": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
          "package": "strict-io",
          "partial": "Temp File",
          "signature": "FilePath-\u003eString-\u003eSIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:openTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "print",
          "package": "strict-io",
          "signature": "a -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#print",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "print",
          "normalized": "a-\u003eSIO()",
          "package": "strict-io",
          "signature": "a-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "putChar",
          "package": "strict-io",
          "signature": "Char -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#putChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "putChar",
          "normalized": "Char-\u003eSIO()",
          "package": "strict-io",
          "partial": "Char",
          "signature": "Char-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "putStr",
          "package": "strict-io",
          "signature": "String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#putStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "putStr",
          "normalized": "String-\u003eSIO()",
          "package": "strict-io",
          "partial": "Str",
          "signature": "String-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "putStrLn",
          "package": "strict-io",
          "signature": "String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#putStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "putStrLn",
          "normalized": "String-\u003eSIO()",
          "package": "strict-io",
          "partial": "Str Ln",
          "signature": "String-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "read",
          "package": "strict-io",
          "signature": "String -\u003e SIO sa",
          "source": "src/System-IO-Strict.html#read",
          "type": "function"
        },
        "index": {
          "description": "Note that read is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "read",
          "normalized": "String-\u003eSIO a",
          "package": "strict-io",
          "signature": "String-\u003eSIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "readFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e SIO String",
          "source": "src/System-IO-Strict.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Note that readFile is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "readFile",
          "normalized": "FilePath-\u003eSIO String",
          "package": "strict-io",
          "partial": "File",
          "signature": "FilePath-\u003eSIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "readLn",
          "package": "strict-io",
          "signature": "SIO sa",
          "source": "src/System-IO-Strict.html#readLn",
          "type": "function"
        },
        "index": {
          "description": "Note that readLn is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "readLn",
          "package": "strict-io",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "stderr",
          "package": "strict-io",
          "signature": "Handle",
          "source": "src/System-IO-Strict.html#stderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "stderr",
          "package": "strict-io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "stdin",
          "package": "strict-io",
          "signature": "Handle",
          "source": "src/System-IO-Strict.html#stdin",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "stdin",
          "package": "strict-io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "stdout",
          "package": "strict-io",
          "signature": "Handle",
          "source": "src/System-IO-Strict.html#stdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "stdout",
          "package": "strict-io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "withBinaryFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e SIO sr) -\u003e SIO sr",
          "source": "src/System-IO-Strict.html#withBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Note that withBinaryFile is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "withBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO a)-\u003eSIO a",
          "package": "strict-io",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO sr)-\u003eSIO sr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:withBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e is stricter than its counterpart in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Strict",
          "name": "withFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e SIO sr) -\u003e SIO sr",
          "source": "src/System-IO-Strict.html#withFile",
          "type": "function"
        },
        "index": {
          "description": "Note that withFile is stricter than its counterpart in System.IO",
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "withFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO a)-\u003eSIO a",
          "package": "strict-io",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eSIO sr)-\u003eSIO sr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:withFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Strict",
          "name": "writeFile",
          "package": "strict-io",
          "signature": "FilePath -\u003e String -\u003e SIO ()",
          "source": "src/System-IO-Strict.html#writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Strict",
          "module": "System.IO.Strict",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eSIO()",
          "package": "strict-io",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eSIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-io/docs/System-IO-Strict.html#v:writeFile"
      }
    }
  ]
]