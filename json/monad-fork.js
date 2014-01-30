[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-fork/docs/Control-Monad-Fork-Class.html#",
      "description": {
        "fct-module": "Control.Monad.Fork.Class",
        "fct-package": "monad-fork",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Fork-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Fork Class",
        "module": "Control.Monad.Fork.Class",
        "name": "Class",
        "normalized": "",
        "package": "monad-fork",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-fork/docs/Control-Monad-Fork-Class.html#t:MonadFork",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e type class, for monads which support a fork operation.\n\u003c/p\u003e\u003cp\u003eThe instance for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is simply \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, while several very overlapping\n instances are provided for composite monads, using the monad-control\n package.\n\u003c/p\u003e\u003cp\u003eAn example of a monad which has a \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e instance that is not simply\n a lifted form of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003eResourceT\u003c/code\u003e monad from the conduit\n package, which defines the operation \u003ccode\u003eresourceForkIO\u003c/code\u003e. The instances\n defined here, using the OverlappingInstances extension, will correctly\n handle the case of monads transformed on top of \u003ccode\u003eResourceT\u003c/code\u003e (assuming a\n definition exists for \u003ccode\u003eResourceT\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Fork.Class",
        "fct-package": "monad-fork",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Fork-Class.html#MonadFork",
        "fct-type": "class",
        "title": "MonadFork"
      },
      "index": {
        "description": "The MonadFork type class for monads which support fork operation The instance for IO is simply forkIO while several very overlapping instances are provided for composite monads using the monad-control package An example of monad which has MonadFork instance that is not simply lifted form of forkIO is the ResourceT monad from the conduit package which defines the operation resourceForkIO The instances defined here using the OverlappingInstances extension will correctly handle the case of monads transformed on top of ResourceT assuming definition exists for ResourceT",
        "hierarchy": "Control Monad Fork Class",
        "module": "Control.Monad.Fork.Class",
        "name": "MonadFork",
        "normalized": "",
        "package": "monad-fork",
        "partial": "Monad Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-fork/docs/Control-Monad-Fork-Class.html#v:fork",
      "description": {
        "fct-module": "Control.Monad.Fork.Class",
        "fct-package": "monad-fork",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Monad-Fork-Class.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Fork Class",
        "module": "Control.Monad.Fork.Class",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "monad-fork",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  }
]