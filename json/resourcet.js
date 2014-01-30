[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "resourcet",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:Allocated",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#Allocated",
        "fct-type": "data",
        "title": "Allocated"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "Allocated",
        "normalized": "",
        "package": "resourcet",
        "partial": "Allocated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:ExceptionT",
      "description": {
        "fct-descr": "\u003cp\u003eThe express purpose of this transformer is to allow non-\u003ccode\u003eIO\u003c/code\u003e-based monad\n stacks to catch exceptions via the \u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "newtype",
        "title": "ExceptionT"
      },
      "index": {
        "description": "The express purpose of this transformer is to allow non IO based monad stacks to catch exceptions via the MonadThrow typeclass Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:InvalidAccess",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates either an error in the library, or misuse of it (e.g., a\n \u003ccode\u003eResourceT\u003c/code\u003e's state is accessed after being released).\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "data",
        "title": "InvalidAccess"
      },
      "index": {
        "description": "Indicates either an error in the library or misuse of it e.g ResourceT state is accessed after being released Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "InvalidAccess",
        "normalized": "",
        "package": "resourcet",
        "partial": "Invalid Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:MonadResource",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which allows for safe resource allocation. In theory, any monad\n transformer stack included a \u003ccode\u003eResourceT\u003c/code\u003e can be an instance of\n \u003ccode\u003eMonadResource\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003erunResourceT\u003c/code\u003e has a requirement for a \u003ccode\u003eMonadBaseControl IO m\u003c/code\u003e monad,\n which allows control operations to be lifted. A \u003ccode\u003eMonadResource\u003c/code\u003e does not\n have this requirement. This means that transformers such as \u003ccode\u003eContT\u003c/code\u003e can be\n an instance of \u003ccode\u003eMonadResource\u003c/code\u003e. However, the \u003ccode\u003eContT\u003c/code\u003e wrapper will need to be\n unwrapped before calling \u003ccode\u003erunResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadResource",
        "fct-type": "class",
        "title": "MonadResource"
      },
      "index": {
        "description": "Monad which allows for safe resource allocation In theory any monad transformer stack included ResourceT can be an instance of MonadResource Note runResourceT has requirement for MonadBaseControl IO monad which allows control operations to be lifted MonadResource does not have this requirement This means that transformers such as ContT can be an instance of MonadResource However the ContT wrapper will need to be unwrapped before calling runResourceT Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "MonadResource",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can throw exceptions. Note that this does not work in a\n vanilla \u003ccode\u003eST\u003c/code\u003e or \u003ccode\u003eIdentity\u003c/code\u003e monad. Instead, you should use the \u003ccode\u003e\u003ca\u003eExceptionT\u003c/a\u003e\u003c/code\u003e\n transformer in your stack if you are dealing with a non-\u003ccode\u003eIO\u003c/code\u003e base monad.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadThrow",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "Monad which can throw exceptions Note that this does not work in vanilla ST or Identity monad Instead you should use the ExceptionT transformer in your stack if you are dealing with non IO base monad Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "MonadThrow",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:MonadUnsafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e based on some monad which allows running of some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions,\n via unsafe calls. This applies to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e, for instance.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadUnsafeIO",
        "fct-type": "class",
        "title": "MonadUnsafeIO"
      },
      "index": {
        "description": "Monad based on some monad which allows running of some IO actions via unsafe calls This applies to IO and ST for instance Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "MonadUnsafeIO",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:ReleaseKey",
      "description": {
        "fct-descr": "\u003cp\u003eA lookup key for a specific release action. This value is returned by\n \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eallocate\u003c/code\u003e, and is passed to \u003ccode\u003erelease\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseKey",
        "fct-type": "data",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "lookup key for specific release action This value is returned by register and allocate and is passed to release Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "resourcet",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:ReleaseMap",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseMap",
        "fct-type": "data",
        "title": "ReleaseMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ReleaseMap",
        "normalized": "",
        "package": "resourcet",
        "partial": "Release Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:ResIO",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient alias for \u003ccode\u003eResourceT IO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResIO",
        "fct-type": "type",
        "title": "ResIO"
      },
      "index": {
        "description": "Convenient alias for ResourceT IO",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ResIO",
        "normalized": "",
        "package": "resourcet",
        "partial": "Res IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:Resource",
      "description": {
        "fct-descr": "\u003cp\u003eA method for allocating a scarce resource, providing the means of freeing\n it when no longer needed. This data type provides\n \u003ccode\u003eFunctor\u003c/code\u003e\u003cem\u003e@Applicative@\u003c/em\u003e\u003ccode\u003eMonad\u003c/code\u003e instances for composing different resources\n together. You can allocate these resources using either the \u003ccode\u003ebracket\u003c/code\u003e\n pattern (via \u003ccode\u003ewith\u003c/code\u003e) or using \u003ccode\u003eResourceT\u003c/code\u003e (via \u003ccode\u003eallocateResource\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis concept was originally introduced by Gabriel Gonzalez and described at:\n \u003ca\u003ehttp://www.haskellforall.com/2013/06/the-resource-applicative.html\u003c/a\u003e. The\n implementation in this package is slightly different, due to taking a\n different approach to async exception safety.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#Resource",
        "fct-type": "newtype",
        "title": "Resource"
      },
      "index": {
        "description": "method for allocating scarce resource providing the means of freeing it when no longer needed This data type provides Functor Applicative Monad instances for composing different resources together You can allocate these resources using either the bracket pattern via with or using ResourceT via allocateResource This concept was originally introduced by Gabriel Gonzalez and described at http www.haskellforall.com the-resource-applicative.html The implementation in this package is slightly different due to taking different approach to async exception safety Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "Resource",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#t:ResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eThe Resource transformer. This transformer keeps track of all registered\n actions, and calls them upon exit (via \u003ccode\u003erunResourceT\u003c/code\u003e). Actions may be\n registered via \u003ccode\u003eregister\u003c/code\u003e, or resources may be allocated atomically via\n \u003ccode\u003eallocate\u003c/code\u003e. \u003ccode\u003eallocate\u003c/code\u003e corresponds closely to \u003ccode\u003ebracket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReleasing may be performed before exit via the \u003ccode\u003erelease\u003c/code\u003e function. This is a\n highly recommended optimization, as it will ensure that scarce resources are\n freed early. Note that calling \u003ccode\u003erelease\u003c/code\u003e will deregister the action, so that\n a release action will only ever be called once.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResourceT",
        "fct-type": "newtype",
        "title": "ResourceT"
      },
      "index": {
        "description": "The Resource transformer This transformer keeps track of all registered actions and calls them upon exit via runResourceT Actions may be registered via register or resources may be allocated atomically via allocate allocate corresponds closely to bracket Releasing may be performed before exit via the release function This is highly recommended optimization as it will ensure that scarce resources are freed early Note that calling release will deregister the action so that release action will only ever be called once Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ResourceT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:Allocated",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "Allocated !a !(IO ())",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#Allocated",
        "fct-type": "function",
        "title": "Allocated"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "Allocated",
        "normalized": "Allocated a(IO())",
        "package": "resourcet",
        "partial": "Allocated",
        "signature": "Allocated a(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:ExceptionT",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ExceptionT",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "function",
        "title": "ExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:InvalidAccess",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "InvalidAccess",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "function",
        "title": "InvalidAccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "InvalidAccess",
        "normalized": "",
        "package": "resourcet",
        "partial": "Invalid Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:ReleaseKey",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ReleaseKey !(IORef ReleaseMap) !Int",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseKey",
        "fct-type": "function",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "resourcet",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:ReleaseMap",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ReleaseMap !NextKey !RefCount !(IntMap (IO ()))",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseMap",
        "fct-type": "function",
        "title": "ReleaseMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ReleaseMap",
        "normalized": "ReleaseMap NextKey RefCount(IntMap(IO()))",
        "package": "resourcet",
        "partial": "Release Map",
        "signature": "ReleaseMap NextKey RefCount(IntMap(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:ReleaseMapClosed",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ReleaseMapClosed",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseMap",
        "fct-type": "function",
        "title": "ReleaseMapClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ReleaseMapClosed",
        "normalized": "",
        "package": "resourcet",
        "partial": "Release Map Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:Resource",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "Resource ((forall b.  IO b -\u003e IO b) -\u003e IO (Allocated a))",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#Resource",
        "fct-type": "function",
        "title": "Resource"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "Resource",
        "normalized": "Resource((a b IO c-\u003eIO c)-\u003eIO(Allocated d))",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "Resource((forall b. IO b-\u003eIO b)-\u003eIO(Allocated a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:ResourceT",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResourceT",
        "fct-type": "function",
        "title": "ResourceT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "ResourceT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:functionName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "String",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "function",
        "title": "functionName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "functionName",
        "normalized": "",
        "package": "resourcet",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:liftResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003eResourceT IO\u003c/code\u003e action into the current \u003ccode\u003eMonad\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT IO a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#liftResourceT",
        "fct-type": "method",
        "title": "liftResourceT"
      },
      "index": {
        "description": "Lift ResourceT IO action into the current Monad Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "liftResourceT",
        "normalized": "ResourceT IO a-\u003eb a",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "ResourceT IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:mkResource",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003eResource\u003c/code\u003e value using the given allocate and free functions.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "IO a-\u003e (a -\u003e IO ())-\u003e Resource a",
        "fct-type": "function",
        "title": "mkResource"
      },
      "index": {
        "description": "Create Resource value using the given allocate and free functions Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "mkResource",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eResource a",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003eResource a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:monadThrow",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#monadThrow",
        "fct-type": "method",
        "title": "monadThrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "monadThrow",
        "normalized": "a-\u003eb c",
        "package": "resourcet",
        "partial": "Throw",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:runExceptionT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "function",
        "title": "runExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "runExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:stateAlloc",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "IORef ReleaseMap -\u003e IO ()",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#stateAlloc",
        "fct-type": "function",
        "title": "stateAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "stateAlloc",
        "normalized": "IORef ReleaseMap-\u003eIO()",
        "package": "resourcet",
        "partial": "Alloc",
        "signature": "IORef ReleaseMap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:stateCleanup",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "IORef ReleaseMap -\u003e IO ()",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#stateCleanup",
        "fct-type": "function",
        "title": "stateCleanup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "stateCleanup",
        "normalized": "IORef ReleaseMap-\u003eIO()",
        "package": "resourcet",
        "partial": "Cleanup",
        "signature": "IORef ReleaseMap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:transResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the monad a \u003ccode\u003eResourceT\u003c/code\u003e lives in. This is most often used to\n strip or add new transformers to a stack, e.g. to run a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this function is a slight generalization of \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "(m a -\u003e n b) -\u003e ResourceT m a -\u003e ResourceT n b",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#transResourceT",
        "fct-type": "function",
        "title": "transResourceT"
      },
      "index": {
        "description": "Transform the monad ResourceT lives in This is most often used to strip or add new transformers to stack e.g to run ReaderT Note that this function is slight generalization of hoist Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "transResourceT",
        "normalized": "(a b-\u003ec d)-\u003eResourceT a b-\u003eResourceT c d",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "(m a-\u003en b)-\u003eResourceT m a-\u003eResourceT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:unResourceT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "IORef ReleaseMap -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResourceT",
        "fct-type": "function",
        "title": "unResourceT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "unResourceT",
        "normalized": "IORef ReleaseMap-\u003ea b",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "IORef ReleaseMap-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:unsafeLiftIO",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#unsafeLiftIO",
        "fct-type": "method",
        "title": "unsafeLiftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "unsafeLiftIO",
        "normalized": "IO a-\u003eb a",
        "package": "resourcet",
        "partial": "Lift IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource-Internal.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate the given resource and provide it to the provided function. The\n resource will be freed as soon as the inner block is exited, whether\n normally or via an exception. This function is similar in function to\n \u003ccode\u003ebracket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource.Internal",
        "fct-package": "resourcet",
        "fct-signature": "Resource a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "Allocate the given resource and provide it to the provided function The resource will be freed as soon as the inner block is exited whether normally or via an exception This function is similar in function to bracket Since",
        "hierarchy": "Control Monad Trans Resource Internal",
        "module": "Control.Monad.Trans.Resource.Internal",
        "name": "with",
        "normalized": "Resource a-\u003e(a-\u003eb c)-\u003eb c",
        "package": "resourcet",
        "partial": "",
        "signature": "Resource a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllocate resources which are guaranteed to be released.\n\u003c/p\u003e\u003cp\u003eFor more information, see \u003ca\u003ehttp://www.yesodweb.com/book/conduits\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOne point to note: all register cleanup actions live in the \u003ccode\u003eIO\u003c/code\u003e monad, not\n the main monad. This allows both more efficient code, and for monads to be\n transformed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Resource.html",
        "fct-type": "module",
        "title": "Resource"
      },
      "index": {
        "description": "Allocate resources which are guaranteed to be released For more information see http www.yesodweb.com book conduits One point to note all register cleanup actions live in the IO monad not the main monad This allows both more efficient code and for monads to be transformed",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:ExceptionT",
      "description": {
        "fct-descr": "\u003cp\u003eThe express purpose of this transformer is to allow non-\u003ccode\u003eIO\u003c/code\u003e-based monad\n stacks to catch exceptions via the \u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "newtype",
        "title": "ExceptionT"
      },
      "index": {
        "description": "The express purpose of this transformer is to allow non IO based monad stacks to catch exceptions via the MonadThrow typeclass Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "ExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:InternalState",
      "description": {
        "fct-descr": "\u003cp\u003eThe internal state held by a \u003ccode\u003eResourceT\u003c/code\u003e transformer.\n\u003c/p\u003e\u003cp\u003eSince 0.4.6\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Resource.html#InternalState",
        "fct-type": "type",
        "title": "InternalState"
      },
      "index": {
        "description": "The internal state held by ResourceT transformer Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "InternalState",
        "normalized": "",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:InvalidAccess",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates either an error in the library, or misuse of it (e.g., a\n \u003ccode\u003eResourceT\u003c/code\u003e's state is accessed after being released).\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "data",
        "title": "InvalidAccess"
      },
      "index": {
        "description": "Indicates either an error in the library or misuse of it e.g ResourceT state is accessed after being released Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "InvalidAccess",
        "normalized": "",
        "package": "resourcet",
        "partial": "Invalid Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadActive",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if some monad is still active. This is intended to prevent usage\n of a monadic state after it has been closed.  This is necessary for such\n cases as lazy I/O, where an unevaluated thunk may still refer to a\n closed \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource.html#MonadActive",
        "fct-type": "class",
        "title": "MonadActive"
      },
      "index": {
        "description": "Determine if some monad is still active This is intended to prevent usage of monadic state after it has been closed This is necessary for such cases as lazy where an unevaluated thunk may still refer to closed ResourceT Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadActive",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadBaseControl",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadBaseControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadBaseControl",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Base Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadResource",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which allows for safe resource allocation. In theory, any monad\n transformer stack included a \u003ccode\u003eResourceT\u003c/code\u003e can be an instance of\n \u003ccode\u003eMonadResource\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003erunResourceT\u003c/code\u003e has a requirement for a \u003ccode\u003eMonadBaseControl IO m\u003c/code\u003e monad,\n which allows control operations to be lifted. A \u003ccode\u003eMonadResource\u003c/code\u003e does not\n have this requirement. This means that transformers such as \u003ccode\u003eContT\u003c/code\u003e can be\n an instance of \u003ccode\u003eMonadResource\u003c/code\u003e. However, the \u003ccode\u003eContT\u003c/code\u003e wrapper will need to be\n unwrapped before calling \u003ccode\u003erunResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadResource",
        "fct-type": "class",
        "title": "MonadResource"
      },
      "index": {
        "description": "Monad which allows for safe resource allocation In theory any monad transformer stack included ResourceT can be an instance of MonadResource Note runResourceT has requirement for MonadBaseControl IO monad which allows control operations to be lifted MonadResource does not have this requirement This means that transformers such as ContT can be an instance of MonadResource However the ContT wrapper will need to be unwrapped before calling runResourceT Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadResource",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadResourceBase",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can be used as a base for a \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eResourceT\u003c/code\u003e has some restrictions on its base monad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003erunResourceT\u003c/code\u003e requires an instance of \u003ccode\u003eMonadBaseControl IO\u003c/code\u003e.\n * \u003ccode\u003eMonadResource\u003c/code\u003e requires an instance of \u003ccode\u003eMonadThrow\u003c/code\u003e, \u003ccode\u003eMonadUnsafeIO\u003c/code\u003e, \u003ccode\u003eMonadIO\u003c/code\u003e, and \u003ccode\u003eApplicative\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile any instance of \u003ccode\u003eMonadBaseControl IO\u003c/code\u003e should be an instance of the\n other classes, this is not guaranteed by the type system (e.g., you may have\n a transformer in your stack with does not implement \u003ccode\u003eMonadThrow\u003c/code\u003e). Ideally,\n we would like to simply create an alias for the five type classes listed,\n but this is not possible with GHC currently.\n\u003c/p\u003e\u003cp\u003eInstead, this typeclass acts as a proxy for the other five. Its only purpose\n is to make your type signatures shorter.\n\u003c/p\u003e\u003cp\u003eNote that earlier versions of \u003ccode\u003econduit\u003c/code\u003e had a typeclass \u003ccode\u003eResourceIO\u003c/code\u003e. This\n fulfills much the same role.\n\u003c/p\u003e\u003cp\u003eSince 0.3.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Resource.html#MonadResourceBase",
        "fct-type": "type",
        "title": "MonadResourceBase"
      },
      "index": {
        "description": "Monad which can be used as base for ResourceT ResourceT has some restrictions on its base monad runResourceT requires an instance of MonadBaseControl IO MonadResource requires an instance of MonadThrow MonadUnsafeIO MonadIO and Applicative While any instance of MonadBaseControl IO should be an instance of the other classes this is not guaranteed by the type system e.g you may have transformer in your stack with does not implement MonadThrow Ideally we would like to simply create an alias for the five type classes listed but this is not possible with GHC currently Instead this typeclass acts as proxy for the other five Its only purpose is to make your type signatures shorter Note that earlier versions of conduit had typeclass ResourceIO This fulfills much the same role Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadResourceBase",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Resource Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can throw exceptions. Note that this does not work in a\n vanilla \u003ccode\u003eST\u003c/code\u003e or \u003ccode\u003eIdentity\u003c/code\u003e monad. Instead, you should use the \u003ccode\u003e\u003ca\u003eExceptionT\u003c/a\u003e\u003c/code\u003e\n transformer in your stack if you are dealing with a non-\u003ccode\u003eIO\u003c/code\u003e base monad.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadThrow",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "Monad which can throw exceptions Note that this does not work in vanilla ST or Identity monad Instead you should use the ExceptionT transformer in your stack if you are dealing with non IO base monad Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadThrow",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:MonadUnsafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e based on some monad which allows running of some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions,\n via unsafe calls. This applies to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e, for instance.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#MonadUnsafeIO",
        "fct-type": "class",
        "title": "MonadUnsafeIO"
      },
      "index": {
        "description": "Monad based on some monad which allows running of some IO actions via unsafe calls This applies to IO and ST for instance Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "MonadUnsafeIO",
        "normalized": "",
        "package": "resourcet",
        "partial": "Monad Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:ReleaseKey",
      "description": {
        "fct-descr": "\u003cp\u003eA lookup key for a specific release action. This value is returned by\n \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eallocate\u003c/code\u003e, and is passed to \u003ccode\u003erelease\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ReleaseKey",
        "fct-type": "data",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "lookup key for specific release action This value is returned by register and allocate and is passed to release Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "resourcet",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:ResIO",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient alias for \u003ccode\u003eResourceT IO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResIO",
        "fct-type": "type",
        "title": "ResIO"
      },
      "index": {
        "description": "Convenient alias for ResourceT IO",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "ResIO",
        "normalized": "",
        "package": "resourcet",
        "partial": "Res IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:Resource",
      "description": {
        "fct-descr": "\u003cp\u003eA method for allocating a scarce resource, providing the means of freeing\n it when no longer needed. This data type provides\n \u003ccode\u003eFunctor\u003c/code\u003e\u003cem\u003e@Applicative@\u003c/em\u003e\u003ccode\u003eMonad\u003c/code\u003e instances for composing different resources\n together. You can allocate these resources using either the \u003ccode\u003ebracket\u003c/code\u003e\n pattern (via \u003ccode\u003ewith\u003c/code\u003e) or using \u003ccode\u003eResourceT\u003c/code\u003e (via \u003ccode\u003eallocateResource\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis concept was originally introduced by Gabriel Gonzalez and described at:\n \u003ca\u003ehttp://www.haskellforall.com/2013/06/the-resource-applicative.html\u003c/a\u003e. The\n implementation in this package is slightly different, due to taking a\n different approach to async exception safety.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#Resource",
        "fct-type": "data",
        "title": "Resource"
      },
      "index": {
        "description": "method for allocating scarce resource providing the means of freeing it when no longer needed This data type provides Functor Applicative Monad instances for composing different resources together You can allocate these resources using either the bracket pattern via with or using ResourceT via allocateResource This concept was originally introduced by Gabriel Gonzalez and described at http www.haskellforall.com the-resource-applicative.html The implementation in this package is slightly different due to taking different approach to async exception safety Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#t:ResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eThe Resource transformer. This transformer keeps track of all registered\n actions, and calls them upon exit (via \u003ccode\u003erunResourceT\u003c/code\u003e). Actions may be\n registered via \u003ccode\u003eregister\u003c/code\u003e, or resources may be allocated atomically via\n \u003ccode\u003eallocate\u003c/code\u003e. \u003ccode\u003eallocate\u003c/code\u003e corresponds closely to \u003ccode\u003ebracket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReleasing may be performed before exit via the \u003ccode\u003erelease\u003c/code\u003e function. This is a\n highly recommended optimization, as it will ensure that scarce resources are\n freed early. Note that calling \u003ccode\u003erelease\u003c/code\u003e will deregister the action, so that\n a release action will only ever be called once.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ResourceT",
        "fct-type": "data",
        "title": "ResourceT"
      },
      "index": {
        "description": "The Resource transformer This transformer keeps track of all registered actions and calls them upon exit via runResourceT Actions may be registered via register or resources may be allocated atomically via allocate allocate corresponds closely to bracket Releasing may be performed before exit via the release function This is highly recommended optimization as it will ensure that scarce resources are freed early Note that calling release will deregister the action so that release action will only ever be called once Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "ResourceT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:ExceptionT",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ExceptionT",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "function",
        "title": "ExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "ExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:InvalidAccess",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "InvalidAccess",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "function",
        "title": "InvalidAccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "InvalidAccess",
        "normalized": "",
        "package": "resourcet",
        "partial": "Invalid Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:allocate",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some allocation, and automatically register a cleanup action.\n\u003c/p\u003e\u003cp\u003eThis is almost identical to calling the allocation and then\n \u003ccode\u003eregister\u003c/code\u003eing the release action, but this properly handles masking of\n asynchronous exceptions.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "IO a-\u003e (a -\u003e IO ())-\u003e m (ReleaseKey, a)",
        "fct-type": "function",
        "title": "allocate"
      },
      "index": {
        "description": "Perform some allocation and automatically register cleanup action This is almost identical to calling the allocation and then register ing the release action but this properly handles masking of asynchronous exceptions Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "allocate",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eb(ReleaseKey,a)",
        "package": "resourcet",
        "partial": "",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003em(ReleaseKey,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:allocateResource",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a resource and register an action with the \u003ccode\u003eMonadResource\u003c/code\u003e to\n free the resource.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "Resource a -\u003e m (ReleaseKey, a)",
        "fct-source": "src/Control-Monad-Trans-Resource.html#allocateResource",
        "fct-type": "function",
        "title": "allocateResource"
      },
      "index": {
        "description": "Allocate resource and register an action with the MonadResource to free the resource Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "allocateResource",
        "normalized": "Resource a-\u003eb(ReleaseKey,a)",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "Resource a-\u003em(ReleaseKey,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:closeInternalState",
      "description": {
        "fct-descr": "\u003cp\u003eClose an internal state created by \u003ccode\u003ecreateInternalState\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.9\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "InternalState -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Resource.html#closeInternalState",
        "fct-type": "function",
        "title": "closeInternalState"
      },
      "index": {
        "description": "Close an internal state created by createInternalState Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "closeInternalState",
        "normalized": "InternalState-\u003ea()",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": "InternalState-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:createInternalState",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new internal state. This state must be closed with\n \u003ccode\u003ecloseInternalState\u003c/code\u003e. It is your responsibility to ensure exception safety.\n Caveat emptor!\n\u003c/p\u003e\u003cp\u003eSince 0.4.9\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "m InternalState",
        "fct-source": "src/Control-Monad-Trans-Resource.html#createInternalState",
        "fct-type": "function",
        "title": "createInternalState"
      },
      "index": {
        "description": "Create new internal state This state must be closed with closeInternalState It is your responsibility to ensure exception safety Caveat emptor Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "createInternalState",
        "normalized": "",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:functionName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "String",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#InvalidAccess",
        "fct-type": "function",
        "title": "functionName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "functionName",
        "normalized": "",
        "package": "resourcet",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:getInternalState",
      "description": {
        "fct-descr": "\u003cp\u003eGet the internal state of the current \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.6\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT m InternalState",
        "fct-source": "src/Control-Monad-Trans-Resource.html#getInternalState",
        "fct-type": "function",
        "title": "getInternalState"
      },
      "index": {
        "description": "Get the internal state of the current ResourceT Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "getInternalState",
        "normalized": "",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:joinResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eThis function mirrors \u003ccode\u003ejoin\u003c/code\u003e at the transformer level: it will collapse\n two levels of \u003ccode\u003eResourceT\u003c/code\u003e into a single \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.6\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT (ResourceT m) a -\u003e ResourceT m a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#joinResourceT",
        "fct-type": "function",
        "title": "joinResourceT"
      },
      "index": {
        "description": "This function mirrors join at the transformer level it will collapse two levels of ResourceT into single ResourceT Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "joinResourceT",
        "normalized": "ResourceT(ResourceT a)b-\u003eResourceT a b",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "ResourceT(ResourceT m)a-\u003eResourceT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:liftResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003eResourceT IO\u003c/code\u003e action into the current \u003ccode\u003eMonad\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT IO a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#liftResourceT",
        "fct-type": "method",
        "title": "liftResourceT"
      },
      "index": {
        "description": "Lift ResourceT IO action into the current Monad Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "liftResourceT",
        "normalized": "ResourceT IO a-\u003eb a",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "ResourceT IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:mkResource",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003eResource\u003c/code\u003e value using the given allocate and free functions.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "IO a-\u003e (a -\u003e IO ())-\u003e Resource a",
        "fct-type": "function",
        "title": "mkResource"
      },
      "index": {
        "description": "Create Resource value using the given allocate and free functions Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "mkResource",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eResource a",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003eResource a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:monadActive",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "m Bool",
        "fct-source": "src/Control-Monad-Trans-Resource.html#monadActive",
        "fct-type": "method",
        "title": "monadActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "monadActive",
        "normalized": "",
        "package": "resourcet",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:monadThrow",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#monadThrow",
        "fct-type": "method",
        "title": "monadThrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "monadThrow",
        "normalized": "a-\u003eb c",
        "package": "resourcet",
        "partial": "Throw",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister some action that will be called precisely once, either when\n \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e is called, or when the \u003ccode\u003e\u003ca\u003eReleaseKey\u003c/a\u003e\u003c/code\u003e is passed to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "IO () -\u003e m ReleaseKey",
        "fct-source": "src/Control-Monad-Trans-Resource.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Register some action that will be called precisely once either when runResourceT is called or when the ReleaseKey is passed to release Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "register",
        "normalized": "IO()-\u003ea ReleaseKey",
        "package": "resourcet",
        "partial": "",
        "signature": "IO()-\u003em ReleaseKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003eCall a release action early, and deregister it from the list of cleanup\n actions to be performed.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ReleaseKey -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Resource.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "Call release action early and deregister it from the list of cleanup actions to be performed Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "release",
        "normalized": "ReleaseKey-\u003ea()",
        "package": "resourcet",
        "partial": "",
        "signature": "ReleaseKey-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:resourceForkIO",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce a reference-counting scheme to allow a resource context to be\n shared by multiple threads. Once the last thread exits, all remaining\n resources will be released.\n\u003c/p\u003e\u003cp\u003eNote that abuse of this function will greatly delay the deallocation of\n registered resources. This function should be used with care. A general\n guideline:\n\u003c/p\u003e\u003cp\u003eIf you are allocating a resource that should be shared by multiple threads,\n and will be held for a long time, you should allocate it at the beginning of\n a new \u003ccode\u003eResourceT\u003c/code\u003e block and then call \u003ccode\u003eresourceForkIO\u003c/code\u003e from there.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT m () -\u003e ResourceT m ThreadId",
        "fct-source": "src/Control-Monad-Trans-Resource.html#resourceForkIO",
        "fct-type": "function",
        "title": "resourceForkIO"
      },
      "index": {
        "description": "Introduce reference-counting scheme to allow resource context to be shared by multiple threads Once the last thread exits all remaining resources will be released Note that abuse of this function will greatly delay the deallocation of registered resources This function should be used with care general guideline If you are allocating resource that should be shared by multiple threads and will be held for long time you should allocate it at the beginning of new ResourceT block and then call resourceForkIO from there Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "resourceForkIO",
        "normalized": "ResourceT a()-\u003eResourceT a ThreadId",
        "package": "resourcet",
        "partial": "Fork IO",
        "signature": "ResourceT m()-\u003eResourceT m ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:resourceMask",
      "description": {
        "fct-descr": "\u003cp\u003ePerform asynchronous exception masking.\n\u003c/p\u003e\u003cp\u003eThis is more general then \u003ccode\u003eControl.Exception.mask\u003c/code\u003e, yet more efficient\n than \u003ccode\u003eControl.Exception.Lifted.mask\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "((forall a.  ResourceT IO a -\u003e ResourceT IO a) -\u003e ResourceT IO b) -\u003e m b",
        "fct-source": "src/Control-Monad-Trans-Resource.html#resourceMask",
        "fct-type": "function",
        "title": "resourceMask"
      },
      "index": {
        "description": "Perform asynchronous exception masking This is more general then Control.Exception.mask yet more efficient than Control.Exception.Lifted.mask Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "resourceMask",
        "normalized": "((a b ResourceT IO c-\u003eResourceT IO c)-\u003eResourceT IO d)-\u003ee d",
        "package": "resourcet",
        "partial": "Mask",
        "signature": "((forall a. ResourceT IO a-\u003eResourceT IO a)-\u003eResourceT IO b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runException",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003eExceptionT Identity\u003c/code\u003e stack.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ExceptionT Identity a -\u003e Either SomeException a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#runException",
        "fct-type": "function",
        "title": "runException"
      },
      "index": {
        "description": "Run an ExceptionT Identity stack Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runException",
        "normalized": "ExceptionT Identity a-\u003eEither SomeException a",
        "package": "resourcet",
        "partial": "Exception",
        "signature": "ExceptionT Identity a-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runExceptionT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#ExceptionT",
        "fct-type": "function",
        "title": "runExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runExceptionT",
        "normalized": "",
        "package": "resourcet",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runExceptionT_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunExceptionT\u003c/a\u003e\u003c/code\u003e, but immediately \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e any exception returned.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ExceptionT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#runExceptionT_",
        "fct-type": "function",
        "title": "runExceptionT_"
      },
      "index": {
        "description": "Same as runExceptionT but immediately throw any exception returned Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runExceptionT_",
        "normalized": "ExceptionT a b-\u003ea b",
        "package": "resourcet",
        "partial": "Exception",
        "signature": "ExceptionT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runException_",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003eExceptionT Identity\u003c/code\u003e stack, but immediately \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e any exception returned.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ExceptionT Identity a -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#runException_",
        "fct-type": "function",
        "title": "runException_"
      },
      "index": {
        "description": "Run an ExceptionT Identity stack but immediately throw any exception returned Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runException_",
        "normalized": "ExceptionT Identity a-\u003ea",
        "package": "resourcet",
        "partial": "Exception",
        "signature": "ExceptionT Identity a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runInternalState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003eResourceT\u003c/code\u003e using the given \u003ccode\u003eInternalState\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.6\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT m a -\u003e InternalState -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#runInternalState",
        "fct-type": "function",
        "title": "runInternalState"
      },
      "index": {
        "description": "Unwrap ResourceT using the given InternalState Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runInternalState",
        "normalized": "ResourceT a b-\u003eInternalState-\u003ea b",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": "ResourceT m a-\u003eInternalState-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:runResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e transformer, and call all registered release actions.\n\u003c/p\u003e\u003cp\u003eNote that there is some reference counting involved due to \u003ccode\u003e\u003ca\u003eresourceForkIO\u003c/a\u003e\u003c/code\u003e.\n If multiple threads are sharing the same collection of resources, only the\n last call to \u003ccode\u003erunResourceT\u003c/code\u003e will deallocate the resources.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ResourceT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#runResourceT",
        "fct-type": "function",
        "title": "runResourceT"
      },
      "index": {
        "description": "Unwrap ResourceT transformer and call all registered release actions Note that there is some reference counting involved due to resourceForkIO If multiple threads are sharing the same collection of resources only the last call to runResourceT will deallocate the resources Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "runResourceT",
        "normalized": "ResourceT a b-\u003ea b",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "ResourceT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:transResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the monad a \u003ccode\u003eResourceT\u003c/code\u003e lives in. This is most often used to\n strip or add new transformers to a stack, e.g. to run a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this function is a slight generalization of \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "(m a -\u003e n b) -\u003e ResourceT m a -\u003e ResourceT n b",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#transResourceT",
        "fct-type": "function",
        "title": "transResourceT"
      },
      "index": {
        "description": "Transform the monad ResourceT lives in This is most often used to strip or add new transformers to stack e.g to run ReaderT Note that this function is slight generalization of hoist Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "transResourceT",
        "normalized": "(a b-\u003ec d)-\u003eResourceT a b-\u003eResourceT c d",
        "package": "resourcet",
        "partial": "Resource",
        "signature": "(m a-\u003en b)-\u003eResourceT m a-\u003eResourceT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:unprotect",
      "description": {
        "fct-descr": "\u003cp\u003eUnprotect resource from cleanup actions, this allowes you to send\n resource into another resourcet process and reregister it there.\n It returns an release action that should be run in order to clean \n resource or Nothing in case if resource is already freed.\n\u003c/p\u003e\u003cp\u003eSince 0.4.5\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "ReleaseKey -\u003e m (Maybe (IO ()))",
        "fct-source": "src/Control-Monad-Trans-Resource.html#unprotect",
        "fct-type": "function",
        "title": "unprotect"
      },
      "index": {
        "description": "Unprotect resource from cleanup actions this allowes you to send resource into another resourcet process and reregister it there It returns an release action that should be run in order to clean resource or Nothing in case if resource is already freed Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "unprotect",
        "normalized": "ReleaseKey-\u003ea(Maybe(IO()))",
        "package": "resourcet",
        "partial": "",
        "signature": "ReleaseKey-\u003em(Maybe(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:unsafeLiftIO",
      "description": {
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#unsafeLiftIO",
        "fct-type": "method",
        "title": "unsafeLiftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "unsafeLiftIO",
        "normalized": "IO a-\u003eb a",
        "package": "resourcet",
        "partial": "Lift IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate the given resource and provide it to the provided function. The\n resource will be freed as soon as the inner block is exited, whether\n normally or via an exception. This function is similar in function to\n \u003ccode\u003ebracket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.10\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "Resource a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Trans-Resource-Internal.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "Allocate the given resource and provide it to the provided function The resource will be freed as soon as the inner block is exited whether normally or via an exception This function is similar in function to bracket Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "with",
        "normalized": "Resource a-\u003e(a-\u003eb c)-\u003eb c",
        "package": "resourcet",
        "partial": "",
        "signature": "Resource a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resourcet/docs/Control-Monad-Trans-Resource.html#v:withInternalState",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action in the underlying monad, providing it the \u003ccode\u003eInternalState\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.6\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Resource",
        "fct-package": "resourcet",
        "fct-signature": "(InternalState -\u003e m a) -\u003e ResourceT m a",
        "fct-source": "src/Control-Monad-Trans-Resource.html#withInternalState",
        "fct-type": "function",
        "title": "withInternalState"
      },
      "index": {
        "description": "Run an action in the underlying monad providing it the InternalState Since",
        "hierarchy": "Control Monad Trans Resource",
        "module": "Control.Monad.Trans.Resource",
        "name": "withInternalState",
        "normalized": "(InternalState-\u003ea b)-\u003eResourceT a b",
        "package": "resourcet",
        "partial": "Internal State",
        "signature": "(InternalState-\u003em a)-\u003eResourceT m a"
      }
    }
  }
]