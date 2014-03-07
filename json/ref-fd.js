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
        "word": "ref-fd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ref",
          "name": "Ref",
          "package": "ref-fd",
          "source": "src/Control-Monad-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "Ref",
          "package": "ref-fd",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ref",
          "name": "MonadAtomicRef",
          "package": "ref-fd",
          "source": "src/Control-Monad-Ref.html#MonadAtomicRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "MonadAtomicRef",
          "package": "ref-fd",
          "partial": "Monad Atomic Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#t:MonadAtomicRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadRef\u003c/a\u003e\u003c/code\u003e type class abstracts over the details of manipulating\n references, allowing one to write code that uses references and can operate\n in any monad that supports reference operations.\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "MonadRef",
          "package": "ref-fd",
          "source": "src/Control-Monad-Ref.html#MonadRef",
          "type": "class"
        },
        "index": {
          "description": "The MonadRef type class abstracts over the details of manipulating references allowing one to write code that uses references and can operate in any monad that supports reference operations",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "MonadRef",
          "package": "ref-fd",
          "partial": "Monad Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#t:MonadRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically mutate the contents of a reference\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "atomicModifyRef",
          "package": "ref-fd",
          "signature": "r a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Control-Monad-Ref.html#atomicModifyRef",
          "type": "method"
        },
        "index": {
          "description": "Atomically mutate the contents of reference",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "atomicModifyRef",
          "normalized": "a b-\u003e(b-\u003e(b,c))-\u003ed c",
          "package": "ref-fd",
          "partial": "Modify Ref",
          "signature": "r a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#v:atomicModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a reference\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "modifyRef",
          "package": "ref-fd",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Ref.html#modifyRef",
          "type": "method"
        },
        "index": {
          "description": "Mutate the contents of reference",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "ref-fd",
          "partial": "Ref",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "newRef",
          "package": "ref-fd",
          "signature": "a -\u003e m (r a)",
          "source": "src/Control-Monad-Ref.html#newRef",
          "type": "method"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "newRef",
          "normalized": "a-\u003eb(c a)",
          "package": "ref-fd",
          "partial": "Ref",
          "signature": "a-\u003em(r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a reference\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "readRef",
          "package": "ref-fd",
          "signature": "r a -\u003e m a",
          "source": "src/Control-Monad-Ref.html#readRef",
          "type": "method"
        },
        "index": {
          "description": "Read the value of reference",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "readRef",
          "normalized": "a b-\u003ec b",
          "package": "ref-fd",
          "partial": "Ref",
          "signature": "r a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value to a reference\n\u003c/p\u003e",
          "module": "Control.Monad.Ref",
          "name": "writeRef",
          "package": "ref-fd",
          "signature": "r a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Ref.html#writeRef",
          "type": "method"
        },
        "index": {
          "description": "Write new value to reference",
          "hierarchy": "Control Monad Ref",
          "module": "Control.Monad.Ref",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "ref-fd",
          "partial": "Ref",
          "signature": "r a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref-fd/docs/Control-Monad-Ref.html#v:writeRef"
      }
    }
  ]
]