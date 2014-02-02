[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/contstuff-monads-tf/docs/Control-ContStuff-MonadsTf.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides contstuff transformer class instances for the\n monad transformers from the monads-tf package as well as monads-tf\n transformer class instances for the monad transformers from\n contstuff.  This makes using both transformer libraries in a single\n project much more convenient as you get along with a single set of\n lifting functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ContStuff.MonadsTf",
        "fct-package": "contstuff-monads-tf",
        "fct-signature": "module",
        "fct-source": "src/Control-ContStuff-MonadsTf.html",
        "fct-type": "module",
        "title": "MonadsTf"
      },
      "index": {
        "description": "This package provides contstuff transformer class instances for the monad transformers from the monads-tf package as well as monads-tf transformer class instances for the monad transformers from contstuff This makes using both transformer libraries in single project much more convenient as you get along with single set of lifting functions",
        "hierarchy": "Control ContStuff MonadsTf",
        "module": "Control.ContStuff.MonadsTf",
        "name": "MonadsTf",
        "normalized": "",
        "package": "contstuff-monads-tf",
        "partial": "Monads Tf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/contstuff-monads-tf/docs/Control-ContStuff-MonadsTf.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ContStuff.MonadsTf",
        "fct-package": "contstuff-monads-tf",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Control ContStuff MonadsTf",
        "module": "Control.ContStuff.MonadsTf",
        "name": "MonadIO",
        "normalized": "",
        "package": "contstuff-monads-tf",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/contstuff-monads-tf/docs/Control-ContStuff-MonadsTf.html#t:MonadTrans",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monad transformers.  Instances should satisfy the\n following laws, which state that \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ContStuff.MonadsTf",
        "fct-package": "contstuff-monads-tf",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadTrans"
      },
      "index": {
        "description": "The class of monad transformers Instances should satisfy the following laws which state that lift is transformer of monads lift return return lift lift lift",
        "hierarchy": "Control ContStuff MonadsTf",
        "module": "Control.ContStuff.MonadsTf",
        "name": "MonadTrans",
        "normalized": "",
        "package": "contstuff-monads-tf",
        "partial": "Monad Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/contstuff-monads-tf/docs/Control-ContStuff-MonadsTf.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.ContStuff.MonadsTf",
        "fct-package": "contstuff-monads-tf",
        "fct-signature": "IO a -\u003e m a",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Control ContStuff MonadsTf",
        "module": "Control.ContStuff.MonadsTf",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "contstuff-monads-tf",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/contstuff-monads-tf/docs/Control-ContStuff-MonadsTf.html#v:liftTF",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to \u003ccode\u003eControl.Monad.Trans.lift\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.ContStuff.MonadsTf",
        "fct-package": "contstuff-monads-tf",
        "fct-signature": "m a -\u003e t m a",
        "fct-source": "src/Control-ContStuff-MonadsTf.html#liftTF",
        "fct-type": "function",
        "title": "liftTF"
      },
      "index": {
        "description": "Interface to Control.Monad.Trans.lift",
        "hierarchy": "Control ContStuff MonadsTf",
        "module": "Control.ContStuff.MonadsTf",
        "name": "liftTF",
        "normalized": "a b-\u003ec a b",
        "package": "contstuff-monads-tf",
        "partial": "TF",
        "signature": "m a-\u003et m a"
      }
    }
  }
]