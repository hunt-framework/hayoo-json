[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#",
      "description": {
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Ref.html",
        "fct-type": "module",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "ref-tf",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#t:MonadAtomicRef",
      "description": {
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Ref.html#MonadAtomicRef",
        "fct-type": "class",
        "title": "MonadAtomicRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "MonadAtomicRef",
        "normalized": "",
        "package": "ref-tf",
        "partial": "Monad Atomic Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#t:MonadRef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadRef\u003c/a\u003e\u003c/code\u003e type class abstracts over the details of manipulating\n references, allowing one to write code that uses references and can operate\n in any monad that supports reference operations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Ref.html#MonadRef",
        "fct-type": "class",
        "title": "MonadRef"
      },
      "index": {
        "description": "The MonadRef type class abstracts over the details of manipulating references allowing one to write code that uses references and can operate in any monad that supports reference operations",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "MonadRef",
        "normalized": "",
        "package": "ref-tf",
        "partial": "Monad Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#v:atomicModifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically mutate the contents of a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "Ref m a -\u003e (a -\u003e (a, b)) -\u003e m b",
        "fct-source": "src/Control-Monad-Ref.html#atomicModifyRef",
        "fct-type": "method",
        "title": "atomicModifyRef"
      },
      "index": {
        "description": "Atomically mutate the contents of reference",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "atomicModifyRef",
        "normalized": "Ref a b-\u003e(b-\u003e(b,c))-\u003ea c",
        "package": "ref-tf",
        "partial": "Modify Ref",
        "signature": "Ref m a-\u003e(a-\u003e(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#v:modifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "Ref m a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Control-Monad-Ref.html#modifyRef",
        "fct-type": "method",
        "title": "modifyRef"
      },
      "index": {
        "description": "Mutate the contents of reference",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "modifyRef",
        "normalized": "Ref a b-\u003e(b-\u003eb)-\u003ea()",
        "package": "ref-tf",
        "partial": "Ref",
        "signature": "Ref m a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#v:newRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "a -\u003e m (Ref m a)",
        "fct-source": "src/Control-Monad-Ref.html#newRef",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "Create new reference",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "newRef",
        "normalized": "a-\u003eb(Ref b a)",
        "package": "ref-tf",
        "partial": "Ref",
        "signature": "a-\u003em(Ref m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#v:readRef",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "Ref m a -\u003e m a",
        "fct-source": "src/Control-Monad-Ref.html#readRef",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "Read the value of reference",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "readRef",
        "normalized": "Ref a b-\u003ea b",
        "package": "ref-tf",
        "partial": "Ref",
        "signature": "Ref m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref-tf/docs/Control-Monad-Ref.html#v:writeRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value to a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Ref",
        "fct-package": "ref-tf",
        "fct-signature": "Ref m a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Ref.html#writeRef",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "Write new value to reference",
        "hierarchy": "Control Monad Ref",
        "module": "Control.Monad.Ref",
        "name": "writeRef",
        "normalized": "Ref a b-\u003eb-\u003ea()",
        "package": "ref-tf",
        "partial": "Ref",
        "signature": "Ref m a-\u003ea-\u003em()"
      }
    }
  }
]