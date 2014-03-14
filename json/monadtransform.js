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
        "word": "monadtransform"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Transform.Class",
          "name": "Class",
          "package": "monadtransform",
          "source": "src/Control-Monad-Transform-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Transform Class",
          "module": "Control.Monad.Transform.Class",
          "name": "Class",
          "package": "monadtransform",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadtransform/docs/Control-Monad-Transform-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Transform.Class",
          "name": "MonadTransform",
          "package": "monadtransform",
          "source": "src/Control-Monad-Transform-Class.html#MonadTransform",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Transform Class",
          "module": "Control.Monad.Transform.Class",
          "name": "MonadTransform",
          "package": "monadtransform",
          "partial": "Monad Transform",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadtransform/docs/Control-Monad-Transform-Class.html#t:MonadTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Transform.Class",
          "name": "liftHom",
          "package": "monadtransform",
          "signature": "t Identity a -\u003e t g a",
          "source": "src/Control-Monad-Transform-Class.html#liftHom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Transform Class",
          "module": "Control.Monad.Transform.Class",
          "name": "liftHom",
          "normalized": "a Identity b-\u003ea c b",
          "package": "monadtransform",
          "partial": "Hom",
          "signature": "t Identity a-\u003et g a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadtransform/docs/Control-Monad-Transform-Class.html#v:liftHom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Transform.Class",
          "name": "transform",
          "package": "monadtransform",
          "signature": "(forall z.  f z -\u003e g z) -\u003e t f a -\u003e t g a",
          "source": "src/Control-Monad-Transform-Class.html#transform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Transform Class",
          "module": "Control.Monad.Transform.Class",
          "name": "transform",
          "normalized": "(a b c d-\u003ee d)-\u003ef c g-\u003ef e g",
          "package": "monadtransform",
          "signature": "(forall z. f z-\u003eg z)-\u003et f a-\u003et g a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadtransform/docs/Control-Monad-Transform-Class.html#v:transform"
      }
    }
  ]
]