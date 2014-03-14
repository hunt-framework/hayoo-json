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
        "word": "IOR"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references in the IOR monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IORRef",
          "name": "IORRef",
          "package": "IOR",
          "source": "src/Data-IORRef.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable references in the IOR monad",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "IORRef",
          "package": "IOR",
          "partial": "IORRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIORRef\u003c/a\u003e\u003c/code\u003e r a\u003c/code\u003e is a mutable variable in region \u003ccode\u003er\u003c/code\u003e,\n containing a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORRef",
          "name": "IORRef",
          "package": "IOR",
          "source": "src/Data-IORRef.html#IORRef",
          "type": "data"
        },
        "index": {
          "description": "value of type IORRef is mutable variable in region containing value of type",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "IORRef",
          "package": "IOR",
          "partial": "IORRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#t:IORRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of an \u003ccode\u003e\u003ca\u003eIORRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORRef",
          "name": "modifyIORRef",
          "package": "IOR",
          "signature": "IORRef r' a -\u003e (a -\u003e a) -\u003e IOR r rs ()",
          "source": "src/Data-IORRef.html#modifyIORRef",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of an IORRef",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "modifyIORRef",
          "normalized": "IORRef a b-\u003e(b-\u003eb)-\u003eIOR c d()",
          "package": "IOR",
          "partial": "IORRef",
          "signature": "IORRef r' a-\u003e(a-\u003ea)-\u003eIOR r rs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#v:modifyIORRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eIORRef\u003c/a\u003e\u003c/code\u003e in region \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORRef",
          "name": "newIORRef",
          "package": "IOR",
          "signature": "a -\u003e IOR r rs (IORRef r a)",
          "source": "src/Data-IORRef.html#newIORRef",
          "type": "function"
        },
        "index": {
          "description": "Create new IORRef in region",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "newIORRef",
          "normalized": "a-\u003eIOR b c(IORRef b a)",
          "package": "IOR",
          "partial": "IORRef",
          "signature": "a-\u003eIOR r rs(IORRef r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#v:newIORRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of an \u003ccode\u003e\u003ca\u003eIORRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORRef",
          "name": "readIORRef",
          "package": "IOR",
          "signature": "IORRef r' a -\u003e IOR r rs a",
          "source": "src/Data-IORRef.html#readIORRef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an IORRef",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "readIORRef",
          "normalized": "IORRef a b-\u003eIOR c d b",
          "package": "IOR",
          "partial": "IORRef",
          "signature": "IORRef r' a-\u003eIOR r rs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#v:readIORRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into an \u003ccode\u003e\u003ca\u003eIORRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORRef",
          "name": "writeIORRef",
          "package": "IOR",
          "signature": "IORRef r' a -\u003e a -\u003e IOR r rs ()",
          "source": "src/Data-IORRef.html#writeIORRef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into an IORRef",
          "hierarchy": "Data IORRef",
          "module": "Data.IORRef",
          "name": "writeIORRef",
          "normalized": "IORRef a b-\u003eb-\u003eIOR c d()",
          "package": "IOR",
          "partial": "IORRef",
          "signature": "IORRef r' a-\u003ea-\u003eIOR r rs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/Data-IORRef.html#v:writeIORRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eResource management in the IOR monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IOR.Resource",
          "name": "Resource",
          "package": "IOR",
          "source": "src/System-IOR-Resource.html",
          "type": "module"
        },
        "index": {
          "description": "Resource management in the IOR monad",
          "hierarchy": "System IOR Resource",
          "module": "System.IOR.Resource",
          "name": "Resource",
          "package": "IOR",
          "partial": "Resource",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR-Resource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e r a\u003c/code\u003e wraps a resource of type \u003ccode\u003ea\u003c/code\u003e so it can be managed\n inside region \u003ccode\u003er\u003c/code\u003e and automatically released upon exit from \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IOR.Resource",
          "name": "Resource",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "Resource wraps resource of type so it can be managed inside region and automatically released upon exit from",
          "hierarchy": "System IOR Resource",
          "module": "System.IOR.Resource",
          "name": "Resource",
          "package": "IOR",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR-Resource.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003ea\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e wrapper.\n\u003c/p\u003e",
          "module": "System.IOR.Resource",
          "name": "getResource",
          "package": "IOR",
          "signature": "Resource r a -\u003e a",
          "source": "src/System-IOR-Internal.html#getResource",
          "type": "function"
        },
        "index": {
          "description": "Extract from the Resource wrapper",
          "hierarchy": "System IOR Resource",
          "module": "System.IOR.Resource",
          "name": "getResource",
          "normalized": "Resource a b-\u003eb",
          "package": "IOR",
          "partial": "Resource",
          "signature": "Resource r a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR-Resource.html#v:getResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emanage\u003c/a\u003e\u003c/code\u003e a f\u003c/code\u003e will create a new \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e wrapper around the\n value of type \u003ccode\u003ea\u003c/code\u003e in region \u003ccode\u003er\u003c/code\u003e, given a finalizer \u003ccode\u003ef\u003c/code\u003e.\n Each finalizer is guaranteed to automatically be called upon exit from\n the region.\n Finalizers are called in the last in, first out fashion. So the finalizer\n of the very last resource allocated will be the first to get called.\n\u003c/p\u003e\u003cp\u003eNote that finalizers must not throw any errors. Failing to ensure that\n all errors in a finalizer are handled may result in a resource leak.\n\u003c/p\u003e",
          "module": "System.IOR.Resource",
          "name": "manage",
          "package": "IOR",
          "signature": "a -\u003e (a -\u003e IO ()) -\u003e IOR r rs (Resource r a)",
          "source": "src/System-IOR-Resource.html#manage",
          "type": "function"
        },
        "index": {
          "description": "manage will create new Resource wrapper around the value of type in region given finalizer Each finalizer is guaranteed to automatically be called upon exit from the region Finalizers are called in the last in first out fashion So the finalizer of the very last resource allocated will be the first to get called Note that finalizers must not throw any errors Failing to ensure that all errors in finalizer are handled may result in resource leak",
          "hierarchy": "System IOR Resource",
          "module": "System.IOR.Resource",
          "name": "manage",
          "normalized": "a-\u003e(a-\u003eIO())-\u003eIOR b c(Resource b a)",
          "package": "IOR",
          "signature": "a-\u003e(a-\u003eIO())-\u003eIOR r rs(Resource r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR-Resource.html#v:manage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e res\u003c/code\u003e is used to force the resource \u003ccode\u003eres\u003c/code\u003e to be\n released immediately. Finalizer for \u003ccode\u003eres\u003c/code\u003e will be called and removed\n from the stack of finalizers in region \u003ccode\u003er'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IOR.Resource",
          "name": "release",
          "package": "IOR",
          "signature": "Resource r' a -\u003e IOR r rs ()",
          "source": "src/System-IOR-Resource.html#release",
          "type": "function"
        },
        "index": {
          "description": "release res is used to force the resource res to be released immediately Finalizer for res will be called and removed from the stack of finalizers in region",
          "hierarchy": "System IOR Resource",
          "module": "System.IOR.Resource",
          "name": "release",
          "normalized": "Resource a b-\u003eIOR c d()",
          "package": "IOR",
          "signature": "Resource r' a-\u003eIOR r rs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR-Resource.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegion based resource management for the IO monad.\n Based on the ideas and code from\n \u003ca\u003ehttp://okmij.org/ftp/Haskell/regions.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IOR",
          "name": "IOR",
          "package": "IOR",
          "source": "src/System-IOR.html",
          "type": "module"
        },
        "index": {
          "description": "Region based resource management for the IO monad Based on the ideas and code from http okmij.org ftp Haskell regions.html",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "IOR",
          "package": "IOR",
          "partial": "IOR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad with support for region based resource allocation.\n A computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIOR\u003c/a\u003e\u003c/code\u003e r rs a\u003c/code\u003e wraps an action of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n where \u003ccode\u003er\u003c/code\u003e is an unconstrained type variable indicating the current region\n and \u003ccode\u003ers\u003c/code\u003e is a collection of all accessible regions within the computation.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be lifted into the \u003ccode\u003e\u003ca\u003eIOR\u003c/a\u003e\u003c/code\u003e monad using \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e.\n It is safe to throw \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e-s inside an \u003ccode\u003e\u003ca\u003eIOR\u003c/a\u003e\u003c/code\u003e computation.\n Allocated resources will be released on exit automatically.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "IOR",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#IOR",
          "type": "data"
        },
        "index": {
          "description": "IO monad with support for region based resource allocation computation of type IOR rs wraps an action of type IO where is an unconstrained type variable indicating the current region and rs is collection of all accessible regions within the computation IO actions can be lifted into the IOR monad using liftIO It is safe to throw IOError inside an IOR computation Allocated resources will be released on exit automatically",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "IOR",
          "package": "IOR",
          "partial": "IOR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#t:IOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA region tag \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIORTag\u003c/a\u003e\u003c/code\u003e r\u003c/code\u003e captures state of the region \u003ccode\u003er\u003c/code\u003e including all\n currently allocated resources in \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "IORTag",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#IORTag",
          "type": "data"
        },
        "index": {
          "description": "region tag IORTag captures state of the region including all currently allocated resources in",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "IORTag",
          "package": "IOR",
          "partial": "IORTag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#t:IORTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IOR",
          "name": "RCons",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#RCons",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "RCons",
          "package": "IOR",
          "partial": "RCons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#t:RCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IOR",
          "name": "RElem",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#RElem",
          "type": "class"
        },
        "index": {
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "RElem",
          "package": "IOR",
          "partial": "RElem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#t:RElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IOR",
          "name": "RNil",
          "package": "IOR",
          "source": "src/System-IOR-Internal.html#RNil",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "RNil",
          "package": "IOR",
          "partial": "RNil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#t:RNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current region's tag.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "getIORTag",
          "package": "IOR",
          "signature": "IOR r rs (IORTag r)",
          "source": "src/System-IOR-Internal.html#getIORTag",
          "type": "function"
        },
        "index": {
          "description": "Get the current region tag",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "getIORTag",
          "package": "IOR",
          "partial": "IORTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#v:getIORTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new region \u003ccode\u003er'\u003c/code\u003e inside \u003ccode\u003er\u003c/code\u003e. All resources allocated in\n \u003ccode\u003er'\u003c/code\u003e are only accessible from \u003ccode\u003er'\u003c/code\u003e and any of it's child regions.\n On exit from the region, all allocated resources are automatically\n released.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "newIOR",
          "package": "IOR",
          "signature": "IOR r' (RCons r' rs) a -\u003e IOR r rs a",
          "source": "src/System-IOR-Internal.html#newIOR",
          "type": "function"
        },
        "index": {
          "description": "Create new region inside All resources allocated in are only accessible from and any of it child regions On exit from the region all allocated resources are automatically released",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "newIOR",
          "normalized": "IOR a(RCons a b)c-\u003eIOR d b c",
          "package": "IOR",
          "partial": "IOR",
          "signature": "IOR r'(RCons r' rs)a-\u003eIOR r rs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#v:newIOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the initial region, \u003ccode\u003er\u003c/code\u003e, and run the computation returning a\n value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "runIOR",
          "package": "IOR",
          "signature": "IOR r (RCons r RNil) a -\u003e IO a",
          "source": "src/System-IOR-Internal.html#runIOR",
          "type": "function"
        },
        "index": {
          "description": "Create the initial region and run the computation returning value of type IO",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "runIOR",
          "normalized": "IOR a(RCons a RNil)b-\u003eIO b",
          "package": "IOR",
          "partial": "IOR",
          "signature": "IOR r(RCons r RNil)a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#v:runIOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily change the current region from \u003ccode\u003er\u003c/code\u003e to \u003ccode\u003er'\u003c/code\u003e. This allows\n allocation of resources in \u003ccode\u003er'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003er'\u003c/code\u003e has to be one of the parent regions of \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IOR",
          "name": "withIORTag",
          "package": "IOR",
          "signature": "IORTag r' -\u003e IOR r' rs a -\u003e IOR r rs a",
          "source": "src/System-IOR-Internal.html#withIORTag",
          "type": "function"
        },
        "index": {
          "description": "Temporarily change the current region from to This allows allocation of resources in has to be one of the parent regions of",
          "hierarchy": "System IOR",
          "module": "System.IOR",
          "name": "withIORTag",
          "normalized": "IORTag a-\u003eIOR a b c-\u003eIOR d b c",
          "package": "IOR",
          "partial": "IORTag",
          "signature": "IORTag r'-\u003eIOR r' rs a-\u003eIOR r rs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOR/docs/System-IOR.html#v:withIORTag"
      }
    }
  ]
]