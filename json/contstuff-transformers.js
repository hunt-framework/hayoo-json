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
        "word": "contstuff-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides contstuff transformer class instances for the\n monad transformers from the transformers package as well as\n transformers class instances for the monad transformers from\n contstuff.  This makes using both transformer libraries in a single\n project much more convenient as you get along with a single set of\n lifting functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Transformers",
          "name": "Transformers",
          "package": "contstuff-transformers",
          "source": "src/Control-ContStuff-Transformers.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides contstuff transformer class instances for the monad transformers from the transformers package as well as transformers class instances for the monad transformers from contstuff This makes using both transformer libraries in single project much more convenient as you get along with single set of lifting functions",
          "hierarchy": "Control ContStuff Transformers",
          "module": "Control.ContStuff.Transformers",
          "name": "Transformers",
          "package": "contstuff-transformers",
          "partial": "Transformers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff-transformers/docs/Control-ContStuff-Transformers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ContStuff.Transformers",
          "name": "MonadIO",
          "package": "contstuff-transformers",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Control ContStuff Transformers",
          "module": "Control.ContStuff.Transformers",
          "name": "MonadIO",
          "package": "contstuff-transformers",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff-transformers/docs/Control-ContStuff-Transformers.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monad transformers.  Instances should satisfy the\n following laws, which state that \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ContStuff.Transformers",
          "name": "MonadTrans",
          "package": "contstuff-transformers",
          "type": "class"
        },
        "index": {
          "description": "The class of monad transformers Instances should satisfy the following laws which state that lift is transformer of monads lift return return lift lift lift",
          "hierarchy": "Control ContStuff Transformers",
          "module": "Control.ContStuff.Transformers",
          "name": "MonadTrans",
          "package": "contstuff-transformers",
          "partial": "Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff-transformers/docs/Control-ContStuff-Transformers.html#t:MonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Transformers",
          "name": "liftIO",
          "package": "contstuff-transformers",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Control ContStuff Transformers",
          "module": "Control.ContStuff.Transformers",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "contstuff-transformers",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff-transformers/docs/Control-ContStuff-Transformers.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to \u003ccode\u003eControl.Monad.Trans.lift\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Transformers",
          "name": "liftT",
          "package": "contstuff-transformers",
          "signature": "m a -\u003e t m a",
          "source": "src/Control-ContStuff-Transformers.html#liftT",
          "type": "function"
        },
        "index": {
          "description": "Interface to Control.Monad.Trans.lift",
          "hierarchy": "Control ContStuff Transformers",
          "module": "Control.ContStuff.Transformers",
          "name": "liftT",
          "normalized": "a b-\u003ec a b",
          "package": "contstuff-transformers",
          "signature": "m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff-transformers/docs/Control-ContStuff-Transformers.html#v:liftT"
      }
    }
  ]
]