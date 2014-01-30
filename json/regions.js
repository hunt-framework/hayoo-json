[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-OnExit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is not intended for end-users. It should only be used by library\n authors wishing to extend this \u003ccode\u003eregions\u003c/code\u003e library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Region.OnExit",
        "fct-package": "regions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Region-OnExit.html",
        "fct-type": "module",
        "title": "OnExit"
      },
      "index": {
        "description": "This module is not intended for end-users It should only be used by library authors wishing to extend this regions library",
        "hierarchy": "Control Monad Trans Region OnExit",
        "module": "Control.Monad.Trans.Region.OnExit",
        "name": "OnExit",
        "normalized": "",
        "package": "regions",
        "partial": "On Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-OnExit.html#t:Finalizer",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that closes or finalizes a resource. For example\n \"\u003ccode\u003ehClose someHandle\u003c/code\u003e\" or \"\u003ccode\u003efree somePtr\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region.OnExit",
        "fct-package": "regions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#Finalizer",
        "fct-type": "type",
        "title": "Finalizer"
      },
      "index": {
        "description": "An IO computation that closes or finalizes resource For example hClose someHandle or free somePtr",
        "hierarchy": "Control Monad Trans Region OnExit",
        "module": "Control.Monad.Trans.Region.OnExit",
        "name": "Finalizer",
        "normalized": "",
        "package": "regions",
        "partial": "Finalizer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-OnExit.html#t:FinalizerHandle",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to a \u003ccode\u003e\u003ca\u003eFinalizer\u003c/a\u003e\u003c/code\u003e that allows you to duplicate it to a parent region\nusing \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDuplicating a finalizer means that instead of it being performed when the\ncurrent region terminates it is performed when the parent region terminates.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region.OnExit",
        "fct-package": "regions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#FinalizerHandle",
        "fct-type": "data",
        "title": "FinalizerHandle"
      },
      "index": {
        "description": "handle to Finalizer that allows you to duplicate it to parent region using dup Duplicating finalizer means that instead of it being performed when the current region terminates it is performed when the parent region terminates",
        "hierarchy": "Control Monad Trans Region OnExit",
        "module": "Control.Monad.Trans.Region.OnExit",
        "name": "FinalizerHandle",
        "normalized": "",
        "package": "regions",
        "partial": "Finalizer Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-OnExit.html#v:onExit",
      "description": {
        "fct-descr": "\u003cp\u003eRegister the \u003ccode\u003e\u003ca\u003eFinalizer\u003c/a\u003e\u003c/code\u003e in the region. When the region terminates all\nregistered finalizers will be perfomed if they're not duplicated to a parent\nregion.\n\u003c/p\u003e\u003cp\u003eNote that finalizers are run in LIFO order (Last In First Out). So executing the following:\n\u003c/p\u003e\u003cpre\u003e\nrunRegionT $ do\n  _ \u003c- onExit $ putStrLn \"finalizer 1\"\n  _ \u003c- onExit $ putStrLn \"finalizer 2\"\n  return ()\n\u003c/pre\u003e\u003cp\u003eyields:\n\u003c/p\u003e\u003cpre\u003e\nfinalizer 2\nfinalizer 1\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Region.OnExit",
        "fct-package": "regions",
        "fct-signature": "Finalizer -\u003e RegionT s pr (FinalizerHandle (RegionT s pr))",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#onExit",
        "fct-type": "function",
        "title": "onExit"
      },
      "index": {
        "description": "Register the Finalizer in the region When the region terminates all registered finalizers will be perfomed if they re not duplicated to parent region Note that finalizers are run in LIFO order Last In First Out So executing the following runRegionT do onExit putStrLn finalizer onExit putStrLn finalizer return yields finalizer finalizer",
        "hierarchy": "Control Monad Trans Region OnExit",
        "module": "Control.Monad.Trans.Region.OnExit",
        "name": "onExit",
        "normalized": "Finalizer-\u003eRegionT a b(FinalizerHandle(RegionT a b))",
        "package": "regions",
        "partial": "Exit",
        "signature": "Finalizer-\u003eRegionT s pr(FinalizerHandle(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Region-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "regions",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeControlIO",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "(RunInBase m IO -\u003e IO (m α)) -\u003e m α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeControlIO",
        "fct-type": "function",
        "title": "unsafeControlIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeControlIO",
        "normalized": "(RunInBase a IO-\u003eIO(a b))-\u003ea b",
        "package": "regions",
        "partial": "Control IO",
        "signature": "(RunInBase m IO-\u003eIO(m α))-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeLiftControl",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "(Run (RegionT s) -\u003e pr α) -\u003e RegionT s pr α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeLiftControl",
        "fct-type": "function",
        "title": "unsafeLiftControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeLiftControl",
        "normalized": "(Run(RegionT a)-\u003eb c)-\u003eRegionT a b c",
        "package": "regions",
        "partial": "Lift Control",
        "signature": "(Run(RegionT s)-\u003epr α)-\u003eRegionT s pr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeLiftControlIO",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "(RunInBase m IO -\u003e IO α) -\u003e m α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeLiftControlIO",
        "fct-type": "function",
        "title": "unsafeLiftControlIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeLiftControlIO",
        "normalized": "(RunInBase a IO-\u003eIO b)-\u003ea b",
        "package": "regions",
        "partial": "Lift Control IO",
        "signature": "(RunInBase m IO-\u003eIO α)-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeLiftIOOp",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "((α -\u003e IO (m β)) -\u003e IO (m γ)) -\u003e (α -\u003e m β) -\u003e m γ",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeLiftIOOp",
        "fct-type": "function",
        "title": "unsafeLiftIOOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeLiftIOOp",
        "normalized": "((a-\u003eIO(b c))-\u003eIO(b d))-\u003e(a-\u003eb c)-\u003eb d",
        "package": "regions",
        "partial": "Lift IOOp",
        "signature": "((α-\u003eIO(m β))-\u003eIO(m γ))-\u003e(α-\u003em β)-\u003em γ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeLiftIOOp_",
      "description": {
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "(IO (m α) -\u003e IO (m β)) -\u003e m α -\u003e m β",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeLiftIOOp_",
        "fct-type": "function",
        "title": "unsafeLiftIOOp_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeLiftIOOp_",
        "normalized": "(IO(a b)-\u003eIO(a c))-\u003ea b-\u003ea c",
        "package": "regions",
        "partial": "Lift IOOp",
        "signature": "(IO(m α)-\u003eIO(m β))-\u003em α-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region-Unsafe.html#v:unsafeStripLocal",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eLocal\u003c/a\u003e\u003c/code\u003e region to a regular region.\n\u003c/p\u003e\u003cp\u003eThis function is unsafe because it allows you to use a \u003ccode\u003e\u003ca\u003eLocalRegion\u003c/a\u003e\u003c/code\u003e-tagged\nhandle outside its \u003ccode\u003e\u003ca\u003eLocal\u003c/a\u003e\u003c/code\u003e region.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region.Unsafe",
        "fct-package": "regions",
        "fct-signature": "RegionT (Local s) pr α -\u003e RegionT s pr α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#unsafeStripLocal",
        "fct-type": "function",
        "title": "unsafeStripLocal"
      },
      "index": {
        "description": "Convert Local region to regular region This function is unsafe because it allows you to use LocalRegion tagged handle outside its Local region",
        "hierarchy": "Control Monad Trans Region Unsafe",
        "module": "Control.Monad.Trans.Region.Unsafe",
        "name": "unsafeStripLocal",
        "normalized": "RegionT(Local a)b c-\u003eRegionT a b c",
        "package": "regions",
        "partial": "Strip Local",
        "signature": "RegionT(Local s)pr α-\u003eRegionT s pr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules implements a technique called \u003cem\u003e\"Lightweight monadic regions\"\u003c/em\u003e\n invented by Oleg Kiselyov and Chung-chieh Shan\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://okmij.org/ftp/Haskell/regions.html#light-weight\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Region.html",
        "fct-type": "module",
        "title": "Region"
      },
      "index": {
        "description": "This modules implements technique called Lightweight monadic regions invented by Oleg Kiselyov and Chung-chieh Shan See http okmij.org ftp Haskell regions.html light-weight",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "Region",
        "normalized": "",
        "package": "regions",
        "partial": "Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:AncestorRegion",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eAncestorRegion\u003c/code\u003e class is used to relate the region in which a resource\nwas opened to the region in which it is used. Take the following operation from\nthe \u003ccode\u003esafer-file-handles\u003c/code\u003e package as an example:\n\u003c/p\u003e\u003cpre\u003ehFileSize :: (pr `AncestorRegion` cr, MonadIO cr) =\u003e RegionalFileHandle ioMode pr -\u003e cr Integer\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eAncestorRegion\u003c/code\u003e class defines the parent / child relationship between regions.\nThe constraint\n\u003c/p\u003e\u003cpre\u003e\n    pr `AncestorRegion` cr\n\u003c/pre\u003e\u003cp\u003eis satisfied if and only if \u003ccode\u003ecr\u003c/code\u003e is a sequence of zero or more \"\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRegionT\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e\"\n(with varying \u003ccode\u003es\u003c/code\u003e) applied to \u003ccode\u003epr\u003c/code\u003e, in other words, if \u003ccode\u003ecr\u003c/code\u003e is an (improper)\nnested subregion of \u003ccode\u003epr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe class constraint \u003ccode\u003eInternalAncestorRegion pr cr\u003c/code\u003e serves two purposes. First, the\ninstances of \u003ccode\u003eInternalAncestorRegion\u003c/code\u003e do the type-level recursion that implements\nthe relation specified above. Second, since it is not exported, user code cannot\nadd new instances of \u003ccode\u003e\u003ca\u003eAncestorRegion\u003c/a\u003e\u003c/code\u003e (as these would have to be made instances of\n\u003ccode\u003eInternalAncestorRegion\u003c/code\u003e, too), effectively turning it into a \u003cem\u003eclosed class\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#AncestorRegion",
        "fct-type": "class",
        "title": "AncestorRegion"
      },
      "index": {
        "description": "The AncestorRegion class is used to relate the region in which resource was opened to the region in which it is used Take the following operation from the safer-file-handles package as an example hFileSize pr AncestorRegion cr MonadIO cr RegionalFileHandle ioMode pr cr Integer The AncestorRegion class defines the parent child relationship between regions The constraint pr AncestorRegion cr is satisfied if and only if cr is sequence of zero or more RegionT with varying applied to pr in other words if cr is an improper nested subregion of pr The class constraint InternalAncestorRegion pr cr serves two purposes First the instances of InternalAncestorRegion do the type-level recursion that implements the relation specified above Second since it is not exported user code cannot add new instances of AncestorRegion as these would have to be made instances of InternalAncestorRegion too effectively turning it into closed class",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "AncestorRegion",
        "normalized": "",
        "package": "regions",
        "partial": "Ancestor Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:Dup",
      "description": {
        "fct-descr": "\u003cp\u003eDuplicate an \u003ccode\u003eh\u003c/code\u003e in the parent region. This \u003ccode\u003eh\u003c/code\u003e will usually be some type of\nregional handle.\n\u003c/p\u003e\u003cp\u003eFor example, suppose you run the following region:\n\u003c/p\u003e\u003cpre\u003e\nrunRegionT $ do\n\u003c/pre\u003e\u003cp\u003eInside this region you run a nested \u003cem\u003echild\u003c/em\u003e region like:\n\u003c/p\u003e\u003cpre\u003e\n    r1hDup \u003c- runRegionT $ do\n\u003c/pre\u003e\u003cp\u003eNow in this child region you open the resource \u003ccode\u003er1\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n        r1h \u003c- open r1\n\u003c/pre\u003e\u003cp\u003e...yielding the regional handle \u003ccode\u003er1h\u003c/code\u003e. Note that:\n\u003c/p\u003e\u003cpre\u003er1h :: RegionalHandle (RegionT cs (RegionT ps ppr))\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ecs\u003c/code\u003e is bound by the inner (child) \u003ccode\u003erunRegionT\u003c/code\u003e and \u003ccode\u003eps\u003c/code\u003e is\nbound by the outer (parent) \u003ccode\u003erunRegionT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSuppose you want to use the resulting regional handle \u003ccode\u003er1h\u003c/code\u003e in the \u003cem\u003eparent\u003c/em\u003e\nregion. You can't simply \u003ccode\u003ereturn r1h\u003c/code\u003e because then the type variable \u003ccode\u003ecs\u003c/code\u003e,\nescapes the inner region.\n\u003c/p\u003e\u003cp\u003eHowever, if you duplicate the regional handle you can safely return it.\n\u003c/p\u003e\u003cpre\u003e\n        r1hDup \u003c- dup r1h\n        return r1hDup\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003er1hDup :: RegionalHandle (RegionT ps ppr)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eBack in the parent region you can safely operate on \u003ccode\u003er1hDup\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#Dup",
        "fct-type": "class",
        "title": "Dup"
      },
      "index": {
        "description": "Duplicate an in the parent region This will usually be some type of regional handle For example suppose you run the following region runRegionT do Inside this region you run nested child region like r1hDup runRegionT do Now in this child region you open the resource r1 r1h open r1 yielding the regional handle r1h Note that r1h RegionalHandle RegionT cs RegionT ps ppr where cs is bound by the inner child runRegionT and ps is bound by the outer parent runRegionT Suppose you want to use the resulting regional handle r1h in the parent region You can simply return r1h because then the type variable cs escapes the inner region However if you duplicate the regional handle you can safely return it r1hDup dup r1h return r1hDup Note that r1hDup RegionalHandle RegionT ps ppr Back in the parent region you can safely operate on r1hDup",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "Dup",
        "normalized": "",
        "package": "regions",
        "partial": "Dup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:Local",
      "description": {
        "fct-descr": "\u003cp\u003eA type used to tag regions in which locally created handles (handles tagged with\n\u003ccode\u003e\u003ca\u003eLocalRegion\u003c/a\u003e\u003c/code\u003e) can be used.\n\u003c/p\u003e\u003cp\u003eNote than any handle which is created in a \u003ccode\u003eRegionT (Local s)\u003c/code\u003e can be used\noutside that region (\u003ccode\u003eRegionT s\u003c/code\u003e) and visa versa\n(except for \u003ccode\u003e\u003ca\u003eLocalRegion\u003c/a\u003e\u003c/code\u003e-tagged handles).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#Local",
        "fct-type": "data",
        "title": "Local"
      },
      "index": {
        "description": "type used to tag regions in which locally created handles handles tagged with LocalRegion can be used Note than any handle which is created in RegionT Local can be used outside that region RegionT and visa versa except for LocalRegion tagged handles",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "Local",
        "normalized": "",
        "package": "regions",
        "partial": "Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:LocalRegion",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eLocalRegion\u003c/code\u003e is used to tag regional handles which are created locally.\n\u003c/p\u003e\u003cp\u003eAn example is the \u003ccode\u003eLocalPtr\u003c/code\u003e in the \u003ccode\u003ealloca\u003c/code\u003e function from the\n\u003ccode\u003eregional-pointers\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003e\nalloca :: (Storable a, MonadControlIO pr)\n       =\u003e (forall sl. LocalPtr a (\u003ccode\u003e\u003ca\u003eLocalRegion\u003c/a\u003e\u003c/code\u003e sl s) -\u003e RegionT (\u003ccode\u003e\u003ca\u003eLocal\u003c/a\u003e\u003c/code\u003e s) pr b)\n       -\u003e RegionT s pr b\n\u003c/pre\u003e\u003cp\u003eThe finalisation of the \u003ccode\u003eLocalPtr\u003c/code\u003e is not performed by the \u003ccode\u003eregions\u003c/code\u003e library but\nis handled locally by \u003ccode\u003ealloca\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe type variable \u003ccode\u003esl\u003c/code\u003e, which is only quantified over the continuation, ensures\nthat locally opened resources don't escape.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#LocalRegion",
        "fct-type": "data",
        "title": "LocalRegion"
      },
      "index": {
        "description": "LocalRegion is used to tag regional handles which are created locally An example is the LocalPtr in the alloca function from the regional-pointers package alloca Storable MonadControlIO pr forall sl LocalPtr LocalRegion sl RegionT Local pr RegionT pr The finalisation of the LocalPtr is not performed by the regions library but is handled locally by alloca instead The type variable sl which is only quantified over the continuation ensures that locally opened resources don escape",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "LocalRegion",
        "normalized": "",
        "package": "regions",
        "partial": "Local Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:RegionControlIO",
      "description": {
        "fct-descr": "\u003cp\u003eRegions do not have an instance for \u003ccode\u003e\u003ca\u003eMonadControlIO\u003c/a\u003e\u003c/code\u003e since that would break the\nsafety guarantees. (Think about lifting \u003ccode\u003eforkIO\u003c/code\u003e into a region!)\n\u003c/p\u003e\u003cp\u003eHowever \u003ccode\u003e\u003ca\u003erunRegionT\u003c/a\u003e\u003c/code\u003e and other operations on regions do need the ability to lift\ncontrol operations. This is where the \u003ccode\u003e\u003ca\u003eRegionControlIO\u003c/a\u003e\u003c/code\u003e class comes in. This\nclass is identical to \u003ccode\u003e\u003ca\u003eMonadControlIO\u003c/a\u003e\u003c/code\u003e but its \u003ccode\u003e\u003ca\u003eunsafeLiftControlIO\u003c/a\u003e\u003c/code\u003e method is\nnot exported by this module. So user can't accidentally break the safety.\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003eRegionT\u003c/a\u003e\u003c/code\u003e is an instance of this class. For the rest there is a\ncatch-all \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003eMonadControlIO\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eRegionControlIO\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#RegionControlIO",
        "fct-type": "class",
        "title": "RegionControlIO"
      },
      "index": {
        "description": "Regions do not have an instance for MonadControlIO since that would break the safety guarantees Think about lifting forkIO into region However runRegionT and other operations on regions do need the ability to lift control operations This is where the RegionControlIO class comes in This class is identical to MonadControlIO but its unsafeLiftControlIO method is not exported by this module So user can accidentally break the safety Note that RegionT is an instance of this class For the rest there is catch-all instance MonadControlIO RegionControlIO",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "RegionControlIO",
        "normalized": "",
        "package": "regions",
        "partial": "Region Control IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:RegionT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer in which scarce resources can be opened. When the region\nterminates, all opened resources will be closed automatically. It's a type error\nto return an opened resource from the region. The latter ensures no I/O with\nclosed resources is possible.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#RegionT",
        "fct-type": "data",
        "title": "RegionT"
      },
      "index": {
        "description": "monad transformer in which scarce resources can be opened When the region terminates all opened resources will be closed automatically It type error to return an opened resource from the region The latter ensures no with closed resources is possible",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "RegionT",
        "normalized": "",
        "package": "regions",
        "partial": "Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#t:RootRegion",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eRootRegion\u003c/code\u003e is the ancestor of any region.\n\u003c/p\u003e\u003cp\u003eIt's primary purpose is to tag regional handles which don't have an associated\nfinalizer. For example the standard file handles \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e\nwhich are opened on program startup and which shouldn't be closed when a region\nterminates. Another example is the \u003ccode\u003enullPtr\u003c/code\u003e which is a memory pointer which\ndoesn't point to any allocated memory so doesn't need to be freed.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#RootRegion",
        "fct-type": "data",
        "title": "RootRegion"
      },
      "index": {
        "description": "The RootRegion is the ancestor of any region It primary purpose is to tag regional handles which don have an associated finalizer For example the standard file handles stdin stdout and stderr which are opened on program startup and which shouldn be closed when region terminates Another example is the nullPtr which is memory pointer which doesn point to any allocated memory so doesn need to be freed",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "RootRegion",
        "normalized": "",
        "package": "regions",
        "partial": "Root Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#v:dup",
      "description": {
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "h (RegionT cs (RegionT ps ppr)) -\u003e RegionT cs (RegionT ps ppr) (h (RegionT ps ppr))",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#dup",
        "fct-type": "method",
        "title": "dup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "dup",
        "normalized": "a(RegionT b(RegionT c d))-\u003eRegionT b(RegionT c d)(a(RegionT c d))",
        "package": "regions",
        "partial": "",
        "signature": "h(RegionT cs(RegionT ps ppr))-\u003eRegionT cs(RegionT ps ppr)(h(RegionT ps ppr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "(((α -\u003e pr β) -\u003e pr α) -\u003e pr α) -\u003e ((α -\u003e RegionT s pr β) -\u003e RegionT s pr α) -\u003e RegionT s pr α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "liftCallCC",
        "normalized": "(((a-\u003eb c)-\u003eb a)-\u003eb a)-\u003e((a-\u003eRegionT d b c)-\u003eRegionT d b a)-\u003eRegionT d b a",
        "package": "regions",
        "partial": "Call CC",
        "signature": "(((α-\u003epr β)-\u003epr α)-\u003epr α)-\u003e((α-\u003eRegionT s pr β)-\u003eRegionT s pr α)-\u003eRegionT s pr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "(pr α -\u003e (e -\u003e pr α) -\u003e pr α) -\u003e RegionT s pr α -\u003e (e -\u003e RegionT s pr α) -\u003e RegionT s pr α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "liftCatch",
        "normalized": "(a b-\u003e(c-\u003ea b)-\u003ea b)-\u003eRegionT d a b-\u003e(c-\u003eRegionT d a b)-\u003eRegionT d a b",
        "package": "regions",
        "partial": "Catch",
        "signature": "(pr α-\u003e(e-\u003epr α)-\u003epr α)-\u003eRegionT s pr α-\u003e(e-\u003eRegionT s pr α)-\u003eRegionT s pr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#v:mapRegionT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a region.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "(m α -\u003e n β) -\u003e RegionT s m α -\u003e RegionT s n β",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#mapRegionT",
        "fct-type": "function",
        "title": "mapRegionT"
      },
      "index": {
        "description": "Transform the computation inside region",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "mapRegionT",
        "normalized": "(a b-\u003ec d)-\u003eRegionT e a b-\u003eRegionT e c d",
        "package": "regions",
        "partial": "Region",
        "signature": "(m α-\u003en β)-\u003eRegionT s m α-\u003eRegionT s n β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regions/docs/Control-Monad-Trans-Region.html#v:runRegionT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a region inside its parent region \u003ccode\u003epr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll resources which have been opened in the given region and which haven't been\nduplicated using \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e, will be closed on exit from this function wether by\nnormal termination or by raising an exception.\n\u003c/p\u003e\u003cp\u003eAlso all resources which have been duplicated to this region from a child region\nare closed on exit if they haven't been duplicated themselves.\n\u003c/p\u003e\u003cp\u003eNote the type variable \u003ccode\u003es\u003c/code\u003e of the region wich is only quantified over the region\nitself. This ensures that \u003cem\u003eall\u003c/em\u003e values, having a type containing \u003ccode\u003es\u003c/code\u003e, can \u003cem\u003enot\u003c/em\u003e\nbe returned from this function. (Note the similarity with the \u003ccode\u003eST\u003c/code\u003e monad.)\n\u003c/p\u003e\u003cp\u003eNote that it is possible to run a region inside another region.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Region",
        "fct-package": "regions",
        "fct-signature": "(forall s.  RegionT s pr α) -\u003e pr α",
        "fct-source": "src/Control-Monad-Trans-Region-Internal.html#runRegionT",
        "fct-type": "function",
        "title": "runRegionT"
      },
      "index": {
        "description": "Execute region inside its parent region pr All resources which have been opened in the given region and which haven been duplicated using dup will be closed on exit from this function wether by normal termination or by raising an exception Also all resources which have been duplicated to this region from child region are closed on exit if they haven been duplicated themselves Note the type variable of the region wich is only quantified over the region itself This ensures that all values having type containing can not be returned from this function Note the similarity with the ST monad Note that it is possible to run region inside another region",
        "hierarchy": "Control Monad Trans Region",
        "module": "Control.Monad.Trans.Region",
        "name": "runRegionT",
        "normalized": "(a b RegionT c d e)-\u003ed e",
        "package": "regions",
        "partial": "Region",
        "signature": "(forall s. RegionT s pr α)-\u003epr α"
      }
    }
  }
]