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
        "word": "monad-primitive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive.Class",
          "name": "Class",
          "package": "monad-primitive",
          "source": "src/Control-Monad-Primitive-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Primitive Class",
          "module": "Control.Monad.Primitive.Class",
          "name": "Class",
          "package": "monad-primitive",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which computation based on primitive monad (instance of\n   \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e) could be embedded. Instances must obey following laws:\n\u003c/p\u003e\u003cpre\u003e liftPrim . return  = return\n liftPrim (m \u003e\u003e= f) = liftPrim m \u003e\u003e= liftPrim f\n\u003c/pre\u003e",
          "module": "Control.Monad.Primitive.Class",
          "name": "MonadPrim",
          "package": "monad-primitive",
          "source": "src/Control-Monad-Primitive-Class.html#MonadPrim",
          "type": "class"
        },
        "index": {
          "description": "Monads in which computation based on primitive monad instance of PrimMonad could be embedded Instances must obey following laws liftPrim return return liftPrim liftPrim liftPrim",
          "hierarchy": "Control Monad Primitive Class",
          "module": "Control.Monad.Primitive.Class",
          "name": "MonadPrim",
          "package": "monad-primitive",
          "partial": "Monad Prim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#t:MonadPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive.Class",
          "name": "liftPrim",
          "package": "monad-primitive",
          "signature": "BasePrimMonad m a -\u003e m a",
          "source": "src/Control-Monad-Primitive-Class.html#liftPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Primitive Class",
          "module": "Control.Monad.Primitive.Class",
          "name": "liftPrim",
          "normalized": "BasePrimMonad a b-\u003ea b",
          "package": "monad-primitive",
          "partial": "Prim",
          "signature": "BasePrimMonad m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Control-Monad-Primitive-Class.html#v:liftPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references in monads which are instances of \u003ccode\u003eMonadPrim\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PrimRef",
          "name": "PrimRef",
          "package": "monad-primitive",
          "source": "src/Data-PrimRef.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable references in monads which are instances of MonadPrim",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "PrimRef",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable variable which full analog of \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e but could use either of the monads.\n   Unfortunately there's no way to convert \u003ccode\u003ePrimRef\u003c/code\u003e to \u003ccode\u003eSTRef\u003c/code\u003e or\n   \u003ccode\u003eIORef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "PrimRef",
          "package": "monad-primitive",
          "source": "src/Data-PrimRef.html#PrimRef",
          "type": "data"
        },
        "index": {
          "description": "Mutable variable which full analog of IORef or STRef but could use either of the monads Unfortunately there no way to convert PrimRef to STRef or IORef",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "PrimRef",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#t:PrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify content of \u003ccode\u003ePrimRef\u003c/code\u003e using function.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "modifyPrimRef",
          "package": "monad-primitive",
          "signature": "PrimRef m a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-PrimRef.html#modifyPrimRef",
          "type": "function"
        },
        "index": {
          "description": "Modify content of PrimRef using function",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "modifyPrimRef",
          "normalized": "PrimRef a b-\u003e(b-\u003eb)-\u003ea()",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "signature": "PrimRef m a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:modifyPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify content of \u003ccode\u003ePrimRef\u003c/code\u003e using function and evaluate result of\n   function application to WHNF before storing it in the variable.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "modifyPrimRef'",
          "package": "monad-primitive",
          "signature": "PrimRef m a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-PrimRef.html#modifyPrimRef%27",
          "type": "function"
        },
        "index": {
          "description": "Modify content of PrimRef using function and evaluate result of function application to WHNF before storing it in the variable",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "modifyPrimRef'",
          "normalized": "PrimRef a b-\u003e(b-\u003eb)-\u003ea()",
          "package": "monad-primitive",
          "partial": "Prim Ref'",
          "signature": "PrimRef m a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:modifyPrimRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new mutable variable with initial value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "newPrimRef",
          "package": "monad-primitive",
          "signature": "a -\u003e m (PrimRef m a)",
          "source": "src/Data-PrimRef.html#newPrimRef",
          "type": "function"
        },
        "index": {
          "description": "Create new mutable variable with initial value",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "newPrimRef",
          "normalized": "a-\u003eb(PrimRef b a)",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "signature": "a-\u003em(PrimRef m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:newPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead value of \u003ccode\u003ePrimRef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "readPrimRef",
          "package": "monad-primitive",
          "signature": "PrimRef m a -\u003e m a",
          "source": "src/Data-PrimRef.html#readPrimRef",
          "type": "function"
        },
        "index": {
          "description": "Read value of PrimRef",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "readPrimRef",
          "normalized": "PrimRef a b-\u003ea b",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "signature": "PrimRef m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:readPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite value to \u003ccode\u003ePrimRef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimRef",
          "name": "writePrimRef",
          "package": "monad-primitive",
          "signature": "PrimRef m a -\u003e a -\u003e m ()",
          "source": "src/Data-PrimRef.html#writePrimRef",
          "type": "function"
        },
        "index": {
          "description": "Write value to PrimRef",
          "hierarchy": "Data PrimRef",
          "module": "Data.PrimRef",
          "name": "writePrimRef",
          "normalized": "PrimRef a b-\u003eb-\u003ea()",
          "package": "monad-primitive",
          "partial": "Prim Ref",
          "signature": "PrimRef m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-primitive/docs/Data-PrimRef.html#v:writePrimRef"
      }
    }
  ]
]