[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module establishes a class hierarchy that captures the\n    interfaces of \u003ccode\u003ePar\u003c/code\u003e monads.  There are two layers: simple futures\n    (\u003ccode\u003e\u003ca\u003eParFuture\u003c/a\u003e\u003c/code\u003e) and full \u003ccode\u003eIVars\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eParIVar\u003c/a\u003e\u003c/code\u003e).  All \u003ccode\u003ePar\u003c/code\u003e monads are\n    expected to implement the former, some also implement the latter.\n\u003c/p\u003e\u003cp\u003eFor more documentation of the programming model, see\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ca\u003eControl.Monad.Par\u003c/a\u003e module in the \u003ccode\u003emonad-par\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e The wiki/tutorial (\u003ca\u003ehttp://www.haskell.org/haskellwiki/Par_Monad:_A_Parallelism_Tutorial\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e The original paper (\u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/papers/haskell2011_monad-par.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e Tutorial slides (\u003ca\u003ehttp://community.haskell.org/~simonmar/slides/CUFP.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e Other slides (\u003ca\u003ehttp://www.cs.ox.ac.uk/ralf.hinze/WG2.8/28/slides/simon.pdf\u003c/a\u003e, \u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/talks/2011_HaskellSymposium_ParMonad.pdf\u003c/a\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "This module establishes class hierarchy that captures the interfaces of Par monads There are two layers simple futures ParFuture and full IVars ParIVar All Par monads are expected to implement the former some also implement the latter For more documentation of the programming model see The Control.Monad.Par module in the monad-par package The wiki tutorial http www.haskell.org haskellwiki Par Monad Parallelism Tutorial The original paper http www.cs.indiana.edu rrnewton papers haskell2011 monad-par.pdf Tutorial slides http community.haskell.org simonmar slides CUFP.pdf Other slides http www.cs.ox.ac.uk ralf.hinze WG2.8 slides simon.pdf http www.cs.indiana.edu rrnewton talks HaskellSymposium ParMonad.pdf",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "Class",
        "normalized": "",
        "package": "abstract-par",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#t:NFData",
      "description": {
        "fct-descr": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "class of types that can be fully evaluated",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "NFData",
        "normalized": "",
        "package": "abstract-par",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#t:ParFuture",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eParFuture\u003c/code\u003e captures the class of Par monads which support\n   futures.  This level of functionality subsumes \u003ccode\u003epar\u003c/code\u003e/\u003ccode\u003epseq\u003c/code\u003e and is\n   similar to the \u003ca\u003eControl.Parallel.Strategies.Eval\u003c/a\u003e monad.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003espawn_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n   However, for monads that are also a member of \u003ccode\u003e\u003ca\u003eParIVar\u003c/a\u003e\u003c/code\u003e it is\n   typical to simply define \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Par-Class.html#ParFuture",
        "fct-type": "class",
        "title": "ParFuture"
      },
      "index": {
        "description": "ParFuture captures the class of Par monads which support futures This level of functionality subsumes par pseq and is similar to the Control.Parallel.Strategies.Eval monad minimal implementation consists of spawn and get However for monads that are also member of ParIVar it is typical to simply define spawn in terms of fork new and put",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "ParFuture",
        "normalized": "",
        "package": "abstract-par",
        "partial": "Par Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#t:ParIVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eParIVar\u003c/code\u003e builds on futures by adding full \u003cem\u003eanyone-writes, anyone-reads\u003c/em\u003e IVars.\n   These are more expressive but may not be supported by all distributed schedulers.\n\u003c/p\u003e\u003cp\u003eA minimal implementation consists of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Par-Class.html#ParIVar",
        "fct-type": "class",
        "title": "ParIVar"
      },
      "index": {
        "description": "ParIVar builds on futures by adding full anyone-writes anyone-reads IVars These are more expressive but may not be supported by all distributed schedulers minimal implementation consists of fork put and new",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "ParIVar",
        "normalized": "",
        "package": "abstract-par",
        "partial": "Par IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eForks a computation to happen in parallel.  The forked\n computation may exchange values with other computations using\n \u003ccode\u003eIVar\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "m () -\u003e m ()",
        "fct-source": "src/Control-Monad-Par-Class.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "Forks computation to happen in parallel The forked computation may exchange values with other computations using IVar",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "fork",
        "normalized": "a()-\u003ea()",
        "package": "abstract-par",
        "partial": "",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the result of a future, and then return it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "future a -\u003e m a",
        "fct-source": "src/Control-Monad-Par-Class.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Wait for the result of future and then return it",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "get",
        "normalized": "a b-\u003ec b",
        "package": "abstract-par",
        "partial": "",
        "signature": "future a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "m (ivar a)",
        "fct-source": "src/Control-Monad-Par-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "creates new IVar",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "new",
        "normalized": "",
        "package": "abstract-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:newFull",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "a -\u003e m (ivar a)",
        "fct-source": "src/Control-Monad-Par-Class.html#newFull",
        "fct-type": "method",
        "title": "newFull"
      },
      "index": {
        "description": "creates new IVar that contains value",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "newFull",
        "normalized": "a-\u003eb(c a)",
        "package": "abstract-par",
        "partial": "Full",
        "signature": "a-\u003em(ivar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:newFull_",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new \u003ccode\u003eIVar\u003c/code\u003e that contains a value (head-strict only)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "a -\u003e m (ivar a)",
        "fct-source": "src/Control-Monad-Par-Class.html#newFull_",
        "fct-type": "method",
        "title": "newFull_"
      },
      "index": {
        "description": "creates new IVar that contains value head-strict only",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "newFull_",
        "normalized": "a-\u003eb(c a)",
        "package": "abstract-par",
        "partial": "Full",
        "signature": "a-\u003em(ivar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eput a value into a \u003ccode\u003eIVar\u003c/code\u003e.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same \u003ccode\u003eIVar\u003c/code\u003e\n are not allowed, and result in a runtime error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e fully evaluates its argument, which therefore must be an\n instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.  The idea is that this forces the work to\n happen when we expect it, rather than being passed to the consumer\n of the \u003ccode\u003eIVar\u003c/code\u003e and performed later, which often results in less\n parallelism than expected.\n\u003c/p\u003e\u003cp\u003eSometimes partial strictness is more appropriate: see \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "ivar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Par-Class.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "put value into IVar Multiple put to the same IVar are not allowed and result in runtime error put fully evaluates its argument which therefore must be an instance of NFData The idea is that this forces the work to happen when we expect it rather than being passed to the consumer of the IVar and performed later which often results in less parallelism than expected Sometimes partial strictness is more appropriate see put",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "put",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "abstract-par",
        "partial": "",
        "signature": "ivar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but only head-strict rather than fully-strict.  \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "ivar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Par-Class.html#put_",
        "fct-type": "method",
        "title": "put_"
      },
      "index": {
        "description": "like put but only head-strict rather than fully-strict",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "put_",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "abstract-par",
        "partial": "",
        "signature": "ivar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a potentially-parallel computation, and return a \u003cem\u003efuture\u003c/em\u003e\n (or \u003cem\u003epromise\u003c/em\u003e) that can be used to query the result of the forked\n computataion.\n\u003c/p\u003e\u003cpre\u003e  spawn p = do\n    r \u003c- new\n    fork (p \u003e\u003e= put r)\n    return r\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "m a -\u003e m (future a)",
        "fct-source": "src/Control-Monad-Par-Class.html#spawn",
        "fct-type": "method",
        "title": "spawn"
      },
      "index": {
        "description": "Create potentially-parallel computation and return future or promise that can be used to query the result of the forked computataion spawn do new fork put return",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "spawn",
        "normalized": "a b-\u003ea(c b)",
        "package": "abstract-par",
        "partial": "",
        "signature": "m a-\u003em(future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:spawnP",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a pure (rather than monadic) computation.  Fully-strict.\n\u003c/p\u003e\u003cpre\u003e  spawnP = spawn . return\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "a -\u003e m (future a)",
        "fct-source": "src/Control-Monad-Par-Class.html#spawnP",
        "fct-type": "method",
        "title": "spawnP"
      },
      "index": {
        "description": "Spawn pure rather than monadic computation Fully-strict spawnP spawn return",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "spawnP",
        "normalized": "a-\u003eb(c a)",
        "package": "abstract-par",
        "partial": "",
        "signature": "a-\u003em(future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Class.html#v:spawn_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but the result is only head-strict, not fully-strict.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Class",
        "fct-package": "abstract-par",
        "fct-signature": "m a -\u003e m (future a)",
        "fct-source": "src/Control-Monad-Par-Class.html#spawn_",
        "fct-type": "method",
        "title": "spawn_"
      },
      "index": {
        "description": "Like spawn but the result is only head-strict not fully-strict",
        "hierarchy": "Control Monad Par Class",
        "module": "Control.Monad.Par.Class",
        "name": "spawn_",
        "normalized": "a b-\u003ea(c b)",
        "package": "abstract-par",
        "partial": "",
        "signature": "m a-\u003em(future a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe operations.  NOT part of \u003ca\u003eSafe Haskell\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThese are \u003ca\u003eunsafe\u003c/a\u003e (in the normal, Haskell sense) when used with a\n \u003ca\u003erunPar\u003c/a\u003e of type `Par a -\u003e a`.  If used with a \u003ccode\u003erunParIO\u003c/code\u003e that\n stays in the IO monad, then they are simply dangerous.\n\u003c/p\u003e\u003cp\u003eFor the purposes of Safe Haskell, any module that imports this\n module becomes untrustworthy.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Par.Unsafe",
        "fct-package": "abstract-par",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Par-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Unsafe operations NOT part of Safe Haskell These are unsafe in the normal Haskell sense when used with runPar of type Par If used with runParIO that stays in the IO monad then they are simply dangerous For the purposes of Safe Haskell any module that imports this module becomes untrustworthy",
        "hierarchy": "Control Monad Par Unsafe",
        "module": "Control.Monad.Par.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "abstract-par",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Unsafe.html#t:ParUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of Par monads that provide unsafe functionality.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Unsafe",
        "fct-package": "abstract-par",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Par-Unsafe.html#ParUnsafe",
        "fct-type": "class",
        "title": "ParUnsafe"
      },
      "index": {
        "description": "The class of Par monads that provide unsafe functionality",
        "hierarchy": "Control Monad Par Unsafe",
        "module": "Control.Monad.Par.Unsafe",
        "name": "ParUnsafe",
        "normalized": "",
        "package": "abstract-par",
        "partial": "Par Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Unsafe.html#v:unsafeParIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation into the Par monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Unsafe",
        "fct-package": "abstract-par",
        "fct-signature": "IO a -\u003e p a",
        "fct-source": "src/Control-Monad-Par-Unsafe.html#unsafeParIO",
        "fct-type": "method",
        "title": "unsafeParIO"
      },
      "index": {
        "description": "Lift an IO operation into the Par monad",
        "hierarchy": "Control Monad Par Unsafe",
        "module": "Control.Monad.Par.Unsafe",
        "name": "unsafeParIO",
        "normalized": "IO a-\u003eb a",
        "package": "abstract-par",
        "partial": "Par IO",
        "signature": "IO a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Unsafe.html#v:unsafePeek",
      "description": {
        "fct-descr": "\u003cp\u003ePeek at the current contents of an \u003ccode\u003eIVar\u003c/code\u003e in a nonblocking way.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Unsafe",
        "fct-package": "abstract-par",
        "fct-signature": "iv a -\u003e p (Maybe a)",
        "fct-source": "src/Control-Monad-Par-Unsafe.html#unsafePeek",
        "fct-type": "method",
        "title": "unsafePeek"
      },
      "index": {
        "description": "Peek at the current contents of an IVar in nonblocking way",
        "hierarchy": "Control Monad Par Unsafe",
        "module": "Control.Monad.Par.Unsafe",
        "name": "unsafePeek",
        "normalized": "a b-\u003ec(Maybe b)",
        "package": "abstract-par",
        "partial": "Peek",
        "signature": "iv a-\u003ep(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/abstract-par/docs/Control-Monad-Par-Unsafe.html#v:unsafeTryPut",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to put a value into an \u003ccode\u003eIVar\u003c/code\u003e.  If successful, return the\n   value put.  If something is already there, return it instead.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Par.Unsafe",
        "fct-package": "abstract-par",
        "fct-signature": "iv a -\u003e a -\u003e p a",
        "fct-source": "src/Control-Monad-Par-Unsafe.html#unsafeTryPut",
        "fct-type": "method",
        "title": "unsafeTryPut"
      },
      "index": {
        "description": "Attempt to put value into an IVar If successful return the value put If something is already there return it instead",
        "hierarchy": "Control Monad Par Unsafe",
        "module": "Control.Monad.Par.Unsafe",
        "name": "unsafeTryPut",
        "normalized": "a b-\u003eb-\u003ec b",
        "package": "abstract-par",
        "partial": "Try Put",
        "signature": "iv a-\u003ea-\u003ep a"
      }
    }
  }
]