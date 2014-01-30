[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllocate resources which are guaranteed to be released.\n\u003c/p\u003e\u003cp\u003eFor more information, see the \u003ccode\u003eresourcet\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Resource.html",
        "fct-type": "module",
        "title": "Resource"
      },
      "index": {
        "description": "Allocate resources which are guaranteed to be released For more information see the resourcet package",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "resource-effect",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#t:ReleaseKey",
      "description": {
        "fct-descr": "\u003cp\u003eA lookup key for a specific release action. This value\n   is returned by \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eallocate\u003c/code\u003e, and is passed to \u003ccode\u003erelease\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Resource.html#ReleaseKey",
        "fct-type": "data",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "lookup key for specific release action This value is returned by register and allocate and is passed to release",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "resource-effect",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#t:Resource",
      "description": {
        "fct-descr": "\u003cp\u003eThe Resource effect. This effect keeps track of all registered actions,\n   and calls them upon exit (via \u003ccode\u003e\u003ca\u003erunResource\u003c/a\u003e\u003c/code\u003e). Actions may be registered\n   via register, or resources may be allocated atomically via allocate.\n   allocate corresponds closely to bracket.\n\u003c/p\u003e\u003cp\u003eReleasing may be performed before exit via the release function. This\n   is a highly recommended optimization, as it will ensure that scarce\n   resources are freed early. Note that calling release will deregister\n   the action, so that a release action will only ever be called once.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "type",
        "fct-source": "src/Control-Eff-Resource.html#Resource",
        "fct-type": "type",
        "title": "Resource"
      },
      "index": {
        "description": "The Resource effect This effect keeps track of all registered actions and calls them upon exit via runResource Actions may be registered via register or resources may be allocated atomically via allocate allocate corresponds closely to bracket Releasing may be performed before exit via the release function This is highly recommended optimization as it will ensure that scarce resources are freed early Note that calling release will deregister the action so that release action will only ever be called once",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "resource-effect",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#t:ResourceState",
      "description": {
        "fct-descr": "\u003cp\u003eA resource's state. Type parameter \u003ccode\u003em\u003c/code\u003e is the Monad the resource\n   deallocation will run in.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Resource.html#ResourceState",
        "fct-type": "data",
        "title": "ResourceState"
      },
      "index": {
        "description": "resource state Type parameter is the Monad the resource deallocation will run in",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "ResourceState",
        "normalized": "",
        "package": "resource-effect",
        "partial": "Resource State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#v:allocate",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some allocation, and automatically register a cleanup action.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "m a-\u003e (a -\u003e m ())-\u003e Eff r (ReleaseKey, a)",
        "fct-type": "function",
        "title": "allocate"
      },
      "index": {
        "description": "Perform some allocation and automatically register cleanup action",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "allocate",
        "normalized": "a b-\u003e(b-\u003ea())-\u003eEff c(ReleaseKey,b)",
        "package": "resource-effect",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em())-\u003eEff r(ReleaseKey,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister some action that will be called precisely once, either when\n   \u003ccode\u003e\u003ca\u003erunResource\u003c/a\u003e\u003c/code\u003e is called or when the \u003ccode\u003e\u003ca\u003eReleaseKey\u003c/a\u003e\u003c/code\u003e is passed to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "m () -\u003e Eff r ReleaseKey",
        "fct-source": "src/Control-Eff-Resource.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Register some action that will be called precisely once either when runResource is called or when the ReleaseKey is passed to release",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "register",
        "normalized": "a()-\u003eEff b ReleaseKey",
        "package": "resource-effect",
        "partial": "",
        "signature": "m()-\u003eEff r ReleaseKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003eCall a release action early, and deregister it from the list of\n   cleanup actions to be performed.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "ReleaseKey -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Resource.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "Call release action early and deregister it from the list of cleanup actions to be performed",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "release",
        "normalized": "ReleaseKey-\u003eEff a()",
        "package": "resource-effect",
        "partial": "",
        "signature": "ReleaseKey-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#v:runResource",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e effect, and call all registered release actions.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "Eff (Resource (m ()) :\u003e r) a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Resource.html#runResource",
        "fct-type": "function",
        "title": "runResource"
      },
      "index": {
        "description": "Unwrap Resource effect and call all registered release actions",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "runResource",
        "normalized": "Eff(Resource(a())b)c-\u003eEff b c",
        "package": "resource-effect",
        "partial": "Resource",
        "signature": "Eff(Resource(m())r)a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resource-effect/docs/Control-Eff-Resource.html#v:unprotect",
      "description": {
        "fct-descr": "\u003cp\u003eUnprotect resource from cleanup actions, this allowes you to send\n   resource into another resourcet process and reregister it there.\n\u003c/p\u003e\u003cp\u003eIt returns an release action that should be run in order to clean\n   resource or Nothing in case if resource is already freed.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Resource",
        "fct-package": "resource-effect",
        "fct-signature": "ReleaseKey -\u003e Eff r (Maybe (m ()))",
        "fct-source": "src/Control-Eff-Resource.html#unprotect",
        "fct-type": "function",
        "title": "unprotect"
      },
      "index": {
        "description": "Unprotect resource from cleanup actions this allowes you to send resource into another resourcet process and reregister it there It returns an release action that should be run in order to clean resource or Nothing in case if resource is already freed",
        "hierarchy": "Control Eff Resource",
        "module": "Control.Eff.Resource",
        "name": "unprotect",
        "normalized": "ReleaseKey-\u003eEff a(Maybe(b()))",
        "package": "resource-effect",
        "partial": "",
        "signature": "ReleaseKey-\u003eEff r(Maybe(m()))"
      }
    }
  }
]