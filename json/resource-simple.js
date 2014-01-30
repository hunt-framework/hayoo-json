[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllocate resources which are guaranteed to be released.\n\u003c/p\u003e\u003cp\u003eOne point to note: all register cleanup actions live in IO, not the main\nmonad. This allows both more efficient code, and for monads to be transformed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resource.html",
        "fct-type": "module",
        "title": "Resource"
      },
      "index": {
        "description": "Allocate resources which are guaranteed to be released One point to note all register cleanup actions live in IO not the main monad This allows both more efficient code and for monads to be transformed",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "resource-simple",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#t:MonadResource",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e type class. This provides the \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e functions, which are the main functionality of this package. The\n main instance of this class is \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe others instances are overlapping instances (in the spirit of\n \u003ccode\u003emtl-evil-instances\u003c/code\u003e), which provide automatic pass-through instances for\n \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e for every monad transformer. This means that you don't have\n to provide a pass-through instance of \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e for every monad\n transformer you write.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Resource.html#MonadResource",
        "fct-type": "class",
        "title": "MonadResource"
      },
      "index": {
        "description": "The MonadResource type class This provides the with register and release functions which are the main functionality of this package The main instance of this class is ResourceT The others instances are overlapping instances in the spirit of mtl-evil-instances which provide automatic pass-through instances for MonadResource for every monad transformer This means that you don have to provide pass-through instance of MonadResource for every monad transformer you write",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "MonadResource",
        "normalized": "",
        "package": "resource-simple",
        "partial": "Monad Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#t:ReleaseKey",
      "description": {
        "fct-descr": "\u003cp\u003eA lookup key for a specific release action. This value is returned by\n \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e and is passed to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resource.html#ReleaseKey",
        "fct-type": "data",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "lookup key for specific release action This value is returned by register and with and is passed to release",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "resource-simple",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#t:ResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eThe Resource transformer. This transformer keeps track of all registered\n actions, and calls them upon exit (via \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e). Actions may be\n registered via \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e, or resources may be allocated atomically via\n \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function corresponds closely to \u003ccode\u003ebracket\u003c/code\u003e. These\n functions are provided by 'ResourceT'\\'s \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eReleasing may be performed before exit via the \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e function. This is\n a highly recommended optimization, as it will ensure that scarce resources\n are freed early. Note that calling \u003ccode\u003erelease\u003c/code\u003e will deregister the action, so\n that a release action will only ever be called once.\n\u003c/p\u003e\u003cp\u003ePass-through instances for the \u003ccode\u003emtl\u003c/code\u003e type classes are provided\n automatically by the \u003ccode\u003emtl-evil-instances\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resource.html#ResourceT",
        "fct-type": "data",
        "title": "ResourceT"
      },
      "index": {
        "description": "The Resource transformer This transformer keeps track of all registered actions and calls them upon exit via runResourceT Actions may be registered via register or resources may be allocated atomically via with The with function corresponds closely to bracket These functions are provided by ResourceT MonadResource instance Releasing may be performed before exit via the release function This is highly recommended optimization as it will ensure that scarce resources are freed early Note that calling release will deregister the action so that release action will only ever be called once Pass-through instances for the mtl type classes are provided automatically by the mtl-evil-instances package",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "ResourceT",
        "normalized": "",
        "package": "resource-simple",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#v:mapResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the monad a \u003ccode\u003eResourceT\u003c/code\u003e lives in. This is most often used to\n strip or add new transformers to a stack, e.g. to run a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "(m a -\u003e n b) -\u003e ResourceT m a -\u003e ResourceT n b",
        "fct-source": "src/Control-Monad-Resource.html#mapResourceT",
        "fct-type": "function",
        "title": "mapResourceT"
      },
      "index": {
        "description": "Transform the monad ResourceT lives in This is most often used to strip or add new transformers to stack e.g to run ReaderT",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "mapResourceT",
        "normalized": "(a b-\u003ec d)-\u003eResourceT a b-\u003eResourceT c d",
        "package": "resource-simple",
        "partial": "Resource",
        "signature": "(m a-\u003en b)-\u003eResourceT m a-\u003eResourceT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister some action that will be run precisely once, either when\n \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e is called, or when the \u003ccode\u003e\u003ca\u003eReleaseKey\u003c/a\u003e\u003c/code\u003e is passed to\n \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "IO () -\u003e m ReleaseKey",
        "fct-source": "src/Control-Monad-Resource.html#register",
        "fct-type": "method",
        "title": "register"
      },
      "index": {
        "description": "Register some action that will be run precisely once either when runResourceT is called or when the ReleaseKey is passed to release",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "register",
        "normalized": "IO()-\u003ea ReleaseKey",
        "package": "resource-simple",
        "partial": "",
        "signature": "IO()-\u003em ReleaseKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003eCall a release action early, and deregister it from the list of\n cleanup actions to be performed.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "ReleaseKey -\u003e m ()",
        "fct-source": "src/Control-Monad-Resource.html#release",
        "fct-type": "method",
        "title": "release"
      },
      "index": {
        "description": "Call release action early and deregister it from the list of cleanup actions to be performed",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "release",
        "normalized": "ReleaseKey-\u003ea()",
        "package": "resource-simple",
        "partial": "",
        "signature": "ReleaseKey-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#v:runResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e transformer, and call all registered release\n actions.\n\u003c/p\u003e\u003cp\u003eNote that there is some reference counting involved due to the\n implementation of \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e used in the \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e instance. If multiple\n threads are sharing the same collection of resources, only the last call\n to \u003ccode\u003erunResourceT\u003c/code\u003e will deallocate the resources.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "ResourceT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Resource.html#runResourceT",
        "fct-type": "function",
        "title": "runResourceT"
      },
      "index": {
        "description": "Unwrap ResourceT transformer and call all registered release actions Note that there is some reference counting involved due to the implementation of fork used in the MonadFork instance If multiple threads are sharing the same collection of resources only the last call to runResourceT will deallocate the resources",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "runResourceT",
        "normalized": "ResourceT a b-\u003ea b",
        "package": "resource-simple",
        "partial": "Resource",
        "signature": "ResourceT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-simple/docs/Control-Monad-Resource.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some allocation, and automatically register a cleanup action.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resource",
        "fct-package": "resource-simple",
        "fct-signature": "IO a -\u003e (a -\u003e IO ()) -\u003e m (ReleaseKey, a)",
        "fct-source": "src/Control-Monad-Resource.html#with",
        "fct-type": "method",
        "title": "with"
      },
      "index": {
        "description": "Perform some allocation and automatically register cleanup action",
        "hierarchy": "Control Monad Resource",
        "module": "Control.Monad.Resource",
        "name": "with",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eb(ReleaseKey,a)",
        "package": "resource-simple",
        "partial": "",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003em(ReleaseKey,a)"
      }
    }
  }
]