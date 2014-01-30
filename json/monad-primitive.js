[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#",
      "description": {
        "fct-module": "Control.Monad.Primitive.Class",
        "fct-package": "monad-primitive",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Primitive-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive Class",
        "module": "Control.Monad.Primitive.Class",
        "name": "Class",
        "normalized": "",
        "package": "monad-primitive",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#t:MonadPrim",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which computation based on primitive monad (instance of\n   \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e) could be embedded. Instances must obey following laws:\n\u003c/p\u003e\u003cpre\u003e liftPrim . return  = return\n liftPrim (m \u003e\u003e= f) = liftPrim m \u003e\u003e= liftPrim f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Primitive.Class",
        "fct-package": "monad-primitive",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Primitive-Class.html#MonadPrim",
        "fct-type": "class",
        "title": "MonadPrim"
      },
      "index": {
        "description": "Monads in which computation based on primitive monad instance of PrimMonad could be embedded Instances must obey following laws liftPrim return return liftPrim liftPrim liftPrim",
        "hierarchy": "Control Monad Primitive Class",
        "module": "Control.Monad.Primitive.Class",
        "name": "MonadPrim",
        "normalized": "",
        "package": "monad-primitive",
        "partial": "Monad Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#v:liftPrim",
      "description": {
        "fct-module": "Control.Monad.Primitive.Class",
        "fct-package": "monad-primitive",
        "fct-signature": "BasePrimMonad m a -\u003e m a",
        "fct-source": "src/Control-Monad-Primitive-Class.html#liftPrim",
        "fct-type": "method",
        "title": "liftPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive Class",
        "module": "Control.Monad.Primitive.Class",
        "name": "liftPrim",
        "normalized": "BasePrimMonad a b-\u003ea b",
        "package": "monad-primitive",
        "partial": "Prim",
        "signature": "BasePrimMonad m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references in monads which are instances of \u003ccode\u003eMonadPrim\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-PrimRef.html",
        "fct-type": "module",
        "title": "PrimRef"
      },
      "index": {
        "description": "Mutable references in monads which are instances of MonadPrim",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "PrimRef",
        "normalized": "",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#t:PrimRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutable variable which full analog of \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e but could use either of the monads.\n   Unfortunately there's no way to convert \u003ccode\u003ePrimRef\u003c/code\u003e to \u003ccode\u003eSTRef\u003c/code\u003e or\n   \u003ccode\u003eIORef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-PrimRef.html#PrimRef",
        "fct-type": "data",
        "title": "PrimRef"
      },
      "index": {
        "description": "Mutable variable which full analog of IORef or STRef but could use either of the monads Unfortunately there no way to convert PrimRef to STRef or IORef",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "PrimRef",
        "normalized": "",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:modifyPrimRef",
      "description": {
        "fct-descr": "\u003cp\u003eModify content of \u003ccode\u003ePrimRef\u003c/code\u003e using function.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "PrimRef m a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-PrimRef.html#modifyPrimRef",
        "fct-type": "function",
        "title": "modifyPrimRef"
      },
      "index": {
        "description": "Modify content of PrimRef using function",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "modifyPrimRef",
        "normalized": "PrimRef a b-\u003e(b-\u003eb)-\u003ea()",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": "PrimRef m a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:modifyPrimRef-39-",
      "description": {
        "fct-descr": "\u003cp\u003eModify content of \u003ccode\u003ePrimRef\u003c/code\u003e using function and evaluate result of\n   function application to WHNF before storing it in the variable.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "PrimRef m a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-PrimRef.html#modifyPrimRef%27",
        "fct-type": "function",
        "title": "modifyPrimRef'"
      },
      "index": {
        "description": "Modify content of PrimRef using function and evaluate result of function application to WHNF before storing it in the variable",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "modifyPrimRef'",
        "normalized": "PrimRef a b-\u003e(b-\u003eb)-\u003ea()",
        "package": "monad-primitive",
        "partial": "Prim Ref'",
        "signature": "PrimRef m a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:newPrimRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new mutable variable with initial value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "a -\u003e m (PrimRef m a)",
        "fct-source": "src/Data-PrimRef.html#newPrimRef",
        "fct-type": "function",
        "title": "newPrimRef"
      },
      "index": {
        "description": "Create new mutable variable with initial value",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "newPrimRef",
        "normalized": "a-\u003eb(PrimRef b a)",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": "a-\u003em(PrimRef m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:readPrimRef",
      "description": {
        "fct-descr": "\u003cp\u003eRead value of \u003ccode\u003ePrimRef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "PrimRef m a -\u003e m a",
        "fct-source": "src/Data-PrimRef.html#readPrimRef",
        "fct-type": "function",
        "title": "readPrimRef"
      },
      "index": {
        "description": "Read value of PrimRef",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "readPrimRef",
        "normalized": "PrimRef a b-\u003ea b",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": "PrimRef m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:writePrimRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite value to \u003ccode\u003ePrimRef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PrimRef",
        "fct-package": "monad-primitive",
        "fct-signature": "PrimRef m a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-PrimRef.html#writePrimRef",
        "fct-type": "function",
        "title": "writePrimRef"
      },
      "index": {
        "description": "Write value to PrimRef",
        "hierarchy": "Data PrimRef",
        "module": "Data.PrimRef",
        "name": "writePrimRef",
        "normalized": "PrimRef a b-\u003eb-\u003ea()",
        "package": "monad-primitive",
        "partial": "Prim Ref",
        "signature": "PrimRef m a-\u003ea-\u003em()"
      }
    }
  }
]