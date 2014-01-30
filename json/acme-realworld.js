[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitives for manipulating the state of the universe.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "module",
        "fct-source": "src/Acme-RealWorld.html",
        "fct-type": "module",
        "title": "RealWorld"
      },
      "index": {
        "description": "Primitives for manipulating the state of the universe",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "RealWorld",
        "normalized": "",
        "package": "acme-realworld",
        "partial": "Real World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#t:RealWorld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RealWorld"
      },
      "index": {
        "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "RealWorld",
        "normalized": "",
        "package": "acme-realworld",
        "partial": "Real World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#v:execIO",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an action, construct a function that, given a state of the universe,\n returns the state of the universe after the action has occurred.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003emain = do\n    let f = execIO $ putStrLn \"Second\"\n        g = execIO $ putStrLn \"First\"\n        getWorld \u003e\u003e= putWorld . f . g\n\u003c/pre\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "IO a -\u003e RealWorld -\u003e RealWorld",
        "fct-source": "src/Acme-RealWorld.html#execIO",
        "fct-type": "function",
        "title": "execIO"
      },
      "index": {
        "description": "Given an action construct function that given state of the universe returns the state of the universe after the action has occurred Example main do let execIO putStrLn Second execIO putStrLn First getWorld putWorld",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "execIO",
        "normalized": "IO a-\u003eRealWorld-\u003eRealWorld",
        "package": "acme-realworld",
        "partial": "IO",
        "signature": "IO a-\u003eRealWorld-\u003eRealWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#v:getWorld",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current state of the universe.\n\u003c/p\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "IO RealWorld",
        "fct-source": "src/Acme-RealWorld.html#getWorld",
        "fct-type": "function",
        "title": "getWorld"
      },
      "index": {
        "description": "Retrieve the current state of the universe",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "getWorld",
        "normalized": "",
        "package": "acme-realworld",
        "partial": "World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#v:hypothetically",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action and return its value, but undo any side effects to the\n universe.  Thus, it appears to return instantly, regardless of how long the\n action would take to run.\n\u003c/p\u003e\u003cp\u003eThe caller must ensure that the program \u003cem\u003ewould\u003c/em\u003e have enough time to perform\n the computation.  Otherwise, either an exception will be thrown, or the\n operation will block because it never gets a chance to restore the original\n state of the universe.\n\u003c/p\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Acme-RealWorld.html#hypothetically",
        "fct-type": "function",
        "title": "hypothetically"
      },
      "index": {
        "description": "Perform an action and return its value but undo any side effects to the universe Thus it appears to return instantly regardless of how long the action would take to run The caller must ensure that the program would have enough time to perform the computation Otherwise either an exception will be thrown or the operation will block because it never gets chance to restore the original state of the universe",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "hypothetically",
        "normalized": "IO a-\u003eIO a",
        "package": "acme-realworld",
        "partial": "",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-realworld/docs/Acme-RealWorld.html#v:putWorld",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current state of the universe.  Program values are not affected by\n this operation, but the rest of the universe is.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eputWorld\u003c/a\u003e\u003c/code\u003e may not be called on the same state twice (this is enforced by\n the runtime system).  Otherwise, it would be possible to trap the universe\n in a temporal loop:\n\u003c/p\u003e\u003cpre\u003egetWorld \u003e\u003e= forever . putWorld\n\u003c/pre\u003e",
        "fct-module": "Acme.RealWorld",
        "fct-package": "acme-realworld",
        "fct-signature": "RealWorld -\u003e IO ()",
        "fct-source": "src/Acme-RealWorld.html#putWorld",
        "fct-type": "function",
        "title": "putWorld"
      },
      "index": {
        "description": "Set the current state of the universe Program values are not affected by this operation but the rest of the universe is putWorld may not be called on the same state twice this is enforced by the runtime system Otherwise it would be possible to trap the universe in temporal loop getWorld forever putWorld",
        "hierarchy": "Acme RealWorld",
        "module": "Acme.RealWorld",
        "name": "putWorld",
        "normalized": "RealWorld-\u003eIO()",
        "package": "acme-realworld",
        "partial": "World",
        "signature": "RealWorld-\u003eIO()"
      }
    }
  }
]