[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is \u003cem\u003enot\u003c/em\u003e Safe Haskell, but it must be used to create\n new LVar types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module is not Safe Haskell but it must be used to create new LVar types",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "lvish",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#t:DeepFrz",
      "description": {
        "fct-descr": "\u003cp\u003eDeepFreezing is a type-level (guaranteed \u003cem\u003eO(1)\u003c/em\u003e time complexity)\n operation.  It marks an LVar and its contents (recursively) as\n frozen.  DeepFreezing is not an action that can be taken directly\n by the user, however.  Rather, it is the final step in a\n \u003ccode\u003erunParThenFreeze\u003c/code\u003e invocation.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#DeepFrz",
        "fct-type": "class",
        "title": "DeepFrz"
      },
      "index": {
        "description": "DeepFreezing is type-level guaranteed time complexity operation It marks an LVar and its contents recursively as frozen DeepFreezing is not an action that can be taken directly by the user however Rather it is the final step in runParThenFreeze invocation",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "DeepFrz",
        "normalized": "",
        "package": "lvish",
        "partial": "Deep Frz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#t:Frzn",
      "description": {
        "fct-descr": "\u003cp\u003eAn uninhabited type that signals that an LVar has been frozen.\n LVars should use this in place of their \u003ccode\u003es\u003c/code\u003e parameter.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#Frzn",
        "fct-type": "data",
        "title": "Frzn"
      },
      "index": {
        "description": "An uninhabited type that signals that an LVar has been frozen LVars should use this in place of their parameter",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "Frzn",
        "normalized": "",
        "package": "lvish",
        "partial": "Frzn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#t:NonFrzn",
      "description": {
        "fct-descr": "\u003cp\u003eThis exists only for the purpose of being a type which is \u003cem\u003enot\u003c/em\u003e equal to \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e.\n One could just as well have used \u003ccode\u003e()\u003c/code\u003e, but this is more descriptive.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#NonFrzn",
        "fct-type": "data",
        "title": "NonFrzn"
      },
      "index": {
        "description": "This exists only for the purpose of being type which is not equal to Frzn One could just as well have used but this is more descriptive",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "NonFrzn",
        "normalized": "",
        "package": "lvish",
        "partial": "Non Frzn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#t:Trvrsbl",
      "description": {
        "fct-descr": "\u003cp\u003eAn uninhabited type that signals that an LVar is not only frozen,\n but it may be traversed in whatever order its internal\n representation dictates.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#Trvrsbl",
        "fct-type": "data",
        "title": "Trvrsbl"
      },
      "index": {
        "description": "An uninhabited type that signals that an LVar is not only frozen but it may be traversed in whatever order its internal representation dictates",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "Trvrsbl",
        "normalized": "",
        "package": "lvish",
        "partial": "Trvrsbl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz-Internal.html#v:frz",
      "description": {
        "fct-descr": "\u003cp\u003ePrivate: not exported to the end user.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz.Internal",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e FrzType a",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#frz",
        "fct-type": "method",
        "title": "frz"
      },
      "index": {
        "description": "Private not exported to the end user",
        "hierarchy": "Control LVish DeepFrz Internal",
        "module": "Control.LVish.DeepFrz.Internal",
        "name": "frz",
        "normalized": "a-\u003eFrzType a",
        "package": "lvish",
        "partial": "",
        "signature": "a-\u003eFrzType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e module provides a way to return arbitrarily complex data\nstructures containing LVars from \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cp\u003eThe important thing to know is that to use \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e to run a\n\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation, you must make sure that all types you return from\nthe \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation have \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e instances.  This means that, if\nyou wish to return a user-defined type, you will need to include a bit\nof boilerplate to give it a \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e instance.  Here is a complete\nexample:\n\u003c/p\u003e\u003cpre\u003e \n import Control.LVish.DeepFrz\n \n data MyData = MyData Int deriving Show\n \n instance DeepFrz MyData where\n   type FrzType MyData = MyData\n \n main = print (runParThenFreeze (return (MyData 3)))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Control-LVish-DeepFrz.html",
        "fct-type": "module",
        "title": "DeepFrz"
      },
      "index": {
        "description": "The DeepFrz module provides way to return arbitrarily complex data structures containing LVars from Par computations The important thing to know is that to use runParThenFreeze to run Par computation you must make sure that all types you return from the Par computation have DeepFrz instances This means that if you wish to return user-defined type you will need to include bit of boilerplate to give it DeepFrz instance Here is complete example import Control.LVish.DeepFrz data MyData MyData Int deriving Show instance DeepFrz MyData where type FrzType MyData MyData main print runParThenFreeze return MyData",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "DeepFrz",
        "normalized": "",
        "package": "lvish",
        "partial": "Deep Frz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#t:DeepFrz",
      "description": {
        "fct-descr": "\u003cp\u003eDeepFreezing is a type-level (guaranteed \u003cem\u003eO(1)\u003c/em\u003e time complexity)\n operation.  It marks an LVar and its contents (recursively) as\n frozen.  DeepFreezing is not an action that can be taken directly\n by the user, however.  Rather, it is the final step in a\n \u003ccode\u003erunParThenFreeze\u003c/code\u003e invocation.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#DeepFrz",
        "fct-type": "class",
        "title": "DeepFrz"
      },
      "index": {
        "description": "DeepFreezing is type-level guaranteed time complexity operation It marks an LVar and its contents recursively as frozen DeepFreezing is not an action that can be taken directly by the user however Rather it is the final step in runParThenFreeze invocation",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "DeepFrz",
        "normalized": "",
        "package": "lvish",
        "partial": "Deep Frz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#t:Frzn",
      "description": {
        "fct-descr": "\u003cp\u003eAn uninhabited type that signals that an LVar has been frozen.\n LVars should use this in place of their \u003ccode\u003es\u003c/code\u003e parameter.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#Frzn",
        "fct-type": "data",
        "title": "Frzn"
      },
      "index": {
        "description": "An uninhabited type that signals that an LVar has been frozen LVars should use this in place of their parameter",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "Frzn",
        "normalized": "",
        "package": "lvish",
        "partial": "Frzn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#t:NonFrzn",
      "description": {
        "fct-descr": "\u003cp\u003eThis exists only for the purpose of being a type which is \u003cem\u003enot\u003c/em\u003e equal to \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e.\n One could just as well have used \u003ccode\u003e()\u003c/code\u003e, but this is more descriptive.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#NonFrzn",
        "fct-type": "data",
        "title": "NonFrzn"
      },
      "index": {
        "description": "This exists only for the purpose of being type which is not equal to Frzn One could just as well have used but this is more descriptive",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "NonFrzn",
        "normalized": "",
        "package": "lvish",
        "partial": "Non Frzn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#t:Trvrsbl",
      "description": {
        "fct-descr": "\u003cp\u003eAn uninhabited type that signals that an LVar is not only frozen,\n but it may be traversed in whatever order its internal\n representation dictates.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-DeepFrz-Internal.html#Trvrsbl",
        "fct-type": "data",
        "title": "Trvrsbl"
      },
      "index": {
        "description": "An uninhabited type that signals that an LVar is not only frozen but it may be traversed in whatever order its internal representation dictates",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "Trvrsbl",
        "normalized": "",
        "package": "lvish",
        "partial": "Trvrsbl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#v:runParThenFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eUnder normal conditions, calling a \u003ccode\u003efreeze\u003c/code\u003e operation inside a\n \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation makes the \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation quasi-deterministic.\n However, if we freeze only after all LVar operations are completed\n (after the implicit global barrier of \u003ccode\u003erunPar\u003c/code\u003e), then we've avoided\n all data races, and freezing is therefore safe.  Running a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\n computation with \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e accomplishes this, without our\n having to call \u003ccode\u003efreeze\u003c/code\u003e explicitly.\n\u003c/p\u003e\u003cp\u003eIn order to use \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e, the type returned from the\n \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation must be a member of the \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e class.  All the\n \u003ccode\u003eData.LVar.*\u003c/code\u003e libraries should provide instances of \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e\n already.  Further, you can create additional instances for custom,\n pure datatypes.  The result of a \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e depends on the\n type-level function \u003ccode\u003e\u003ca\u003eFrzType\u003c/a\u003e\u003c/code\u003e, whose only purpose is to toggle the\n \u003ccode\u003es\u003c/code\u003e parameters of all IVars to the \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e\u003cp\u003eSignificantly, the freeze at the end of \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e has \u003cem\u003eno\u003c/em\u003e runtime cost, in\n spite of the fact that it enables a \u003cem\u003edeep\u003c/em\u003e (recursive) freeze of the value returned\n by the \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "Par Det NonFrzn a -\u003e FrzType a",
        "fct-source": "src/Control-LVish-DeepFrz.html#runParThenFreeze",
        "fct-type": "function",
        "title": "runParThenFreeze"
      },
      "index": {
        "description": "Under normal conditions calling freeze operation inside Par computation makes the Par computation quasi-deterministic However if we freeze only after all LVar operations are completed after the implicit global barrier of runPar then we ve avoided all data races and freezing is therefore safe Running Par computation with runParThenFreeze accomplishes this without our having to call freeze explicitly In order to use runParThenFreeze the type returned from the Par computation must be member of the DeepFrz class All the Data.LVar libraries should provide instances of DeepFrz already Further you can create additional instances for custom pure datatypes The result of runParThenFreeze depends on the type-level function FrzType whose only purpose is to toggle the parameters of all IVars to the Frzn state Significantly the freeze at the end of runParThenFreeze has no runtime cost in spite of the fact that it enables deep recursive freeze of the value returned by the Par computation",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "runParThenFreeze",
        "normalized": "Par Det NonFrzn a-\u003eFrzType a",
        "package": "lvish",
        "partial": "Par Then Freeze",
        "signature": "Par Det NonFrzn a-\u003eFrzType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-DeepFrz.html#v:runParThenFreezeIO",
      "description": {
        "fct-descr": "\u003cp\u003eThis version works for nondeterministic computations as well.\n\u003c/p\u003e\u003cp\u003eOf course, nondeterministic computations may also call \u003ccode\u003efreeze\u003c/code\u003e\n internally, but this function has an advantage to doing your own\n \u003ccode\u003efreeze\u003c/code\u003e at the end of a \u003ccode\u003erunParIO\u003c/code\u003e: there is an implicit barrier\n before the final freeze.  Further, \u003ccode\u003e\u003ca\u003eDeepFrz\u003c/a\u003e\u003c/code\u003e has no runtime\n overhead, whereas regular freezing has a cost.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.DeepFrz",
        "fct-package": "lvish",
        "fct-signature": "Par d NonFrzn a -\u003e IO (FrzType a)",
        "fct-source": "src/Control-LVish-DeepFrz.html#runParThenFreezeIO",
        "fct-type": "function",
        "title": "runParThenFreezeIO"
      },
      "index": {
        "description": "This version works for nondeterministic computations as well Of course nondeterministic computations may also call freeze internally but this function has an advantage to doing your own freeze at the end of runParIO there is an implicit barrier before the final freeze Further DeepFrz has no runtime overhead whereas regular freezing has cost",
        "hierarchy": "Control LVish DeepFrz",
        "module": "Control.LVish.DeepFrz",
        "name": "runParThenFreezeIO",
        "normalized": "Par a NonFrzn b-\u003eIO(FrzType b)",
        "package": "lvish",
        "partial": "Par Then Freeze IO",
        "signature": "Par d NonFrzn a-\u003eIO(FrzType a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is \u003cem\u003enot\u003c/em\u003e Safe Haskell; as an end-user, you shouldn't ever\nneed to import it.\n\u003c/p\u003e\u003cp\u003eIt is exposed only because it is necessary for implementing \u003cem\u003enew\u003c/em\u003e LVar\ntypes that will live in their own, separate packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Control-LVish-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module is not Safe Haskell as an end-user you shouldn ever need to import it It is exposed only because it is necessary for implementing new LVar types that will live in their own separate packages",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "lvish",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#t:Determinism",
      "description": {
        "fct-descr": "\u003cp\u003eThis datatype is promoted to type-level (\u003ccode\u003eDataKinds\u003c/code\u003e extension)\n and used to indicate whether a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation is\n guaranteed-deterministic, or only quasi-deterministic (i.e., might\n throw \u003ccode\u003eNonDeterminismExn\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "data",
        "title": "Determinism"
      },
      "index": {
        "description": "This datatype is promoted to type-level DataKinds extension and used to indicate whether Par computation is guaranteed-deterministic or only quasi-deterministic i.e might throw NonDeterminismExn",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "Determinism",
        "normalized": "",
        "package": "lvish",
        "partial": "Determinism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#t:LVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic representation of LVars used by the scheduler.  The\n end-user can't actually do anything with these and should not try\n to.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Control-LVish-Internal.html#LVar",
        "fct-type": "newtype",
        "title": "LVar"
      },
      "index": {
        "description": "The generic representation of LVars used by the scheduler The end-user can actually do anything with these and should not try to",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "LVar",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#t:Par",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of parallel computations.  A computation \u003ccode\u003ePar d s a\u003c/code\u003e may or may not be\n deterministic based on the setting of the \u003ccode\u003ed\u003c/code\u003e parameter (of kind \u003ccode\u003e\u003ca\u003eDeterminism\u003c/a\u003e\u003c/code\u003e).\n The \u003ccode\u003es\u003c/code\u003e parameter is for preventing the escape of \u003ccode\u003eLVar\u003c/code\u003es from \u003ccode\u003ePar\u003c/code\u003e computations\n (just like the \u003ccode\u003eST\u003c/code\u003e monad).  \n\u003c/p\u003e\u003cp\u003eImplementation note: This is a wrapper around the internal \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e type, only with more type parameters.  \n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Control-LVish-Internal.html#Par",
        "fct-type": "newtype",
        "title": "Par"
      },
      "index": {
        "description": "The type of parallel computations computation Par may or may not be deterministic based on the setting of the parameter of kind Determinism The parameter is for preventing the escape of LVar from Par computations just like the ST monad Implementation note This is wrapper around the internal Par type only with more type parameters",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "Par",
        "normalized": "",
        "package": "lvish",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#t:QPar",
      "description": {
        "fct-descr": "\u003cp\u003eA shorthand for quasi-deterministic \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "type",
        "fct-source": "src/Control-LVish-Internal.html#QPar",
        "fct-type": "type",
        "title": "QPar"
      },
      "index": {
        "description": "shorthand for quasi-deterministic Par computations",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "QPar",
        "normalized": "",
        "package": "lvish",
        "partial": "QPar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:Det",
      "description": {
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Det",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "function",
        "title": "Det"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "Det",
        "normalized": "",
        "package": "lvish",
        "partial": "Det",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:QuasiDet",
      "description": {
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "QuasiDet",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "function",
        "title": "QuasiDet"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "QuasiDet",
        "normalized": "",
        "package": "lvish",
        "partial": "Quasi Det",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:WrapLVar",
      "description": {
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "WrapLVar",
        "fct-source": "src/Control-LVish-Internal.html#LVar",
        "fct-type": "function",
        "title": "WrapLVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "WrapLVar",
        "normalized": "",
        "package": "lvish",
        "partial": "Wrap LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:WrapPar",
      "description": {
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par a -\u003e Par d s a",
        "fct-source": "src/Control-LVish-Internal.html#Par",
        "fct-type": "function",
        "title": "WrapPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "WrapPar",
        "normalized": "Par a-\u003ePar b c a",
        "package": "lvish",
        "partial": "Wrap Par",
        "signature": "Par a-\u003ePar d s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:dbgLvl",
      "description": {
        "fct-descr": "\u003cp\u003eDebugging flag shared by several modules.\n   This is activated by setting the environment variable \u003ccode\u003eDEBUG=1..5\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy convention \u003ccode\u003eDEBUG=100\u003c/code\u003e turns on full sequentialization of the program and\n   control over the interleavings in concurrent code, enabling systematic debugging\n   of concurrency problems.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Int",
        "fct-source": "src/Control-LVish-Logging.html#dbgLvl",
        "fct-type": "function",
        "title": "dbgLvl"
      },
      "index": {
        "description": "Debugging flag shared by several modules This is activated by setting the environment variable DEBUG By convention DEBUG turns on full sequentialization of the program and control over the interleavings in concurrent code enabling systematic debugging of concurrency problems",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "dbgLvl",
        "normalized": "",
        "package": "lvish",
        "partial": "Lvl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe internal operation to lift IO into the Par monad.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "IO a -\u003e Par d s a",
        "fct-source": "src/Control-LVish-Internal.html#liftIO",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Unsafe internal operation to lift IO into the Par monad",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "liftIO",
        "normalized": "IO a-\u003ePar b c a",
        "package": "lvish",
        "partial": "IO",
        "signature": "IO a-\u003ePar d s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the state of an LVar.  This should only be used by implementations of\n new LVar data structures.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "LVar s a d -\u003e a",
        "fct-source": "src/Control-LVish-Internal.html#state",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Extract the state of an LVar This should only be used by implementations of new LVar data structures",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "state",
        "normalized": "LVar a b c-\u003eb",
        "package": "lvish",
        "partial": "",
        "signature": "LVar s a d-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:unWrapLVar",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "LVar all delt",
        "fct-source": "src/Control-LVish-Internal.html#LVar",
        "fct-type": "function",
        "title": "unWrapLVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "unWrapLVar",
        "normalized": "",
        "package": "lvish",
        "partial": "Wrap LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:unWrapPar",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe: drops type information to go from the safe \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e monad to\n the internal, dangerous one.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par d s a -\u003e Par a",
        "fct-source": "src/Control-LVish-Internal.html#unWrapPar",
        "fct-type": "function",
        "title": "unWrapPar"
      },
      "index": {
        "description": "Unsafe drops type information to go from the safe Par monad to the internal dangerous one",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "unWrapPar",
        "normalized": "Par a b c-\u003ePar c",
        "package": "lvish",
        "partial": "Wrap Par",
        "signature": "Par d s a-\u003ePar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:unsafeConvert",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the extra type annotations regarding both determinism and session-sealing.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par d1 s1 a -\u003e Par d2 s2 a",
        "fct-source": "src/Control-LVish-Internal.html#unsafeConvert",
        "fct-type": "function",
        "title": "unsafeConvert"
      },
      "index": {
        "description": "Ignore the extra type annotations regarding both determinism and session-sealing",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "unsafeConvert",
        "normalized": "Par a b c-\u003ePar a b c",
        "package": "lvish",
        "partial": "Convert",
        "signature": "Par d s a-\u003ePar d s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:unsafeDet",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe coercion from quasi-deterministic to deterministic.  The user is\n promising that code is carefully constructed so that put/freeze races will not\n occur.\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par d1 s a -\u003e Par d2 s a",
        "fct-source": "src/Control-LVish-Internal.html#unsafeDet",
        "fct-type": "function",
        "title": "unsafeDet"
      },
      "index": {
        "description": "Unsafe coercion from quasi-deterministic to deterministic The user is promising that code is carefully constructed so that put freeze races will not occur",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "unsafeDet",
        "normalized": "Par a b c-\u003ePar a b c",
        "package": "lvish",
        "partial": "Det",
        "signature": "Par d s a-\u003ePar d s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Internal.html#v:unsafeRunPar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is cheating!  It pays no attention to session sealing (\u003ccode\u003es\u003c/code\u003e) or to the\n determinism level (\u003ccode\u003ed\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.LVish.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par d s a -\u003e a",
        "fct-source": "src/Control-LVish-Internal.html#unsafeRunPar",
        "fct-type": "function",
        "title": "unsafeRunPar"
      },
      "index": {
        "description": "This is cheating It pays no attention to session sealing or to the determinism level",
        "hierarchy": "Control LVish Internal",
        "module": "Control.LVish.Internal",
        "name": "unsafeRunPar",
        "normalized": "Par a b c-\u003ec",
        "package": "lvish",
        "partial": "Run Par",
        "signature": "Par d s a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor debugging purposes, it can be useful to lift an IO computation into an LVish \u003ccode\u003ePar\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis module is imported for instances only (specifically, the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.LVish.Unsafe",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Control-LVish-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "For debugging purposes it can be useful to lift an IO computation into an LVish Par monad This module is imported for instances only specifically the MonadIO instance",
        "hierarchy": "Control LVish Unsafe",
        "module": "Control.LVish.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "lvish",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003elvish\u003c/code\u003e package provides a parallel programming model based on monotonically\n  growing data structures.\n\u003c/p\u003e\u003cp\u003eThis module provides the core scheduler and basic control flow\n  operations.  But to do anything useful you will need to import, along\n  with this module, one of the data structure modules (\u003ccode\u003eData.LVar.*\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eHere is a self-contained example. This program writes the same value\n  to an \u003ccode\u003eLVar\u003c/code\u003e called \u003ccode\u003enum\u003c/code\u003e twice.  It deterministically prints \u003ccode\u003e4\u003c/code\u003e\n  instead of raising an error, as it would if \u003ccode\u003enum\u003c/code\u003e were a traditional\n  IVar rather than an LVar. (You will need to compile using the\n  \u003ccode\u003e-XDataKinds\u003c/code\u003e extension.)\n\u003c/p\u003e\u003cpre\u003e \n import Control.LVish  -- Generic scheduler; works with any lattice.\n import Data.LVar.IVar -- The particular lattice in question.\n \n p :: Par Det s Int\n p = do\n   num \u003c- new\n   fork $ put num 4\n   fork $ put num 4\n   get num\n \n main = do\n   print $ runPar $ p\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Control-LVish.html",
        "fct-type": "module",
        "title": "LVish"
      },
      "index": {
        "description": "The lvish package provides parallel programming model based on monotonically growing data structures This module provides the core scheduler and basic control flow operations But to do anything useful you will need to import along with this module one of the data structure modules Data.LVar Here is self-contained example This program writes the same value to an LVar called num twice It deterministically prints instead of raising an error as it would if num were traditional IVar rather than an LVar You will need to compile using the XDataKinds extension import Control.LVish Generic scheduler works with any lattice import Data.LVar.IVar The particular lattice in question Par Det Int do num new fork put num fork put num get num main do print runPar",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "LVish",
        "normalized": "",
        "package": "lvish",
        "partial": "LVish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:DbgCfg",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Types.html#DbgCfg",
        "fct-type": "data",
        "title": "DbgCfg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "DbgCfg",
        "normalized": "",
        "package": "lvish",
        "partial": "Dbg Cfg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:Determinism",
      "description": {
        "fct-descr": "\u003cp\u003eThis datatype is promoted to type-level (\u003ccode\u003eDataKinds\u003c/code\u003e extension)\n and used to indicate whether a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation is\n guaranteed-deterministic, or only quasi-deterministic (i.e., might\n throw \u003ccode\u003eNonDeterminismExn\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "data",
        "title": "Determinism"
      },
      "index": {
        "description": "This datatype is promoted to type-level DataKinds extension and used to indicate whether Par computation is guaranteed-deterministic or only quasi-deterministic i.e might throw NonDeterminismExn",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "Determinism",
        "normalized": "",
        "package": "lvish",
        "partial": "Determinism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:HandlerPool",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eHandlerPool\u003c/code\u003e contains a way to count outstanding parallel computations that\n are affiliated with the pool.  It detects the condition where all such threads\n have completed.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-SchedIdempotent.html#HandlerPool",
        "fct-type": "data",
        "title": "HandlerPool"
      },
      "index": {
        "description": "HandlerPool contains way to count outstanding parallel computations that are affiliated with the pool It detects the condition where all such threads have completed",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "HandlerPool",
        "normalized": "",
        "package": "lvish",
        "partial": "Handler Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:LVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic representation of LVars used by the scheduler.  The\n end-user can't actually do anything with these and should not try\n to.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Internal.html#LVar",
        "fct-type": "data",
        "title": "LVar"
      },
      "index": {
        "description": "The generic representation of LVars used by the scheduler The end-user can actually do anything with these and should not try to",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "LVar",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:LVishException",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003eLVar\u003c/code\u003es share a common notion of exceptions.\n   The two common forms of exception currently are conflicting-put and put-after-freeze.\n   There are also errors that correspond to particular invariants for particular LVars.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Types.html#LVishException",
        "fct-type": "data",
        "title": "LVishException"
      },
      "index": {
        "description": "All LVar share common notion of exceptions The two common forms of exception currently are conflicting-put and put-after-freeze There are also errors that correspond to particular invariants for particular LVars",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "LVishException",
        "normalized": "",
        "package": "lvish",
        "partial": "LVish Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:OutDest",
      "description": {
        "fct-descr": "\u003cp\u003eA destination for log messages\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Types.html#OutDest",
        "fct-type": "data",
        "title": "OutDest"
      },
      "index": {
        "description": "destination for log messages",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "OutDest",
        "normalized": "",
        "package": "lvish",
        "partial": "Out Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#t:Par",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of parallel computations.  A computation \u003ccode\u003ePar d s a\u003c/code\u003e may or may not be\n deterministic based on the setting of the \u003ccode\u003ed\u003c/code\u003e parameter (of kind \u003ccode\u003e\u003ca\u003eDeterminism\u003c/a\u003e\u003c/code\u003e).\n The \u003ccode\u003es\u003c/code\u003e parameter is for preventing the escape of \u003ccode\u003eLVar\u003c/code\u003es from \u003ccode\u003ePar\u003c/code\u003e computations\n (just like the \u003ccode\u003eST\u003c/code\u003e monad).  \n\u003c/p\u003e\u003cp\u003eImplementation note: This is a wrapper around the internal \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e type, only with more type parameters.  \n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Control-LVish-Internal.html#Par",
        "fct-type": "data",
        "title": "Par"
      },
      "index": {
        "description": "The type of parallel computations computation Par may or may not be deterministic based on the setting of the parameter of kind Determinism The parameter is for preventing the escape of LVar from Par computations just like the ST monad Implementation note This is wrapper around the internal Par type only with more type parameters",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "Par",
        "normalized": "",
        "package": "lvish",
        "partial": "Par",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:ConflictingPutExn",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "ConflictingPutExn String",
        "fct-source": "src/Control-LVish-Types.html#LVishException",
        "fct-type": "function",
        "title": "ConflictingPutExn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "ConflictingPutExn",
        "normalized": "",
        "package": "lvish",
        "partial": "Conflicting Put Exn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:DbgCfg",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "DbgCfg",
        "fct-source": "src/Control-LVish-Types.html#DbgCfg",
        "fct-type": "function",
        "title": "DbgCfg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "DbgCfg",
        "normalized": "",
        "package": "lvish",
        "partial": "Dbg Cfg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:Det",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Det",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "function",
        "title": "Det"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "Det",
        "normalized": "",
        "package": "lvish",
        "partial": "Det",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:LVarSpecificExn",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "LVarSpecificExn String",
        "fct-source": "src/Control-LVish-Types.html#LVishException",
        "fct-type": "function",
        "title": "LVarSpecificExn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "LVarSpecificExn",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar Specific Exn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:OutputEvents",
      "description": {
        "fct-descr": "\u003cp\u003eOutput via GHC's \u003ccode\u003etraceEvent\u003c/code\u003e runtime events.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "OutputEvents",
        "fct-source": "src/Control-LVish-Types.html#OutDest",
        "fct-type": "function",
        "title": "OutputEvents"
      },
      "index": {
        "description": "Output via GHC traceEvent runtime events",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "OutputEvents",
        "normalized": "",
        "package": "lvish",
        "partial": "Output Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:OutputInMemory",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate output in memory and flush when appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "OutputInMemory",
        "fct-source": "src/Control-LVish-Types.html#OutDest",
        "fct-type": "function",
        "title": "OutputInMemory"
      },
      "index": {
        "description": "Accumulate output in memory and flush when appropriate",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "OutputInMemory",
        "normalized": "",
        "package": "lvish",
        "partial": "Output In Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:OutputTo",
      "description": {
        "fct-descr": "\u003cp\u003ePrinted human-readable output to a handle.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "OutputTo Handle",
        "fct-source": "src/Control-LVish-Types.html#OutDest",
        "fct-type": "function",
        "title": "OutputTo"
      },
      "index": {
        "description": "Printed human-readable output to handle",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "OutputTo",
        "normalized": "",
        "package": "lvish",
        "partial": "Output To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:PutAfterFreezeExn",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "PutAfterFreezeExn String",
        "fct-source": "src/Control-LVish-Types.html#LVishException",
        "fct-type": "function",
        "title": "PutAfterFreezeExn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "PutAfterFreezeExn",
        "normalized": "",
        "package": "lvish",
        "partial": "Put After Freeze Exn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:QuasiDet",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "QuasiDet",
        "fct-source": "src/Control-LVish-Internal.html#Determinism",
        "fct-type": "function",
        "title": "QuasiDet"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "QuasiDet",
        "normalized": "",
        "package": "lvish",
        "partial": "Quasi Det",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:andMap",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s Bool) -\u003e [a] -\u003e Par d s Bool",
        "fct-source": "src/Control-LVish-Logical.html#andMap",
        "fct-type": "function",
        "title": "andMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "andMap",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c Bool)-\u003e[a]-\u003ePar b c Bool",
        "package": "lvish",
        "partial": "Map",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s Bool)-\u003e[a]-\u003ePar d s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:asyncAnd",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel \u003ccode\u003eAnd\u003c/code\u003e operation that can return early---whenever a False appears on either branch.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e Par d s Bool -\u003e Par d s Bool -\u003e (Bool -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Logical.html#asyncAnd",
        "fct-type": "function",
        "title": "asyncAnd"
      },
      "index": {
        "description": "parallel And operation that can return early---whenever False appears on either branch",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "asyncAnd",
        "normalized": "Maybe HandlerPool-\u003ePar a b Bool-\u003ePar a b Bool-\u003e(Bool-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "And",
        "signature": "Maybe HandlerPool-\u003ePar d s Bool-\u003ePar d s Bool-\u003e(Bool-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:asyncOr",
      "description": {
        "fct-descr": "\u003cp\u003eAnalagous operation for \u003ccode\u003eOr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e Par d s Bool -\u003e Par d s Bool -\u003e (Bool -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Logical.html#asyncOr",
        "fct-type": "function",
        "title": "asyncOr"
      },
      "index": {
        "description": "Analagous operation for Or",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "asyncOr",
        "normalized": "Maybe HandlerPool-\u003ePar a b Bool-\u003ePar a b Bool-\u003e(Bool-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "Or",
        "signature": "Maybe HandlerPool-\u003ePar d s Bool-\u003ePar d s Bool-\u003e(Bool-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:dbgDests",
      "description": {
        "fct-descr": "\u003cp\u003eDestinations for debug log messages.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "[OutDest]",
        "fct-source": "src/Control-LVish-Types.html#DbgCfg",
        "fct-type": "function",
        "title": "dbgDests"
      },
      "index": {
        "description": "Destinations for debug log messages",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "dbgDests",
        "normalized": "[OutDest]",
        "package": "lvish",
        "partial": "Dests",
        "signature": "[OutDest]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:dbgRange",
      "description": {
        "fct-descr": "\u003cp\u003eInclusive range of debug messages to accept\n   (i.e. filter on priority level).  If Nothing, use the default level,\n   which is (0,N) where N is controlled by the DEBUG environment variable.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe (Int, Int)",
        "fct-source": "src/Control-LVish-Types.html#DbgCfg",
        "fct-type": "function",
        "title": "dbgRange"
      },
      "index": {
        "description": "Inclusive range of debug messages to accept i.e filter on priority level If Nothing use the default level which is where is controlled by the DEBUG environment variable",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "dbgRange",
        "normalized": "Maybe(Int,Int)",
        "package": "lvish",
        "partial": "Range",
        "signature": "Maybe(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:dbgScheduling",
      "description": {
        "fct-descr": "\u003cp\u003eIn additional to logging debug messages, control\n   thread interleaving at these points when this is True.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Bool",
        "fct-source": "src/Control-LVish-Types.html#DbgCfg",
        "fct-type": "function",
        "title": "dbgScheduling"
      },
      "index": {
        "description": "In additional to logging debug messages control thread interleaving at these points when this is True",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "dbgScheduling",
        "normalized": "",
        "package": "lvish",
        "partial": "Scheduling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:for_",
      "description": {
        "fct-descr": "\u003cp\u003eA simple for loop for numeric ranges (not requiring deforestation\n optimizations like \u003ccode\u003eforM\u003c/code\u003e).  Inclusive start, exclusive end.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(Int, Int) -\u003e (Int -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Control-LVish-Basics.html#for_",
        "fct-type": "function",
        "title": "for_"
      },
      "index": {
        "description": "simple for loop for numeric ranges not requiring deforestation optimizations like forM Inclusive start exclusive end",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "for_",
        "normalized": "(Int,Int)-\u003e(Int-\u003ea())-\u003ea()",
        "package": "lvish",
        "partial": "",
        "signature": "(Int,Int)-\u003e(Int-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Par d s () -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "Execute computation in parallel",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "fork",
        "normalized": "Par a b()-\u003ePar a b()",
        "package": "lvish",
        "partial": "",
        "signature": "Par d s()-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:forkHP",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e that also allows the forked computation to be tracked in a\n \u003ccode\u003eHandlerPool\u003c/code\u003e, that enables the programmer to synchronize on the completion of the\n child computation.  But be careful; this does not automatically wait for\n all downstream forked computations (transitively).\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e Par d s () -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#forkHP",
        "fct-type": "function",
        "title": "forkHP"
      },
      "index": {
        "description": "version of fork that also allows the forked computation to be tracked in HandlerPool that enables the programmer to synchronize on the completion of the child computation But be careful this does not automatically wait for all downstream forked computations transitively",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "forkHP",
        "normalized": "Maybe HandlerPool-\u003ePar a b()-\u003ePar a b()",
        "package": "lvish",
        "partial": "HP",
        "signature": "Maybe HandlerPool-\u003ePar d s()-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:liftQD",
      "description": {
        "fct-descr": "\u003cp\u003eIt is always safe to lift a deterministic computation to a\n quasi-deterministic one.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Par Det s a -\u003e Par QuasiDet s a",
        "fct-source": "src/Control-LVish-Basics.html#liftQD",
        "fct-type": "function",
        "title": "liftQD"
      },
      "index": {
        "description": "It is always safe to lift deterministic computation to quasi-deterministic one",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "liftQD",
        "normalized": "Par Det a b-\u003ePar QuasiDet a b",
        "package": "lvish",
        "partial": "QD",
        "signature": "Par Det s a-\u003ePar QuasiDet s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:logDbgLn",
      "description": {
        "fct-descr": "\u003cp\u003eLog a line of debugging output.  This is only used when *compiled* in debugging\n mode.  It atomically adds a string onto an in-memory log.\n\u003c/p\u003e\u003cp\u003eThe provided \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, is the \u003ca\u003edebug level\u003c/a\u003e associated with the message, 1-5.  One is\n the least verbose, and five is the most.  When debugging, the user can control the\n debug level by setting the env var DEBUG, e.g. \u003ccode\u003eDEBUG=5\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e String -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#logDbgLn",
        "fct-type": "function",
        "title": "logDbgLn"
      },
      "index": {
        "description": "Log line of debugging output This is only used when compiled in debugging mode It atomically adds string onto an in-memory log The provided Int is the debug level associated with the message One is the least verbose and five is the most When debugging the user can control the debug level by setting the env var DEBUG e.g DEBUG",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "logDbgLn",
        "normalized": "Int-\u003eString-\u003ePar a b()",
        "package": "lvish",
        "partial": "Dbg Ln",
        "signature": "Int-\u003eString-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:newPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pool that can be used to synchronize on the completion of all\n parallel computations associated with the pool.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Par d s HandlerPool",
        "fct-source": "src/Control-LVish-Basics.html#newPool",
        "fct-type": "function",
        "title": "newPool"
      },
      "index": {
        "description": "Create new pool that can be used to synchronize on the completion of all parallel computations associated with the pool",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "newPool",
        "normalized": "",
        "package": "lvish",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:orMap",
      "description": {
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s Bool) -\u003e [a] -\u003e Par d s Bool",
        "fct-source": "src/Control-LVish-Logical.html#orMap",
        "fct-type": "function",
        "title": "orMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "orMap",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c Bool)-\u003e[a]-\u003ePar b c Bool",
        "package": "lvish",
        "partial": "Map",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s Bool)-\u003e[a]-\u003ePar d s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:parForL",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These will be removed in a future release in favor of a more general approach to loops.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLeft-biased parallel for loop.  As worker threads beyond the first are added,\n this hews closer to the sequential iteration order than an unbiased parallel loop.\n\u003c/p\u003e\u003cp\u003eTakes a range as inclusive-start, exclusive-end.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(Int, Int) -\u003e (Int -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#parForL",
        "fct-type": "function",
        "title": "parForL"
      },
      "index": {
        "description": "Deprecated These will be removed in future release in favor of more general approach to loops Left-biased parallel for loop As worker threads beyond the first are added this hews closer to the sequential iteration order than an unbiased parallel loop Takes range as inclusive-start exclusive-end",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "parForL",
        "normalized": "(Int,Int)-\u003e(Int-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "For",
        "signature": "(Int,Int)-\u003e(Int-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:parForSimple",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These will be removed in a future release in favor of a more general approach to loops.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThe least-sophisticated form of parallel loop.  Fork iterations one at a time.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(Int, Int) -\u003e (Int -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#parForSimple",
        "fct-type": "function",
        "title": "parForSimple"
      },
      "index": {
        "description": "Deprecated These will be removed in future release in favor of more general approach to loops The least-sophisticated form of parallel loop Fork iterations one at time",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "parForSimple",
        "normalized": "(Int,Int)-\u003e(Int-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "For Simple",
        "signature": "(Int,Int)-\u003e(Int-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:parForTiled",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These will be removed in a future release in favor of a more general approach to loops.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSplit the work into a number of tiles, and fork it in a tree topology.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e Int -\u003e (Int, Int) -\u003e (Int -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#parForTiled",
        "fct-type": "function",
        "title": "parForTiled"
      },
      "index": {
        "description": "Deprecated These will be removed in future release in favor of more general approach to loops Split the work into number of tiles and fork it in tree topology",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "parForTiled",
        "normalized": "Maybe HandlerPool-\u003eInt-\u003e(Int,Int)-\u003e(Int-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "For Tiled",
        "signature": "Maybe HandlerPool-\u003eInt-\u003e(Int,Int)-\u003e(Int-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:parForTree",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These will be removed in a future release in favor of a more general approach to loops.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDivide the iteration space recursively, but ultimately run every iteration in\n parallel.  That is, the loop body is permitted to block on other iterations.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(Int, Int) -\u003e (Int -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#parForTree",
        "fct-type": "function",
        "title": "parForTree"
      },
      "index": {
        "description": "Deprecated These will be removed in future release in favor of more general approach to loops Divide the iteration space recursively but ultimately run every iteration in parallel That is the loop body is permitted to block on other iterations",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "parForTree",
        "normalized": "(Int,Int)-\u003e(Int-\u003ePar a b())-\u003ePar a b()",
        "package": "lvish",
        "partial": "For Tree",
        "signature": "(Int,Int)-\u003e(Int-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:quiesce",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until a handler pool is quiescent, i.e., until all\n associated parallel computations have completed.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "HandlerPool -\u003e Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#quiesce",
        "fct-type": "function",
        "title": "quiesce"
      },
      "index": {
        "description": "Block until handler pool is quiescent i.e until all associated parallel computations have completed",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "quiesce",
        "normalized": "HandlerPool-\u003ePar a b()",
        "package": "lvish",
        "partial": "",
        "signature": "HandlerPool-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:runPar",
      "description": {
        "fct-descr": "\u003cp\u003eIf a computation is guaranteed-deterministic, then \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e becomes a dischargeable\n effect.  This function will create new worker threads and do the work in parallel,\n returning the final result.\n\u003c/p\u003e\u003cp\u003e(For now there is no sharing of workers with repeated invocations; so\n keep in mind that \u003ccode\u003erunPar\u003c/code\u003e is an expensive operation. [2013.09.27])\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(forall s.  Par Det s a) -\u003e a",
        "fct-source": "src/Control-LVish-Basics.html#runPar",
        "fct-type": "function",
        "title": "runPar"
      },
      "index": {
        "description": "If computation is guaranteed-deterministic then Par becomes dischargeable effect This function will create new worker threads and do the work in parallel returning the final result For now there is no sharing of workers with repeated invocations so keep in mind that runPar is an expensive operation",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "runPar",
        "normalized": "(a b Par Det c d)-\u003ed",
        "package": "lvish",
        "partial": "Par",
        "signature": "(forall s. Par Det s a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:runParDetailed",
      "description": {
        "fct-descr": "\u003cp\u003eA variant with full control over the relevant knobs.\n\u003c/p\u003e\u003cp\u003eReturns a list of flushed debug messages at the end (if in-memory logging was\n   enabled, otherwise the list is empty).\n\u003c/p\u003e\u003cp\u003eThis version of runPar catches ALL exceptions that occur within the runPar, and\n   returns them via an Either.  The reason for this is that even if an error\n   occurs, it is still useful to observe the log messages that lead to the failure.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "DbgCfg-\u003e Int-\u003e (forall s.  Par d s a)-\u003e IO ([String], Either SomeException a)",
        "fct-type": "function",
        "title": "runParDetailed"
      },
      "index": {
        "description": "variant with full control over the relevant knobs Returns list of flushed debug messages at the end if in-memory logging was enabled otherwise the list is empty This version of runPar catches ALL exceptions that occur within the runPar and returns them via an Either The reason for this is that even if an error occurs it is still useful to observe the log messages that lead to the failure",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "runParDetailed",
        "normalized": "DbgCfg-\u003eInt-\u003e(a b Par c d e)-\u003eIO([String],Either SomeException e)",
        "package": "lvish",
        "partial": "Par Detailed",
        "signature": "DbgCfg-\u003eInt-\u003e(forall s. Par d s a)-\u003eIO([String],Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:runParIO",
      "description": {
        "fct-descr": "\u003cp\u003eIf the input computation is quasi-deterministic (\u003ccode\u003e\u003ca\u003eQuasiDet\u003c/a\u003e\u003c/code\u003e), then this may\n throw a \u003ccode\u003e\u003ca\u003eLVishException\u003c/a\u003e\u003c/code\u003e nondeterministically on the thread that calls it, but if\n it returns without exception then it always returns the same answer.\n\u003c/p\u003e\u003cp\u003eIf the input computation is deterministic (\u003ccode\u003e\u003ca\u003eDet\u003c/a\u003e\u003c/code\u003e), then \u003ccode\u003erunParIO\u003c/code\u003e will return the\n same result as \u003ccode\u003e\u003ca\u003erunPar\u003c/a\u003e\u003c/code\u003e.  However, \u003ccode\u003e\u003ca\u003erunParIO\u003c/a\u003e\u003c/code\u003e is still possibly useful for\n avoiding an extra \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e required inside the implementation of\n \u003ccode\u003e\u003ca\u003erunPar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn the future, \u003cem\u003efull\u003c/em\u003e nondeterminism may be allowed as a third setting beyond\n \u003ccode\u003e\u003ca\u003eDet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eQuasiDet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(forall s.  Par d s a) -\u003e IO a",
        "fct-source": "src/Control-LVish-Basics.html#runParIO",
        "fct-type": "function",
        "title": "runParIO"
      },
      "index": {
        "description": "If the input computation is quasi-deterministic QuasiDet then this may throw LVishException nondeterministically on the thread that calls it but if it returns without exception then it always returns the same answer If the input computation is deterministic Det then runParIO will return the same result as runPar However runParIO is still possibly useful for avoiding an extra unsafePerformIO required inside the implementation of runPar In the future full nondeterminism may be allowed as third setting beyond Det and QuasiDet",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "runParIO",
        "normalized": "(a b Par c d e)-\u003eIO e",
        "package": "lvish",
        "partial": "Par IO",
        "signature": "(forall s. Par d s a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:runParLogged",
      "description": {
        "fct-descr": "\u003cp\u003eUseful for debugging.  Returns debugging logs, in realtime order, in addition to\n the final result.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(forall s.  Par d s a) -\u003e IO ([String], a)",
        "fct-source": "src/Control-LVish-Basics.html#runParLogged",
        "fct-type": "function",
        "title": "runParLogged"
      },
      "index": {
        "description": "Useful for debugging Returns debugging logs in realtime order in addition to the final result",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "runParLogged",
        "normalized": "(a b Par c d e)-\u003eIO([String],e)",
        "package": "lvish",
        "partial": "Par Logged",
        "signature": "(forall s. Par d s a)-\u003eIO([String],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:withNewPool",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a Par computation in the context of a fresh handler pool.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(HandlerPool -\u003e Par d s a) -\u003e Par d s (a, HandlerPool)",
        "fct-source": "src/Control-LVish-Basics.html#withNewPool",
        "fct-type": "function",
        "title": "withNewPool"
      },
      "index": {
        "description": "Execute Par computation in the context of fresh handler pool",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "withNewPool",
        "normalized": "(HandlerPool-\u003ePar a b c)-\u003ePar a b(c,HandlerPool)",
        "package": "lvish",
        "partial": "New Pool",
        "signature": "(HandlerPool-\u003ePar d s a)-\u003ePar d s(a,HandlerPool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:withNewPool_",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a Par computation in the context of a fresh handler pool, while\n ignoring the result of the computation.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "(HandlerPool -\u003e Par d s ()) -\u003e Par d s HandlerPool",
        "fct-source": "src/Control-LVish-Basics.html#withNewPool_",
        "fct-type": "function",
        "title": "withNewPool_"
      },
      "index": {
        "description": "Execute Par computation in the context of fresh handler pool while ignoring the result of the computation",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "withNewPool_",
        "normalized": "(HandlerPool-\u003ePar a b())-\u003ePar a b HandlerPool",
        "package": "lvish",
        "partial": "New Pool",
        "signature": "(HandlerPool-\u003ePar d s())-\u003ePar d s HandlerPool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Control-LVish.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eCooperatively schedule other threads.\n\u003c/p\u003e",
        "fct-module": "Control.LVish",
        "fct-package": "lvish",
        "fct-signature": "Par d s ()",
        "fct-source": "src/Control-LVish-Basics.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Cooperatively schedule other threads",
        "hierarchy": "Control LVish",
        "module": "Control.LVish",
        "name": "yield",
        "normalized": "Par a b()",
        "package": "lvish",
        "partial": "",
        "signature": "Par d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of concurrent finite maps based on skip lists.  Only\n supports lookup and insertions, not modifications or removals.\n\u003c/p\u003e\u003cp\u003eSkip lists are a probabilistic data structure that roughly approximate\n balanced trees.  At the bottom layer is a standard linked list representation\n of a finite map.  Above this is some number of \u003ca\u003eindex\u003c/a\u003e lists that provide\n shortcuts to the layer below them.  When a key/value pair is added, it is\n always added to the bottom layer, and is added with exponentially decreasing\n probability to each index layer above it.\n\u003c/p\u003e\u003cp\u003eSkip lists are a very good match for lock-free programming, since the\n linearization point can be taken as insertion into the bottom list, and index\n nodes can be added *afterward* in a best-effort style (i.e., if there is\n contention to add them, we can simply walk away, with the effect that the\n probability of appearing in an index is partly a function of contention.)\n\u003c/p\u003e\u003cp\u003eTo implement skip lists in Haskell, we use a GADT to represent the layers,\n each of which has a different type (since it indexes the layer below it).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-Concurrent-SkipListMap.html",
        "fct-type": "module",
        "title": "SkipListMap"
      },
      "index": {
        "description": "An implementation of concurrent finite maps based on skip lists Only supports lookup and insertions not modifications or removals Skip lists are probabilistic data structure that roughly approximate balanced trees At the bottom layer is standard linked list representation of finite map Above this is some number of index lists that provide shortcuts to the layer below them When key value pair is added it is always added to the bottom layer and is added with exponentially decreasing probability to each index layer above it Skip lists are very good match for lock-free programming since the linearization point can be taken as insertion into the bottom list and index nodes can be added afterward in best-effort style i.e if there is contention to add them we can simply walk away with the effect that the probability of appearing in an index is partly function of contention To implement skip lists in Haskell we use GADT to represent the layers each of which has different type since it indexes the layer below it",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "SkipListMap",
        "normalized": "",
        "package": "lvish",
        "partial": "Skip List Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#t:PutResult",
      "description": {
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#PutResult",
        "fct-type": "data",
        "title": "PutResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "PutResult",
        "normalized": "",
        "package": "lvish",
        "partial": "Put Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#t:SLMap",
      "description": {
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#SLMap",
        "fct-type": "data",
        "title": "SLMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "SLMap",
        "normalized": "",
        "package": "lvish",
        "partial": "SLMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#t:SLMapSlice",
      "description": {
        "fct-descr": "\u003cp\u003eA portion of an SLMap between two keys.  If the upper-bound is missing, that\n   means \u003ca\u003ego to the end\u003c/a\u003e.  The optional lower bound is used to \u003ca\u003elazily\u003c/a\u003e prune the\n   fronts each layer.  The reason for this is that we don't want to reallocate an\n   IORef spine and prematurely prune all lower layers IF we're simply going to\n   split again before actually enumerating the contents.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#SLMapSlice",
        "fct-type": "data",
        "title": "SLMapSlice"
      },
      "index": {
        "description": "portion of an SLMap between two keys If the upper-bound is missing that means go to the end The optional lower bound is used to lazily prune the fronts each layer The reason for this is that we don want to reallocate an IORef spine and prematurely prune all lower layers IF we re simply going to split again before actually enumerating the contents",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "SLMapSlice",
        "normalized": "",
        "package": "lvish",
        "partial": "SLMap Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:Added",
      "description": {
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "Added v",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#PutResult",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "Added",
        "normalized": "",
        "package": "lvish",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:Found",
      "description": {
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "Found v",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#PutResult",
        "fct-type": "function",
        "title": "Found"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "Found",
        "normalized": "",
        "package": "lvish",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:Slice",
      "description": {
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "Slice (SLMap k v) !(Maybe k) !(Maybe k)",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#SLMapSlice",
        "fct-type": "function",
        "title": "Slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "Slice",
        "normalized": "",
        "package": "lvish",
        "partial": "Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:counts",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the sizes of the skiplist levels; for performance debugging.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMap k v -\u003e IO [Int]",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#counts",
        "fct-type": "function",
        "title": "counts"
      },
      "index": {
        "description": "Returns the sizes of the skiplist levels for performance debugging",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "counts",
        "normalized": "SLMap a b-\u003eIO[Int]",
        "package": "lvish",
        "partial": "",
        "signature": "SLMap k v-\u003eIO[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:debugShow",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a slice with each layer on a line.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMapSlice k v -\u003e IO String",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#debugShow",
        "fct-type": "function",
        "title": "debugShow"
      },
      "index": {
        "description": "Print slice with each layer on line",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "debugShow",
        "normalized": "SLMapSlice a b-\u003eIO String",
        "package": "lvish",
        "partial": "Show",
        "signature": "SLMapSlice k v-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to locate a key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMap k v -\u003e k -\u003e IO (Maybe v)",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Attempt to locate key in the map",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "find",
        "normalized": "SLMap a b-\u003ea-\u003eIO(Maybe b)",
        "package": "lvish",
        "partial": "",
        "signature": "SLMap k v-\u003ek-\u003eIO(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eConcurrently fold over all key/value pairs in the map within the given\n monad, in increasing key order.  Inserts that arrive concurrently may or may\n not be included in the fold.\n\u003c/p\u003e\u003cp\u003eStrict in the accumulator.        \n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "(forall x.  IO x -\u003e m x) -\u003e (a -\u003e k -\u003e v -\u003e m a) -\u003e a -\u003e SLMap k v -\u003e m a",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "Concurrently fold over all key value pairs in the map within the given monad in increasing key order Inserts that arrive concurrently may or may not be included in the fold Strict in the accumulator",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "foldlWithKey",
        "normalized": "(a b IO c-\u003ed c)-\u003e(e-\u003ef-\u003eg-\u003ed e)-\u003ee-\u003eSLMap f g-\u003ed e",
        "package": "lvish",
        "partial": "With Key",
        "signature": "(forall x. IO x-\u003em x)-\u003e(a-\u003ek-\u003ev-\u003em a)-\u003ea-\u003eSLMap k v-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:newSLMap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new skip list with the given number of levels.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e IO (SLMap k v)",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#newSLMap",
        "fct-type": "function",
        "title": "newSLMap"
      },
      "index": {
        "description": "Create new skip list with the given number of levels",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "newSLMap",
        "normalized": "Int-\u003eIO(SLMap a b)",
        "package": "lvish",
        "partial": "SLMap",
        "signature": "Int-\u003eIO(SLMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:putIfAbsent",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a key/value pair if the key is not present, all within a given monad.\n Returns the value now associated with the key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMap k v-\u003e k-\u003e m v-\u003e m (PutResult v)",
        "fct-type": "function",
        "title": "putIfAbsent"
      },
      "index": {
        "description": "Adds key value pair if the key is not present all within given monad Returns the value now associated with the key in the map",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "putIfAbsent",
        "normalized": "SLMap a b-\u003ea-\u003ec b-\u003ec(PutResult b)",
        "package": "lvish",
        "partial": "If Absent",
        "signature": "SLMap k v-\u003ek-\u003em v-\u003em(PutResult v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:putIfAbsentToss",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a key/value pair if the key is not present, all within a given monad.\n Returns the value now associated with the key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMap k v-\u003e k-\u003e m v-\u003e m Bool-\u003e m (PutResult v)",
        "fct-type": "function",
        "title": "putIfAbsentToss"
      },
      "index": {
        "description": "Adds key value pair if the key is not present all within given monad Returns the value now associated with the key in the map",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "putIfAbsentToss",
        "normalized": "SLMap a b-\u003ea-\u003ec b-\u003ec Bool-\u003ec(PutResult b)",
        "package": "lvish",
        "partial": "If Absent Toss",
        "signature": "SLMap k v-\u003ek-\u003em v-\u003em Bool-\u003em(PutResult v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:sliceSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e measure the length of the bottom tier.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMapSlice k v -\u003e IO Int",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#sliceSize",
        "fct-type": "function",
        "title": "sliceSize"
      },
      "index": {
        "description": "measure the length of the bottom tier",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "sliceSize",
        "normalized": "SLMapSlice a b-\u003eIO Int",
        "package": "lvish",
        "partial": "Size",
        "signature": "SLMapSlice k v-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:splitSlice",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to split a slice of an SLMap.  If there are not enough elements to form\n two slices, this retruns Nothing.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMapSlice k v -\u003e IO (Maybe (SLMapSlice k v, SLMapSlice k v))",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#splitSlice",
        "fct-type": "function",
        "title": "splitSlice"
      },
      "index": {
        "description": "Attempt to split slice of an SLMap If there are not enough elements to form two slices this retruns Nothing",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "splitSlice",
        "normalized": "SLMapSlice a b-\u003eIO(Maybe(SLMapSlice a b,SLMapSlice a b))",
        "package": "lvish",
        "partial": "Slice",
        "signature": "SLMapSlice k v-\u003eIO(Maybe(SLMapSlice k v,SLMapSlice k v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-Concurrent-SkipListMap.html#v:toSlice",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a slice corresponding to the entire (non-empty) map.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.SkipListMap",
        "fct-package": "lvish",
        "fct-signature": "SLMap k v -\u003e SLMapSlice k v",
        "fct-source": "src/Data-Concurrent-SkipListMap.html#toSlice",
        "fct-type": "function",
        "title": "toSlice"
      },
      "index": {
        "description": "Create slice corresponding to the entire non-empty map",
        "hierarchy": "Data Concurrent SkipListMap",
        "module": "Data.Concurrent.SkipListMap",
        "name": "toSlice",
        "normalized": "SLMap a b-\u003eSLMapSlice a b",
        "package": "lvish",
        "partial": "Slice",
        "signature": "SLMap k v-\u003eSLMapSlice k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the unsafe bits that we cannot expose from \n  \u003ca\u003eData.LVar.Generic\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-Generic-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module contains the unsafe bits that we cannot expose from Data.LVar.Generic",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "lvish",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#t:AFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eCarries a \u003ccode\u003eFoldable\u003c/code\u003e type, but you don't get to know which one.\n   The purpose of this type is that \u003ccode\u003esortFreeze\u003c/code\u003e should not have\n   to impose a particular memory representation.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-LVar-Generic-Internal.html#AFoldable",
        "fct-type": "data",
        "title": "AFoldable"
      },
      "index": {
        "description": "Carries Foldable type but you don get to know which one The purpose of this type is that sortFreeze should not have to impose particular memory representation",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "AFoldable",
        "normalized": "",
        "package": "lvish",
        "partial": "AFoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#t:LVarData1",
      "description": {
        "fct-descr": "\u003cp\u003eA class representing monotonic data structures that take \u003cem\u003eone\u003c/em\u003e type\n parameter, as well as an \u003ccode\u003es\u003c/code\u003e parameter for session safety.\n\u003c/p\u003e\u003cp\u003eLVars that fall into this class are typically collection types.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Data-LVar-Generic-Internal.html#LVarData1",
        "fct-type": "class",
        "title": "LVarData1"
      },
      "index": {
        "description": "class representing monotonic data structures that take one type parameter as well as an parameter for session safety LVars that fall into this class are typically collection types",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "LVarData1",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#t:LVarWBottom",
      "description": {
        "fct-descr": "\u003cp\u003eA class enabling generic creation of new LVars.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Data-LVar-Generic-Internal.html#LVarWBottom",
        "fct-type": "class",
        "title": "LVarWBottom"
      },
      "index": {
        "description": "class enabling generic creation of new LVars",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "LVarWBottom",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar WBottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:AFoldable",
      "description": {
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "AFoldable (f2 a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#AFoldable",
        "fct-type": "function",
        "title": "AFoldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "AFoldable",
        "normalized": "",
        "package": "lvish",
        "partial": "AFoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a handler function which is called whenever an element is\n added to the LVar.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e f s elt -\u003e (elt -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-Generic-Internal.html#addHandler",
        "fct-type": "method",
        "title": "addHandler"
      },
      "index": {
        "description": "Add handler function which is called whenever an element is added to the LVar",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "addHandler",
        "normalized": "Maybe HandlerPool-\u003ea b c-\u003e(c-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Handler",
        "signature": "Maybe HandlerPool-\u003ef s elt-\u003e(elt-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eO(1)\u003c/em\u003e operation that atomically switches the LVar into a\n frozen state.  Any threads waiting on the freeze are woken.\n\u003c/p\u003e\u003cp\u003eThe contents of a frozen LVar are fully observable:\n e.g., a whole set instead of one element, or the full/empty\n information for an IVar, instead of just the payload.\n\u003c/p\u003e\u003cp\u003eHowever, note that \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e LVars cannot be folded, because they may have\n nondeterministic ordering after being frozen.  See \u003ccode\u003esortFreeze\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "f s a -\u003e Par QuasiDet s (f Frzn a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#freeze",
        "fct-type": "method",
        "title": "freeze"
      },
      "index": {
        "description": "An operation that atomically switches the LVar into frozen state Any threads waiting on the freeze are woken The contents of frozen LVar are fully observable e.g whole set instead of one element or the full empty information for an IVar instead of just the payload However note that Frzn LVars cannot be folded because they may have nondeterministic ordering after being frozen See sortFreeze",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "freeze",
        "normalized": "a b c-\u003ePar QuasiDet b(a Frzn c)",
        "package": "lvish",
        "partial": "",
        "signature": "f s a-\u003ePar QuasiDet s(f Frzn a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:newBottom",
      "description": {
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "Par d s (f s a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#newBottom",
        "fct-type": "method",
        "title": "newBottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "newBottom",
        "normalized": "",
        "package": "lvish",
        "partial": "Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:sortFrzn",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a freeze followed by a \u003cem\u003esort\u003c/em\u003e operation which guarantees\n that the elements produced will be produced in a deterministic order.\n The result is fully accessible to the user (\u003ccode\u003eFoldable\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "f Frzn a -\u003e AFoldable a",
        "fct-source": "src/Data-LVar-Generic-Internal.html#sortFrzn",
        "fct-type": "method",
        "title": "sortFrzn"
      },
      "index": {
        "description": "Perform freeze followed by sort operation which guarantees that the elements produced will be produced in deterministic order The result is fully accessible to the user Foldable",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "sortFrzn",
        "normalized": "a Frzn b-\u003eAFoldable b",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "f Frzn a-\u003eAFoldable a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:unsafeCoerceLVar",
      "description": {
        "fct-descr": "\u003cp\u003eA safer version of \u003ccode\u003e\u003ca\u003eunsafeCoerce#\u003c/a\u003e\u003c/code\u003e (that is, with a slightly more constrained type) for LVars only.\n   Note, that the type of the LVar's contents must be allowed to change, because freezing is recursive.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "f s1 a -\u003e f s2 b",
        "fct-source": "src/Data-LVar-Generic-Internal.html#unsafeCoerceLVar",
        "fct-type": "function",
        "title": "unsafeCoerceLVar"
      },
      "index": {
        "description": "safer version of unsafeCoerce that is with slightly more constrained type for LVars only Note that the type of the LVar contents must be allowed to change because freezing is recursive",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "unsafeCoerceLVar",
        "normalized": "a b c-\u003ea b d",
        "package": "lvish",
        "partial": "Coerce LVar",
        "signature": "f s a-\u003ef s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic-Internal.html#v:unsafeTraversable",
      "description": {
        "fct-descr": "\u003cp\u003eHere we gain permission to expose the nondeterministic internal structure of an\n LVar: namely, the order in which its contents occur.  We pay the piper with an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n action.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic.Internal",
        "fct-package": "lvish",
        "fct-signature": "f Frzn a -\u003e IO (f Trvrsbl a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#unsafeTraversable",
        "fct-type": "function",
        "title": "unsafeTraversable"
      },
      "index": {
        "description": "Here we gain permission to expose the nondeterministic internal structure of an LVar namely the order in which its contents occur We pay the piper with an IO action",
        "hierarchy": "Data LVar Generic Internal",
        "module": "Data.LVar.Generic.Internal",
        "name": "unsafeTraversable",
        "normalized": "a Frzn b-\u003eIO(a Trvrsbl b)",
        "package": "lvish",
        "partial": "Traversable",
        "signature": "f Frzn a-\u003eIO(f Trvrsbl a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic interface providing operations that work on \u003cem\u003eall\u003c/em\u003e LVars.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "generic interface providing operations that work on all LVars",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "lvish",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#t:AFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eCarries a \u003ccode\u003eFoldable\u003c/code\u003e type, but you don't get to know which one.\n   The purpose of this type is that \u003ccode\u003esortFreeze\u003c/code\u003e should not have\n   to impose a particular memory representation.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-LVar-Generic-Internal.html#AFoldable",
        "fct-type": "data",
        "title": "AFoldable"
      },
      "index": {
        "description": "Carries Foldable type but you don get to know which one The purpose of this type is that sortFreeze should not have to impose particular memory representation",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "AFoldable",
        "normalized": "",
        "package": "lvish",
        "partial": "AFoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#t:LVarData1",
      "description": {
        "fct-descr": "\u003cp\u003eA class representing monotonic data structures that take \u003cem\u003eone\u003c/em\u003e type\n parameter, as well as an \u003ccode\u003es\u003c/code\u003e parameter for session safety.\n\u003c/p\u003e\u003cp\u003eLVars that fall into this class are typically collection types.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Data-LVar-Generic-Internal.html#LVarData1",
        "fct-type": "class",
        "title": "LVarData1"
      },
      "index": {
        "description": "class representing monotonic data structures that take one type parameter as well as an parameter for session safety LVars that fall into this class are typically collection types",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "LVarData1",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#t:LVarWBottom",
      "description": {
        "fct-descr": "\u003cp\u003eA class enabling generic creation of new LVars.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Data-LVar-Generic-Internal.html#LVarWBottom",
        "fct-type": "class",
        "title": "LVarWBottom"
      },
      "index": {
        "description": "class enabling generic creation of new LVars",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "LVarWBottom",
        "normalized": "",
        "package": "lvish",
        "partial": "LVar WBottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#t:OrderedLVarData1",
      "description": {
        "fct-descr": "\u003cp\u003eSome LVar datatypes are stored in an \u003cem\u003einternally\u003c/em\u003e ordered way so\n that it is then possible to take \u003cem\u003eO(1)\u003c/em\u003e frozen snapshots and consume them\n inexpensively in a deterministic order.\n\u003c/p\u003e\u003cp\u003eLVars with this additional property provide this class as well as \u003ccode\u003e\u003ca\u003eLVarData1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "class",
        "fct-source": "src/Data-LVar-Generic.html#OrderedLVarData1",
        "fct-type": "class",
        "title": "OrderedLVarData1"
      },
      "index": {
        "description": "Some LVar datatypes are stored in an internally ordered way so that it is then possible to take frozen snapshots and consume them inexpensively in deterministic order LVars with this additional property provide this class as well as LVarData1",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "OrderedLVarData1",
        "normalized": "",
        "package": "lvish",
        "partial": "Ordered LVar Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:AFoldable",
      "description": {
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "AFoldable (f2 a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#AFoldable",
        "fct-type": "function",
        "title": "AFoldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "AFoldable",
        "normalized": "",
        "package": "lvish",
        "partial": "AFoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a handler function which is called whenever an element is\n added to the LVar.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e f s elt -\u003e (elt -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-Generic-Internal.html#addHandler",
        "fct-type": "method",
        "title": "addHandler"
      },
      "index": {
        "description": "Add handler function which is called whenever an element is added to the LVar",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "addHandler",
        "normalized": "Maybe HandlerPool-\u003ea b c-\u003e(c-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Handler",
        "signature": "Maybe HandlerPool-\u003ef s elt-\u003e(elt-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:castFrzn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrvrsbl\u003c/a\u003e\u003c/code\u003e is a stronger property than \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e, so it is always safe to \"upcast\" to\n the weaker version.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "f Trvrsbl a -\u003e f Frzn a",
        "fct-source": "src/Data-LVar-Generic.html#castFrzn",
        "fct-type": "function",
        "title": "castFrzn"
      },
      "index": {
        "description": "Trvrsbl is stronger property than Frzn so it is always safe to upcast to the weaker version",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "castFrzn",
        "normalized": "a Trvrsbl b-\u003ea Frzn b",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "f Trvrsbl a-\u003ef Frzn a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:forFrzn",
      "description": {
        "fct-descr": "\u003cp\u003eLVish \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e actions must commute, therefore one safe way to consume a frozen (but\n unordered) LVar, even in another \u003ccode\u003e\u003ca\u003erunPar\u003c/a\u003e\u003c/code\u003e session, is to run a \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e computation for\n each element.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "f Frzn a -\u003e (a -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-Generic.html#forFrzn",
        "fct-type": "function",
        "title": "forFrzn"
      },
      "index": {
        "description": "LVish Par actions must commute therefore one safe way to consume frozen but unordered LVar even in another runPar session is to run Par computation for each element",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "forFrzn",
        "normalized": "a Frzn b-\u003e(b-\u003ePar c d())-\u003ePar c d()",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "f Frzn a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eO(1)\u003c/em\u003e operation that atomically switches the LVar into a\n frozen state.  Any threads waiting on the freeze are woken.\n\u003c/p\u003e\u003cp\u003eThe contents of a frozen LVar are fully observable:\n e.g., a whole set instead of one element, or the full/empty\n information for an IVar, instead of just the payload.\n\u003c/p\u003e\u003cp\u003eHowever, note that \u003ccode\u003e\u003ca\u003eFrzn\u003c/a\u003e\u003c/code\u003e LVars cannot be folded, because they may have\n nondeterministic ordering after being frozen.  See \u003ccode\u003esortFreeze\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "f s a -\u003e Par QuasiDet s (f Frzn a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#freeze",
        "fct-type": "method",
        "title": "freeze"
      },
      "index": {
        "description": "An operation that atomically switches the LVar into frozen state Any threads waiting on the freeze are woken The contents of frozen LVar are fully observable e.g whole set instead of one element or the full empty information for an IVar instead of just the payload However note that Frzn LVars cannot be folded because they may have nondeterministic ordering after being frozen See sortFreeze",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "freeze",
        "normalized": "a b c-\u003ePar QuasiDet b(a Frzn c)",
        "package": "lvish",
        "partial": "",
        "signature": "f s a-\u003ePar QuasiDet s(f Frzn a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:newBottom",
      "description": {
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "Par d s (f s a)",
        "fct-source": "src/Data-LVar-Generic-Internal.html#newBottom",
        "fct-type": "method",
        "title": "newBottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "newBottom",
        "normalized": "",
        "package": "lvish",
        "partial": "Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:snapFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eDon't just freeze the LVar, but make the full contents\n completely available and \u003ccode\u003eFoldable\u003c/code\u003e.  Guaranteed \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "f s a -\u003e Par QuasiDet s (f Trvrsbl a)",
        "fct-source": "src/Data-LVar-Generic.html#snapFreeze",
        "fct-type": "method",
        "title": "snapFreeze"
      },
      "index": {
        "description": "Don just freeze the LVar but make the full contents completely available and Foldable Guaranteed",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "snapFreeze",
        "normalized": "a b c-\u003ePar QuasiDet b(a Trvrsbl c)",
        "package": "lvish",
        "partial": "Freeze",
        "signature": "f s a-\u003ePar QuasiDet s(f Trvrsbl a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Generic.html#v:sortFrzn",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a freeze followed by a \u003cem\u003esort\u003c/em\u003e operation which guarantees\n that the elements produced will be produced in a deterministic order.\n The result is fully accessible to the user (\u003ccode\u003eFoldable\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Generic",
        "fct-package": "lvish",
        "fct-signature": "f Frzn a -\u003e AFoldable a",
        "fct-source": "src/Data-LVar-Generic-Internal.html#sortFrzn",
        "fct-type": "method",
        "title": "sortFrzn"
      },
      "index": {
        "description": "Perform freeze followed by sort operation which guarantees that the elements produced will be produced in deterministic order The result is fully accessible to the user Foldable",
        "hierarchy": "Data LVar Generic",
        "module": "Data.LVar.Generic",
        "name": "sortFrzn",
        "normalized": "a Frzn b-\u003eAFoldable b",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "f Frzn a-\u003eAFoldable a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn I-Structure, also known as an array of IVars, implemented using a boxed vector.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-IStructure.html",
        "fct-type": "module",
        "title": "IStructure"
      },
      "index": {
        "description": "An I-Structure also known as an array of IVars implemented using boxed vector",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "IStructure",
        "normalized": "",
        "package": "lvish",
        "partial": "IStructure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#t:IStructure",
      "description": {
        "fct-descr": "\u003cp\u003eAn I-Structure, also known as an array of IVars.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-LVar-IStructure.html#IStructure",
        "fct-type": "data",
        "title": "IStructure"
      },
      "index": {
        "description": "An I-Structure also known as an array of IVars",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "IStructure",
        "normalized": "",
        "package": "lvish",
        "partial": "IStructure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:forEachHP",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new elements added to\n the \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003e, optionally enrolled in a handler pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool-\u003e IStructure s a-\u003e (Int -\u003e a -\u003e Par d s ())-\u003e Par d s ()",
        "fct-type": "function",
        "title": "forEachHP"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new elements added to the IStructure optionally enrolled in handler pool",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "forEachHP",
        "normalized": "Maybe HandlerPool-\u003eIStructure a b-\u003e(Int-\u003eb-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Each HP",
        "signature": "Maybe HandlerPool-\u003eIStructure s a-\u003e(Int-\u003ea-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:freezeIStructure",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e complexity, unfortunately. This implementation of \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003es requires\n freezing each of the individual IVars stored in the array.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "IStructure s a -\u003e Par QuasiDet s (Vector (Maybe a))",
        "fct-source": "src/Data-LVar-IStructure.html#freezeIStructure",
        "fct-type": "function",
        "title": "freezeIStructure"
      },
      "index": {
        "description": "complexity unfortunately This implementation of IStructure requires freezing each of the individual IVars stored in the array",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "freezeIStructure",
        "normalized": "IStructure a b-\u003ePar QuasiDet a(Vector(Maybe b))",
        "package": "lvish",
        "partial": "IStructure",
        "signature": "IStructure s a-\u003ePar QuasiDet s(Vector(Maybe a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the indexed entry to contain a value, and return that value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "IStructure s elt -\u003e Int -\u003e Par d s elt",
        "fct-source": "src/Data-LVar-IStructure.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Wait for the indexed entry to contain value and return that value",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "get",
        "normalized": "IStructure a b-\u003eInt-\u003ePar c a b",
        "package": "lvish",
        "partial": "",
        "signature": "IStructure s elt-\u003eInt-\u003ePar d s elt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:getLength",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the number of slots in the \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "IStructure s a -\u003e Par d s Int",
        "fct-source": "src/Data-LVar-IStructure.html#getLength",
        "fct-type": "function",
        "title": "getLength"
      },
      "index": {
        "description": "Retrieve the number of slots in the IStructure",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "getLength",
        "normalized": "IStructure a b-\u003ePar c a Int",
        "package": "lvish",
        "partial": "Length",
        "signature": "IStructure s a-\u003ePar d s Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:newIStructure",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty, monotonically growing \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003e of a given size.\n   All entries start off as zero, which must be \"bottom\".\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e Par d s (IStructure s elt)",
        "fct-source": "src/Data-LVar-IStructure.html#newIStructure",
        "fct-type": "function",
        "title": "newIStructure"
      },
      "index": {
        "description": "Create new empty monotonically growing IStructure of given size All entries start off as zero which must be bottom",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "newIStructure",
        "normalized": "Int-\u003ePar a b(IStructure b c)",
        "package": "lvish",
        "partial": "IStructure",
        "signature": "Int-\u003ePar d s(IStructure s elt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:newIStructureWithCallback",
      "description": {
        "fct-descr": "\u003cp\u003eRegister handlers on each internal IVar as it is created.\n   This operation should be more efficient than \u003ccode\u003e\u003ca\u003enewIStructure\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003eforEachHP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e (Int -\u003e elt -\u003e Par d s ()) -\u003e Par d s (IStructure s elt)",
        "fct-source": "src/Data-LVar-IStructure.html#newIStructureWithCallback",
        "fct-type": "function",
        "title": "newIStructureWithCallback"
      },
      "index": {
        "description": "Register handlers on each internal IVar as it is created This operation should be more efficient than newIStructure followed by forEachHP",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "newIStructureWithCallback",
        "normalized": "Int-\u003e(Int-\u003ea-\u003ePar b c())-\u003ePar b c(IStructure c a)",
        "package": "lvish",
        "partial": "IStructure With Callback",
        "signature": "Int-\u003e(Int-\u003eelt-\u003ePar d s())-\u003ePar d s(IStructure s elt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single element in the \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003e at a given index.  This variant is deeply strict (\u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "IStructure s elt -\u003e Int -\u003e elt -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-IStructure.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Put single element in the IStructure at given index This variant is deeply strict NFData",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "put",
        "normalized": "IStructure a b-\u003eInt-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "",
        "signature": "IStructure s elt-\u003eInt-\u003eelt-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IStructure.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single element in the \u003ccode\u003e\u003ca\u003eIStructure\u003c/a\u003e\u003c/code\u003e at a given index.  That index must be previously empty.  (WHNF)\n Strict in the element being put in the set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IStructure",
        "fct-package": "lvish",
        "fct-signature": "IStructure s elt -\u003e Int -\u003e elt -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-IStructure.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "Put single element in the IStructure at given index That index must be previously empty WHNF Strict in the element being put in the set",
        "hierarchy": "Data LVar IStructure",
        "module": "Data.LVar.IStructure",
        "name": "put_",
        "normalized": "IStructure a b-\u003eInt-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "",
        "signature": "IStructure s elt-\u003eInt-\u003eelt-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIVars are the very simplest form of LVars.  They are either empty or full, and\n  contain at most a single value.\n\u003c/p\u003e\u003cp\u003eFor further information on using IVars in Haskell, see the \u003ccode\u003emonad-par\u003c/code\u003e and\n  \u003ccode\u003emeta-par\u003c/code\u003e packages and papers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/monad-par\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/papers/haskell2011_monad-par.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/meta-par\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.cs.indiana.edu/~rrnewton/papers/2012-ICFP_meta-par.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUnlike the \u003ccode\u003eIVar\u003c/code\u003e type provided by \u003ccode\u003emonad-par\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e type\nprovided in this module permits repeated \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es of the same value, in\nkeeping with the lattice-based semantics of LVars in which a \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e\ntakes the least upper bound of the old and new values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-IVar.html",
        "fct-type": "module",
        "title": "IVar"
      },
      "index": {
        "description": "IVars are the very simplest form of LVars They are either empty or full and contain at most single value For further information on using IVars in Haskell see the monad-par and meta-par packages and papers http hackage.haskell.org package monad-par http www.cs.indiana.edu rrnewton papers haskell2011 monad-par.pdf http hackage.haskell.org package meta-par http www.cs.indiana.edu rrnewton papers ICFP meta-par.pdf Unlike the IVar type provided by monad-par the IVar type provided in this module permits repeated put of the same value in keeping with the lattice-based semantics of LVars in which put takes the least upper bound of the old and new values",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "IVar",
        "normalized": "",
        "package": "lvish",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#t:IVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e is the simplest form of \u003ccode\u003e\u003ca\u003eLVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Data-LVar-IVar.html#IVar",
        "fct-type": "newtype",
        "title": "IVar"
      },
      "index": {
        "description": "An IVar is the simplest form of LVar",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "IVar",
        "normalized": "",
        "package": "lvish",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:IVar",
      "description": {
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar (LVar s (IORef (Maybe a)) a)",
        "fct-source": "src/Data-LVar-IVar.html#IVar",
        "fct-type": "function",
        "title": "IVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "IVar",
        "normalized": "",
        "package": "lvish",
        "partial": "IVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:freezeIVar",
      "description": {
        "fct-descr": "\u003cp\u003eA specialized freezing operation for IVars that leaves the result in a handy format (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar s a -\u003e Par QuasiDet s (Maybe a)",
        "fct-source": "src/Data-LVar-IVar.html#freezeIVar",
        "fct-type": "function",
        "title": "freezeIVar"
      },
      "index": {
        "description": "specialized freezing operation for IVars that leaves the result in handy format Maybe",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "freezeIVar",
        "normalized": "IVar a b-\u003ePar QuasiDet a(Maybe b)",
        "package": "lvish",
        "partial": "IVar",
        "signature": "IVar s a-\u003ePar QuasiDet s(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:fromIVar",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a frozen IVar (as produced by a generic \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e operation) as a more\n palatable data structure.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar Frzn a -\u003e Maybe a",
        "fct-source": "src/Data-LVar-IVar.html#fromIVar",
        "fct-type": "function",
        "title": "fromIVar"
      },
      "index": {
        "description": "Unpack frozen IVar as produced by generic freeze operation as more palatable data structure",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "fromIVar",
        "normalized": "IVar Frzn a-\u003eMaybe a",
        "package": "lvish",
        "partial": "IVar",
        "signature": "IVar Frzn a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value in a IVar.  The \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e can only return when the\n value has been written by a prior or concurrent \u003ccode\u003eput\u003c/code\u003e to the same\n IVar.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar s a -\u003e Par d s a",
        "fct-source": "src/Data-LVar-IVar.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Read the value in IVar The get can only return when the value has been written by prior or concurrent put to the same IVar",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "get",
        "normalized": "IVar a b-\u003ePar c a b",
        "package": "lvish",
        "partial": "",
        "signature": "IVar s a-\u003ePar d s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eA new IVar that starts out empty. \n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "Par d s (IVar s a)",
        "fct-source": "src/Data-LVar-IVar.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "new IVar that starts out empty",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "new",
        "normalized": "",
        "package": "lvish",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eFill an \u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar s a -\u003e a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-IVar.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Fill an IVar",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "put",
        "normalized": "IVar a b-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "",
        "signature": "IVar s a-\u003ea-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into an IVar.  Multiple \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003es to the same IVar\n are not allowed, and result in a runtime error, unless the values put happen to be \u003ccode\u003e(==)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is always at least strict up to WHNF in the element put.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "IVar s a -\u003e a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-IVar.html#put_",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "Put value into an IVar Multiple put to the same IVar are not allowed and result in runtime error unless the values put happen to be This function is always at least strict up to WHNF in the element put",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "put_",
        "normalized": "IVar a b-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "",
        "signature": "IVar s a-\u003ea-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eA simple future represented as an IVar.  The result is fully evaluated before\n the child computation returns.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "Par d s a -\u003e Par d s (IVar s a)",
        "fct-source": "src/Data-LVar-IVar.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "simple future represented as an IVar The result is fully evaluated before the child computation returns",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "spawn",
        "normalized": "Par a b c-\u003ePar a b(IVar b c)",
        "package": "lvish",
        "partial": "",
        "signature": "Par d s a-\u003ePar d s(IVar s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:spawnP",
      "description": {
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e Par d s (IVar s a)",
        "fct-source": "src/Data-LVar-IVar.html#spawnP",
        "fct-type": "function",
        "title": "spawnP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "spawnP",
        "normalized": "a-\u003ePar b c(IVar c a)",
        "package": "lvish",
        "partial": "",
        "signature": "a-\u003ePar d s(IVar s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:spawn_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e that uses only WHNF, rather than full \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "Par d s a -\u003e Par d s (IVar s a)",
        "fct-source": "src/Data-LVar-IVar.html#spawn_",
        "fct-type": "function",
        "title": "spawn_"
      },
      "index": {
        "description": "version of spawn that uses only WHNF rather than full NFData",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "spawn_",
        "normalized": "Par a b c-\u003ePar a b(IVar b c)",
        "package": "lvish",
        "partial": "",
        "signature": "Par d s a-\u003ePar d s(IVar s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-IVar.html#v:whenFull",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a handler that fires when the IVar is filled, which, of course, only\n   happens once.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.IVar",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e IVar s a -\u003e (a -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-IVar.html#whenFull",
        "fct-type": "function",
        "title": "whenFull"
      },
      "index": {
        "description": "Register handler that fires when the IVar is filled which of course only happens once",
        "hierarchy": "Data LVar IVar",
        "module": "Data.LVar.IVar",
        "name": "whenFull",
        "normalized": "Maybe HandlerPool-\u003eIVar a b-\u003e(b-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Full",
        "signature": "Maybe HandlerPool-\u003eIVar s a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is \u003cem\u003enot\u003c/em\u003e a datatype for the end-user.\n\u003c/p\u003e\u003cp\u003eRather, this module is for building \u003cem\u003enew\u003c/em\u003e LVar types in a comparatively easy way: by\nputting a pure value in a mutable container, and defining a \u003ccode\u003eput\u003c/code\u003e operation as a pure\nfunction.\n\u003c/p\u003e\u003cp\u003eThe data structure implementor who uses this module must guarantee\nthat their \u003ccode\u003eput\u003c/code\u003e operation computes a \u003cem\u003eleast upper bound\u003c/em\u003e, ensuring\nthat the set of states that their LVar type can take on form a\njoin-semilattice (\u003ca\u003ehttp://en.wikipedia.org/wiki/Semilattice\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-Internal-Pure.html",
        "fct-type": "module",
        "title": "Pure"
      },
      "index": {
        "description": "This is not datatype for the end-user Rather this module is for building new LVar types in comparatively easy way by putting pure value in mutable container and defining put operation as pure function The data structure implementor who uses this module must guarantee that their put operation computes least upper bound ensuring that the set of states that their LVar type can take on form join-semilattice http en.wikipedia.org wiki Semilattice",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "Pure",
        "normalized": "",
        "package": "lvish",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#t:PureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn LVar which consists merely of an immutable, pure value inside a mutable box.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Data-LVar-Internal-Pure.html#PureLVar",
        "fct-type": "newtype",
        "title": "PureLVar"
      },
      "index": {
        "description": "An LVar which consists merely of an immutable pure value inside mutable box",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "PureLVar",
        "normalized": "",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:PureLVar",
      "description": {
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar (LVar s (IORef t) t)",
        "fct-source": "src/Data-LVar-Internal-Pure.html#PureLVar",
        "fct-type": "function",
        "title": "PureLVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "PureLVar",
        "normalized": "",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:freezePureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze the pure LVar, returning its exact value.\n   Subsequent \u003ccode\u003eput\u003c/code\u003es will raise an error.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar s t -\u003e Par QuasiDet s t",
        "fct-source": "src/Data-LVar-Internal-Pure.html#freezePureLVar",
        "fct-type": "function",
        "title": "freezePureLVar"
      },
      "index": {
        "description": "Freeze the pure LVar returning its exact value Subsequent put will raise an error",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "freezePureLVar",
        "normalized": "PureLVar a b-\u003ePar QuasiDet a b",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": "PureLVar s t-\u003ePar QuasiDet s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:getPureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eBlocks until the contents of \u003ccode\u003elv\u003c/code\u003e are at or above one element of\n \u003ccode\u003ethrshSet\u003c/code\u003e, then returns that one element.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar s t -\u003e [t] -\u003e Par d s t",
        "fct-source": "src/Data-LVar-Internal-Pure.html#getPureLVar",
        "fct-type": "function",
        "title": "getPureLVar"
      },
      "index": {
        "description": "Blocks until the contents of lv are at or above one element of thrshSet then returns that one element",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "getPureLVar",
        "normalized": "PureLVar a b-\u003e[b]-\u003ePar c a b",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": "PureLVar s t-\u003e[t]-\u003ePar d s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:newPureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eA new pure LVar populated with the provided initial state.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "t -\u003e Par d s (PureLVar s t)",
        "fct-source": "src/Data-LVar-Internal-Pure.html#newPureLVar",
        "fct-type": "function",
        "title": "newPureLVar"
      },
      "index": {
        "description": "new pure LVar populated with the provided initial state",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "newPureLVar",
        "normalized": "a-\u003ePar b c(PureLVar c a)",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": "t-\u003ePar d s(PureLVar s t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:putPureLVar",
      "description": {
        "fct-descr": "\u003cp\u003ePut a new value which will be joined with the old.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar s t -\u003e t -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-Internal-Pure.html#putPureLVar",
        "fct-type": "function",
        "title": "putPureLVar"
      },
      "index": {
        "description": "Put new value which will be joined with the old",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "putPureLVar",
        "normalized": "PureLVar a b-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": "PureLVar s t-\u003et-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:unsafeGetPureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetPureLVar\u003c/a\u003e\u003c/code\u003e but uses a threshold function rather than an explicit set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar s t -\u003e (t -\u003e Bool) -\u003e Par d s t",
        "fct-source": "src/Data-LVar-Internal-Pure.html#unsafeGetPureLVar",
        "fct-type": "function",
        "title": "unsafeGetPureLVar"
      },
      "index": {
        "description": "Like getPureLVar but uses threshold function rather than an explicit set",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "unsafeGetPureLVar",
        "normalized": "PureLVar a b-\u003e(b-\u003eBool)-\u003ePar c a b",
        "package": "lvish",
        "partial": "Get Pure LVar",
        "signature": "PureLVar s t-\u003e(t-\u003eBool)-\u003ePar d s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:verifyFiniteGet",
      "description": {
        "fct-descr": "\u003cp\u003eVerify that a blocking get is monotone in just the right way.\n   This takes a designated bottom and top element.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "[a] -\u003e (b, b) -\u003e (a -\u003e b) -\u003e Maybe String",
        "fct-source": "src/Data-LVar-Internal-Pure.html#verifyFiniteGet",
        "fct-type": "function",
        "title": "verifyFiniteGet"
      },
      "index": {
        "description": "Verify that blocking get is monotone in just the right way This takes designated bottom and top element",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "verifyFiniteGet",
        "normalized": "[a]-\u003e(b,b)-\u003e(a-\u003eb)-\u003eMaybe String",
        "package": "lvish",
        "partial": "Finite Get",
        "signature": "[a]-\u003e(b,b)-\u003e(a-\u003eb)-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:verifyFiniteJoin",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a finite set of states and a join operation (e.g., for an\n instance of JoinSemiLattice) and returns an error message if the\n join-semilattice properties don't hold.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "[a] -\u003e (a -\u003e a -\u003e a) -\u003e Maybe String",
        "fct-source": "src/Data-LVar-Internal-Pure.html#verifyFiniteJoin",
        "fct-type": "function",
        "title": "verifyFiniteJoin"
      },
      "index": {
        "description": "Takes finite set of states and join operation e.g for an instance of JoinSemiLattice and returns an error message if the join-semilattice properties don hold",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "verifyFiniteJoin",
        "normalized": "[a]-\u003e(a-\u003ea-\u003ea)-\u003eMaybe String",
        "package": "lvish",
        "partial": "Finite Join",
        "signature": "[a]-\u003e(a-\u003ea-\u003ea)-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-Internal-Pure.html#v:waitPureLVar",
      "description": {
        "fct-descr": "\u003cp\u003eWait until the pure LVar has crossed a threshold and then unblock.  (In the\n semantics, this is a singleton query set.)\n\u003c/p\u003e",
        "fct-module": "Data.LVar.Internal.Pure",
        "fct-package": "lvish",
        "fct-signature": "PureLVar s t -\u003e t -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-Internal-Pure.html#waitPureLVar",
        "fct-type": "function",
        "title": "waitPureLVar"
      },
      "index": {
        "description": "Wait until the pure LVar has crossed threshold and then unblock In the semantics this is singleton query set",
        "hierarchy": "Data LVar Internal Pure",
        "module": "Data.LVar.Internal.Pure",
        "name": "waitPureLVar",
        "normalized": "PureLVar a b-\u003eb-\u003ePar c a()",
        "package": "lvish",
        "partial": "Pure LVar",
        "signature": "PureLVar s t-\u003et-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides finite maps that only grow.  It is based on the popular \u003ca\u003eData.Map\u003c/a\u003e\n  balanced-tree representation of maps.  Thus scalability is \u003cem\u003enot\u003c/em\u003e good for this\n  implementation.  However, there are some interoperability benefits.  For example,\n  after running a parallel computation with a map result, this module can produce a\n  \u003ccode\u003eMap\u003c/code\u003e in \u003cem\u003eO(1)\u003c/em\u003e without copying, which may be useful downstream.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-PureMap.html",
        "fct-type": "module",
        "title": "PureMap"
      },
      "index": {
        "description": "This module provides finite maps that only grow It is based on the popular Data.Map balanced-tree representation of maps Thus scalability is not good for this implementation However there are some interoperability benefits For example after running parallel computation with map result this module can produce Map in without copying which may be useful downstream",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "PureMap",
        "normalized": "",
        "package": "lvish",
        "partial": "Pure Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#t:IMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe map datatype itself.  Like all other LVars, it has an \u003ccode\u003es\u003c/code\u003e parameter (think\n  \u003ccode\u003eSTRef\u003c/code\u003e) in addition to the \u003ccode\u003ea\u003c/code\u003e parameter that describes the type of elements\n in the set.\n\u003c/p\u003e\u003cp\u003ePerformance note: There is only \u003cem\u003eone\u003c/em\u003e mutable location in this implementation.  Thus\n it is not a scalable implementation.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Data-LVar-PureMap-Unsafe.html#IMap",
        "fct-type": "newtype",
        "title": "IMap"
      },
      "index": {
        "description": "The map datatype itself Like all other LVars it has an parameter think STRef in addition to the parameter that describes the type of elements in the set Performance note There is only one mutable location in this implementation Thus it is not scalable implementation",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "IMap",
        "normalized": "",
        "package": "lvish",
        "partial": "IMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:IMap",
      "description": {
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap (LVar s (IORef (Map k v)) (k, v))",
        "fct-source": "src/Data-LVar-PureMap-Unsafe.html#IMap",
        "fct-type": "function",
        "title": "IMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "IMap",
        "normalized": "IMap(LVar a(IORef(Map b c))(b,c))",
        "package": "lvish",
        "partial": "IMap",
        "signature": "IMap(LVar s(IORef(Map k v))(k,v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh map which will contain strictly more elements than the input.\n That is, things put in the former go in the latter, but not vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-PureMap.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Return fresh map which will contain strictly more elements than the input That is things put in the former go in the latter but not vice versa",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "copy",
        "normalized": "IMap a b c-\u003ePar d b(IMap a b c)",
        "package": "lvish",
        "partial": "",
        "signature": "IMap k s v-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new new key/value pairs added to\n the map.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e (k -\u003e v -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#forEach",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new new key value pairs added to the map",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "forEach",
        "normalized": "IMap a b c-\u003e(a-\u003ec-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Each",
        "signature": "IMap k s v-\u003e(k-\u003ev-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:forEachHP",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new key/value pairs added to\n the map, optionally enrolled in a handler pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool-\u003e IMap k s v-\u003e (k -\u003e v -\u003e Par d s ())-\u003e Par d s ()",
        "fct-type": "function",
        "title": "forEachHP"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new key value pairs added to the map optionally enrolled in handler pool",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "forEachHP",
        "normalized": "Maybe HandlerPool-\u003eIMap a b c-\u003e(a-\u003ec-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Each HP",
        "signature": "Maybe HandlerPool-\u003eIMap k s v-\u003e(k-\u003ev-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:freezeMap",
      "description": {
        "fct-descr": "\u003cp\u003eGet the exact contents of the map.  As with any\n quasi-deterministic operation, using \u003ccode\u003e\u003ca\u003efreezeMap\u003c/a\u003e\u003c/code\u003e may cause your\n program to exhibit a limited form of nondeterminism: it will never\n return the wrong answer, but it may include synchronization bugs\n that can (nondeterministically) cause exceptions.\n\u003c/p\u003e\u003cp\u003eThis \u003ca\u003eData.Map\u003c/a\u003e-based implementation has the special property that\n you can retrieve the full map without any \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and without\n nondeterminism leaking.  (This is because the internal order is\n fixed for the tree-based representation of maps that \u003ca\u003eData.Map\u003c/a\u003e\n uses.)\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e QPar s (Map k v)",
        "fct-source": "src/Data-LVar-PureMap.html#freezeMap",
        "fct-type": "function",
        "title": "freezeMap"
      },
      "index": {
        "description": "Get the exact contents of the map As with any quasi-deterministic operation using freezeMap may cause your program to exhibit limited form of nondeterminism it will never return the wrong answer but it may include synchronization bugs that can nondeterministically cause exceptions This Data.Map based implementation has the special property that you can retrieve the full map without any IO and without nondeterminism leaking This is because the internal order is fixed for the tree-based representation of maps that Data.Map uses",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "freezeMap",
        "normalized": "IMap a b c-\u003eQPar b(Map a c)",
        "package": "lvish",
        "partial": "Map",
        "signature": "IMap k s v-\u003eQPar s(Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:fromIMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e: Convert from an \u003ccode\u003e\u003ca\u003eIMap\u003c/a\u003e\u003c/code\u003e to a plain \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n   This is only permitted when the \u003ccode\u003e\u003ca\u003eIMap\u003c/a\u003e\u003c/code\u003e has already been frozen.\n   This is useful for processing the result of \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e.    \n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k Frzn a -\u003e Map k a",
        "fct-source": "src/Data-LVar-PureMap.html#fromIMap",
        "fct-type": "function",
        "title": "fromIMap"
      },
      "index": {
        "description": "Convert from an IMap to plain Map This is only permitted when the IMap has already been frozen This is useful for processing the result of runParThenFreeze",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "fromIMap",
        "normalized": "IMap a Frzn b-\u003eMap a b",
        "package": "lvish",
        "partial": "IMap",
        "signature": "IMap k Frzn a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:getKey",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the map to contain a specified key, and return the associated value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "k -\u003e IMap k s v -\u003e Par d s v",
        "fct-source": "src/Data-LVar-PureMap.html#getKey",
        "fct-type": "function",
        "title": "getKey"
      },
      "index": {
        "description": "Wait for the map to contain specified key and return the associated value",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "getKey",
        "normalized": "a-\u003eIMap a b c-\u003ePar d b c",
        "package": "lvish",
        "partial": "Key",
        "signature": "k-\u003eIMap k s v-\u003ePar d s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:getOrInit",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the preexisting value for a key if it exists, and otherwise return\n\u003c/p\u003e\u003cp\u003eThis is a convenience routine that can easily be defined in terms of \u003ccode\u003e\u003ca\u003egmodify\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "key -\u003e IMap key s (f s a) -\u003e Par d s (f s a)",
        "fct-source": "src/Data-LVar-PureMap.html#getOrInit",
        "fct-type": "function",
        "title": "getOrInit"
      },
      "index": {
        "description": "Return the preexisting value for key if it exists and otherwise return This is convenience routine that can easily be defined in terms of gmodify",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "getOrInit",
        "normalized": "a-\u003eIMap a b(c b d)-\u003ePar e b(c b d)",
        "package": "lvish",
        "partial": "Or Init",
        "signature": "key-\u003eIMap key s(f s a)-\u003ePar d s(f s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:gmodify",
      "description": {
        "fct-descr": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e that does not require a \u003ccode\u003e\u003ca\u003enewBottom\u003c/a\u003e\u003c/code\u003e argument,\n rather, it uses the generic version of that function.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap key s (f s a)-\u003e key-\u003e (f s a -\u003e Par d s b)-\u003e Par d s b",
        "fct-type": "function",
        "title": "gmodify"
      },
      "index": {
        "description": "generic version of modify that does not require newBottom argument rather it uses the generic version of that function",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "gmodify",
        "normalized": "IMap a b(c b d)-\u003ea-\u003e(c b d-\u003ePar e b f)-\u003ePar e b f",
        "package": "lvish",
        "partial": "",
        "signature": "IMap key s(f s a)-\u003ekey-\u003e(f s a-\u003ePar d s b)-\u003ePar d s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single entry into the map.  Strict (WHNF) in the key and value.\n\u003c/p\u003e\u003cp\u003eAs with other container LVars, if a key is inserted multiple times, the values had\n   better be equal \u003ccode\u003e(==)\u003c/code\u003e, or a multiple-put error is raised.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "k -\u003e v -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Put single entry into the map Strict WHNF in the key and value As with other container LVars if key is inserted multiple times the values had better be equal or multiple-put error is raised",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eIMap a c b-\u003ePar d c()",
        "package": "lvish",
        "partial": "",
        "signature": "k-\u003ev-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIMap\u003c/a\u003e\u003c/code\u003es containing other LVars have some additional capabilities compared to\n those containing regular Haskell data.  In particular, it is possible to modify\n existing entries (monotonically).  Further, this \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e function implicitly\n inserts a \"bottom\" element if there is no existing entry for the key.\n\u003c/p\u003e\u003cp\u003eUnfortunately, that means that this takes another computation for creating new\n \"bottom\" elements for the nested LVars stored inside the \u003ccode\u003e\u003ca\u003eIMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap key s (f s a)-\u003e key-\u003e Par d s (f s a)-\u003e (f s a -\u003e Par d s b)-\u003e Par d s b",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "IMap containing other LVars have some additional capabilities compared to those containing regular Haskell data In particular it is possible to modify existing entries monotonically Further this modify function implicitly inserts bottom element if there is no existing entry for the key Unfortunately that means that this takes another computation for creating new bottom elements for the nested LVars stored inside the IMap",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "modify",
        "normalized": "IMap a b(c b d)-\u003ea-\u003ePar e b(c b d)-\u003e(c b d-\u003ePar e b f)-\u003ePar e b f",
        "package": "lvish",
        "partial": "",
        "signature": "IMap key s(f s a)-\u003ekey-\u003ePar d s(f s a)-\u003e(f s a-\u003ePar d s b)-\u003ePar d s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:newEmptyMap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a fresh map with nothing in it.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-PureMap.html#newEmptyMap",
        "fct-type": "function",
        "title": "newEmptyMap"
      },
      "index": {
        "description": "Create fresh map with nothing in it",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "newEmptyMap",
        "normalized": "",
        "package": "lvish",
        "partial": "Empty Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:newFromList",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function that is equivalent to calling \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e\n followed by \u003ccode\u003e\u003ca\u003enewMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "[(k, v)] -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-PureMap.html#newFromList",
        "fct-type": "function",
        "title": "newFromList"
      },
      "index": {
        "description": "convenience function that is equivalent to calling fromList followed by newMap",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "newFromList",
        "normalized": "[(a,b)]-\u003ePar c d(IMap a d b)",
        "package": "lvish",
        "partial": "From List",
        "signature": "[(k,v)]-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:newMap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new map populated with initial elements.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Map k v -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-PureMap.html#newMap",
        "fct-type": "function",
        "title": "newMap"
      },
      "index": {
        "description": "Create new map populated with initial elements",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "newMap",
        "normalized": "Map a b-\u003ePar c d(IMap a d b)",
        "package": "lvish",
        "partial": "Map",
        "signature": "Map k v-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:traverseFrzn_",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a frozen map for side effect.  This is useful (in comparison with more\n generic operations) because the function passed in may see the key as well as the\n value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s ()) -\u003e IMap k Frzn a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#traverseFrzn_",
        "fct-type": "function",
        "title": "traverseFrzn_"
      },
      "index": {
        "description": "Traverse frozen map for side effect This is useful in comparison with more generic operations because the function passed in may see the key as well as the value",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "traverseFrzn_",
        "normalized": "(a-\u003eb-\u003ePar c d())-\u003eIMap a Frzn b-\u003ePar c d()",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "(k-\u003ea-\u003ePar d s())-\u003eIMap k Frzn a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:traverseMap",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a monotonic map between the input and output sets.\n Produce a new result based on each element, while leaving the keys\n the same.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e Par d s (IMap k s b)",
        "fct-source": "src/Data-LVar-PureMap.html#traverseMap",
        "fct-type": "function",
        "title": "traverseMap"
      },
      "index": {
        "description": "Establish monotonic map between the input and output sets Produce new result based on each element while leaving the keys the same",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "traverseMap",
        "normalized": "(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003ePar c d(IMap a d e)",
        "package": "lvish",
        "partial": "Map",
        "signature": "(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003ePar d s(IMap k s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:traverseMapHP",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etraverseMap\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e Par d s (IMap k s b)",
        "fct-source": "src/Data-LVar-PureMap.html#traverseMapHP",
        "fct-type": "function",
        "title": "traverseMapHP"
      },
      "index": {
        "description": "variant of traverseMap that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "traverseMapHP",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003ePar c d(IMap a d e)",
        "package": "lvish",
        "partial": "Map HP",
        "signature": "Maybe HandlerPool-\u003e(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003ePar d s(IMap k s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:traverseMapHP_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etraverseMap_\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e IMap k s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#traverseMapHP_",
        "fct-type": "function",
        "title": "traverseMapHP_"
      },
      "index": {
        "description": "variant of traverseMap that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "traverseMapHP_",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003eIMap a d e-\u003ePar c d()",
        "package": "lvish",
        "partial": "Map HP",
        "signature": "Maybe HandlerPool-\u003e(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003eIMap k s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:traverseMap_",
      "description": {
        "fct-descr": "\u003cp\u003eAn imperative-style, in-place version of \u003ccode\u003e\u003ca\u003etraverseMap\u003c/a\u003e\u003c/code\u003e that takes the output set\n as an argument.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e IMap k s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#traverseMap_",
        "fct-type": "function",
        "title": "traverseMap_"
      },
      "index": {
        "description": "An imperative-style in-place version of traverseMap that takes the output set as an argument",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "traverseMap_",
        "normalized": "(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003eIMap a d e-\u003ePar c d()",
        "package": "lvish",
        "partial": "Map",
        "signature": "(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003eIMap k s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a new map which will (ultimately) contain everything in either input\n map.  Conflicting entries will result in a multiple put exception.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s a -\u003e IMap k s a -\u003e Par d s (IMap k s a)",
        "fct-source": "src/Data-LVar-PureMap.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return new map which will ultimately contain everything in either input map Conflicting entries will result in multiple put exception",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "union",
        "normalized": "IMap a b c-\u003eIMap a b c-\u003ePar d b(IMap a b c)",
        "package": "lvish",
        "partial": "",
        "signature": "IMap k s a-\u003eIMap k s a-\u003ePar d s(IMap k s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:unionHP",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers in the\n resulting set to the same handler pool as those in the two input\n sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e IMap k s a -\u003e IMap k s a -\u003e Par d s (IMap k s a)",
        "fct-source": "src/Data-LVar-PureMap.html#unionHP",
        "fct-type": "function",
        "title": "unionHP"
      },
      "index": {
        "description": "variant of union that optionally ties the handlers in the resulting set to the same handler pool as those in the two input sets",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "unionHP",
        "normalized": "Maybe HandlerPool-\u003eIMap a b c-\u003eIMap a b c-\u003ePar d b(IMap a b c)",
        "package": "lvish",
        "partial": "HP",
        "signature": "Maybe HandlerPool-\u003eIMap k s a-\u003eIMap k s a-\u003ePar d s(IMap k s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:waitSize",
      "description": {
        "fct-descr": "\u003cp\u003eWait on the \u003cem\u003esize\u003c/em\u003e of the map, not its contents.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#waitSize",
        "fct-type": "function",
        "title": "waitSize"
      },
      "index": {
        "description": "Wait on the size of the map not its contents",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "waitSize",
        "normalized": "Int-\u003eIMap a b c-\u003ePar d b()",
        "package": "lvish",
        "partial": "Size",
        "signature": "Int-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:waitValue",
      "description": {
        "fct-descr": "\u003cp\u003eWait until the map contains a certain value (on any key).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "v -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureMap.html#waitValue",
        "fct-type": "function",
        "title": "waitValue"
      },
      "index": {
        "description": "Wait until the map contains certain value on any key",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "waitValue",
        "normalized": "a-\u003eIMap b c a-\u003ePar d c()",
        "package": "lvish",
        "partial": "Value",
        "signature": "v-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureMap.html#v:withCallbacksThenFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a per-element callback, then run an action in this context, and freeze\n when all (recursive) invocations of the callback are complete.  Returns the final\n value of the provided action.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e (k -\u003e v -\u003e QPar s ()) -\u003e QPar s b -\u003e QPar s b",
        "fct-source": "src/Data-LVar-PureMap.html#withCallbacksThenFreeze",
        "fct-type": "function",
        "title": "withCallbacksThenFreeze"
      },
      "index": {
        "description": "Register per-element callback then run an action in this context and freeze when all recursive invocations of the callback are complete Returns the final value of the provided action",
        "hierarchy": "Data LVar PureMap",
        "module": "Data.LVar.PureMap",
        "name": "withCallbacksThenFreeze",
        "normalized": "IMap a b c-\u003e(a-\u003ec-\u003eQPar b())-\u003eQPar b d-\u003eQPar b d",
        "package": "lvish",
        "partial": "Callbacks Then Freeze",
        "signature": "IMap k s v-\u003e(k-\u003ev-\u003eQPar s())-\u003eQPar s b-\u003eQPar s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides sets that only grow.  It is based on the popular \u003ca\u003eData.Set\u003c/a\u003e\n  balanced-tree representation of sets.  Thus scalability is \u003cem\u003enot\u003c/em\u003e good for this\n  implementation.  However, there are some interoperability benefits.  For exmaple,\n  after running a parallel computation with a set result, this module can produce a\n  \u003ccode\u003eSet\u003c/code\u003e in \u003cem\u003eO(1)\u003c/em\u003e without copying, which may be useful downstream.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-PureSet.html",
        "fct-type": "module",
        "title": "PureSet"
      },
      "index": {
        "description": "This module provides sets that only grow It is based on the popular Data.Set balanced-tree representation of sets Thus scalability is not good for this implementation However there are some interoperability benefits For exmaple after running parallel computation with set result this module can produce Set in without copying which may be useful downstream",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "PureSet",
        "normalized": "",
        "package": "lvish",
        "partial": "Pure Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#t:ISet",
      "description": {
        "fct-descr": "\u003cp\u003eThe set datatype itself.  Like all other LVars, it has an \u003ccode\u003es\u003c/code\u003e parameter (like\n an \u003ccode\u003eSTRef\u003c/code\u003e) in addition to the \u003ccode\u003ea\u003c/code\u003e parameter that describes the type of elements\n in the set.\n\u003c/p\u003e\u003cp\u003ePerformance note: There is only \u003cem\u003eone\u003c/em\u003e mutable location in this implementation.  Thus\n it is not a scalable implementation.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "newtype",
        "fct-source": "src/Data-LVar-PureSet.html#ISet",
        "fct-type": "newtype",
        "title": "ISet"
      },
      "index": {
        "description": "The set datatype itself Like all other LVars it has an parameter like an STRef in addition to the parameter that describes the type of elements in the set Performance note There is only one mutable location in this implementation Thus it is not scalable implementation",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "ISet",
        "normalized": "",
        "package": "lvish",
        "partial": "ISet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:ISet",
      "description": {
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet (LVar s (IORef (Set a)) a)",
        "fct-source": "src/Data-LVar-PureSet.html#ISet",
        "fct-type": "function",
        "title": "ISet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "ISet",
        "normalized": "",
        "package": "lvish",
        "partial": "ISet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:cartesianProd",
      "description": {
        "fct-descr": "\u003cp\u003eTake the cartesian product of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s b -\u003e Par d s (ISet s (a, b))",
        "fct-source": "src/Data-LVar-PureSet.html#cartesianProd",
        "fct-type": "function",
        "title": "cartesianProd"
      },
      "index": {
        "description": "Take the cartesian product of two sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "cartesianProd",
        "normalized": "ISet a b-\u003eISet a c-\u003ePar d a(ISet a(b,c))",
        "package": "lvish",
        "partial": "Prod",
        "signature": "ISet s a-\u003eISet s b-\u003ePar d s(ISet s(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:cartesianProdHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecartesianProd\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e ISet s a -\u003e ISet s b -\u003e Par d s (ISet s (a, b))",
        "fct-source": "src/Data-LVar-PureSet.html#cartesianProdHP",
        "fct-type": "function",
        "title": "cartesianProdHP"
      },
      "index": {
        "description": "Variant of cartesianProd that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "cartesianProdHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003eISet a c-\u003ePar d a(ISet a(b,c))",
        "package": "lvish",
        "partial": "Prod HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003eISet s b-\u003ePar d s(ISet s(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:cartesianProds",
      "description": {
        "fct-descr": "\u003cp\u003eTake the cartesian product of several sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "[ISet s a] -\u003e Par d s (ISet s [a])",
        "fct-source": "src/Data-LVar-PureSet.html#cartesianProds",
        "fct-type": "function",
        "title": "cartesianProds"
      },
      "index": {
        "description": "Take the cartesian product of several sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "cartesianProds",
        "normalized": "[ISet a b]-\u003ePar c a(ISet a[b])",
        "package": "lvish",
        "partial": "Prods",
        "signature": "[ISet s a]-\u003ePar d s(ISet s[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:cartesianProdsHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecartesianProds\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e [ISet s a] -\u003e Par d s (ISet s [a])",
        "fct-source": "src/Data-LVar-PureSet.html#cartesianProdsHP",
        "fct-type": "function",
        "title": "cartesianProdsHP"
      },
      "index": {
        "description": "Variant of cartesianProds that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "cartesianProdsHP",
        "normalized": "Maybe HandlerPool-\u003e[ISet a b]-\u003ePar c a(ISet a[b])",
        "package": "lvish",
        "partial": "Prods HP",
        "signature": "Maybe HandlerPool-\u003e[ISet s a]-\u003ePar d s(ISet s[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh set which will contain strictly more elements than the input set.\n That is, things put in the former go in the latter, but not vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Return fresh set which will contain strictly more elements than the input set That is things put in the former go in the latter but not vice versa",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "copy",
        "normalized": "ISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new elements added to\n the set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#forEach",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new elements added to the set",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "forEach",
        "normalized": "ISet a b-\u003e(b-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Each",
        "signature": "ISet s a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:forEachHP",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new elements added to\n the set, optionally enrolled in a handler pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool-\u003e ISet s a-\u003e (a -\u003e Par d s ())-\u003e Par d s ()",
        "fct-type": "function",
        "title": "forEachHP"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new elements added to the set optionally enrolled in handler pool",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "forEachHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003e(b-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Each HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:freezeSet",
      "description": {
        "fct-descr": "\u003cp\u003eGet the exact contents of the set.  As with any\n quasi-deterministic operation, using \u003ccode\u003e\u003ca\u003efreezeSet\u003c/a\u003e\u003c/code\u003e may cause your\n program to exhibit a limited form of nondeterminism: it will never\n return the wrong answer, but it may include synchronization bugs\n that can (nondeterministically) cause exceptions.\n\u003c/p\u003e\u003cp\u003eThis \u003ca\u003eData.Set\u003c/a\u003e-based implementation has the special property that\n you can retrieve the full set without any \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and without\n nondeterminism leaking.  (This is because the internal order is\n fixed for the tree-based representation of sets that \u003ca\u003eData.Set\u003c/a\u003e\n uses.)\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e QPar s (Set a)",
        "fct-source": "src/Data-LVar-PureSet.html#freezeSet",
        "fct-type": "function",
        "title": "freezeSet"
      },
      "index": {
        "description": "Get the exact contents of the set As with any quasi-deterministic operation using freezeSet may cause your program to exhibit limited form of nondeterminism it will never return the wrong answer but it may include synchronization bugs that can nondeterministically cause exceptions This Data.Set based implementation has the special property that you can retrieve the full set without any IO and without nondeterminism leaking This is because the internal order is fixed for the tree-based representation of sets that Data.Set uses",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "freezeSet",
        "normalized": "ISet a b-\u003eQPar a(Set b)",
        "package": "lvish",
        "partial": "Set",
        "signature": "ISet s a-\u003eQPar s(Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:freezeSetAfter",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze an \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e after a specified callback/handler is done running.  This\n differs from \u003ccode\u003e\u003ca\u003ewithCallbacksThenFreeze\u003c/a\u003e\u003c/code\u003e by not taking an additional action to run in\n the context of the handlers.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ccode\u003e\u003ca\u003efreezeSetAfter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ewithCallbacksThenFreeze\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e 'return ()' \u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e QPar s ()) -\u003e QPar s ()",
        "fct-source": "src/Data-LVar-PureSet.html#freezeSetAfter",
        "fct-type": "function",
        "title": "freezeSetAfter"
      },
      "index": {
        "description": "Freeze an ISet after specified callback handler is done running This differs from withCallbacksThenFreeze by not taking an additional action to run in the context of the handlers freezeSetAfter withCallbacksThenFreeze return",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "freezeSetAfter",
        "normalized": "ISet a b-\u003e(b-\u003eQPar a())-\u003eQPar a()",
        "package": "lvish",
        "partial": "Set After",
        "signature": "ISet s a-\u003e(a-\u003eQPar s())-\u003eQPar s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:fromISet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e: Convert from an \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e to a plain \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n   This is only permitted when the \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e has already been frozen.\n   This is useful for processing the result of \u003ccode\u003e\u003ca\u003erunParThenFreeze\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet Frzn a -\u003e Set a",
        "fct-source": "src/Data-LVar-PureSet.html#fromISet",
        "fct-type": "function",
        "title": "fromISet"
      },
      "index": {
        "description": "Convert from an ISet to plain Set This is only permitted when the ISet has already been frozen This is useful for processing the result of runParThenFreeze",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "fromISet",
        "normalized": "ISet Frzn a-\u003eSet a",
        "package": "lvish",
        "partial": "ISet",
        "signature": "ISet Frzn a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single element in the set.  (WHNF) Strict in the element being put in the\n set.     \n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Put single element in the set WHNF Strict in the element being put in the set",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "insert",
        "normalized": "a-\u003eISet b a-\u003ePar c b()",
        "package": "lvish",
        "partial": "",
        "signature": "a-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new set which will contain the intersection of the two input sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Build new set which will contain the intersection of the two input sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "intersection",
        "normalized": "ISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:intersectionHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers in the resulting set to the same\n handler pool as those in the two input sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#intersectionHP",
        "fct-type": "function",
        "title": "intersectionHP"
      },
      "index": {
        "description": "Variant of intersection that optionally ties the handlers in the resulting set to the same handler pool as those in the two input sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "intersectionHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:newEmptySet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty, monotonically growing set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#newEmptySet",
        "fct-type": "function",
        "title": "newEmptySet"
      },
      "index": {
        "description": "Create new empty monotonically growing set",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "newEmptySet",
        "normalized": "",
        "package": "lvish",
        "partial": "Empty Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:newFromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new set drawing initial elements from an existing list.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "[a] -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#newFromList",
        "fct-type": "function",
        "title": "newFromList"
      },
      "index": {
        "description": "Create new set drawing initial elements from an existing list",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "newFromList",
        "normalized": "[a]-\u003ePar b c(ISet c a)",
        "package": "lvish",
        "partial": "From List",
        "signature": "[a]-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:newSet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new set populated with initial elements.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Set a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#newSet",
        "fct-type": "function",
        "title": "newSet"
      },
      "index": {
        "description": "Create new set populated with initial elements",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "newSet",
        "normalized": "Set a-\u003ePar b c(ISet c a)",
        "package": "lvish",
        "partial": "Set",
        "signature": "Set a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:traverseSet",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a monotonic map between the input and output sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "(a -\u003e Par d s b) -\u003e ISet s a -\u003e Par d s (ISet s b)",
        "fct-source": "src/Data-LVar-PureSet.html#traverseSet",
        "fct-type": "function",
        "title": "traverseSet"
      },
      "index": {
        "description": "Establish monotonic map between the input and output sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "traverseSet",
        "normalized": "(a-\u003ePar b c d)-\u003eISet c a-\u003ePar b c(ISet c d)",
        "package": "lvish",
        "partial": "Set",
        "signature": "(a-\u003ePar d s b)-\u003eISet s a-\u003ePar d s(ISet s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:traverseSetHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseSet\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s b) -\u003e ISet s a -\u003e Par d s (ISet s b)",
        "fct-source": "src/Data-LVar-PureSet.html#traverseSetHP",
        "fct-type": "function",
        "title": "traverseSetHP"
      },
      "index": {
        "description": "Variant of traverseSet that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "traverseSetHP",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c d)-\u003eISet c a-\u003ePar b c(ISet c d)",
        "package": "lvish",
        "partial": "Set HP",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s b)-\u003eISet s a-\u003ePar d s(ISet s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:traverseSetHP_",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseSet_\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s b) -\u003e ISet s a -\u003e ISet s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#traverseSetHP_",
        "fct-type": "function",
        "title": "traverseSetHP_"
      },
      "index": {
        "description": "Variant of traverseSet that optionally ties the handlers to pool",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "traverseSetHP_",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c d)-\u003eISet c a-\u003eISet c d-\u003ePar b c()",
        "package": "lvish",
        "partial": "Set HP",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s b)-\u003eISet s a-\u003eISet s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:traverseSet_",
      "description": {
        "fct-descr": "\u003cp\u003eAn imperative-style, in-place version of \u003ccode\u003e\u003ca\u003etraverseSet\u003c/a\u003e\u003c/code\u003e that takes the output set\n as an argument.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "(a -\u003e Par d s b) -\u003e ISet s a -\u003e ISet s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#traverseSet_",
        "fct-type": "function",
        "title": "traverseSet_"
      },
      "index": {
        "description": "An imperative-style in-place version of traverseSet that takes the output set as an argument",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "traverseSet_",
        "normalized": "(a-\u003ePar b c d)-\u003eISet c a-\u003eISet c d-\u003ePar b c()",
        "package": "lvish",
        "partial": "Set",
        "signature": "(a-\u003ePar d s b)-\u003eISet s a-\u003eISet s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a new set which will (ultimately) contain everything in either input set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return new set which will ultimately contain everything in either input set",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "union",
        "normalized": "ISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:unionHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers in the resulting set to the same\n handler pool as those in the two input sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-PureSet.html#unionHP",
        "fct-type": "function",
        "title": "unionHP"
      },
      "index": {
        "description": "Variant of union that optionally ties the handlers in the resulting set to the same handler pool as those in the two input sets",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "unionHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:waitElem",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the set to contain a specified element.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#waitElem",
        "fct-type": "function",
        "title": "waitElem"
      },
      "index": {
        "description": "Wait for the set to contain specified element",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "waitElem",
        "normalized": "a-\u003eISet b a-\u003ePar c b()",
        "package": "lvish",
        "partial": "Elem",
        "signature": "a-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:waitSize",
      "description": {
        "fct-descr": "\u003cp\u003eWait on the \u003cem\u003esize\u003c/em\u003e of the set, not its contents.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-PureSet.html#waitSize",
        "fct-type": "function",
        "title": "waitSize"
      },
      "index": {
        "description": "Wait on the size of the set not its contents",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "waitSize",
        "normalized": "Int-\u003eISet a b-\u003ePar c a()",
        "package": "lvish",
        "partial": "Size",
        "signature": "Int-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-PureSet.html#v:withCallbacksThenFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a per-element callback, then run an action in this context, and freeze\n when all (recursive) invocations of the callback are complete.  Returns the final\n value of the provided action.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.PureSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e QPar s ()) -\u003e QPar s b -\u003e QPar s b",
        "fct-source": "src/Data-LVar-PureSet.html#withCallbacksThenFreeze",
        "fct-type": "function",
        "title": "withCallbacksThenFreeze"
      },
      "index": {
        "description": "Register per-element callback then run an action in this context and freeze when all recursive invocations of the callback are complete Returns the final value of the provided action",
        "hierarchy": "Data LVar PureSet",
        "module": "Data.LVar.PureSet",
        "name": "withCallbacksThenFreeze",
        "normalized": "ISet a b-\u003e(b-\u003eQPar a())-\u003eQPar a c-\u003eQPar a c",
        "package": "lvish",
        "partial": "Callbacks Then Freeze",
        "signature": "ISet s a-\u003e(a-\u003eQPar s())-\u003eQPar s b-\u003eQPar s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides finite maps that only grow. It is based on a\n\u003cem\u003econcurrent skip list\u003c/em\u003e implementation of maps.\n\u003c/p\u003e\u003cp\u003eThis module is usually a more efficient alternative to\n\u003ccode\u003e\u003ca\u003ePureMap\u003c/a\u003e\u003c/code\u003e, and provides almost the same interface. However,\nit's always good to test multiple data structures if you have a\nperformance-critical use case.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-SLMap.html",
        "fct-type": "module",
        "title": "SLMap"
      },
      "index": {
        "description": "This module provides finite maps that only grow It is based on concurrent skip list implementation of maps This module is usually more efficient alternative to PureMap and provides almost the same interface However it always good to test multiple data structures if you have performance-critical use case",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "SLMap",
        "normalized": "",
        "package": "lvish",
        "partial": "SLMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#t:IMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe map datatype itself.  Like all other LVars, it has an \u003ccode\u003es\u003c/code\u003e parameter (think\n  \u003ccode\u003eSTRef\u003c/code\u003e) in addition to the \u003ccode\u003ea\u003c/code\u003e parameter that describes the type of elements\n in the set.\n\u003c/p\u003e\u003cp\u003ePerformance note: this data structure reduces contention between parallel\n computations inserting into the map, but all \u003cem\u003eblocking\u003c/em\u003e computations are not as\n scalable.  All continuations waiting for not-yet-present elements will currently\n share a single queue [2013.09.26].\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-LVar-SLMap.html#IMap",
        "fct-type": "data",
        "title": "IMap"
      },
      "index": {
        "description": "The map datatype itself Like all other LVars it has an parameter think STRef in addition to the parameter that describes the type of elements in the set Performance note this data structure reduces contention between parallel computations inserting into the map but all blocking computations are not as scalable All continuations waiting for not-yet-present elements will currently share single queue",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "IMap",
        "normalized": "",
        "package": "lvish",
        "partial": "IMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh map which will contain strictly more elements than the input.\n That is, things put in the former go in the latter, but not vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-SLMap.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Return fresh map which will contain strictly more elements than the input That is things put in the former go in the latter but not vice versa",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "copy",
        "normalized": "IMap a b c-\u003ePar d b(IMap a b c)",
        "package": "lvish",
        "partial": "",
        "signature": "IMap k s v-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new new key/value pairs added to\n the map.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e (k -\u003e v -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#forEach",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new new key value pairs added to the map",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "forEach",
        "normalized": "IMap a b c-\u003e(a-\u003ec-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Each",
        "signature": "IMap k s v-\u003e(k-\u003ev-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:forEachHP",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new key/value pairs\n added to the map, optionally tied to a handler pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool-\u003e IMap k s v-\u003e (k -\u003e v -\u003e Par d s ())-\u003e Par d s ()",
        "fct-type": "function",
        "title": "forEachHP"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new key value pairs added to the map optionally tied to handler pool",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "forEachHP",
        "normalized": "Maybe HandlerPool-\u003eIMap a b c-\u003e(a-\u003ec-\u003ePar d b())-\u003ePar d b()",
        "package": "lvish",
        "partial": "Each HP",
        "signature": "Maybe HandlerPool-\u003eIMap k s v-\u003e(k-\u003ev-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:freezeMap",
      "description": {
        "fct-descr": "\u003cp\u003eGet the exact contents of the map.  As with any\n quasi-deterministic operation, using \u003ccode\u003e\u003ca\u003efreezeMap\u003c/a\u003e\u003c/code\u003e may cause your\n program to exhibit a limited form of nondeterminism: it will never\n return the wrong answer, but it may include synchronization bugs\n that can (nondeterministically) cause exceptions.\n\u003c/p\u003e\u003cp\u003eThis is an \u003cem\u003eO(1)\u003c/em\u003e operation that doesn't copy the in-memory representation of the\n IMap.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e QPar s (IMap k Frzn v)",
        "fct-source": "src/Data-LVar-SLMap.html#freezeMap",
        "fct-type": "function",
        "title": "freezeMap"
      },
      "index": {
        "description": "Get the exact contents of the map As with any quasi-deterministic operation using freezeMap may cause your program to exhibit limited form of nondeterminism it will never return the wrong answer but it may include synchronization bugs that can nondeterministically cause exceptions This is an operation that doesn copy the in-memory representation of the IMap",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "freezeMap",
        "normalized": "IMap a b c-\u003eQPar b(IMap a Frzn c)",
        "package": "lvish",
        "partial": "Map",
        "signature": "IMap k s v-\u003eQPar s(IMap k Frzn v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:getKey",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the map to contain a specified key, and return the associated value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "k -\u003e IMap k s v -\u003e Par d s v",
        "fct-source": "src/Data-LVar-SLMap.html#getKey",
        "fct-type": "function",
        "title": "getKey"
      },
      "index": {
        "description": "Wait for the map to contain specified key and return the associated value",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "getKey",
        "normalized": "a-\u003eIMap a b c-\u003ePar d b c",
        "package": "lvish",
        "partial": "Key",
        "signature": "k-\u003eIMap k s v-\u003ePar d s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single entry into the map.  (WHNF) Strict in the key and value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "k -\u003e v -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Put single entry into the map WHNF Strict in the key and value",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eIMap a c b-\u003ePar d c()",
        "package": "lvish",
        "partial": "",
        "signature": "k-\u003ev-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:levelCounts",
      "description": {
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s a -\u003e IO [Int]",
        "fct-source": "src/Data-LVar-SLMap.html#levelCounts",
        "fct-type": "function",
        "title": "levelCounts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "levelCounts",
        "normalized": "IMap a b c-\u003eIO[Int]",
        "package": "lvish",
        "partial": "Counts",
        "signature": "IMap k s a-\u003eIO[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIMap\u003c/a\u003e\u003c/code\u003es containing other LVars have some additional capabilities compared to\n those containing regular Haskell data.  In particular, it is possible to modify\n existing entries (monotonically).  Further, this \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e function implicitly\n inserts a \"bottom\" element if there is no existing entry for the key.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap key s (f s a)-\u003e key-\u003e Par d s (f s a)-\u003e (f s a -\u003e Par d s b)-\u003e Par d s b",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "IMap containing other LVars have some additional capabilities compared to those containing regular Haskell data In particular it is possible to modify existing entries monotonically Further this modify function implicitly inserts bottom element if there is no existing entry for the key",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "modify",
        "normalized": "IMap a b(c b d)-\u003ea-\u003ePar e b(c b d)-\u003e(c b d-\u003ePar e b f)-\u003ePar e b f",
        "package": "lvish",
        "partial": "",
        "signature": "IMap key s(f s a)-\u003ekey-\u003ePar d s(f s a)-\u003e(f s a-\u003ePar d s b)-\u003ePar d s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:newEmptyMap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a fresh map with nothing in it.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-SLMap.html#newEmptyMap",
        "fct-type": "function",
        "title": "newEmptyMap"
      },
      "index": {
        "description": "Create fresh map with nothing in it",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "newEmptyMap",
        "normalized": "",
        "package": "lvish",
        "partial": "Empty Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:newFromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new map drawing initial elements from an existing list.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "[(k, v)] -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-SLMap.html#newFromList",
        "fct-type": "function",
        "title": "newFromList"
      },
      "index": {
        "description": "Create new map drawing initial elements from an existing list",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "newFromList",
        "normalized": "[(a,b)]-\u003ePar c d(IMap a d b)",
        "package": "lvish",
        "partial": "From List",
        "signature": "[(k,v)]-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:newMap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new map populated with initial elements.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Map k v -\u003e Par d s (IMap k s v)",
        "fct-source": "src/Data-LVar-SLMap.html#newMap",
        "fct-type": "function",
        "title": "newMap"
      },
      "index": {
        "description": "Create new map populated with initial elements",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "newMap",
        "normalized": "Map a b-\u003ePar c d(IMap a d b)",
        "package": "lvish",
        "partial": "Map",
        "signature": "Map k v-\u003ePar d s(IMap k s v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:traverseFrzn_",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a frozen map for side effect.  This is useful (in comparison with more\n generic operations) because the function passed in may see the key as well as the\n value.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s ()) -\u003e IMap k Frzn a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#traverseFrzn_",
        "fct-type": "function",
        "title": "traverseFrzn_"
      },
      "index": {
        "description": "Traverse frozen map for side effect This is useful in comparison with more generic operations because the function passed in may see the key as well as the value",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "traverseFrzn_",
        "normalized": "(a-\u003eb-\u003ePar c d())-\u003eIMap a Frzn b-\u003ePar c d()",
        "package": "lvish",
        "partial": "Frzn",
        "signature": "(k-\u003ea-\u003ePar d s())-\u003eIMap k Frzn a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:traverseMap",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a monotonic map between the input and output map  Produce a new result\n based on each element, while leaving the keys the same.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e Par d s (IMap k s b)",
        "fct-source": "src/Data-LVar-SLMap.html#traverseMap",
        "fct-type": "function",
        "title": "traverseMap"
      },
      "index": {
        "description": "Establish monotonic map between the input and output map Produce new result based on each element while leaving the keys the same",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "traverseMap",
        "normalized": "(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003ePar c d(IMap a d e)",
        "package": "lvish",
        "partial": "Map",
        "signature": "(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003ePar d s(IMap k s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:traverseMapHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseMap\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e Par d s (IMap k s b)",
        "fct-source": "src/Data-LVar-SLMap.html#traverseMapHP",
        "fct-type": "function",
        "title": "traverseMapHP"
      },
      "index": {
        "description": "Variant of traverseMap that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "traverseMapHP",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003ePar c d(IMap a d e)",
        "package": "lvish",
        "partial": "Map HP",
        "signature": "Maybe HandlerPool-\u003e(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003ePar d s(IMap k s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:traverseMapHP_",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseMap_\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e IMap k s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#traverseMapHP_",
        "fct-type": "function",
        "title": "traverseMapHP_"
      },
      "index": {
        "description": "Variant of traverseMap that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "traverseMapHP_",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003eIMap a d e-\u003ePar c d()",
        "package": "lvish",
        "partial": "Map HP",
        "signature": "Maybe HandlerPool-\u003e(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003eIMap k s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:traverseMap_",
      "description": {
        "fct-descr": "\u003cp\u003eAn imperative-style, in-place version of \u003ccode\u003e\u003ca\u003etraverseMap\u003c/a\u003e\u003c/code\u003e that takes the output map\n as an argument.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "(k -\u003e a -\u003e Par d s b) -\u003e IMap k s a -\u003e IMap k s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#traverseMap_",
        "fct-type": "function",
        "title": "traverseMap_"
      },
      "index": {
        "description": "An imperative-style in-place version of traverseMap that takes the output map as an argument",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "traverseMap_",
        "normalized": "(a-\u003eb-\u003ePar c d e)-\u003eIMap a d b-\u003eIMap a d e-\u003ePar c d()",
        "package": "lvish",
        "partial": "Map",
        "signature": "(k-\u003ea-\u003ePar d s b)-\u003eIMap k s a-\u003eIMap k s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:unionHP",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a new map which will (ultimately) contain everything in either input\n   map.  Conflicting entries will result in a multiple put exception.\n   Optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e IMap k s a -\u003e IMap k s a -\u003e Par d s (IMap k s a)",
        "fct-source": "src/Data-LVar-SLMap.html#unionHP",
        "fct-type": "function",
        "title": "unionHP"
      },
      "index": {
        "description": "Return new map which will ultimately contain everything in either input map Conflicting entries will result in multiple put exception Optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "unionHP",
        "normalized": "Maybe HandlerPool-\u003eIMap a b c-\u003eIMap a b c-\u003ePar d b(IMap a b c)",
        "package": "lvish",
        "partial": "HP",
        "signature": "Maybe HandlerPool-\u003eIMap k s a-\u003eIMap k s a-\u003ePar d s(IMap k s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:waitSize",
      "description": {
        "fct-descr": "\u003cp\u003eWait on the SIZE of the map, not its contents.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#waitSize",
        "fct-type": "function",
        "title": "waitSize"
      },
      "index": {
        "description": "Wait on the SIZE of the map not its contents",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "waitSize",
        "normalized": "Int-\u003eIMap a b c-\u003ePar d b()",
        "package": "lvish",
        "partial": "Size",
        "signature": "Int-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:waitValue",
      "description": {
        "fct-descr": "\u003cp\u003eWait until the map contains a certain value (on any key).\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "v -\u003e IMap k s v -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLMap.html#waitValue",
        "fct-type": "function",
        "title": "waitValue"
      },
      "index": {
        "description": "Wait until the map contains certain value on any key",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "waitValue",
        "normalized": "a-\u003eIMap b c a-\u003ePar d c()",
        "package": "lvish",
        "partial": "Value",
        "signature": "v-\u003eIMap k s v-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLMap.html#v:withCallbacksThenFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a per-element callback, then run an action in this context, and freeze\n when all (recursive) invocations of the callback are complete.  Returns the final\n value of the provided action.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLMap",
        "fct-package": "lvish",
        "fct-signature": "IMap k s v -\u003e (k -\u003e v -\u003e QPar s ()) -\u003e QPar s b -\u003e QPar s b",
        "fct-source": "src/Data-LVar-SLMap.html#withCallbacksThenFreeze",
        "fct-type": "function",
        "title": "withCallbacksThenFreeze"
      },
      "index": {
        "description": "Register per-element callback then run an action in this context and freeze when all recursive invocations of the callback are complete Returns the final value of the provided action",
        "hierarchy": "Data LVar SLMap",
        "module": "Data.LVar.SLMap",
        "name": "withCallbacksThenFreeze",
        "normalized": "IMap a b c-\u003e(a-\u003ec-\u003eQPar b())-\u003eQPar b d-\u003eQPar b d",
        "package": "lvish",
        "partial": "Callbacks Then Freeze",
        "signature": "IMap k s v-\u003e(k-\u003ev-\u003eQPar s())-\u003eQPar s b-\u003eQPar s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides sets that only grow.  It is based on a\n\u003cem\u003econcurrent skip list\u003c/em\u003e representation of sets.\n\u003c/p\u003e\u003cp\u003eThis module is usually a more efficient alternative to\n\u003ca\u003eData.LVar.PureSet\u003c/a\u003e, and provides almost the same interface.  However,\nit's always good to test multiple data structures if you have a\nperformance-critical use case.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "module",
        "fct-source": "src/Data-LVar-SLSet.html",
        "fct-type": "module",
        "title": "SLSet"
      },
      "index": {
        "description": "This module provides sets that only grow It is based on concurrent skip list representation of sets This module is usually more efficient alternative to Data.LVar.PureSet and provides almost the same interface However it always good to test multiple data structures if you have performance-critical use case",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "SLSet",
        "normalized": "",
        "package": "lvish",
        "partial": "SLSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#t:ISet",
      "description": {
        "fct-descr": "\u003cp\u003eThe set datatype itself.  Like all other LVars, it has an \u003ccode\u003es\u003c/code\u003e parameter (think\n \u003ccode\u003eSTRef\u003c/code\u003e) in addition to the \u003ccode\u003ea\u003c/code\u003e parameter that describes the type of elements\n in the set.\n\u003c/p\u003e\u003cp\u003ePerformance note: this data structure reduces contention between parallel\n computations inserting into the map, but all \u003cem\u003eblocking\u003c/em\u003e computations are not as\n scalable.  All continuations waiting for not-yet-present elements will currently\n share a single queue [2013.09.26].\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "data",
        "fct-source": "src/Data-LVar-SLSet.html#ISet",
        "fct-type": "data",
        "title": "ISet"
      },
      "index": {
        "description": "The set datatype itself Like all other LVars it has an parameter think STRef in addition to the parameter that describes the type of elements in the set Performance note this data structure reduces contention between parallel computations inserting into the map but all blocking computations are not as scalable All continuations waiting for not-yet-present elements will currently share single queue",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "ISet",
        "normalized": "",
        "package": "lvish",
        "partial": "ISet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:cartesianProd",
      "description": {
        "fct-descr": "\u003cp\u003eTake the cartesian product of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s b -\u003e Par d s (ISet s (a, b))",
        "fct-source": "src/Data-LVar-SLSet.html#cartesianProd",
        "fct-type": "function",
        "title": "cartesianProd"
      },
      "index": {
        "description": "Take the cartesian product of two sets",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "cartesianProd",
        "normalized": "ISet a b-\u003eISet a c-\u003ePar d a(ISet a(b,c))",
        "package": "lvish",
        "partial": "Prod",
        "signature": "ISet s a-\u003eISet s b-\u003ePar d s(ISet s(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:cartesianProdHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecartesianProd\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e ISet s a -\u003e ISet s b -\u003e Par d s (ISet s (a, b))",
        "fct-source": "src/Data-LVar-SLSet.html#cartesianProdHP",
        "fct-type": "function",
        "title": "cartesianProdHP"
      },
      "index": {
        "description": "Variant of cartesianProd that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "cartesianProdHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003eISet a c-\u003ePar d a(ISet a(b,c))",
        "package": "lvish",
        "partial": "Prod HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003eISet s b-\u003ePar d s(ISet s(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:cartesianProds",
      "description": {
        "fct-descr": "\u003cp\u003eTake the cartesian product of several sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "[ISet s a] -\u003e Par d s (ISet s [a])",
        "fct-source": "src/Data-LVar-SLSet.html#cartesianProds",
        "fct-type": "function",
        "title": "cartesianProds"
      },
      "index": {
        "description": "Take the cartesian product of several sets",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "cartesianProds",
        "normalized": "[ISet a b]-\u003ePar c a(ISet a[b])",
        "package": "lvish",
        "partial": "Prods",
        "signature": "[ISet s a]-\u003ePar d s(ISet s[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:cartesianProdsHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecartesianProds\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e [ISet s a] -\u003e Par d s (ISet s [a])",
        "fct-source": "src/Data-LVar-SLSet.html#cartesianProdsHP",
        "fct-type": "function",
        "title": "cartesianProdsHP"
      },
      "index": {
        "description": "Variant of cartesianProds that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "cartesianProdsHP",
        "normalized": "Maybe HandlerPool-\u003e[ISet a b]-\u003ePar c a(ISet a[b])",
        "package": "lvish",
        "partial": "Prods HP",
        "signature": "Maybe HandlerPool-\u003e[ISet s a]-\u003ePar d s(ISet s[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh set which will contain strictly more elements than the input set.\n That is, things put in the former go in the latter, but not vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Return fresh set which will contain strictly more elements than the input set That is things put in the former go in the latter but not vice versa",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "copy",
        "normalized": "ISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new elements added to\n the set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e Par d s ()) -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#forEach",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new elements added to the set",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "forEach",
        "normalized": "ISet a b-\u003e(b-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Each",
        "signature": "ISet s a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:forEachHP",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an (asynchronous) callback that listens for all new elements added to\n the set, optionally enrolled in a handler pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool-\u003e ISet s a-\u003e (a -\u003e Par d s ())-\u003e Par d s ()",
        "fct-type": "function",
        "title": "forEachHP"
      },
      "index": {
        "description": "Add an asynchronous callback that listens for all new elements added to the set optionally enrolled in handler pool",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "forEachHP",
        "normalized": "Maybe HandlerPool-\u003eISet a b-\u003e(b-\u003ePar c a())-\u003ePar c a()",
        "package": "lvish",
        "partial": "Each HP",
        "signature": "Maybe HandlerPool-\u003eISet s a-\u003e(a-\u003ePar d s())-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:freezeSetAfter",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze an \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e after a specified callback/handler is done running.  This\n differs from \u003ccode\u003e\u003ca\u003ewithCallbacksThenFreeze\u003c/a\u003e\u003c/code\u003e by not taking an additional action to run in\n the context of the handlers.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ccode\u003e\u003ca\u003efreezeSetAfter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ewithCallbacksThenFreeze\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e 'return ()' \u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e QPar s ()) -\u003e QPar s ()",
        "fct-source": "src/Data-LVar-SLSet.html#freezeSetAfter",
        "fct-type": "function",
        "title": "freezeSetAfter"
      },
      "index": {
        "description": "Freeze an ISet after specified callback handler is done running This differs from withCallbacksThenFreeze by not taking an additional action to run in the context of the handlers freezeSetAfter withCallbacksThenFreeze return",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "freezeSetAfter",
        "normalized": "ISet a b-\u003e(b-\u003eQPar a())-\u003eQPar a()",
        "package": "lvish",
        "partial": "Set After",
        "signature": "ISet s a-\u003e(a-\u003eQPar s())-\u003eQPar s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single element in the set.  (WHNF) Strict in the element being put in the\n set.     \n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Put single element in the set WHNF Strict in the element being put in the set",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "insert",
        "normalized": "a-\u003eISet b a-\u003ePar c b()",
        "package": "lvish",
        "partial": "",
        "signature": "a-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new set which will contain the intersection of the two input sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Build new set which will contain the intersection of the two input sets",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "intersection",
        "normalized": "ISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an element is in a frozen image of a set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e ISet Frzn a -\u003e Bool",
        "fct-source": "src/Data-LVar-SLSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Test whether an element is in frozen image of set",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "member",
        "normalized": "a-\u003eISet Frzn a-\u003eBool",
        "package": "lvish",
        "partial": "",
        "signature": "a-\u003eISet Frzn a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:newEmptySet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty, monotonically growing set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#newEmptySet",
        "fct-type": "function",
        "title": "newEmptySet"
      },
      "index": {
        "description": "Create new empty monotonically growing set",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "newEmptySet",
        "normalized": "",
        "package": "lvish",
        "partial": "Empty Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:newFromList",
      "description": {
        "fct-descr": "\u003cp\u003eA simple convenience function.   Create a new \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e drawing initial elements from an existing list.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "[a] -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#newFromList",
        "fct-type": "function",
        "title": "newFromList"
      },
      "index": {
        "description": "simple convenience function Create new ISet drawing initial elements from an existing list",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "newFromList",
        "normalized": "[a]-\u003ePar b c(ISet c a)",
        "package": "lvish",
        "partial": "From List",
        "signature": "[a]-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:newSet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e populated with initial elements.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Set a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#newSet",
        "fct-type": "function",
        "title": "newSet"
      },
      "index": {
        "description": "Create new ISet populated with initial elements",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "newSet",
        "normalized": "Set a-\u003ePar b c(ISet c a)",
        "package": "lvish",
        "partial": "Set",
        "signature": "Set a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:traverseSet",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a monotonic map between the input and output sets.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "(a -\u003e Par d s b) -\u003e ISet s a -\u003e Par d s (ISet s b)",
        "fct-source": "src/Data-LVar-SLSet.html#traverseSet",
        "fct-type": "function",
        "title": "traverseSet"
      },
      "index": {
        "description": "Establish monotonic map between the input and output sets",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "traverseSet",
        "normalized": "(a-\u003ePar b c d)-\u003eISet c a-\u003ePar b c(ISet c d)",
        "package": "lvish",
        "partial": "Set",
        "signature": "(a-\u003ePar d s b)-\u003eISet s a-\u003ePar d s(ISet s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:traverseSetHP",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseSet\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s b) -\u003e ISet s a -\u003e Par d s (ISet s b)",
        "fct-source": "src/Data-LVar-SLSet.html#traverseSetHP",
        "fct-type": "function",
        "title": "traverseSetHP"
      },
      "index": {
        "description": "Variant of traverseSet that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "traverseSetHP",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c d)-\u003eISet c a-\u003ePar b c(ISet c d)",
        "package": "lvish",
        "partial": "Set HP",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s b)-\u003eISet s a-\u003ePar d s(ISet s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:traverseSetHP_",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etraverseSet_\u003c/a\u003e\u003c/code\u003e that optionally ties the handlers to a pool.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Maybe HandlerPool -\u003e (a -\u003e Par d s b) -\u003e ISet s a -\u003e ISet s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#traverseSetHP_",
        "fct-type": "function",
        "title": "traverseSetHP_"
      },
      "index": {
        "description": "Variant of traverseSet that optionally ties the handlers to pool",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "traverseSetHP_",
        "normalized": "Maybe HandlerPool-\u003e(a-\u003ePar b c d)-\u003eISet c a-\u003eISet c d-\u003ePar b c()",
        "package": "lvish",
        "partial": "Set HP",
        "signature": "Maybe HandlerPool-\u003e(a-\u003ePar d s b)-\u003eISet s a-\u003eISet s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:traverseSet_",
      "description": {
        "fct-descr": "\u003cp\u003eAn imperative-style, in-place version of \u003ccode\u003e\u003ca\u003etraverseSet\u003c/a\u003e\u003c/code\u003e that takes the output set\n as an argument.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "(a -\u003e Par d s b) -\u003e ISet s a -\u003e ISet s b -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#traverseSet_",
        "fct-type": "function",
        "title": "traverseSet_"
      },
      "index": {
        "description": "An imperative-style in-place version of traverseSet that takes the output set as an argument",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "traverseSet_",
        "normalized": "(a-\u003ePar b c d)-\u003eISet c a-\u003eISet c d-\u003ePar b c()",
        "package": "lvish",
        "partial": "Set",
        "signature": "(a-\u003ePar d s b)-\u003eISet s a-\u003eISet s b-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a new set which will (ultimately) contain everything in either input set.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e ISet s a -\u003e Par d s (ISet s a)",
        "fct-source": "src/Data-LVar-SLSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return new set which will ultimately contain everything in either input set",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "union",
        "normalized": "ISet a b-\u003eISet a b-\u003ePar c a(ISet a b)",
        "package": "lvish",
        "partial": "",
        "signature": "ISet s a-\u003eISet s a-\u003ePar d s(ISet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:waitElem",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the set to contain a specified element.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "a -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#waitElem",
        "fct-type": "function",
        "title": "waitElem"
      },
      "index": {
        "description": "Wait for the set to contain specified element",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "waitElem",
        "normalized": "a-\u003eISet b a-\u003ePar c b()",
        "package": "lvish",
        "partial": "Elem",
        "signature": "a-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:waitSize",
      "description": {
        "fct-descr": "\u003cp\u003eWait on the \u003cem\u003esize\u003c/em\u003e of the set, not its contents.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "Int -\u003e ISet s a -\u003e Par d s ()",
        "fct-source": "src/Data-LVar-SLSet.html#waitSize",
        "fct-type": "function",
        "title": "waitSize"
      },
      "index": {
        "description": "Wait on the size of the set not its contents",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "waitSize",
        "normalized": "Int-\u003eISet a b-\u003ePar c a()",
        "package": "lvish",
        "partial": "Size",
        "signature": "Int-\u003eISet s a-\u003ePar d s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lvish/docs/Data-LVar-SLSet.html#v:withCallbacksThenFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a per-element callback, then run an action in this context, and freeze\n when all (recursive) invocations of the callback are complete.  Returns the final\n value of the provided action.\n\u003c/p\u003e",
        "fct-module": "Data.LVar.SLSet",
        "fct-package": "lvish",
        "fct-signature": "ISet s a -\u003e (a -\u003e QPar s ()) -\u003e QPar s b -\u003e QPar s b",
        "fct-source": "src/Data-LVar-SLSet.html#withCallbacksThenFreeze",
        "fct-type": "function",
        "title": "withCallbacksThenFreeze"
      },
      "index": {
        "description": "Register per-element callback then run an action in this context and freeze when all recursive invocations of the callback are complete Returns the final value of the provided action",
        "hierarchy": "Data LVar SLSet",
        "module": "Data.LVar.SLSet",
        "name": "withCallbacksThenFreeze",
        "normalized": "ISet a b-\u003e(b-\u003eQPar a())-\u003eQPar a c-\u003eQPar a c",
        "package": "lvish",
        "partial": "Callbacks Then Freeze",
        "signature": "ISet s a-\u003e(a-\u003eQPar s())-\u003eQPar s b-\u003eQPar s b"
      }
    }
  }
]