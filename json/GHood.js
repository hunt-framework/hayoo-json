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
        "word": "GHood"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGHood:\n A graphical viewer for Hood\n\u003c/p\u003e\u003cp\u003eCreated a cabal library package.\n Improved the search for the GHood.jar file, that is bundled with the library.\n Changed from Literate Haskell to plain Haskell for better haddock documentation support.\n\u003c/p\u003e\u003cp\u003eHugo Pacheco, November 2008\n\u003c/p\u003e\u003cp\u003eAdded ObserveM.\n Adapted imports to use GHC's hierarchical libraries.\n\u003c/p\u003e\u003cp\u003eAlcino Cunha, February 2004\n\u003c/p\u003e\u003cp\u003eModified version of Hood/Observe.lhs to match GHood, \n the Graphical Haskell Object Observation Debugger, which\n is distributed as a Java class file archive GHood.jar.\n [Apart from two new hooks, modifications are at the end]\n\u003c/p\u003e\u003cp\u003eClaus Reinke, December 2000\n\u003c/p\u003e\u003cp\u003eThe file is part of the Haskell Object Observation Debugger,\n (HOOD) July 2000 release. Actually this is all of this version\n of HOOD, apart from the documentation and examples...\n\u003c/p\u003e\u003cp\u003eHOOD is a small post-mortem debugger for the lazy functional\n language Haskell. It is based on the concept of observation of\n intermediate data structures, rather than the more traditional\n stepping and variable examination paradigm used by imperative\n language debuggers.\n\u003c/p\u003e\u003cp\u003eCopyright (c) Andy Gill, 1992-2000\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.Observe",
          "name": "Observe",
          "package": "GHood",
          "source": "src/Debug-Observe.html",
          "type": "module"
        },
        "index": {
          "description": "GHood graphical viewer for Hood Created cabal library package Improved the search for the GHood.jar file that is bundled with the library Changed from Literate Haskell to plain Haskell for better haddock documentation support Hugo Pacheco November Added ObserveM Adapted imports to use GHC hierarchical libraries Alcino Cunha February Modified version of Hood Observe.lhs to match GHood the Graphical Haskell Object Observation Debugger which is distributed as Java class file archive GHood.jar Apart from two new hooks modifications are at the end Claus Reinke December The file is part of the Haskell Object Observation Debugger HOOD July release Actually this is all of this version of HOOD apart from the documentation and examples HOOD is small post-mortem debugger for the lazy functional language Haskell It is based on the concept of observation of intermediate data structures rather than the more traditional stepping and variable examination paradigm used by imperative language debuggers Copyright Andy Gill",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Observe",
          "package": "GHood",
          "partial": "Observe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDS",
          "package": "GHood",
          "source": "src/Debug-Observe.html#CDS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDS",
          "package": "GHood",
          "partial": "CDS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:CDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDSSet",
          "package": "GHood",
          "source": "src/Debug-Observe.html#CDSSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDSSet",
          "package": "GHood",
          "partial": "CDSSet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:CDSSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "Observable",
          "package": "GHood",
          "source": "src/Debug-Observe.html#Observable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Observable",
          "package": "GHood",
          "partial": "Observable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains a \u003ccode\u003eforall\u003c/code\u003e typed observe (if supported).\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "Observer",
          "package": "GHood",
          "source": "src/Debug-Observe.html#Observer",
          "type": "newtype"
        },
        "index": {
          "description": "Contains forall typed observe if supported",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Observer",
          "package": "GHood",
          "partial": "Observer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple state monad for placing numbers on sub-observations.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "ObserverM",
          "package": "GHood",
          "source": "src/Debug-Observe.html#ObserverM",
          "type": "newtype"
        },
        "index": {
          "description": "simple state monad for placing numbers on sub-observations",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "ObserverM",
          "package": "GHood",
          "partial": "Observer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:ObserverM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "Observing",
          "package": "GHood",
          "source": "src/Debug-Observe.html#Observing",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Observing",
          "package": "GHood",
          "partial": "Observing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent book-keeping information.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "Parent",
          "package": "GHood",
          "source": "src/Debug-Observe.html#Parent",
          "type": "data"
        },
        "index": {
          "description": "Parent book-keeping information",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Parent",
          "package": "GHood",
          "partial": "Parent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe infix (\u003c\u003c) is a shortcut for constructor arguments.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "(\u003c\u003c)",
          "package": "GHood",
          "signature": "ObserverM (a -\u003e b) -\u003e a -\u003e ObserverM b",
          "source": "src/Debug-Observe.html#%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "the infix is shortcut for constructor arguments",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "(\u003c\u003c) \u003c\u003c",
          "normalized": "ObserverM(a-\u003eb)-\u003ea-\u003eObserverM b",
          "package": "GHood",
          "signature": "ObserverM(a-\u003eb)-\u003ea-\u003eObserverM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:-60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDSCons",
          "package": "GHood",
          "signature": "CDSCons Int String [CDSSet]",
          "source": "src/Debug-Observe.html#CDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDSCons",
          "normalized": "CDSCons Int String[CDSSet]",
          "package": "GHood",
          "partial": "CDSCons",
          "signature": "CDSCons Int String[CDSSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDSEntered",
          "package": "GHood",
          "signature": "CDSEntered Int",
          "source": "src/Debug-Observe.html#CDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDSEntered",
          "package": "GHood",
          "partial": "CDSEntered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSEntered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDSFun",
          "package": "GHood",
          "signature": "CDSFun Int CDSSet CDSSet",
          "source": "src/Debug-Observe.html#CDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDSFun",
          "package": "GHood",
          "partial": "CDSFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "CDSNamed",
          "package": "GHood",
          "signature": "CDSNamed String CDSSet",
          "source": "src/Debug-Observe.html#CDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "CDSNamed",
          "package": "GHood",
          "partial": "CDSNamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "O",
          "package": "GHood",
          "signature": "String -\u003e a -\u003e a)",
          "source": "src/Debug-Observe.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "O",
          "normalized": "String-\u003ea-\u003ea)",
          "package": "GHood",
          "signature": "String-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "ObserverM",
          "package": "GHood",
          "signature": "ObserverM",
          "source": "src/Debug-Observe.html#ObserverM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "ObserverM",
          "package": "GHood",
          "partial": "Observer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:ObserverM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "Parent",
          "package": "GHood",
          "signature": "Parent",
          "source": "src/Debug-Observe.html#Parent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "Parent",
          "package": "GHood",
          "partial": "Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:Parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebugs observe ridden code.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "debugO",
          "package": "GHood",
          "signature": "IO a -\u003e IO [CDS]",
          "source": "src/Debug-Observe.html#debugO",
          "type": "function"
        },
        "index": {
          "description": "Debugs observe ridden code",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "debugO",
          "normalized": "IO a-\u003eIO[CDS]",
          "package": "GHood",
          "signature": "IO a-\u003eIO[CDS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:debugO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur principle function and class\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observe",
          "package": "GHood",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Debug-Observe.html#observe",
          "type": "function"
        },
        "index": {
          "description": "Our principle function and class",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observe",
          "normalized": "String-\u003ea-\u003ea",
          "package": "GHood",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObserve a base type\n\u003c/p\u003e\u003cp\u003eThe strictness (by using seq) is the same as the pattern matching done on other constructors.\n We evaluate to WHNF, and not further.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observeBase",
          "package": "GHood",
          "signature": "a -\u003e Parent -\u003e a",
          "source": "src/Debug-Observe.html#observeBase",
          "type": "function"
        },
        "index": {
          "description": "Observe base type The strictness by using seq is the same as the pattern matching done on other constructors We evaluate to WHNF and not further",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observeBase",
          "normalized": "a-\u003eParent-\u003ea",
          "package": "GHood",
          "partial": "Base",
          "signature": "a-\u003eParent-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObserve a base type as an \u003ccode\u003eopaque\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observeOpaque",
          "package": "GHood",
          "signature": "String -\u003e a -\u003e Parent -\u003e a",
          "source": "src/Debug-Observe.html#observeOpaque",
          "type": "function"
        },
        "index": {
          "description": "Observe base type as an opaque string",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observeOpaque",
          "normalized": "String-\u003ea-\u003eParent-\u003ea",
          "package": "GHood",
          "partial": "Opaque",
          "signature": "String-\u003ea-\u003eParent-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emy parent\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observeParent",
          "package": "GHood",
          "signature": "Int",
          "source": "src/Debug-Observe.html#Parent",
          "type": "function"
        },
        "index": {
          "description": "my parent",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observeParent",
          "package": "GHood",
          "partial": "Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emy branch number\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observePort",
          "package": "GHood",
          "signature": "Int",
          "source": "src/Debug-Observe.html#Parent",
          "type": "function"
        },
        "index": {
          "description": "my branch number",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observePort",
          "package": "GHood",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis reveals the name of a specific constructor.\n\t and gets ready to explain the sub-components.\n    We put the context second so we can do eta-reduction\n\t with some of our definitions.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observer",
          "package": "GHood",
          "signature": "a -\u003e Parent -\u003e a",
          "source": "src/Debug-Observe.html#observer",
          "type": "method"
        },
        "index": {
          "description": "This reveals the name of specific constructor and gets ready to explain the sub-components We put the context second so we can do eta-reduction with some of our definitions",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observer",
          "normalized": "a-\u003eParent-\u003ea",
          "package": "GHood",
          "signature": "a-\u003eParent-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis used used to group several observer instances together.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "observers",
          "package": "GHood",
          "signature": "String -\u003e (Observer -\u003e a) -\u003e a",
          "source": "src/Debug-Observe.html#observers",
          "type": "method"
        },
        "index": {
          "description": "This used used to group several observer instances together",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "observers",
          "normalized": "String-\u003e(Observer-\u003ea)-\u003ea",
          "package": "GHood",
          "signature": "String-\u003e(Observer-\u003ea)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns and prints observe ridden code.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "printO",
          "package": "GHood",
          "signature": "a -\u003e IO ()",
          "source": "src/Debug-Observe.html#printO",
          "type": "function"
        },
        "index": {
          "description": "Runs and prints observe ridden code",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "printO",
          "normalized": "a-\u003eIO()",
          "package": "GHood",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:printO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a string during observation.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "putStrO",
          "package": "GHood",
          "signature": "String -\u003e IO ()",
          "source": "src/Debug-Observe.html#putStrO",
          "type": "function"
        },
        "index": {
          "description": "Prints string during observation",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "putStrO",
          "normalized": "String-\u003eIO()",
          "package": "GHood",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:putStrO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Observe",
          "name": "runMO",
          "package": "GHood",
          "signature": "Int -\u003e Int -\u003e (a, Int)",
          "source": "src/Debug-Observe.html#ObserverM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "runMO",
          "normalized": "Int-\u003eInt-\u003e(a,Int)",
          "package": "GHood",
          "partial": "MO",
          "signature": "Int-\u003eInt-\u003e(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:runMO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns observe ridden code.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "runO",
          "package": "GHood",
          "signature": "IO a -\u003e IO ()",
          "source": "src/Debug-Observe.html#runO",
          "type": "function"
        },
        "index": {
          "description": "Runs observe ridden code",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "runO",
          "normalized": "IO a-\u003eIO()",
          "package": "GHood",
          "signature": "IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:runO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a packet to the observation agent.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "send",
          "package": "GHood",
          "signature": "String -\u003e ObserverM a -\u003e Parent -\u003e a",
          "source": "src/Debug-Observe.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends packet to the observation agent",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "send",
          "normalized": "String-\u003eObserverM a-\u003eParent-\u003ea",
          "package": "GHood",
          "signature": "String-\u003eObserverM a-\u003eParent-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethunk is for marking suspensions.\n\u003c/p\u003e",
          "module": "Debug.Observe",
          "name": "thunk",
          "package": "GHood",
          "signature": "a -\u003e ObserverM a",
          "source": "src/Debug-Observe.html#thunk",
          "type": "function"
        },
        "index": {
          "description": "thunk is for marking suspensions",
          "hierarchy": "Debug Observe",
          "module": "Debug.Observe",
          "name": "thunk",
          "normalized": "a-\u003eObserverM a",
          "package": "GHood",
          "signature": "a-\u003eObserverM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:thunk"
      }
    }
  ]
]