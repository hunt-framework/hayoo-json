[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGHood:\n A graphical viewer for Hood\n\u003c/p\u003e\u003cp\u003eCreated a cabal library package.\n Improved the search for the GHood.jar file, that is bundled with the library.\n Changed from Literate Haskell to plain Haskell for better haddock documentation support.\n\u003c/p\u003e\u003cp\u003eHugo Pacheco, November 2008\n\u003c/p\u003e\u003cp\u003eAdded ObserveM.\n Adapted imports to use GHC's hierarchical libraries.\n\u003c/p\u003e\u003cp\u003eAlcino Cunha, February 2004\n\u003c/p\u003e\u003cp\u003eModified version of Hood/Observe.lhs to match GHood, \n the Graphical Haskell Object Observation Debugger, which\n is distributed as a Java class file archive GHood.jar.\n [Apart from two new hooks, modifications are at the end]\n\u003c/p\u003e\u003cp\u003eClaus Reinke, December 2000\n\u003c/p\u003e\u003cp\u003eThe file is part of the Haskell Object Observation Debugger,\n (HOOD) July 2000 release. Actually this is all of this version\n of HOOD, apart from the documentation and examples...\n\u003c/p\u003e\u003cp\u003eHOOD is a small post-mortem debugger for the lazy functional\n language Haskell. It is based on the concept of observation of\n intermediate data structures, rather than the more traditional\n stepping and variable examination paradigm used by imperative\n language debuggers.\n\u003c/p\u003e\u003cp\u003eCopyright (c) Andy Gill, 1992-2000\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "module",
        "fct-source": "src/Debug-Observe.html",
        "fct-type": "module",
        "title": "Observe"
      },
      "index": {
        "description": "GHood graphical viewer for Hood Created cabal library package Improved the search for the GHood.jar file that is bundled with the library Changed from Literate Haskell to plain Haskell for better haddock documentation support Hugo Pacheco November Added ObserveM Adapted imports to use GHC hierarchical libraries Alcino Cunha February Modified version of Hood Observe.lhs to match GHood the Graphical Haskell Object Observation Debugger which is distributed as Java class file archive GHood.jar Apart from two new hooks modifications are at the end Claus Reinke December The file is part of the Haskell Object Observation Debugger HOOD July release Actually this is all of this version of HOOD apart from the documentation and examples HOOD is small post-mortem debugger for the lazy functional language Haskell It is based on the concept of observation of intermediate data structures rather than the more traditional stepping and variable examination paradigm used by imperative language debuggers Copyright Andy Gill",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Observe",
        "normalized": "",
        "package": "GHood",
        "partial": "Observe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:CDS",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "data",
        "fct-source": "src/Debug-Observe.html#CDS",
        "fct-type": "data",
        "title": "CDS"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDS",
        "normalized": "",
        "package": "GHood",
        "partial": "CDS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:CDSSet",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "type",
        "fct-source": "src/Debug-Observe.html#CDSSet",
        "fct-type": "type",
        "title": "CDSSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDSSet",
        "normalized": "",
        "package": "GHood",
        "partial": "CDSSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observable",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "class",
        "fct-source": "src/Debug-Observe.html#Observable",
        "fct-type": "class",
        "title": "Observable"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Observable",
        "normalized": "",
        "package": "GHood",
        "partial": "Observable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observer",
      "description": {
        "fct-descr": "\u003cp\u003eContains a \u003ccode\u003eforall\u003c/code\u003e typed observe (if supported).\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "newtype",
        "fct-source": "src/Debug-Observe.html#Observer",
        "fct-type": "newtype",
        "title": "Observer"
      },
      "index": {
        "description": "Contains forall typed observe if supported",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Observer",
        "normalized": "",
        "package": "GHood",
        "partial": "Observer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:ObserverM",
      "description": {
        "fct-descr": "\u003cp\u003eA simple state monad for placing numbers on sub-observations.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "newtype",
        "fct-source": "src/Debug-Observe.html#ObserverM",
        "fct-type": "newtype",
        "title": "ObserverM"
      },
      "index": {
        "description": "simple state monad for placing numbers on sub-observations",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "ObserverM",
        "normalized": "",
        "package": "GHood",
        "partial": "Observer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Observing",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "type",
        "fct-source": "src/Debug-Observe.html#Observing",
        "fct-type": "type",
        "title": "Observing"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Observing",
        "normalized": "",
        "package": "GHood",
        "partial": "Observing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#t:Parent",
      "description": {
        "fct-descr": "\u003cp\u003eParent book-keeping information.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "data",
        "fct-source": "src/Debug-Observe.html#Parent",
        "fct-type": "data",
        "title": "Parent"
      },
      "index": {
        "description": "Parent book-keeping information",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Parent",
        "normalized": "",
        "package": "GHood",
        "partial": "Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:-60--60-",
      "description": {
        "fct-descr": "\u003cp\u003ethe infix (\u003c\u003c) is a shortcut for constructor arguments.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "ObserverM (a -\u003e b) -\u003e a -\u003e ObserverM b",
        "fct-source": "src/Debug-Observe.html#%3C%3C",
        "fct-type": "function",
        "title": "(\u003c\u003c)"
      },
      "index": {
        "description": "the infix is shortcut for constructor arguments",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "(\u003c\u003c) \u003c\u003c",
        "normalized": "ObserverM(a-\u003eb)-\u003ea-\u003eObserverM b",
        "package": "GHood",
        "partial": "",
        "signature": "ObserverM(a-\u003eb)-\u003ea-\u003eObserverM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSCons",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "CDSCons Int String [CDSSet]",
        "fct-source": "src/Debug-Observe.html#CDS",
        "fct-type": "function",
        "title": "CDSCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDSCons",
        "normalized": "CDSCons Int String[CDSSet]",
        "package": "GHood",
        "partial": "CDSCons",
        "signature": "CDSCons Int String[CDSSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSEntered",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "CDSEntered Int",
        "fct-source": "src/Debug-Observe.html#CDS",
        "fct-type": "function",
        "title": "CDSEntered"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDSEntered",
        "normalized": "",
        "package": "GHood",
        "partial": "CDSEntered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSFun",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "CDSFun Int CDSSet CDSSet",
        "fct-source": "src/Debug-Observe.html#CDS",
        "fct-type": "function",
        "title": "CDSFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDSFun",
        "normalized": "",
        "package": "GHood",
        "partial": "CDSFun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:CDSNamed",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "CDSNamed String CDSSet",
        "fct-source": "src/Debug-Observe.html#CDS",
        "fct-type": "function",
        "title": "CDSNamed"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "CDSNamed",
        "normalized": "",
        "package": "GHood",
        "partial": "CDSNamed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:O",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e a -\u003e a)",
        "fct-source": "src/Debug-Observe.html#Observer",
        "fct-type": "function",
        "title": "O"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "O",
        "normalized": "String-\u003ea-\u003ea)",
        "package": "GHood",
        "partial": "",
        "signature": "String-\u003ea-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:ObserverM",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "ObserverM",
        "fct-source": "src/Debug-Observe.html#ObserverM",
        "fct-type": "function",
        "title": "ObserverM"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "ObserverM",
        "normalized": "",
        "package": "GHood",
        "partial": "Observer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:Parent",
      "description": {
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "Parent",
        "fct-source": "src/Debug-Observe.html#Parent",
        "fct-type": "function",
        "title": "Parent"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "Parent",
        "normalized": "",
        "package": "GHood",
        "partial": "Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:debugO",
      "description": {
        "fct-descr": "\u003cp\u003eDebugs observe ridden code.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "IO a -\u003e IO [CDS]",
        "fct-source": "src/Debug-Observe.html#debugO",
        "fct-type": "function",
        "title": "debugO"
      },
      "index": {
        "description": "Debugs observe ridden code",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "debugO",
        "normalized": "IO a-\u003eIO[CDS]",
        "package": "GHood",
        "partial": "",
        "signature": "IO a-\u003eIO[CDS]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observe",
      "description": {
        "fct-descr": "\u003cp\u003eOur principle function and class\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Debug-Observe.html#observe",
        "fct-type": "function",
        "title": "observe"
      },
      "index": {
        "description": "Our principle function and class",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observe",
        "normalized": "String-\u003ea-\u003ea",
        "package": "GHood",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeBase",
      "description": {
        "fct-descr": "\u003cp\u003eObserve a base type\n\u003c/p\u003e\u003cp\u003eThe strictness (by using seq) is the same as the pattern matching done on other constructors.\n We evaluate to WHNF, and not further.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "a -\u003e Parent -\u003e a",
        "fct-source": "src/Debug-Observe.html#observeBase",
        "fct-type": "function",
        "title": "observeBase"
      },
      "index": {
        "description": "Observe base type The strictness by using seq is the same as the pattern matching done on other constructors We evaluate to WHNF and not further",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observeBase",
        "normalized": "a-\u003eParent-\u003ea",
        "package": "GHood",
        "partial": "Base",
        "signature": "a-\u003eParent-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeOpaque",
      "description": {
        "fct-descr": "\u003cp\u003eObserve a base type as an \u003ccode\u003eopaque\u003c/code\u003e string.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e a -\u003e Parent -\u003e a",
        "fct-source": "src/Debug-Observe.html#observeOpaque",
        "fct-type": "function",
        "title": "observeOpaque"
      },
      "index": {
        "description": "Observe base type as an opaque string",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observeOpaque",
        "normalized": "String-\u003ea-\u003eParent-\u003ea",
        "package": "GHood",
        "partial": "Opaque",
        "signature": "String-\u003ea-\u003eParent-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observeParent",
      "description": {
        "fct-descr": "\u003cp\u003emy parent\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "!Int",
        "fct-source": "src/Debug-Observe.html#Parent",
        "fct-type": "function",
        "title": "observeParent"
      },
      "index": {
        "description": "my parent",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observeParent",
        "normalized": "",
        "package": "GHood",
        "partial": "Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observePort",
      "description": {
        "fct-descr": "\u003cp\u003emy branch number\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "!Int",
        "fct-source": "src/Debug-Observe.html#Parent",
        "fct-type": "function",
        "title": "observePort"
      },
      "index": {
        "description": "my branch number",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observePort",
        "normalized": "",
        "package": "GHood",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observer",
      "description": {
        "fct-descr": "\u003cp\u003eThis reveals the name of a specific constructor.\n\t and gets ready to explain the sub-components.\n    We put the context second so we can do eta-reduction\n\t with some of our definitions.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "a -\u003e Parent -\u003e a",
        "fct-source": "src/Debug-Observe.html#observer",
        "fct-type": "method",
        "title": "observer"
      },
      "index": {
        "description": "This reveals the name of specific constructor and gets ready to explain the sub-components We put the context second so we can do eta-reduction with some of our definitions",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observer",
        "normalized": "a-\u003eParent-\u003ea",
        "package": "GHood",
        "partial": "",
        "signature": "a-\u003eParent-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:observers",
      "description": {
        "fct-descr": "\u003cp\u003eThis used used to group several observer instances together.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e (Observer -\u003e a) -\u003e a",
        "fct-source": "src/Debug-Observe.html#observers",
        "fct-type": "method",
        "title": "observers"
      },
      "index": {
        "description": "This used used to group several observer instances together",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "observers",
        "normalized": "String-\u003e(Observer-\u003ea)-\u003ea",
        "package": "GHood",
        "partial": "",
        "signature": "String-\u003e(Observer-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:printO",
      "description": {
        "fct-descr": "\u003cp\u003eRuns and prints observe ridden code.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Debug-Observe.html#printO",
        "fct-type": "function",
        "title": "printO"
      },
      "index": {
        "description": "Runs and prints observe ridden code",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "printO",
        "normalized": "a-\u003eIO()",
        "package": "GHood",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:putStrO",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a string during observation.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Debug-Observe.html#putStrO",
        "fct-type": "function",
        "title": "putStrO"
      },
      "index": {
        "description": "Prints string during observation",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "putStrO",
        "normalized": "String-\u003eIO()",
        "package": "GHood",
        "partial": "Str",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:runMO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "Int -\u003e Int -\u003e (a, Int)",
        "fct-source": "src/Debug-Observe.html#ObserverM",
        "fct-type": "function",
        "title": "runMO"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "runMO",
        "normalized": "Int-\u003eInt-\u003e(a,Int)",
        "package": "GHood",
        "partial": "MO",
        "signature": "Int-\u003eInt-\u003e(a,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:runO",
      "description": {
        "fct-descr": "\u003cp\u003eRuns observe ridden code.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "IO a -\u003e IO ()",
        "fct-source": "src/Debug-Observe.html#runO",
        "fct-type": "function",
        "title": "runO"
      },
      "index": {
        "description": "Runs observe ridden code",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "runO",
        "normalized": "IO a-\u003eIO()",
        "package": "GHood",
        "partial": "",
        "signature": "IO a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSends a packet to the observation agent.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "String -\u003e ObserverM a -\u003e Parent -\u003e a",
        "fct-source": "src/Debug-Observe.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Sends packet to the observation agent",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "send",
        "normalized": "String-\u003eObserverM a-\u003eParent-\u003ea",
        "package": "GHood",
        "partial": "",
        "signature": "String-\u003eObserverM a-\u003eParent-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GHood/docs/Debug-Observe.html#v:thunk",
      "description": {
        "fct-descr": "\u003cp\u003ethunk is for marking suspensions.\n\u003c/p\u003e",
        "fct-module": "Debug.Observe",
        "fct-package": "GHood",
        "fct-signature": "a -\u003e ObserverM a",
        "fct-source": "src/Debug-Observe.html#thunk",
        "fct-type": "function",
        "title": "thunk"
      },
      "index": {
        "description": "thunk is for marking suspensions",
        "hierarchy": "Debug Observe",
        "module": "Debug.Observe",
        "name": "thunk",
        "normalized": "a-\u003eObserverM a",
        "package": "GHood",
        "partial": "",
        "signature": "a-\u003eObserverM a"
      }
    }
  }
]